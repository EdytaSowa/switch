
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useField } from "formik";


export const MyData = ({...props}) => {

    const [field, meta, helpers] = useField(props); 


  return (
    <>
      
        <DatePicker {...field} {...props}
         selected={field.value}
         onChange={value => {
           helpers.setValue(value);
         }} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}

      {/* <DatePicker
        selected={field.value}
        dateFormat="dd.MM.yyyy"
        onChange={(date) => setStartDate(date)}
      
      /> */}

    
    </>
  );
};
