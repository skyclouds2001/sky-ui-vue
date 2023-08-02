import { type App, defineComponent, type Plugin, type SlotsType } from 'vue'
import './index.css'

const SkyIcon = /* #__PURE__ */ defineComponent({
  name: 'SkyIcon',
  props: {
    size: {
      type: Number,
      default: 16,
    },
    color: {
      type: String,
      default: '#333',
    },
  },
  slots: Object as SlotsType<{
    default: () => unknown
  }>,
  setup: (props, { expose, slots }) => {
    expose()

    return () => (
      <>
        <div class="sky-icon" style={{ fontSize: `${props.size}px`, color: props.color }}>
          {slots.default?.()}
        </div>
      </>
    )
  },
})

SkyIcon.install = (app: App) => {
  app.component(SkyIcon.name, SkyIcon)
}

export default SkyIcon as typeof SkyIcon & Plugin

export { default as Minus } from './Minus'

export { default as Plus } from './Plus'
