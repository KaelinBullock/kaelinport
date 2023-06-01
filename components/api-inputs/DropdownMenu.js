import { Field, Form, Formik } from 'formik';

import { FormControl, Select } from '@chakra-ui/react'


const DropdownMenu = ({menuItems, setValue}) => {
   const onChange = (e) => {//TODO investigate this
      setValue(JSON.parse(e.target.value));
   }
   return (
      <Formik
      initialValues={menuItems}
      onChange={(values, actions) => {
        console.log('change')
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           actions.setSubmitting(false);
         }, 1000);
       }}
      >
      {() => (
        <Form style={{width: '100%'}}>
          <Field>
            {( field, form ) => (
              <FormControl>
                <Select
                  placeholder='Select option'
                  onChange={onChange} 
                  >
                  {menuItems?.map((item) => (
                    <option
                      key={item.id}
                      value={JSON.stringify(item)}
                      id={item.id}>
                      {item.name}
                    </option>
                  ))}
                </Select>
              </FormControl>
            )}
          </Field>
        </Form>
      )}
    </Formik>
   )
 }

 export default DropdownMenu