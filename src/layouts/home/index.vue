<template>
  <v-app>
 
    <home-bar />
        <home-view />
    <home-footer />

 
  </v-app>
</template>

<script>
  // Styles 这里要改写md 过去的才有这个
  import '@/styles/overrides.sass'
   import HomeView from './View'
import HomeFooter from './Footer'
 import HomeBar from './AppBar'
export default {
        name: 'HomeLayout',
  components: {
      // eslint-disable-next-line vue/no-unused-components
      HomeBar,
      HomeView,
      HomeFooter
  },
  data() {
    return {

    }
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {}
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类

</style>
