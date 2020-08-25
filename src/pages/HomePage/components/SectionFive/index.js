import React from 'react';
import "./core.css";
import { SectionFiveList } from '../../../../utils/constants';

const SectionFive = () => {
    return(
        <div className="sectionFive-cont">
            <div className="sectionFive-title">
                Compare our insurance products
            </div>
            <div className="sectionFive-list">
                {SectionFiveList.map(data => (
                    <a key={data.id} href="/" className="sectionFive-list-desc">{data.title}</a>
                ))}
            </div>
        </div>
    )
}

export default SectionFive;