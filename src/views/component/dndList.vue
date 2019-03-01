<template>
  <div class="components-container">
    <code>drag-list base on
      <a href="https://github.com/SortableJS/Vue.Draggable" target="_blank">Vue.Draggable</a>
    </code>
    <div class="editor-container">
      <dnd-list :list1="list1" :list2="list2" list1-title="List" list2-title="Article pool"/>
    </div>
  </div>
</template>

<script>
  import DndList from '@/components/DndList';

  export default {
    name: 'DndListDemo',
    components: {DndList},
    data() {
      return {
        list1: [
          {id: '0', author: 'tw1', title: '测试1'},
          {id: '1', author: 'tw2', title: '测试2'},
          {id: '2', author: 'tw3', title: '测试3'},
          {id: '3', author: 'tw4', title: '测试4'}
        ],
        list2: [
          {id: '0', author: 'tw1', title: '测试1'},
          {id: '1', author: 'tw2', title: '测试2'},
          {id: '2', author: 'tw3', title: '测试3'},
          {id: '3', author: 'tw4', title: '测试4'},
          {id: '4', author: 'tw5', title: '测试5'},
          {id: '5', author: 'tw6', title: '测试6'},
          {id: '6', author: 'tw7', title: '测试7'},
          {id: '7', author: 'tw8', title: '测试8'},
          {id: '8', author: 'tw9', title: '测试9'},
          {id: '9', author: 'tw10', title: '测试10'},
          {id: '10', author: 'tw11', title: '测试11'},
          {id: '11', author: 'tw12', title: '测试12'},
        ]
      };
    }
  };
</script>

