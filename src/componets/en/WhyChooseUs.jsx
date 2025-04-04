import React from "react";
import "../styles/WhyChooseUs.css";

const WhyChooseUs = () => {
  const features = [
    {
      icon: "👩‍🏫", 
      title: "Unmatched Expertise",
      description: "Decades of experience in precision screen printing, delivering flawless results every time.",
    },
    {
      icon: "⚙️",
      title: "Advanced Technology",
      description: "We utilize cutting-edge equipment for superior print quality and consistency.",
    },
    {
      icon: "🎨",
      title: "Customization at Scale",
      description:
        "Tailored solutions to meet unique design and production needs, large or small.",
    },
    {
      icon: "⏰",
      title: "Reliability & Timeliness",
      description:
        "On-time delivery with consistent quality, ensuring your projects stay on track.",
    },
  ];

  return (
    <div className="why-choose-us">
      <h2>Why Choose Us?</h2>
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

export default WhyChooseUs;
