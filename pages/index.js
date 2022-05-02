import NextLink from 'next/link'
import { Button, Container, Box, Link, Heading, Image, useColorModeValue } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'




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
        <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
        Work
        
        </Heading>
        <Paragraph>Sou um desenvolvedor freelancer apaixonado por construir aplicações web.
            Tenho alguns projetos em andamento e trabalho na intenção de resolver problemas
            e encontrar soluções digitais para modernizar seu negócio.
            </Paragraph>
            <Box align="center" my={4}>
            <NextLink href="/works">
                <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                    Meu Portfólio
                </Button>
            </NextLink>
            </Box>    
        </Section>   
        <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
            Bio
        </Heading>
        <BioSection>
            <BioYear>
                1996
            </BioYear>
            Nascido no Paraná, Brasil
        </BioSection>

        <BioSection>
            <BioYear>
                2018
            </BioYear>
            Início da minha jornada em Brasília
        </BioSection>

        <BioSection>
            <BioYear>
                2020
            </BioYear>
            Começo dos estudos em desenvolvimento de software
        </BioSection>

        <BioSection>
            <BioYear>
                2022
            </BioYear>
            Início do primeiro projeto para web
        </BioSection>
        </Section> 
        </Container>
    )
}

export default Page