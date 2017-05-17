import transformers from './transformers';

const getters = {
  transformers: (state) => {
    return state.transformers;
  }
};

export default {
  modules: {
    transformers
  },
  getters
};
