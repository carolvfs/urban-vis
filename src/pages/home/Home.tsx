import "./Home.css"

import Map from "../../components/map/Map"

import ElementWrapper from "../../components/element-wrapper/ElementWrapper"

const Home = () => {

  const render = () => {
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