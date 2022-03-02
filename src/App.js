import { useEffect, useState } from "react"
import styled from "styled-components"

const Body = styled.div`

`

function App() {
  const [country, setCountry] = useState(null)
  useEffect(() => {
    const randomNumberInCountryArray = Math.floor(Math.random() * 250)

    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountry(data[randomNumberInCountryArray]))
  }, [])

  const flag = country ? country.flags.png : null
  const name = country ? country.name.common : null

  return (
    <div>
      <img src={flag} alt={name} />
    </div>
  )
}

export default App
