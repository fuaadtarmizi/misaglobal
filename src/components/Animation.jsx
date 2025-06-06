import React from "react";
import "@/css/ScrollAnimation.css";

const ScrollAnimation = () => {
  return (
    <section className="scroll-section">
      <div className="scroll-container">
        {/* Left Side */}
        <div className="relative"></div>
        <div className="absolute max-h-full"></div>
        <div className="scroll-left">
          <h2 className="scroll-title">Creating Sustainable Value</h2>
          <p className="scroll-description">
            Effectively reducing our GHG emissions towards delivering clean energy,
            strengthening our future shared prosperity, societal well-being and business growth.
          </p>
          <a href="https://www.petronas.com/integrated-report-2023/" className="read-more">
            → Read more
          </a>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot" style={{ background: "#00a19c" }}></div>
              <div className="timeline-content">
                <h4>2030</h4>
                <p>25% Greenhouse gas emissions reduction for PETRONAS Groupwide natural gas value chain (Equity Share approach).</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" style={{ background: "#763f98" }}></div>
              <div className="timeline-content">
                <h4>70%</h4>
                <p>Methane emissions reduction for PETRONAS Groupwide natural gas value chain (Operational Control).</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" style={{ background: "#20419a" }}></div>
              <div className="timeline-content">
                <h4>50%</h4>
                <p>Methane emissions reduction for Malaysia’s natural gas value chain.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" style={{ background: "#000" }}></div>
              <div className="timeline-content">
                <h4>2050</h4>
                <p><strong>Net Zero 2050</strong> – Net Zero Carbon emission for PETRONAS (Equity Share approach).</p>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="scroll-right">
          <div className="scroll-bg" style={{ backgroundImage: "url('https://www.petrosync.com/blog/wp-content/uploads/2024/03/Top-10-offshore-drilling-companies-1200x900-1.png')" }}></div>
          <div className="scroll-overlay">
            <p>
              A green turtle off the coast of Borneo Island. Under PETRONAS efforts to protect and preserve endangered Hawksbill sea turtles in Campeche, Mexico, a total of 167,288 turtles have been safely released to the sea.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollAnimation;