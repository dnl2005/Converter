<script setup>
import { temperatures } from "@/data/data";
import ConverterInput from "./ui/converter-input.vue";
import { useInputStore } from "@/store/InputStore";
import { storeToRefs } from "pinia";

const { from, to, typeFrom, typeTo, id } = storeToRefs(useInputStore());

function calculate() {
  if (from.value === "") {
    from.value = 0;
  }
  if (to.value === "") {
    to.value = 0;
  }

  if (typeFrom.value === typeTo.value) {
    if (id.value === "to") {
      from.value = to.value;
    } else {
      to.value = from.value;
    }
  } else if (typeFrom.value === "CEL" && typeTo.value === "FAR") {
    if (id.value === "to") {
      from.value = (to.value - 32) / 1.8;
    } else {
      to.value = from.value * 1.8 + 32;
    }
  } else if (typeFrom.value === "CEL" && typeTo.value === "KEL") {
    if (id.value === "to") {
      from.value = to.value - 273.15;
    } else {
      to.value = from.value + 273.15;
    }
  } else if (typeFrom.value === "FAR" && typeTo.value === "CEL") {
    if (id.value === "to") {
      from.value = to.value * 1.8 + 32;
    } else {
      to.value = (from.value - 32) / 1.8;
    }
  } else if (typeFrom.value === "FAR" && typeTo.value === "KEL") {
    if (id.value === "to") {
      from.value = to.value * 1.8 - 459.67;
    } else {
      to.value = (from.value + 459.67) / 1.8;
    }
  } else if (typeFrom.value === "KEL" && typeTo.value === "CEL") {
    if (id.value === "to") {
      from.value = to.value + 273.15;
    } else {
      to.value = from.value - 273.15;
    }
  } else if (typeFrom.value === "KEL" && typeTo.value === "FAR") {
    if (id.value === "to") {
      from.value = (to.value + 459.67) / 1.8;
    } else {
      to.value = from.value * 1.8 - 459.67;
    }
  }
}
</script>

<template>
  <ConverterInput
    :convert-data="temperatures"
    :convert-data-item="'temp'"
    :convert-type="'temperature'"
    :calc="calculate"
    @mount="
      (e) => {
        (typeFrom = e[0]), (typeTo = e[1]), calculate();
      }
    "
  />
</template>

<style></style>
