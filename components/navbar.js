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
   MenuButton
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import ThemeToggleButton from './theme-toggle-button';

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
         as="nav"
         w="100%"
         bg={useColorModeValue('#ffffff40', '#20202300')}
         backdropFilter='auto' backdropBlur='8px'
         // blur='20px'
         style={ {zIndex:'1'}}
         {...props}
      >
         <Container 
            display="flex"
            p={2} 
            maxW="container.md"
            wrap="wrap"
            align="center"
            justify="space-between"
            backdropFilter='auto' backdropBlur='90px'
            
         >
            <Flex align="center" mr={5}>
               <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                  <Logo />
               </Heading>
            </Flex>
            <Stack
               direction={{base: 'coumn', md: 'row'}}
               display={{base: 'none', md: 'flex'}}
               width={{base: 'full', md: 'auto'}}
               alignItems='center'
               flexGrow={1}
               mt={{ base: 4, md: 2 }}
            >
               <LinkItem 
               href="/works"
                path={path}>
                  Works
               </LinkItem>
               <LinkItem 
               href="https://github.com/KaelinBullock" 
               path={path}>
                  GIT
               </LinkItem>
            </Stack>

            <Box flex={1} align="right"> 
               <ThemeToggleButton />
               <Box ml={2} display={{base: 'inline-block', md:'none'}}>
                  <Menu>
                     <MenuButton 
                        as={IconButton} 
                        icon={<HamburgerIcon />} 
                        ariant="outline" 
                        aria-label="Options" 
                     />
                     <MenuList>
                        <MenuItem as={MenuLink} href='/' >About</MenuItem>
                        <MenuItem as={MenuLink} href='/works'>Works</MenuItem>
                        <MenuItem as={MenuLink} href="http://www.kaelinb.com">
                           View Source
                        </MenuItem>
                     </MenuList>
                  </Menu>
               </Box>
            </Box>
         </Container>
      </Box>
   );
};

export default Navbar;