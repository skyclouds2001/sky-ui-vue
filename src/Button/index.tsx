import { type Component, defineComponent, h, type PropType, type SlotsType } from 'vue'
import SkyIcon from '@/Icon'
import './index.css'

const SkyButton = defineComponent({
  name: 'SkyButton',
  props: {
    type: {
      type: String as PropType<'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default'>,
      default: 'default',
      required: false,
      validator: (value: string) => ['primary', 'success', 'warning', 'danger', 'info', 'default'].includes(value),
    },
    round: {
      type: Boolean,
      default: false,
      required: false,
    },
    circle: {
      type: Boolean,
      default: false,
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false,
    },
    nativeType: {
      type: String as PropType<'button' | 'submit' | 'reset'>,
      default: 'button',
      required: false,
      validator: (value: string) => ['button', 'submit', 'reset'].includes(value),
    },
    autofocus: {
      type: Boolean,
      default: false,
      required: false,
    },
    size: {
      type: String as PropType<'large' | 'default' | 'small'>,
      default: 'default',
      required: false,
      validator: (value: string) => ['large', 'default', 'small'].includes(value),
    },
    block: {
      type: Boolean,
      default: false,
      required: false,
    },
    plain: {
      type: Boolean,
      default: false,
      required: false,
    },
    icon: {
      type: [Object, Function, null] as PropType<Component | null>,
      required: false,
      default: null,
    },
  },
  slots: Object as SlotsType<{
    default?: () => unknown
    icon?: () => unknown
  }>,
  setup: (props, { expose, slots }) => {
    expose()

    return () => (
      <>
        <button aria-disabled={props.disabled} disabled={props.disabled} type={props.nativeType} autofocus={props.autofocus} class={['sky-button', props.type !== 'default' ? `sky-button-${props.type}` : '', props.round ? 'sky-button-round' : '', props.circle ? 'sky-button-circle' : '', props.disabled ? 'sky-button-disabled' : '', props.size !== 'default' ? `sky-button-${props.size}` : '', props.block ? 'sky-button-block' : '', props.plain ? 'sky-button-plain' : '']}>
          {slots.icon !== undefined ? <SkyIcon>{slots.icon()}</SkyIcon> : props.icon !== null && <SkyIcon>{h(props.icon)}</SkyIcon>}
          <span>{slots.default?.()}</span>
        </button>
      </>
    )
  },
})

export default SkyButton
