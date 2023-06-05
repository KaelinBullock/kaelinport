import axios from 'axios';

const url = 'http://ec2-user@ec2-52-5-148-232.compute-1.amazonaws.com:8080';

export function postAuthentication() {
    axios.post(`${url}/api/v1/auth/authenticate`, {
      email: 'bigmark@mark.com',
      password: 'password'
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log('error ' + error);
   });
};

export function getCompanyList(setCompanyList) {
     axios.get(`${url}/api/company/list`, { headers: {'Content-Type': 'application/json'} })
     .then(response => {      
         setCompanyList(response.data);
     })
     .catch((error) => {
        console.log('error ' + error);
     });
};

export function getCompaniesByName(name, setCompanyList) {
   axios.get(`${url}/api/company/getCompaniesByName?name=${name}`, { headers: { 'Content-Type': 'application/json'} })
   .then(response => {      
      setCompanyList(response.data);
   })
   .catch((error) => {
      console.log('error ' + error);
   });
};

 export function saveCompany(company) {
      axios.post(`${url}/api/company/save`,
      company,
      { headers: { 'Content-Type': 'application/json'} })
      .then(response => {      
         return response.data;
      })
      .catch((error) => {
         console.log('error ' + error);
      });
 };

 export function getContactsList(setContact) {
      axios.get(`${url}/api/contact/list`, { headers: {'Content-Type': 'application/json'} })
      .then(response => {      
         setContact(response.data);
      })
      .catch((error) => {
         console.log('error ' + error);
      });
 };
 
 export function getContactsByName(apiKey, name) {
       axios.get(`http://localhost:8080/api/contact/getcontactByName${name}`, { headers: { 'Content-Type': 'application/json'} })
       .then(response => {      
          return response.data;
       })
       .catch((error) => {
          console.log('error ' + error);
       });
  };
 
  export function saveContact(apiKey, contact) {
       axios.post(`${url}/api/contact/save`,
         contact,
       { headers: { 'Content-Type': 'application/json'} })
       .then(response => {      
          return response.data;
       })
       .catch((error) => {
          console.log('error ' + error);
       });
  };
 export function getLocationList(setLocation) {
      axios.get(`${url}/api/location/list`, { headers: {'Content-Type': 'application/json'} })
      .then(response => {      
         console.log('data');
         console.log(response.data[0].name);
         setLocation(response.data);
      })
      .catch((error) => {
         console.log('error ' + error);
      });
 };
 
 export function getLocationsByName(name, setLocations) {
       axios.get(`http://localhost:8080/api/location/getLocationsByName?name=${name}`, { headers: { 'Content-Type': 'application/json'} })
       .then(response => {      
         setLocations(response.data);
       })
       .catch((error) => {
          console.log('error ' + error);
       });
  };
 
  export function saveLocation(location, setResponse) {
       axios.post(`${url}/api/location/save`,
         location,
       { headers: { 'Content-Type': 'application/json'} })
       .then(response => {      
         setResponse(response.data);
       })
       .catch((error) => {
          console.log('error ' + error);
       });
  };

 export function getShipmentList(setShipment) {
       axios.get('http://localhost:8080/api/shipment/list', { headers: { 'Content-Type': 'application/json'} })
       .then(response => {      
         setShipment(response.data);
       })
       .catch((error) => {
          console.log('error ' + error);
       });
  };
 
  export function saveShipment(shipment, setResponse) {
       axios.post(`${url}/api/shipment/save`,
         shipment,
       { headers: { 'Content-Type': 'application/json'} })
       .then(response => {      
         setResponse(response.data);
       })
       .catch((error) => {
          console.log('error ' + error);
       });
  };