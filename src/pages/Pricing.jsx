import React from "react";

const Pricing = () => {
  const plans = [
    {
      id: 1,
      name: "Basic",
      price: "₹99",
      desc: "Perfect for occasional food lovers.",
      features: ["5 Orders / Month", "Standard Delivery", "Basic Support"],
    },
    {
      id: 2,
      name: "Pro",
      price: "₹199",
      desc: "Best for regular foodies.",
      features: ["15 Orders / Month", "Fast Delivery", "Priority Support"],
    },
    {
      id: 3,
      name: "Premium",
      price: "₹299",
      desc: "Unlimited cravings satisfied.",
      features: ["Unlimited Orders", "Free Delivery", "24/7 Support"],
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-5">🍽️ Food App Pricing Plans</h1>

      <div className="row">
        {plans.map((plan) => (
          <div className="col-md-4 mb-4" key={plan.id}>
            <div className="card shadow-sm h-100 text-center">
              <div className="card-body">
                <h4 className="fw-bold">{plan.name}</h4>
                <h2 className="my-3">{plan.price}</h2>
                <p>{plan.desc}</p>

                <ul className="list-unstyled">
                  {plan.features.map((f, index) => (
                    <li key={index}>✅ {f}</li>
                  ))}
                </ul>

                <button className="btn btn-warning mt-3">
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
