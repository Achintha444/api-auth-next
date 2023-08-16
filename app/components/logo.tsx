import { Box, Stack, Typography } from '@/utils/theme/muiLib'
import Image from 'next/image'

export default function Logo() {
    return (
        <Stack spacing={2} justifyContent='center' alignItems='center'>
            <Image
                src="/images/logo.png"
                width={328.2}
                height={47.5}
                alt="logo"
            />
            <Box>
                <Typography variant='body1' color='text.secondary' align='center'>
                    API Authentication Sample
                </Typography>
            </Box>
        </Stack>
    )
}
