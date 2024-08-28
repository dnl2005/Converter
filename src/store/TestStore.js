import { defineStore } from 'pinia';
import data from "@/data/data.json"
import { reactive } from 'vue';

export const useTestStore = defineStore('TestStore', () => {
  const resp = reactive(data)
  return {
    resp
  }
});
