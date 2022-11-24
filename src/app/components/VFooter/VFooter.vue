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
  padding-left: 240px;
  padding-right: 240px;
  padding-bottom: 70px;
}

.content {
  display: grid;
  grid-template-columns: 50% 50%;
  box-sizing: border-box;
  margin-left: 143px;
  margin-right: 143px;
}
</style>
