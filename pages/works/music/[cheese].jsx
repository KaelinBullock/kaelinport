import { Container, Box } from '@chakra-ui/react';

import { useSelector } from 'react-redux';

import MusicPlayer from '../../../components/music/MusicPlayer/TrackInfo';
import TopPlay from '../../../components/music/TopPlay';
import Searchbar from '../../../components/music/Searchbar';
import Searchresults from '../../../components/music/SearchResults';
import Layout from '../../../components/layouts/generic-layout';

const Music = () => {
   const { activeSong } = useSelector((state) => state.player);
   
   return (
      <Layout title="Music" maxWidth='full' w='full'>
         <Container maxWidth='full' w='full'
             sx={activeSong?.title ? {h:'80vh'} : {h:'100vh'}}
            style={{ overflowY: 'scroll' }}
            css={{
               '&::-webkit-scrollbar': {
                 width: '4px',
               },
             }}
         >
            <Searchbar />
            <Box position='relative' display='flex' maxWidth='full' w='full' mb={20} flexDir={{base:'column-reverse', sm:'row'}}>
               <Box maxWidth={{base:'100%', sm:'50%', lg:'75%'}}>
                  <Searchresults />
               </Box>
               <Box 
                  flex='1 1 0%'
                  display='flex'
                  flexDir='column'
                  h={{base:'100vh', sm:'75vh'}}
                  maxWidth='500px'
                  position={{base:'relative', sm:'sticky'}}
                  top={{base: 0, sm:'5rem'}}
                  mb={{base:'4rem', sm:'0'}}
               >
                  <TopPlay />
               </Box>
            </Box>

            {activeSong?.title && (
            <Box position='fixed' h={28} bottom={0} left={0} right={0} display='flex' zIndex={10} maxWidth='full' w='full' bgGradient='linear(to-r, black, #383635)' backdropFilter='auto' backdropBlur='8px' roundedTop={10} overflow='hidden'>
               <MusicPlayer />
            </Box>
            )}      
        </Container>
      </Layout>
   );
};

export default Music;