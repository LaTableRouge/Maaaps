import { __ } from '@wordpress/i18n'

export default function SettingsPage() {
  return (
    <>
      <h1>{__('Getting Started with the Mappps Plugin', 'mappps')}</h1>
      <p>
        {__(
          'Welcome to the comprehensive guide on how to get started with our Mappps Plugin. This plugin allows you to display maps with markers based on the latitude and longitude provided in your posts. Follow the steps below to set up and utilize the plugin effectively.',
          'mappps'
        )}
      </p>

      <h2>{__('Table of Contents', 'mappps')}</h2>
      <ul>
        <li>
          <a href="#creating-posts-with-location-data">{__('Creating Posts with Location Data', 'mappps')}</a>
        </li>
        <li>
          <a href="#displaying-the-map">{__('Displaying the Map', 'mappps')}</a>
        </li>
        <li>
          <a href="#troubleshooting">{__('Troubleshooting', 'mappps')}</a>
        </li>
        <li>
          <a href="#faqs">{__('FAQs', 'mappps')}</a>
        </li>
      </ul>

      <h2 id="creating-posts-with-location-data">{__('Creating Posts with Location Data', 'mappps')}</h2>
      <p>{__('To display markers on the map, you need to add latitude and longitude custom fields to your posts. Follow these steps:', 'mappps')}</p>
      <ol>
        <li>
          <strong>{__('Add a New Post:', 'mappps')}</strong> {__('Go to "Posts" > "Add New".', 'mappps')}
        </li>
        <li>
          <strong>{__('Enter Post Details:', 'mappps')}</strong> {__('Fill in the title, excerpt, category, tags and picture.', 'mappps')}
        </li>
        <li>
          <strong>{__('Add Custom Fields:', 'mappps')}</strong>
          <ol>
            <li>{__('Scroll down to the "Custom Fields" section.', 'mappps')}</li>
            <li>
              {__(
                'If the "Custom Fields" section is not visible, enable it by clicking on "Screen Options" at the top right of the screen (the three dots) and go to "Preferences" then check "Custom Fields".',
                'mappps'
              )}
            </li>
            <li>
              {__('Click on "Add Custom Field".', 'mappps')} {__('In the "Name" field, enter or select "lat" and in the "Value" field, enter the latitude coordinate.', 'mappps')}
            </li>
            <li>{__('Repeat the above step for the "lng" field.', 'mappps')}</li>
          </ol>
        </li>
        <li>
          <strong>{__('Publish the Post:', 'mappps')}</strong> {__('Once all details are filled in, click on "Publish".', 'mappps')}
        </li>
      </ol>

      <h2 id="displaying-the-map">{__('Displaying the Map', 'mappps')}</h2>
      <p>{__('To display the map on your site, you can use the provided Gutenberg block.', 'mappps')}</p>

      <h3>{__('Using Gutenberg Block', 'mappps')}</h3>
      <ol>
        <li>
          <strong>{__('Edit Page/Post:', 'mappps')}</strong> {__('Open the page or post where you want to add the map.', 'mappps')}
        </li>
        <li>
          <strong>{__('Add Block:', 'mappps')}</strong> {__('Click the "+" icon to add a new block and search for "Mappps".', 'mappps')}
        </li>
        <li>
          <strong>{__('Configure Block:', 'mappps')}</strong> {__('Select the block and configure any additional settings if necessary.', 'mappps')}
        </li>
        <li>
          <strong>{__('Publish/Update:', 'mappps')}</strong> {__('Save your changes.', 'mappps')}
        </li>
      </ol>

      <h2 id="troubleshooting">{__('Troubleshooting', 'mappps')}</h2>
      <p>{__('If the map does not display correctly, consider the following:', 'mappps')}</p>
      <ul>
        <li>
          <strong>{__('Check Custom Fields:', 'mappps')}</strong> {__('Ensure that the latitude and longitude fields are correctly added to your posts.', 'mappps')}
        </li>
        <li>
          <strong>{__('Block:', 'mappps')}</strong> {__('Verify that the block is correctly added to your page or post.', 'mappps')}
        </li>
      </ul>

      <h2 id="faqs">{__('FAQs', 'mappps')}</h2>
      <h3>{__('Can I customize the markers on the map?', 'mappps')}</h3>

      <p>{__('Yes, you can customize the marker color and size inside the "Block settings" > "Render settings".', 'mappps')}</p>

      <h3>{__('What if I have multiple posts with the same location?', 'mappps')}</h3>
      <p>{__('The plugin support the clustering for the markers, you can disable it but then the map will display overlapping markers.', 'mappps')}</p>

      <p>
        {__(
          'We hope this guide helps you get started with the Mappps Plugin. Should you have any questions or need further assistance, please use the issue section in the Github.',
          'mappps'
        )}
        <a href="https://github.com/LaTableRouge/Mappps/issues">{__('Submit an issue', 'mappps')}</a>
      </p>
    </>
  )
}
