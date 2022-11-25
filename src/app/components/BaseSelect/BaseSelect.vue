<template>
  <div :class="$style.root">
    <div :class="$style.dropdown">
      <div :class="$style.title">Выбрать размер</div>
      <img src="./arrowDown.svg"
           :class="[$style.arrow_down,
                    { [$style.arrow_up]: dropdown }]"
           @click="handleClick">
      <div v-show="dropdown"
           :class="[$style.dropdown_content, {
             [$style.opacity] : dropdown
           } ]">
        <a v-for="size in sizes">
          {{ size }}
        </a>
      </div>
    </div>

    <a href="#"> Определить размер </a>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const dropdown = ref(false)

const sizes = [
  'S',
  'M',
  'L',
]

function handleClick() {
  dropdown.value = !dropdown.value
}
</script>

<style module lang="scss">
.root {
  display: grid;
  grid-template-rows: max-content max-content;
}

.title {
  font-size: 1.4rem;
  margin: 4px 8px;
}

.arrow_down {
  transition: transform .3s;
  transform: rotate(0deg);
  cursor: pointer;

  &:hover {
    scale: 1.1;
  }
}

.arrow_up {
  transform: rotate(180deg);
}

.dropdown {
  display: grid;
  grid-template-columns: 1fr max-content;
  box-sizing: border-box;
  width: 315px;
  // height: 44px;
  padding: 8px;
  justify-content: space-between;
  align-items: center;
  // width: 100%;
  transition: 0.3s ease-in-out;
  border: 1px solid #000;

  &:hover {
    // box-shadow: 0px 5px 5px -5px rgba(0, 0, 0, 0.6);
  }
}

.opacity {
  opacity: 0.8;
}

.dropdown_content {
  // opacity: 0;
  margin-left: 20px;
  transition: opacity 0.3s;
}
.dropdown_content > a:hover {
  color: #000;
  cursor: pointer;
}

.root > a {
  text-decoration: underline;
}
</style>
