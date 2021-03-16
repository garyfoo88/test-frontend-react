//#region IMPORT
// IMPORT MODULE
import React from "react";
import { Field, FieldProps, Formik } from "formik";

// IMPORT CONFIG
import { SearchFormValues, USERGENDER } from "../../../../../user/entity";
import "./HomePreviewUser.section.style.scss";
//#endregion

//#region INTERFACE
interface Props {
  searchData: SearchFormValues;
}
//#endregion
const HomePreviewUser: React.FC<Props> = ({ searchData }: Props) => {
  return (
    <div className="home-preview-user">
      <div className="home-preview-user__title">user</div>
      <Formik initialValues={searchData} enableReinitialize onSubmit={() => {}}>
        {(): React.ReactElement => (
          <div className="home-preview-user__form">
            <div className="home-preview-user__form--section">
              <Field
                name="name"
                render={({ field }: FieldProps) => (
                  <input className="form-field" {...field} type="text" placeholder="Full Name" />
                )}
              />
            </div>
            <div className="home-preview-user__form--section">
              <Field
                name="email"
                render={({ field }: FieldProps) => (
                  <input className="form-field" {...field} type="text" placeholder="Email address" />
                )}
              />
            </div>
            <div className="home-preview-user__form--section-row">
              <Field
                name="birthdate"
                render={({ field }: FieldProps) => (
                  <input className="form-field__birthdate" {...field} type="text" placeholder="Birthdate" />
                )}
              />
              <Field
                name="gender"
                render={({ field }: FieldProps) => (
                  <select {...field} className="form-field">
                    <option value={undefined}>Gender</option>
                    {Object.values(USERGENDER).map((item, index) => (
                      <option value={item} key={`option-gender-${index}`}>
                        {item}
                      </option>
                    ))}
                  </select>
                )}
              />
            </div>
            <div className="home-preview-user__form--section-row">
              <Field
                name="phoneNumberExt"
                render={({ field }: FieldProps) => (
                  <input className="form-field" {...field} type="text" placeholder="+65" />
                )}
              />
              <Field
                name="phoneNumber"
                render={({ field }: FieldProps) => (
                  <input className="form-field__phone" {...field} type="text" placeholder="Phone number" />
                )}
              />
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default HomePreviewUser;
