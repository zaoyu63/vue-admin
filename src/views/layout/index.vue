<template>
  <div class="app-body">
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
    }
  };
</script>
