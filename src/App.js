import { useEffect, useState } from "react"
import styled from "styled-components"

const Flag = styled.img`
  display: block;
  margin: auto;
  margin-top: 100px;
  width: 500px;
  border-style: solid;
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
      {country && <Flag src={flag} alt={name} />}
    </div>
  )
}

export default App
