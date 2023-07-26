import React from "react";
import page1 from '../vectors/page1.jpeg';
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="StarterImage">
        <img src={page1} alt="ToDoImage" height={154} width={223}/>
      </div>
      <div>
        <h6>Get Things Done With ToDo</h6>
        <p> Creating lists and finishing task have never been so easy Make your Life easier with TODO </p>
      </div>
    </div>
  );
};

export default Home;