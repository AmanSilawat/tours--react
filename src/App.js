import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, set_loading] = useState(false);
  const [tours, set_tours] = useState([]);

  const remove_tour = (id) => {
    const new_tours = tours.filter((tour) => tour.id !== id)
    set_tours(new_tours)
  }

  const fetch_tours = async () => {
    set_loading(true)
    try {
      const response = await fetch(url);
      const tours = await response.json();
      set_loading(false);
      set_tours(tours)
    } catch (error) {
      set_loading(false);
      console.log(error);
    }
    console.log(tours);
  }

  useEffect(() => {
    fetch_tours();
  }, [])

  if (loading) {
    return <main>
      <Loading />
    </main>
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tour left</h2>
          <button className='btn' onClick={fetch_tours}>Refresh</button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} remove_tour={remove_tour} />
    </main>
  )
}

export default App
