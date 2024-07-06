import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet/dist/leaflet.css'
import '@changey/react-leaflet-markercluster/dist/styles.min.css'
import 'leaflet-gesture-handling/dist/leaflet-gesture-handling.css'
import '../styles/editor.scss'

import { useBlockProps } from '@wordpress/block-editor'
import { useEntityRecord } from '@wordpress/core-data'

import Controls from './components/Controls'
import Map from './components/Map'

export default function Edit({ attributes, clientId, context, setAttributes }) {
  const postType = context['mps/postType']
  const postIDs = context['mps/postIDs']

  const blockProps = useBlockProps()

  // attributes are the states stored by Wordpress
  // They are defined in the block.json

  // States that aren't stored by Wordrpess
  // They are only usefull for the preview

  const posts = []
  if (postIDs.length) {
    postIDs.forEach((id) => {
      const { record } = useEntityRecord('postType', postType, id)
      if (record) {
        posts.push({
          title: record.title.raw,
          id: record.id,
          meta: record.meta,
          excerpt: record.excerpt.raw
        })
      }
    })
  }

  const colors = {
    search: attributes.selectedSearchColor,
    marker: attributes.selectedMarkerColor,
    cluster: attributes.selectedClusterColor,
    geolocationMarker: attributes.selectedGeolocationColor
  }
  const selectedMarkerSize = attributes.selectedMarkerSize
  const selectedMarkerClusterSize = attributes.selectedMarkerClusterSize
  const selectedMaxZoom = attributes.selectedMaxZoom
  const isGeolocated = attributes.isGeolocated
  const isClustered = attributes.isClustered
  const selectedMapTiles = attributes.selectedMapTiles
  const mapTiles = attributes.mapTiles

  return (
    <div {...blockProps}>
      <Controls
        attributes={attributes}
        colors={colors}
        isClustered={isClustered}
        isGeolocated={isGeolocated}
        mapTiles={mapTiles}
        selectedMapTiles={selectedMapTiles}
        selectedMarkerClusterSize={selectedMarkerClusterSize}
        selectedMarkerSize={selectedMarkerSize}
        selectedMaxZoom={selectedMaxZoom}
        setAttributes={setAttributes}
      />
      <Map
        colors={colors}
        isClustered={isClustered}
        isGeolocated={isGeolocated}
        posts={posts}
        selectedMapTiles={selectedMapTiles}
        selectedMarkerClusterSize={selectedMarkerClusterSize}
        selectedMarkerSize={selectedMarkerSize}
        selectedMaxZoom={selectedMaxZoom}
      />
    </div>
  )
}
