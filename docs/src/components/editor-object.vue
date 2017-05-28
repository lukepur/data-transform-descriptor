<template>
  <div class="editor-container editor-object">
    <h5>{{ path }}</h5>
    <div class="object-items">
      <div v-for="(item, key) in constraints.children" class="object-item">
        <component :is="item.type+'Editor'" :path="`${path}.${item.id}`" :constraints="item" :data="data" :update="update"/>
      </div>
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
  name: 'editor-object',
  mixins: [pathEditor],
  props: {
    constraints: Object
  },
  components: {
    numberEditor,
    stringEditor,
    arrayEditor,
    objectEditor
  }
}
</script> 
