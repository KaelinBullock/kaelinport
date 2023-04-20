import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';

const Track = ({ isPlaying, isActive, activeSong }) => (
  <Box  display='flex' alignItems='center' justifyContent='flex-start'>
    <Box h={16} w={16} mr={4} display={{base: 'none', sm: 'block'}} className={`${isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''} hidden sm:block h-16 w-16 mr-4`}>
      <Image borderRadius='full' src={activeSong?.images?.coverart} alt="cover art" className="rounded-full" />
    </Box>
    <Box maxW='full'>
      <Text
        overflow='hidden'
        textOverflow='ellipsis'
        whiteSpace='nowrap'
        fontWeight='bold'
        fontSize='1.25rem'
        lineHeight='1.75rem'
        >
        {activeSong?.title ? activeSong?.title : 'No active Song'}
      </Text>
      <Text
        overflow='hidden'
        textOverflow='ellipsis'
        whiteSpace='nowrap'
        maxW='full'
        color='gray.300' className="truncate text-gray-300">
        {activeSong?.subtitle ? activeSong?.subtitle : 'No active Song'}
      </Text>
    </Box>
  </Box>
);

export default Track;
