<template>
  <div :class="$style.root">
    <div :class="$style.price">
      <h1>
        {{ price + ' ₽' }}
      </h1>

      <del v-show="oldPrice"
           :class="$style.old_price">
        {{ oldPrice }}
      </del>

      <img src="../../../assets/icons/arrowLeft.svg" alt="">
    </div>

    <div :class="$style.discount">
      <div v-show="discountPercent">
        <span>{{ 'скидка -' + discountPercent + '%' }}</span>
      </div>
      <div v-show="stockPercent">
        <span>{{ 'акция -' + stockPercent + '%' }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ProductPriceProps } from './ProductPrice.props'

defineProps<ProductPriceProps>()
</script>

<style module lang="scss">
@import "../../../css/variables.scss";
.root {
  width: 100%;
  height: 100%;
}

.price {
  display: flex;
  align-items: center;
  gap: 12px;
}

.price > h1 {
  font-size: 2.4rem;
}

.price > del {
  font-size: 1.4rem;
  color: $old-price-color;
}

.price > img {
  cursor: pointer;
}

.discount {
  display: flex;
  gap: 9px;
}

.discount > div {
  box-sizing: border-box;
  padding: 4px 8px;
  height: 24px;
  font-size: 1.2rem;
  border: 1px solid black;
}
</style>
