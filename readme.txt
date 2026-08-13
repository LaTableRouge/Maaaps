=== Mappps ===
Contributors: latablerouge, bobbymcbobbyface
Requires at least: 6.2
Tested up to: 7.1
Requires PHP: 8.0
Stable tag: 1.7.8
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
Repository: https://github.com/LaTableRouge/Mappps
Donate link: https://github.com/LaTableRouge/Mappps
Mappps, is a plugin designed to display maps with the help of Leaflet.
It's main purpose is to quickly make store locator for Wordpress websites.

== Description ==

A simple way to add custom maps or store locators to your WordPress posts and pages with our intuitive plugin. Ideal for contact pages, showcasing business locations, event venues, and more!
Mappps includes both a simple map block and an advanced composable block, with support for custom markers, clustering, geolocation, filters, and ACF/SCF coordinates out of the box.

## Block Features

- **Versatile Data Sources**: Choose the data source for your markers, whether from WordPress post types, taxonomies, or categories.
- **Sidebar Integration**: Optionally display a sidebar with the selected posts for additional context.
- **Search Functionality**: Enable a search bar to help users find specific locations quickly.
- **Advanced Filtering**: Provide filters to refine search results based on different criteria.
- **Customizable Markers**: Personalize marker colors to match your branding.
- **Multiple Map Tiles**: Select from multiple map tile options to fit your design preferences.
- **Real-Time Preview**: View your map in real time within the block editor, ensuring it meets your needs before publishing.
- **User-Friendly Interface**: Easily customize maps without any coding experience.
- **Optimized Performance**: Lightweight construction ensures optimal performance without burdening your site.
- **No Database Overhead**: Works without additional database queries or tables, maintaining site efficiency.
- **Zoom Control**: Adjust the zoom level of your map to fit your display requirements.
- **Localization Support**: Fully supports localization to cater to a global audience.
- **Full site editing**: You can edit the posts render directly inside the block.
- **Advanced Custom Fields compatibility**: You can use ACF/SCF fields instead of native custom fields if needed.

## Two Block Options

This plugin includes two distinct blocks to cater to different user needs:

1. **Simple Block**:
   - Designed for ease of use with minimal customization options.
   - Ideal for users who want a quick and straightforward way to add a map or store locator to their site.

2. **Complex Block**:
   - Offers multiple inner blocks for advanced customization.
   - Allows for detailed personalization, including custom markers, advanced filtering, and more.
   - Best suited for users who require a highly tailored map experience.

## References

We leverage several high-quality libraries and third-party service providers to render maps in your preferred mapping engine. Below are the details and when they are used:

