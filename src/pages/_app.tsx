import type { AppProps } from 'next/app'

import { UiProvider } from '@plataforma-ted10523/components-web'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UiProvider>
      <Component {...pageProps} />
    </UiProvider>
  )
}
