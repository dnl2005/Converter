<script setup>
import { onMounted, ref } from "vue";
import Temperature from "./components/Temperature.vue";
import Currency from "./components/Currency.vue";
import Distance from "./components/Distance.vue";

//
import { useTestStore } from "@/store/TestStore";
import { storeToRefs } from "pinia";
// const { resp } = storeToRefs(useTestStore())
const store = useTestStore();
//

let from = ref(0);

let type = ref("");
onMounted(() => {
  type.value = document.querySelector("#type").value;
});
</script>

<template>
  <div class="content">
    <span class="title">Сконвертируем всё, что нужно</span>
    <div class="container">
      <div>
        <label for="type">
          <select
            name=""
            id="type"
            @change="
              type = $event.target.value;
              from = 0;
            "
          >
            <option value="temp">Температура</option>
            <option value="cur">Валюта</option>
            <option value="dist">Расстояние</option>
          </select>
        </label>
      </div>

      <Temperature v-if="type === 'temp'" />
      <Currency v-else-if="type === 'cur'" />
      <Distance v-else-if="type === 'dist'" />
    </div>
  </div>
</template>

<style>
.title {
  position: absolute;
  top: 75px;
  font-size: 1.5rem;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.container {
  margin-top: -100px;
  background-color: rgba(72, 72, 72, 1);
  padding: 70px 140px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  max-width: 900px;
  width: 100%;
}

.current-prise {
  text-align: center;
  color: rgba(255, 255, 255, 0.65);
}

select {
  background: none;
  appearance: none;
  outline: none;
  border: none;
  padding: 0 25px 0 10px;
  color: white;
  font-size: 1rem;
}

select * {
  background: var(--main);
  padding: 10px;
}

label {
  background: url("data:image/svg+xml;utf8,<svg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>")
    no-repeat;
  background-position: calc(100%);
  display: inline-block;
}

.underline {
  border-bottom: 2px solid white;
}

.converter {
  padding: 0 100px;
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.select {
  display: flex;
  justify-content: center;
  gap: 100px;
}

.select div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.equality {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.equality span {
  font-size: 3rem;
}

.equality input {
  height: 100%;
  width: 100%;
  background: none;
  border: none;
  outline: none;
  color: white;
  font-size: 2rem;
  appearance: none;
  border-bottom: 2px solid white;
}

.equality input:focus {
  font-weight: bold;
}

.equality input::-webkit-inner-spin-button {
  appearance: none;
  margin: 0;
}
</style>
