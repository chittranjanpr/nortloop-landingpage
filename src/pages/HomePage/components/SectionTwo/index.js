import React from "react";
import "./core.css";
import { SectionTwoList } from "../../../../utils/constants";

const SectionTwo = (props) => {
  return (
    <div className="sectionTwo-cont">
      <div className="sectionTwo-cont-list">
        {SectionTwoList.map((data) => (
          <div key={data.id}>
            <img src={data.img_path} />
           <span>{data.title}</span> 
          </div>
        ))}
      </div>
    </div>
  );
};
export default SectionTwo;
