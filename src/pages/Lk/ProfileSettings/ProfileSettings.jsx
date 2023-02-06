import React, { useEffect, useState } from "react";

import PasswordChange from "./PasswordChange";
import PersonalData from "./PersonalData";
import AccountActions from "./AccountActions";

import LkHeader from "../../../components/LkHeader/LkHeader";
import { Bar } from "../Bar/Bar";
import { Alert } from "../../../components/UI/Alert/Alert";

import style from "./ProfileSettings.module.scss";

const ProfileSettings = (props) => {
  // const [sideBarOpen, setSideBarOpen] = useState(true);
  // const [show, setShow] = useState(false);
  const [userData, setUserData] = useState(null);
  const [alert, setAlert] = useState("");

  const [logoImg, setLogoImg] = useState();
  const [file, setFile] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const url = `${props.URL}account/users/me/`;
  const reqOptions = {
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.getItem("globalToken")}`,
    },
  };

  const fetchUserData = async () => {
    try {
      const res = await fetch(url, reqOptions);
      const data = await res.json();
      setUserData(data);
    } catch (err) {
      console.log("Error: " + err);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className={style.main}>
      <div className={style.alert}>
        <Alert alert={alert} setAlert={setAlert} styling={true} />
      </div>
      <div className={style.wrapper}>
        <div className={style.container}>
          {/* <div
            className={
              !sideBarOpen ? `${style.sideBarOpened}` : `${style.sideBarClosed}`
            }
          >
            <Bar name={props.name} />
            <img
              onClick={() => setSideBarOpen(!sideBarOpen)}
              src="img/Lk/sideBarIcon.svg"
              alt="sideBarIcon"
            />
          </div> */}
          <Bar name={props.name} />
          <div>
            <div className={style.header}>
              <LkHeader />
            </div>
            <div className={style.dataWrapper}>
              <PersonalData
                URL={props.URL}
                logoImg={logoImg}
                setLogoImg={setLogoImg}
                file={file}
                setFile={setFile}
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
              />
              <div>
                <PasswordChange
                  URL={props.URL}
                  password={password}
                  setPassword={setPassword}
                  repeatPassword={repeatPassword}
                  setRepeatPassword={setRepeatPassword}
                />
                <AccountActions
                  URL={props.URL}
                  logoImg={logoImg}
                  setLogoImg={setLogoImg}
                  file={file}
                  setFile={setFile}
                  name={name}
                  setName={setName}
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  repeatPassword={repeatPassword}
                  setRepeatPassword={setRepeatPassword}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
