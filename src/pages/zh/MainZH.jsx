import NavBarMainZH from '../../componets/zh/NavBarMainZH';
import WhyChooseUsZH from '../../componets/zh/WhyChooseUsZH';
import FooterZH from '../../componets/zh/FooterZH';
import '../styles/Main.css';
import React from 'react';
import ProductsZH from '../../componets/zh/ProductsZH';
import TechniquesZH from '../../componets/zh/TechniquesZH';
import PortalImgZH from '../../componets/zh/PortalImgZH';


function AppZH() {
    return (
        <div className='Main'>
            <NavBarMainZH title="Shanghai OLY Industrial Co., Ltd."/>
            <PortalImgZH/>
            <WhyChooseUsZH/>
            <ProductsZH/>
            <TechniquesZH/>
            <FooterZH/>
        </div>
    );
}
export default AppZH;