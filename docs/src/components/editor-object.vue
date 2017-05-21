<template>
  <div class="editor-container editor-object">
    <h5>{{ name }}</h5>
    <div class="object-items">
      <div v-for="(item, key) in constraints" class="object-item">
        <component :is="item.dataType+'Editor'" :name="key" :constraints="item" :value="value[key]" :update="updateFnFor(key)"/>
      </div>
    </div>
  </div>
</template>

<script>
import numberEditor from './editor-number.vue';

export default {
  name: 'editor-object',
  props: {
    name: String,
    constraints: Object,
    value: Object,
    update: Function
  },
  methods: {
    updateFnFor (prop) {
      return value => {
        this.update({
          ...this.value,
          [prop]: value
        });
      };
    }
  },
  components: {
    numberEditor
  }
}
</script> 
