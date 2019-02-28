const {body} = document;
const WIDTH = 1024;
const RATIO = 3;

export default {
  beforeMount() {
    window.addEventListener('resize', this.resizeHandler);
  },
  mounted() {
    this.setIsMobile();
  },
  methods: {
    getIsMobile() {
      const rect = body.getBoundingClientRect();
      return rect.width - RATIO < WIDTH;
    },
    resizeHandler() {
      this.setIsMobile();
    },
    setIsMobile() {
      this.$store.commit('isMobile', this.getIsMobile());
      if (this.getIsMobile()) {
        this.$store.commit('closeNavBar', true);
      }
    }
  }
};
