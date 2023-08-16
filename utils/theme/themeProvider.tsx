'use client';

import { ReactElement } from 'react';
import { appTheme } from './theme';
import { ThemeProvider } from './muiLib';

interface ThemePropsInterface {
    children: ReactElement;
}

export default function Theme({ children }: ThemePropsInterface) {
  return (
    <ThemeProvider theme={ appTheme }>
      { children }
    </ThemeProvider>
  );
}