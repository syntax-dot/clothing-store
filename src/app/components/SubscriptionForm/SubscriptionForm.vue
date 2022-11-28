<template>
  <div :class="$style.root">
    <h1 :class="$style.title">Узнавайте первыми о новинках и акциях</h1>
    <EmailInput :modelValue="inputEmail"/>
    <div :class="$style.subscribe">
      <SubscribeButton/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { EmailInput } from '../EmailInput'
import { SubscribeButton } from '../SubscribeButton'

const inputEmail = ref('')
</script>

<style module lang="scss">
.root {
  width: 100%;
  height: 100%;
}

.title {
  font-size: 1.6rem;
  font-weight: 400;
  padding: 12px 0;
}

.subscribe {
  width: 100%;
  text-align: end;
}
</style>
