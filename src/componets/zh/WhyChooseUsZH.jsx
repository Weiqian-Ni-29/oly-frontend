import React from "react";
import "../styles/WhyChooseUs.css";

const WhyChooseUsZH = () => {
    const features = [
        {
          icon: "👩‍🏫", 
          title: "顶尖专业技术",  // Unmatched Expertise
          description: "数十年精密丝网印刷经验，确保每次交付完美无瑕的成果。",  // Decades of experience...
        },
        {
          icon: "⚙️",
          title: "先进技术设备",  // Advanced Technology
          description: "采用尖端设备实现卓越的印刷品质与高度一致性。",  // We utilize cutting-edge...
        },
        {
          icon: "🎨",
          title: "规模化定制",  // Customization at Scale
          description: "为各类设计生产需求提供定制解决方案，无论规模大小。",  // Tailored solutions...
        },
        {
          icon: "⏰",
          title: "可靠高效交付",  // Reliability & Timeliness
          description: "始终如一的品质保障与准时交付，确保您的项目顺利推进。",  // On-time delivery...
        },
      ]
    ;

  return (
    <div className="why-choose-us">
      <h2>选择我们的理由?</h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <div className="feature" key={index}>
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUsZH;
