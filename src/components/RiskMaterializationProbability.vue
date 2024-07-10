<template>
  <div class="form-group row">
    <label class="col-sm-3 col-form-label">Risk materialization probability :</label>
    <div class="col-sm-9">
      <select class="form-control" :value="modelValue" @change="updateValue($event.target.value)">
        <option v-for="option in options" :value="option" :key="option">{{ option }}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: Array,
    modelValue: String,
  },
  methods: {
    updateValue(value) {
      this.$emit('update:modelValue', value);
      this.$emit('update-table');
    },
  },
};
</script>
