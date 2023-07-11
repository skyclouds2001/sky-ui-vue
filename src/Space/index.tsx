import { defineComponent, type PropType, type SlotsType } from 'vue'
import './index.css'

const SkySpace = defineComponent({
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
      default: false,
    }
  },
  slots: Object as SlotsType<{
    default: () => any
  }>,
  setup: (props, { slots }) => {
    return () => (
      <>
        <div class={['sky-space', `sky-space-${props.direction}`]} style={{ flexWrap: props.wrap ? 'wrap' : 'no-wrap', gap: `${props.size}px` }}>{slots.default().map((children) => (
          <>
            <div class="sky-space-item">
              {children}
            </div>
          </>
        ))}</div>
      </>
    )
  },
})

export default SkySpace
