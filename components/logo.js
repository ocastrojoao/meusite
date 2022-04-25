import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import Styled from '@emotion/styled'

const LogoBox = Styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-itens: center;
height: 30px;
line-height: 2px;

&:hover img{
    transform: rotate(20deg);
}
`
const Logo = () => {
    const footPrintImg = `/images/footprintt${useColorModeValue('', '-dark')}.png`

    return ( 
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={footPrintImg} width={20} height={20} alt="logo" />
                    <Text
                         color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                         fontFamily='M PLUS Rounded 1c", sans-serif'
                         fontWeight="bold"
                         ml={3}
                       >
                         João Castro
                         </Text>

                </LogoBox>
            </a>
        </Link>

    ) 
}

export default Logo