<template>
  <div :class="[$style.root, {
    [$style.hidden]: hidden
  }]">
    <HeaderLogo/>

    <HeaderIcons/>
  </div>
</template>

<script lang="ts" setup>
import { HeaderLogo } from '../HeaderLogo'
import { HeaderIcons } from '../HeaderIcons'
import { onMounted, onUnmounted, ref } from 'vue'
import { useThrottleFn } from '@vueuse/core'

const hidden = ref(false)
const scrollTop = ref(0)
const oldScrollTop = ref(0)

onMounted(() => {
  window.addEventListener('scroll', throttledFn)
})

onUnmounted(() => {
  window.removeEventListener('scroll', throttledFn)
})

// В случае если нам НЕ всё равно на производительность
const throttledFn = useThrottleFn(() => {
  scrollTop.value = window.scrollY

  handleOpacity(scrollTop.value, oldScrollTop.value)

  oldScrollTop.value = scrollTop.value
}, 100)

// В случае если нам всё равно на производительность
// function handleScroll(e: Event) {
//   scrollTop.value = window.scrollY

//   handleOpacity(scrollTop.value, oldScrollTop.value)

//   oldScrollTop.value = scrollTop.value
// }

function handleOpacity(scrollTop: number, oldScroll: number) {
  if (scrollTop > 100 && scrollTop > oldScroll)
    return hidden.value = true

  return hidden.value = false
}
</script>

<style module lang="scss">
.root {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: opacity .5s;
  z-index: 2;
}

.hidden {
  opacity: 0;
}

@media screen and (max-width: 1440px) {
  .root {
    padding-left: 140px;
    padding-right: 140px;
  }
}

@media screen and (max-width: 768px) {
  .root {
    padding-left: 40px;
    padding-right: 40px;
  }
}
</style>
