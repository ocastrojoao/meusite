// pages/works/[id].js

import { Container, Badge, Link, List, ListItem, Heading } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work' // Precisaremos criar esses componentes
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article' // Se você tiver um componente de layout

const Work = () => {
    return (
        // <Layout title="Beehive"> // Se tiver um layout
        <Container>
            <Title>
                Beehive <Badge>2025</Badge>
            </Title>
            <P>
                Uma empresa focada na construção digital e no desenvolvimento de aplicações
                para modernizar seu negócio. Aqui você detalha o que o projeto é, o problema que ele resolve, e qual foi sua contribuição.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://www.exemplo.com/">
                        https://www.exemplo.com/ <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Plataforma</Meta>
                    <span>Web, Mobile</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>React, Next.js, Python, Flutter</span>
                </ListItem>
            </List>

            <WorkImage src="/images/beehive.png" alt="Beehive" />
            <WorkImage src="/images/beehive_02.png" alt="Beehive" /> // Adicione mais imagens

        </Container>
        // </Layout>
    )
}

export default Work