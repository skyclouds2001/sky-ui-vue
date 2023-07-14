import { defineComponent, type PropType, type SlotsType } from 'vue'
import './index.css'

const SkyDivider = defineComponent({
  name: 'SkyDivider',
  props: {
    position: {
      type: String as PropType<'left' | 'right' | 'center'>,
      default: 'center',
      required: false,
      validator: (value: string) => ['left', 'right', 'center'].includes(value),
    },
  },
  slots: Object as SlotsType<{
    default?: () => any
  }>,
  setup: (props, { slots }) => {
    return () => (
      <>
        <div class={['sky-divider']}>
          <span class={[slots.default !== undefined ? 'sky-divider-text' : '', `sky-divider-text-${props.position}`]}>{slots.default?.()}</span>
        </div>
      </>
    )
  },
})

export default SkyDivider
