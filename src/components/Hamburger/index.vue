<template>
  <div @click="toggleClick" class="hamburger">
    <i :class="{'is-active': isActive}" class="icon iconfont icon-spread"></i>
  </div>
</template>

<script>
  export default {
    name: 'Hamburger',
    props: {
      isActive: {
        type: Boolean,
        default: false
      },
      toggleClick: {
        type: Function,
        default: null
      }
    }
  };
</script>
