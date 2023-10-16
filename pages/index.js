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
   const { onCopy, setValue, hasCopied } = useClipboard('');

   React.useEffect(() => {
      setValue('kaelin.bullock@gmail.com');
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
                  Howdy! I'm a dedicated full-stack developer from Little Rock, Arkansas, passionate about crafting seamless digital experiences. With expertise in Java and Typescript, I specialize in creating robust APIs. Whether it's back-end intricacies or front-end finesse, I've got you covered. Feel free to connect and explore my portfolio. Excited to bring your ideas to life!
                  </Paragraph>
                  <Box align='center' my={4} justifyContent="space-between">
                     <Link href='/works'       style={{ justifyContent: 'space-between', padding: '10px'}} justifyContent="space-between">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme='teal' variant='outline'>
                           My Portfolio
                        </Button>
                     </Link>
                     <Button onClick={onCopy} colorScheme='teal' variant='ghost' marginLeft={2}>
                        {hasCopied ? 'Copied!' : 'My Email'}
                     </Button>
                  </Box>
            </Section>
            <Section delay={0.2}>
                  <Heading as='h3' variant='section-title'>
                     Skills
                  </Heading>
                  <BioSection>
                     <BioYear>Java</BioYear><br/>
                     I have a solid background in Java, backed by 4+ years of hands-on experience and involvement in the creation of over 30 APIs.
                  </BioSection>
                  <BioSection>
                     <BioYear>Spring</BioYear><br/>
                     I'm well-versed in the Spring framework. Over 4 years of experience.
                  </BioSection>
                  <BioSection>
                     <BioYear>Javascript / Typescript</BioYear><br/>
                     I have 4+ years of experience in navigating JavaScript and TypeScript.
                  </BioSection>
                  <BioSection>
                     <BioYear>Angular</BioYear><br/>
                     Over 4+ years, I've honed my skills in Angular, utilizing it effectively in various projects.
                  </BioSection>
                  <BioSection>
                     <BioYear>React</BioYear><br/>
                     Among various front-end tools, React is my preferred choice, with 2+ years of work.
                  </BioSection>
                  <BioSection>
                     <BioYear>SQL</BioYear><br/>
                     I integrate SQL into most of my Java Spring APIs, ensuring robust and efficient data management.
                  </BioSection>
                  <BioSection>
                     <BioYear>Misc</BioYear><br/>
                     My skills extend to quality assurance, encompassing QA, test creation, unit testing, automated tests, and adept debugging techniques.
                  </BioSection>
            </Section>

            <Section delay={0.2}>
                  <Heading as='h3' variant='section-title'>
                     Bio
                  </Heading>
                  <BioSection>
                     <BioYear>1994</BioYear>
                     Born in Little Rock, Arkansas (Not Our kansas)
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
         </Container>
      </Layout>
   );
};

export default Page;