import { Container, Box, Heading } from '@chakra-ui/react'



const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p="3" mb={6} align="center">
                Olá, eu sou desenvolvedor front end morando em Brasília!
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        João Castro
                    </Heading>
                    <p>(Artesão Digital / Desenvolvedor / Designer )</p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page