import NavBar from "../../componets/en/NavBar";
import "../styles/AboutUs.css";
import banner from '../../assets/imgs/common/banner-aboutus.jpg';
import Footer from "../../componets/en/Footer";
function AboutUs() {
  return (
    <section id="aboutus" className="about-us">
      <div>
        <NavBar title='About US'/>
        <img className="aboutus-img" src={banner} alt="banner"/>
        <div style={{backgroundColor:'bisque'}}>
          <div className="aboutus-intro">
            <h3>
              WHO ARE WE?
            </h3>
            <p>
                Shanghai Ouliya Industry Co., Ltd. is a leading provider of innovative membrane switch solutions. We specialize in design, prototyping, assembly, and custom production, committed to delivering high-quality, tailored products for our clients.
            </p>
            <h3>What makes us deliver the best product?</h3>
            <p>
                Our expertise is trusted by many Fortune 500 companies to design and manufacture their most demanding membrane switch products. With over 13 years of experience, we combine cutting-edge technology with a deep understanding of industry needs to ensure the highest standards of quality and reliability.
            </p>
            <h3>LET'S GET STARTED!</h3>
            <p>
                Contact Us via email/phone. Let's work together to create custom membrane switches that meet your exact specifications and exceed your expectations.
            </p>
          </div>
        </div>
        <Footer/>
      </div>
    </section>
  );
}
export default AboutUs;
