<template>
  <div :class="$style.root">
    <h1 :class="$style.title">
      Узнавайте первыми о новинках и акциях
    </h1>

    <EmailInput v-model="inputEmail"
                :isEmailError="emailVerified"
                @clear="handleClear"/>

    <div :class="$style.subscribe">
      <SubscribeButton :verified="emailVerified"
                       @click="handleSubscribe"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { EmailInput } from '../EmailInput'
import { SubscribeButton } from '../SubscribeButton'
import { EmailValidator } from '../../validators/EmailValidator'

const inputEmail = ref('')
const emailVerified = ref(false)

function handleClear() {
  inputEmail.value = ''
}

function handleSubscribe() {
  console.log(`${inputEmail.value} подписался на обновления`)
}

watch(inputEmail, () => {
  if (inputEmail.value.length > 6)
    emailVerified.value = EmailValidator(inputEmail.value)
})
</script>

<style module lang="scss">
.root {
  width: 100%;
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
