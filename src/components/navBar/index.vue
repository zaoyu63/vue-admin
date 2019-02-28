<template>
  <div class="navBar-container">
    <el-scrollbar>
      <el-menu :collapse="closeNavBar" :default-active="$route.path" :show-timeout="100" active-text-color="#409EFF"
               background-color="#545c64"
               mode="vertical" router text-color="#bfcbd9">
        <template v-for="item in menu">
          <el-submenu :index="item.path" :key="item.path" v-if="item.children && item.children.length">
            <template slot="title">
              <i :class="'icon-'+item.meta.icon" class="icon iconfont"></i>
              <span slot="title">{{item.name}}</span>
            </template>
            <template v-if="item.children && item.children.length">
              <template v-for="child in item.children">
                <el-submenu :index="child.path" :key="child.path" v-if="child.children && child.children.length">
                  <span slot="title">{{child.name}}</span>
                  <el-menu-item :index="sun.path" :key="sun.path" v-for="sun in child.children">
                    {{sun.name}}
                  </el-menu-item>
                </el-submenu>
                <el-menu-item :index="child.path" :key="child.path" v-else>
                  <i :class="'icon-'+child.meta.icon" class="icon iconfont"></i>
                  <span slot="title">{{child.name}}</span>
                </el-menu-item>
              </template>
            </template>
            <template v-else>
              <el-menu-item :index="child.path" :key="child.path" v-for="child in item.children">
                {{child.name}}
              </el-menu-item>
            </template>
          </el-submenu>
          <el-menu-item :index="item.path" :key="item.path" v-else>
            <i :class="'icon-'+item.meta.icon" class="icon iconfont"></i>
            <span slot="title">{{item.name}}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
  import {routes} from '@/router';

  export default {
    data() {
      return {};
    },
    computed: {
      menu() {
        return routes[0].children;
      },
      closeNavBar() {
        return this.$store.state.closeNavBar;
      }
    }
  };
</script>
