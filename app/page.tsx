import { Box, Button, Grid, Stack } from '@/utils/theme/muiLib';
import Logo from './components/logo';
import { authorize } from './api/api';
import { Authenticator, AuthenticatorType, Authorize, IdpType } from '@/utils/models/authorize';
import BasicAuthenticator from './components/authenticators/basicAuthenticator';
import TotpButtonAuthenticator from './components/authenticators/totpButtonAuthenticator';
import FidoAuthenticator from './components/authenticators/fidoAuthenticator';
import GoogleAuthenticator from './components/authenticators/googleAutenticator';

async function getData() {
    return authorize();
}

export default async function Home() {

    let authenticators: void | Authenticator[] | undefined = await getData()
        .then((data: Authorize | undefined) => data?.currentStep.authenticators)
        .catch((error) => {
            console.error(error);
        }
        );

    const hideOrSignInText = (): boolean => authenticators
        ? authenticators.length <= 1 ? true : false
        : true

    const displayAuthenticators = (authenticator: Authenticator): JSX.Element | undefined => {
        switch (authenticator.authenticator) {
            case AuthenticatorType.BASIC_AUTH:
                return (
                    <>
                        <BasicAuthenticator key={authenticator.authenticator} authenticator={authenticator} />
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
                return <FidoAuthenticator key={authenticator.authenticator} authenticator={authenticator} />
            case AuthenticatorType.TOTP:
                return <TotpButtonAuthenticator key={authenticator.authenticator} authenticator={authenticator} />
            case AuthenticatorType.OPENID:
                return displayIdp(authenticator)
        }
    }

    const displayIdp = (authenticator: Authenticator): JSX.Element | undefined => {
        switch (authenticator.idp) {
            case IdpType.GOOGLE:
                return <GoogleAuthenticator key={authenticator.authenticator} authenticator={authenticator} />
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
                                authenticators?.map((authenticator: Authenticator) => displayAuthenticators(authenticator))
                            }
                        </Stack>
                    </Stack>

                </Box>
            </Grid>
            <Grid container item xs={12} justifyContent='center' alignItems='flex-end'>
                <Box>
                    <p>
                        A sample application to demo the API Authentication
                    </p>
                </Box>
            </Grid>
        </Grid>
    )
}
