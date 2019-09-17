<template>
  <footer class="footer_guide border-1px">
    <a
      href="javascript:;"
      class="guide_item"
      :class="{'on': $route.path === '/msite'}"
      @click="goto('/msite')"
    >
      <span class="item_icon">
        <i class="iconfont icon-icon_home"></i>
      </span>
      <span>首页</span>
    </a>
    <a
      href="javascript:;"
      class="guide_item"
      :class="{'on': $route.path === '/list'}"
      @click="goto('/list')"
    >
      <span class="item_icon">
        <i class="iconfont icon-guizi"></i>
      </span>
      <span>分类</span>
    </a>
    <a
      href="javascript:;"
      class="guide_item"
      :class="{'on': $route.path === '/distinguish'}"
      @click="goto('/distinguish')"
    >
      <span class="item_icon">
        <i class="iconfont icon-tupian"></i>
      </span>
      <span>识物</span>
    </a>
    <a
      href="javascript:;"
      class="guide_item"
      :class="{'on': $route.path === '/shopping'}"
      @click="goto('/shopping')"
    >
      <span class="item_icon">
        <i class="iconfont icon-qicheqianlian-1"></i>
      </span>
      <span>购物车</span>
    </a>
    <a
      href="javascript:;"
      class="guide_item"
      :class="{'on': $route.path === '/personal'}"
      @click="goto('/personal')"
    >
      <span class="item_icon">
        <i class="iconfont icon-ren"></i>
      </span>
      <span>个人</span>
    </a>
  </footer>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods: {
    goto(path){
      if(this.$route.path !== path){
        this.$router.replace(path)  
      }
    }
  },
};

</script>

<style  lang="stylus" rel="stylesheet/stylus" >
@import '../../common/stylus/mixins.styl'
.footer_guide // footer
  top-border-1px(#e4e4e4)
  position fixed
  z-index 100
  left 0
  right 0
  bottom 0
  background-color #fff
  width 100%
  height 100px
  display flex
  .guide_item
    display flex
    flex 1
    text-align center
    flex-direction column
    align-items center
    margin 5px
    color #999999
    &.on
      color #b4282d
    span
      font-size 24px
      margin-top 4px
      margin-bottom 4px
      .iconfont
        font-size 48px
       
</style>
