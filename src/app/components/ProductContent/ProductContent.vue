<template>
  <div :class="$style.root">
    <NameAndRating :title="nameAndRating.title"
                   :vendorCode="nameAndRating.vendorСode"
                   :reviews="nameAndRating.reviews"/>
    <ProductActions/>
    <ProductLinks/>
  </div>
</template>

<script lang="ts" setup>
import { NameAndRating } from '../NameAndRating'
import { ProductActions } from '../ProductActions'
import { ProductLinks } from '../ProductLinks'
import { NameAndRatingProps } from '../NameAndRating/NameAndRating.props'

const nameAndRating: NameAndRatingProps = { title: 'Пижама для девочек', vendorСode: '02765/46', reviews: 14 }
</script>

<style module lang="scss">
.root {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 100%;
}
</style>
