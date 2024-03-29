import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://app.snipcart.com" />
          <link rel="preconnect" href="https://cdn.snipcart.com" />
          <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script async src="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.js" />
          //<div hidden id="snipcart" data-api-key="NGQ4MTY3M2MtYWJhNy00MDEyLThiMTYtMWIxOTQyNjJkN2M4NjM3NTQ5NTI4MDE1MDM0MDQz" />
          <div hidden id="snipcart" data-api-key={process.env.NEXT_PUBLIC_SNIPCART_API_KEY} />
        </body>
      </Html>
    )
  }
}
export default MyDocument