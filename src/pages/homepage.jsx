import React, { useState } from "react";
import { search } from "../services/userService";
import "../styles/components/homepage.scss";
function Homepage() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("Gender");
  const [extension, setExtension] = useState("");
  const [phone, setPhone] = useState("");

  const onSearch = (e) => {
    e.preventDefault();
    search(searchTerm)
      .then(({ data }) => {
        setIsLoading(false);
        const userData = data.users;
        if (userData.length > 0) {
          //read the first user data if there are multiple results
          const name = userData[0].name ? userData[0].name : "";
          const userEmail = userData[0].email?.address ? userData[0].email.address : "";
          const birthdate = userData[0].birthdate ? userData[0].birthdate.split("T")[0] : "";
          const userGender = userData[0].gender ? userData[0].gender : "Gender";
          const ext = userData[0].phoneNumbers[0]?.ext ? userData[0].phoneNumbers[0].ext :  "";
          const phoneNum = userData[0].phoneNumbers[0]?.number ? userData[0].phoneNumbers[0]?.number : "";
        console.log(userData[0])
          setFullName(name);
          setEmail(userEmail);
          setDob(birthdate);
          setGender(userGender);
          setExtension(ext);
          setPhone(phoneNum);
          setSearchTerm("")
        } else {
          resetData()
          alert("No user information found");
        }
      })
      .catch((err) => {
        console.log(err)
        alert("Error in submission, Please try again later");
        resetData()
        setIsLoading(false);
      });
  };

  const resetData = () => {
    setFullName("");
    setEmail("");
    setDob("");
    setGender("Gender");
    setExtension("");
    setPhone("");
    setSearchTerm("")
  }

  return (
    <div className="home-container">
      <div className="search-container">
        <form onSubmit={onSearch}>
          <div className="search-header">SEARCH EXISTING USER</div>
          <div>
            <input
              required
              disabled={isLoading}
              className="search-input"
              type="text"
              placeholder="Email or Phone or Full Name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              disabled={isLoading}
              className="search-button"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      <div className="fields-container">
        <div>USER</div>
        <div>
          <input
            className="name-email-input"
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <input
            className="name-email-input"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="inline-inputs">
          <input
            className="dob-input"
            type="text"
            placeholder="Birthdate"
            onChange={(e) => setDob(e.target.value)}
            value={dob}
          />
          <select
            onChange={(e) => setGender(e.target.value)}
            value={gender}
            className="select-input"
          >
            <option value="Gender" disabled hidden>
              Gender
            </option>
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="N/A">N/A</option>
          </select>
        </div>
        <div className="inline-inputs">
          <input
            className="extension"
            type="text"
            placeholder="Ext."
            value={extension}
            onChange={(e) => setExtension(e.target.value)}
          />
          <input
            className="phone"
            type="text"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
