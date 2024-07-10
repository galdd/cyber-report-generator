<template>
  <div class="card">
    <div class="card-header">
      <h5>Form Data</h5>
    </div>
    <div class="card-body" style="padding: 0 1.25rem;">
      <ul class="list-unstyled mb-0">
        <li class="py-1">
          <b>TestSubject:</b> {{ selectTestSubject }}
        </li>
        <br />
        <li class="py-1">
          <b>testDescription:</b> {{ selectTestDescription }}
        </li>
        <br />
        <li class="py-1">
          <b>TestFinding:</b> {{ selectTestFinding }}
        </li>
        <br />
        <li class="py-1">
          <b>RisksAsAresult:</b> {{ selectRisksAsAresult }}
        </li>
        <br />
        <li class="py-1">
          <b>SeverityOfTheDamage:</b> {{ SelectSeverityOfTheDamage }}
        </li>
        <br />
        <li class="py-1">
          <b>RiskMaterializationProbability:</b> {{ selectRiskMaterializationProbability }}
        </li>
        <br />
        <li class="py-1">
          <b>RiskLevel:</b> {{ selectRiskLevel }}
        </li>
        <br />
        <li class="py-1">
          <b>Recommendations:</b>
          <pre style="font-size:10px;height:180px;white-space: pre-wrap;">{{ selectRecommendations }}</pre>
        </li>
        <br />
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'selectTestSubject',
    'selectTestDescription',
    'selectTestFinding',
    'selectRisksAsAresult',
    'SelectSeverityOfTheDamage',
    'selectRiskMaterializationProbability',
    'selectRiskLevel',
    'selectRecommendations'
  ]
};
</script>
