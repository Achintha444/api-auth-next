'use client';

import { Authenticator, AuthenticatorType, Authorize, IdpType } from '@/utils/models/authorize';
import { Box, Grid, Stack } from '@/utils/theme/muiLib';
import { useEffect, useState } from 'react';
import { authorize } from './api/api';
import BasicAuthenticator from './components/authenticators/basicAuthenticator';
import FidoAuthenticator from './components/authenticators/fidoAuthenticator';
import GoogleAuthenticator from './components/authenticators/googleAutenticator';
import TotpButtonAuthenticator from './components/authenticators/totpButtonAuthenticator';
import Footer from './components/footer';
import Logo from './components/logo';
import { useRouter } from 'next/navigation';
import LoadingScreen from '@/utils/common/components/loading';

async function initAuthorize() {
    return authorize();
}

export default  function Home() {

    const router = useRouter();

    const [ authorize, setAuthorize ] = useState<Authorize|null>(null);

    useEffect(() => {
        initAuthorize().then(
            (data) => { 
                setAuthorize(data) 

                if (data?.code) {
                    router.push('/signed_in');
                }
            }
        );
    }, [ router ])

    const checkLoggedIn = (data: Authorize): void => {
        setAuthorize(data) 

        if (data?.code) {
            router.push('/signed_in');
        }
    }

    const hideOrSignInText = (): boolean => authorize
        ? authorize.currentStep.authenticators.length <= 1 ? true : false
        : true

    const displayAuthenticators = (authenticator: Authenticator): JSX.Element | undefined => {
        switch (authenticator.authenticator) {
            case AuthenticatorType.BASIC_AUTH:
                return (
                    <>
                        <BasicAuthenticator
                            key={authenticator.authenticator} 
                            authenticator={authenticator} 
                            flowId={authorize?.flowId}
                            nonce={authorize?.nonce}
                            checkLoggedIn={checkLoggedIn}
                        />
                        {
                            !hideOrSignInText() &&
                            (
                                <Box>
                                    <p>
                                        Or Sign in with
                                    </p>
                                </Box>
                            )
                        }
                    </>
                )
            case AuthenticatorType.FIDO:
                return (
                    <FidoAuthenticator 
                        key={authenticator.authenticator} 
                        authenticator={authenticator}
                        flowId={authorize?.flowId}
                        nonce={authorize?.nonce}
                        checkLoggedIn={checkLoggedIn}
                    />
                )
            case AuthenticatorType.TOTP:
                return ( 
                    <TotpButtonAuthenticator 
                        key={authenticator.authenticator} 
                        authenticator={authenticator} 
                        flowId={authorize?.flowId}
                        nonce={authorize?.nonce}
                        checkLoggedIn={checkLoggedIn}
                    />
                )
            case AuthenticatorType.OPENID:
                return displayIdp(authenticator)
        }
    }

    const displayIdp = (authenticator: Authenticator): JSX.Element | undefined => {
        switch (authenticator.idp) {
            case IdpType.GOOGLE:
                return <GoogleAuthenticator 
                    key={authenticator.authenticator} 
                    authenticator={authenticator}
                    flowId={authorize?.flowId}
                    nonce={authorize?.nonce}
                    checkLoggedIn={checkLoggedIn}
                />
        }
    }

    return (
        <Grid className='main-gradient sub-item' container>
            <Grid container item xs={12} alignItems='flex-end' justifyContent='center'>
                <Box>
                    <Stack spacing={6} justifyContent='center' alignItems='center'>
                        <Logo />
                        <Stack spacing={2} justifyContent='center' alignItems='center'>
                            {
                                authorize?.currentStep
                                    ? authorize?.currentStep.authenticators?.map(
                                        (authenticator: Authenticator) => displayAuthenticators(authenticator))
                                    : <LoadingScreen />
                            }
                        </Stack>
                    </Stack>
                </Box>
            </Grid>
            <Grid container item xs={12} justifyContent='center' alignItems='flex-end'>
                <Footer />
            </Grid>
        </Grid>
    )
}
