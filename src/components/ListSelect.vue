<template>
    <div class="list-select">
      <select class="form-control" v-model="selectedItem" @change="handleSelect">
        <option v-for="item in list" :key="item[optionValue]" :value="item">
          {{ item[optionText] }}
        </option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ListSelect',
    props: {
      list: {
        type: Array,
        required: true
      },
      optionValue: {
        type: String,
        required: true
      },
      optionText: {
        type: String,
        required: true
      },
      selectedItem: {
        type: Object,
        default: null
      }
    },
    data() {
      return {
        selectedItem: this.selectedItem
      };
    },
    watch: {
      selectedItem(newVal) {
        this.$emit('select', newVal);
      }
    },
    methods: {
      handleSelect(event) {
        this.selectedItem = event.target.value;
        this.$emit('select', this.selectedItem);
      }
    }
  };
  </script>
  
  <style scoped>
  .list-select {
    width: 100%;
  }
  </style>
  