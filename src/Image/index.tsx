import { defineComponent, type PropType } from 'vue'
import './index.css'

const SkyImage = /* #__PURE__ */ defineComponent({
  name: 'SkyImage',
  props: {
    src: {
      type: String,
      required: true,
    },
    width: {
      type: [Number, null] as PropType<number | null>,
      required: false,
      default: null,
    },
    height: {
      type: [Number, null] as PropType<number | null>,
      required: false,
      default: null,
    },
    alt: {
      type: String,
      required: false,
      default: '',
    },
    fit: {
      type: String as PropType<'none' | 'cover' | 'contain' | 'fill' | 'scale-down'>,
      required: false,
      default: 'none',
    },
    loading: {
      type: String as PropType<'eager' | 'lazy'>,
      required: false,
      default: 'eager',
    },
    referrerpolicy: {
      type: String as PropType<'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'>,
      required: false,
      default: 'strict-origin-when-cross-origin',
    },
    priority: {
      type: String as PropType<'high' | 'low' | 'auto'>,
      required: false,
      default: 'auto',
    },
    decoding: {
      type: String as PropType<'sync' | 'async' | 'auto'>,
      required: false,
      default: 'auto',
    },
    crossorigin: {
      type: String as PropType<'anonymous' | 'use-credentials'>,
      required: false,
      default: 'anonymous',
    },
  },
  setup: (props, { expose }) => {
    expose()

    return () => (
      <>
        <div class="sky-image">
          {/* @ts-expect-error img element have fetchpriority and loading attribute */}
          <img src={props.src} alt={props.alt} crossorigin={props.crossorigin} decoding={props.decoding} fetchpriority={props.priority} loading={props.loading} referrerpolicy={props.referrerpolicy} {...(props.width != null ? { width: props.width } : {})} {...(props.height != null ? { height: props.height } : {})} style={{ objectPosition: 'center', objectFit: props.fit }} />
        </div>
      </>
    )
  },
})

export default SkyImage
