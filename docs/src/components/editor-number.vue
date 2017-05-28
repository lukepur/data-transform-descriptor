<template>
  <div class="editor-container editor-number">
    <div class="form-group">
      <label>{{ path }}</label>
      <input type="number" :value="value" @change="e=>updatePathWithValue(+e.target.value)"/>
    </div>
  </div>
</template>

<script>
import pathEditor from '../mixins/path-editor';

export default {
  name: 'editor-number',
  mixins: [pathEditor]
}
</script> 
