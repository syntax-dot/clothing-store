<template>
  <div v-for="notification in notificationSet"
       :key="notification.message"
       :class="$style.root">
    {{ notification.message }}
  </div>
</template>

<script lang="ts" setup>
import { notificationSet } from '../../Notification/Notification'

function ClearTimeout() {
  timeout = 0
}
</script>

<style module lang="scss">
.root {
  position: fixed;
  right: 60px;
  top: 70px;
  align-items: center;
  border-left: 4px solid rgb(255, 0, 0);
  background-color: rgb(121, 121, 121);
  padding: 16px;
  width: 300px;
  height: 40px;
}
</style>
