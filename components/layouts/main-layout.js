import Head from 'next/head';
import Navbar from '../navbar.js';
import { Box, Container } from '@chakra-ui/react';
import NoSsr from '../no-ssr.js';

const Layout = ({ children, router }) => {
  return (
    <Box as="main" pb={8} px='8rem'>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Kaelin&#39;s Homepage</title>
        </Head>

        <Navbar path={router.asPath} />

        {/* <Container maxW="full" pt={16} pl={0}> */}
          {/* <NoSsr> */}
              {/* <VoxelDog /> */}
          {/* </NoSsr> */}
          <Box pt={16}>
          {children}
          </Box>
        {/* </Container> */}

    </Box>
  );
};

export default Layout;