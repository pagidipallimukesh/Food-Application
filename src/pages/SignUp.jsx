import React from "react";

const SignUp = () => {
  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        
        {/* Left Content */}
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 mb-3">
            🍽️ Create Your Food Account
          </h1>
          <p className="col-lg-10 fs-5">
            Sign up to explore delicious meals, fast delivery, and exclusive
            food offers. Order your favorite dishes anytime!
          </p>
        </div>

        {/* Signup Form */}
        <div className="col-md-10 mx-auto col-lg-5">
          <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingName"
                placeholder="Full Name"
              />
              <label htmlFor="floatingName">Full Name</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingEmail"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingEmail">Email address</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <button className="w-100 btn btn-lg btn-warning" type="submit">
              Sign Up 🍔
            </button>

            <hr className="my-4" />
            <small className="text-body-secondary">
              By signing up, you agree to our terms & conditions.
            </small>

          </form>
        </div>

      </div>
    </div>
  );
};

export default SignUp;
