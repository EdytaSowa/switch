import { useField } from "formik";
import PropTypes from 'prop-types';


import css from './Partial.module.css'


export const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
      <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };
  
  export const MyCheckbox = ({ children, ...props }) => {

    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
      <div>
        <label className="checkbox-input">
          <input className={css.input}type="checkbox" {...field} {...props} />

          {children}
        </label>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };
  
  export const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <div>
        <label htmlFor={props.id || props.name}>{label}</label>
        <select {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };


  MySelect.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string.isRequired,
  }

  

  MyTextInput.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string.isRequired,
  }


  MyCheckbox.propTypes = {
    children: PropTypes.any,
  }