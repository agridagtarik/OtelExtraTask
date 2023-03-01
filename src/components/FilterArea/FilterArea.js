import flatpickr from "flatpickr";
import React, { Fragment, useState } from "react";
import Results from "../Results/Results.js";
import "./FilterArea.css";

const FilterArea = () => {
  const [bankValue, setBankValue] = useState("");

  flatpickr("#myID", {});

  return (
    <Fragment>
      <div className="filterArea">
        <div className="detail row">
          <h6>Detaylı Arama</h6>
          <hr />
        </div>
        <div className="row filter">
          <div className="col reservation">
            <div className="mb-3">
              <label htmlFor="reservationNo" className="form-label">
                Rezervasyon No:
              </label>
              <div className="input-group w-75">
                <input
                  type="text"
                  className="form-control rounded-0"
                  id="reservationNo"
                  aria-describedby="basic-addon3"
                ></input>
              </div>
              <button
                type="button"
                className="btn btn-primary bg-primary w-25 mt-4"
              >
                Arama Yap
              </button>
            </div>
          </div>
          <div className="col choice">
            <div>
              <label htmlFor="facility" className="form-label">
                Tesis Adı:
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option defaultValue={null}>Tüm Oteller</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div>
              <label htmlFor="facility" className="form-label">
                Temsilci:
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option defaultValue={null}>Tümü</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div>
              <label htmlFor="facility" className="form-label">
                Banka:
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => setBankValue(e.target.value)}
              >
                <option defaultValue={"Tümü"}>Tümü</option>
                <option value="1">FİNANSBANK</option>
                <option value="2">ZİRAAT BANKASI</option>
                <option value="3">VAKIFBANK</option>
              </select>
            </div>
            <div>
              <label htmlFor="facility" className="form-label">
                Otel Ödemesi:
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option defaultValue={null}>Tümü</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="col date">
            <div>
              <label htmlFor="facility" className="form-label">
                Ödeme Tarihi:
              </label>
              <form className="d-flex justify-content-start">
                <input
                  className="form-control date"
                  id="myID"
                  type={"datetime-local"}
                  placeholder=" "
                  style={{ backgroundColor: "lightgray" }}
                ></input>
                <input
                  className="form-control date"
                  id="myID"
                  type={"datetime-local"}
                  placeholder=" "
                  style={{ backgroundColor: "lightgray" }}
                ></input>
                <div className="d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-calendar4"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z" />
                  </svg>
                </div>
              </form>
            </div>
            <div>
              <label htmlFor="facility" className="form-label">
                Rezervasyon Tarihi:
              </label>
              <form className="d-flex justify-content-start">
                <input
                  className="form-control date"
                  id="myID"
                  type={"datetime-local"}
                  placeholder=" "
                  style={{ backgroundColor: "lightgray" }}
                ></input>
                <input
                  className="form-control date"
                  id="myID"
                  type={"datetime-local"}
                  placeholder=" "
                  style={{ backgroundColor: "lightgray" }}
                ></input>
                <div className="d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-calendar4"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z" />
                  </svg>
                </div>
              </form>
            </div>
            <div>
              <label htmlFor="facility" className="form-label">
                Giriş Tarihi:
              </label>
              <form className="d-flex justify-content-start">
                <input
                  className="form-control date"
                  id="myID"
                  type={"datetime-local"}
                  placeholder=" "
                  style={{ backgroundColor: "lightgray" }}
                ></input>
                <input
                  className="form-control date"
                  id="myID"
                  type={"datetime-local"}
                  placeholder=" "
                  style={{ backgroundColor: "lightgray" }}
                ></input>
                <div className="d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-calendar4"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z" />
                  </svg>
                </div>
              </form>
            </div>
            <div>
              <label htmlFor="facility" className="form-label">
                Çıkış Tarihi:
              </label>
              <form className="d-flex justify-content-start">
                <input
                  className="form-control date"
                  id="myID"
                  type={"datetime-local"}
                  placeholder=" "
                  style={{ backgroundColor: "lightgray" }}
                ></input>
                <input
                  className="form-control date"
                  id="myID"
                  type={"datetime-local"}
                  placeholder=" "
                  style={{ backgroundColor: "lightgray" }}
                ></input>
                <div className="d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-calendar4"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z" />
                  </svg>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Results bankValue={bankValue} />
    </Fragment>
  );
};

export default FilterArea;
