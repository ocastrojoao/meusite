// pages/posts.js

import { Container, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { GridItem } from '../components/grid-item'
// import { WorkGridItem } from '../components/grid-item' // Não precisamos mais deste por enquanto

// Exemplo de imagem para um post
import thumbLinkedIn from '../public/images/thum1.jpeg' 

const Posts = () => (
  <Container>
    <Heading as="h3" fontSize={20} mb={4}>
      Blog Posts & Articles
    </Heading>
    <Text mb={4}>
      Aqui compartilho artigos que escrevi no LinkedIn e posts sobre tecnologia, 
      carreira e projetos que estou desenvolvendo.
    </Text>

    <SimpleGrid columns={[1, 1, 2]} gap={6}>
      {/* Post do LinkedIn */}
      <GridItem
        title="Treinamento com a equipe de dados do IATEC"
        thumbnail={thumbLinkedIn} 
        href="https://www.linkedin.com/feed/update/urn:li:activity:7366618904095289346" // <-- Lembre-se de colocar o link aqui quando postar
      >
        Ontem tivemos a satisfação de receber, em nosso escritório, parte da equipe responsável pela área de dados da instituição...
      </GridItem>
      
      {/* O outro card foi removido */}

    </SimpleGrid>
  </Container>
)

export default Posts