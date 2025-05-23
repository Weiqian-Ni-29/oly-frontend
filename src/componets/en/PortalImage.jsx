import React, { useState, useEffect } from "react";
import '../styles/PortalImage.css';
import SimpleImageSlider from "react-simple-image-slider";
import introBannerImg1 from "../../assets/imgs/common/intro_banner_1.jpg";
import introBannerImg2 from "../../assets/imgs/common/intro_banner_2.jpg";
import introBannerImg3 from "../../assets/imgs/common/intro_banner_3.jpg";
const imgs = [introBannerImg1, introBannerImg2, introBannerImg3];

function PortalImg() {
    const [sliderHeight, setSliderHeight] = useState(window.innerWidth > 768 ? 500 : 300);

    useEffect(() => {
        const handleResize = () => {
            setSliderHeight(window.innerWidth > 768 ? 500 : 250);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div className="big-enterance-card">
            <SimpleImageSlider
                            width={'100%'}
                            height={sliderHeight}
                            images={imgs}
                            showBullets={false}
                            showNavs={false}
                            bgColor="#ffffff"
                            loop={true}
                            autoPlay={true}
                            autoPlayDelay={5.0}
                        />
            <div className="text-overlay">
                <h2>screen film printing, find your best partner at OLY</h2>
                <p>Driven by productivity, responsiveness, and uncompromising quality assurance</p>
            </div>
        </div>
    );
}
export default PortalImg;