- **[Leaflet](https://leafletjs.com/)**: A leading open-source JavaScript library for interactive maps, renowned for its simplicity, performance, and usability.
- **[Leaflet GeoSearch](https://smeijer.github.io/leaflet-geosearch/)**: An advanced geocoding control for Leaflet, enabling seamless address searches and location suggestions.
- **[React Leaflet](https://react-leaflet.js.org/)**: Provides bindings for using Leaflet with React, ensuring smooth integration with React-based applications.
- **[React leaflet markercluster](https://www.npmjs.com/package/@changey/react-leaflet-markercluster)**: A powerful plugin for clustering markers on a Leaflet map when using React Leaflet, boosting map performance and enhancing user experience with clustered markers.

== Frequently Asked Questions ==

= Advanced Custom Field (ACF/SCF) compatibility =
In order to make the plugin work with ACF (or SCF), you'll need to create new fields for your desired post types.
Go to **Field groups** and add a new one:
Then add a new **Field** with the type **Text** and use **mappps_lat** as field name.
Add another one and name it **mappps_lng**.
In the **Settings** below, go to the **Group Settings** tab and check **Show in REST API**.

= Can I customize the markers on the map? =
Yes, you can customize the marker color and size inside the "Block settings" > "Render settings".

= What if I have multiple posts with the same location? =
The plugin support the clustering for the markers, you can disable it but then the map will display overlapping markers.

= Can I put multiple "Mappps" blocks in the same page? =
Yes.

= Can I put "Mappps" and "Mappps (blocks)" blocks in the same page? =
Yes.

= Known bug =
Leaflet is not compatible with [Gridjs](https://github.com/grid-js/gridjs) somehow Gridjs and Leaflet both uses the property "window.L".
Depending on which library is called first, the other takes priority and the first one don't work.

== Screenshots ==

1. This is a desktop view of the plugin in front-end
2. This is a desktop view of the plugin in front-end, with a location searched
3. This is a desktop view of the plugin in front-end, with a searched location displayed
4. This is a desktop view of the plugin in front-end, with the filters opened
5. This is a desktop view of the plugin in front-end, with a post selected
6. This is a desktop RTL view of the plugin in front-end
7. This is the loader of the plugin
8. This is a mobile view of the plugin in front-end
9. This is a mobile view of the plugin in front-end, with the filters opened
10. This is a mobile view of the plugin in front-end, with the posts list opened
11. This is a mobile view of the plugin in front-end, with a post selected
12. This is a mobile view of the plugin in front-end, with the post details popup expanded
13. This is a mobile RTL view of the plugin in front-end, with a post selected
14. This is a view of a post with the lat & lng filled in custom fields
15. This is a view of the gutenberg block with all inner blocks

== Upgrade Notice ==

= 1.7.7 =
* Includes translation updates and documentation improvements.

= 1.6.0 =
* If you're using the "Mappps (blocks)" block, you'll need to recreate It.

= 1.5.0 =
* Maybe you'll need to delete and recreate the block in your gutenberg editor.

= 1.4.0 =
* Maybe you'll need to delete and recreate the block in your gutenberg editor.

= 0.0.9 =
* This version fix RTL styles, please upgrade immediately.

== Changelog ==

= 1.7.8 =
* Released: August 13, 2026
* Wordpress 7.1 compatibility check.

= 1.7.7 =
* Released: April 29, 2026
* Added missing wizard translation strings.
* Updated plugin documentation.

= 1.7.6 =
* Released: April 29, 2026
* Improved map stability by preventing gesture-handling runtime crashes when Leaflet globals are overridden by third-party scripts.
* Adding wizard information about multilingual websites

= 1.7.3 =
* Released: March 19, 2026
* https://github.com/LaTableRouge/Mappps/releases/tag/1.7.3
* enhancing perf on query for the mappps block
* removing react calls
* cleaning console logs

= 1.7.1 =
* Released: March 19, 2026
* https://github.com/LaTableRouge/Mappps/releases/tag/1.7.1
* Fixing translations

= 1.7.0 =
* Released: March 19, 2026
* https://github.com/LaTableRouge/Mappps/releases/tag/1.7.0
* Added compatibility with posts using `mappps_marker` meta fields (including ACF/SCF) while keeping legacy `lat` and `lng` fields working
* Added handling for marker picture/media fields
* Improved settings page translation and version handling
* Fixed `mappps-blocks` global state handling
* Fixed SCSS deprecation issues and cleaned up styles
* Raised the minimum PHP version to 8.0

= 1.6.0 =
* Released: December 16, 2025
* https://github.com/LaTableRouge/Mappps/releases/tag/1.6.0
* Refreshed settings page with header/footer navigation and compact layout
* Added compatibility with posts using `mappps_lat` / `mappps_lng` meta fields (including ACF/SCF) across blocks and post details the old "lat" and "lng" will still be working
* Added a media selector for the new "mappps_marker" custom field, you can now have a specific marker per post
* Added a toggle for the "View itinerary" and "Open in new tab" for the "Mappps (blocks)" block
* Fixed the link click in the "Mappps (blocks)" post-template block
* Fixed ACF field use for the "Mappps (blocks)" block

= 1.5.2 =
* Released: November 28, 2025
* https://github.com/LaTableRouge/Mappps/releases/tag/1.5.2
* Compatibility check for WP 6.9 release

= 1.5.1 =
* Released: November 11, 2025
* https://github.com/LaTableRouge/Mappps/releases/tag/1.5.1
* Fixing the scope of plugin links

= 1.5.0 =
* Released: October 09, 2025
* https://github.com/LaTableRouge/Mappps/releases/tag/1.5.0
* Adding icons selector for markers on 'mappps-block'
* Better posts selection on 'mappps-block'

= 1.4.0 =
* Released: March 22, 2025
* https://github.com/LaTableRouge/Mappps/releases/tag/1.4.0
* Adding icons for blocks
* Adding a "Marker" block component
* Adding zoom to marker toggle
* Adding a marker shadow toggle
* Code improvement to match global standard

= 1.3.0 =
* Released: January 23, 2025
* https://github.com/LaTableRouge/Mappps/releases/tag/1.3.0
* Fixing marker clustering in Gutenberg
* Fixing having multiple maps in the same page
* Fixing tileLayer change in gutenberg editor

= 1.2.1 =
* Released: January 13, 2025
* https://github.com/LaTableRouge/Mappps/releases/tag/1.2.1
* Cleaning up the codebase
* Preventing interaction with the map in the block editor

= 1.2.0 =
* Released: December 5, 2024
* https://github.com/LaTableRouge/Mappps/releases/tag/1.2.0
* Adding ACF/SCF compatibility.

= 1.1.2 =
* Released: November 13, 2024
* https://github.com/LaTableRouge/Mappps/releases/tag/1.1.2
* Removing @changey/react-leaflet-markercluster dependency and other useless dependencies
* CSS compatibility following the deprecation of the @import rule in Dart Sass
* Better icon handling

= 1.1.1 =
* Released: September 13, 2024
* https://github.com/LaTableRouge/Mappps/releases/tag/1.1.1
* Adding icons

= 1.1.0 =
* Released: August 30, 2024
* https://github.com/LaTableRouge/Mappps/releases/tag/1.1.0

= 1.0.0 =
* Released: August 28, 2024
* https://github.com/LaTableRouge/Mappps/releases/tag/1.0.0-beta
* Adding new blocks

= 0.0.10 =
* Released: August 30, 2024
* https://github.com/LaTableRouge/Mappps/releases/tag/0.0.10
* fix loader height

= 0.0.9 =
* Released: August 27, 2024
* https://github.com/LaTableRouge/Mappps/releases/tag/0.0.9
* RTL styles fix

= 0.0.8 =
* Released: August 27, 2024
* https://github.com/LaTableRouge/Mappps/releases/tag/0.0.8
* Guidelines review

= 0.0.7 =
* Released: August 26, 2024
* https://github.com/LaTableRouge/Mappps/releases/tag/0.0.7
* Name change

= 0.0.6 =
* Released: July 29, 2024
* https://github.com/LaTableRouge/Mappps/releases/tag/0.0.6
