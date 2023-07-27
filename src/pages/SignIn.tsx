import React, { useState } from 'react';
import sign1 from '../vectors/sign1.jpeg';
import Button from "../components/ButtonGetStarted";
import './SignIn.css';

const SignIn: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can handle the form submission and validation logic.
    console.log(formData);
  };

  return (
    <div>
        <div className="Title"><h6>Welcome Back!</h6></div>
        <div className="SignImage">
            <img src={sign1} alt="SignInImage" height={154} width={223}/>
        </div>
        <form onSubmit={handleSubmit}>
        <div className='InFields'>
          <div className='mail'>
            <input
              placeholder='email'
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='mail'>
            <input
              placeholder='password'
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div>
          <Button onClick={() => console.log("Button clicked")}>
            Sign In 
          </Button>
        </div>
        <div>
          <p>
            Don't have an account? 
              <div>
                <button className='smtext'>Sign Up</button>
              </div>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;