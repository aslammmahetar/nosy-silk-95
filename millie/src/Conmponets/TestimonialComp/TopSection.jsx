//rename this file with your component folder and start working
import React from "react";
import "../TestimonialComp/TopSection.css";


export const TopSection = ({bgColor}) => {
  return (
    <div id="top_div" style={{backgroundColor:bgColor}}>
      <div className="div_1">
        <div id="first_1_a">
          <img
            src="https://millieyoga.com/wp-content/uploads/2020/09/yoga-studio-reviews-img.png"
            alt="yoga girl"
          />
        </div>

        <div id="first_1_b">
          <p>FEATURED REVIEWS</p>
          <h1>Yoga Studio Like No Others!</h1>
          <div className="rating">
            <input type="radio" name="rating" value="5" id="5" />
            <label for="5">☆</label>
            <input type="radio" name="rating" value="4" id="4" />
            <label for="4">☆</label>
            <input type="radio" name="rating" value="3" id="3" />
            <label for="3">☆</label>
            <input type="radio" name="rating" value="2" id="2" />
            <label for="2">☆</label>
            <input type="radio" name="rating" value="1" id="1" />
            <label for="1">☆</label>
          </div>

          <h3>
            “I was a little worried about trying yoga for the first time as a
            lot of the poses seemed really difficult and intimidating, but the
            instructors were really nice and supportive. Since then I’ve been
            back every day and I’m finally ready to try my first hot yoga
            class!”
          </h3>
          <h4>JESSICA LIM</h4>
        </div>
      </div>

      {/* <div className="div_2">

      </div>
      <div className="div_3">
       <img src="" alt="" />
      </div> */}
    </div>
  );
};
