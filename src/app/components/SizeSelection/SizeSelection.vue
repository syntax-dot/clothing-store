<template>
  <div :class="$style.root">
    <div ref="dropdown"
         :class="$style.dropdown">
      <div :class="$style.title">
        Выбрать размер
      </div>

      <img src="../../../assets/icons/arrowDown.svg"
           :class="[$style.arrow_down,
                    { [$style.arrow_up]: isDropdownShow }]"
           @click="isDropdownShow = !isDropdownShow">

      <div v-show="isDropdownShow"

           :class="[$style.dropdown_select, {
             [$style.opacity] : isDropdownShow
           }]">
        <div v-for="size in availableSizes"
             :key="size"
             :class="$style.options"
             @click="handleSelect(size)">
          {{ Size[size] }} ({{ size }})
        </div>
      </div>
    </div>

    <a v-show="!isDropdownShow" href="#"> Определить размер </a>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { SizeSelectionProps, SizeSelectionEmits } from './SizeSelection.props'
import { Size } from '../../types/product'

defineProps<SizeSelectionProps>()
const emit = defineEmits<SizeSelectionEmits>()

const dropdown = ref<HTMLDivElement>()

const isDropdownShow = ref(false)

onMounted(() => {
  window.addEventListener('click', handleClick)
})

onUnmounted(() => {
  window.removeEventListener('click', handleClick)
})

function handleClick(e: Event) {
  if (e.target instanceof HTMLElement) {
    let element = e.target

    while (element.parentElement !== null) {
      if (element === dropdown.value)
        return

      element = element.parentElement
    }

    isDropdownShow.value = false
  }
}

function handleSelect(size: Size) {
  console.log(`Выбран ${size} размер`)

  emit('select', size)

  isDropdownShow.value = false
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

@media screen and (max-width: 1024px) {

  .dropdown {
    width: 290px;
  }
}
</style>
