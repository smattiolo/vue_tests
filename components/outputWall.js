app.component('output-wall', {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  template: /* html */ `
    <div class="output-container">
        <p class="output-text">{{ text }}</p>
    </div>
    `,
});
