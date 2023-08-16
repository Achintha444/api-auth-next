import { Box, Button, Grid, Stack, Typography } from "@/utils/theme/muiLib";
import Footer from "../components/footer";
import Logo from "../components/logo";

export default function Home() {

    return (
        <Grid className='main-gradient sub-item' container>
            <Grid container item xs={12} alignItems='flex-end' justifyContent='center'>
                <Box>
                    <Stack spacing={10} justifyContent='center' alignItems='center'>
                        <Logo />
                        <Box>
                            <Typography variant='h5' color='text.secondary' align='center'>
                                <b>Signed in successfully.</b>
                            </Typography>
                        </Box>
                        <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            href="/"
                        >
                            Sign Out
                        </Button>
                    </Stack>

                </Box>
            </Grid>
            <Grid container item xs={12} justifyContent='center' alignItems='flex-end'>
                <Footer />
            </Grid>
        </Grid>
    )
}
