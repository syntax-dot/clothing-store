<template>
  <div :class="$style.root"/>
</template>

<script lang="ts" setup>
import { BaseButtonProps, BaseButtonEmits } from './BaseButton.props'

defineProps<BaseButtonProps>()
defineEmits<BaseButtonEmits>()
</script>

<style module lang="scss">
.root {
  width: 100%;
  height: 100%;
}
</style>
