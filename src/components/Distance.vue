<script setup>
import { reactive } from "vue";
import { distances } from "@/data/data";
import ConverterInput from "./ui/converter-input.vue";
import { storeToRefs } from "pinia";
import { useInputStore } from "@/store/InputStore";

const { from, to, typeFrom, typeTo, id} = storeToRefs(useInputStore())

let rates = reactive({});
distances.forEach((el) => {
  rates[el.abbr] = el.value;
});

function calculate() {
  if (from.value === "") {
    from.value = 0;
  }
  if (to.value === "") {
    to.value = 0;
  }

  if (id.value === "to") {
    from.value = (to.value * rates[typeFrom.value]) / rates[typeTo.value];
  } else {
    to.value = (from.value * rates[typeTo.value]) / rates[typeFrom.value];
  }
}
</script>

<template>
  <converter-input
    :convert-data="distances"
    :convert-data-item="'dis'"
    :convert-type="'distances'"
    :calc="calculate"
    @mount="
      (e) => {
        (typeFrom = e[0]), (typeTo = e[1]), calculate();
      }
    "
  />
</template>
