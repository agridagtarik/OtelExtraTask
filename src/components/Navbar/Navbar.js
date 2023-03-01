import React from "react";
import "./Navbar.css";
import { FaUsers } from "@react-icons/all-files/fa/FaUsers";
import { RiComputerLine } from "@react-icons/all-files/ri/RiComputerLine";
import logo from "../../images/Screenshot_1.png";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="row">
        <div className="col-1 canvas d-flex align-self-center">
          <button
            className="btn"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
            style={{ backgroundColor: "#f7f7f7" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
              style={{ marginLeft: "10px" }}
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>

          <div
            className="offcanvas offcanvas-start"
            data-bs-scroll="true"
            tabIndex="-1"
            id="offcanvasWithBothOptions"
            aria-labelledby="offcanvasWithBothOptionsLabel"
            style={{ backgroundColor: "#2b3e54" }}
          >
            <div className="offcanvas-header">
              <img alt="logo" src={logo}></img>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body text-white">
              <p>Genel Menü</p>
            </div>
          </div>
        </div>
        <div className="col-8 d-flex justify-content-end ">
          <div className="input-group searchBarGroup">
            <input
              type="text"
              className="form-control rounded-start-pill w-80 searchBarInput"
              placeholder="Rezervasyon No, Müşteri Adı/Telefonu/TC'si..."
              aria-label="Rezervasyon No, Müşteri Adı/Telefonu/TC'si..."
              aria-describedby="button-addon2"
            ></input>
            <button
              className="m-0 h-100 rounded-end-circle searchBarBtn"
              type="button"
              id="button-addon2"
            >
              ARA
            </button>
          </div>
        </div>
        <div className="col-3 d-flex justify-content-between icons mt-2">
          <div className="border col text-center bg-white rounded-1 m-1 position-relative">
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">
              1<span className="visually-hidden">unread messages</span>
            </span>
            <div className="reminderIcon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                fill="currentColor"
                className="bi bi-calendar-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z" />
              </svg>
            </div>

            <div className="reminderText">Hatırlatmalar</div>
          </div>
          <div className="border col text-center bg-white rounded-1 m-1">
            <div className="panelIcon">
              <FaUsers />
            </div>
            <div className="panelText">Panel Chat</div>
          </div>
          <div className="border col text-center bg-white rounded-1 m-1">
            <div className="tvIcon">
              <RiComputerLine />
            </div>
            <div className="tvText">Ekstra TV</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
