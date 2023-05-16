import React, { useState } from "react";

import { Container, Heading, Box, Text, Input, RadioGroup, Stack, Radio, TableContainer, Table, Thead, Tr, Th, TableCaption, Tbody, Td, Tfoot } from "@chakra-ui/react";

const LocationInput = ({setPayload}) => {
   const [location, setLocation] = useState({name:"", street:'', suite:'', city:'', state:'', zipcode:'', timezone:'', latitude:'', longitude:'', locationType:''});
   const handleChange = (e) => {
      const { name, value } = e.target;
      setLocation(prevState => ({
            ...prevState,
            [name]: value
      }));
         console.log(location);//test to make sure it's beings set correctly, because it's logging incorrectly.  It logs the correct value when a new value is updated
   }

   const setLocationType = (type) => {
      setLocation(prevState => ({
         ...prevState,
         'locationType': type
   }));
   }

   React.useEffect(() => {
      setPayload(prevState => ({
         ...prevState,
         'location': location
      }));
   }, [location]);

   return (
      <Box mt={4} position='relative' display='flex' maxWidth='full' w='full' flexDir={{base:'column-reverse', sm:'row'}}>
         <Box display='flex' flexDir='column' w='full' borderRadius={8} gap={4} pb={4}>
            <Box display='flex' justifyContent='flex-start' alignItems='center' pl={4}>
               <Heading fontSize='1.875rem'  w='150px'>Key:</Heading> 
               <Heading fontSize='1.875rem'  ml={-5}>Value:</Heading>
            </Box>
            <Box display='flex' justifyContent='flex-start' alignItems='center' pl={4}>
               <Text w='150px'>Name:</Text> 
               <Input name="name" placeholder='Location Name' size='md' value={location.name} onChange={(e) => handleChange(e)}/>
            </Box>
   
            <Box display='flex' justifyContent='flex-start' alignItems='center' pl={4}>
               <Text w='150px'>Street:</Text> 
               <Input name="street" placeholder='Street' size='md' value={location.street} onChange={(e) => handleChange(e)}/>
            </Box>
            <Box display='flex' justifyContent='flex-start' alignItems='center' pl={4}>
               <Text w='150px'>Suite:</Text> 
               <Input name="suite" placeholder='Suite' size='md' value={location.suite} onChange={(e) => handleChange(e)}/>
            </Box>
            <Box display='flex' justifyContent='flex-start' alignItems='center' pl={4}>
               <Text w='150px'>City:</Text> 
               <Input name="city" placeholder='City' size='md' value={location.city} onChange={(e) => handleChange(e)}/>
            </Box>
            <Box display='flex' justifyContent='flex-start' alignItems='center' pl={4}>
               <Text w='150px'>State:</Text> 
               <Input name="state" placeholder='State' size='md' value={location.state} onChange={(e) => handleChange(e)}/>
            </Box>
            <Box display='flex' justifyContent='flex-start' alignItems='center' pl={4}>
               <Text w='150px'>Zipcode:</Text> 
               <Input name="zipcode" placeholder='Zipcode' size='md' value={location.zipcode} onChange={(e) => handleChange(e)}/>
            </Box>
            <Box display='flex' justifyContent='flex-start' alignItems='center' pl={4}>
               <Text w='150px'>Time Zone:</Text> 
               <Input name="timeZone" placeholder='Time Zone' size='md' value={location.timeZone} onChange={(e) => handleChange(e)}/>
            </Box>
            <Box display='flex' justifyContent='flex-start' alignItems='center' pl={4}>
               <Text w='150px'>Latitude:</Text> 
               <Input name="latitude" placeholder='Latitude' size='md' value={location.latitude} onChange={(e) => handleChange(e)}/>
            </Box>
            <Box display='flex' justifyContent='flex-start' alignItems='center' pl={4}>
               <Text w='150px'>Longitude:</Text> 
               <Input name="longitude" placeholder='Longitude' size='md' value={location.longitude} onChange={(e) => handleChange(e)}/>
            </Box>
            <Box display='flex' justifyContent='flex-start' alignItems='center' pl={4}>
               <Text w='150px'>Location Type:</Text> 
               <RadioGroup name="locationType" onChange={(type) => setLocationType(type)} value={location.locationType}>
               <Stack direction='row'>
                  <Radio name="locationType" value='BUSINESS'>Business</Radio>
                  <Radio name="locationType"  value='RESIDENTIAL'>Residential</Radio>
                  <Radio name="locationType"  value='STORAGE'>Storage</Radio>
               </Stack>
            </RadioGroup>
            </Box>
         </Box>
      </Box>
   )
}

export default LocationInput