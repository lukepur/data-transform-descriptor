import { get } from 'lodash';

export default {
  props: {
    path: String,
    data: Object,
    update: Function
  },
  methods: {
    updatePath (event) {
      this.updatePathWithValue(event.target.value);
    },
    updatePathWithValue (value) {
      this.update(this.path, value);
    },
    childPath (name) {
      return `${this.path}.${name}`;
    }
  },
  computed: {
    value () {
      return get(this.data, this.path.replace(/^\$\./, ''));
    }
  }
};
