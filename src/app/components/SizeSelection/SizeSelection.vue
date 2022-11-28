<template>
  <div :class="$style.root">
    <div :class="$style.dropdown">
      <div :class="$style.title">
        Выбрать размер
      </div>

      <img src="../../../assets/icons/arrowDown.svg"
           :class="[$style.arrow_down,
                    { [$style.arrow_up]: dropdown }]"
           @click="dropdown = !dropdown">

      <div v-show="dropdown"
           :class="[$style.dropdown_select, {
             [$style.opacity] : dropdown
           }]">
        <div v-for="size in availableSizes"
             :key="size"
             :class="$style.options"
             @click="handleSelect(size)">
          {{ Size[size] }} ({{ size }})
        </div>
      </div>
    </div>

    <a v-show="!dropdown" href="#"> Определить размер </a>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { SizeSelectionProps, SizeSelectionEmits } from './SizeSelection.props'
import { Size } from '../../types/product'

defineProps<SizeSelectionProps>()
const emit = defineEmits<SizeSelectionEmits>()

const dropdown = ref(false)

function handleSelect(size: Size) {
  console.log(`Выбран ${size} размер`)

  emit('select', size)

  dropdown.value = false
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
  position: absolute;
  display: grid;
  grid-template-columns: 1fr max-content;
  box-sizing: border-box;
  width: 315px;
  padding: 8px;
  justify-content: space-between;
  align-items: center;
  transition: 0.3s ease-in-out;
  border: 1px solid #000;
}

.dropdown_select {
  position: relative;
}

.options {
  display: grid;
  grid-auto-flow: row;
  margin-left: 8px;
  cursor: pointer;
  font-size: 1.4rem;
  color: rgb(134, 134, 134);
  transition: 0.3s ease-in-out;

  &:hover {
  color: #000;
}
}

.root > a {
  text-decoration: underline;
  position: relative;
  top: 50px;
}
</style>
