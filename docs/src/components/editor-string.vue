<template>
  <div class="editor-container editor-string">
    <div class="form-group">
      <label>{{ name }}</label>
      <input type="text" :value="value" @change="e=>update(e.target.value)"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'editor-string',
  props: {
    name: String,
    value: String,
    update: Function
  }
}
</script> 
