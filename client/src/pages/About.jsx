import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import backgroundImage from "../assets/images/homepage.jpg";
import aboutImage from "../assets/images/about.jpg";

const About = () => {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div
        className="about-hero text-center text-light d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: "60vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            padding: "30px",
            borderRadius: "10px",
          }}
        >
          <h1 className="fw-bold display-4">About Mango Delight</h1>
          <p className="lead mt-3" style={{ fontSize: "1.25rem" }}>
          Naturally Grown, Rich in Flavor, Harvested with Care 
          </p>
        </div>
      </div>

      {/* About Content Section */}
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src={aboutImage}
              alt="Artisan Craft"
              className="img-fluid rounded shadow-lg"
              style={{ transform: "scale(1)", transition: "transform 0.3s" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          </div>
          {/* Text Section */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-4" style={{ color: "#AD4C4C" }}>
            Our Story – Devgad Alphonso Mango
            </h2>
            <p style={{ color: "#444", lineHeight: "1.8" }}>
            Nestled along the pristine Konkan coast, Devgad is a land blessed with rich soil, abundant sunshine, and the perfect climate to nurture the world’s finest Alphonso mangoes. For generations, local farmers have dedicated their lives to cultivating this golden fruit, using age-old techniques passed down through families.
            </p>
            <p style={{ color: "#444", lineHeight: "1.8" }}>
            At Devgad Alphonso Mango, our mission is to bring the authentic taste of Devgad’s premium mangoes to fruit lovers worldwide. Every mango we grow is a labor of love—nurtured with care, ripened naturally, and handpicked at the peak of perfection. We take pride in preserving the traditional methods of cultivation while ensuring quality and freshness in every bite.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div
        className="py-5 text-center text-light"
        style={{
          background: "linear-gradient(90deg, #AD4C4C, #6D2323)",
        }}
      >
        <div className="container">
          <h2 className="fw-bold mb-4">Our Mission</h2>
          <p
            className="lead mx-auto"
            style={{ maxWidth: "800px", lineHeight: "1.8", fontSize: "1.2rem" }}
          >
            To bring the authentic taste of Devgad Alphonso mangoes to mango lovers worldwide while supporting local farmers and preserving traditional cultivation methods. We strive to deliver freshness, quality, and the true essence of nature in every bite.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="container py-5">
        <h2
          className="fw-bold text-center mb-5"
          style={{
            color: "#6D2323",
            position: "relative",
          }}
        >
          Our Values
        </h2>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div
              className="card shadow border-0 h-100"
              style={{ transition: "transform 0.3s" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <div className="card-body">
                <h5
                  className="fw-bold mb-3"
                  style={{ color: "#6D2323", fontSize: "1.25rem" }}
                >
                  Sustainability
                </h5>
                <p style={{ lineHeight: "1.8", color: "#555" }}>
                We follow eco-friendly farming practices, ensuring that our mangoes are grown naturally without harmful chemicals.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div
              className="card shadow border-0 h-100"
              style={{ transition: "transform 0.3s" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <div className="card-body">
                <h5
                  className="fw-bold mb-3"
                  style={{ color: "#6D2323", fontSize: "1.25rem" }}
                >
                  Authenticity
                </h5>
                <p style={{ lineHeight: "1.8", color: "#555" }}>
                Every mango we sell is 100% genuine Devgad Alphonso, known for its rich aroma, sweetness, and superior quality.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div
              className="card shadow border-0 h-100"
              style={{ transition: "transform 0.3s" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <div className="card-body">
                <h5
                  className="fw-bold mb-3"
                  style={{ color: "#6D2323", fontSize: "1.25rem" }}
                >
                  Community
                </h5>
                <p style={{ lineHeight: "1.8", color: "#555" }}>
                By choosing our mangoes, you support hardworking local farmers and help sustain traditional cultivation practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
