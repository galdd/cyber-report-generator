import axios from 'axios';
import template from './template.json';

export const dataMixin = {
  data() {
    return {
      jsonVulnerability: {},
      jsonRemediation: {},
      testDescription: [],
      testFinding: "",
      risksAsAresult: "",
      severityOfTheDamage: ["low", "medium", "high", "critical"],
      riskMaterializationProbability: ["low", "medium", "high", "critical"],
      riskLevel: ["low", "medium", "high", "critical"],
      recommendations: [],
      selectTestSubject: "",
      selectTestDescription: "",
      selectTestFinding: "",
      selectRisksAsAresult: "",
      SelectSeverityOfTheDamage: "",
      selectRiskMaterializationProbability: "",
      selectRiskLevel: "",
      selectRecommendations: "",
      item: { id: "", name: "" },
      model: "" // Add model to data
    };
  },
  created() {
    this.fetchData();
    this.model = template.template; // Initialize model with template content
  },
  methods: {
    fetchData() {
      const urlRemediation = "https://raw.githubusercontent.com/bugcrowd/vulnerability-rating-taxonomy/master/mappings/remediation_advice/remediation_advice.json";
      const urlVulnerability = "https://raw.githubusercontent.com/bugcrowd/vulnerability-rating-taxonomy/master/vulnerability-rating-taxonomy.json";
      
      axios.get(urlVulnerability).then(response => {
        this.jsonVulnerability = response.data.content;
        this.processVulnerabilityData();
      });
      
      axios.get(urlRemediation).then(response => {
        this.jsonRemediation = response.data.content;
      });
    },
    processVulnerabilityData() {
      for (let obj of this.jsonVulnerability) {
        if (obj.children) {
          for (let children of obj.children) {
            if (!children.children) {
              this.testDescription.push({
                id: obj.id + "-" + children.id,
                fatherId: obj.id,
                name: obj.name,
                childrenId: children.id,
                selectId: children.id,
                childrenName: children.name,
                fullName: children.name + ` | ${obj.name}`,
              });
            } else {
              for (let grandchildren of children.children) {
                this.testDescription.push({
                  id: obj.id + "_" + children.id,
                  fatherId: obj.id,
                  name: obj.name,
                  childrenId: children.id,
                  childrenName: children.name,
                  selectId: grandchildren.id,
                  fullName: children.name + `(${grandchildren.name}) | ${obj.name}`,
                });
              }
            }
          }
        }
      }
    },
    onDescriptionChange(event) {
      this.selectTestDescription = event.childrenName + " (" + event.selectId + ")";
      this.selectTestSubject = event.name;
      this.item = event;
      this.selectRecommendations = [];
      let testDescriptionId = event.childrenId;
      let testSubjectId = event.fatherId;
      let x = this.jsonRemediation.find(k => k.id == testSubjectId);
      let y = x.children.find(k => k.id == testDescriptionId);
      if (y) {
        if (y.remediation_advice) {
          this.selectRecommendations = y.remediation_advice;
        } else {
          let z = y.children.find(k => k.id == event.selectId);
          if (z.remediation_advice) {
            this.selectRecommendations = z.remediation_advice;
          }
        }
      } else {
        this.selectRecommendations = x.remediation_advice;
      }
      this.updateTable();
    },
    updateTable() {
      this.model = template.template;
    },
  }
};
