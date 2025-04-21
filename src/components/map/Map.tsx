import "./Map.css"

import { useRef, useState, useEffect, useCallback } from "react"

import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"

import LayersWrapper from "../layers/LayersWrapper"

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN as string


const Map = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null)
  
  const [map, setMap] = useState<mapboxgl.Map | null>(null)

  const startMap = useCallback(() => {
    if (!mapContainerRef.current) return

    const mapInstance = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/light-v11",//"mapbox://styles/mapbox/navigation-day-v1",
      // center: [-89.12987909766366, 40.09236099826568] as [number, number],
      center: [-74, 40.76] as [number, number],
      zoom: 11,
    })

    // mapInstance.on("zoom", () => {
    //   setCurrentZoom(mapInstance.getZoom())
    // })

    setMap(mapInstance)

    return () => mapInstance.remove()

  },[])

  useEffect(() => startMap(), [startMap])

  
  return (
    <div className="map-container" ref={mapContainerRef}>
      {map && <LayersWrapper map={map}/>}
    </div>
  )

}

export default Map