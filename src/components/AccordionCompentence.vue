<template>
    <ul class="menu">
        <li class="item-talhao">
            <div class="title-accordion" >
            <div class="button" @click="openAccordionCompentence()" >
                +
            </div>
            <div class="text">
                <h3 class="text-1">ACCORDION 2</h3>
                <h3 class="infos-accordion">
                Volume total colhido do talhão
                </h3>
            </div>
            <button type="button" @click="openAccordionCompentence()" >
                <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            >
            <path v-if="openedAccordion" d="M18 15l-6-6-6 6" />
            <path v-else d="M6 9l6 6 6-6" />
            </svg>
            </button>
            </div>
            
            <div class="text-open" v-if="openedAccordion">
                <AccordionTopic></AccordionTopic> 
            </div>
        </li>
    </ul>
</template>

<script setup>
    import AccordionTopic from '@/components/AccordionTopic.vue';
    import { ref } from "vue";
    
    const openedAccordion = ref(false); 

    const openAccordionCompentence = () => {
        openedAccordion.value = !openedAccordion.value; 
    };
</script>


<style>
.menu {
  width: 100%;
  margin: 1.5vh 0px 0px 0px;
  padding: 0px;
  list-style-type: none;

  .item-talhao {
    margin-top: -10px;
    width: 100%;
    padding: 0;
    color: black;
    text-align: justify;

    .title-accordion {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      width: 100%;
      height: fit-content;
      position: relative;
      padding: 8px;
      margin: 0;
      border-bottom: solid 1px rgba(0, 0, 0, 0.12);
      text-align: justify;

      .button-arrow {
        margin-left: 2.5vw;
        border: none;
        background: none;
        height: fit-content;

        svg {
          transform: rotate(0);
        }
        &.open {
          svg {
            transform: rotate(180deg);
          }
        }
      }

      .infos-accordion {
        text-overflow: ellipsis;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 0.729vw;
      }
      .text {

        .text-1 {
          text-overflow: ellipsis;
          font-family: 'Roboto';
          font-style: normal;
          font-weight: bold;
          font-size: 1.042vw;
          margin-bottom: 1px;
        }
      }
    }

    .text-open {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      margin: 0;
      border-bottom: solid 1px rgba(0, 0, 0, 0.12);
      background: white;
      color: black;
      height: auto;
    }

    &:hover {
      cursor: pointer;
    }
  }

}

@media (min-width: 0px) and (max-width:960px) {
  ul {
    width: 95%;
  }

  .infos-accordion {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 2.833vw;
  }

  .text {
    margin-left: 10.5vw;
    margin-right: 5px;
  }

  .text-1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: bold;
    font-size: 2.833vw;
    margin-bottom: 1px;
  }

  .text-open {
    justify-content: center;
  }
}
</style>