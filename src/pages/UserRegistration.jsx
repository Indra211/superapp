import { useState } from "react";
import pic from "../assests/registeration.png";
import { TextInput, Title } from "../components";
import { StoreData } from "../utils/storages";
import { Colors, FontFamily } from "../styles";
import { useNavigate } from "react-router-dom";

export const UserRegistration = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    isAccepted: false,
  });
  const [errTxt, setErrTxt] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    isAccepted: "",
  });
  const handleData = (val) => {
    setValues((data) => ({ ...data, [val.name]: val.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = { ...errTxt };
    if (
      values.name.trim().length === 0 ||
      values.name === undefined ||
      values.name === null
    ) {
      errors.name = "Name is required";
    } else {
      errors.name = "";
    }
    if (
      values.email.trim().length === 0 ||
      values.email === undefined ||
      values.email === null ||
      !values.email.includes("@") ||
      !values.email.includes(".")
    ) {
      errors.email = "Email is required";
    } else {
      errors.email = "";
    }
    if (
      values.username.trim().length === 0 ||
      values.username === undefined ||
      values.username === null
    ) {
      errors.username = "UserName is required";
    } else {
      errors.username = "";
    }
    if (
      values.mobile.trim().length === 0 ||
      values.mobile === undefined ||
      values.mobile === null
    ) {
      errors.mobile = "Mobile is required";
    } else {
      errors.mobile = "";
    }
    if (values.isAccepted === false) {
      errors.isAccepted = "Please accept the terms and conditions";
    } else {
      errors.isAccepted = "";
    }
    setErrTxt({ ...errors });
    if (
      errors.name === "" &&
      errors.isAccepted === "" &&
      errors.mobile === "" &&
      errors.username === "" &&
      errors.email === ""
    ) {
      StoreData("userData", values);
      navigate("/genere");
    }
  };
  console.log(values.email.trim().length === 0);
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div style={{ height: "100vh", width: "50vw", position: "relative" }}>
        <img
          src={pic}
          width={"100%"}
          height={"100%"}
          style={{ objectFit: "cover" }}
          alt="userpic"
        />
        <p
          style={{
            position: "absolute",
            bottom: "4rem",
            left: 24,
            color: "#FFF",
            fontSize: "2rem",
            fontWeight: "bold",
            fontFamily: FontFamily.roboto,
          }}
        >
          Discover new things on Superapp
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 24px",
          height: "100vh",
          width: "50vw",
          gap: 24,
        }}
      >
        <Title style={{ alignSelf: "center" }} />
        <h6
          style={{
            fontFamily: FontFamily.dmsans,
            color: "#FFF",
            fontSize: "14px",
            fontWeight: "normal",
            alignSelf: "center",
          }}
        >
          Create your new account
        </h6>
        <TextInput
          name={"name"}
          value={values.name}
          setValue={handleData}
          placeholder={"Name"}
          errTxt={errTxt.name}
          style={{
            border: errTxt.name.length > 0 ? "1px solid red" : "none",
          }}
        />
        <TextInput
          name={"username"}
          value={values.username}
          setValue={handleData}
          placeholder={"UserName"}
          errTxt={errTxt.username}
          style={{
            border: errTxt.username.length > 0 ? "1px solid red" : "none",
          }}
        />
        <TextInput
          name={"email"}
          value={values.email}
          setValue={handleData}
          type={"email"}
          placeholder={"Email"}
          errTxt={errTxt.email}
          style={{
            border: errTxt.email.length > 0 ? "1px solid red" : "none",
          }}
        />
        <TextInput
          name={"mobile"}
          type={"tel"}
          value={values.mobile}
          setValue={handleData}
          placeholder={"Mobile"}
          errTxt={errTxt.mobile}
          style={{
            border: errTxt.mobile.length > 0 ? "1px solid red" : "none",
          }}
        />
        <div>
          <input
            onChange={(e) =>
              setValues((data) => ({ ...data, isAccepted: e.target.checked }))
            }
            type="checkbox"
            name="isAccepted"
            id="isAccepted"
            style={{
              border: `1px solid ${
                errTxt.isAccepted.length > 0 ? "red" : "green"
              }`,
              padding: "12px 18px",
              borderRadius: "5px",
            }}
          />
          <label
            style={{
              marginLeft: "10px",
              color: "white",
            }}
            htmlFor="isAccepted"
          >
            Share my registration data with Superapp
          </label>
          {errTxt.isAccepted && (
            <p style={{ color: "red", fontSize: 14 }}>{errTxt.isAccepted}</p>
          )}
        </div>
        <button
          style={{
            backgroundColor: Colors.primary,
            border: "none",
            color: "white",
            padding: 8,
            borderRadius: 16,
          }}
        >
          Submit
        </button>
        <p
          style={{
            color: "white",
            fontFamily: FontFamily.roboto,
            fontSize: 14,
          }}
        >
          By clicking on Sign up. you agree to Superapp{" "}
          <text style={{ color: Colors.primary, cursor: "pointer" }}>
            {" "}
            Terms and Conditions of Use
          </text>
        </p>
        <p
          style={{
            color: "white",
            fontFamily: FontFamily.roboto,
            fontSize: 14,
          }}
        >
          To learn more about how Superapp collects, uses, shares and protects
          your personal data please head Superapp{" "}
          <text style={{ color: Colors.primary, cursor: "pointer" }}>
            {" "}
            Privacy Policy
          </text>
        </p>
      </form>
    </div>
  );
};
