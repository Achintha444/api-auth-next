import { AuthenticatorInterface } from '@/utils/models/authorize';
import { Button, Container } from '@/utils/theme/muiLib';
import React from 'react';

interface GoogleAuthenticatorPropsInterface extends AuthenticatorInterface {
    key: string;
}

export default function GoogleAuthenticator(props: GoogleAuthenticatorPropsInterface) {
    return (
        <Container component='main' maxWidth='xs'>
            <Button
                fullWidth
                variant='outlined'
            >
                Sign in with Google
            </Button>
        </Container>
    )
}
