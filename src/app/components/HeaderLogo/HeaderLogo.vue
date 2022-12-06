<template>
  <div :class="$style.logo">
    <h1 :class="$style.title">LOGO</h1>
  </div>
</template>

<script lang="ts" setup>

</script>

<style module lang="scss">
@import "../../../css/variables.scss";

.logo {
  text-align: center;
}

.title {
  color: $main-text-color;
  font-size: 2.2rem;
  font-weight: 700;
}
</style>
