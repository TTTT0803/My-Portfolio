import meter1 from "../assets/img/skill3.png";
import meter2 from "../assets/img/skill1.png";
import meter3 from "../assets/img/logo3.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Tôi có kinh nghiệm trong phát triển frontend, backend, cũng như
                sử dụng các công cụ DevOps và nhiều công nghệ hỗ trợ khác để xây
                dựng các ứng dụng web hiệu quả.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Frontend</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Backend</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5> DevOps & Tools</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Other Skills</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
