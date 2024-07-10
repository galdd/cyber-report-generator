<template>
  <div class="form-group row">
    <label class="col-sm-3 col-form-label">Language :</label>
    <div class="col-sm-9">
      <select
        type="text"
        class="form-control"
        v-bind="$attrs"
        v-on:change="$emit('change', $event.target.value)"
      >
        <option v-for="lang in languages" :value="lang" :key="lang">{{ lang }}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    languages: Array,
  },
};
</script>
