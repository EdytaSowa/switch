// import React from 'react';
// import ReactDOM from 'react-dom';
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { MyCheckbox, MySelect, MyTextInput } from "./Partial";
import { MyData } from "./DatePicker";
import { SwitchModal } from "./Switch";
import css from "./Form.module.css"
// And now we can use these
export const AddTransactionForm = () => {

    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = () => {
        setIsChecked(isChecked => !isChecked);
      };

  return (
    <>
      <h1>Add transaction</h1>
      <Formik
        initialValues={{
          comment: "",
          amount: "",
          type: isChecked, // added for our checkbox
          categoryType: "", // added for our select
          date: new Date(),
        }}
        validationSchema={Yup.object({
           type: Yup.bool(), 
          comment: Yup.string().max(150, "Must be 150 characters or less"),
          amount: Yup.number()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          categoryType: Yup. mixed().when('type', {
            is: type => !type,
            then: () => Yup.mixed().required('Please choose transaction category.'),
            otherwise: () => Yup.mixed().notRequired(),
          })
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
        <SwitchModal checked={isChecked}/>
       
      
        <MyCheckbox name="type" checked={isChecked}
          onClick={handleCheckboxChange}
         className={css.checkbox} >
            
           Kliknięty to income  {`${isChecked}`}
          </MyCheckbox>

          {!isChecked && ( <MySelect label="" name="categoryType">
            <option value="">Select a category</option>
            <option value="Main expenses">Main expenses</option>
            <option value="Products">Products</option>
            <option value="Car">Car</option>
            <option value="Self care">Self care</option>
            <option value="Child care">Child care</option>
            <option value="Household products">Household products</option>
            <option value="Education">Education</option>
            <option value="Leisure">Leisure</option>
          </MySelect>)}


         

          <MyTextInput
            label=""
            name="amount"
            type="number"
            placeholder="0.00"
          />

          <MyData
            name="date"
            dateFormat="dd.MM.yyyy"
          /> 

          <MyTextInput
            label=""
            name="comment"
            type="text"
            placeholder="Comment"
          />
       
      

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};
