import { forwardRef } from 'react';
import Logo from './logo';
import NextLink from 'next/link';
import {
   Container,
   Box,
   Link,
   Stack,
   Heading,
   Flex,
   Menu,
   MenuItem,
   MenuList,
   IconButton,
   useColorModeValue,
   MenuButton,
   Text
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import ThemeToggleButton from './theme-toggle-button';
import Layout from './layouts/article';

const LinkItem = ({ href, path, children}) => {
   const active = path === href;
   const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');
   return (
         <Link
            as={NextLink}
            href={href}
            p={2}
            bg={active ? 'glassTeal' : undefined}
            color={active ? '#202023' : inactiveColor}
         >
            {children}
         </Link>
  );
};

const MenuLink = forwardRef((props, ref) => (
   <Link ref={ref} as={NextLink} {...props} />
 ));

 MenuLink.displayName = 'MenuLink';

const Navbar = props => {
   const { path } = props;

   return (
      <Box 
         position="fixed"
         display='flex'
         as="nav"
         w="100%"
         bg={useColorModeValue('#ffffff40', '#20202300')}
         backdropFilter='auto'
         backdropBlur='8px'
         fontSize='18px'
         fontFamily= 'Open Sans, sans-serif'
         justifyContent='flex-end'
         style={ {zIndex:'1'}}
         {...props}
      >
         <Container 
            display="flex"
            pt={2} 
            wrap="wrap"
            justify="space-between"
            backdropFilter='auto' backdropBlur='90px'
            maxW='full'
            p={0}
         >
                              {/* <Logo /> */}

            <Flex>
               <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                  <Logo />
               </Heading>
            </Flex>
            
         </Container>
      </Box>
   );
};

// const Navbar = props => {
//    const { path } = props;

//    return (
//       <Layout>
//          <Box
//             fontFamily='Open Sans, sans-serif'
//             fontSize='3rem'
//             display='flex'
//             flexDir='column'
//             w='100%' 
//          >
//             <Text>tests</Text>
//          </Box>
//       </Layout>
//    );
// };

export default Navbar;