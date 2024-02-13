import React, { useEffect, useState } from "react";
import axios from "axios";

const User = () => {
  const [gender,setGender] = useState("Gender");
  const [fname,setFname] = useState("First Name");
  const [lname,setLname] = useState("Last Name");
  const [phone,setPhone] = useState("Phone");
  const [img,setImg] = useState("");
 
  useEffect(() => {
      const api = `https://randomuser.me/api/?page=1&results=1&seed=abc`;
      axios.get(api)
      .then(response => {
        setGender(response.data.results[0].gender);
        setPhone(response.data.results[0].phone);
        setImg(response.data.results[0].picture.large);
        setFname(response.data.results[0].name.first);
        setLname(response.data.results[0].name.last);
      })
      .catch(error => {
        console.log(error);
      })
  },[]);

  
  return (
    <div className="block p-6 border-black border-8 bg-white">
      <div className="flex py-5 px-5">
      <div>
        <img
          src= {img}
          alt="picture"
          className="object-cover object-center rounded lg-h-200 w-200"
        />
      </div>
        <div className="px-10 py-2 text-lg font-medium">
          <div className="py-2">{fname} {lname}</div>
          <div className="py-2">Gender: {gender}</div>
          <div className="py-2">Phone: {phone} </div>
        </div>
      </div>
    </div>
  );
};

export default User;
