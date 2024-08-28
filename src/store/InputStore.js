import { defineStore } from "pinia";
import { ref } from "vue";

export const useInputStore = defineStore("InputStore", () => {
  const from = ref(0);
  const to = ref(0);
  const typeFrom = ref("")
  const typeTo = ref("")
  const id = ref("")

  return { from, to, typeFrom, typeTo, id };
});
