<template>
    <div class="form-group row">
      <label :class="labelClass">{{ label }} :</label>
      <div class="col-sm-9">
        <select type="text" class="form-control" v-model="model" @change="updateTable">
          <option v-for="option in options" :value="option" :key="option">{{ option }}</option>
        </select>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      label: {
        type: String,
        required: true
      },
      model: {
        type: String,
        required: true
      },
      updateTable: {
        type: Function,
        required: true
      },
      options: {
        type: Array,
        required: true
      },
      labelClass: {
        type: String,
        default: 'col-sm-3 col-form-label'
      }
    }
  };
  </script>
  