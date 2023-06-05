/* eslint-disable import/no-unresolved */
import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../../redux/features/playerSlice';
import { useGetTopChartsQuery } from '../../redux/services/shazamCore';

import { Box, Heading, Image, Link, Text } from '@chakra-ui/react';

//TODO fix links ans swiper
const TopChartCard = ({ song, i, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
  <Box 
    w='full' 
    display='flex' 
    flexDir='row' 
    alignItems='center' 
    _hover={{
      background: '#4c426e',
      color: 'teal.500',
    }} 
    style={activeSong?.title === song?.title ? {backgroundColor:'#4c426e'} : {backgroundColor:'transparent'}}
    py={2}
    p={4}
    borderRadius='.5rem'
    cursor='pointer'
    mb={2}>
    <Heading as='h3' fontWeight='bold' fontSize='1rem' lineHeight='1.5rem' textColor='white' mr={3}>{i + 1}.</Heading>
    <Box flex='1 1 0%' display='flex' flexDir='row' justifyContent='space-between' alignItems='center'>
      <Image w={20} h={20} borderRadius='.5rem' src={song?.images?.coverart} alt={song?.title} />
      <Box flex='1 1 0%' display='flex' flexDir='column' justifyContent='center' mx={3}>
        {/* <Link to={`/songs/${song.key}`}> */}
          <Text fontSize='1.25rem' lineHeight='1.75rem' fontWeight='bold' textColor='white'>
            {song?.title}
          </Text>
        {/* </Link> */}
        {/* <Link to={`/artists/${song?.artists[0].adamid}`}>
          <p className="text-base text-gray-300 mt-1">
            {song?.subtitle}
          </p>
        </Link> */}
      </Box>
    </Box>
    <PlayPause
      isPlaying={isPlaying}
      activeSong={activeSong}
      song={song}
      handlePause={handlePauseClick}
      handlePlay={handlePlayClick}
    />
  </Box>
);

const validateSongData = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data } = useGetTopChartsQuery();
  let tempData = [];

  if(typeof data !== 'undefined') {
    for(let i = 0; i < data.length; i++) {
      if(typeof data[i]?.hub?.actions !== 'undefined') {
        tempData.push(data[i]);
      }
    }
  }
  return tempData;
};

const TopPlay = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  let data  = validateSongData();
  const divRef = useRef(null);

  const topPlays = data?.slice(0, 5);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <Box ref={divRef} ml={0} mb={6} flex={1} maxW='full' display='flex' flexDir='column'>
      <Box w='full' display='flex' flexDir='column'>
        <Box w='full' display='flex' flexDir='row' justifyContent='space-between' alignItems='center'>
          <Heading as='h2' textColor={'white'} fontWeight='bold' fontSize='1.5rem' lineHeight='1.5rem'>Top Charts</Heading>
          <Link to="/top-charts" color='white' _hover={{textDecoration:'none'}}>
            <p className="text-gray-300 text-base cursor-pointer">See more</p>
          </Link>
        </Box>

        <div className="mt-4 flex flex-col gap-1">
          {topPlays?.map((song, i) => (
            <TopChartCard
              key={song.key}
              song={song}
              i={i}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={() => handlePlayClick(song, i)}
            />
          ))}
        </div>
      </Box>
    </Box>
  );
};

export default TopPlay;
