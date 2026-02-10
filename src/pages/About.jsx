import React from "react";

const About = () => {
  return (
    <div className="container py-5">

      <h1 className="text-center mb-4">🍔 About Foodie</h1>

      <p className="lead text-center">
        Foodie is your go-to food delivery platform where delicious meals meet
        fast and reliable service. We connect food lovers with the best
        restaurants around them.
      </p>

      <div className="row mt-5">

        <div className="col-md-4">
          <h4>🍕 Our Mission</h4>
          <p>
            Our mission is to make food ordering simple, fast, and enjoyable.
            We aim to bring your favorite meals right to your doorstep with
            quality and care.
          </p>
        </div>

        <div className="col-md-4">
          <h4>🚚 Fast Delivery</h4>
          <p>
            We partner with trusted restaurants and delivery partners to ensure
            your food arrives fresh, hot, and on time.
          </p>
        </div>

        <div className="col-md-4">
          <h4>⭐ Quality Food</h4>
          <p>
            From burgers and pizzas to healthy salads and desserts — we offer a
            wide variety of delicious options for every craving.
          </p>
        </div>

      </div>

      <div className="text-center mt-5">
        <h5>❤️ Made for Food Lovers</h5>
        <p>
          Whether you want a quick snack or a full meal, Foodie is here to make
          your food journey tasty and hassle-free.
        </p>
      </div>

    </div>
  );
};

export default About;
