<template>
  <div class="app">
    app 12322222222222222

    <Icon size="30" color="red">这是一个Icon组件</Icon>
  </div>
</template>

<script lang="ts">
import { defineComponent, watchEffect, onMounted, reactive, toRefs } from 'vue'
import { Icon } from '@dd-plus/components/icon'

/**
 * Created by haijinsha At 2021-10-18 11:36:14
 */
export default defineComponent({
  props: {},
  emits: [],
  components: {Icon},
  setup (props, { attrs, emit, slots }) {
    const { propsKeyName } = toRefs(props)
    const state = reactive({})

    onMounted(() => {
      console.log('app onMounted init~')
    })

    watchEffect(() => {
      console.log('app watchEffect init~')
    })

    return {
      ...toRefs(state)
    }
  }
})
</script>

