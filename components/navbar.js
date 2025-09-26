// components/navbar.js

import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, target, children, ...props }) => {
    const active = path === href
    // <-- AJUSTE 1: Mudei 'gray200' para 'gray.800' para melhor contraste no tema claro
    const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900') 
    const activeBgColor = useColorModeValue('teal.500', 'teal.200')
    const activeColor = useColorModeValue('white', 'gray.800')
    
    return (
        <NextLink href={href} passHref scroll={false}>
            <Link
                p={2}
                bg={active ? activeBgColor : undefined}
                color={active ? activeColor : inactiveColor}
                borderRadius="md"
                target={target}
                {...props}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props
    const activeBgColor = useColorModeValue('teal.500', 'teal.200')

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            css={{ backdropFilter: 'blur(10px)' }} // Recomendo usar a prop 'css'
            zIndex={2} // Aumentei o zIndex para garantir que fique sempre na frente
            {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                wrap="wrap"
                align="center"
                justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>

                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                    <LinkItem href="/works" path={path}>
                        Works
                    </LinkItem>
                    <LinkItem href="/posts" path={path}>
                        Posts
                    </LinkItem>
                    <LinkItem href="/setup" path={path}>
                        Setup
                    </LinkItem>
                </Stack>

                <Box flex={1} align="right">
                    <ThemeToggleButton />
                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu isLazy id="navbar-menu">
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                // <-- AJUSTE 3: Corrigido para 'aria-label'
                                aria-label="Options" 
                            />
                            <MenuList>
                                {/* <-- AJUSTE 2: Lógica de 'ativo' adicionada aos MenuItems --> */}
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link} bg={path === '/' ? activeBgColor : undefined}>
                                        About
                                    </MenuItem>
                                </NextLink>
                                <NextLink href="/works" passHref>
                                    <MenuItem as={Link} bg={path === '/works' ? activeBgColor : undefined}>
                                        Works
                                    </MenuItem>
                                </NextLink>
                                <NextLink href="/posts" passHref>
                                    <MenuItem as={Link} bg={path === '/posts' ? activeBgColor : undefined}>
                                        Posts
                                    </MenuItem>
                                </NextLink>
                                <NextLink href="/setup" passHref>
                                    <MenuItem as={Link} bg={path === '/setup' ? activeBgColor : undefined}>
                                        Setup
                                    </MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar