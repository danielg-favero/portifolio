import type { AppProps } from 'next/app'

import { GlobalStyles } from '../shared'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  )
}
