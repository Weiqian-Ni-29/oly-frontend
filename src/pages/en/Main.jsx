import NavBarMain from '../../componets/en/NavBarMain';
import PortalImg from '../../componets/en/PortalImage';
import WhyChooseUs from '../../componets/en/WhyChooseUs';
import Footer from '../../componets/en/Footer';
import '../styles/Main.css';
import React from 'react';
import Products from '../../componets/en/Products';
import Techniques from '../../componets/en/Techniques';


function App() {
    return (
        <div className='Main'>
            <NavBarMain title="Shanghai OLY Industrial Co., Ltd."/>
            <PortalImg/>
            <WhyChooseUs/>
            <Products/>
            <Techniques/>
            <Footer/>
        </div>
    );
}
export default App;