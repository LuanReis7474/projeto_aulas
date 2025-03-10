<template>
  <ul class="menu">
    <li class="item-accordion">
      <div class="title-accordion">
        <div class="button" @click="openAccordionCompentence()">
          <span v-if="openedAccordion">-</span>
          <span v-else>+</span>
        </div>
        <div class="text">
          <h3 class="text-1">{{ compentence?.datas?.nome }}</h3>
          <h3 class="infos-accordion">
            <span class="aulas">
              Aulas: {{ compentence?.datas?.aulas?.quantidade }} | {{ compentence?.datas?.aulas?.tempo }}
            </span>
            <span class="exercicios">
              Exercícios: {{ compentence?.datas?.exercicios?.quantidade }} | {{ compentence?.datas?.exercicios?.tempo }}
            </span>
            <span class="materias">
              Matérias: {{ compentence?.datas?.materias?.quantidade }} | {{ compentence?.datas?.materias?.tempo }}
            </span>
          </h3>
        </div>
        <button type="button" @click="openAccordionCompentence()">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="black"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path v-if="openedAccordion" d="M18 15l-6-6-6 6" />
            <path v-else d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </div>

      <div class="text-open" v-if="openedAccordion">
        <AccordionTopic :datas="compentence?.datas?.lista_aulas"></AccordionTopic>
      </div>
    </li>
  </ul>
</template>

<script setup>
import AccordionTopic from '@/components/AccordionTopic.vue';
import { ref, defineProps } from "vue";

const openedAccordion = ref(false);

const openAccordionCompentence = () => {
  openedAccordion.value = !openedAccordion.value;
};

const compentence = defineProps({
  datas: Array
});

</script>

<style scoped>
.menu {
  padding: 0;
  list-style-type: none;
  font-family: 'Roboto', sans-serif;
}

.item-accordion {
  background: transparent;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
}

.title-accordion {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 16px;
  background-color: transparent;
  cursor: pointer;
  transition: background 0.3s ease;
  position: relative;
}

.title-accordion:hover {
  background: rgba(169, 113, 245, 0.1);
}

.text {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.text-1 {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-left: 8px;
}

.infos-accordion {
  display: flex;
  flex-direction: row;
  margin-left: 8px;
  margin-top: 4px;

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
  background: transparent;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  flex-grow: 1;
}

.text-open input {
  margin-right: 5px;
}

.title-accordion button {
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  right: 0;
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
  box-sizing: border-box;
}

.text-open .menu,
.text-open .item-accordion {
  width: 100%;
  box-sizing: border-box;
  flex-grow: 1;
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