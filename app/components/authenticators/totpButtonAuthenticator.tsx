import { authenticate } from '@/app/api/api';
import { AuthenticatorInterface } from '@/utils/models/authorize';
import { Button, Container } from '@/utils/theme/muiLib';
import React, { SyntheticEvent } from 'react';

interface TotpButtonAuthenticatorPropsInterface extends AuthenticatorInterface {
    key: string;
}

export default function TotpButtonAuthenticator(props: TotpButtonAuthenticatorPropsInterface) {

    const { checkLoggedIn, flowId, nonce, authenticator } = props;

    const signinOnSubmit = (e: SyntheticEvent) => {

        e.preventDefault();

        authenticate(authenticator, flowId, nonce, {tokenResponse: "123456"})
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
                Sign in with TOTP
            </Button>
        </Container>
    )
}
