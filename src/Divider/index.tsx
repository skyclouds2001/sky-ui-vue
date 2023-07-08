import { defineComponent } from 'vue'
import './index.css'

const SkyDivider = defineComponent({
  name: 'SkyDivider',
  setup: () => {
    return () => (
      <>
        <div class={['el-divider']}></div>
      </>
    )
  },
})

export default SkyDivider
