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
      <div class="py-2" v-for="(item,i) in category.newsList" :key="i">
        <span>{{item.categoryName}}</span>
        <span>{{item.title}}</span>
        <span>{{item.date}}</span>
      </div>
    </template>
    </my-list-card>
  </div>
</template>

<script>
export default {
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
      newsCats: [
        {
          name: "新闻",
          newsList: new Array(5).fill(0).map(() => ({
            categoryName: "新闻",
            title: "【优化预告】游戏内更新机制优化",
            date: "06/10"
          }))
        },
        {
          name: "公告",
          newsList: new Array(5).fill(0).map(() => ({
            categoryName: "公告",
            title: "【优化预告】游戏内更新机制优化",
            date: "06/10"
          }))
        },
      ]
    }
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