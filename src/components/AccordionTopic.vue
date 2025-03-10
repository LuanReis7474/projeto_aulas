<template>
  <ul class="menu">
    <li class="item-accordion">
      <div class="title-accordion">
        <div class="button" @click="openAccordion()">
          <span v-if="opened">-</span>
          <span v-else>+</span>
        </div>
        <div class="text">
          <h3 class="text-1">{{ aulas.datas.titulo }}</h3>

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
        <div v-for="aula in aulas.datas.aulas" :key="aula.id">
          <input type="checkbox" v-model="isChecked[aula.id]" :checked="idClassesCompleted.includes(aula.id)"
            @change="handleChange(aula.id)">
          <p>{{ aula.nome }}</p>
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup>
import { ref, defineProps, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const opened = ref(false);

const idClassesCompleted = computed(() => store.getters.getIdClasses);

const openAccordion = () => {
  opened.value = !opened.value;
};

const aulas = defineProps({
  datas: Array
});

const isChecked = ref({});

const handleChange = (id) => {
  if (isChecked.value[id]) {
    store.commit('changeClasses', 1);
    store.commit('saveId', id);
  } else {
    store.commit('changeClasses', -1);
    store.commit('deleteId', id);
  }
};

</script>

<style scoped>
.menu {
  width: 100%;
  margin: 0;
  padding: 0;
  list-style-type: none;
  font-family: 'Roboto', sans-serif;
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

.button {
  font-size: 20px;
  font-weight: bold;
  color: #a971f5;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.text-open {
  background: white;
  padding: 10px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  width: 100%;
}

.aula-item {
  display: flex;
  align-items: center;
}

.text-open input {
  margin-right: 5px;
}

.text-open div {
  display: flex;
}

.title-accordion button {
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  right: 0;
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