<template>
  <div class="form-group row">
    <label class="col-sm-3 col-form-label">Recommendations:</label>
    <div class="col-sm-9">
      <textarea
        class="form-control"
        :value="modelValue"
        @input="updateValue($event.target.value)"
      ></textarea>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      required: true
    }
  },
  methods: {
    updateValue(value) {
      this.$emit('update:modelValue', value);
      this.$emit('update-table');
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
