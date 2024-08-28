<script setup>
import { reactive, computed } from "vue";
import { currencies } from "@/data/data";
import ConverterInput from "./ui/converter-input.vue";
import { useInputStore } from "@/store/InputStore";
import { storeToRefs } from "pinia";

const { from, to, typeFrom, typeTo, id } = storeToRefs(useInputStore());

const props = defineProps({
  calc: Function
})

const rates = reactive({});
currencies.forEach((el) => {
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

const date = computed(() => {
  const date = new Date();
  return `${date.toLocaleDateString()}`;
});
const time = computed(() => {
  const date = new Date();
  if (date.getMinutes() < 10) {
    return `${date.getHours()}:0${date.getMinutes()}`;
  } else {
    return `${date.getHours()}:${date.getMinutes()}`;
  }
});
const exchange = computed(() => {
  return `1 ${typeFrom.value} = ${
    (1 * rates[typeTo.value]) / rates[typeFrom.value]
  } ${typeTo.value}`;
});
</script>

<template>
  <ConverterInput
    :convert-data="currencies"
    :convert-data-item="'cur'"
    :convert-type="'currencies'"
    :calc="calculate"
    @mount="
      (e) => {
        (typeFrom = e[0]), (typeTo = e[1]), calculate();
      }
    "
  />
  <span class="current-prise">На {{ date }} {{ time }} {{ exchange }}</span>
</template>

<style scoped></style>
