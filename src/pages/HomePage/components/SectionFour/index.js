import React from "react";
import "./core.css";
import { SectionFourList } from "../../../../utils/constants";

const SectionFour = (props) => {
  return (
    <div className="sectionFour-cont">
        <div className="sectionFour-cont-title">
          Save money on your health insurance now!
        </div>

        <div className="sectionFour-list-cont">
            {SectionFourList.map(data=>(
                <div key={data.id} className="sectionFour-list">
                    <div className="sectionFour-list-img">
                        <img src={data.img_path}  />
                    </div>
                    <div className="sectionFour-list-title">
                        {data.title}
                    </div>  
                    <div className="sectionFour-list-desc">
                        {data.desc}
                    </div>  
                    <div style={{ textAlign: 'center'}}>
                        <button className="sectionFour-list-button">Get Quotes</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};
export default SectionFour;
