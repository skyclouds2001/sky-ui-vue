import { defineComponent, type PropType, type SlotsType } from 'vue'
import './index.css'

const SkyDivider = /* #__PURE__ */ defineComponent({
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
    direction: {
      type: String as PropType<'horizontal' | 'vertical'>,
      default: 'horizontal',
      required: false,
      validator: (value: string) => ['horizontal', 'vertical'].includes(value),
    },
  },
  slots: Object as SlotsType<{
    default?: () => unknown
  }>,
  setup: (props, { expose, slots }) => {
    expose()

    return () => (
      <>
        <div role="separator" aria-orientation={props.direction} class={['sky-divider', `sky-divider-${props.direction}`]} style={{ borderStyle: props.type }}>
          <span class={['sky-divider-text', `sky-divider-text-${props.position}`]}>{slots.default?.()}</span>
        </div>
      </>
    )
  },
})

export default SkyDivider
