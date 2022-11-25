<template>
  <button :class="$style.btn">Подписаться</button>
</template>

<script lang="ts" setup>

</script>

<style module lang="scss">
.btn {
  width: 150px;
  height: 36px;
  border: 1px solid #333;
  background: transparent;
  font-size: 1.4rem;
  text-align: center;
  margin: 8px 28px 8px 28px;
  cursor: pointer;
  transition: .3s ease-in-out;

  &:hover {
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2);
  }
}
</style>
