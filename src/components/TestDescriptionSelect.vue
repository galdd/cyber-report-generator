<template>
  <div class="form-group row">
    <label class="col-sm-3 col-form-label">Test description:</label>
    <div class="col-sm-9">
      <select class="form-control" :value="selectedItem" @change="onDescriptionChange($event.target.value)">
        <option v-for="item in testDescription" :value="item.selectId" :key="item.selectId">
          {{ item.fullName }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    testDescription: {
      type: Array,
      required: true
    },
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      selectedItem: this.item.selectId
    };
  },
  methods: {
    onDescriptionChange(value) {
      const selectedItem = this.testDescription.find(item => item.selectId === value);
      this.$emit('update:item', selectedItem);
      this.$emit('select', selectedItem);
    }
  },
  watch: {
    item(newVal) {
      this.selectedItem = newVal.selectId;
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
