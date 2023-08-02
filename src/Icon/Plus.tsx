import { type App, defineComponent, type Plugin } from 'vue'

const Plus = /* #__PURE__ */ defineComponent({
  setup: () => {
    return () => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path color="currentcolor" d="M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z" />
      </svg>
    )
  },
})

Plus.install = (app: App) => {
  app.component(Plus.name, Plus)
}

export default Plus as typeof Plus & Plugin
