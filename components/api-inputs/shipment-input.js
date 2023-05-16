import React, { useState } from "react";

import { Container, Heading, Divider, Box, Text, Textarea, Button, Input, useColorModeValue, RadioGroup, Stack, Radio, TableContainer, Table, Thead, Tr, Th, TableCaption, Tbody, Td, Tfoot } from "@chakra-ui/react";

//create shipment input for full shipment
const ShipmentInput = ({payload}) => {
   const [shipment, setShipment] = useState({
      company:{
         location:{
            name:"",
            street:'',
            suite:'',
            city:'',
            state:'',
            zipcode:'',
            timezone:'',
            latitude:'',
            longitude:'',
            locationType:''
         }
      }
   });

   // React.useEffect(() => {
   //    setPayload(prevState => ({
   //       ...prevState,
   //       'location': location
   //    }));
   // }, [shipment]);

   return (
      <Box mt={4} position='relative' display='flex' maxWidth='full' w='full' flexDir={{base:'column-reverse', sm:'row'}}>
         <Box display='flex' flexDir='column' w='full' borderRadius={8} gap={4} pb={4}>
            <Box display='flex' justifyContent='flex-start' alignItems='center' pl={4}>
               <Text w='150px'>Contact ID:</Text> 
               <Input placeholder='Contact ID' size='md' value={name} onChange={(e) => setName(e.target.value)}/>
            </Box>
            <Box display='flex' justifyContent='flex-start' alignItems='center' pl={4}>
               <Text w='150px'>Location ID:</Text> 
               <Input placeholder='Location ID' size='md' value={name} onChange={(e) => setName(e.target.value)}/>
            </Box>
         </Box>
      </Box>
   )
}




export default ShipmentInput