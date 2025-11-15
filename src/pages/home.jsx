import React, { useState, useEffect, useRef } from 'react';
import { Camera, Target, TrendingUp, CheckCircle, Cpu, Package, ChevronDown } from 'lucide-react';
import '../styles/home.css';
export default function TARSWebsite() {
  const [scrollY, setScrollY] = useState(0);
  const [imgError, setImgError] = useState(false);
  const ticking = useRef(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY || window.pageYOffset);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const metrics = [
    { label: "mAP@0.5", value: "0.987", desc: "Detection accuracy" },
    { label: "Training Epochs", value: "20", desc: "Model training cycles" },
    { label: "Precision & Recall", value: "~1.0", desc: "Near-perfect scores" },
    { label: "Success Rate", value: "High", desc: "Retrieval operations" }
  ];

  return (
    <div>
      {/* Sticky Navbar */}
      <div className={`hero-navbar-container ${isSticky ? "sticky" : ""}`}>
        {!isSticky && <div className="badge">Deep Learning Based Mobility System</div>}
        
        <div className="navbar-layout">
          <h1 id="hero-title" className="hero-title" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer' }}>TARS</h1>
          
          
          <div className='hero-nav-title'>
            <h2 className="hero-subtitle">Smart Transport and Retrieval System</h2>
            <p className="hero-tagline">with Robotic Arm and Vision Based Object Detection</p>
          </div>
          <img src="/car.png" alt="TARS Robot" className="hero-car-image" />
          
        </div>

        {!isSticky && 
        <div className="tech-badges">
          <div className="tech-badge">
            <Cpu className="tech-badge-icon" />
            <span>YOLOv5 Detection</span>
          </div>
          <div className="tech-badge">
            <Camera className="tech-badge-icon" />
            <span>Real-time Vision</span>
          </div>
          <div className="tech-badge">
            <Package className="tech-badge-icon" />
            <span>Autonomous Retrieval</span>
          </div>
        </div>
        }
      </div>

      <main>
        {/* Hero Section */}
        <div className="hero" role="region" aria-labelledby="hero-title">
          <div
            className="hero-content"
            style={{ transform: `translateY(${scrollY * 0.18}px)` }}
          >
            <ChevronDown className="scroll-indicator" size={32} />
          </div>
        </div>

        {/* Abstract Section */}
        <section className="section-dark" role="region" aria-labelledby="abstract-title">
          <div className="container">
            <h2 id="abstract-title" className="section-title">Abstract</h2>
            <p className="section-description">
              This project presents an autonomous robotic system for object retrieval, integrating a mobile base,
              camera-equipped robotic arm, and machine learning. Using YOLO-based object detection and real-time
              classification, the robot navigates its surroundings to locate, pick, and return target objects. The
              system demonstrates efficient object detection, navigation, and manipulation, offering a scalable
              solution for automation in real-world settings through the fusion of robotics and AI.
            </p>
          </div>
        </section>

        {/* Objectives & Findings */}
        <section role="region" aria-labelledby="obj-find">
          <div className="container">
            <div className="grid-2">
              <div className="card">
                <h3 className="card-title"><Target size={28} />Objectives</h3>
                <ul className="card-list">
                  <li className="card-list-item"><span className="checkmark">✓</span><span>Build a robot with wheels and an arm for autonomous object retrieval.</span></li>
                  <li className="card-list-item"><span className="checkmark">✓</span><span>Integrate ML (YOLO) for real-time object detection.</span></li>
                  <li className="card-list-item"><span className="checkmark">✓</span><span>Enable robotic arm to perform pick-and-place operations.</span></li>
                </ul>
              </div>

              <div className="card">
                <h3 className="card-title"><TrendingUp size={28} />Findings</h3>
                <ul className="card-list">
                  <li className="card-list-item"><span className="checkmark">✓</span><span>ML model detected objects accurately in real time.</span></li>
                  <li className="card-list-item"><span className="checkmark">✓</span><span>Arm performed precise pick-and-place operations.</span></li>
                  <li className="card-list-item"><span className="checkmark">✓</span><span>System achieved high retrieval success rate.</span></li>
                  <li className="card-list-item"><span className="checkmark">✓</span><span>Proven to be low-cost and scalable for automation.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Flowchart */}
        <section className="section-dark" role="region" aria-labelledby="flow-title">
          <div className="container">
            <h2 id="flow-title" className="section-title">System Flowchart</h2>
            <p className="section-description">The complete decision flow of the TARS system from user input to object retrieval</p>

            <div className="flowchart-container">
              {!imgError ? (
                <img
                  src="/flowchart.png"
                  alt="TARS System Flowchart"
                  className="flowchart-img"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="flowchart-fallback">
                  <p className="flowchart-fallback-title">System Flowchart Diagram</p>
                  <img src="/Adobe Express - file.png" alt="Fallback flowchart" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Operation Workflow */}
        <section role="region" aria-labelledby="workflow">
          <div className="container">
            <h2 id="workflow" className="section-title">Operation Workflow</h2>
            <p className="section-description">
              TARS executes a sequence of mechanical and vision-based operations to locate, align with,
              and retrieve target objects autonomously. Each stage combines motion control and object detection.
            </p>

            <div className="workflow-steps">
              {/* Step 1 */}
              <div className="workflow-step">
                <div className="workflow-text">
                  <h3>1. Choosing the Object</h3>
                  <p>
                    Using the YOLOv5 detection model, TARS identifies multiple objects in the scene and selects
                    the target based on user-defined parameters or class priority.
                  </p>
                </div>
                <div className="workflow-img">
                  <img src="/User_interface-png.png" alt="Choosing the object" />
                </div>
              </div>

              {/* Step 2 */}
              <div className="workflow-step">
                <div className="workflow-text">
                  <h3>2. Aligning Toward the Object</h3>
                  <p>
                    The system adjusts its wheelbase orientation, ensuring the camera and arm are aligned directly
                    with the detected object for optimal approach.
                  </p>
                </div>
                <div className="workflow-img">
                  <img src="/alligning_toward_object.png" alt="Aligning toward the object" />
                </div>
              </div>

              {/* Step 3 */}
              <div className="workflow-step">
                <div className="workflow-text">
                  <h3>3. Approaching Pick-Up Range</h3>
                  <p>
                    Once aligned, TARS drives forward until the object lies within a 10 cm range,
                    preparing for the grasp operation using onboard distance sensors.
                  </p>
                </div>
                <div className="workflow-img">
                  <img src="/Aproaching_to_the_object.png" alt="Approaching pick-up range" />
                </div>
              </div>

              {/* Step 4 */}
              <div className="workflow-step">
                <div className="workflow-text">
                  <h3>4. Claw Picking Up Object</h3>
                  <p>
                    The robotic arm executes a precision-controlled pick-and-place maneuver,
                    gripping the target securely before transporting it back to the start location.
                  </p>
                </div>
                <div className="workflow-img">
                  <img src="/Object_picking_up.png" alt="Claw picking up object" />
                </div>
              </div>

              {/* Step 5 */}
              <div className="workflow-step">
                <div className="workflow-text">
                  <h3>5. Claw Picked the Object</h3>
                  <p>
                    After successfully gripping the object, TARS lifts it securely,
                    preparing for transportation back to the starting point.
                  </p>
                </div>
                <div className="workflow-img">
                  <img src="/Object_picked_up.png" alt="Object picked up" />
                </div>
              </div>
            </div>

            {/* Demo Video */}
            <div className="workflow-video">
              <h3>Demonstration Video</h3>
              <video
                controls
                autoPlay
                muted
                loop
                playsInline
                width="100%"
                poster="/workflow/video-thumbnail.jpg"
              >
                <source src="/robot_ui_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        {/* Results & Metrics */}
        <section className="section-dark" role="region" aria-labelledby="results">
          <div className="container">
            <h2 id="results" className="section-title">Results & Analysis</h2>
            <p className="section-description">
              The YOLOv5 model showed steady convergence with decreasing training and validation losses,
              indicating strong learning and minimal overfitting with near-perfect precision and recall.
            </p>

            <div className="grid-4">
              {metrics.map((metric, index) => (
                <div key={index} className="metric-card">
                  <div className="metric-value">{metric.value}</div>
                  <div className="metric-label">{metric.label}</div>
                  <div className="metric-desc">{metric.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section role="region" aria-labelledby="conclusion">
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
              <h2 id="conclusion" className="section-title">Conclusion</h2>
              <p className="section-description">
                This project showcases a low-cost, scalable robotic system equipped with an arm, wheels, and machine
                learning for autonomous object detection and retrieval. Combining real-time recognition with precise
                pick-and-place capabilities, it demonstrates the potential of embedded AI for future automation in
                logistics, assistive technology, and smart industry.
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-dark" role="region" aria-labelledby="team">
          <div className="container">
            <h2 id="team" className="section-title">Team</h2>
            <div className="grid-2">
              <div className="card">
                <h3 className="card-title">Authors</h3>
                <ul className="card-list">
                  <li className="team-item">Abdullah Muhammad Muntasir Adnan Jami</li>
                  <li className="team-item">Mahbub Mokaddes Akash</li>
                  <li className="team-item">Hasan Bin Omar</li>
                  <li className="team-item">Abrar Ur Alam</li>
                </ul>
              </div>

              <div className="card">
                <h3 className="card-title">Faculty Advisor</h3>
                <p className="advisor-name">Md. Shahriar Hussain [HSM]</p>
                <p className="advisor-title">Senior Lecturer</p>
                <p className="advisor-org">North South University</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>© 2025 TARS Project - North South University</p>
          <p>Smart Transport and Retrieval System with Robotic Arm and Vision Based Object Detection</p>
        </div>
      </footer>
        </div>
  );
}