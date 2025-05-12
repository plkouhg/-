import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

export const useProjectStore = defineStore('project', () => {
  // ========= 需求分析相关 =========
  const requirementText = ref('')      // 用户输入文本
  const result = ref(null)             // 分析结果
  const requirements = reactive({})    // 结构化分析对象

  const setText = (text) => {
    requirementText.value = text
  }

  const setResult = (data) => {
    result.value = data
  }

  const setRequirements = (data) => {
    Object.assign(requirements, data)
  }

  // ========= 任务与代码 =========
  const tasks = ref([])

  const setTasks = (newTasks) => {
    tasks.value = newTasks
  }

  const generatedCode = reactive({})

  const addGeneratedCode = (taskId, code) => {
    generatedCode[taskId] = code
  }

  // ========= 汇总代码与测试 =========
  const summaryCode = ref(null)
  const testResults = ref([])

  const setSummaryCode = (code) => {
    summaryCode.value = code
  }

  const addTestResult = (result) => {
    testResults.value.push(result)
  }

  const clearTestResults = () => {
    testResults.value = []
  }

  return {
    // 状态
    requirementText,
    result,
    requirements,
    tasks,
    generatedCode,
    summaryCode,
    testResults,

    // 方法
    setText,
    setResult,
    setRequirements,
    setTasks,
    addGeneratedCode,
    setSummaryCode,
    addTestResult,
    clearTestResults
  }
}, {
  persist: true
})
