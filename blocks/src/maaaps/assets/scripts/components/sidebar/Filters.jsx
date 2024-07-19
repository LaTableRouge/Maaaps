import { useState } from '@wordpress/element'
import { __ } from '@wordpress/i18n'

export default function Filters({ filters, filtersList, setFilters }) {
  const tempFilters = Object.keys(filters).length ? Object.entries(filters) : Object.entries(filtersList)

  const selectedFiltersCounter = tempFilters
    .map(([key, taxonomy]) => {
      return taxonomy.categories.filter((e) => e.checked)
    })
    .flat().length

  const handleChange = (e) => {
    const isChecked = e.checked
    const tempFilters = filters.length ? filters : filtersList

    const searchedInfos = e.id.split('---')
    const searchedTaxonomy = searchedInfos[0]
    const searchedCategory = searchedInfos[1]
    if (searchedCategory) {
      const categoryIndex = tempFilters[searchedTaxonomy].categories.findIndex((category) => category.id === Number(searchedCategory))

      tempFilters[searchedTaxonomy].categories[categoryIndex].checked = isChecked
    } else {
      tempFilters[searchedTaxonomy].checked = isChecked
      const categories = tempFilters[searchedTaxonomy].categories

      tempFilters[searchedTaxonomy].categories = categories.map((category) => {
        category.checked = isChecked
        return category
      })
    }

    setFilters(tempFilters)
  }

  const resetFilters = () => {
    const tempFilters = filters.length ? filters : filtersList

    for (const key in tempFilters) {
      if (Object.hasOwnProperty.call(tempFilters, key)) {
        const taxonomy = tempFilters[key]
        let categories = taxonomy.categories
        categories = categories.map((category) => {
          if (category.checked) {
            category.checked = false
          }
          return category
        })
      }
    }

    setFilters(tempFilters)
  }

  const [filtersOpen, setFiltersOpen] = useState(false)

  return (
    <>
      <div className="sidebar__filters-wrapper">
        <button
          aria-label={filtersOpen ? __('Close filters', 'maaaps') : __('Open filters', 'maaaps')}
          className="filters-wrapper__toggle"
          title={filtersOpen ? __('Close filters', 'maaaps') : __('Open filters', 'maaaps')}
          onClick={(e) => {
            e.preventDefault()

            setFiltersOpen(!filtersOpen)
          }}
        >
          {__('Filters', 'maaaps')}
          {!!selectedFiltersCounter && <span className="toggle__counter">{selectedFiltersCounter}</span>}
          <span className="icon-maaaps-filter"></span>
        </button>

        {!!tempFilters.length && (
          <form
            className="filters-wrapper__form"
            data-open={filtersOpen}
            onReset={(e) => {
              resetFilters()
            }}
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <div className="form__header">
              <div className="header__title">{__('Filters', 'maaaps')}</div>
              <button
                aria-label={__('Close filters', 'maaaps')}
                className="header__close"
                title={__('Close filters', 'maaaps')}
                type="button"
                onClick={(e) => {
                  e.preventDefault()

                  setFiltersOpen(false)
                }}
              >
                <span className="icon-maaaps-cross"></span>
                <span className="screen-reader-text">{__('Close filters', 'maaaps')}</span>
              </button>
            </div>

            <ul className="form__list">
              {tempFilters.map(([key, taxonomy], i) => (
                <li key={i} className="list__element">
                  <label htmlFor={key}>
                    <input
                      checked={taxonomy.checked ?? false}
                      id={key}
                      name={key}
                      type="checkbox"
                      onChange={(e) => {
                        handleChange(e.target)
                        // e.preventDefault()
                      }}
                    />
                    <span>{taxonomy.name}</span>
                  </label>

                  <ul className="list__sublist">
                    {taxonomy.categories.map((category, i) => (
                      <li key={i} className="list__element">
                        <label htmlFor={`${key}---${category.id}`}>
                          <input
                            checked={category.checked ?? false}
                            id={`${key}---${category.id}`}
                            name={`${key}---${category.id}`}
                            type="checkbox"
                            onChange={(e) => {
                              handleChange(e.target)
                              // e.preventDefault()
                            }}
                          />
                          <span>{category.name}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>

            <div className="form__footer">
              <button aria-label={__('Reset', 'maaaps')} className="form__button form__button--reset" title={__('Reset', 'maaaps')} type="reset">
                {__('Reset', 'maaaps')}
                {/* <span className="icon-maaaps-cross"></span>
                <span className="screen-reader-text">{__('Reset', 'maaaps')}</span> */}
              </button>

              {/* <button aria-label={__('Filter', 'maaaps')} className="form__button form__button--submit" title={__('Filter', 'maaaps')} type="submit"> */}
              {/* {__('Filter', 'maaaps')} */}
              {/* <span className='icon-maaaps-filter'></span> */}
              {/* <span className="screen-reader-text">{__('Filter', 'maaaps')}</span> */}
              {/* </button> */}
            </div>
          </form>
        )}
      </div>
    </>
  )
}