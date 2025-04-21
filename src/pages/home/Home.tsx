import "./Home.css"

import Map from "../../components/map/Map"

import ElementWrapper from "../../components/element-wrapper/ElementWrapper"

import { DataLoader } from "../../data-loader/DataLoader"
import { useEffect, useState } from "react"

const Home = () => {

  const [grammar, setGrammar] = useState({})

  useEffect(() => {
    const _grammar = DataLoader.read_grammar()
    setGrammar(_grammar)
  },[])

  const render = () => {
    // console.log(grammar)
    return (
      <div className="home">
        <ElementWrapper height="500px" width="500px">
        {/* <ElementWrapper> */}
          <Map/>
        </ElementWrapper>
      </div>
    )
  }

  return render()

}

export default Home