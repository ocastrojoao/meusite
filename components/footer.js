import { Box, HStack, Link, Icon } from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'

const Footer = () => {
  return (
    <Box align="center" opacity={0.6} fontSize="sm" p={4} mt={8}>
      <HStack spacing={4} justify="center" mb={2}>
        <Link href="https://github.com/ocastrojoao" isExternal>
          <Icon as={FaGithub} w={6} h={6} />
        </Link>
        <Link href="https://www.linkedin.com/in/ocastrojoao" isExternal>
          <Icon as={FaLinkedin} w={6} h={6} />
        </Link>
        <Link href="mailto:ocastrojoao@gmail.com">
          <Icon as={IoMail} w={6} h={6} />
        </Link>
      </HStack>
      &copy; {new Date().getFullYear()} João Castro. All Rights Reserved.
    </Box>
  )
}

export default Footer