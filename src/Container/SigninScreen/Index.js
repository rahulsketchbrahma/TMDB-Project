import React,{useState,useEffect} from "react";
import './SigninScreen.css'

function SignIn(){

    const initialValues = { username: "", email: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    return errors;
  };
  return (
      <>
    <div className="signin-wrapper">
    <div className="signin" />
    <div className="signin-wrappers">
       <h1 className="signin-title"><span className="Alien">Alien</span> back</h1>
       <p className="signin-content">Join the world's largest community</p>  
    </div>
    <div className="Form_container"> 
     <div>
      <form onSubmit={handleSubmit}>
        <div className="ui divider"></div>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="success_message">Signed in successfully</div>
      ) : (null)}
        <div className="ui form">
          <div className="field">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
              className='input_value'
            />
          </div>
          <p className="form_e">{formErrors.username}</p>
          <div className="field">
            
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
              className='input_value'
            />
          </div>
          <p className="form_e">{formErrors.email}</p>
          <button  type="submit" className="signin_button">Login</button>
        </div>
      </form>
      </div>
    </div>
    </div>
    </>
  );

}
export default SignIn


