<template>
  <div>
    <el-row :gutter="8">
      <el-col :lg="{span: 12}" :md="{span: 12}" :sm="{span: 24}" :xl="{span: 12}" :xs="{span: 24}">
        <line-demo/>
      </el-col>
      <el-col :lg="{span: 12}" :md="{span: 12}" :sm="{span: 24}" :xl="{span: 12}" :xs="{span: 24}">
        <pie/>
      </el-col>
    </el-row>
    <el-row :gutter="8">
      <el-col :lg="{span: 12}" :md="{span: 12}" :sm="{span: 24}" :xl="{span: 12}" :xs="{span: 24}">
        <scatter/>
      </el-col>
      <el-col :lg="{span: 12}" :md="{span: 12}" :sm="{span: 24}" :xl="{span: 12}" :xs="{span: 24}">
        <map-demo/>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import LineDemo from './line';
  import MapDemo from './map';
  import Pie from './pie';
  import Scatter from './scatter';

  export default {
    components: {
      LineDemo, MapDemo, Pie, Scatter
    }
  };
</script>
