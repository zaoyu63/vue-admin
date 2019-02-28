<template>
  <div class="header-container">
    <div class="left">
      <hamburger :isActive="closeNavBar" :toggleClick="toggleClick"/>
      <Breadcrumb/>
    </div>
    <div class="right">
      <theme-picker/>
      <a class="git-hub" href="https://github.com/zaoyu63/vue-admin" target="_blank">
        <i class="iconfont icon-github"></i>
      </a>
    </div>
  </div>
</template>
<script>
  import Hamburger from '@/components/Hamburger';
  import Breadcrumb from '@/components/Breadcrumb';
  import ThemePicker from '@/components/ThemePicker';

  export default {
    components: {Hamburger, Breadcrumb, ThemePicker},
    computed: {
      closeNavBar() {
        return this.$store.state.closeNavBar;
      }
    },
    methods: {
      toggleClick() {
        this.$store.commit('closeNavBar', !this.closeNavBar);
      }
    }
  };
</script>
