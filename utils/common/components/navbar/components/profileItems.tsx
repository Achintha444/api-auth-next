'use client';

import { ProfileItem } from '@/utils/common/models/navBar';
import { AuthController } from '@/utils/controller/authController';
import { Avatar, IconButton, Menu, MenuItem, Snackbar, Tooltip, Typography } from '@/utils/theme/muiLib';
import { useState } from 'react';
import '../../../../../styles/common.css'
import { profileItems } from '../navBarItems';

export default function ProfileItems(): React.ReactNode {

    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const [isLogoutSuccessSnackbarOpen, setIsLogoutSuccessSnackbarOpen] = useState(false);
    const [isLogoutErrorSnackbarOpen, setIsLogoutErrorSnackbarOpen] = useState(false);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const logoutHandler = () => {
        AuthController.signOut().then(() => {
            setIsLogoutSuccessSnackbarOpen(true);
        }).catch(() => {
            setIsLogoutErrorSnackbarOpen(true);
        });
    }

    const profileItemsOnClick = (profileItem: ProfileItem) => {
        switch (profileItem.key) {
            case 'sign_out':
                logoutHandler();
                break;
        }
    }

    return (
        <>
            <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenUserMenu}>
                    <Avatar alt='Remy Sharp' />
                </IconButton>
            </Tooltip>
            <Menu
                id='profile-menu'
                className='profile-menu'
                anchorEl={anchorElUser}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {profileItems.map((profileItem: ProfileItem) => (
                    <MenuItem key={profileItem.key} onClick={()=>profileItemsOnClick(profileItem)}>
                        <Typography textAlign='center'>{profileItem.name}</Typography>
                    </MenuItem>
                ))}
            </Menu>

            <Snackbar
                open={isLogoutSuccessSnackbarOpen}
                message="User signed out successfully"
            />

            <Snackbar
                open={isLogoutErrorSnackbarOpen}
                message="Error signing out user"
            />
        </>
    );
}
