<template>
  <div class="constraint-view">
    <div class="constraint-item" v-if="constraintIsArray" v-for="constraintItem in constraintDescriptor">
      <component
        :is="constraintItem.type+'Editor'"
        :update="update"
        :data="data"
        :path="`${path}.${constraintItem.id}`"
        :constraints="constraintItem" />
    </div>
    <div class="constraint-item" v-if="constraintIsObject">
      {{ JSON.stringify(constraintDescriptor) }}
      <component
        :is="constraintDescriptor.type+'Editor'"
        :update="update"
        :data="data"
        :path="`${path}`"
        :constraints="constraintDescriptor" />
    </div>
  </div>
</template>

<script>
import arrayEditor from './editor-array.vue';
import numberEditor from './editor-number.vue';
import objectEditor from './editor-object.vue';
import stringEditor from './editor-string.vue';

export default {
  name: 'constraint-view',
  props: {
    constraintDescriptor: [Object, Array],
    data: Object,
    path: String,
    update: Function
  },
  computed: {
    constraintIsArray () {
      return Array.isArray(this.constraintDescriptor);
    },
    constraintIsObject () {
      return typeof !Array.isArray(this.constraintDescriptor) &&
             this.constraintDescriptor === 'object' &&
             this.constraintDescriptor !== null;
    }
  },
  components: {
    arrayEditor,
    numberEditor,
    objectEditor,
    stringEditor
  }
}

</script>
