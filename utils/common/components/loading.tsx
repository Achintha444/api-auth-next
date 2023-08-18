import { CircularProgress, Container, Stack } from '@/utils/theme/muiLib';
import '../../../styles/common.css';

export default function LoadingScreen() {

    return (
        <Container>
            <Stack className='loading-stack' justifyContent='center' alignItems='center'>
                <CircularProgress size={ 60 }/>
            </Stack>
        </Container>
    )
}
