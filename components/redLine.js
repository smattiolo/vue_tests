app.component('red-line', {
  props: {
    time: {
      type: String,
      require: true,
    },
  },

  data() {
    return {
      linePixels: '8px',
    };
  },

  template: /* html */ `
    <div class="red-line" :style="{ width: linePixels }"></div>`,

  watch: {
    time: function () {
      const seconds = parseInt(this.time.slice(-2));

      const pixels = seconds * 5 + 8;

      this.linePixels = pixels + 'px';
    },
  },
});
