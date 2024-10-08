import { isColorLight } from '../../../../../src/helpers/scripts/functions'

export default function AlterBlockProps(blockProps = {}, attributes) {
  blockProps.style = {
    ...blockProps.style,
    '--color-primary': attributes.selectedPrimaryColor,
    '--color-secondary': attributes.selectedSecondaryColor,
    '--color-button-primary': isColorLight(attributes.selectedPrimaryColor, 170) === 'light' ? 'var(--color-gray-700)' : 'var(--color-white)',
    '--color-button-secondary': isColorLight(attributes.selectedSecondaryColor, 170) === 'light' ? 'var(--color-gray-700)' : 'var(--color-white)',
    '--sidebar-size': attributes.sharedAttributes?.selectedSidebarSize,
    '--details-size': attributes.sharedAttributes?.selectedDetailsSize
  }
  if (blockProps.style.aspectRatio) {
    if (blockProps.style.aspectRatio !== 'auto') {
      blockProps.style['--aspect-ratio'] = blockProps.style.aspectRatio
    }
    delete blockProps.style.aspectRatio
  }

  return blockProps
}
