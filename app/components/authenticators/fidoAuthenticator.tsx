import { authenticate } from '@/app/api/api';
import { AuthenticatorInterface } from '@/utils/models/authorize';
import { Button, Container } from '@/utils/theme/muiLib';
import React, { SyntheticEvent } from 'react';

interface FidoAuthenticatorPropsInterface extends AuthenticatorInterface {
    key: string;
}

export default function FidoAuthenticator(props: FidoAuthenticatorPropsInterface) {

    const { checkLoggedIn, flowId, nonce, authenticator } = props;

    const signinOnSubmit = (e: SyntheticEvent) => {

        e.preventDefault();

        authenticate(authenticator, flowId, nonce, { username: 'username', password: 'password' })
            .then((data) => checkLoggedIn(data))
            .catch((error) => console.error(error))
    }

    return (
        <Container component='main' maxWidth='xs'>
            <Button
                fullWidth
                variant='outlined'
                onClick={signinOnSubmit}
            >
                Sign in with Fido
            </Button>
        </Container>
    )
}
