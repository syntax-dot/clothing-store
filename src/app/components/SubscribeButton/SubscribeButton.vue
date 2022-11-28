<template>
  <button :class="[$style.btn, {
            [$style.btn_active]: verified
          }]"
          @click="handleSubscribe">
    Подписаться
  </button>
</template>

<script lang="ts" setup>
import { SubscribeButtonProps, SubscribeButtonEmits } from './SubscribeButton.props'

defineProps<SubscribeButtonProps>()
const emit = defineEmits<SubscribeButtonEmits>()

function handleSubscribe(e: Event) {
  emit('subscribe')
}
</script>

<style module lang="scss">
.btn {
  width: 150px;
  height: 36px;
  border: 1px solid rgb(192, 192, 192);
  color: rgb(192, 192, 192);
  user-select: none;
  pointer-events: none;
  background: transparent;
  font-size: 1.4rem;
  text-align: center;
  margin: 8px 28px 8px 28px;
  transition: .3s ease-in-out;
}

.btn_active {
  border: 1px solid #333;
  color: #000;
  cursor: pointer;
  pointer-events: all;

  &:hover {
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2);
  }

}
</style>
