import { motion } from 'framer-motion'
import Head from 'next/head'
import { GridItemStyle } from '../grid-item.js'
import { Box, Container } from '@chakra-ui/react'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}

const Layout = ({ children, title }) => {
  return (
    // <motion.article
    //   initial="hidden"
    //   animate="enter"
    //   exit="exit"
    //   variants={variants}
    //   transition={{ duration: 0.4, type: 'easeInOut' }}
    //   style={{ position: 'relative' }}
    // >
      <Box as="main" pb={8}>

          <Container maxW="full" w='full' pt={14}>
              {children}
          </Container>
          {/* <GridItemStyle /> */}
        </Box>
      // </motion.article>
  )
}

export default Layout