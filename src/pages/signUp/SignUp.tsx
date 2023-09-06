import React from "react";
import log from "./SignUp.module.css";
import { useState } from "react";

export const SignUp = (): JSX.Element => {

  interface SignUp { 
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    repeatPassWord: string;
  }

  const [formData, setFormData] = useState<SignUp>({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    repeatPassWord: "",
  });
  return (
    <div className={log.sign_up}>
      <div className={log.div}>
        <div className={log.overlap}>
          <div className={log.frame}>
            <div className={log.group}>
              <div className={log.overlap_group}>
                <div className={log.text_wrapper}>FirstName</div>
              </div>
              <div className={log.text_wrapper2}>First Name</div>
            </div>
            <div className={log.group}>
              <div className={log.overlap_group}>
                <div className={log.text_wrapper}>Last Name</div>
              </div>
              <div className={log.text_wrapper2}>Last Name</div>
            </div>
            <div className={log.group}>
              <div className={log.overlap_group}>
                <div className={log.text_wrapper}>Username</div>
              </div>
              <div className={log.text_wrapper2}>Username</div>
            </div>
            <div className={log.group}>
              <div className={log.overlap_group}>
                <div className={log.text_wrapper}>Email Address</div>
              </div>
              <div className={log.text_wrapper2}>Email Address</div>
            </div>
            <div className={log.group}>
              <div className={log.overlap_group}>
                <div className={log.text_wrapper}>Password</div>
              </div>
              <div className={log.text_wrapper2}>Password</div>
            </div>
            <div className={log.group}>
              <div className={log.overlap_group}>
                <div className={log.text_wrapper}>Confirm Password</div>
              </div>
              <div className={log.text_wrapper3}>Confirm Password</div>
            </div>
          </div>
          <div className={log.overlap_wrapper}>
            <div className={log.div_wrapper}>
              <div className={log.text_wrapper4}>Sign Up</div>
            </div>
          </div>
        </div>
        <img className={log.IMG} alt="ThreeScorers" src="IMG-20230509-WA0021-removebg-preview 1.png" />
        <div className={log.text_wrapper5}>Create Account</div>
        <p className={log.p}>Join the community and have fun predicting!</p>
      </div>
    </div>
  );
};
