import React, { useState } from 'react';
import Button from "../components/ButtonGetStarted";
import './SignUp.css';

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
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
      <div className="Heading"><h6>Welcome Onboarding!</h6></div>
      <form onSubmit={handleSubmit}>
        <div className='InputFields'>
          <div className='Name'>
            <input
              placeholder='Name'
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className='Email'>
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
          <div className='Password'>
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
          <div className='ConPassword'>
            <input
              placeholder='confirm password'
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div>
          <Button onClick={() => console.log("Button clicked")}>
            Sign Up 
          </Button>
        </div>
        <div>
          <p>
            Already have an account? 
              <div>
                <button className='smalltext'>Sign In</button>
              </div>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;

