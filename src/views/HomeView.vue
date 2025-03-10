<template>
    <h1>Cadernos/Lingua Portuguesa</h1>
    <div v-for="disciplina in disciplines" :key="disciplina.id">
    <AccordionDiscipline :datas="disciplina"></AccordionDiscipline>
  </div>
</template>

<script setup>
import AccordionDiscipline from '@/components/AccordionDiscipline.vue';
import {getDisciplines} from '../services/disciplineService.js';
import { ref,onMounted} from 'vue';

const disciplines = ref([]);

onMounted(async () => {
  const disciplinesReturned = await getDisciplines();
  if(disciplinesReturned){
    disciplines.value = disciplinesReturned
    console.log(disciplines.value);
  }
});


</script>

<style>
</style>