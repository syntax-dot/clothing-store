<template>
  <div :class="$style.root">
    <a :class="$style.link"
       href="#"> Просмотреть все стили</a>

    <div :class="$style.styles">
      <div :class="$style.left">
        <div :class="$style.left_image"
             :style="{ backgroundImage: `url(${mainImage})` }">
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
                <div>200</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div :class="$style.right">
        <div v-for="image in presetnationImages"
             :key="image"
             :style="{ backgroundImage: `url(${image})` }"
             :class="$style.right_image">
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
                <div>200</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { StylesPresentationProps } from './StylesPresentation.props'
defineProps<StylesPresentationProps>()
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

.left,
.right {
  width: 686px;
  height: 686px;
}

.left_image,
.right_image {
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

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

.right {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 12px;
}

@media screen and (max-width: 768px) {
  .styles {
    grid-template-columns: 1fr;
  }

  .left,
  .right {
    width: 100%;
    height: 768px;
  }

}

@media screen and (max-width: 425px) {
  .styles {
    grid-template-columns: 1fr;
  }

  .left,
  .right {
    width: 100%;
    height: 425px;
  }

  .right,
  .styles {
    gap: 8px
  }

}
</style>
