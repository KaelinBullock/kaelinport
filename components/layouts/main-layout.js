import Head from 'next/head';
import Navbar from '../navbar.js';
import { Box, Container } from '@chakra-ui/react';
import NoSsr from '../no-ssr.js';

const Layout = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Kaelin&#39;s Homepage</title>
        </Head>

        <Navbar path={router.asPath} />

        <Container maxW="full" pt={14}>
          <NoSsr>
              {/* <VoxelDog /> */}
          </NoSsr>
          {children}
        </Container>

    </Box>
  );
};

export default Layout;