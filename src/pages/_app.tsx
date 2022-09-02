import 'src/lib/tailwind.css'
import {
  // eslint-disable-next-line import/named
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { Layout } from 'src/components/layout/layout'

function MyApp({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light')
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default MyApp
