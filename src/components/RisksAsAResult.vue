<template>
  <div class="form-group row">
    <label class="col-sm-3 col-form-label">Risks as a result of the existing situation :</label>
    <div class="col-sm-9">
      <textarea
        type="text"
        class="form-control"
        v-bind="$attrs"
        v-on:input="$emit('input', $event.target.value)"
      ></textarea>
    </div>
  </div>
</template>
