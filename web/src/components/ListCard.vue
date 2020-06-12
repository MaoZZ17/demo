<template>
  <my-card
    :icon="icon"
    :title="title"
    class="mt-3"
  >
    <div class="nav">
      <div
        class="nav-item"
        :class="{active: active === i}"
        @click="active = i"
        v-for="(category,i) in categories"
        :key="i"
      >
        <div class="nav-link">{{category.name}}</div>
      </div>
    </div>
    <div class="pt-3">
      <swiper>
        <swiper-slide
          v-for="(category,i) in categories"
          :key="i"
        >
          <slot name="items" :category="category"></slot>
        </swiper-slide>
      </swiper>
    </div>
  </my-card>
</template>

<script>
export default {
  props: {
    icon: { type: String, required: true },
    title: { type: String, required: true },
    categories: { type: Array, required: true },
  },
  data() {
    return {
      active: 0
    }
  }
}
</script>