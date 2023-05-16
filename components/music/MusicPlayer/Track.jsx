import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';

const Track = ({ isPlaying, isActive, activeSong }) => (
  
  <Box display='flex' alignItems='center' px={4}>
     <Image h={16} w={16} display={{base:'none', sm:'block'}} borderRadius='full' src={activeSong?.images?.coverart} alt="cover art" className="rounded-full" />
     <Box display='flex' flexDir='column' px={4}>
      <Text
          overflow='ellipsis'
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
          color='gray.300' className="truncate text-gray-300"
        >
          {activeSong?.subtitle ? activeSong?.subtitle : 'No active Song'}
        </Text>
      </Box>
  </Box>
);

export default Track;
