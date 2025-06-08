import NavBar from "../../componets/en/NavBar";
import "../styles/AboutUs.css";
import Footer from "../../componets/en/Footer";
import VideoPlayer from "../../componets/en/VideoPlayer";
function AboutUsZH() {
  return (
    <section id="aboutus" className="about-us">
      <div>
        <NavBar title='关于我们
        '/>
        <VideoPlayer url="https://www.youtube.com/embed/lyZHghkO9ag?si=13eHH5fcLMnvyYd7"/>
        <div style={{backgroundColor:'bisque'}}>
        <div className="aboutus-intro">
            <h3>
              关于我们
            </h3>
            <p>
                上海欧利亚实业有限公司是创新型薄膜开关解决方案的领先供应商。我们专注于设计、样品制作、组装及定制生产，致力于为客户提供高质量、量身定制的产品。
            </p>
            <h3>我们的核心竞争力</h3>
            <p>
                我们的专业能力赢得了众多财富500强公司的信任，为其设计和制造要求最严苛的薄膜开关产品。凭借超过13年的经验，我们将尖端技术与对行业需求的深刻理解相结合，确保产品达到最高品质和可靠性标准。
            </p>
            <h3>开始合作吧！</h3>
            <p>
                请通过电子邮件/电话联系我们。让我们携手共创满足您精确规格并超出您期望的定制薄膜开关。
            </p>
          </div>
        </div>
        <Footer/>
      </div>
    </section>
  );
}
export default AboutUsZH;
