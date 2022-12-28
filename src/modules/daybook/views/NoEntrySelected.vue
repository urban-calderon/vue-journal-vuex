<template>
  <div class="contenedor d-flex justify-content-center">
    <div class="children">
      <h1 class="align-self-center">No hay nada seleccionado</h1>
    </div>
  </div>
  <Fab @on:click="createNewEntry" />
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    Fab: defineAsyncComponent(() => import("../components/Fab.vue")),
  },

  methods: {
    createNewEntry() {
      this.$router.push({ name: "entry", params: { id: "new" } });
    },
  },
};
</script>

<style scoped>
.contenedor {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}

.children {
  margin: auto;
}
</style>
