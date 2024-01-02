import { useState } from "react";
import { useDispatch } from "react-redux";
import {FaPlus} from 'react-icons/fa'
import { createClient } from "../reducers/clientsReducer";

const NewClientForm = () => {
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createClient({
        fullName,
        email,
        profilePicture,
        phoneNumber,
      })
    );
    setFullName("");
    setEmail("");
    setProfilePicture("");
    setPhoneNumber("");
  };

  return (
    <div>
        <div className="flex text-cyan-800">
        <FaPlus />
        <p>New client</p>
        </div>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        <br />
        <label>
          Profile Picture:
          <input
            type="file"
            value={profilePicture}
            onChange={(e) => setProfilePicture(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewClientForm;
