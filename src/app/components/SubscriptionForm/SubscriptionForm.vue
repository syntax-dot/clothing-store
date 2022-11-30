<template>
  <div :class="$style.root">
    <h1 :class="$style.title">
      Узнавайте первыми о новинках и акциях
    </h1>
    <div :class="$style.email">
      <EmailInput v-model="inputEmail"
                  :isEmailError="emailVerified"
                  @clear="handleClear"/>

      <div v-for="error in errors"
           :key="error"
           :class="$style.error">
        {{ error }}
      </div>
    </div>

    <div :class="$style.subscribe">
      <SubscribeButton :verified="emailVerified"
                       @subscribe="handleSubscribe"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { EmailInput } from '../EmailInput'
import { SubscribeButton } from '../SubscribeButton'
import { EmailValidator } from '../../validators/EmailValidator'

const inputEmail = ref('')
const emailVerified = ref(true)
const errors = reactive(new Set<string>())

function handleClear() {
  inputEmail.value = ''
}

async function errorsHandler(error: string) {
  errors.add(error)

  await new Promise(resolve => setTimeout(resolve, 3000))

  errors.delete(error)
}

function handleSubscribe() {
  const result = EmailValidator(inputEmail.value)
  if (typeof result === 'string')
    errorsHandler(result)

  console.log(`${inputEmail.value} подписался на обновления`)
}

// watch(inputEmail, () => {
//   if (inputEmail.value.length > 6)
//     emailVerified.value = EmailValidator(inputEmail.value)
// })
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

.email {
  display: grid;
  grid-template-rows: max-content 24px;
}
.error {
  // position: relative;
  height: 24px;
  padding-left: 24px;

  color: rgb(255, 0, 0);
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
