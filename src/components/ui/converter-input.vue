<script setup>
import { onMounted } from "vue";
import { useInputStore } from "@/store/InputStore";
import { storeToRefs } from "pinia";

const emit = defineEmits(["mount"]);
const props = defineProps({
  convertType: String,
  convertData: Array,
  convertDataItem: String,
  calc: Function
});

const { from, to, typeFrom, typeTo, id } = storeToRefs(useInputStore());

onMounted(() => {
  typeFrom.value = document.querySelector(`#${props.convertType}-from`).value;
  typeTo.value = document.querySelector(`#${props.convertType}-to`).value;
  submit();
});

function submit() {
  emit("mount", [typeFrom.value, typeTo.value]);
}
</script>

<template>
  <div class="converter">
    <div class="select">
      <div>
        <h1>Из</h1>
        <label :for="`${convertType}-from`" class="underline">
          <select
            :name="`${convertType}`"
            :id="`${convertType}-from`"
            @change="
              typeFrom = $event.target.value;
              submit();
            "
          >
            <option
              v-for="convertDataItem in convertData"
              :value="convertDataItem.abbr"
              :key="convertDataItem.abbr"
            >
              {{ convertDataItem.name }}
            </option>
          </select>
        </label>
      </div>

      <div>
        <h1>В</h1>
        <label :for="`${convertType}-to`" class="underline">
          <select
            :name="`${convertType}`"
            :id="`${convertType}-to`"
            @change="
              typeTo = $event.target.value;
              submit();
            "
          >
            <option
              v-for="convertDataItem in convertData"
              :value="convertDataItem.abbr"
              :key="convertDataItem.abbr"
            >
              {{ convertDataItem.name }}
            </option>
          </select>
        </label>
      </div>
    </div>
    <div class="equality">
      <input type="number" id="from" v-model="from" @input="(e)=>{ id = e.target.getAttribute('id'); calc() }"/>
      <span>=</span>
      <input type="number" id="to" v-model="to" @input="(e)=>{ id = e.target.getAttribute('id'); calc() }"/>
    </div>
  </div>
</template>
