import React from 'react'
import food from "../images/Food.jpeg"

const HeroSection = () => {
  return (
    <div>
        <div className="container col-xxl-8 px-4 py-5">
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">

    <div className="col-10 col-sm-8 col-lg-6">
      <img
        src={food}
        className="d-block mx-lg-auto img-fluid"
        alt="Delicious Food"
        width="700"
        height="500"
        loading="lazy"
      />
    </div>

    <div className="col-lg-6">
      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
        Fresh & Delicious Food Delivered To Your Door 🍔
      </h1>

      <p className="lead">
        Explore a wide variety of tasty meals, fast delivery, and exciting offers.
        Order your favorite food anytime and enjoy restaurant-quality dishes
        from the comfort of your home.
      </p>

      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <button type="button" className="btn btn-warning btn-lg px-4 me-md-2">
          Order Now
        </button>

        <button type="button" className="btn btn-outline-secondary btn-lg px-4">
          View Menu
        </button>
      </div>
    </div>

  </div>
</div>

    </div>
  )
}

export default HeroSection