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
          <ConstraintView path="$" :data="input" :constraintDescriptor="selectedTransformerInputConstraints" :update="update" />
        </div>
        <ul>
          <li v-for="message in inputErrors">{{ message.target }}: {{ message.message }}</li>
        </ul>
        <h2 v-if="result !== null">Result {{ result }}</h2>
        <div>
          <span>Input: {{ JSON.stringify(input) }} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { set } from 'lodash';
import { mapGetters } from 'vuex';
import ConstraintView from './constraint-view.vue';

export default {
  name: 'data-transformer-tester',
  data () {
    return {
      selectedTransformerIndex: -1,
      input: {},
      inputErrors: [],
      result: null
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
      this.inputErrors = [];
      this.result = null;
    },
    update (path, value) {
      set(this.input, path.replace(/^\$\./, ''), value);
      // invoke reactivity:
      this.input = { ...this.input };
      const validationErrors = this.selectedTransformer.validateInput(this.input);
      if (validationErrors) {
        const { inputErrors } = validationErrors;
        if (inputErrors) this.inputErrors = [...inputErrors];
        this.result = null;
      } else {
        this.result = this.selectedTransformer.run(this.input);
        this.inputErrors = [];
      }
    }
  },
  components: {
    ConstraintView
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
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
