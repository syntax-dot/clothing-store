<template>
  <div :class="$style.root">
    <a :class="$style.link"
       href="#"> Просмотреть все стили</a>

    <div :class="$style.styles">
      <div :class="$style.left">
        <div>*</div>
      </div>
      <div :class="$style.right">
        <div>*</div>
        <div>*</div>
        <div>*</div>
        <div>*</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style module lang="scss">
.root {
  text-align: center;
  margin-top: 24px;
}

.link {
  text-decoration: underline;
  margin: 24px;
  transition: .2s ease-in-out;

  &:hover {
    color: #000;
    font-weight: 500;
  }
}
.styles {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 24px;
}

.left {
  width: 686px;
  height: 686px;

  // max-width: 686px;
  // max-height: 686px;

  background-color: rgb(138, 138, 138);
}

.right {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 12px;
}

.right > div {
  // max-height: 335px;
  background-color: #333;
}

.root > div {

}
</style>
