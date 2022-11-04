import React from "react";
import Slider from "react-slick";
import "./review.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import unknown from "./image/unknown.png";
import star from "./image/star.png";

const Partner = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div>
      <div className="heading">
        <h1> Partner Reviews</h1>
      </div>
      <div className="partners">
        <Slider {...settings}>
          <div className="part">
            <h3>Vicky</h3>
            <div>
              <p>
                "Your team has succeeded because of your ability to build strong
                relationships by asking for and incorporating feedback from
                others.” "You have shown a pattern of interrupting others when
                they are speaking in meetings. While this may be unintentional,
                it can be helpful to show respect for your colleagues by waiting
                until they have finished speaking before adding to the
                conversation.” “Your inability to work well with others has
                caused your team to fall behind.”
              </p>
              <div className="profile">
                <div className="profileimg">
                  <img src={unknown} width="70px" height="70px" />
                </div>
                <div className="profilename">
                  <h4>Vicky</h4>
                  <h6>Chennai,Tamilnadu</h6>
                  <img src={star} width="90px" height="25px" />
                </div>
              </div>
            </div>
          </div>
          <div className="part">
            <h3>Kapildev</h3>
            <div>
              <p>
                "Your team has succeeded because of your ability to build strong
                relationships by asking for and incorporating feedback from
                others.” "You have shown a pattern of interrupting others when
                they are speaking in meetings. While this may be unintentional,
                it can be helpful to show respect for your colleagues by waiting
                until they have finished speaking before adding to the
                conversation.” “Your inability to work well with others has
                caused your team to fall behind.”
              </p>
            </div>
            <div className="profile">
              <div className="profileimg">
                <img src={unknown} width="70px" height="70px" />
              </div>
              <div className="profilename">
                <h4>Kapildev</h4>
                <h6>Tiruvallur,Tamilnadu</h6>
                <img src={star} width="90px" height="25px" />
              </div>
            </div>
          </div>
          <div className="part">
            <h3>Anbu</h3>
            <div>
              <p>
                "Your team has succeeded because of your ability to build strong
                relationships by asking for and incorporating feedback from
                others.” "You have shown a pattern of interrupting others when
                they are speaking in meetings. While this may be unintentional,
                it can be helpful to show respect for your colleagues by waiting
                until they have finished speaking before adding to the
                conversation.” “Your inability to work well with others has
                caused your team to fall behind.”
              </p>
            </div>
            <div className="profile">
              <div className="profileimg">
                <img src={unknown} width="70px" height="70px" />
              </div>
              <div className="profilename">
                <h4>Anbu</h4>
                <h6>Chennai,Tamilnadu</h6>
                <img src={star} width="90px" height="25px" />
              </div>
            </div>
          </div>
          <div className="part">
            <h3>Kathir </h3>
            <div>
              <p>
                "Your team has succeeded because of your ability to build strong
                relationships by asking for and incorporating feedback from
                others.” "You have shown a pattern of interrupting others when
                they are speaking in meetings. While this may be unintentional,
                it can be helpful to show respect for your colleagues by waiting
                until they have finished speaking before adding to the
                conversation.” “Your inability to work well with others has
                caused your team to fall behind.”
              </p>
            </div>
            <div className="profile">
              <div className="profileimg">
                <img src={unknown} width="70px" height="70px" />
              </div>
              <div className="profilename">
                <h4>Kathir</h4>
                <h6>Chennai,Tamilnadu</h6>
                <img src={star} width="90px" height="25px" />
              </div>
            </div>
          </div>
          <div className="part">
            <h3>Nantha Kumar</h3>
            <div>
              <p>
                "Your team has succeeded because of your ability to build strong
                relationships by asking for and incorporating feedback from
                others.” "You have shown a pattern of interrupting others when
                they are speaking in meetings. While this may be unintentional,
                it can be helpful to show respect for your colleagues by waiting
                until they have finished speaking before adding to the
                conversation.” “Your inability to work well with others has
                caused your team to fall behind.”
              </p>
            </div>
            <div className="profile">
              <div className="profileimg">
                <img src={unknown} width="70px" height="70px" />
              </div>
              <div className="profilename">
                <h4>Nantha Kumar</h4>
                <h6>Namakkal,Tamilnadu</h6>
                <img src={star} width="90px" height="25px" />
              </div>
            </div>
          </div>
          <div className="part">
            <h3>Naveen</h3>
            <div>
              <p>
                "Your team has succeeded because of your ability to build strong
                relationships by asking for and incorporating feedback from
                others.” "You have shown a pattern of interrupting others when
                they are speaking in meetings. While this may be unintentional,
                it can be helpful to show respect for your colleagues by waiting
                until they have finished speaking before adding to the
                conversation.” “Your inability to work well with others has
                caused your team to fall behind.”
              </p>
            </div>
            <div className="profile">
              <div className="profileimg">
                <img src={unknown} width="70px" height="70px" />
              </div>
              <div className="profilename">
                <h4>Naveen</h4>
                <h6>Tirupur,Tamilnadu</h6>
                <img src={star} width="90px" height="25px" />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
export default Partner;
