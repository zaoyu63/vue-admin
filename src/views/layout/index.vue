<template>
  <div class="app-body">
    <div @click="closeNavBar" class="mobile-shade" v-show="isMobile && !closeBar"></div>
    <nav-bar/>
    <div class="main-container">
      <header-part/>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
  import NavBar from '@/components/navBar';
  import HeaderPart from '@/components/header';

  export default {
    components: {
      NavBar, HeaderPart
    },
    computed: {
      isMobile() {
        return this.$store.state.isMobile;
      },
      closeBar() {
        return this.$store.state.closeNavBar;
      }
    },
    methods: {
      closeNavBar() {
        this.$store.commit('closeNavBar', true);
      }
    }
  };
</script>
