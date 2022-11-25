<template>
  <div :class="$style.root">
    <div :class="$style.logo">
      <h1 :class="$style.title">LOGO</h1>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style module lang="scss">
@import "../../../css/variables.scss";
.root {
  width: 100%;
  height: 100%;
}

.logo {
  text-align: center;
}

.title {
  color: $main-text-color;
  font-size: 2.2rem;
  font-weight: 700;
}
</style>
