<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <FootGuide/>
  </div>
</template>

<script>
import FootGuide from './components/FootGuide/FootGuide'
export default {
  name:"",
  data() {
    return {

    };
  },
  components:{
    FootGuide
  }
};
</script>

<style  lang="stylus" rel="stylesheet/stylus" >

</style>
