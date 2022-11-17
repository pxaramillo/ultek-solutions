import { Html, Head, Main, NextScript } from 'next/document'
import Header from '../components/header'

export default function Document(children) {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
