import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Image } from '@chakra-ui/react'
import ImageCard from '../components/ImageCard'
import Button from '../components/Button'
import { useDataBeastsContext } from '../context/DataBeastsContext'
import faviconImage from '../public/databeasts_favicon.png'
import titleImage from '../public/databeasts_website_gif.gif'
import backgroundImage from '../public/webbackground.png'
import aboutImage from '../public/about.gif'
import discordImage from '../public/discord.gif'
import shopImage from '../public/shop.gif'
import twitterImage from '../public/twitter.gif'
import viewImage from '../public/view.gif'
import syncButtonImage from '../public/sync_button.gif'
import { Container, VStack, HStack, Box, Wrap, WrapItem } from '@chakra-ui/react'

const Home: NextPage = () => {
  const { userAddress, syncWallet, desyncWallet } = useDataBeastsContext();

  return (
    <Container maxW="100vw" h="100vh" p={0}>
      <Head>
        <title>DataBeasts</title>
        <meta name="description" content="Interact With Your DataBeasts" />
        <link rel="icon" href={faviconImage.src} />
      </Head>

      <VStack w="100vw" h="100vh" p={10} bgSize="cover" bgImage={backgroundImage.src} bgPosition="center" bgRepeat="no-repeat" spacing={10}>
        <Box maxW="850px">
          <Image width={[300, 600, 850]} height={[150, 300, 425]} className="titleImage" src={titleImage.src} alt="DataBeasts Title Image" />
        </Box>

        <HStack maxW="100vw">
          <Wrap spacing={[5, 7.5, 9]} justify="center">
            <WrapItem>
              <Link href="/about" passHref>
                <ImageCard imageSrc={aboutImage.src} imageAlt="About DataBeasts" caption="About" />
              </Link>
            </WrapItem>

            <WrapItem>
              <Link href="/collection" passHref>
                <ImageCard imageSrc={viewImage.src} imageAlt="View Your DataBeasts" caption="View" />
              </Link>
            </WrapItem>

            <WrapItem>
              <ImageCard imageSrc={shopImage.src} imageAlt="Buy DataBeasts" caption="Shop" href="https://objkt.com/profile/databeasts/created" />
            </WrapItem>

            <WrapItem>
              <ImageCard imageSrc={discordImage.src} imageAlt="DataBeasts Discord" caption="Discord" href="http://discord.gg/gXd7FHn4" />
            </WrapItem>

            <WrapItem>
              <ImageCard imageSrc={twitterImage.src} imageAlt="DataBeasts Twitter" caption="Twitter" href="https://mobile.twitter.com/databeasts" />
            </WrapItem>
          </Wrap>
        </HStack>
      </VStack>
    </Container>
  )
}

export default Home