import { Container, Heading, SimpleGrid, Divider, Box } from "@chakra-ui/react";

import Section from '../../components/section'
import { WorkGridItem } from "../../components/grid-item";
import { Route, Routes } from 'react-router-dom';

import Layout from "../../components/layouts/music-layout";
import MusicPlayer from '../../components/music/MusicPlayer'
import TopPlay from '../../components/music/TopPlay'
import Discover from "../../components/music/Discover";

//need to add searchbar
//try creating a new layout
const Music = () => {
   return (
      <Layout title="Music" maxWidth='full' w='full'>
         <Container maxWidth='full' w='full'>
            <Heading as='h3' fontSize={20} mb={4}>
               Music
            </Heading>
            {/* <Routes>
               <Route path="/" element={<Discover />} />
            </Routes> */}
            <Box position='relative' display='flex'>
               <Box 
                  flex='1 1 0%'
                  display='flex'
                  flexDir='column'
                  h={{base:'100vh', sm:'75vh'}}
                  maxWidth='500px'>
                     <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
                        <TopPlay />
                     </div>
               </Box>
            </Box>
            <Box position='fixed' h={28} bottom={0} left={0} right={0} display='flex' zIndex={10} maxWidth='full' w='full' backgroundColor='red.100'>
               <MusicPlayer />
            </Box>
        </Container>
      </Layout>
   )
}

export default Music