// components/layouts/main.js

import Head from 'next/head'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import { useRouter } from 'next/router' // <-- 1. IMPORTE O useRouter

const Main = ({ children }) => { // <-- 2. REMOVA 'router' DAQUI
    const router = useRouter() // <-- 3. ADICIONE ESTA LINHA AQUI DENTRO

    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Joao Castro - Homepage</title>
            </Head>

            {/* Agora o 'router' existe porque foi criado na linha 10 */}
            <Navbar path={router.asPath} />

            <Container maxWidth="container.md" pt={14}>
                {children}
            </Container>
        </Box>
    )
}

export default Main