import { AuthenticatorInterface } from '@/utils/models/authorize';
import { Button, Container } from '@/utils/theme/muiLib';
import React from 'react';

interface TotpButtonAuthenticatorPropsInterface extends AuthenticatorInterface {
    key: string;
}

export default function TotpButtonAuthenticator(props: TotpButtonAuthenticatorPropsInterface) {
    return (
        <Container component='main' maxWidth='xs'>
            <Button
                fullWidth
                variant='outlined'
            >
                Sign in with TOTP
            </Button>
        </Container>
    )
}