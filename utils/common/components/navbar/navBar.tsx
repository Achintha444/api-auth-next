'use client';

import { RootState } from '@/redux/store';
import { AppBar, Container, Stack, Toolbar, Typography } from '@/utils/theme/muiLib';
import { useSelector } from 'react-redux';
import NavBarItems from './components/navBarItems';
import ProfileItems from './components/profileItems';

export default function NavBar(): JSX.Element {
    
    const allowedScopes = useSelector((state: RootState) => state.authReducer.allowedScopes);

    return (
        <AppBar position='static' elevation={0}>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <Typography
                        variant='h6'
                        color='secondary'
                    >
                        <b>IMD</b>
                    </Typography>
                    <Container maxWidth='xl'>
                        <Stack direction='row' justifyContent='space-between'>
                            <Stack direction='row' spacing={2}>
                                <NavBarItems allowedScopes={allowedScopes as string[]} />
                            </Stack>
                            <Stack direction='row'>
                                <ProfileItems />
                            </Stack>
                        </Stack>
                    </Container>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
