<template>
  <div :class="$style.info">
    <div :class="$style.icon_info">
      <img src="../../../assets/icons/fullScreen.svg" alt="fullScreen">
    </div>
    <div :class="$style.bag_info">
      <img src="../../../assets/icons/bag.svg" alt="bag">
      <div>Узнай что на мне</div>
    </div>
    <div :class="$style.likes_info">
      <div>
        <img src="../../../assets/icons/favoriteFull.svg" alt="likes">
        <div>{{ likes }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { StyleInfoProps } from './StyleInfo.props'

defineProps<StyleInfoProps>()
</script>

<style module lang="scss">
.info {
  position: relative;
  display: grid;
  box-sizing: border-box;
  font-size: 1.4rem;
  color: #fff;
  opacity: 0;
  transition: opacity 0.3s;
  padding: 12px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);

  &:hover {
    opacity: 1;
  }
}

.icon_info {
  text-align: end;
}

.bag_info {
  align-self: center;
}

.likes_info {
  align-self: end;
}

.icon_info,
.bag_info,
.likes_info > img, div {

}
</style>
