//#region IMPORT
// IMPORT MODULE
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

// IMPORT COMPONENT
import { HomePreviewUser, HomeSearchUser } from "./section";

// IMPORT CONFIG
import { LoginResponse, SearchFormValues, SearchUserResponse } from "../../../user/entity";
import { PATH } from "../../../wrapper/entity";
import { search } from "../../../../services/userService";
import "./Home.page.style.scss";
//#endregion

const Home: React.FC = () => {
  //#region GENERAL
  const history = useHistory();
  const currentTime = new Date();
  const userData = localStorage.getItem("userData")
    ? (JSON.parse(localStorage.getItem("userData") as string) as LoginResponse)
    : undefined;

  const [loadingSearch, setLoadingSearch] = useState(false);
  const [searchData, setSearchData] = useState<SearchFormValues>({
    birthDate: "",
    email: "",
    gender: undefined,
    name: "",
    phoneNumber: "",
    phoneNumberExt: ""
  });
  //#endregion

  //#region HANDLE CREDENTIALS
  const handleLogout = () => {
    localStorage.clear();
    history.replace(PATH.LOGIN);
  };

  useEffect(() => {
    if (!userData || currentTime > new Date(userData.expires)) {
      handleLogout();
    }
  }, []);
  //#endregion

  //#region HANDLE SEARCH EXISTING USER
  const handleExistingUser = async (data: string) => {
    setLoadingSearch(true);
    const res = await search(data);
    if (res.status === 200) {
      setLoadingSearch(false);
      const resData = (res.data as SearchUserResponse).users[0];
      if (!resData) return;
      setSearchData({
        name: resData.name,
        phoneNumber: resData.phoneNumbers[0].number.toString() || "",
        phoneNumberExt: resData.phoneNumbers[0].ext || "",
        birthDate: "",
        email: resData.email.address,
        gender: resData.gender
      });
    }
  };
  //#endregion

  return (
    <div className="home">
      <HomeSearchUser onSearch={handleExistingUser} loadingSearch={loadingSearch} />
      <HomePreviewUser searchData={searchData} />
      {/* TODO: UNCOMMENT IF NEEDED */}
      {/* <div className="home__logout-button" onClick={handleLogout}>
        logout
      </div> */}
    </div>
  );
};

export default Home;
