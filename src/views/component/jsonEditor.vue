<template>
  <div class="components-container">
    <code>JsonEditor is base on <a href="https://github.com/codemirror/CodeMirror" target="_blank">CodeMirrorr</a> ,
      lint base on json-lint </code>
    <div class="editor-container">
      <json-editor ref="jsonEditor" v-model="value"/>
    </div>
  </div>
</template>

<script>
  import JsonEditor from '@/components/JsonEditor';

  import {routes} from '@/router';

  export default {
    name: 'JsonEditorDemo',
    components: {JsonEditor},
    data() {
      return {
        value: routes
      };
    }
  };
</script>

<style scoped>
  .editor-container {
    position: relative;
    height: 100%;
  }
</style>

