// components/bio.js

import { Box, Text, useColorModeValue } from '@chakra-ui/react'

export const BioYear = (props) => (
    <Text as="span" fontWeight="bold" mr={4}>
        {props.children}
    </Text>
)

export const BioSection = (props) => (
    <Box
        display="flex"
        alignItems="flex-start"
        mb={4}
        pl={4} // Padding à esquerda para dar espaço para a linha
        borderLeft="2px solid" // A linha vertical da timeline
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        position="relative"
        _before={{ // O ponto (dot) na timeline
            content: '""',
            position: 'absolute',
            left: '-7px', // Posição do ponto sobre a linha
            top: '6px',
            width: '12px',
            height: '12px',
            borderRadius: 'full',
            bg: useColorModeValue('teal.500', 'teal.300'),
            border: '2px solid',
            borderColor: useColorModeValue('white', 'gray.800')
        }}
    >
        {/* Adicionamos um Box para o conteúdo para que ele fique à direita da linha */}
        <Box>
            {props.children}
        </Box>
    </Box>
)