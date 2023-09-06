import React from "react";
// import { Logout } from "./Logout";
// import { Outline } from "./Outline";
// import { Solid } from "./Solid";
import log from "./Admin.module.css";

export const Admin = (): JSX.Element => {
  return (
    <div className={log.admins}>
      <div className={log.div}>
        <div className={log.overlap}>
          <img className={log.vector} alt="Vector" src="vector-2.svg" />
          <div className={log.overlap_group}>
            <div className={log.rectangle} />
            <div className={log.frame}>
              <div className={log.group}>
                <div className={log.text_wrapper}>Overview</div>
                <img className={log.icon_instance_node} alt="Group" src="group-3038.png" />
              </div>
              <div className={log.group2}>
                <div className={log.text_wrapper}>Users</div>
                <Outline className={log.icon_instance_node} color="white" />
              </div>
              <div className={log.group3}>
                <div className={log.text_wrapper2}>Admins</div>
                <Solid className={log.icon_instance_node} color="#303030" />
              </div>
              <div className={log.group4}>
                <div className={log.text_wrapper3}>Logout</div>
                <Logout className={log.icon_instance_node} color="white" />
              </div>
            </div>
          </div>
          <img className={log.IMG} alt="Img" src="IMG-20230509-wa0021-removebg-preview-1.png" />
        </div>
        <div className={log.overlap2}>
          <div className={log.text_wrapper4}>Admins</div>
          <div className={log.group5}>
            <div className={log.group6}>
              <div className={log.text_wrapper5}>Rex Stephen</div>
              <div className={log.text_wrapper6}>Administrator</div>
            </div>
            <img className={log.ellipse} alt="Ellipse" src="ellipse-2.svg" />
          </div>
        </div>
        <div className={log.group_wrapper}>
          <div className={log.overlap_wrapper}>
            <div className={log.overlap3}>
              <div className={log.employer_s_list}>
                <div className={log.overlap_group2}>
                  <div className={log.overlap4}>
                    <div className={log.rectangle2} />
                    <div className={log.text_wrapper7}>Search for Admin</div>
                    <img className={log.img} alt="Vector" src="vector.svg" />
                  </div>
                  <div className={log.text_wrapper8}>Admin’s Name</div>
                  <div className={log.verified_status}>
                    <div className={log.div_wrapper}>
                      <div className={log.text_wrapper9}>View Details</div>
                    </div>
                  </div>
                  <div className={log.frame_wrapper}>
                    <div className={log.div_wrapper}>
                      <div className={log.text_wrapper9}>View Details</div>
                    </div>
                  </div>
                  <div className={log.verified_status2}>
                    <div className={log.div_wrapper}>
                      <div className={log.text_wrapper9}>View Details</div>
                    </div>
                  </div>
                  <div className={log.verified_status3}>
                    <div className={log.div_wrapper}>
                      <div className={log.text_wrapper9}>View Details</div>
                    </div>
                  </div>
                  <div className={log.verified_status4}>
                    <div className={log.div_wrapper}>
                      <div className={log.text_wrapper9}>View Details</div>
                    </div>
                  </div>
                  <div className={log.verified_status5}>
                    <div className={log.div_wrapper}>
                      <div className={log.text_wrapper9}>View Details</div>
                    </div>
                  </div>
                  <div className={log.group7}>
                    <div className={log.text_wrapper10}>Adelanke Adelanke</div>
                    <img className={log.rectangle3} alt="Rectangle" src="rectangle-87.svg" />
                  </div>
                  <div className={log.group8}>
                    <div className={log.text_wrapper10}>Adelanke Adelanke</div>
                    <img className={log.rectangle3} alt="Rectangle" src="image.svg" />
                  </div>
                  <div className={log.group9}>
                    <div className={log.text_wrapper10}>Adelanke Adelanke</div>
                    <img className={log.rectangle3} alt="Rectangle" src="rectangle-87-2.svg" />
                  </div>
                  <div className={log.group10}>
                    <div className={log.text_wrapper10}>Adelanke Adelanke</div>
                    <img className={log.rectangle3} alt="Rectangle" src="rectangle-87-3.svg" />
                  </div>
                  <div className={log.group11}>
                    <div className={log.text_wrapper10}>Adelanke Adelanke</div>
                    <img className={log.rectangle3} alt="Rectangle" src="rectangle-87-4.svg" />
                  </div>
                  <div className={log.group12}>
                    <div className={log.text_wrapper10}>Adelanke Adelanke</div>
                    <img className={log.rectangle3} alt="Rectangle" src="rectangle-87-5.svg" />
                  </div>
                  <img className={log.line} alt="Line" src="line-75.svg" />
                  <img className={log.line2} alt="Line" src="line-76.svg" />
                  <img className={log.line3} alt="Line" src="line-77.svg" />
                  <img className={log.line4} alt="Line" src="line-78.svg" />
                  <img className={log.line5} alt="Line" src="line-79.svg" />
                  <img className={log.line6} alt="Line" src="line-80.svg" />
                  <img className={log.line7} alt="Line" src="line-81.svg" />
                  <div className={log.rectangle4} />
                </div>
              </div>
              <div className={log.filter}>
                <div className={log.overlap5}>
                  <div className={log.text_wrapper11}>All</div>
                  <img className={log.vector2} alt="Vector" src="vector-3.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
