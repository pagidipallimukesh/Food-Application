import React from 'react'

const Card = ({ food }) => {
  return (
    <div className="card h-100" style={{ width: "22rem" }}>
      <img src={food.image} className="card-img-top" alt={food.name} />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{food.name}</h5>
        <p className="card-text">{food.description}</p>

        <div className="mt-auto">
          <button className="btn btn-warning w-100">
            {food.category}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
