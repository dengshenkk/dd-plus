<template>
  <div class="icon" :style="style">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, watchEffect, onMounted, reactive, toRefs, computed } from 'vue'
import { iconProps } from './icon.ts'

/**
 * Created by haijinsha At 2021-10-18 11:42:53
 */
export default defineComponent({
  props: iconProps,
  emits: [],
  setup (props, { attrs, emit, slots }) {

    const style = computed(() => {
      return {
        [props.color && 'color']: props.color,
        [props.color && 'fontSize']: props.color + 'px',
      }
    })
    return {
      style
    }
  }
})
</script>

