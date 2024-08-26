import { SelectControl } from '@wordpress/components'
import { __ } from '@wordpress/i18n'

export default function SelectTiles({ defaultValue, options, setAttributes }) {
  return (
    <SelectControl
      defaultValue={defaultValue}
      label={__('Map tiles', 'mappps')}
      options={options}
      onChange={(value) => {
        setAttributes({
          selectedMapTiles: value
        })
      }}
    />
  )
}