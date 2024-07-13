<template>
  <div v-html="compiledTemplate"></div>
</template>

<script>
export default {
  props: {
    selectTestSubject: String,
    selectTestDescription: String,
    selectTestFinding: String,
    selectRisksAsAresult: String,
    SelectSeverityOfTheDamage: String,
    selectRiskMaterializationProbability: String,
    selectRiskLevel: String,
    selectRecommendations: String
  },
  data() {
    return {
      templateHTML: ''
    };
  },
  computed: {
    compiledTemplate() {
      let template = this.templateHTML;
      template = template.replace('${this.selectTestSubject}', this.selectTestSubject || '');
      template = template.replace('${this.selectTestDescription}', this.selectTestDescription || '');
      template = template.replace('${this.selectTestFinding}', this.selectTestFinding || '');
      template = template.replace('${this.selectRisksAsAresult}', this.selectRisksAsAresult || '');
      template = template.replace('${this.SelectSeverityOfTheDamage}', this.SelectSeverityOfTheDamage || '');
      template = template.replace('${this.selectRiskMaterializationProbability}', this.selectRiskMaterializationProbability || '');
      template = template.replace('${this.selectRiskLevel}', this.selectRiskLevel || '');
      template = template.replace('${this.selectRecommendations}', this.selectRecommendations || '');
      console.log(template);
      return template;
    }
  },
  created() {
    fetch('path/to/template.html')
      .then(response => response.text())
      .then(templateHTML => {
        this.templateHTML = templateHTML;
      });
  }
};
</script>
