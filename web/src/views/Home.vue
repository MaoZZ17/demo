<template>
  <div>
    <swiper :options="swiperOptionsObject">
      <swiper-slide>
        <img
          src="../assets/images/swiper1.jpeg"
          class="w-100"
        >
      </swiper-slide>
      <swiper-slide>
        <img
          src="../assets/images/swiper2.jpeg"
          class="w-100"
        >
      </swiper-slide>
      <swiper-slide>
        <img
          src="../assets/images/swiper3.jpeg"
          class="w-100"
        >
      </swiper-slide>
      <div
        class="swiper-pagination pagination-home text-right px-3 pc-2"
        slot="pagination"
      ></div>
    </swiper>

    <div class="nav-icons bg-white mt-3 text-center pt-3 text-grey-1">
      <div class="d-flex flex-wrap">
        <div
          class="nav-item mb-3"
          v-for="n in 10"
          :key="n"
        >
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2">
        <i class="sprite sprite-arrow mr-1"></i>
        收起
      </div>
    </div>

    <my-list-card
      icon="Menu"
      title="新闻资讯"
      :categories="newsCats"
    >
      <template #items="{category}">
        <router-link
          tag='div'
          class="py-2 fs-lg d-flex"
          v-for="(item,i) in category.newsList"
          :key="i"
          :to="`/articles/${item._id}`"
        >
          <span class="text-info">{{item.categoryName}} </span>
          <span class="flex-1 text-dark-1 text-ellipse">{{item.title}}</span>
          <span class="text-grey-1 fs-sm">{{item.createdAt|date}}</span>
        </router-link>
      </template>
    </my-list-card>
    <my-list-card
      icon="big-hero"
      title="英雄列表"
      :categories="heroCats"
    >
      <template #items="{category}">
        <div
          class="d-flex flex-wrap"
          style="margin: 0 -0.5rem"
        >
          <router-link
            tag="div"
            :to="`/heroes/${item._id}`"
            class="p-2 text-center"
            style="width:20%"
            v-for="(item,i) in category.heroList"
            :key="i"
          >
            <img
              :src="item.avatar"
              class='w-100'
            />
            <div>{{item.name}}</div>
          </router-link>
        </div>
      </template>
    </my-list-card>
  </div>
</template> 

<script>
import dayjs from "dayjs"
export default {
  filters: {
    date(val) {
      return dayjs(val).format('MM/DD')
    }
  },
  data() {
    return {
      swiperOptionsObject: {
        autoplay: {
          autoplay: true,
          disableOnInteraction: false
        },
        pagination: {
          el: '.pagination-home'
        },
      },
      newsCats: [],
      heroCats: []
    }
  },
  created() {
    this.fetchNewsCats()
    this.fetchHeroCats()
  },
  methods: {
    async fetchNewsCats() {
      const res = await this.$http.get('news/list')
      this.newsCats = res.data
    },
    async fetchHeroCats() {
      const res = await this.$http.get('heroes/list')
      this.heroCats = res.data
    },
  }
}
</script>

<style lang="scss">
@import "../assets/scss/variables";

.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 2px;
    background: white;
    &.swiper-pagination-bullet-active {
      background: map-get($map: $colors, $key: info);
    }
  }
}

.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      border-right: none;
    }
  }
}
</style>