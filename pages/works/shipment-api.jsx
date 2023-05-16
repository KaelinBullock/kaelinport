import React from "react";

import { Container, Heading, Box, Textarea, Button } from "@chakra-ui/react";

import Layout from "../../components/layouts/generic-layout";//change name of this layout
import Endpoints from "../../components/shipments/shipments-endpoints";

import { getCompanyByName, getCompanyList, getLocationByName, getLocationList, getShipment, getShipmentByLocationId, saveCompany, saveLocation, saveShipment } from "../../redux/services/shipmentsService";
import CompanyInput from "../../components/api-inputs/company-input";
import LocationInput from "../../components/api-inputs/location-input";
import ShipmentInput from "../../components/api-inputs/shipment-input";

const GET_COMPANIES = 'Get Companies';
const GET_COMPANY_BY_NAME = 'Get Company By Name';
const SAVE_COMPANY = 'Save Company';
const GET_LOCATIONS = 'Get Location';
const GET_LOCATION_BY_NAME = 'Get Location By Name';
const SAVE_LOCATION = 'Save Location';
const GET_SHIPMENT = 'Get Shipment';
const SAVE_SHIPMENT = 'Save Shipment';

//wire up location and shipments
// fix the display, so the correct things are displayed when you choose and endpoint
//make it so that the endpoints call
//tomorrow you can fix the auth call
//do not include the functionality to add locations that are already created yet

function callEndpoint(endpoint, payLoad, setResponse) {
   switch(endpoint) {
      case GET_COMPANIES:
      
        getCompanyList();
        break;
      case GET_COMPANY_BY_NAME:
        setResponse(getCompanyByName(payLoad.companyName));
        break;
      case SAVE_COMPANY:
        saveCompany();
        break;
      case GET_LOCATIONS:
        getLocationList();
        break;
      case GET_LOCATION_BY_NAME:
        getLocationByName();
        break;
      case SAVE_LOCATION:
        saveLocation();
        break;
      case GET_SHIPMENT:
        getShipmentByLocationId(payLoad.locationId);
        break;
      case SAVE_SHIPMENT:
        saveShipment();
        break;
      default:
         return;
    }
};

//need a display and highlight to know which endpoint we selected
//the text area needs to look better
//have to be able to add parameters when submitting

function ApiInput(currentEndpoint, setPayload){
   switch(currentEndpoint) {
      case GET_COMPANIES:
        return <></>
        break;
      case GET_COMPANY_BY_NAME:
         return <CompanyInput setPayload={setPayload}/>;
         break;
      case SAVE_COMPANY:
        return <CompanyInput setPayload={setPayload}/>;
        break;
      case GET_LOCATIONS:
        return <></>
        break;
      case GET_LOCATION_BY_NAME:
         return <LocationInput setPayload={setPayload}/>
        break;
      case SAVE_LOCATION:
         return <LocationInput setPayload={setPayload}/>
        break;
      case GET_SHIPMENT:
         return <ShipmentInput setPayload={setPayload}/>
        break;
      case SAVE_SHIPMENT:
         return <ShipmentInput setPayload={setPayload}/>
        break;
      default:
         return;
    }
}


function createTitle(currentEndpoint) {
   return currentEndpoint
}

const Shipment = () => {
   const [response, setResponse] = React.useState(null);
   const [payLoad, setPayload] = React.useState(null);
   const [currentEndpoint, setCurrentEndpoint] = React.useState(null);
   console.log('current endpoint  ' + currentEndpoint);
   if (currentEndpoint === undefined || currentEndpoint === null)  {
      setCurrentEndpoint('Get Companies');
   };
   
   // const AuthStr = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiaWdtYXJrQG1hcmsuY29tIiwiZXhwIjoxNjgzNjkzNTE0LCJpYXQiOjE2ODM2MDcxMTQsImF1dGhvcml0aWVzIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dfQ.6NprJbj-9LZuR49jrHAE0LDB0hI5t803PFnkB8iRioA';
   callEndpoint(currentEndpoint, payLoad)
   React.useEffect(() => {
      setResponse();
   }, []);

   let sss = 'ringo';
   sss = JSON.stringify(response, null, "\t");
   const switchEndpoint = (event) => {
      setCurrentEndpoint(event);
      console.log(currentEndpoint);
   }

   const sendPayload = () => {
      var response = JSON.stringify(callEndpoint(currentEndpoint, payLoad, setResponse), null, "\t");
      console.log(response);
      setResponse(response);

   }

   return (
      <Layout title="Shipment" maxWidth='full' w='full'>
         <Container maxWidth='full' w='full' p={4}>
            <Box position='relative' display='flex' maxWidth='full' w='full' mb={20} flexDir={{base:'column-reverse', sm:'row'}}>
               <Box display='flex' flexDir='column' w='500px' pr={6}>
                  <Heading as='h2' fontWeight='bold' fontSize='1.875rem' lineHeight='2.25rem' textAlign={{base:'center', md:'left'}}  p={{base:'20px', sm:'none'}}>
                     Endpoints
                  </Heading>
                  <Endpoints onClick={switchEndpoint} />         
               </Box>
               <Box display='flex' flexDir='column' w='full'>
                  {ApiInput(currentEndpoint, setPayload)}
                  <Box display='flex'  alignItems='center'>
                     <Heading title={createTitle(currentEndpoint)} as='h2' fontWeight='bold' fontSize='1.875rem' lineHeight='2.25rem' w='full' textAlign={{base:'center', md:'left'}}  p={{base:'20px', sm:'none'}}>
                        Calling: {currentEndpoint}
                     </Heading>
                     {/* <Button px={8} mr={4} colorScheme='blue'>Authenticate</Button> */}
                     <Button colorScheme='blue' onClick={sendPayload}>Send</Button>
                  </Box>
                  <Textarea value={response} isDisabled h='500px' w='full' border='1px' mt={4} borderColor='whiteAlpha.100' borderRadius={8} overflow='scroll'>
                  </Textarea>
               </Box>
            </Box>
        </Container>
      </Layout>
   )
}

export default Shipment