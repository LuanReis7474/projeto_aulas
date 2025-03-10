<template>
  <ul class="menu">
    <li class="item-accordion">
      <div class="title-accordion">

        <div class="text" @click="openAccordion()">
          <h3 class="text-1">{{ discipline?.index + 1 }} - {{ discipline?.datas?.nome }}</h3>
          <h3 class="infos-accordion">
            <span class="aulas">
              Aulas: {{ discipline?.datas?.aulas?.quantidade }} | {{ discipline?.datas?.aulas?.tempo }}
            </span>
            <span class="exercicios">
              Exercícios: {{ discipline?.datas?.exercicios?.quantidade }} | {{ discipline?.datas?.exercicios?.tempo }}
            </span>
            <span class="materias">
              Matérias: {{ discipline?.datas?.materias?.quantidade }} | {{ discipline?.datas?.materias?.tempo }}
            </span>
          </h3>

        </div>
        <button type="button" @click="openAccordion()">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="black"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path v-if="opened" d="M18 15l-6-6-6 6" />
            <path v-else d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </div>

      <div class="text-open" v-if="opened">
        <div v-for="compentence in discipline?.datas?.competencias" :key="compentence.id">
          <AccordionCompentence :datas="compentence"></AccordionCompentence>
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup>
import AccordionCompentence from '@/components/AccordionCompentence.vue';
import { ref, defineProps } from "vue";

const discipline = defineProps({
  datas: Array,
  index: Number
});

const opened = ref(false);

const openAccordion = () => {
  opened.value = !opened.value;
};
</script>

<style scoped>
.title-accordion button {
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  right: 0;
  padding: 5px;
}

.menu {
  width: 95%;
  margin: 0;
  padding: 0;
  list-style-type: none;
  font-family: 'Roboto', sans-serif;
  background: white;
  padding: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.item-accordion {
  background: #f8f8f8;
  margin-bottom: 5px;
  overflow: hidden;
  width: 100%;
}

.title-accordion {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 16px;
  background-color: white;
  cursor: pointer;
  transition: background 0.3s ease;
  position: relative;
}

.title-accordion:hover {
  background: rgba(169, 113, 245, 0.1);
}

.text {
  flex: 1;
  margin-left: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.text-1 {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

.infos-accordion span {
  margin-right: 20px;
  font-size: 12px;
}

.button {
  font-size: 20px;
  font-weight: bold;
  color: #a971f5;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.text-open {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  width: 100%;
  padding: 10px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.text-open input {
  margin-right: 5px;
}

.accordion-button {
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  right: 10px;
  margin-left: auto;
  padding: 5px;
}

button svg {
  transition: transform 0.3s ease;
}

button:focus {
  outline: none;
}

.opened button svg {
  transform: rotate(180deg);
}

.item-accordion,
.title-accordion,
.text-open {
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

.text-open {
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

.text-open>div {
  max-width: 100%;
}

@media (max-width: 768px) {
  .text-1 {
    font-size: 14px;
  }

  .title-accordion {
    padding: 10px 12px;
  }

  .text-open {
    font-size: 13px;
  }
}
</style>