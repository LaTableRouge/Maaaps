import { __experimentalNumberControl as NumberControl } from '@wordpress/components'
import { __ } from '@wordpress/i18n'

export default function InputBoundsPadding({ defaultValue, setAttributes }) {
  return (
    <NumberControl
      help={__('The padding value for the bounds of the map', 'mappps')}
      isShiftStepEnabled={false}
      label={__('Bounds padding', 'mappps')}
      min={0}
      value={defaultValue}
      onChange={(value) => {
        setAttributes({ selectedBoundsPadding: value })
      }}
    />
  )
}
