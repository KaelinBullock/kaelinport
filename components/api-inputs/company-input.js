import React from "react";


import { Heading, Box, Text, Input, Select } from "@chakra-ui/react";
import { getLocationList } from "../../redux/services/shipmentsService";
import { endpoints } from "../assets/constants";
import Layout from "../layouts/article";
import DropdownMenu from "./DropdownMenu";
import KeyValue from "./key-value";

const CompanyInput = ({currentEndpoint, payload, setPayload}) => {
   const [company, setCompany] = React.useState({
      name:'',
   });
   const [locations, setLocations] = React.useState(null);

   React.useEffect(() => {
      getLocationList(setLocations)
   }, []);

   React.useEffect(() => {
      setPayload(prevState => ({
         ...prevState,
         company
      }))
   }, [company]);

   const setCompanyValues = (e) => {
      const { name, value } = e.target;
      setCompany(prevState => ({
            ...prevState,
            [name]: value
      }));
   }

   const setLocationOnCompany = (location) => {
      setCompany(prevState => ({
            ...prevState,
            location
      }));
   }

   const variants = {
      hidden: { opacity: 0, x: 0, y: 20 },
      enter: { opacity: 1, x: 0, y: 0 },
      exit: { opacity: 0, x: 0, y: 20 }
    }

   return (
      <Layout>
         <Box mt={4} position='relative' display='flex' maxWidth='full' w='full' flexDir={{base:'column-reverse', sm:'row'}}>
            <Box display='flex' flexDir='column' w='full' borderRadius={8} gap={4} pb={4}>
               <KeyValue/>
               <Box display='flex' justifyContent='flex-start' alignItems='center' pl={4}>
                  <Text w='130px'>Name:</Text> 
                  <Input name="name" placeholder='Company Name' size='md' value={company.name} onChange={(e) => setCompanyValues(e)}/>
               </Box>
               {currentEndpoint === endpoints.SAVE_COMPANY ?
                  <Box display='flex' justifyContent='flex-start' alignItems='center' pl={4}>
                     <Text w='130px' maxW='150px' >Location:</Text> 
                     <DropdownMenu menuItems={locations} setValue={setLocationOnCompany} style={{width: '100%'}}></DropdownMenu>
                  </Box>
               :
                  <></>
               }
            </Box>
         </Box>
         </Layout>
   )
}

export default CompanyInput