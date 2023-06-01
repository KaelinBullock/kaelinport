import { Box } from "@chakra-ui/react";

import {
   Accordion,
   AccordionItem,
   AccordionButton,
   AccordionPanel,
   AccordionIcon,
 } from '@chakra-ui/react'

 const GetLabel = () => {return (<a style={{color: '#77ad78'}}>GET</a>)}
 const PostLabel = () => {return (<a style={{color: '#FCBA04'}}>POST</a>)}

const Endpoints = (props) => {
   return (
      <Accordion defaultIndex={[0]} allowMultiple>
         <AccordionItem cursor='pointer'>
            <h2>
               <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                     Company
                  </Box>
                  <AccordionIcon />
               </AccordionButton>
            </h2>
            <AccordionPanel pl={8} pb={4}>
               <span onClick={() => props.onClick?.('Get Companies')}> <GetLabel/> Companies</span>
            </AccordionPanel>
            <AccordionPanel pl={8}  pb={4}>
               <span onClick={() => props.onClick?.('Get Company By Name')}> <GetLabel/>  Company by name</span>
            </AccordionPanel>
            <AccordionPanel pl={8} pb={4}>
               <span onClick={() => props.onClick?.('Save Company')}> <PostLabel/>  Save Company</span>
            </AccordionPanel>
         </AccordionItem>

         <AccordionItem>
            <h2>
               <AccordionButton>
               <Box as="span" flex='1' textAlign='left'>
                  Location
               </Box>
               <AccordionIcon />
               </AccordionButton>
            </h2>
            <AccordionPanel pl={8} pb={4}>
               <span onClick={() => props.onClick?.('Get Locations')}> <GetLabel/>  Locations</span>
            </AccordionPanel>
            <AccordionPanel pl={8}  pb={4}>
               <span onClick={() => props.onClick?.('Get Locations By Name')}> <GetLabel/>  Locations By Name</span>
            </AccordionPanel>
            <AccordionPanel pl={8} pb={4}>
               <span onClick={() => props.onClick?.('Save Location')}> <PostLabel/>  Save Location</span>
            </AccordionPanel>
         </AccordionItem>
         <AccordionItem>
            <h2>
               <AccordionButton>
               <Box as="span" flex='1' textAlign='left'>
                  Shipment
               </Box>
               <AccordionIcon />
               </AccordionButton>
            </h2>
            <AccordionPanel pl={8}  pb={4}>
               <span onClick={() => props.onClick?.('Get Shipments')}> <GetLabel/>  Shipments</span>
            </AccordionPanel>
            <AccordionPanel pl={8} pb={4}>
               <span onClick={() => props.onClick?.('Save Shipment')}> <PostLabel/>  Save Shipment</span>
            </AccordionPanel>
         </AccordionItem>
      </Accordion>
   )
}

export default Endpoints