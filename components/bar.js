app.component('bar', {
  data() {
    return {
      dynamicWidth: 120,
    };
  },
  
  template: /* html */ `
    <div class="bar" :style="{ width: dynamicWidth + 'px' }">
        <button class="btn plus-btn" @click="addBar">
            <p class="btn-text plus-btn-text">+</p>
        </button>
        <button class="btn minus-btn" @click="removeBar" :style="hideButton">
            <p class="btn-text minus-btn-text">-</p>
        </button>
    </div>`,
  
    methods: {
    addBar() {
      this.dynamicWidth += 30;
    },
    removeBar() {
      if (this.dynamicWidth > 120) {
        this.dynamicWidth -= 30;
      }
    },
  },
  
  computed: {
    hideButton() {
      if (this.dynamicWidth === 120) {
        return { visibility: 'hidden' };
      }
    },
  },
});
