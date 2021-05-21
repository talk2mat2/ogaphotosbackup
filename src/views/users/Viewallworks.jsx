import React from "react";
import { useSelector } from "react-redux";
import Styled from "styled-components";

const WorksAvater = Styled.div`
  height: 200px;
  width: 300px;
  background-color: #ffffff;
  border-radius: 10px;
  margin: 5px;
`;
const Viewallwork = () => {
  const CurrentUser = useSelector((state) => state.user.currentUser);
  const userData = CurrentUser && CurrentUser.userData;

  const mapPortfolioworks = () => {
    if (userData.Porthfolio_works.length > 0) {
      return userData.Porthfolio_works.map((item) => {
        return (
          <WorksAvater>
            <a target="_blank" href={item.imgUri}>
              <img
                src={item.imgUri}
                alt="img"
                style={{ width: "100%", borderRadius: "4px" }}
              />
            </a>
          </WorksAvater>
        );
      });
    }
  };
  return (
    <div className="page-content">
      <div className="main-wrapper">
        <div className="row">
          <div className="col">
            <div className="card">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  minHeight: "700px",

                  width: "100%",
                  objectFit: "contain",
                  padding: "4px",
                  boxSizing: "border-box",
                  overflowY: "scroll",
                }}
              >
                {mapPortfolioworks()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Viewallwork;
