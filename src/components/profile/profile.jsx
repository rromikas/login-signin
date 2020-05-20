import React, { useState } from "react";
import history from "../../routing/history";
import { FaEdit, FaCheck, FaCamera } from "react-icons/fa";
import RelaxReading from "../../images/relaxReading";
const Profile = () => {
  const name = "Romas";
  const [intro, setIntro] = useState(
    "Introduce yourself, describe what genre of books you love"
  );
  const [editIntro, setEditIntro] = useState(false);
  return (
    <div
      className="w-100 h-100 overflow-auto py-4"
      style={{
        background: "radial-gradient(at left top, #4c508f, #f37373)",
        backgroundSize: "cover",
      }}
    >
      <div style={{ maxWidth: "1200px" }} className="container-fluid">
        <div className="row no-gutters justify-content-center shift bg-light">
          <div
            className="col-12 col-sm-4 bg-light p-4"
            style={{
              minHeight: "45vh",
              background:
                "radial-gradient(circle at left, rgb(255, 140, 140), rgba(255, 140, 140, 0.5))",
            }}
          >
            <div className="row no-gutters justify-content-center mt-4">
              <div className="col-12">
                <div
                  className="rounded-circle mx-auto"
                  style={{
                    width: "120px",
                    height: "120px",
                    background: "white",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <div className="w-100 d-flex justify-content-center img-uploader align-items-center pointer">
                    <FaCamera fontSize="20px" color="white"></FaCamera>
                  </div>
                </div>
              </div>
              <div className="col-12 mx-2 ml-md-3 mr-md-3">
                <div className="text-center mt-3 h1" style={{ color: "white" }}>
                  {name}
                </div>
                <div className="text-center lead" style={{ color: "white" }}>
                  Member since 2018
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-8 p-4">
            <div className="d-flex align-items-center">
              <h1 className="mt-3">Intro</h1>
              <div className="mx-3">
                {editIntro ? (
                  <FaCheck
                    className="pointer font-light"
                    fontSize="24px"
                    onClick={() => setEditIntro(false)}
                  ></FaCheck>
                ) : (
                  <FaEdit
                    className="pointer font-light"
                    fontSize="24px"
                    onClick={() => setEditIntro(true)}
                  ></FaEdit>
                )}
              </div>
            </div>
            <textarea
              disabled={!editIntro}
              focused={editIntro}
              className={`${
                !editIntro ? "borderless " : "brdr-light "
              }w-100 lead`}
              style={{ background: "transparent", height: "15vh" }}
            >
              {intro}
            </textarea>
            <div
              className="w-100 d-none d-md-flex pr-4 justify-content-end mt-5 pb-2"
              style={{ height: "55vh" }}
            >
              <RelaxReading></RelaxReading>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
