import { authenticate } from '@/app/api/api';
import { AuthenticatorInterface } from '@/utils/models/authorize';
import { Button, Container } from '@/utils/theme/muiLib';
import React, { SyntheticEvent } from 'react';

interface GoogleAuthenticatorPropsInterface extends AuthenticatorInterface {
    key: string;
}

export default function GoogleAuthenticator(props: GoogleAuthenticatorPropsInterface) {

    const { checkLoggedIn, flowId, nonce, authenticator } = props;

    const signinOnSubmit = (e: SyntheticEvent) => {

        e.preventDefault();

        authenticate(authenticator, flowId, nonce,
            {
                code: "eiaudfnolkmvqaesfc9809AS0F9COQASLMFCQWSAF",
                state: "aaed0615-104b-468c-aab9-c75517c9919e,OIDC"
            })
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
                Sign in with Google
            </Button>
        </Container>
    )
}
