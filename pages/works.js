import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbBeehive from '../public/images/beehive.png'
import thumbPlaylist from '../public/images/applemusic.png'



const Works = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Trabalhos
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section>
                        <WorkGridItem id="beehive" title="Beehive" thumbnail={thumbBeehive}>
                            Uma empresa focada na construção digital e no desenvolvimento de aplicações
                            para modernizar seu negócio.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="playlist" title="ApplePlaylist" thumbnail={thumbPlaylist}>
                            Músicas que uso para estudar e trabalhar. Curta a playlist e envie dicas de músicas.
                        </WorkGridItem>
                    </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works