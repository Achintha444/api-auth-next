import { AuthenticatorInterface } from '@/utils/models/authorize';
import { Button, Container, TextField } from '@/utils/theme/muiLib';

interface BasicAuthenticatorPropsInterface extends AuthenticatorInterface {
    key: number;
}

export default function BasicAuthenticator(props: BasicAuthenticatorPropsInterface) {

    const { authenticator } = props;

    return (
        <Container component='main' maxWidth='xs'>
            <div>
                <form>
                    <TextField
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        id='username'
                        label='Username'
                        name='username'
                        autoComplete='username'
                    />
                    <TextField
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        name='password'
                        label='Password'
                        type='password'
                        id='password'
                        autoComplete='current-password'
                    />
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                    >
                        Sign in
                    </Button>
                </form>
            </div>
        </Container>
    )
}
