import React, { useEffect, useState } from 'react'
import HeroSection from '../components/HeroSection'
import Card from '../components/Card'

const Home = () => {
  const [foods, setfoods] = useState([])

  useEffect(() => {
    async function getData() {
      const data = await fetch("https://foods-rho-one.vercel.app/foods")
      const foods = await data.json()
      console.log(foods)
      setfoods(foods)
    }
    getData()
  }, [])

  return (
    <div>
      <HeroSection />
      <h2 className="my-4">Foods for you</h2>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {foods.map((food) => (
          <div className="col" key={food.id}>
            <Card food={food} />
          </div>
        ))}
      </div>

    </div>
  )
}

export default Home
