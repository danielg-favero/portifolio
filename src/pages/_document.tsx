import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* <!-- Font Rawline--> */}
        <link href="http://fonts.cdnfonts.com/css/rawline" rel="stylesheet" />

        {/* <!-- Fontawesome--> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
        />
      </Head>
      <body>
        <Main />

        <NextScript />
      </body>
    </Html>
  )
}
