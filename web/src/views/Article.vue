<template>
  <div
    class="page-article"
    v-if="model"
  >
    <div class="d-flex py-3 px-1">
      <div class="px-2 text-title">◀</div>
      <strong class="flex-1 text-title">
        {{model.title}}
      </strong>
      <div class="text-grey fs-xs">
        2019-06-19
      </div>
    </div>
    <div
      v-html="model.body"
      class="px-3 body fs-lg"
    ></div>
    <div class="px-3 border-top py-2">
      <div class="d-flex ai-center">
        <i class="iconfont Menu"></i>
        <div class="text-title fs-lg ml-1">相关资讯</div>
      </div>
      <router-link
        tag='div'
        class="pu-2"
        :to="`/articles/${item._id}`"
        v-for="item in model.related"
        :key="item._id"
      >
        {{item.title}}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: { required: true }
  },
  data() {
    return {
      model: null
    }
  },
  watch:{
    id(){
      this.fetch()
    }
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`articles/${this.id}`)
      this.model = res.data
    }
  },
  created() {
    this.fetch()
  }
}
</script>

<style lang="scss">
.page-article {
  .body {
    img {
      width: 100%;
    }
    iframe {
      width: 100%;
      height: auto;
    }
  }
}
</style>