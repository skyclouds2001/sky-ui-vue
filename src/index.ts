import type { Plugin } from 'vue'

import './index.css'

import SkyButton from './Button'

import SkyDivider from './Divider'

import SkyIcon, { Minus, Plus } from './Icon'

import SkyImage from './Image'

import SkyLink from './Link'

import SkySpace from './Space'

import SkyText from './Text'

export { Minus, Plus, SkyButton, SkyDivider, SkyIcon, SkyImage, SkyLink, SkySpace, SkyText }

export const version = '0.0.2'

const components = {
  Minus,
  Plus,
  SkyButton,
  SkyDivider,
  SkyIcon,
  SkyImage,
  SkyLink,
  SkySpace,
  SkyText,
}

const SkyUI: Plugin & Record<'version', string> & typeof components = {
  ...components,
  version,
  install: (app) => {
    Object.entries(components).forEach(([_, component]) => app.use(component))
  },
}

export default SkyUI
