import React from "react";
// import { Logout } from "./Logout";
// import { Outline } from "./Outline";
// import { Solid } from "./Solid";
import log from "./Overview.module.css";

export const Overview = (): JSX.Element => {
  return (
    <div className={log.overview}>
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
                <div className={log.text_wrapper2}>Users</div>
                <Outline className={log.icon_instance_node} color="white" />
              </div>
              <div className={log.group3}>
                <div className={log.text_wrapper2}>Admins</div>
                <Solid className={log.icon_instance_node} color="white" />
              </div>
              <div className={log.group4}>
                <div className={log.text_wrapper2}>Logout</div>
                <Logout className={log.icon_instance_node} color="white" />
              </div>
            </div>
          </div>
          <img className={log.IMG} alt="Img" src="IMG-20230509-wa0021-removebg-preview-1.png" />
        </div>
        <div className={log.overlap2}>
          <div className={log.text_wrapper3}>Overview</div>
          <div className={log.group_wrapper}>
            <div className={log.group5}>
              <div className={log.text_wrapper4}>Rex Stephen</div>
              <div className={log.text_wrapper5}>Administrator</div>
            </div>
          </div>
        </div>
        <div className={log.overlap_wrapper}>
          <div className={log.overlap3}>
            <div className={log.employees}>
              <div className={log.overlap_group2}>
                <div className={log.text_wrapper6}>1,000,000</div>
                <div className={log.TOTAL_NUMBER_OF}>TOTAL NUMBER&nbsp;&nbsp;OF USERS</div>
                <div className={log.group6} />
              </div>
            </div>
            <img className={log.users_outline} alt="Users outline" src="outline.svg" />
          </div>
        </div>
        <div className={log.overlap_group_wrapper}>
          <div className={log.overlap3}>
            <div className={log.employees}>
              <div className={log.overlap_group3}>
                <div className={log.text_wrapper6}>970</div>
                <div className={log.text_wrapper7}>TOTAL NUMBER OF ADMINS</div>
                <div className={log.group6} />
              </div>
            </div>
            <Solid className={log.users_outline} color="#007575" />
          </div>
        </div>
        <div className={log.recent_activity}>
          <div className={log.overlap4}>
            <div className={log.user_activity}>
              <div className={log.text_wrapper8}>Adelanke Adelanke</div>
              <div className={log.text_wrapper9}>View Details</div>
              <img className={log.img} alt="Rectangle" src="rectangle-85.svg" />
            </div>
            <div className={log.user_activity2}>
              <div className={log.text_wrapper10}>Adelanke Adelanke</div>
              <div className={log.text_wrapper11}>View Details</div>
              <img className={log.img} alt="Rectangle" src="rectangle-86.svg" />
            </div>
            <div className={log.user_activity3}>
              <div className={log.text_wrapper10}>Adelanke Adelanke</div>
              <div className={log.text_wrapper11}>View Details</div>
              <img className={log.img} alt="Rectangle" src="rectangle-87.svg" />
            </div>
            <div className={log.user_activity4}>
              <div className={log.text_wrapper10}>Adelanke Adelanke</div>
              <div className={log.text_wrapper11}>View Details</div>
              <img className={log.img} alt="Rectangle" src="rectangle-88.svg" />
            </div>
            <div className={log.user_activity5}>
              <div className={log.text_wrapper12}>Adelanke Adelanke</div>
              <div className={log.text_wrapper11}>View Details</div>
              <img className={log.img} alt="Rectangle" src="image.svg" />
            </div>
            <div className={log.user_activity6}>
              <div className={log.text_wrapper10}>Adelanke Adelanke</div>
              <div className={log.text_wrapper11}>View Details</div>
              <img className={log.img} alt="Rectangle" src="rectangle-87-2.svg" />
            </div>
            <div className={log.rectangle2} />
          </div>
          <div className={log.text_wrapper13}>List Of Users</div>
        </div>
        <div className={log.recent_activity2}>
          <div className={log.overlap4}>
            <div className={log.user_activity}>
              <div className={log.text_wrapper8}>Adelanke Adelanke</div>
              <div className={log.text_wrapper9}>View Details</div>
              <img className={log.img} alt="Rectangle" src="rectangle-85-2.svg" />
            </div>
            <div className={log.user_activity2}>
              <div className={log.text_wrapper10}>Adelanke Adelanke</div>
              <div className={log.text_wrapper11}>View Details</div>
              <img className={log.img} alt="Rectangle" src="rectangle-86-2.svg" />
            </div>
            <div className={log.user_activity3}>
              <div className={log.text_wrapper10}>Adelanke Adelanke</div>
              <div className={log.text_wrapper11}>View Details</div>
              <img className={log.img} alt="Rectangle" src="rectangle-87-3.svg" />
            </div>
            <div className={log.user_activity4}>
              <div className={log.text_wrapper10}>Adelanke Adelanke</div>
              <div className={log.text_wrapper11}>View Details</div>
              <img className={log.img} alt="Rectangle" src="rectangle-88-2.svg" />
            </div>
            <div className={log.user_activity5}>
              <div className={log.text_wrapper12}>Adelanke Adelanke</div>
              <div className={log.text_wrapper11}>View Details</div>
              <img className={log.img} alt="Rectangle" src="rectangle-86-3.svg" />
            </div>
            <div className={log.user_activity6}>
              <div className={log.text_wrapper10}>Adelanke Adelanke</div>
              <div className={log.text_wrapper11}>View Details</div>
              <img className={log.img} alt="Rectangle" src="rectangle-87-4.svg" />
            </div>
            <div className={log.rectangle2} />
          </div>
          <div className={log.text_wrapper13}>List Of Admins</div>
        </div>
      </div>
    </div>
  );
};
