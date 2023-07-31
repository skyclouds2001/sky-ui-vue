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
  },
  setup: (props, { expose }) => {
    expose()

    return () => (
      <>
        <div class="sky-image">
          <img src={props.src} alt={props.alt} {...(props.width != null ? { width: props.width } : {})} {...(props.height != null ? { height: props.height } : {})} />
        </div>
      </>
    )
  },
})

export default SkyImage
