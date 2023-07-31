import { defineComponent } from 'vue'
import './index.css'

const SkyImage = /* #__PURE__ */ defineComponent({
  name: 'SkyImage',
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  setup: (props, { expose }) => {
    expose()

    return () => (
      <>
        <img class={['sky-image']} src={props.src} alt="" />
      </>
    )
  },
})

export default SkyImage
