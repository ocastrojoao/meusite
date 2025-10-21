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
                    <Link href="https://www.mercadolivre.com.br/notebook-dell-156-fhd-i5-8gb-512gb-ssd-rtx-3050/p/MLB41533294?pdp_filters=item_id%3AMLB5812053522&from=gshop&matt_tool=59181783&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22117558002&matt_ad_group_id=172644201519&matt_match_type=&matt_network=g&matt_device=c&matt_creative=728942948124&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735125422&matt_product_id=MLB41533294-product&matt_product_partition_id=2389933078298&matt_target_id=aud-1967669456294:pla-2389933078298&cq_src=google_ads&cq_cmp=22117558002&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=22117558002&gclid=CjwKCAjw3tzHBhBREiwAlMJoUpHCJlkB0ZMagW_iva4Y_t5teO6Yel1M8PFidj4WtWNU7Y9uf1qLghoC2psQAvD_BwE"
                     isExternal color={linkColor}>Laptop</Link> - Dell G15 Core I7 RTX 3050
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    <Link href="https://www.mercadolivre.com.br/mouse-para-jogos-sem-fio-logitech-g903-hero-16k-com-sensor/p/MLB36460394?pdp_filters=item_id%3AMLB4130643605&from=gshop&matt_tool=52490821&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090354547&matt_ad_group_id=173090629916&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882734891&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735125422&matt_product_id=MLB36460394-product&matt_product_partition_id=2389848360845&matt_target_id=aud-1967669456294:pla-2389848360845&cq_src=google_ads&cq_cmp=22090354547&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=22090354547&gclid=CjwKCAjw3tzHBhBREiwAlMJoUlWj4UalC6BtWB-uY30EbGGWtjRH-2O8pATQCOybm97fWeip0BvxhxoCl4IQAvD_BwE"
                     isExternal color={linkColor}>Mouse</Link> - Logitech G903
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    <Link href="https://www.mercadolivre.com.br/teclado-gamer-redragon-fizz-rgb-mecnico-switch-marrom-abnt2/p/MLB23138650?pdp_filters=item_id:MLB4216639991"
                     isExternal color={linkColor}>Keyboard</Link> - Redragon fizz
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    <Link href="https://www.mercadolivre.com.br/fone-headset-gamer-sem-fio-nomen-pro-h838-pro-redragon-preto-preto/p/MLB53230665?pdp_filters=item_id:MLB5665749810"
                     isExternal color={linkColor}>Headset</Link> - Redragon Nomen Pro
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