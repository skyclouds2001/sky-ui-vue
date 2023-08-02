import { type App, defineComponent, type Plugin, type PropType, type SlotsType } from 'vue'
import './index.css'

const SkySpace = /* #__PURE__ */ defineComponent({
  name: 'SkySpace',
  props: {
    direction: {
      type: String as PropType<'horizontal' | 'vertical'>,
      default: 'horizontal',
      required: false,
      validator: (value: string) => ['horizontal', 'vertical'].includes(value),
    },
    wrap: {
      type: Boolean,
      default: false,
    },
    size: {
      type: Number,
      default: 0,
    },
  },
  slots: Object as SlotsType<{
    default: () => unknown[]
  }>,
  setup: (props, { expose, slots }) => {
    expose()

    return () => (
      <>
        <div class={['sky-space', `sky-space-${props.direction}`]} style={{ flexWrap: props.wrap ? 'wrap' : 'nowrap', gap: `${props.size}px` }}>
          {slots.default?.().map((children: unknown) => (
            <>
              <div class="sky-space-item">{children}</div>
            </>
          ))}
        </div>
      </>
    )
  },
})

SkySpace.install = (app: App) => {
  app.component(SkySpace.name, SkySpace)
}

export default SkySpace as typeof SkySpace & Plugin
