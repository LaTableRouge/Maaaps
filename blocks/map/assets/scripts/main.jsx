import { useCallback, useState } from '@wordpress/element'

import GlobalStateEventsHandler from '../../../../src/helpers/scripts/GlobalStateEventsHandler'
import Map from './components/Map'

export default function Main({ attributes, blockId, inEditor = false, queriedPosts }) {
  const [isMobileView, setIsMobileView] = useState(false)
  const [popupOffset, setPopupOffset] = useState(0)
  const [posts, setPosts] = useState(false)
  GlobalStateEventsHandler(blockId, posts, setPosts, 'posts')
  const [selectedPost, setSelectedPost] = useState({})
  GlobalStateEventsHandler(blockId, selectedPost, setSelectedPost, 'selectedPost', () => {
    // Close filters if a post is selected
    if (Object.keys(selectedPost).length) {
      document.dispatchEvent(
        new CustomEvent('mps-filtersOpen', {
          detail: {
            id: blockId,
            filtersOpen: false
          }
        })
      )
    }

    return false
  })
  const [selectedSearchResult, setSelectedSearchResult] = useState({})
  GlobalStateEventsHandler(blockId, selectedSearchResult, setSelectedSearchResult, 'selectedSearchResult')

  const wrapperRef = useCallback((node) => {
    if (!node) {
      return
    }
    const resizeObserver = new ResizeObserver(() => {
      const ancestorBlock = node.closest('.wp-block-mps-mappps-blocks .responsive-wrapper')
      if (ancestorBlock) {
        const isMobile = !!window.getComputedStyle(ancestorBlock).getPropertyValue('--is-mobile').length
        setIsMobileView(isMobile)

        const detailsPopup = ancestorBlock.querySelector('.wp-block-mps-post-details')
        if (detailsPopup) {
          const dir = window.getComputedStyle(detailsPopup, null).getPropertyValue('direction')

          if (isMobileView) {
            setPopupOffset(detailsPopup.clientHeight * -1)
          } else {
            if (dir === 'rtl') {
              setPopupOffset(detailsPopup.clientWidth * -1)
            } else {
              setPopupOffset(detailsPopup.clientWidth)
            }
          }
        }
      }
    })
    resizeObserver.observe(node)
  }, [])

  return (
    <div ref={wrapperRef}>
      <Map
        boundsPadding={attributes.selectedBoundsPadding}
        cluster={attributes.isClustered}
        clusterSize={attributes.selectedMarkerClusterSize}
        isGeolocated={attributes.isGeolocated}
        isMobileView={isMobileView}
        markerOffset={popupOffset}
        markerSize={attributes.selectedMarkerSize}
        maxMarkerZoom={attributes.selectedMaxMarkerZoom}
        maxZoom={attributes.selectedMaxZoom}
        posts={posts || queriedPosts}
        selectedPost={selectedPost}
        selectedSearchResult={selectedSearchResult}
        setSelectedPost={setSelectedPost}
        setSelectedSearchResult={setSelectedSearchResult}
        tiles={attributes.selectedMapTiles}
      />
    </div>
  )
}
