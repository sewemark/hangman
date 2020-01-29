<template>
  <div class="word-definitions">
    <ul class="word-definitions__list">
      <li
        v-for="(definition, index) in definitions"
        :key="index"
      >
        {{ definition.charAt(0).toUpperCase() + definition.slice(1) }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "WordDefinitions",
  computed: {
    ...mapGetters(["definitions"])
  }
};
</script>
