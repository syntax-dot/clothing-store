<template>
  <div ref="dropdown"
       :class="$style.dropdown">
    <img src="../../../assets/icons/menu.svg"
         :class="[$style.menu,
                  { [$style.cancel]: isDropdownShow }]"
         alt="Menu"
         @click="isDropdownShow = !isDropdownShow">
    <Transition name="dropdown_select" appear>
      <div v-show="isDropdownShow"
           :class="$style.dropdown_select">
        <div :class="$style.links">
          <a href="#">Постельное бельё</a>
          <a href="#">Одежда для дома</a>
          <a href="#">Одежда для улицы</a>
          <a href="#">Выход</a>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'

const isDropdownShow = ref(false)

const dropdown = ref<HTMLDivElement>()

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
</script>

<style module lang="scss">
.dropdown {

}

.menu {
  content: url(../../../assets/icons/menu.svg);
}

.cancel {
  content: url(../../../assets/icons/bigClose.svg);
}

.menu,
.cancel {
  position: relative;
  z-index: 1;
}

.dropdown_select {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 277px;
  background-color: #fff;
  padding: 80px 25px 40px 30px;
}

.links {
  display: grid;
  grid-auto-flow: row;
}

.links > a {
  text-transform: uppercase;
  font-size: 1.4rem;
}
</style>

<style>
.dropdown_select-enter-active {
  animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.dropdown_select-leave-active {
  animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) reverse;
}

@keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-1000px);
            transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}
</style>
