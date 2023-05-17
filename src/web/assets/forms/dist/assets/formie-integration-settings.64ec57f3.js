import { _ as _export_sfc, M as Modal, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, n as normalizeClass, t as toDisplayString, w as withModifiers, b as createVNode, d as withCtx, e as createVueApp } from "./config.88043305.js";
var IntegrationConnect_vue_vue_type_style_index_0_lang = /* @__PURE__ */ (() => ".fui-integrations-settings .modal {\n  position: absolute;\n  width: 45%;\n  height: 350px;\n  min-width: 600px;\n  min-height: auto;\n  box-shadow: 0 0 20px rgba(63, 77, 90, 0.1);\n  border: 1px solid #cdd8e4;\n  border-radius: 10px;\n}\n.fui-integration-error-modal .fui-dialog-close {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  z-index: 3;\n}\n.fui-integration-error-modal .fui-error-pane {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n.fui-integration-error-modal .fui-error-pane {\n  align-items: center;\n  justify-content: center;\n  display: flex;\n}\n.fui-integration-error-modal .fui-error-pane [data-icon] {\n  display: block;\n  font-size: 3em;\n  margin-bottom: 0.5rem;\n}\n.fui-integration-error-modal .fui-error-content {\n  text-align: center;\n  width: 90%;\n}")();
const _sfc_main = {
  name: "IntegrationConnect",
  components: {
    Modal
  },
  props: {
    connected: {
      type: Boolean
    }
  },
  data() {
    return {
      statusText: "",
      showModal: false,
      error: false,
      errorMessage: "",
      loading: false
    };
  },
  computed: {
    statusClass() {
      if (this.statusText === "Error") {
        return "off";
      }
      if (this.statusText === "Connected") {
        return "on";
      }
      return "";
    }
  },
  created() {
    this.statusText = this.connected ? "Connected" : "Not connected";
  },
  methods: {
    getFormInputs() {
      let inputs = [];
      let $form = document.getElementById("main-form");
      if (!$form) {
        $form = document.getElementById("main");
      }
      if ($form) {
        inputs = $form.querySelectorAll("input, select, textarea");
      }
      return inputs;
    },
    serializeForm() {
      const values = {};
      this.getFormInputs().forEach(($inputElement) => {
        const attribute = $inputElement.getAttribute("name");
        values[attribute] = $inputElement.value;
      });
      return values;
    },
    refresh() {
      this.showModal = false;
      this.error = false;
      this.errorMessage = "";
      this.loading = true;
      this.statusText = "Connecting...";
      const data = this.serializeForm();
      Craft.sendActionRequest("POST", "formie/integrations/check-connection", { data }).then((response) => {
        this.loading = false;
        if (response.data.message) {
          this.error = true;
          this.showModal = true;
          this.errorMessage = Craft.t("formie", "An error occurred.");
          this.errorMessage += `<br><br><code>${response.data.message}</code>`;
          this.statusText = "Error";
          return;
        }
        this.statusText = "Connected";
      }).catch((error) => {
        this.loading = false;
        this.error = true;
        this.showModal = true;
        this.errorMessage = error;
        if (error.response.data.message) {
          this.errorMessage += `<br><br><code>${error.response.data.message}</code>`;
        }
        this.statusText = "Error";
      });
    },
    closeModal() {
      this.showModal = false;
    }
  }
};
const _hoisted_1 = { class: "field lightswitch-field" };
const _hoisted_2 = { class: "heading" };
const _hoisted_3 = { class: "input ltr" };
const _hoisted_4 = ["title"];
const _hoisted_5 = { class: "fui-error-pane error" };
const _hoisted_6 = { class: "fui-error-content" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("span", { "data-icon": "alert" }, null, -1);
const _hoisted_8 = ["innerHTML"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_modal = resolveComponent("modal");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("span", {
        class: normalizeClass(["status", $options.statusClass])
      }, null, 2),
      createBaseVNode("span", null, toDisplayString(_ctx.t("formie", $data.statusText)), 1)
    ]),
    createBaseVNode("div", _hoisted_3, [
      createBaseVNode("button", {
        class: normalizeClass(["btn small", { "fui-loading fui-loading-tiny": $data.loading }]),
        title: _ctx.t("formie", "Refresh"),
        onClick: _cache[0] || (_cache[0] = withModifiers((...args) => $options.refresh && $options.refresh(...args), ["prevent"]))
      }, toDisplayString(_ctx.t("formie", "Refresh")), 11, _hoisted_4),
      createVNode(_component_modal, {
        ref: "modal",
        modelValue: $data.showModal,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.showModal = $event),
        "show-header": false,
        "show-footer": false,
        "modal-class": "fui-integration-error-modal",
        onClickOutside: $options.closeModal
      }, {
        body: withCtx(() => [
          createBaseVNode("div", {
            class: "fui-dialog-close",
            onClick: _cache[1] || (_cache[1] = withModifiers((...args) => $options.closeModal && $options.closeModal(...args), ["prevent"]))
          }),
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("div", _hoisted_6, [
              _hoisted_7,
              createBaseVNode("span", {
                class: "error",
                innerHTML: $data.errorMessage
              }, null, 8, _hoisted_8)
            ])
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "onClickOutside"])
    ])
  ]);
}
var IntegrationConnect = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/joshcrawford/public_html/craft4-plugins/formie/src/web/assets/forms/src/js/components/IntegrationConnect.vue"]]);
const app = createVueApp({
  delimiters: ["${", "}"],
  components: {
    IntegrationConnect
  }
});
app.mount(".fui-integrations-settings #details .meta");
$(document).ready(() => {
  document.dispatchEvent(new CustomEvent("vite-script-loaded", { detail: { path: "src/js/formie-integration-settings.js" } }));
});
//# sourceMappingURL=formie-integration-settings.64ec57f3.js.map
