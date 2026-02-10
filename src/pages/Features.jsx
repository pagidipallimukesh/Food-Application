import React from "react";

const Features = () => {
  const features = [
    { id: 1, title: "Wide Variety of Foods", desc: "Burgers, pizzas, salads, chicken and more in one place." },
    { id: 2, title: "Easy Online Ordering", desc: "Simple and fast ordering experience for users." },
    { id: 3, title: "Fast Delivery", desc: "Hot and fresh food delivered quickly to your doorstep." },
    { id: 4, title: "Live Order Tracking", desc: "Track your order in real-time." },
    { id: 5, title: "Secure Payments", desc: "UPI, Cards, Net Banking and Cash on Delivery." },
    { id: 6, title: "Ratings & Reviews", desc: "Check feedback from other food lovers." },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-5">🍽️ Our Food App Features</h1>

      <div className="row">
        {features.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{item.title}</h5>
                <p className="card-text">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
