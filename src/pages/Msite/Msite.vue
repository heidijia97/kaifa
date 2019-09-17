<template>
<div class="msiteContainer">
    <!-- <h1>hao</h1>
    <p>p</p>-->
    <div class="msiteHeader">
      <a class="msite_title" href="javascript:;">网易严选</a>
      <input type="text" placeholder="搜索商品，共22714款好物" />
      <span class="search_icon">
        <i class="iconfont icon-search"></i>
      </span>
      <button class="btn">登录</button>
    </div>
    <div class="tuijian">
      <div class="tuijianList">
        <a href="javascript:;" class='active'>推荐</a>
        <a href="javascript:;">居家生活</a>
        <a href="javascript:;">服饰鞋包</a>
        <a href="javascript:;">美食酒水</a>
        <a href="javascript:;">美食酒水</a>
        <a href="javascript:;">美食酒水</a>
        <a href="javascript:;">美食酒水</a>
        <a href="javascript:;">美食酒水</a>
        <a href="javascript:;">美食酒水</a>
        <a href="javascript:;">美食酒水</a>
        <a href="javascript:;">美食酒水</a>
      </div>
      <span class="jiantou">
        <i class="iconfont icon-jiantouyou-copy"></i>
      </span>
      <p class='line'></p>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:'">
                <img src="../../common/images/shop/4.jpg" alt="">
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:'">
                <img src="../../common/images/shop/4.jpg" alt="">
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:'">
                <img src="../../common/images/shop/4.jpg" alt="">
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:'">
                <img src="../../common/images/shop/4.jpg" alt="">
            </a>
          </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="jianjie">
      <span class="jianjie_icon">
        <i class="iconfont icon-kuaiqiang"></i>
      </span>
      <span class='jianjie_text'>网易自营品牌</span>
      <span class="jianjie_icon">
        <i class="iconfont icon-iconfont5"></i>
      </span>
      <span class='jianjie_text'>30天无忧退货</span>
      <span class="jianjie_icon">
        <i class="iconfont icon-transanction"></i>
      </span>
      <span class='jianjie_text right'>48小时快速退款</span>
    </div>

</div>
</template>

<script>
import Swiper from 'swiper'
import "swiper/dist/css/swiper.css";
export default {
  name: "",
  data() {
    return {};
  },
  mounted() {
    new Swiper ('.swiper-container', {
    
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      type : 'custom',
      renderCustom: function (swiper, current, total) {
         var paginationHtml = " ";
					for (var i = 0; i < total; i++) {
						// 判断是不是激活焦点，是的话添加active类，不是就只添加基本样式类
						if (i === (current - 1)) {
							paginationHtml += '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
						}else{
							paginationHtml += '<span class="swiper-pagination-customs"></span>';
						}						  
					}
					return paginationHtml;
				},
 
        }
      // bulletClass : 'my-bullet'
    
 
  })        
  },
};
</script>

<style  lang="stylus" rel="stylesheet/stylus" >
/* h1
  width 750px
  background-color red
p
  width 5rem
  background-color yellow */
.msiteContainer
  width 100%
  .msiteHeader
    font-size 40px
    margin 20px
    position relative
    z-index 99
    .msite_title
      font-size 34px
      margin-right 20px
      height 40px
      line-height 40px
      color #222
      font-family '宋体'
      font-weight bold
    input
      background-color rgba(0, 0, 0, 0.1)
      height 60px
      width 443px
      font-size 28px
      border-radius 10px 
      padding-left 70px
      box-sizing border-box
      vertical-align middle
      outline 0
    .search_icon
      position absolute
      top 10px
      left 190px
      .iconfont
        font-size 36px
    .btn
      border 1px solid #b4282d
      font-size 24px
      color #b4282d
      background-color white
      border-radius 10px
      width 74px
      height 40px
      margin-left 10px
  .tuijian
    font-size 32px
    padding 10px 40px 0  
    box-sizing border-box
    z-index 99
    .tuijianList
      white-space nowrap
      width 90%
      overflow hidden
      a 
        margin-right 40px
      .active
        color #b4282d
    .line
      border 2px solid #b4282d
      width 80px
      height 0
      margin-top 10px
      margin-left -10px
      
    .jiantou
      z-index 99
      width 10%
      .iconfont
        font-size 32px
        width 100%
        position  fixed
        top 110px
        left 700px
  .swiper-container
    width 100%
    height 370px
    .swiper-wrapper
      width 100%
      height 100%
      .swiper-slide
        display flex
        justify-content center
        img 
          width 100%
          height 100%
    // swiper-pagination common-swiper-pagination swiper-pagination-clickable swiper-pagination-bullets
    // .swiper-pagination
    //   .swiper-pagination-custom
		// 		width 100%
		// 		height 20px
		// 		text-align: center
    //     .swiper-pagination-customs 
    //       width 30px!important
    //       height 1px!important
    //       background-color yellow!important
    //     .swiper-pagination-custom-active
    //       width 30px!important
    //       height 1px!important
    //       background-color red!important
  .jianjie
    font-size 28px
    text-align center
    margin 20px
    .jianjie_icon
      .iconfont
        color #b4282d
        font-size 26px
    .jianjie_text
      margin 10px 20px 10px 10px
    .right
      margin-right 0
 
</style>
