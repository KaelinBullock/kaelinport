import { Container, Box, Heading } from '@chakra-ui/react';
const Page = () => {
   return (
      <Container>
         <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
            Hello, I&apos;m a full-stack develooper based in the US!
         </Box>

         <Box display={{md: 'flex'}}>
            <Box flexGrow={1}>
               <Heading as="h2" variant="page-title">
                  Kaelin Bullock
               </Heading>
               <p>Java / Angular / API</p>
            </Box>
         </Box>
      </Container>
   )
}

export default Page;