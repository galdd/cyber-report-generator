<template>
  <div id="app">
    <froala id="edit" :tag="'textarea'" :config="config" v-model="model"></froala>
  </div>
</template>

<script>
import VueFroala from 'vue-froala-wysiwyg';

export default {
  name: 'app',
  data () {
    return {
      config: {
        events: {
          initialized: function () {
            console.log('initialized')
          }
        }
      },
      model: 'Edit Your Content Here!'
    }
  }
}
</script>