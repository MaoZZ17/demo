<template>
  <div
    v-if="model"
    class="page-hero"
  >
    <div class="topbar bg-black py-2 px-4 d-flex ai-center text-white">
      <img
        src="../assets/logo.png"
        height="30"
      >
      <div class="px-2 flex-1">
        <span class="text-white">王者荣耀</span>
        <span class="ml-2">攻略站</span>
      </div>
      <router-link
        class="nav-link"
        tag="div"
        to="/"
      >更多英雄 &gt;</router-link>
    </div>
    <div
      class="top"
      :style="{'background-image':`url(${model.banner})`}"
    >
      <div class="info text-white h-100 d-flex flex-column jc-end p-3">
        <div class="fs-sm">{{model.title}}</div>
        <h2 class="my-2">{{model.name}}</h2>
        <div class="fs-sm">{{model.categories.map(v=>v.name).join('/')}}</div>
        <div class="d-flex jc-between pt-2">
          <div
            class="scores d-flex ai-center"
            v-if="model.scores"
          >
            <span>难度</span>
            <span class="badge bg-primary">{{model.scores.difficult}}</span>
            <span>技能</span>
            <span class="badge bg-blue">{{model.scores.skills}}</span>
            <span>攻击</span>
            <span class="badge bg-danger">{{model.scores.attack}}</span>
            <span>生存</span>
            <span class="badge bg-dark">{{model.scores.survive}}</span>
          </div>
          <router-link
            to='/'
            tag='span'
            class="text-gray fs-sm"
          > 皮肤： 8 &gt;</router-link>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="skills p-4 white-background">
        <div class="icons d-flex jc-around mb-3">
          <img
            v-for="skill in model.skills"
            @click="selectedSkill = skill"
            :class="{current:selectedSkill == skill}"
            :key="skill._id"
            :src="skill.icon"
          />
        </div>
        <div class="detail">
          <div class="d-flex ">
            <strong
              class="fs-xl"
              style="width:6rem"
            >{{selectedSkill.name}}</strong>
            <span class="fs-xs">(冷却值：{{selectedSkill.delay}} 消耗：{{selectedSkill.cost}})</span>
          </div>
          <div class="mt-3">{{selectedSkill.description}}</div>
        </div>
      </div>
      <div class="items px-3 white-background">
        <h2 class="pt-3">出装推荐</h2>
        <div class="advantage my-2">
          <strong class="fs-xl">顺风出装</strong>
          <div class="icons d-flex jc-around pt-2">
            <div
              v-for="item in model.items1"
              :key="item._id"
              class="d-flex flex-column ai-center"
            >
              <img :src="item.icon" />
              <div class="fs-xs ">{{item.name}}</div>
            </div>
          </div>
        </div>
        <div class="disadvantage my-2">
          <strong class="fs-xl">逆风出装</strong>
          <div class="icons d-flex jc-around pt-2">
            <div
              v-for="item in model.items2"
              :key="item._id"
              class="d-flex flex-column ai-center"
            >
              <img :src="item.icon" />
              <div class="fs-xs ">{{item.name}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="tips px-3 white-background">
        <h2 class="pt-3">使用技巧</h2>
        <div>
          {{model.usageTips}}
        </div>
      </div>
      <div class="tips px-3 white-background">
        <h2 class="pt-3">对抗技巧</h2>
        <div>
          {{model.battleTips}}
        </div>
      </div>
      <div class="tips px-3 white-background">
        <h2 class="pt-3">团战思路</h2>
        <div>
          {{model.teamTips}}
        </div>
      </div>
      <div class="heroes px-3 white-background">
        <h2 class="pt-3">英雄关系</h2>
        <div class="fs-xl my-2">最佳拍档</div>
        <div class="partners">
          <div
            class="d-flex"
            v-for="partner in model.partners"
            :key="partner._id"
          >
            <div class="d-flex flex-column ai-center p-2 mb-3">
              <img :src="partner.hero.avatar" />
              <span class="fs-sm">{{partner.hero.name}}</span>
            </div>
            <div>
              {{partner.description}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    id: { requried: true }
  },
  data() {
    return {
      model: null,
      selectedSkill: {
        cost: "0",
        delay: "0",
        description: "",
        icon: "",
        name: "",
      }
    }
  },
  created() {
    this.fetch()
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`heroes/${this.id}`)
      this.model = res.data
      this.selectedSkill = res.data.skills[0]
    },
    skillClick(skill) {
      console.log(skill)
    }
  }

}
</script>

<style lang="scss" >
.page-hero {
  line-height: 1.5rem;
  .topbar {
    position: sticky;
    top: 0;
    z-index: 999;
  }
  .top {
    height: 50vw;
    background: no-repeat top center;
    background-size: auto 100%;
  }
  .info {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    .scores {
      .badge {
        margin: 0 0.25rem;
        display: inline-block;
        width: 1rem;
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        border-radius: 50%;
        font-size: 0.75rem;
        border: 1px solid rgba($color: #fff, $alpha: 0.3);
      }
    }
  }
  .content {
    .skills {
      .icons {
        img {
          width: 20%;
        }
        .current {
          border: #db9e3f 2px solid;
          border-radius: 50%;
        }
      }
    }
    .items {
      img {
        height: 13vw;
        border-radius: 50%;
      }
      .advantage {
        border-bottom: #d4d9de 1px solid;
      }
    }
    .partners {
      img {
        width: 13vw;
      }
    }
  }
  .white-background {
    background: white;
    padding-bottom: 1rem;
  }
}
</style>