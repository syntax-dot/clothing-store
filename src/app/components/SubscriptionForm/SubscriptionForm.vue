<template>
  <div :class="$style.root">
    <h1 :class="$style.title">Узнавайте первыми о новинках и акциях</h1>
    <EmailInput v-model="inputEmail"
                @clear="handleClear"
                @emailVerified="emailVerified = true"/>

    <div :class="$style.subscribe">
      <SubscribeButton :verified="emailVerified"
                       @click="handleSubscribe"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { EmailInput } from '../EmailInput'
import { SubscribeButton } from '../SubscribeButton'

const inputEmail = ref('')
const emailVerified = ref(false)

function handleClear() {
  inputEmail.value = ''
}

function handleSubscribe() {
  console.log(`${inputEmail.value} подписался на обновления`)
}
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
  text-align: right;
}

.not_verified {
  color: rgb(235, 235, 235);
  border: 1px solid rgb(235, 235, 235);
}
</style>
