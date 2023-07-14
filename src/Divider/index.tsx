import { defineComponent, type SlotsType } from 'vue'
import './index.css'

const SkyDivider = defineComponent({
  name: 'SkyDivider',
  slots: Object as SlotsType<{
    default?: () => any
  }>,
  setup: (_, { slots }) => {
    return () => (
      <>
        <div class={['el-divider']}>
          <span class={[slots.default !== undefined ? 'el-divider-text' : '']}>{slots.default?.()}</span>
        </div>
      </>
    )
  },
})

export default SkyDivider
