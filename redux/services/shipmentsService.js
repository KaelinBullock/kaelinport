import axios from "axios";

export function postAuthentication() {
    axios.post("http://localhost:8080/api/v1/auth/authenticate", {
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

export function getCompanyList() {
     axios.get('http://localhost:8080/api/company/list', { headers: {'Content-Type': 'application/json'} })
     .then(response => {      
        return response.data;
     })
     .catch((error) => {
        console.log('error ' + error);
     });
};

export function getCompanyByName(apiKey, name) {
   const AuthStr = 'Bearer '.concat(apiKey); 
      axios.get(`http://localhost:8080/api/company/getCompanyByName${name}`, { headers: { Authorization: AuthStr, 'Content-Type': 'application/json'} })
      .then(response => {      
         return response.data;
      })
      .catch((error) => {
         console.log('error ' + error);
      });
 };

 export function saveCompany(apiKey, company) {
   const AuthStr = 'Bearer '.concat(apiKey); 
      axios.post('http://localhost:8080/api/company/save',
      { company: { company } },
      { headers: { Authorization: AuthStr, 'Content-Type': 'application/json'} })
      .then(response => {      
         return response.data;
      })
      .catch((error) => {
         console.log('error ' + error);
      });
 };

 export function getContactsList(apiKey) {
   const AuthStr = 'Bearer '.concat(apiKey); 
      axios.get('http://localhost:8080/api/contact/list', { headers: { Authorization: AuthStr, 'Content-Type': 'application/json'} })
      .then(response => {      
         return response.data;
      })
      .catch((error) => {
         console.log('error ' + error);
      });
 };
 
 export function getContactsByName(apiKey, name) {
    const AuthStr = 'Bearer '.concat(apiKey); 
       axios.get(`http://localhost:8080/api/contact/getcontactByName${name}`, { headers: { Authorization: AuthStr, 'Content-Type': 'application/json'} })
       .then(response => {      
          return response.data;
       })
       .catch((error) => {
          console.log('error ' + error);
       });
  };
 
  export function saveContact(apiKey, contact) {
    const AuthStr = 'Bearer '.concat(apiKey); 
       axios.post('http://localhost:8080/api/contact/save',
       { contact: { contact } },
       { headers: { Authorization: AuthStr, 'Content-Type': 'application/json'} })
       .then(response => {      
          return response.data;
       })
       .catch((error) => {
          console.log('error ' + error);
       });
  };
 export function getLocationList(apiKey) {
   const AuthStr = 'Bearer '.concat(apiKey); 
      axios.get('http://localhost:8080/api/contact/list', { headers: { Authorization: AuthStr, 'Content-Type': 'application/json'} })
      .then(response => {      
         return response.data;
      })
      .catch((error) => {
         console.log('error ' + error);
      });
 };
 
 export function getLocationByName(apiKey, name) {
    const AuthStr = 'Bearer '.concat(apiKey); 
       axios.get(`http://localhost:8080/api/contact/getcontactByName${name}`, { headers: { Authorization: AuthStr, 'Content-Type': 'application/json'} })
       .then(response => {      
          return response.data;
       })
       .catch((error) => {
          console.log('error ' + error);
       });
  };
 
  export function saveLocation(apiKey, location) {
    const AuthStr = 'Bearer '.concat(apiKey); 
       axios.post('http://localhost:8080/api/contact/save',
       { location: { location } },
       { headers: { Authorization: AuthStr, 'Content-Type': 'application/json'} })
       .then(response => {      
          return response.data;
       })
       .catch((error) => {
          console.log('error ' + error);
       });
  };
 export function getShipmentByLocationId(apiKey, locationId) {
    const AuthStr = 'Bearer '.concat(apiKey); 
       axios.get(`http://localhost:8080/api/contact/getcontactByName${locationId}`, { headers: { Authorization: AuthStr, 'Content-Type': 'application/json'} })
       .then(response => {      
          return response.data;
       })
       .catch((error) => {
          console.log('error ' + error);
       });
  };
 
  export function saveShipment(apiKey, shipment) {
    const AuthStr = 'Bearer '.concat(apiKey); 
       axios.post('http://localhost:8080/api/contact/save',
       { contact: { shipment } },
       { headers: { Authorization: AuthStr, 'Content-Type': 'application/json'} })
       .then(response => {      
          return response.data;
       })
       .catch((error) => {
          console.log('error ' + error);
       });
  };