import { pink } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const appTheme = createTheme({
    palette: {
        primary: {
            main: '#F37321',
            contrastText: '#FFFFFF'
        },
        secondary: {
            main: '#F2F2F2',
        },
        text: {
            primary: '#242424',
            secondary: '#667080',
        },
        divider: '#000000',
        background: {
            default: '#F6EEE3',
            paper: '#F6EEE3'

        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                color: 'primary',
                disableElevation: true
            }
        },
        MuiSnackbar: {
            defaultProps: {
                anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
                autoHideDuration: 3000
            }
        },	
    }
});