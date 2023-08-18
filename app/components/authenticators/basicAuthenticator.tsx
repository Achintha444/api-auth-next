'use client';

import { authenticate } from '@/app/api/api';
import { AuthenticatorInterface } from '@/utils/models/authorize';
import { Button, Container, TextField } from '@/utils/theme/muiLib';
import { FormEventHandler, SyntheticEvent } from 'react';

interface BasicAuthenticatorPropsInterface extends AuthenticatorInterface {
    key: string;
}

export default function BasicAuthenticator(props: BasicAuthenticatorPropsInterface) {

    const { checkLoggedIn, flowId, nonce, authenticator } = props;

    const signinOnSubmit = (e: SyntheticEvent) => {

        e.preventDefault();

        authenticate(authenticator, flowId, nonce, { username: 'username', password: 'password' })
            .then((data) => checkLoggedIn(data))
            .catch((error) => console.error(error))
    }

    return (
        <Container component='main' maxWidth='xs'>
            <div>
                <form>
                    <TextField
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        id='username'
                        label='Username'
                        name='username'
                        autoComplete='username'
                    />
                    <TextField
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        name='password'
                        label='Password'
                        type='password'
                        id='password'
                        autoComplete='current-password'
                    />
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        onClick={signinOnSubmit}
                    >
                        Sign in
                    </Button>
                </form>
            </div>
        </Container>
    )
}
