import React from "react";
import "../styles/contact.css";
import Navbar from "../Navbar";
export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="container d-flex">
        <div className="left my-4 px-4">
          <div className="mx-auto my-4">
            <h2 className="px-4">Submit your query</h2>

            <div className="d-flex px-4 py-2">
              <h6 className="inputHeading px-4 py-2">Name</h6>
              <input type="text" className="form-control inputType" />
            </div>

            <div className="d-flex px-4 py-2">
              <h6 className="inputHeading px-4 py-2">Email address</h6>
              <input type="email" className="form-control inputType" />
            </div>

            <div className="d-flex px-4 py-2">
              <h6 className="inputHeading px-4 py-2">Contact Number</h6>
              <input type="text" className="form-control inputType" />
            </div>

            <div className="d-flex px-4 py-2">
              <h6 className="inputHeading px-4 py-2">Describe your query</h6>
              <input type="text" className="form-control inputType" />
            </div>

            <div class="py-4 col-md-12 text-center">
              <button
                type="submit"
                className="button btn btn-primary btn-block"
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className="right my-4 px-4">
          <div className="contact mx-auto">
            <h6 className="contactText m-0">Phone:</h6>
            <p className="text">1800-1003-2319</p>
            <h6 className="contactText m-0">email:</h6>
            <p className="text">contact@grassme.com</p>
            <h6 className="contactText m-0">address:</h6>
            <div className="address">
              <p className="text m-0 p-0">101-xyz heights,</p>
              <p className="text m-0 p-0">abc street,</p>
              <p className="text m-0 p-0">pune-411099</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
