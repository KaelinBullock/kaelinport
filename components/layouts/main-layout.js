import { motion } from 'framer-motion'
import Head from 'next/head'
import Navbar from '../navbar.js'
import { GridItemStyle } from '../grid-item.js'
import { Box, Container } from '@chakra-ui/react'
import NoSsr from '../no-ssr.js';
import VoxelDog from '../voxel-dog.js'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}

const Layout = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Kaelin's Homepage</title>
        </Head>

        <Navbar path={router.asPath} />

        <Container maxW="full" pt={14}>
          <NoSsr>
              {/* <VoxelDog /> */}
          </NoSsr>
          {children}
        </Container>

    </Box>
  )
}

export default Layout