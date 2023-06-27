import { 
   Button,
   Container,
   Box,
   Heading,
   Image,
   useColorModeValue,
   chakra, 
   Link,
   useClipboard
} from '@chakra-ui/react';
import Section from '../components/section.js';
import Paragraph from '../components/paragraph.js';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Layout from '../components/layouts/article.js';
import { BioSection, BioYear } from '../components/bio.js';
import React from 'react';

const ProfileImage = chakra(Image, {
   shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
 });

const Page = () => {
   // const placeholder = 'text to be copied...';
   const { onCopy, setValue, hasCopied } = useClipboard('');

   React.useEffect(() => {
      setValue('bullockkaelin@gmail.com');
   }, []);
   

   return (
      <Layout>
         <Container pt={4}>
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
                     Hello, I&#39;m a full stack developer, from Little Rock Arkansas.
                     Feel Free to contact me. My focus is in back-end, but I can easily switch between back-end and front-end.
                     My best skills are Java and Typescript.  I have created many APIs. Please take a look at my porfolio. <br/> My email: BullockKaelin@gmail.com
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
                     Skills
                  </Heading>
                  <BioSection>
                     <BioYear>Java</BioYear>
                     My strongest skill. I have created many APIs
                  </BioSection>
                  <BioSection>
                     <BioYear>Spring</BioYear>
                     The framework I am most familiar with.
                  </BioSection>
                  <BioSection>
                     <BioYear>Javascript</BioYear>
                     Many years of experience with javascript and typescript
                  </BioSection>
                  <BioSection>
                     <BioYear>Angular</BioYear>
                     The front end framework I used for most of my career
                  </BioSection>
                  <BioSection>
                     <BioYear>React</BioYear>
                     I prefer using React and NextJs for the front-end.  My portfolio projects use React.
                  </BioSection>
                  <BioSection>
                     <BioYear>SQL</BioYear>
                     I have an understanding of SQL and have used it in many Java Spring projects
                  </BioSection>
                  <BioSection>
                     <BioYear>Misc</BioYear>
                     I have a lot of experience in QA, creating tests, Unit Tests, Automated tests, debugging.
                  </BioSection>
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
                  <BioSection>
                     <BioYear>2018</BioYear>
                     Software Engineer at Logistics Company
                  </BioSection>
                  <BioSection>
                     <BioYear>2022</BioYear>
                     Started freelancing
                  </BioSection>
            </Section>
            <Box align='center' my={4}>
               <Button onClick={onCopy} colorScheme='teal'>
                  {hasCopied ? 'Copied!' : 'My Email'}
               </Button>
            </Box>
         </Container>
      </Layout>
   );
};

export default Page;