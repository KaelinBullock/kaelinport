import { 
   Button,
   Container,
   Box,
   Heading,
   Image,
   useColorModeValue,
   chakra, 
   Link
} from '@chakra-ui/react';
import Section from '../components/section.js'
import Paragraph from '../components/paragraph.js'
import { ChevronRightIcon } from '@chakra-ui/icons';
import { BioSection, BioYear } from '../components/bio.js';

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
            <Paragraph>
               Hello, I'm a full stack developer, from Little Rock Arkansas.
               Feel Free to contact me. My focus is in back-end, but I also have knowledge of front end.
               My best skills are Java and Typescript.  I have made many APIs.
               <Link href='/works/music'>
                  Music
               </Link>
            </Paragraph>
            <Box align='center' my={4}>
               <Link href='/works'>
                  <Button rightIcon={<ChevronRightIcon />} colorScheme='teal'>
                     My Portfolio
                  </Button>
               </Link>
            </Box>
        </Section>

        <Section delay={0.2}>
            <Heading as='h3' variant='section-title'>
               Bio
            </Heading>
            <BioSection>
               <BioYear>1994</BioYear>
               Born in Little Rock, Arkansas
            </BioSection>
            <BioSection>
               <BioYear>2018</BioYear>
               Received Computer Science degree from University of Arkansas
            </BioSection>
        </Section>
      </Container>
   )
}

export default Page;