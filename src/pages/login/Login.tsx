// import React from "react";
// import "./style.css";

// export const Login = (): JSX.Element => {
//   return (
//     <div className="login">
//       <div className="div">
//         <img className="IMG" alt="Img" src="IMG-20230509-wa0021-removebg-preview-1.png" />
//         <div className="overlap">
//           <div className="group">
//             <div className="overlap-group">
//               <div className="text-wrapper">Email Address</div>
//             </div>
//             <div className="text-wrapper-2">Email Address</div>
//           </div>
//           <div className="div-wrapper">
//             <div className="text-wrapper-3">Login</div>
//           </div>
//           <div className="group-2">
//             <div className="overlap-group">
//               <div className="text-wrapper">Password</div>
//             </div>
//             <div className="text-wrapper-2">Password</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import React from "react";
import log from "./Login.module.css";

export const Login = (): JSX.Element => {
  return (
    <>
    <div className={log.login}>
      <div className={log.div}>
        <img className={log.IMG} alt="Img" src="IMG-20230509-wa0021-removebg-preview-1.png" />
        <div className={log.overlap}>
          <div className={log.group}>
            <div className={log.overlap_group}>
              <div className={log.text_wrapper}>Email Address</div>
            </div>
            <div className={log.text_wrapper2}>Email Address</div>
          </div>
          <div className={log.div_wrapper}>
            <div className={log.text_wrapper3}>Login</div>
          </div>
          <div className={log.group2}>
            <div className={log.overlap_group}>
              <div className={log.text_wrapper}>Password</div>
            </div>
            <div className={log.text_wrapper2}>Password</div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
