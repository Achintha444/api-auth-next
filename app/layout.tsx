import MainGrid from '@/utils/common/components/mainGrid';
import Theme from '@/utils/theme/themeProvider';
import '../styles/globals.css';

export const metadata = {
    title: 'API Auth Sample',
    description: 'Demo application to demo API authentication',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <Theme>
                <body>
                    <MainGrid>
                        {children}
                    </MainGrid>
                </body>
            </Theme>
        </html>
    )
}
