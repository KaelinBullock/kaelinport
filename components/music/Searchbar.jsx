import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { FiSearch } from 'react-icons/fi';
import { Box, FormControl, FormLabel, Input } from '@chakra-ui/react';

const Searchbar = () => {
  const router = useRouter();

  function navigate(search) {
    router.push(search);
    console.log('search')
  }
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // navigate(`/works/music/search/${searchTerm}`);
    navigate(`/works/music/${searchTerm}`);

  };

  //enter not working with this form control

  return (
    <form onSubmit={handleSubmit} zIndex={1} autoComplete="off" maxW='70vw' color='gray.400' _focusWithin={{color:'gray.600'}} position='sticky' top={0} backgroundColor='#202023'>
      <FormLabel htmlFor="search-field" srOnly={true} className="sr-only">
        Search all files
      </FormLabel>
      <Box display='flex' flexDir='row' justifyContent='flex-start' alignItems='center' className="flex flex-row justify-start items-center">
        <Box w={5} h={5} ml={4}>
          <FiSearch aria-hidden="true" className="w-5 h-5 ml-4" />
        </Box>
        <Input
          name="search-field"
          autoComplete="off"
          id="search-field"
          className="flex-1 bg-transparent border-none placeholder-gray-500 outline-none text-base text-white p-4"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          outline='none'
          flex='1'
          // type='search'
          border='none'
          color='gray.500'
          fontSize='1rem'
          lineHeight='1.5rem'
          variant='unstyled'
          p={4}
        />
      </Box>
    </form>
  );
};

export default Searchbar;
