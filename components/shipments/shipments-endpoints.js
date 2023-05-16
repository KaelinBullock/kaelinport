import { Box } from "@chakra-ui/react";

import {
   Accordion,
   AccordionItem,
   AccordionButton,
   AccordionPanel,
   AccordionIcon,
 } from '@chakra-ui/react'

const Endpoints = (props) => {

//    constructor(props) {
//       super(props);
//   }
   return (
      <Accordion defaultIndex={[0]} allowMultiple>
         <AccordionItem>
            <h2>
               <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                     Company
                  </Box>
                  <AccordionIcon />
               </AccordionButton>
            </h2>
            <AccordionPanel pl={8} pb={4}>
               <span onClick={() => props.onClick?.('Get Companies')}><a style={{color: 'red'}}>Get</a> Companies</span>
            </AccordionPanel>
            <AccordionPanel pl={8}  pb={4}>
               <span onClick={() => props.onClick?.('Get Company By Name')}><a style={{color: 'red'}}>Get</a> Company by name</span>
            </AccordionPanel>
            <AccordionPanel pl={8} pb={4}>
               <span onClick={() => props.onClick?.('Save Company')}><a style={{color: 'red'}}>Post</a> Save Company</span>
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
               <span onClick={() => props.onClick?.('Get Locations')}><a style={{color: 'red'}}>Get</a> Locations</span>
            </AccordionPanel>
            <AccordionPanel pl={8}  pb={4}>
               <span onClick={() => props.onClick?.('Get Location By Name')}><a style={{color: 'red'}}>Get</a> Location By Name</span>
            </AccordionPanel>
            <AccordionPanel pl={8} pb={4}>
               <span onClick={() => props.onClick?.('Save Location')}><a style={{color: 'red'}}>Post</a> Save Location</span>
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
               <span onClick={() => props.onClick?.('Get Shipment')}><a style={{color: 'red'}}>Get</a> Shipment</span>
            </AccordionPanel>
            <AccordionPanel pl={8} pb={4}>
               <span onClick={() => props.onClick?.('Save Shipment')}><a style={{color: 'red'}}>Post</a> Save Shipment</span>
            </AccordionPanel>
         </AccordionItem>
      </Accordion>
   )
}

export default Endpoints