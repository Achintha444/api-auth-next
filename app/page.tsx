import { Box, Button, Grid, Stack, Typography } from '@/utils/theme/muiLib';
import Image from 'next/image'
import Logo from './components/logo';

export default function Home() {
    return (
        <>
            <Grid className='main-gradient sub-item' container>
                <Grid container item xs={12} alignItems='flex-end' justifyContent='center'>
                    <Box>
                        <Stack spacing={6} justifyContent='center' alignItems='center'>
                            <Logo />
                            <Button variant='contained' size='large' >
                                Sign in
                            </Button>
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
        </>
    )
}
