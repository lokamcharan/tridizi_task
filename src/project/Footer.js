
import React from "react";

function Footer() {
  return (
    <>
      <div className="container">
        <footer
          className="bg-body-tertiary text-center"
          style={{ color: "#5F9EA0" }}
        >
          <div className="container p-4">
            <section className="">
              <div className="row">
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h6>Home</h6>
                  <h6>About Us</h6>
                  <h6>Careers</h6>
                  <h6>Site Map</h6>
                </div>

                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h6>Disclaimer</h6>
                  <h6>Privacy Policy</h6>
                  <h6>FAQ's</h6>
                  <h6>Terms & Conditions</h6>
                </div>

                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h2>We are Hiring</h2>
                  <p>
                    We always look for attitude, character, and learning desire.
                    Apply now and become a part of our unique culture.
                  </p>
                  <button
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      borderRadius: "10px",
                    }}
                  >
                    Apply Now
                  </button>
                </div>

                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h4>Contact Us</h4>
                  <h6>9970887772</h6>
                  <h6>info@meticulousbplans.com</h6>
                  <h6>Monday to Friday 9:00 AM to 6:00 PM IST</h6>
                </div>
              </div>
            </section>
          </div>

          <div className="text-center p-3">
            <p>@2023 Copyright All Reserved</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
