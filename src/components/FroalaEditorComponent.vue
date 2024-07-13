<template>
  <div id="app">
    <froala id="edit" :tag="'textarea'" :config="config" v-model:value="model"></froala>
  </div>
</template>

<script>
import { template } from './templateHebrew.js';

export default {
  name: 'FroalaEditorComponent',
  props: {
    modelValue: Object
  },
  data() {
    return {
      config: {
        events: {
          initialized: function () {
            console.log('initialized');
          }
        }
      },
      model: ''
    };
  },
  watch: {
    modelValue: {
      immediate: true,
      handler(newVal) {
        this.model = template.replace('{{selectTestSubject}}', newVal.selectTestSubject)
                             .replace('{{selectTestDescription}}', newVal.selectTestDescription)
                             .replace('{{selectTestFinding}}', newVal.selectTestFinding)
                             .replace('{{selectRisksAsAresult}}', newVal.selectRisksAsAresult)
                             .replace('{{SelectSeverityOfTheDamage}}', newVal.SelectSeverityOfTheDamage)
                             .replace('{{selectRiskMaterializationProbability}}', newVal.selectRiskMaterializationProbability)
                             .replace('{{selectRiskLevel}}', newVal.selectRiskLevel)
                             .replace('{{selectRecommendations}}', newVal.selectRecommendations);
      }
    }
  },
  methods: {
    updateModel(value) {
      this.$emit('update:modelValue', value);
    }
  }
};
</script>
