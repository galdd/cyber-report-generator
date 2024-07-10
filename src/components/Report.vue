<template>
  <section id="app">
    <div class="my-container">
      <div class="row mt-4">
        <div class="col-sm-8">
          <form>
            <TestDescriptionSelect
              :testDescription="testDescription"
              :item="item"
              @update:item="item = $event"
              @select="onDescriptionChange"
            />
            <TestFindings
              :modelValue="selectTestFinding"
              @update:modelValue="selectTestFinding = $event"
              @update-table="updateTable"
            />
            <RisksAsAResult
              :modelValue="selectRisksAsAresult"
              @update:modelValue="selectRisksAsAresult = $event"
              @update-table="updateTable"
            />
            <SeverityOfTheDamage
              :options="severityOfTheDamage"
              :modelValue="SelectSeverityOfTheDamage"
              @update:modelValue="SelectSeverityOfTheDamage = $event"
              @update-table="updateTable"
            />
            <RiskMaterializationProbability
              :options="riskMaterializationProbability"
              :modelValue="selectRiskMaterializationProbability"
              @update:modelValue="selectRiskMaterializationProbability = $event"
              @update-table="updateTable"
            />
            <RiskLevel
              :options="riskLevel"
              :modelValue="selectRiskLevel"
              @update:modelValue="selectRiskLevel = $event"
              @update-table="updateTable"
            />
            <Recommendations
              :modelValue="selectRecommendations"
              @update:modelValue="selectRecommendations = $event"
              @update-table="updateTable"
            />
          </form>
        </div>
        <div class="col-sm-4">
          <FormDataDisplay
            :selectTestSubject="selectTestSubject"
            :selectTestDescription="selectTestDescription"
            :selectTestFinding="selectTestFinding"
            :selectRisksAsAresult="selectRisksAsAresult"
            :SelectSeverityOfTheDamage="SelectSeverityOfTheDamage"
            :selectRiskMaterializationProbability="selectRiskMaterializationProbability"
            :selectRiskLevel="selectRiskLevel"
            :selectRecommendations="selectRecommendations"
          />
        </div>
      </div>
      <div id="app">
        <froala id="edit" :tag="'textarea'" v-model="model"></froala>
      </div>
    </div>
  </section>
</template>

<script>
import { dataMixin } from './mixins.js';
import TestDescriptionSelect from './TestDescriptionSelect.vue';
import TestFindings from './TestFindings.vue';
import RisksAsAResult from './RisksAsAResult.vue';
import SeverityOfTheDamage from './SeverityOfTheDamage.vue';
import RiskMaterializationProbability from './RiskMaterializationProbability.vue';
import RiskLevel from './RiskLevel.vue';
import Recommendations from './Recommendations.vue';
import FormDataDisplay from './FormDataDisplay.vue';

export default {
  components: {
    TestDescriptionSelect,
    TestFindings,
    RisksAsAResult,
    SeverityOfTheDamage,
    RiskMaterializationProbability,
    RiskLevel,
    Recommendations,
    FormDataDisplay,
  },
  mixins: [dataMixin],
  methods: {
    onDescriptionChange(selectedItem) {
      if (selectedItem) {
        this.selectTestDescription = selectedItem.childrenName + " (" + selectedItem.selectId + ")";
        this.selectTestSubject = selectedItem.name;
        this.item = selectedItem;
        this.selectRecommendations = [];
        let testDescriptionId = selectedItem.childrenId;
        let testSubjectId = selectedItem.fatherId;
        let x = this.jsonRemediation.find(k => k.id == testSubjectId);
        let y = x.children.find(k => k.id == testDescriptionId);
        if (y) {
          if (y.remediation_advice) {
            this.selectRecommendations = y.remediation_advice;
          } else {
            let z = y.children.find(k => k.id == selectedItem.selectId);
            if (z.remediation_advice) {
              this.selectRecommendations = z.remediation_advice;
            }
          }
        } else {
          this.selectRecommendations = x.remediation_advice;
        }
        this.updateTable();
      }
    }
  }
};
</script>

<style scoped src="./Report.css"></style>
