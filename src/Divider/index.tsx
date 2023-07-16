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
    type: {
      type: String as PropType<'solid' | 'dashed' | 'dotted' | 'hidden' | 'none' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset'>,
      default: 'solid',
      required: false,
      validator: (value: string) => ['solid', 'dashed', 'dotted', 'hidden', 'none', 'double', 'groove', 'ridge', 'inset', 'outset'].includes(value),
    },
  },
  slots: Object as SlotsType<{
    default?: () => any
  }>,
  setup: (props, { slots }) => {
    return () => (
      <>
        <div class={['sky-divider']} style={{ borderStyle: props.type }}>
          <span class={['sky-divider-text', `sky-divider-text-${props.position}`]}>{slots.default?.()}</span>
        </div>
      </>
    )
  },
})

export default SkyDivider
