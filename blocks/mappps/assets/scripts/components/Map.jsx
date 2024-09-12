import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet/dist/leaflet.css'
import '@changey/react-leaflet-markercluster/dist/styles.min.css'
import 'leaflet-gesture-handling/dist/leaflet-gesture-handling.css'

import { useMemo, useRef, useState } from '@wordpress/element'
import { MapContainer, TileLayer } from 'react-leaflet'

import ChangeView from '../utils/ChangeView'
import MapControls from './map/MapControls'
import MarkerCluster from './map/MarkerCluster'
import MarkerGeolocation from './map/MarkerGeolocation'
import Markers from './map/Markers'
import MarkerSearch from './map/MarkerSearch'

const Map = ({
  boundsPadding,
  cluster,
  clusterSize,
  displaySearch,
  isGeolocated,
  isMobileView,
  limitedSearch,
  markerOffset,
  markerRefs,
  markerSize,
  maxMarkerZoom,
  maxZoom,
  mobileIsMapDisplayed,
  postRefs,
  posts,
  selectedPost,
  selectedSearchResult,
  setFiltersOpen,
  setSelectedPost,
  setSelectedSearchResult,
  tiles
}) => {
  const clusterRef = useRef(null)

  const markers = Markers(posts, markerSize, markerRefs, postRefs, setSelectedPost, selectedPost, setFiltersOpen)

  const markerGroup = useMemo(() => {
    return cluster ? MarkerCluster(markers, clusterSize, clusterRef) : markers
  }, [markers])

  const refMarkerGeolocation = useRef(null)
  const [geolocationCoordinates, setGeolocationCoordinates] = useState({})
  const markerGeolocationMemo = useMemo(() => {
    if (isGeolocated && Object.keys(geolocationCoordinates).length) {
      return MarkerGeolocation(geolocationCoordinates, refMarkerGeolocation)
    } else {
      return null
    }
  }, [geolocationCoordinates])

  const refMarkerSearch = useRef(null)
  const markerSearchMemo = useMemo(() => {
    if (displaySearch && !limitedSearch && Object.keys(selectedSearchResult).length) {
      return MarkerSearch(selectedSearchResult, refMarkerSearch)
    } else {
      return null
    }
  }, [selectedSearchResult])

  return (
    <div className="mappps__leaflet" data-map-shown={mobileIsMapDisplayed}>
      <MapContainer doubleClickZoom={false} maxZoom={maxZoom} scrollWheelZoom={false} zoomControl={false} zoomSnap={0.1}>
        <ChangeView
          boundsPadding={boundsPadding}
          isMobileView={isMobileView}
          markerGeolocation={markerGeolocationMemo}
          markerOffset={markerOffset}
          markers={markers}
          markerSearch={markerSearchMemo}
          maxMarkerZoom={maxMarkerZoom}
          posts={posts}
          refCluster={clusterRef}
          refMarkerGeolocation={refMarkerGeolocation}
          refMarkerSearch={refMarkerSearch}
          refsMarker={markerRefs}
          selectedPost={selectedPost}
        />

        <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' className="mapTiles" url={tiles} />

        <MapControls
          geolocationCoordinates={geolocationCoordinates}
          isGeolocated={isGeolocated}
          setGeolocationCoordinates={setGeolocationCoordinates}
          setSelectedPost={setSelectedPost}
          setSelectedSearchResult={setSelectedSearchResult}
        />

        {/* Posts markers */}
        {markerGroup}

        {/* Geolocation marker */}
        {markerGeolocationMemo}

        {/* Search marker */}
        {markerSearchMemo}
      </MapContainer>
    </div>
  )
}

export default Map
