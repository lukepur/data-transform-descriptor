<template>
  <div class="editor-container editor-number">
    <div class="form-group">
      <label>{{ name }}</label>
      <input type="number" :value="value" @change="e=>update(e.target.value)"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'editor-number',
  props: {
    name: String,
    constraints: Object,
    value: [Number, String],
    update: Function
  }
}
</script> 
