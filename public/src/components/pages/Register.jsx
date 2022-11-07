import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/register.css";
import axios from "axios";
import { registerRoute } from "../utils/APIRoutes";

function Register() {

    const navigate = useNavigate();
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        number: "",
      });

      const handleSubmit = async (event) => {
        event.preventDefault();
        if (handleValidation()) {
          console.log('jhjkfvfnvl', registerRoute);
          const { email, username, password, number } = values;
          const { data } = await axios.post(registerRoute, {
            username,
            email,
            password,
            number,
          });
    
          if (data.status === false) {
            alert('Error 404');
          }
          if (data.status === true) {
            localStorage.setItem('grass_me', JSON.stringify(data.user));
            navigate("/");
          }
        }
      };

    const handleValidation = () => {
      const { password, username, email } = values;
     if (username.length < 3) {
        alert("Username should be greater than 3 characters");
        return false;
      } else if (password.length < 8) {
        alert("Password is not strong");
        return false;
      } else if (email === "") {
        alert("Invalid Email");
        return false;
      }
  
      return true;
    };

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
      };

  return (
   <>
    <form action="" onSubmit={(event)=> handleSubmit(event)}>

    <div>
      <div className="register mx-auto">
        <h2 className="text-center py-2">Register</h2>

        <div className="d-flex px-4 py-2">
          <h6 className="inputHeading px-4 py-2">Name</h6>
          <input type="text" className="form-control inputType"  name="username"   onChange={(e) => handleChange(e)}/>
        </div>

        <div className="d-flex px-4 py-2">
          <h6 className="inputHeading px-4 py-2">Email address</h6>
          <input type="email" className="form-control inputType" name="email"   onChange={(e) => handleChange(e)} />
        </div>

        <div className="d-flex px-4 py-2">
          <h6 className="inputHeading px-4 py-2">Password</h6>
          <input type="password" className="form-control inputType" name="password"  onChange={(e) => handleChange(e)}  />
        </div>

        <div className="d-flex px-4 py-2">
          <h6 className="inputHeading px-4 py-2">Contact Number</h6>
          <input type="text" className="form-control inputType"  name="number" onChange={(e) => handleChange(e)}/>
        </div>

        <div class="py-4 col-md-12 text-center">
          <button type="submit" className="button btn btn-primary btn-block">
            Sign-up
          </button>
        </div>

        <div class="mx-4 a-divider a-divider-break">
          <h5>or Sign in with</h5>
        </div>

        <p className="alternative text-center">
          <a href="#">
            <i class="fa-brands facebook fa-facebook px-2 py-4"></i>
          </a>
          <a href="#">
            <i class="fa-brands google fa-google px-2 py-4"></i>
          </a>
          <a href="#">
            <i class="fa-brands apple fa-apple px-2 py-4"></i>
          </a>
          <a href="#">
            <i class="fa-brands twitter fa-twitter px-2 py-4"></i>
          </a>
        </p>
      </div>
    </div>
    </form>
   
   </>
  )
}

export default Register;