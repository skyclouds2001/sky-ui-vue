import { defineComponent } from 'vue'
import './index.css'

const Divider = defineComponent({
  name: 'SkyDivider',
  setup: () => {
    return () => (
      <>
        <div class={['el-divider']}></div>
      </>
    )
  },
})

export default Divider
