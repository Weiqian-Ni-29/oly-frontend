import React, { useState, useEffect } from "react";
import '../styles/PortalImage.css';
import SimpleImageSlider from "react-simple-image-slider";
import introBannerImg1 from "../../assets/imgs/common/intro_banner_1.jpg";
import introBannerImg2 from "../../assets/imgs/common/intro_banner_2.jpg";
import introBannerImg3 from "../../assets/imgs/common/intro_banner_3.jpg";
const imgs = [introBannerImg1, introBannerImg2, introBannerImg3];

function PortalImgZH() {
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
                <h2>上海欧力雅，丝网薄膜印刷的第一选择</h2>
                <p>以高效生产为基 · 以客户响应为本 · 以品质承诺为纲，驱动前行</p>
            </div>
        </div>
    );
}
export default PortalImgZH;