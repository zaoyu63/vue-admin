<template>
  <div :class="{mobile: isMobile, 'hide-navBar': closeNavBar}" id="app">
    <router-view/>
  </div>
</template>
<script>
  import resizeHandler from '@/utils/resizeHandler';

  export default {
    mixins: [resizeHandler],
    watch: {
      $route() {
        if (this.isMobile) {
          this.$store.commit('closeNavBar', true);
        }
      }
    },
    computed: {
      isMobile() {
        return this.$store.state.isMobile;
      },
      closeNavBar() {
        return this.$store.state.closeNavBar;
      }
    }
  };
</script>
