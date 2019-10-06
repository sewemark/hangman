<template>
  <div
    class="snackbar"
    v-bind:class="[this.shouldShowSnackbar == true ? 'snackbar--show' : '']"
  >{{ this.snackbarMessage }}</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Snackbar",
  methods: {
    ...mapGetters(["snackbar"])
  },
  computed: {
    shouldShowSnackbar: function() {
      return this.snackbar().show;
    },
    snackbarMessage: function() {
      return this.snackbar().message;
    }
  }
};
</script>