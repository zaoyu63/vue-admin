<template>
  <div>
    <el-row :gutter="8">
      <el-col :lg="{span: 12}" :md="{span: 12}" :sm="{span: 24}" :xl="{span: 12}" :xs="{span: 24}">
        <bar-demo/>
      </el-col>
      <el-col :lg="{span: 12}" :md="{span: 12}" :sm="{span: 24}" :xl="{span: 12}" :xs="{span: 24}">
        <pie/>
      </el-col>
    </el-row>
    <el-row :gutter="8">
      <el-col :lg="{span: 12}" :md="{span: 12}" :sm="{span: 24}" :xl="{span: 12}" :xs="{span: 24}">
        <line-demo/>
      </el-col>
      <el-col :lg="{span: 12}" :md="{span: 12}" :sm="{span: 24}" :xl="{span: 12}" :xs="{span: 24}">
        <line-fill/>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import BarDemo from './bar';
  import LineDemo from './line';
  import Pie from './pie';
  import LineFill from './line-fill';

  export default {
    components: {
      BarDemo, Pie, LineDemo, LineFill
    }
  };
</script>
