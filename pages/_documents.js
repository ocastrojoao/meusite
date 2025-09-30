// pages/_document.js (corrigido)

import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../lib/theme'

export default class Document extends NextDocument {
    render() {
        return (
            <Html lang="en">
                <Head />
                <body>  {/* <-- A CORREÇÃO ESTÁ AQUI */}
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <Main />
                    <NextScript />
                </body> {/* <-- E AQUI */}
            </Html>
        )
    }
}