<template>
  <div class="editor-container editor-array">
    <h5>{{ path }}</h5>
    <div class="array-items">
      <div v-for="(item, index) in items" class="array-item">
        <component :is="constraints.children.type+'Editor'" :path="childPath(index)" :constraints="constraints.children" :data="data" :update="update"/>
      </div>
    </div>
    <div class="add-item-container">
      <button @click="addItem">Add</button>
    </div>
  </div>
</template>

<script>
import numberEditor from './editor-number.vue';
import stringEditor from './editor-string.vue';
import arrayEditor from './editor-array.vue';
import objectEditor from './editor-object.vue';
import pathEditor from '../mixins/path-editor';

export default {
  name: 'editor-array',
  mixins: [pathEditor],
  props: {
    constraints: Object
  },
  computed: {
    items () {
      return this.value || [];
    }
  },
  methods: {
    addItem () {
      this.items.push('');
      this.updatePathWithValue(this.items);
    }
  },
  components: {
    numberEditor,
    stringEditor,
    arrayEditor,
    objectEditor
  }
};
</script> 
