import { Container, Box, Heading, Image, useColorModeValue, chakra } from '@chakra-ui/react';
import Section from '../components/section.js'
const ProfileImage = chakra(Image, {
   shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
 })

const Page = () => {
   return (
      <Container>
         <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
            Hello, I&apos;m a full-stack develooper based in the US!
         </Box>

         <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
         >
            <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
            >
               <ProfileImage
               src="/images/kaelincrop.jpg"
               alt="Profile image"
               borderRadius="full"
               width="100"
               height="100"
               />
            </Box>
        </Box>
        <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
               Work
            </Heading>
            <p>
               Paragraph
            </p>
        </Section>
      </Container>
   )
}

export default Page;