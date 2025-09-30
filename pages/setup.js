// pages/setup.js

import { 
  Container, 
  Heading, 
  Link, 
  List, 
  ListItem,
  ListIcon,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'

const Setup = () => {
    const linkColor = useColorModeValue('teal.600', 'teal.300')

    return (   
        <Container>
            <Heading as="h3" fontSize={20} mb={4} mt={5}>
                My Setup
            </Heading>

            <Text color={useColorModeValue('gray.700', 'whiteAlpha.800')}>
                A list of my equipment, apps I use for productivity, playlists and more.
            </Text>

            <Heading as="h4" variant="section-title" fontSize={18} mt={6} mb={4}>
                Equipaments
            </Heading>
            <List spacing={2}>
                <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    <Link href="#" isExternal color={linkColor}>Laptop</Link> - MacBook Air 13 inch 2017
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    <Link href="#" isExternal color={linkColor}>Mouse</Link> - Logitech G903
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    <Link href="#" isExternal color={linkColor}>Keyboard</Link> - Logitech G512
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    <Link href="#" isExternal color={linkColor}>Headset</Link> - Logitech H390
                </ListItem>
            </List>

            <Heading as="h4" variant="section-title" fontSize={18} mt={6} mb={4}>
                Apps
            </Heading>    
            <List spacing={2}>
                <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    <Link href="https://www.notion.so/" isExternal color={linkColor}>Notion</Link>
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    <Link href="https://www.figma.com/" isExternal color={linkColor}>Figma</Link>
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    <Link href="https://music.apple.com/" isExternal color={linkColor}>Apple Music</Link>
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    <Link href="https://www.beekeeperstudio.io/" isExternal color={linkColor}>Beekeeper Studio</Link>
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    <Link href="https://cron.com/" isExternal color={linkColor}>Cron</Link>
                </ListItem>
            </List>

            <Heading as="h4" variant="section-title" fontSize={18} mt={6} mb={4}>
                Books
            </Heading> 
            <List spacing={2}>
                <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    <Link href="#" isExternal color={linkColor}>O Programador Pragmático</Link> - De aprendiz a mestre
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    <Link href="#" isExternal color={linkColor}>Código Limpo</Link> - Robert Cecil Martin
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    <Link href="#" isExternal color={linkColor}>O Programador Apaixonado</Link> - Chad Fowler
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    <Link href="#" isExternal color={linkColor}>Orientação a Objetos e SOLID</Link> - Mauricio Aniche
                </ListItem>
            </List> 
        </Container>
    )    
} 
export default Setup