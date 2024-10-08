import { SelectControl, Spinner } from '@wordpress/components'
import { useEffect } from '@wordpress/element'
import { __ } from '@wordpress/i18n'

import GetTaxonomies from '../../utils/GetTaxonomies'

export default function SelectTaxonomies({ defaultValue, postType, setAttributes, setQueriedPosts }) {
  const { resolved, taxonomies } = GetTaxonomies(postType)

  const options = []
  if (taxonomies && taxonomies.length) {
    taxonomies.forEach((taxonomy) => {
      options.push({ label: taxonomy.name, value: taxonomy.slug })
    })
  }

  useEffect(() => {
    if (resolved && Object.keys(taxonomies).length) {
      setAttributes({ taxonomies })
    }
  }, [resolved])

  if (resolved) {
    return (
      <>
        {/* eslint-disable-next-line multiline-ternary */}
        {taxonomies.length ? (
          <SelectControl
            multiple
            defaultValue={defaultValue}
            label={__('Taxonomies', 'mappps')}
            options={options}
            onChange={(value) => {
              setQueriedPosts([])
              setAttributes({
                selectedTaxonomies: value,
                categories: {},
                selectedCategories: []
                // selectedPosts: []
              })
            }}
          />
        ) : (
          __('No taxonomies could be recovered.', 'mappps')
        )}
      </>
    )
  } else {
    return <Spinner />
  }
}
