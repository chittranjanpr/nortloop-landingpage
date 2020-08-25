import React from "react";
import "./core.css";
import { IMAGE_SCOPE } from "../../../../assets/imagepaths";

const SectionOne = (props) => {
  return (
    <div className="sectionOne-cont">
        <div>
            <div>
               Instant and online <span>travel insurance</span>  quotes, issued in under a minute
            </div>
            <div className="sectionOne-cont-button">
                <button>Get Quotes</button>
            </div>
        </div>
        <div>
            <img src={ IMAGE_SCOPE } />
        </div>
    </div>
  );
};
export default SectionOne;
