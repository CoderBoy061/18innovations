import React from "react";
import "./style/dashboard.css";
import Sidebar from "./Sidebar";
import avatar from "../assests/avatar.png";
import { data } from "../data";

const DashBoard = () => {
  console.log(data);
  return (
    <div className="main-dashboard-conatainer">
      <div className="sidebar-component">
        <Sidebar />
      </div>
      <div className="data-display-container">
        <div className="display-container-heading">
          <p>Tickets</p>
          <div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="6.5"
                cy="6.5"
                r="5.75"
                stroke="#C5C7CD"
                stroke-width="1.5"
              />
              <path
                d="M11 11L15 15"
                stroke="#C5C7CD"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.99999 19C9.10374 19 9.99905 18.1047 9.99905 17H6.00093C6.00093 18.1047 6.89624 19 7.99999 19ZM14.7309 14.3216C14.1272 13.6728 12.9975 12.6969 12.9975 9.5C12.9975 7.07188 11.295 5.12812 8.99937 4.65125V4C8.99937 3.44781 8.55187 3 7.99999 3C7.44812 3 7.00062 3.44781 7.00062 4V4.65125C4.70499 5.12812 3.00249 7.07188 3.00249 9.5C3.00249 12.6969 1.8728 13.6728 1.26905 14.3216C1.08155 14.5231 0.998429 14.7641 0.999991 15C1.00343 15.5125 1.40562 16 2.00312 16H13.9969C14.5944 16 14.9969 15.5125 15 15C15.0016 14.7641 14.9184 14.5228 14.7309 14.3216Z"
                fill="#C5C7CD"
              />
              <circle
                cx="13"
                cy="5"
                r="3.75"
                fill="#3751FF"
                stroke="#F7F8FC"
                stroke-width="1.5"
              />
            </svg>
          </div>
          <div className="heading-user-div">
            <p>Jones Ferdinand</p>
            <img src={avatar} alt=" " />
          </div>
        </div>
        <div className="display-container-body">
          <div className="dispaly-container-body-heading">
            <p>All Tickets</p>
            <div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.12857 4.26839L3.31563 2.12548C3.48647 1.95815 3.7636 1.9582 3.93434 2.12548L6.12132 4.26839C6.39667 4.53812 6.20059 5.00001 5.81195 5.00001H4.5V13.5714C4.5 13.8081 4.30414 14 4.0625 14H3.1875C2.94586 14 2.75 13.8081 2.75 13.5714V5.00001H1.43794C1.04853 5.00001 0.853791 4.53758 1.12857 4.26839ZM7.5625 3.7143H14.5625C14.8041 3.7143 15 3.52243 15 3.28573V2.42858C15 2.19188 14.8041 2.00001 14.5625 2.00001H7.5625C7.32086 2.00001 7.125 2.19188 7.125 2.42858V3.28573C7.125 3.52243 7.32086 3.7143 7.5625 3.7143ZM7.125 6.71429V5.85715C7.125 5.62045 7.32086 5.42858 7.5625 5.42858H12.8125C13.0541 5.42858 13.25 5.62045 13.25 5.85715V6.71429C13.25 6.951 13.0541 7.14287 12.8125 7.14287H7.5625C7.32086 7.14287 7.125 6.951 7.125 6.71429ZM7.125 13.5714V12.7143C7.125 12.4776 7.32086 12.2857 7.5625 12.2857H9.3125C9.55414 12.2857 9.75 12.4776 9.75 12.7143V13.5714C9.75 13.8081 9.55414 14 9.3125 14H7.5625C7.32086 14 7.125 13.8081 7.125 13.5714ZM7.125 10.1429V9.28572C7.125 9.04901 7.32086 8.85715 7.5625 8.85715H11.0625C11.3041 8.85715 11.5 9.04901 11.5 9.28572V10.1429C11.5 10.3796 11.3041 10.5714 11.0625 10.5714H7.5625C7.32086 10.5714 7.125 10.3796 7.125 10.1429Z"
                  fill="#C5C7CD"
                />
              </svg>
              <p>Sort</p>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4369 0H0.563154C0.0635131 0 -0.188604 0.606234 0.165419 0.960258L4.5 5.29549V10.125C4.5 10.3085 4.58955 10.4805 4.73993 10.5858L6.61493 11.8979C6.98484 12.1568 7.5 11.8944 7.5 11.437V5.29549L11.8347 0.960258C12.188 0.606937 11.9376 0 11.4369 0Z"
                  fill="#C5C7CD"
                />
              </svg>
              <p>Filter</p>
            </div>
          </div>
          <div className="display-container-body-content">
            <div className="display-container-body-content-heading">
              <p>Ticket details</p>
              <p>Customer name</p>
              <p>Date</p>
              <p>Priority</p>
            </div>
            {data.map((item, index) => (
              <div className="display-user-data-container" key={index}>
                <div className="user-data-name">
                  <img src={item.image} alt="" />
                  <div>
                    <p className="user-data-name-heading">{item.comment}</p>
                    <p className="user-data-name-subheading">
                      Updated 1 day ago
                    </p>
                  </div>
                </div>
                <div className="user-customer-name">
                  <p className="user-data-name-heading">{item.name}</p>
                  <p className="user-data-name-subheading">on 24.05.2019</p>
                </div>
                <div className="user-cutomer-name">
                  <p className="user-data-name-heading">{item.date}</p>
                  <p className="user-data-name-subheading">6:30 PM</p>
                </div>
                <div className="user-cutomer-priority">
                  <p
                    style={{
                      background:
                        item.priority === "high"
                          ? "red"
                          : item.priority === "low"
                          ? "yellow"
                          : "#29CC97",
                    }}
                  >
                    {item.priority}
                  </p>
                  <svg
                    width="4"
                    height="16"
                    viewBox="0 0 4 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"
                      fill="#C5C7CD"
                    />
                  </svg>
                </div>
              </div>
            ))}

            <div className="display-row-container">
              <div className="row-per-page">
                <p>Rows per page: 8</p>
                <svg
                  width="8"
                  height="5"
                  viewBox="0 0 8 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.983572 0.5H7.01404C7.43123 0.5 7.63982 1.00391 7.34451 1.29922L4.33045 4.31562C4.14763 4.49844 3.84998 4.49844 3.66717 4.31562L0.653103 1.29922C0.357791 1.00391 0.566385 0.5 0.983572 0.5Z"
                    fill="#9FA2B4"
                  />
                </svg>
              </div>
              <div className="row-number">
                <p>1-8 of 1240</p>
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 13L1.07071 7.07071C1.03166 7.03166 1.03166 6.96834 1.07071 6.92929L7 1"
                    stroke="#9FA2B4"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 13L6.92929 7.07071C6.96834 7.03166 6.96834 6.96834 6.92929 6.92929L1 1"
                    stroke="#9FA2B4"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
