<template>
  <el-row :gutter="40" class="panel-group">
    <el-col :lg="6" :sm="12" :xs="12" class="card-panel-col">
      <div @click="handleSetLineChartData('newVisitis')" class="card-panel">
        <div class="card-panel-icon-wrapper icon-people">
          <i class="iconfont icon-persiones card-panel-icon"></i>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">New Visits</div>
          <count-to :duration="2600" :end-val="204800" :start-val="0" class="card-panel-num"/>
        </div>
      </div>
    </el-col>
    <el-col :lg="6" :sm="12" :xs="12" class="card-panel-col">
      <div @click="handleSetLineChartData('messages')" class="card-panel">
        <div class="card-panel-icon-wrapper icon-message-part">
          <i class="iconfont icon-message card-panel-icon"></i>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">Messages</div>
          <count-to :duration="3000" :end-val="305600" :start-val="0" class="card-panel-num"/>
        </div>
      </div>
    </el-col>
    <el-col :lg="6" :sm="12" :xs="12" class="card-panel-col">
      <div @click="handleSetLineChartData('purchases')" class="card-panel">
        <div class="card-panel-icon-wrapper icon-money">
          <i class="iconfont icon-price card-panel-icon"></i>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">Purchases</div>
          <count-to :duration="3200" :end-val="8888" :start-val="0" class="card-panel-num"/>
        </div>
      </div>
    </el-col>
    <el-col :lg="6" :sm="12" :xs="12" class="card-panel-col">
      <div @click="handleSetLineChartData('shoppings')" class="card-panel">
        <div class="card-panel-icon-wrapper icon-shopping-cart">
          <i class="iconfont icon-shopping card-panel-icon"></i>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">Shoppings</div>
          <count-to :duration="3600" :end-val="6800" :start-val="0" class="card-panel-num"/>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  import CountTo from 'vue-count-to';

  export default {
    components: {
      CountTo
    },
    methods: {
      handleSetLineChartData(type) {
        this.$emit('handleSetLineChartData', type);
      }
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .panel-group {
    margin-top: 18px;

    .card-panel-col {
      margin-bottom: 32px;
    }

    .card-panel {
      height: 108px;
      cursor: pointer;
      font-size: 12px;
      position: relative;
      overflow: hidden;
      color: #666;
      background: #fff;
      box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
      border-color: rgba(0, 0, 0, .05);

      &:hover {
        .card-panel-icon-wrapper {
          color: #fff;
        }

        .icon-people {
          background: #40c9c6;
        }

        .icon-message-part {
          background: #36a3f7;
        }

        .icon-money {
          background: #f4516c;
        }

        .icon-shopping-cart {
          background: #34bfa3
        }
      }

      .icon-people {
        color: #40c9c6;
      }

      .icon-message-part {
        color: #36a3f7;
      }

      .icon-money {
        color: #f4516c;
      }

      .icon-shopping-cart {
        color: #34bfa3
      }

      .card-panel-icon-wrapper {
        float: left;
        margin: 14px 0 0 14px;
        padding: 16px;
        transition: all 0.38s ease-out;
        border-radius: 6px;
      }

      .card-panel-icon {
        float: left;
        font-size: 48px;
      }

      .card-panel-description {
        float: right;
        font-weight: bold;
        margin: 26px;
        margin-left: 0px;

        .card-panel-text {
          line-height: 18px;
          color: rgba(0, 0, 0, 0.45);
          font-size: 16px;
          margin-bottom: 12px;
        }

        .card-panel-num {
          font-size: 20px;
        }
      }
    }
  }
</style>
