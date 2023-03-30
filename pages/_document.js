import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../lib/theme'

export default class Document extends NextDocument {
  render() {
   let theme = 1;
   theme = theme.config.initialColorMode;

    return (
      
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}