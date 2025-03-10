<template>
  <div class="home">
    <h1>Cadernos/<span class="highlight">Língua Portuguesa</span></h1>
    <p>Aulas concluidas: {{ classesCompleted }}</p>
    <div class="disciplines" v-for="(discipline, index) in disciplines" :key="discipline.id">
      <AccordionDiscipline :datas="discipline" :index="index"></AccordionDiscipline>
    </div>
  </div>
</template>

<script setup>
import AccordionDiscipline from '@/components/AccordionDiscipline.vue';
import { getDisciplines } from '../services/disciplineService.js';
import { ref, onMounted, computed } from 'vue';
import { useStore } from "vuex";

const disciplines = ref([]);

onMounted(async () => {
  const disciplinesReturned = await getDisciplines();
  if (disciplinesReturned) {
    disciplines.value = disciplinesReturned
  }
});

const store = useStore();

const classesCompleted = computed(() => store.getters.getClassesCompleted);

</script>

<style scoped>
.disciplines {
  margin-bottom: 20px;
}

h1 {
  font-size: 40px;
  margin-left: 20px;
  color: gray;
  font-family: 'Roboto', sans-serif;
}

p {
  font-size: 16px;
  margin-left: 20px;
  color: gray;
  font-family: 'Roboto', sans-serif;
}

.highlight {
  border-bottom: 2px solid #a971f5;
}
</style>