import { InspectorControls } from '@wordpress/block-editor'
import { PanelBody } from '@wordpress/components'
import { __ } from '@wordpress/i18n'

import ToggleLimitedSearch from './controls/ToggleLimitedSearch'

export default function Controls({ attributes, setAttributes }) {
  return (
    <InspectorControls>
      <PanelBody initialOpen={true} title={__('Data settings', 'mappps')}>
        <ToggleLimitedSearch defaultValue={attributes.limitedSearch} setAttributes={setAttributes} />
      </PanelBody>
    </InspectorControls>
  )
}
