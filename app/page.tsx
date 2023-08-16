import { Box, Button, Grid, Stack } from '@/utils/theme/muiLib';
import Logo from './components/logo';
import { authorize } from './api/api';
import { Authenticator, Authorize } from '@/utils/models/authorize';
import BasicAuthenticator from './components/authenticators/basicAuthenticator';

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

    return (
        <Grid className='main-gradient sub-item' container>
            <Grid container item xs={12} alignItems='flex-end' justifyContent='center'>
                <Box>
                    <Stack spacing={6} justifyContent='center' alignItems='center'>
                        <Logo />
                        {
                            authenticators?.map((authenticator: Authenticator) => 
                                <BasicAuthenticator key={1} authenticator={authenticator} />)
                        }
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
