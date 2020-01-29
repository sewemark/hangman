<template>
  <div
    class="snackbar"
    :class="[shouldShowSnackbar == true ? 'snackbar--show' : '']"
  >
    {{ snackbarMessage }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Snackbar",
  computed: {
    shouldShowSnackbar: function() {
      return this.snackbar().show;
    },
    snackbarMessage: function() {
      return this.snackbar().message;
    }
  },
  methods: {
    ...mapGetters(["snackbar"])
  }
};
</script>
