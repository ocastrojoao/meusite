import { Box, Container, Heading } from '@chakra-ui/react'
import Section from '../components/section'


const Setup = () => {
    return (   
        <Container>
            <Heading as="h3" fontSize={20} mb={4} mt={5}>
                My Setup
            </Heading>

            <p>I will provide a list of my equipment, apps I use for productivity, playlists and more.</p>

            <Box display={{ md: 'flex' }} mt={5}>
                <Section>

                    <Heading as="h5" fontSize={18} mb={4} mt={5} ml={0}>
                        Equipaments
                    </Heading>
                        <ul>
                            <li>Laptop - MacBook Air 13 inch 2017</li>
                            <li>Mouse - Logitech G903</li>
                            <li>Teclado - Logitech G512</li>
                            <li>Headset - Logitech H390</li>

                        </ul>

                    <Heading as="h5" fontSize={18} mb={4} mt={5} ml={0}>
                        Apps
                    </Heading>    
                        <ul>
                            <li>Notion</li>
                            <li>Figma</li>
                            <li>Apple Music</li>
                            <li>Beekeper</li>
                            <li>Cron</li>
                        </ul>

                    <Heading as="h5" fontSize={18} mb={4} mt={5} ml={0}>
                        Books
                    </Heading> 
                        <ul>
                            <li>O programador Pragmático - De aprendiz a mestre</li>
                            <li>Código Limpo - Robert Cecil</li>
                            <li>O Programador Apaixonado - Chad Fowler</li>
                            <li>Orientação a Objetos e SOLID - Mauricio Aniche</li>  
                        </ul> 

                </Section>
            </Box>
        </Container>
     
    )    
    
} 
export default Setup