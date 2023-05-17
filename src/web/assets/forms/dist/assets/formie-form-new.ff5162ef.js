import { e as createVueApp, g as getNextAvailableHandle, f as generateHandle } from "./config.88043305.js";
if (typeof Craft.Formie === "undefined") {
  Craft.Formie = {};
}
Craft.Formie.NewForm = Garnish.Base.extend({
  init(settings) {
    const app = createVueApp({
      data() {
        return {
          name: settings.name,
          handle: settings.handle,
          handles: []
        };
      },
      watch: {
        name(val) {
          const maxHandleLength = settings.maxFormHandleLength;
          this.handle = getNextAvailableHandle(this.handles, generateHandle(this.name), 0).substr(0, maxHandleLength);
        }
      },
      created() {
        this.handles = settings.formHandles.concat(settings.reservedHandles);
      },
      mounted() {
        this.$el.querySelector('[name="title"]').focus();
        this.$nextTick().then(() => {
          Craft.initUiElements();
        });
      }
    });
    app.mount("#fui-new-form");
  }
});
$(document).ready(() => {
  document.dispatchEvent(new CustomEvent("vite-script-loaded", { detail: { path: "src/js/formie-form-new.js" } }));
});
//# sourceMappingURL=formie-form-new.ff5162ef.js.map
