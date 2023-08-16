import '../../../styles/common.css';

import { Container, Stack, Typography } from '@/utils/theme/muiLib';

interface TitleProps {
    title: string;
}

export default function Title(props: TitleProps) {

    const { title } = props;

    return (
        <Container className='title-container'>
            <Stack className='issue-card-content' justifyContent='center'>
                <Typography variant='h4' color='primary' component='h1'>
                    {title}
                </Typography>
            </Stack>
        </Container>
    )
}
