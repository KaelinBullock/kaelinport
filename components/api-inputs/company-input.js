import React from "react";

import { Container, Heading, Divider, Box, Text, Textarea, Button, Input, useColorModeValue, RadioGroup, Stack, Radio, TableContainer, Table, Thead, Tr, Th, TableCaption, Tbody, Td, Tfoot } from "@chakra-ui/react";

// import { useGetCompaniesQuery } from "../../redux/services/shipmentsService";
import axios from "axios";
import useAxios from 'axios-hooks'
import { useEffect, useState } from "react";

//use this to update object and form changes https://blog.logrocket.com/using-react-usestate-object/
//Should probably have some recursive component for these things, but I don't feel like looking up how to do that, so for now we'll just make seperate components for things
//need to fix css
//change font?

function createTitle(currentEndpoint) {
   return currentEndpoint
}

function LocationType() {
   const [value, setValue] = React.useState('1')
   return (
     <RadioGroup onChange={setValue} value={value}>
       <Stack direction='row'>
         <Radio value='1'>Business</Radio>
         <Radio value='2'>Second</Radio>
         <Radio value='3'>Third</Radio>
       </Stack>
     </RadioGroup>
   )
 }

const CompanyInput = ({setPayload}) => {
   const [name, setName] = React.useState(null);
   const [locationId, setLocationId] = React.useState(null);

   React.useEffect(() => {
      setPayload(prevState => ({
         ...prevState,
         'companyName': name,
         'locationId': locationId
      }));
   }, [name, locationId]);

   return (
      <Box mt={4} position='relative' display='flex' maxWidth='full' w='full' flexDir={{base:'column-reverse', sm:'row'}}>
         <Box display='flex' flexDir='column' w='full' borderRadius={8} gap={4} pb={4}>
            <Box display='flex' justifyContent='flex-start' alignItems='center' pl={4}>
               <Heading fontSize='1.875rem'  w='150px'>Key:</Heading> 
               <Heading fontSize='1.875rem'  ml={-5}>Value:</Heading>
            </Box>
            <Box display='flex' justifyContent='flex-start' alignItems='center' pl={4}>
               <Text w='150px'>Name:</Text> 
               <Input placeholder='Company Name' size='md' value={name} onChange={(e) => setName(e.target.value)}/>
            </Box>
            <Box display='flex' justifyContent='flex-start' alignItems='center' pl={4}>
               <Text w='150px'>Location ID:</Text> 
               <Input placeholder='Location ID' size='md' value={locationId} onChange={(e) => setLocationId(e.target.value)}/>
            </Box>
         </Box>
      </Box>
   )
}

export default CompanyInput