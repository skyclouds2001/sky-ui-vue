import { defineComponent, type PropType, type SlotsType } from 'vue'
import './index.css'

const SkyLink = defineComponent({
  name: 'SkyLink',
  props: {
    type: {
      type: String as PropType<'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default'>,
      default: 'default',
      required: false,
      validator: (value: string) => ['primary', 'success', 'warning', 'danger', 'info', 'default'].includes(value),
    },
    href: {
      type: String,
      required: true,
    },
    target: {
      type: String as PropType<'_self' | '_blank' | '_parent' | '_top'>,
      default: '_self',
      required: false,
      validator: (value: string) => ['_self', '_blank', '_parent', '_top'].includes(value),
    },
    download: {
      type: String,
      default: '',
      required: false,
    },
    disabled: {
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
    underline: {
      type: Boolean,
      default: true,
      required: false,
    },
  },
  slots: Object as SlotsType<{
    default: () => unknown
  }>,
  setup: (props, { expose, slots }) => {
    expose()

    return () => (
      <>
        <a aria-disabled={props.disabled} href={props.href} target={props.target} download={props.download} class={['sky-link', props.type !== 'default' ? `sky-link-${props.type}` : '', props.disabled ? 'sky-link-disabled' : '', props.underline ? 'sky-link-underline' : '', props.size !== 'default' ? `sky-link-${props.size}` : '']}>
          <span>{slots.default?.()}</span>
        </a>
      </>
    )
  },
})

export default SkyLink
