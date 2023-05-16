import { Container, Heading, SimpleGrid, Divider, Box } from "@chakra-ui/react";

import { useSelector } from 'react-redux';

import Layout from "../../components/layouts/music-layout";
import MusicPlayer from '../../components/music/MusicPlayer/TrackInfo'
import TopPlay from '../../components/music/TopPlay'
import Discover from "../../components/music/Discover";
import Searchbar from "../../components/music/Searchbar";

// import styles from './music.module.css'

//need to add searchbar
//adjust css for different screens
//add animations
//you also don't have the other searches like top artist in your country etc.  think you should atleast have one or two
//hide scrollbar try to just remove it from the bottom
//consider putting search here
//line up edges

const Music = () => {
   const { activeSong } = useSelector((state) => state.player);
   return (
      <Layout title="Music" maxWidth='full' w='full'>
         <Container maxWidth='full' w='full'
             sx={activeSong?.title ? {h:'80vh'} : {h:'100vh'}}
            style={{ overflowY: "scroll" }}//remove this
            css={{
               '&::-webkit-scrollbar': {
                 width: '4px',
               },
             }}
         >
            <Searchbar />
            <Box position='relative' display='flex' maxWidth='full' w='full' mb={20} flexDir={{base:'column-reverse', sm:'row'}}>
               <Box maxWidth={{base:'100%', sm:'50%', lg:'75%'}}>
                  <Discover />
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
   )
}

export default Music