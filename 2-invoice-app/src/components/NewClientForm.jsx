import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa";
import { createClient } from "../reducers/clientsReducer";
import { toggleIsClickedNewClient } from "../reducers/isNewClientReducer";

const NewClientForm = () => {
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const isClickedNewClient = useSelector((state) => state.isClickedNewClient);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fullName && email && phoneNumber) {
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

      dispatch(toggleIsClickedNewClient())
    }
  };

  return (
    <div>
      <div
        onClick={() => dispatch(toggleIsClickedNewClient())}
        className="inline-flex"
      >
        <FaPlus />
        <p>New client</p>
      </div>
      {isClickedNewClient ? (
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
      ) : (
        ""
      )}
    </div>
  );
};

export default NewClientForm;
