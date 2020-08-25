import React, { PureComponent } from 'react';

import Header from '../../components/Header';
import "./core.css";
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';
import SectionFive from './components/SectionFive';

class HomePage extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){
        return(
            <div className="container">
                <Header />
                <SectionOne />
                <SectionTwo />
                <SectionThree />
                <SectionFour />
                <SectionFive />
            </div>
        )
    }
}

export default HomePage;