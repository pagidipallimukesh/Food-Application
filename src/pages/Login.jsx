import React from 'react'

const Login = () => {
  return (
    <div>
  <div className="container col-xl-10 col-xxl-8 px-4 py-5">
    <div className="row align-items-center g-lg-5 py-5">

      <div className="col-lg-7 text-center text-lg-start">
        <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">
          Welcome Back to Foodie 🍕
        </h1>

        <p className="col-lg-10 fs-4">
          Login to explore delicious meals, order your favorite dishes,
          track deliveries in real-time, and enjoy exclusive food offers.
        </p>
      </div>

      <div className="col-md-10 mx-auto col-lg-5">
        <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email Address</label>
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

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember Me
            </label>
          </div>

          <button className="w-100 btn btn-lg btn-warning" type="submit">
            Login & Order Food 🍔
          </button>

          <hr className="my-4" />

          <small className="text-body-secondary">
            By logging in, you agree to our Foodie terms & delivery policy.
          </small>

        </form>
      </div>

    </div>
  </div>
</div>

  
  )
}

export default Login