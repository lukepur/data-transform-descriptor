<template>
  <div class="editor-container editor-string">
    <div class="form-group">
      <label>{{ path }}</label>
      <input type="text" :value="value" @change="updatePath"/>
    </div>
  </div>
</template>

<script>
import pathEditor from '../mixins/path-editor';

export default {
  name: 'editor-string',
  mixins: [pathEditor]
}
</script> 
