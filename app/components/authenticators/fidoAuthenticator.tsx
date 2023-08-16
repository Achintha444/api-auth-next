import { AuthenticatorInterface } from '@/utils/models/authorize';
import { Button, Container } from '@/utils/theme/muiLib';
import React from 'react';

interface FidoAuthenticatorPropsInterface extends AuthenticatorInterface {
    key: string;
}

export default function FidoAuthenticator(props: FidoAuthenticatorPropsInterface) {
    return (
        <Container component='main' maxWidth='xs'>
            <Button
                fullWidth
                variant='outlined'
            >
                Sign in with Fido
            </Button>
        </Container>
    )
}
