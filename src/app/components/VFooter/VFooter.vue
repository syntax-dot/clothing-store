<template>
  <div :class="$style.root">
    <div :class="$style.content">
      <FooterLinks/>
      <SubscriptionForm/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { FooterLinks } from '../FooterLinks'
import { SubscriptionForm } from '../SubscriptionForm'
</script>

<style module lang="scss">
.root {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}

.content {
  display: grid;
  grid-template-columns: 50% 50%;
  box-sizing: border-box;
  margin-left: 143px;
  margin-right: 143px;
}

@media screen and (max-width: 768px) {

  .content {
    margin-left: 0px;
    margin-right: 0px;
  }
}

@media screen and (max-width: 425px) {

  .content {
    grid-template-columns: 1fr;
    gap: 58px;
    margin-left: 0px;
    margin-right: 0px;
  }
}
</style>
