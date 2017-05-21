<template>
  <div class="data-transform-tester">
    <h3>Data Transform Tester</h3>
    <div>
      <div class="transform-selector-container">
        <div class="form-group">
          <label for="tranform-selector">Transformer</label>
          <select id="transform-selector" :v-bind="selectedTransformerIndex" class="form-control" @change="onTransformerChange">
            <option selected disabled>Select a transformer</option>
            <option v-for="(transformer, index) in transformers" :value="index">{{transformer.meta().name }}</option>
          </select>
        </div>
        <div class="inputs-container">
          <EditorObject name="$" :constraints="selectedTransformerInputConstraints" :update="update" :value="input" />
        </div>
        <div>
          <span>Input: {{ JSON.stringify(input) }} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import EditorObject from './editor-object.vue';

export default {
  name: 'data-transformer-tester',
  data () {
    return {
      selectedTransformerIndex: -1,
      input: {}
    };
  },
  computed: {
    ...mapGetters({
      transformers: 'transformers'
    }),
    selectedTransformer () {
      return this.transformers[this.selectedTransformerIndex];
    },
    selectedTransformerInputConstraints () {
      return this.selectedTransformer ? this.selectedTransformer.meta().inputConstraints : null;
    }
  },
  methods: {
    onTransformerChange (event) {
      this.selectedTransformerIndex = event.target.value;
      this.input = {};
    },
    update (value) {
      this.input = { ...value }
    }
  },
  components: {
    EditorObject
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
