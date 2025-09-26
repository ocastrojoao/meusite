// pages/works/[id].js

import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
// Vamos supor que você criou esses componentes simples para estilização
import { Title, WorkImage, Meta } from '../../components/work' 
import P from '../../components/paragraph'

const Work = () => {
    return (
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
            {/* <WorkImage src="/images/beehive_02.png" alt="Beehive" /> */}

        </Container>
    )
}

export default Work

// ========= ADICIONE ESTAS DUAS FUNÇÕES NO FINAL DO ARQUIVO =========

// Esta função diz ao Next.js quais rotas/páginas ele deve gerar no build
export async function getStaticPaths() {
  return {
    paths: [
      // Aqui listamos todos os seus projetos.
      // O 'id' deve ser o mesmo nome que você usa no WorkGridItem
      { params: { id: 'beehive' } } 
      // Quando tiver um novo projeto, adicione aqui:
      // { params: { id: 'meu-novo-projeto' } }
    ],
    // fallback: false significa que qualquer rota não listada aqui resultará em uma página 404
    fallback: false 
  }
}

// Esta função busca os dados para CADA página gerada acima
export async function getStaticProps() {
  // No futuro, você pode buscar dados de um banco de dados ou API aqui
  // usando o 'params.id' para saber qual projeto buscar.
  // Por enquanto, como o conteúdo é estático no próprio componente,
  // podemos apenas retornar props vazias.
  return {
    props: {}
  }
}