//#region IMPORT
// IMPORT MODULE
import { Field, FieldProps, Formik, FormikValues } from "formik";
import React from "react";

// IMPORT CONFIG
import "./HomeSearchUser.section.style.scss";
//#endregion

//#region INTERFACE
interface Props {
  onSearch(name: string): void;
  loadingSearch: boolean;
}
//#endregion
const HomeSearchUser: React.FC<Props> = ({ onSearch, loadingSearch }: Props) => {
  const handleSearch = (e: FormikValues) => {
    onSearch(e.name);
  };
  return (
    <div className="home-search-user">
      <div className="home-search-user__title">Search existing user</div>
      <Formik initialValues={{ name: "" }} onSubmit={handleSearch}>
        {({ handleSubmit }): React.ReactElement => (
          <div className="home-search-user__form">
            <Field
              name="name"
              render={({ field }: FieldProps) => (
                <input {...field} className="form-field" type="text" placeholder="Email or Phone or Full Name" />
              )}
            />
            <div
              className={`home-search-user__form--button${loadingSearch ? "-loading" : ""}`}
              onClick={() => handleSubmit()}>
              Search
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default HomeSearchUser;
