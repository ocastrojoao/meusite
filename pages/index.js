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
                mb={6}
                p={3}
                textAlign="center"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                css={{ backdropFilter: 'blur(10px)' }}
                    >
                    Hello, I&apos;m a software developer based in Brazil.
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        João Castro
                    </Heading>
                    <p>( Software Analyst / iOS Developer / Front End Developer )</p>
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
        <Paragraph>I'm a software developer focused on iOS and .NET applications! 
            I worked for 5 years in the financial/accounting area. 
            I have always enjoyed producing reports and contributing to the
            financial health of the organization I am a part of. Today I decided to migrate to 
            technology, understanding that I will continue to contribute effectively, 
            but now focusing on technological results and creating applications that make work easier.
            </Paragraph>
            <Box align="center" my={4}>
            <NextLink href="/works">
                <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                    My Portfolio
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
            Born in Parana, Brazil
        </BioSection>

        <BioSection>
            <BioYear>
                2016
            </BioYear>
            I started my studies in accounting sciences at UNASP
        </BioSection>

        <BioSection>
            <BioYear>
                2018
            </BioYear>
            I moved to Brasilia and started studying technology on my own
        </BioSection>

        <BioSection>
            <BioYear>
                2020
            </BioYear>
            I started my studies in software engineering in Brasilia
        </BioSection>

        <BioSection>
            <BioYear>
                2022
            </BioYear>
            In the year 2022 I started to structure a new web and mobile project.
            So far we have already decided part of the business rule and what the main features will be.
        </BioSection>
        </Section> 
        </Container>
    )
}

export default Page