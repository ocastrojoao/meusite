import { Container, Box, Heading, Image, useColorModeValue } from '@chakra-ui/react'



const Page = () => {
    return (
        <Container>
            <Box 
            borderRadius="lg" 
            bg="{useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}" 
            p="3" 
            mb={6} 
            align="center">
                Olá, eu sou desenvolvedor front end morando em Brasília!
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        João Castro
                    </Heading>
                    <p>(Artesão Digital / Desenvolvedor / Designer )</p>
                </Box>
                <Box 
                flexShrink={0} 
                mt={{base: 4, md: 0}} 
                ml={{md: 6}} 
                align="center"
                >
                    <Image 
                    borderColor="whiteAlpha.800" 
                    borderWidth={2} 
                    boderStyle="solid" 
                    maxWidth="100px" 
                    display="inline-block" 
                    borderRadius="full" 
                    src="/images/joao.jpg" 
                    alt="profile image" 
                    />
                </Box>
            </Box>
        </Container>
    )
}

export default Page