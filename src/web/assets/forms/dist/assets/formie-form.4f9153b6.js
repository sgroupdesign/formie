var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop2 in b || (b = {}))
    if (__hasOwnProp.call(b, prop2))
      __defNormalProp(a, prop2, b[prop2]);
  if (__getOwnPropSymbols)
    for (var prop2 of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop2))
        __defNormalProp(a, prop2, b[prop2]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target2 = {};
  for (var prop2 in source)
    if (__hasOwnProp.call(source, prop2) && exclude.indexOf(prop2) < 0)
      target2[prop2] = source[prop2];
  if (source != null && __getOwnPropSymbols)
    for (var prop2 of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop2) < 0 && __propIsEnum.call(source, prop2))
        target2[prop2] = source[prop2];
    }
  return target2;
};
import { i as isObject$1, h as copyObject, k as keys, j as keysIn, l as root$1, m as getSymbols, p as getSymbolsIn, U as Uint8Array2, S as Symbol$1, q as isPrototype, s as getPrototype, u as isObjectLike, v as getTag, x as nodeUtil, y as baseUnary, z as isArray, A as isBuffer, B as Stack, C as arrayEach, D as assignValue, E as getAllKeysIn, F as getAllKeys, G as toNumber, H as baseSet, I as h, _ as _export_sfc, o as openBlock, J as createBlock, d as withCtx, K as renderSlot, c as createElementBlock, L as normalizeStyle, N as resolveDynamicComponent, w as withModifiers, M as Modal, O as isEmpty, r as resolveComponent, a as createBaseVNode, t as toDisplayString, P as createCommentVNode, Q as createTextVNode, b as createVNode, R as renderList, n as normalizeClass, T as Fragment, V as commonjsGlobal, W as getAugmentedNamespace, X as mapState, Y as parseDate, Z as compileToFunction, $ as markdownIt, a0 as getDisplayName, a1 as generateKebab, f as generateHandle, g as getNextAvailableHandle, a2 as newId, a3 as withDirectives, a4 as vShow, a5 as createSlots, a6 as mergeProps, a7 as Draggable, a8 as get, a9 as pushScopeId, aa as popScopeId, ab as findIndex, ac as vModelText, ad as reactive, ae as toRef, af as EditorContent, ag as Editor, ah as Document$5, ai as Dropcursor, aj as Gapcursor, ak as HardBreak, al as Paragraph, am as Text$1, an as FocusClasses, ao as Bold, ap as Code, aq as Highlight, ar as Italic, as as Strike, at as Subscript, au as Superscript, av as Underline, aw as Blockquote, ax as BulletList, ay as CodeBlock, az as Heading, aA as HorizontalRule, aB as ListItem, aC as OrderedList, aD as History, aE as TextAlign, aF as Link, aG as toBoolean, aH as truncate, aI as vModelSelect, aJ as store, e as createVueApp, aK as ToggleBlock, aL as clone } from "./config.88043305.js";
var objectCreate = Object.create;
var baseCreate = function() {
  function object() {
  }
  return function(proto) {
    if (!isObject$1(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result2 = new object();
    object.prototype = void 0;
    return result2;
  };
}();
var baseCreate$1 = baseCreate;
function copyArray(source, array) {
  var index = -1, length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer$1 = moduleExports ? root$1.Buffer : void 0, allocUnsafe = Buffer$1 ? Buffer$1.allocUnsafe : void 0;
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result2);
  return result2;
}
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function initCloneArray(array) {
  var length = array.length, result2 = new array.constructor(length);
  if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
    result2.index = array.index;
    result2.input = array.input;
  }
  return result2;
}
function cloneArrayBuffer(arrayBuffer) {
  var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array2(result2).set(new Uint8Array2(arrayBuffer));
  return result2;
}
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var reFlags = /\w*$/;
function cloneRegExp(regexp) {
  var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result2.lastIndex = regexp.lastIndex;
  return result2;
}
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$1:
      return cloneArrayBuffer(object);
    case boolTag$1:
    case dateTag$1:
      return new Ctor(+object);
    case dataViewTag$1:
      return cloneDataView(object, isDeep);
    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return cloneTypedArray(object, isDeep);
    case mapTag$2:
      return new Ctor();
    case numberTag$1:
    case stringTag$1:
      return new Ctor(object);
    case regexpTag$1:
      return cloneRegExp(object);
    case setTag$2:
      return new Ctor();
    case symbolTag$1:
      return cloneSymbol(object);
  }
}
function initCloneObject(object) {
  return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate$1(getPrototype(object)) : {};
}
var mapTag$1 = "[object Map]";
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag$1;
}
var nodeIsMap = nodeUtil && nodeUtil.isMap;
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
var isMap$1 = isMap;
var setTag$1 = "[object Set]";
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag$1;
}
var nodeIsSet = nodeUtil && nodeUtil.isSet;
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
var isSet$1 = isSet;
var CLONE_DEEP_FLAG$1 = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG$1 = 4;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result2, isDeep = bitmask & CLONE_DEEP_FLAG$1, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
  if (customizer) {
    result2 = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result2 !== void 0) {
    return result2;
  }
  if (!isObject$1(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result2 = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result2);
    }
  } else {
    var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || isFunc && !object) {
      result2 = isFlat || isFunc ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result2 = initCloneByTag(value, tag, isDeep);
    }
  }
  stack || (stack = new Stack());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result2);
  if (isSet$1(value)) {
    value.forEach(function(subValue) {
      result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap$1(value)) {
    value.forEach(function(subValue, key2) {
      result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
  var props = isArr ? void 0 : keysFunc(value);
  arrayEach(props || value, function(subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value[key2];
    }
    assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
  });
  return result2;
}
var CLONE_DEEP_FLAG = 1, CLONE_SYMBOLS_FLAG = 4;
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
var now = function() {
  return root$1.Date.now();
};
var now$1 = now;
var FUNC_ERROR_TEXT = "Expected a function";
var nativeMax = Math.max, nativeMin = Math.min;
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject$1(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result2 = func.apply(thisArg, args);
    return result2;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result2;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now$1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result2;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result2 : trailingEdge(now$1());
  }
  function debounced() {
    var time = now$1(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result2;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}
window.__tabs = {
  ids: {
    current: 0,
    blacklist: []
  }
};
const { ids } = window.__tabs;
function useId() {
  const id = ++ids.current;
  if (ids.blacklist.includes(id)) {
    return useId();
  } else {
    return id;
  }
}
function useCustomId(id) {
  if (ids.blacklist.includes(id)) {
    throw new Error(`The id "${id}" has already been used`);
  }
  ids.blacklist.push(id);
  return id;
}
function cleanChildren(vnodes) {
  if (!vnodes)
    return [];
  return vnodes.filter((vnode) => vnode.tag);
}
const Tabs = {
  name: "Tabs",
  props: {
    id: null,
    defaultIndex: {
      type: Number,
      default: 0,
      required: false
    },
    orientation: {
      type: String,
      default: "horizontal",
      validator: (value) => ["horizontal", "vertical"].includes(value)
    },
    tabActivationMode: {
      type: String,
      default: "auto",
      validator: (value) => ["auto", "manual"].includes(value)
    }
  },
  data() {
    return {
      tabState: {
        activeTab: this.defaultIndex,
        activePanelRef: null,
        focusedTab: null,
        _id: this.id ? useCustomId(this.id) : useId()
      }
    };
  },
  computed: {
    isManual() {
      return this.tabActivationMode === "manual";
    }
  },
  methods: {
    setActiveTab(newActiveTab, { force = false } = {}) {
      this.tabState.focusedTab = newActiveTab;
      if (force || !this.isManual) {
        this.tabState.activeTab = newActiveTab;
      }
    },
    setActivePanelRef(ref) {
      this.tabState.activePanelRef = ref;
    },
    focusActivePanel() {
      if (this.tabState.activePanelRef) {
        this.tabState.activePanelRef.focus();
      }
    },
    focusTab(tabIndex) {
      this.tabState.focusedTab = tabIndex;
    }
  },
  provide() {
    return {
      tabState: this.tabState,
      setActiveTab: this.setActiveTab,
      setActivePanelRef: this.setActivePanelRef,
      focusActivePanel: this.focusActivePanel,
      tabOrientation: this.orientation,
      tabActivationMode: this.tabActivationMode
    };
  },
  render() {
    return h("div", this.$slots.default());
  }
};
const Tab$1 = {
  name: "Tab",
  props: {
    index: {
      type: Number,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    activeClass: {
      type: String
    },
    inactiveClass: {
      type: String
    }
  },
  computed: {
    isActive() {
      return this.tabState.activeTab === this.index;
    },
    isFocused() {
      return this.tabState.focusedTab === this.index;
    }
  },
  methods: {
    handleKeydown(event) {
      const vertical = this.tabOrientation === "vertical";
      const horizontal = this.tabOrientation === "horizontal";
      if (horizontal && event.key === "ArrowRight" || vertical && event.key === "ArrowDown") {
        event.preventDefault();
        this.tablistSetActiveTab(({ currentIndex, tabCount }) => {
          return (currentIndex + 1) % tabCount;
        });
      }
      if (horizontal && event.key === "ArrowLeft" || vertical && event.key === "ArrowUp") {
        event.preventDefault();
        this.tablistSetActiveTab(({ currentIndex, tabCount }) => {
          return (currentIndex - 1 + tabCount) % tabCount;
        });
      }
      if (horizontal && event.key === "ArrowDown") {
        event.preventDefault();
        this.focusActivePanel();
      }
      if (event.key === "Home") {
        event.preventDefault();
        this.tablistSetActiveTab(0);
      }
      if (event.key === "End") {
        event.preventDefault();
        this.tablistSetActiveTab(({ tabCount }) => tabCount - 1);
      }
    },
    handleClick(e) {
      e.preventDefault();
      this.tablistSetActiveTab(this.index, { force: true });
    }
  },
  watch: {
    isFocused(isFocused) {
      if (isFocused) {
        this.$el.focus();
      }
    }
  },
  render() {
    return h("button", {
      role: "tab",
      "aria-disabled": this.disabled ? "true" : "false",
      "aria-selected": this.isActive ? "true" : "false",
      "aria-controls": `tabs--${this.tabState._id}--panel--${this.index}`,
      id: `tabs--${this.tabState._id}--tab--${this.index}`,
      tabindex: this.isActive ? null : "-1",
      class: [this.isActive ? this.activeClass : this.inactiveClass],
      onClick: this.handleClick,
      onKeydown: this.handleKeydown
    }, this.$slots.default());
  },
  inject: [
    "tabState",
    "tablistSetActiveTab",
    "focusActivePanel",
    "tabOrientation"
  ]
};
const TabList = {
  name: "TabList",
  render() {
    cleanChildren(this.$slots.default()).forEach((node2, index) => {
      node2.componentOptions.propsData.index = index;
    });
    return h("div", {
      role: "tablist",
      "aria-orientation": this.tabOrientation
    }, this.$slots.default());
  },
  computed: {
    tabCount() {
      const tabs = cleanChildren(this.$slots.default());
      return tabs.length;
    },
    isOnLastTab() {
      return this.tabState.activeTab === this.tabCount;
    },
    isOnFirstTab() {
      return this.tabState.activeTab === 0;
    }
  },
  methods: {
    tablistSetActiveTab(updater, { force = false } = {}) {
      const activeTab = this.isManual ? this.tabState.focusedTab !== null ? this.tabState.focusedTab : 0 : this.tabState.activeTab;
      const newActiveTab = typeof updater === "number" ? updater : updater({
        currentIndex: activeTab,
        tabCount: this.tabCount,
        isOnLastTab: this.isOnLastTab,
        isOnFirstTab: this.isOnFirstTab
      });
      if (newActiveTab === false)
        return;
      this.tabState.focusedTab = newActiveTab;
      if (force || !this.isManual) {
        this.tabState.activeTab = newActiveTab;
      }
    }
  },
  provide() {
    return {
      tablistSetActiveTab: this.tablistSetActiveTab
    };
  },
  inject: ["tabState", "tabOrientation", "setActiveTab"]
};
const TabPanels = {
  name: "TabPanels",
  render() {
    const panels = [];
    this.$slots.default().forEach((node2, index) => {
      node2.props.index = index;
      panels.push(node2);
    });
    return h("div", panels);
  }
};
const TabPanel = {
  name: "TabPanel",
  props: {
    index: {
      type: Number,
      required: true
    }
  },
  computed: {
    isActive() {
      return this.tabState.activeTab === this.index;
    }
  },
  watch: {
    isActive(isActive) {
      if (isActive) {
        this.setActivePanelRef(this.$el);
      }
    }
  },
  render() {
    return h("div", {
      role: "tabpanel",
      "aria-labeledby": `tabs--${this.tabState._id}--tab--${this.index}`,
      id: `tabs--${this.tabState._id}--panel--${this.index}`,
      hidden: !this.isActive
    }, this.$slots.default());
  },
  inject: ["tabState", "setActivePanelRef"]
};
function canDrag(sourcePageIndex, sourceField, dragData) {
  if (sourceField && dragData.supportsNested) {
    return false;
  }
  if (dragData.trigger === "pill") {
    return true;
  }
  if (sourceField && dragData.pageIndex >= 0) {
    return false;
  }
  if (sourcePageIndex >= 0 && dragData.pageIndex < 0) {
    return false;
  }
  if (dragData.fieldId && sourceField && sourceField.supportsNested) {
    if (dragData.fieldId != sourceField.vid) {
      return false;
    }
  }
  return true;
}
var transferDataStore = { data: void 0 };
const keyMirror = (keys2) => {
  return keys2.reduce((acc, k) => {
    return (acc[k] = k) && acc;
  }, {});
};
const events = {
  "drag": "on-drag",
  "dragend": "on-dragend",
  "dragenter": "on-dragenter",
  "dragleave": "on-dragleave",
  "dragstart": "on-dragstart",
  "dragover": "on-dragover",
  "drop": "on-drop"
};
const dropEffects = keyMirror(["copy", "move", "link", "none"]);
const effectsAllowed = keyMirror([
  "none",
  "copy",
  "copyLink",
  "copyMove",
  "link",
  "linkMove",
  "move",
  "all",
  "uninitialized"
]);
const _sfc_main$z = {
  props: {
    draggable: { type: Boolean, default: true },
    transferData: {},
    dropEffect: { validator: (value) => value in dropEffects },
    effectAllowed: { validator: (value) => value in effectsAllowed },
    image: String,
    imageXOffset: { type: Number, default: 0 },
    imageYOffset: { type: Number, default: 0 },
    hideImageHtml: { type: Boolean, default: true },
    tag: { type: String, default: "div" }
  },
  data() {
    return { dragging: false };
  },
  computed: {
    events: () => events,
    scopedData() {
      return this.dragging && this.transferData;
    },
    hideImageStyle: () => ({ position: "fixed", top: "-1000px" })
  },
  methods: {
    emitEvent(name, nativeEvent) {
      const transfer = nativeEvent.dataTransfer;
      if ([events.dragenter, events.dragover].includes(name)) {
        if (this.dropEffect) {
          transfer.dropEffect = this.dropEffect;
        }
      }
      if (name === events.dragstart) {
        if (this.effectAllowed) {
          transfer.effectAllowed = this.effectAllowed;
        }
        if (this.image || this.$slots.image || this.$refs.image) {
          let image2;
          if (this.image) {
            image2 = new Image();
            image2.src = this.image;
          } else if (this.$refs.image) {
            image2 = this.$refs.image;
          } else if (this.$slots.image) {
            image2 = this.$slots.image[0].elm;
          }
          if (transfer.setDragImage) {
            transfer.setDragImage(image2, this.imageXOffset, this.imageYOffset);
          }
        }
        if (this.transferData !== void 0) {
          transferDataStore.data = this.transferData;
          nativeEvent.dataTransfer.setData("text", "");
        }
        this.dragging = true;
      }
      this.$emit(name, this.transferData, nativeEvent);
      if (name === events.dragend) {
        transferDataStore.data = void 0;
        this.dragging = false;
      }
    }
  }
};
function _sfc_render$y(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.tag), {
    draggable: $props.draggable,
    onDrag: _cache[0] || (_cache[0] = ($event) => $options.emitEvent($options.events.drag, $event)),
    onDragstart: _cache[1] || (_cache[1] = ($event) => $options.emitEvent($options.events.dragstart, $event)),
    onDragenter: _cache[2] || (_cache[2] = ($event) => $options.emitEvent($options.events.dragenter, $event)),
    onDragleave: _cache[3] || (_cache[3] = ($event) => $options.emitEvent($options.events.dragleave, $event)),
    onDragend: _cache[4] || (_cache[4] = ($event) => $options.emitEvent($options.events.dragend, $event))
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default", { transferData: $options.scopedData }),
      $props.hideImageHtml ? (openBlock(), createElementBlock("div", {
        key: 0,
        ref: "image",
        style: normalizeStyle($options.hideImageStyle)
      }, [
        renderSlot(_ctx.$slots, "image", { transferData: $options.scopedData })
      ], 4)) : renderSlot(_ctx.$slots, "image", {
        key: 1,
        transferData: $options.scopedData
      })
    ]),
    _: 3
  }, 40, ["draggable"]);
}
var Drag = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["render", _sfc_render$y], ["__file", "/Users/joshcrawford/public_html/craft4-plugins/formie/src/web/assets/forms/src/js/vendor/vue-drag-drop/Drag.vue"]]);
const insideElements = /* @__PURE__ */ new Set();
const _sfc_main$y = {
  data() {
    return { transferData: void 0, isDraggingOver: false };
  },
  props: {
    tag: { type: String, default: "div" }
  },
  computed: {
    events: () => events,
    scopedData() {
      return this.isDraggingOver && this.transferData;
    }
  },
  methods: {
    emitEvent(name, nativeEvent) {
      this.transferData = transferDataStore.data;
      this.$emit(name, this.transferData, nativeEvent);
      if (name === events.dragenter) {
        if (insideElements.size || nativeEvent.target === this.$el) {
          insideElements.add(nativeEvent.target);
        }
      }
      if (name === events.dragleave) {
        insideElements.delete(nativeEvent.target);
      }
      if (name === events.drop) {
        insideElements.clear();
      }
      this.isDraggingOver = Boolean(insideElements.size);
    }
  }
};
function _sfc_render$x(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.tag), {
    onDragenter: _cache[0] || (_cache[0] = ($event) => $options.emitEvent($options.events.dragenter, $event)),
    onDragleave: _cache[1] || (_cache[1] = ($event) => $options.emitEvent($options.events.dragleave, $event)),
    onDragover: _cache[2] || (_cache[2] = withModifiers(($event) => $options.emitEvent($options.events.dragover, $event), ["prevent"])),
    onDrop: _cache[3] || (_cache[3] = withModifiers(($event) => $options.emitEvent($options.events.drop, $event), ["prevent"]))
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default", { transferData: $options.scopedData })
    ]),
    _: 3
  }, 32);
}
var Drop = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["render", _sfc_render$x], ["__file", "/Users/joshcrawford/public_html/craft4-plugins/formie/src/web/assets/forms/src/js/vendor/vue-drag-drop/Drop.vue"]]);
const isSafari = function() {
  return window.safari !== void 0;
};
const _sfc_main$x = {
  name: "FieldEditModal",
  components: {
    Modal,
    Tabs,
    Tab: Tab$1,
    TabList
  },
  props: {
    canDelete: {
      type: Boolean,
      default: true
    },
    showFieldType: {
      type: Boolean,
      default: true
    },
    fieldRef: {
      type: Object,
      default: () => {
      }
    },
    showModal: {
      type: Boolean,
      default: () => {
      }
    },
    field: {
      type: Object,
      default: () => {
      }
    },
    tabsSchema: {
      type: Array,
      default: () => {
        return [];
      }
    },
    fieldsSchema: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  emits: ["delete", "update:field"],
  data() {
    return {
      originalField: null,
      mounted: false,
      tabsWithErrors: []
    };
  },
  computed: {
    fieldErrors() {
      return this.field.errors;
    },
    fieldtype() {
      return this.$store.getters["fieldtypes/fieldtype"](this.field.type);
    },
    getFirstError() {
      if (!isEmpty(this.fieldErrors)) {
        return this.fieldErrors[Object.keys(this.fieldErrors)[0]][0] || "";
      }
      return null;
    },
    fieldSettings: {
      get() {
        return this.field.settings;
      },
      set(fieldSettings) {
        if (!this.fieldRef.submitButton) {
          this.field.label = fieldSettings.label;
          this.field.handle = fieldSettings.handle;
        }
        this.field.settings = fieldSettings;
      }
    }
  },
  created() {
    this.originalField = this.clone(this.field);
    this.fieldSettings.label = this.field.label;
    this.fieldSettings.handle = this.field.handle;
    this.$store.dispatch("formie/setEditingField", this.fieldRef);
  },
  mounted() {
    setTimeout(() => {
      this.mounted = true;
      this.$nextTick().then(() => {
        const $firstText = this.$refs.fieldForm.$el.parentNode.querySelector('input[type="text"]');
        if ($firstText && $firstText.value.length === 0) {
          setTimeout(() => {
            $firstText.focus();
          }, 200);
        }
        if (!isEmpty(this.fieldErrors)) {
          this.$refs.fieldForm.setErrors(this.fieldErrors);
          setTimeout(() => {
            this.updateTabs();
          }, 50);
        }
      });
    }, 100);
  },
  destroy() {
    this.destroy();
  },
  methods: {
    destroy() {
      setTimeout(() => {
        this.$store.dispatch("formie/setEditingField", null);
      }, 200);
    },
    closeModal() {
      this.$refs.modal.close();
      this.destroy();
    },
    deleteField() {
      this.$emit("delete");
      this.destroy();
    },
    tabErrorClass(tab) {
      return this.tabsWithErrors.includes(tab) ? "error" : false;
    },
    submitHandler() {
      this.fieldRef.markAsSaved();
      this.closeModal();
    },
    onCancelModal() {
      this.$events.emit("fieldEdit.beforeCancel", this.field);
      this.$emit("update:field", this.originalField);
      this.$events.emit("fieldEdit.afterCancel", this.field);
      this.closeModal();
    },
    updateTabs() {
      const errors = this.$refs.fieldForm.getErrors();
      this.tabsWithErrors = [];
      this.tabsSchema.forEach((tab) => {
        const isInTab = tab.fields.some((v) => {
          return errors.includes(v);
        });
        if (isInTab) {
          this.tabsWithErrors.push(tab.label);
        }
      });
    },
    onSave() {
      this.updateTabs();
      this.$refs.fieldForm.submit();
    }
  }
};
const _hoisted_1$s = { class: "fui-modal-title" };
const _hoisted_2$o = {
  key: 0,
  class: "fui-modal-fieldtype"
};
const _hoisted_3$n = {
  key: 0,
  class: "fui-notice-wrap"
};
const _hoisted_4$m = { class: "fui-notice warning" };
const _hoisted_5$l = /* @__PURE__ */ createBaseVNode("span", { class: "warning with-icon" }, null, -1);
const _hoisted_6$i = { class: "fui-tabs fui-field-tabs fui-field-tab-list" };
const _hoisted_7$i = {
  key: 0,
  class: "fui-notice-wrap"
};
const _hoisted_8$h = { class: "fui-notice error" };
const _hoisted_9$c = /* @__PURE__ */ createBaseVNode("span", { class: "error with-icon" }, null, -1);
const _hoisted_10$a = {
  key: 0,
  class: "fui-loading fui-loading-lg",
  style: { "height": "100%" }
};
const _hoisted_11$9 = {
  key: 0,
  class: "buttons left"
};
const _hoisted_12$9 = { class: "buttons right" };
function _sfc_render$w(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_tab = resolveComponent("tab");
  const _component_tab_list = resolveComponent("tab-list");
  const _component_FormKitSchema = resolveComponent("FormKitSchema");
  const _component_FormKitForm = resolveComponent("FormKitForm");
  const _component_tabs = resolveComponent("tabs");
  const _component_modal = resolveComponent("modal");
  return openBlock(), createBlock(_component_modal, {
    ref: "modal",
    modelValue: $props.showModal,
    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $props.showModal = $event),
    "modal-class": "fui-edit-field-modal",
    onClickOutside: $options.onCancelModal
  }, {
    header: withCtx(() => [
      createBaseVNode("h3", _hoisted_1$s, toDisplayString(_ctx.t("formie", "Edit Field")), 1),
      $props.showFieldType ? (openBlock(), createElementBlock("div", _hoisted_2$o, toDisplayString($options.fieldtype.label), 1)) : createCommentVNode("v-if", true),
      createBaseVNode("div", {
        class: "fui-dialog-close",
        onClick: _cache[0] || (_cache[0] = withModifiers((...args) => $options.onCancelModal && $options.onCancelModal(...args), ["prevent"]))
      })
    ]),
    body: withCtx(() => [
      $props.field.isSynced ? (openBlock(), createElementBlock("div", _hoisted_3$n, [
        createBaseVNode("div", _hoisted_4$m, [
          _hoisted_5$l,
          createTextVNode(" " + toDisplayString(_ctx.t("formie", "Warning: Currently editing synced field. Changes to this field will be applied to all instances of this field.")), 1)
        ])
      ])) : createCommentVNode("v-if", true),
      createVNode(_component_tabs, { style: { "height": "100%" } }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_6$i, [
            createVNode(_component_tab_list, { class: "fui-pages-menu" }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList($props.tabsSchema, (tab, index) => {
                  return openBlock(), createBlock(_component_tab, {
                    key: index,
                    index,
                    class: normalizeClass(["fui-tab-item", $options.tabErrorClass(tab.label)])
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(tab.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["index", "class"]);
                }), 128))
              ]),
              _: 1
            })
          ]),
          $options.getFirstError ? (openBlock(), createElementBlock("div", _hoisted_7$i, [
            createBaseVNode("div", _hoisted_8$h, [
              _hoisted_9$c,
              createTextVNode(" " + toDisplayString($options.getFirstError), 1)
            ])
          ])) : createCommentVNode("v-if", true),
          createBaseVNode("div", {
            class: "fui-modal-content",
            style: normalizeStyle({ height: !$data.mounted ? "80%" : "" })
          }, [
            !$data.mounted ? (openBlock(), createElementBlock("div", _hoisted_10$a)) : createCommentVNode("v-if", true),
            $data.mounted ? (openBlock(), createBlock(_component_FormKitForm, {
              key: 1,
              ref: "fieldForm",
              modelValue: $options.fieldSettings,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $options.fieldSettings = $event),
              onSubmit: $options.submitHandler
            }, {
              default: withCtx(() => [
                createVNode(_component_FormKitSchema, { schema: $props.fieldsSchema }, null, 8, ["schema"])
              ]),
              _: 1
            }, 8, ["modelValue", "onSubmit"])) : createCommentVNode("v-if", true)
          ], 4)
        ]),
        _: 1
      })
    ]),
    footer: withCtx(() => [
      $props.canDelete ? (openBlock(), createElementBlock("div", _hoisted_11$9, [
        createBaseVNode("div", {
          class: "btn delete",
          role: "button",
          onClick: _cache[2] || (_cache[2] = withModifiers((...args) => $options.deleteField && $options.deleteField(...args), ["prevent"]))
        }, toDisplayString(_ctx.t("app", "Delete")), 1)
      ])) : createCommentVNode("v-if", true),
      createBaseVNode("div", _hoisted_12$9, [
        createBaseVNode("div", {
          class: "btn",
          role: "button",
          onClick: _cache[3] || (_cache[3] = withModifiers((...args) => $options.onCancelModal && $options.onCancelModal(...args), ["prevent"]))
        }, toDisplayString(_ctx.t("app", "Cancel")), 1),
        createBaseVNode("div", {
          class: "btn submit",
          role: "button",
          onClick: _cache[4] || (_cache[4] = withModifiers((...args) => $options.onSave && $options.onSave(...args), ["prevent"]))
        }, toDisplayString(_ctx.t("app", "Apply")), 1)
      ])
    ]),
    _: 1
  }, 8, ["modelValue", "onClickOutside"]);
}
var FieldEditModal = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", _sfc_render$w], ["__file", "/Users/joshcrawford/public_html/craft4-plugins/formie/src/web/assets/forms/src/js/components/FieldEditModal.vue"]]);
var lib$5 = {};
var Parser$3 = {};
var Tokenizer$1 = {};
var decode_codepoint = {};
var require$$0$1 = {
  "0": 65533,
  "128": 8364,
  "130": 8218,
  "131": 402,
  "132": 8222,
  "133": 8230,
  "134": 8224,
  "135": 8225,
  "136": 710,
  "137": 8240,
  "138": 352,
  "139": 8249,
  "140": 338,
  "142": 381,
  "145": 8216,
  "146": 8217,
  "147": 8220,
  "148": 8221,
  "149": 8226,
  "150": 8211,
  "151": 8212,
  "152": 732,
  "153": 8482,
  "154": 353,
  "155": 8250,
  "156": 339,
  "158": 382,
  "159": 376
};
var __importDefault$6 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(decode_codepoint, "__esModule", { value: true });
var decode_json_1 = __importDefault$6(require$$0$1);
var fromCodePoint = String.fromCodePoint || function(codePoint) {
  var output = "";
  if (codePoint > 65535) {
    codePoint -= 65536;
    output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
    codePoint = 56320 | codePoint & 1023;
  }
  output += String.fromCharCode(codePoint);
  return output;
};
function decodeCodePoint(codePoint) {
  if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
    return "\uFFFD";
  }
  if (codePoint in decode_json_1.default) {
    codePoint = decode_json_1.default[codePoint];
  }
  return fromCodePoint(codePoint);
}
decode_codepoint.default = decodeCodePoint;
const Aacute$1 = "\xC1";
const aacute$1 = "\xE1";
const Abreve = "\u0102";
const abreve = "\u0103";
const ac = "\u223E";
const acd = "\u223F";
const acE = "\u223E\u0333";
const Acirc$1 = "\xC2";
const acirc$1 = "\xE2";
const acute$1 = "\xB4";
const Acy = "\u0410";
const acy = "\u0430";
const AElig$1 = "\xC6";
const aelig$1 = "\xE6";
const af = "\u2061";
const Afr = "\u{1D504}";
const afr = "\u{1D51E}";
const Agrave$1 = "\xC0";
const agrave$1 = "\xE0";
const alefsym = "\u2135";
const aleph = "\u2135";
const Alpha = "\u0391";
const alpha = "\u03B1";
const Amacr = "\u0100";
const amacr = "\u0101";
const amalg = "\u2A3F";
const amp$2 = "&";
const AMP$1 = "&";
const andand = "\u2A55";
const And = "\u2A53";
const and = "\u2227";
const andd = "\u2A5C";
const andslope = "\u2A58";
const andv = "\u2A5A";
const ang = "\u2220";
const ange = "\u29A4";
const angle = "\u2220";
const angmsdaa = "\u29A8";
const angmsdab = "\u29A9";
const angmsdac = "\u29AA";
const angmsdad = "\u29AB";
const angmsdae = "\u29AC";
const angmsdaf = "\u29AD";
const angmsdag = "\u29AE";
const angmsdah = "\u29AF";
const angmsd = "\u2221";
const angrt = "\u221F";
const angrtvb = "\u22BE";
const angrtvbd = "\u299D";
const angsph = "\u2222";
const angst = "\xC5";
const angzarr = "\u237C";
const Aogon = "\u0104";
const aogon = "\u0105";
const Aopf = "\u{1D538}";
const aopf = "\u{1D552}";
const apacir = "\u2A6F";
const ap = "\u2248";
const apE = "\u2A70";
const ape = "\u224A";
const apid = "\u224B";
const apos$1 = "'";
const ApplyFunction = "\u2061";
const approx = "\u2248";
const approxeq = "\u224A";
const Aring$1 = "\xC5";
const aring$1 = "\xE5";
const Ascr = "\u{1D49C}";
const ascr = "\u{1D4B6}";
const Assign = "\u2254";
const ast = "*";
const asymp = "\u2248";
const asympeq = "\u224D";
const Atilde$1 = "\xC3";
const atilde$1 = "\xE3";
const Auml$1 = "\xC4";
const auml$1 = "\xE4";
const awconint = "\u2233";
const awint = "\u2A11";
const backcong = "\u224C";
const backepsilon = "\u03F6";
const backprime = "\u2035";
const backsim = "\u223D";
const backsimeq = "\u22CD";
const Backslash = "\u2216";
const Barv = "\u2AE7";
const barvee = "\u22BD";
const barwed = "\u2305";
const Barwed = "\u2306";
const barwedge = "\u2305";
const bbrk = "\u23B5";
const bbrktbrk = "\u23B6";
const bcong = "\u224C";
const Bcy = "\u0411";
const bcy = "\u0431";
const bdquo = "\u201E";
const becaus = "\u2235";
const because = "\u2235";
const Because = "\u2235";
const bemptyv = "\u29B0";
const bepsi = "\u03F6";
const bernou = "\u212C";
const Bernoullis = "\u212C";
const Beta = "\u0392";
const beta = "\u03B2";
const beth = "\u2136";
const between = "\u226C";
const Bfr = "\u{1D505}";
const bfr = "\u{1D51F}";
const bigcap = "\u22C2";
const bigcirc = "\u25EF";
const bigcup = "\u22C3";
const bigodot = "\u2A00";
const bigoplus = "\u2A01";
const bigotimes = "\u2A02";
const bigsqcup = "\u2A06";
const bigstar = "\u2605";
const bigtriangledown = "\u25BD";
const bigtriangleup = "\u25B3";
const biguplus = "\u2A04";
const bigvee = "\u22C1";
const bigwedge = "\u22C0";
const bkarow = "\u290D";
const blacklozenge = "\u29EB";
const blacksquare = "\u25AA";
const blacktriangle = "\u25B4";
const blacktriangledown = "\u25BE";
const blacktriangleleft = "\u25C2";
const blacktriangleright = "\u25B8";
const blank = "\u2423";
const blk12 = "\u2592";
const blk14 = "\u2591";
const blk34 = "\u2593";
const block = "\u2588";
const bne = "=\u20E5";
const bnequiv = "\u2261\u20E5";
const bNot = "\u2AED";
const bnot = "\u2310";
const Bopf = "\u{1D539}";
const bopf = "\u{1D553}";
const bot = "\u22A5";
const bottom = "\u22A5";
const bowtie = "\u22C8";
const boxbox = "\u29C9";
const boxdl = "\u2510";
const boxdL = "\u2555";
const boxDl = "\u2556";
const boxDL = "\u2557";
const boxdr = "\u250C";
const boxdR = "\u2552";
const boxDr = "\u2553";
const boxDR = "\u2554";
const boxh = "\u2500";
const boxH = "\u2550";
const boxhd = "\u252C";
const boxHd = "\u2564";
const boxhD = "\u2565";
const boxHD = "\u2566";
const boxhu = "\u2534";
const boxHu = "\u2567";
const boxhU = "\u2568";
const boxHU = "\u2569";
const boxminus = "\u229F";
const boxplus = "\u229E";
const boxtimes = "\u22A0";
const boxul = "\u2518";
const boxuL = "\u255B";
const boxUl = "\u255C";
const boxUL = "\u255D";
const boxur = "\u2514";
const boxuR = "\u2558";
const boxUr = "\u2559";
const boxUR = "\u255A";
const boxv = "\u2502";
const boxV = "\u2551";
const boxvh = "\u253C";
const boxvH = "\u256A";
const boxVh = "\u256B";
const boxVH = "\u256C";
const boxvl = "\u2524";
const boxvL = "\u2561";
const boxVl = "\u2562";
const boxVL = "\u2563";
const boxvr = "\u251C";
const boxvR = "\u255E";
const boxVr = "\u255F";
const boxVR = "\u2560";
const bprime = "\u2035";
const breve = "\u02D8";
const Breve = "\u02D8";
const brvbar$1 = "\xA6";
const bscr = "\u{1D4B7}";
const Bscr = "\u212C";
const bsemi = "\u204F";
const bsim = "\u223D";
const bsime = "\u22CD";
const bsolb = "\u29C5";
const bsol = "\\";
const bsolhsub = "\u27C8";
const bull = "\u2022";
const bullet = "\u2022";
const bump = "\u224E";
const bumpE = "\u2AAE";
const bumpe = "\u224F";
const Bumpeq = "\u224E";
const bumpeq = "\u224F";
const Cacute = "\u0106";
const cacute = "\u0107";
const capand = "\u2A44";
const capbrcup = "\u2A49";
const capcap = "\u2A4B";
const cap = "\u2229";
const Cap = "\u22D2";
const capcup = "\u2A47";
const capdot = "\u2A40";
const CapitalDifferentialD = "\u2145";
const caps = "\u2229\uFE00";
const caret = "\u2041";
const caron = "\u02C7";
const Cayleys = "\u212D";
const ccaps = "\u2A4D";
const Ccaron = "\u010C";
const ccaron = "\u010D";
const Ccedil$1 = "\xC7";
const ccedil$1 = "\xE7";
const Ccirc = "\u0108";
const ccirc = "\u0109";
const Cconint = "\u2230";
const ccups = "\u2A4C";
const ccupssm = "\u2A50";
const Cdot = "\u010A";
const cdot = "\u010B";
const cedil$1 = "\xB8";
const Cedilla = "\xB8";
const cemptyv = "\u29B2";
const cent$1 = "\xA2";
const centerdot = "\xB7";
const CenterDot = "\xB7";
const cfr = "\u{1D520}";
const Cfr = "\u212D";
const CHcy = "\u0427";
const chcy = "\u0447";
const check = "\u2713";
const checkmark = "\u2713";
const Chi = "\u03A7";
const chi = "\u03C7";
const circ = "\u02C6";
const circeq = "\u2257";
const circlearrowleft = "\u21BA";
const circlearrowright = "\u21BB";
const circledast = "\u229B";
const circledcirc = "\u229A";
const circleddash = "\u229D";
const CircleDot = "\u2299";
const circledR = "\xAE";
const circledS = "\u24C8";
const CircleMinus = "\u2296";
const CirclePlus = "\u2295";
const CircleTimes = "\u2297";
const cir = "\u25CB";
const cirE = "\u29C3";
const cire = "\u2257";
const cirfnint = "\u2A10";
const cirmid = "\u2AEF";
const cirscir = "\u29C2";
const ClockwiseContourIntegral = "\u2232";
const CloseCurlyDoubleQuote = "\u201D";
const CloseCurlyQuote = "\u2019";
const clubs = "\u2663";
const clubsuit = "\u2663";
const colon = ":";
const Colon = "\u2237";
const Colone = "\u2A74";
const colone = "\u2254";
const coloneq = "\u2254";
const comma = ",";
const commat = "@";
const comp = "\u2201";
const compfn = "\u2218";
const complement = "\u2201";
const complexes = "\u2102";
const cong = "\u2245";
const congdot = "\u2A6D";
const Congruent = "\u2261";
const conint = "\u222E";
const Conint = "\u222F";
const ContourIntegral = "\u222E";
const copf = "\u{1D554}";
const Copf = "\u2102";
const coprod = "\u2210";
const Coproduct = "\u2210";
const copy$1 = "\xA9";
const COPY$1 = "\xA9";
const copysr = "\u2117";
const CounterClockwiseContourIntegral = "\u2233";
const crarr = "\u21B5";
const cross = "\u2717";
const Cross = "\u2A2F";
const Cscr = "\u{1D49E}";
const cscr = "\u{1D4B8}";
const csub = "\u2ACF";
const csube = "\u2AD1";
const csup = "\u2AD0";
const csupe = "\u2AD2";
const ctdot = "\u22EF";
const cudarrl = "\u2938";
const cudarrr = "\u2935";
const cuepr = "\u22DE";
const cuesc = "\u22DF";
const cularr = "\u21B6";
const cularrp = "\u293D";
const cupbrcap = "\u2A48";
const cupcap = "\u2A46";
const CupCap = "\u224D";
const cup = "\u222A";
const Cup = "\u22D3";
const cupcup = "\u2A4A";
const cupdot = "\u228D";
const cupor = "\u2A45";
const cups = "\u222A\uFE00";
const curarr = "\u21B7";
const curarrm = "\u293C";
const curlyeqprec = "\u22DE";
const curlyeqsucc = "\u22DF";
const curlyvee = "\u22CE";
const curlywedge = "\u22CF";
const curren$1 = "\xA4";
const curvearrowleft = "\u21B6";
const curvearrowright = "\u21B7";
const cuvee = "\u22CE";
const cuwed = "\u22CF";
const cwconint = "\u2232";
const cwint = "\u2231";
const cylcty = "\u232D";
const dagger = "\u2020";
const Dagger = "\u2021";
const daleth = "\u2138";
const darr = "\u2193";
const Darr = "\u21A1";
const dArr = "\u21D3";
const dash = "\u2010";
const Dashv = "\u2AE4";
const dashv = "\u22A3";
const dbkarow = "\u290F";
const dblac = "\u02DD";
const Dcaron = "\u010E";
const dcaron = "\u010F";
const Dcy = "\u0414";
const dcy = "\u0434";
const ddagger = "\u2021";
const ddarr = "\u21CA";
const DD = "\u2145";
const dd = "\u2146";
const DDotrahd = "\u2911";
const ddotseq = "\u2A77";
const deg$1 = "\xB0";
const Del = "\u2207";
const Delta = "\u0394";
const delta = "\u03B4";
const demptyv = "\u29B1";
const dfisht = "\u297F";
const Dfr = "\u{1D507}";
const dfr = "\u{1D521}";
const dHar = "\u2965";
const dharl = "\u21C3";
const dharr = "\u21C2";
const DiacriticalAcute = "\xB4";
const DiacriticalDot = "\u02D9";
const DiacriticalDoubleAcute = "\u02DD";
const DiacriticalGrave = "`";
const DiacriticalTilde = "\u02DC";
const diam = "\u22C4";
const diamond = "\u22C4";
const Diamond = "\u22C4";
const diamondsuit = "\u2666";
const diams = "\u2666";
const die = "\xA8";
const DifferentialD = "\u2146";
const digamma = "\u03DD";
const disin = "\u22F2";
const div = "\xF7";
const divide$1 = "\xF7";
const divideontimes = "\u22C7";
const divonx = "\u22C7";
const DJcy = "\u0402";
const djcy = "\u0452";
const dlcorn = "\u231E";
const dlcrop = "\u230D";
const dollar = "$";
const Dopf = "\u{1D53B}";
const dopf = "\u{1D555}";
const Dot = "\xA8";
const dot = "\u02D9";
const DotDot = "\u20DC";
const doteq = "\u2250";
const doteqdot = "\u2251";
const DotEqual = "\u2250";
const dotminus = "\u2238";
const dotplus = "\u2214";
const dotsquare = "\u22A1";
const doublebarwedge = "\u2306";
const DoubleContourIntegral = "\u222F";
const DoubleDot = "\xA8";
const DoubleDownArrow = "\u21D3";
const DoubleLeftArrow = "\u21D0";
const DoubleLeftRightArrow = "\u21D4";
const DoubleLeftTee = "\u2AE4";
const DoubleLongLeftArrow = "\u27F8";
const DoubleLongLeftRightArrow = "\u27FA";
const DoubleLongRightArrow = "\u27F9";
const DoubleRightArrow = "\u21D2";
const DoubleRightTee = "\u22A8";
const DoubleUpArrow = "\u21D1";
const DoubleUpDownArrow = "\u21D5";
const DoubleVerticalBar = "\u2225";
const DownArrowBar = "\u2913";
const downarrow = "\u2193";
const DownArrow = "\u2193";
const Downarrow = "\u21D3";
const DownArrowUpArrow = "\u21F5";
const DownBreve = "\u0311";
const downdownarrows = "\u21CA";
const downharpoonleft = "\u21C3";
const downharpoonright = "\u21C2";
const DownLeftRightVector = "\u2950";
const DownLeftTeeVector = "\u295E";
const DownLeftVectorBar = "\u2956";
const DownLeftVector = "\u21BD";
const DownRightTeeVector = "\u295F";
const DownRightVectorBar = "\u2957";
const DownRightVector = "\u21C1";
const DownTeeArrow = "\u21A7";
const DownTee = "\u22A4";
const drbkarow = "\u2910";
const drcorn = "\u231F";
const drcrop = "\u230C";
const Dscr = "\u{1D49F}";
const dscr = "\u{1D4B9}";
const DScy = "\u0405";
const dscy = "\u0455";
const dsol = "\u29F6";
const Dstrok = "\u0110";
const dstrok = "\u0111";
const dtdot = "\u22F1";
const dtri = "\u25BF";
const dtrif = "\u25BE";
const duarr = "\u21F5";
const duhar = "\u296F";
const dwangle = "\u29A6";
const DZcy = "\u040F";
const dzcy = "\u045F";
const dzigrarr = "\u27FF";
const Eacute$1 = "\xC9";
const eacute$1 = "\xE9";
const easter = "\u2A6E";
const Ecaron = "\u011A";
const ecaron = "\u011B";
const Ecirc$1 = "\xCA";
const ecirc$1 = "\xEA";
const ecir = "\u2256";
const ecolon = "\u2255";
const Ecy = "\u042D";
const ecy = "\u044D";
const eDDot = "\u2A77";
const Edot = "\u0116";
const edot = "\u0117";
const eDot = "\u2251";
const ee = "\u2147";
const efDot = "\u2252";
const Efr = "\u{1D508}";
const efr = "\u{1D522}";
const eg = "\u2A9A";
const Egrave$1 = "\xC8";
const egrave$1 = "\xE8";
const egs = "\u2A96";
const egsdot = "\u2A98";
const el = "\u2A99";
const Element$1 = "\u2208";
const elinters = "\u23E7";
const ell = "\u2113";
const els = "\u2A95";
const elsdot = "\u2A97";
const Emacr = "\u0112";
const emacr = "\u0113";
const empty = "\u2205";
const emptyset = "\u2205";
const EmptySmallSquare = "\u25FB";
const emptyv = "\u2205";
const EmptyVerySmallSquare = "\u25AB";
const emsp13 = "\u2004";
const emsp14 = "\u2005";
const emsp = "\u2003";
const ENG = "\u014A";
const eng = "\u014B";
const ensp = "\u2002";
const Eogon = "\u0118";
const eogon = "\u0119";
const Eopf = "\u{1D53C}";
const eopf = "\u{1D556}";
const epar = "\u22D5";
const eparsl = "\u29E3";
const eplus = "\u2A71";
const epsi = "\u03B5";
const Epsilon = "\u0395";
const epsilon = "\u03B5";
const epsiv = "\u03F5";
const eqcirc = "\u2256";
const eqcolon = "\u2255";
const eqsim = "\u2242";
const eqslantgtr = "\u2A96";
const eqslantless = "\u2A95";
const Equal = "\u2A75";
const equals = "=";
const EqualTilde = "\u2242";
const equest = "\u225F";
const Equilibrium = "\u21CC";
const equiv = "\u2261";
const equivDD = "\u2A78";
const eqvparsl = "\u29E5";
const erarr = "\u2971";
const erDot = "\u2253";
const escr = "\u212F";
const Escr = "\u2130";
const esdot = "\u2250";
const Esim = "\u2A73";
const esim = "\u2242";
const Eta = "\u0397";
const eta = "\u03B7";
const ETH$1 = "\xD0";
const eth$1 = "\xF0";
const Euml$1 = "\xCB";
const euml$1 = "\xEB";
const euro = "\u20AC";
const excl = "!";
const exist = "\u2203";
const Exists = "\u2203";
const expectation = "\u2130";
const exponentiale = "\u2147";
const ExponentialE = "\u2147";
const fallingdotseq = "\u2252";
const Fcy = "\u0424";
const fcy = "\u0444";
const female = "\u2640";
const ffilig = "\uFB03";
const fflig = "\uFB00";
const ffllig = "\uFB04";
const Ffr = "\u{1D509}";
const ffr = "\u{1D523}";
const filig = "\uFB01";
const FilledSmallSquare = "\u25FC";
const FilledVerySmallSquare = "\u25AA";
const fjlig = "fj";
const flat = "\u266D";
const fllig = "\uFB02";
const fltns = "\u25B1";
const fnof = "\u0192";
const Fopf = "\u{1D53D}";
const fopf = "\u{1D557}";
const forall = "\u2200";
const ForAll = "\u2200";
const fork = "\u22D4";
const forkv = "\u2AD9";
const Fouriertrf = "\u2131";
const fpartint = "\u2A0D";
const frac12$1 = "\xBD";
const frac13 = "\u2153";
const frac14$1 = "\xBC";
const frac15 = "\u2155";
const frac16 = "\u2159";
const frac18 = "\u215B";
const frac23 = "\u2154";
const frac25 = "\u2156";
const frac34$1 = "\xBE";
const frac35 = "\u2157";
const frac38 = "\u215C";
const frac45 = "\u2158";
const frac56 = "\u215A";
const frac58 = "\u215D";
const frac78 = "\u215E";
const frasl = "\u2044";
const frown = "\u2322";
const fscr = "\u{1D4BB}";
const Fscr = "\u2131";
const gacute = "\u01F5";
const Gamma = "\u0393";
const gamma = "\u03B3";
const Gammad = "\u03DC";
const gammad = "\u03DD";
const gap = "\u2A86";
const Gbreve = "\u011E";
const gbreve = "\u011F";
const Gcedil = "\u0122";
const Gcirc = "\u011C";
const gcirc = "\u011D";
const Gcy = "\u0413";
const gcy = "\u0433";
const Gdot = "\u0120";
const gdot = "\u0121";
const ge = "\u2265";
const gE = "\u2267";
const gEl = "\u2A8C";
const gel = "\u22DB";
const geq = "\u2265";
const geqq = "\u2267";
const geqslant = "\u2A7E";
const gescc = "\u2AA9";
const ges = "\u2A7E";
const gesdot = "\u2A80";
const gesdoto = "\u2A82";
const gesdotol = "\u2A84";
const gesl = "\u22DB\uFE00";
const gesles = "\u2A94";
const Gfr = "\u{1D50A}";
const gfr = "\u{1D524}";
const gg = "\u226B";
const Gg = "\u22D9";
const ggg = "\u22D9";
const gimel = "\u2137";
const GJcy = "\u0403";
const gjcy = "\u0453";
const gla = "\u2AA5";
const gl = "\u2277";
const glE = "\u2A92";
const glj = "\u2AA4";
const gnap = "\u2A8A";
const gnapprox = "\u2A8A";
const gne = "\u2A88";
const gnE = "\u2269";
const gneq = "\u2A88";
const gneqq = "\u2269";
const gnsim = "\u22E7";
const Gopf = "\u{1D53E}";
const gopf = "\u{1D558}";
const grave = "`";
const GreaterEqual = "\u2265";
const GreaterEqualLess = "\u22DB";
const GreaterFullEqual = "\u2267";
const GreaterGreater = "\u2AA2";
const GreaterLess = "\u2277";
const GreaterSlantEqual = "\u2A7E";
const GreaterTilde = "\u2273";
const Gscr = "\u{1D4A2}";
const gscr = "\u210A";
const gsim = "\u2273";
const gsime = "\u2A8E";
const gsiml = "\u2A90";
const gtcc = "\u2AA7";
const gtcir = "\u2A7A";
const gt$2 = ">";
const GT$1 = ">";
const Gt = "\u226B";
const gtdot = "\u22D7";
const gtlPar = "\u2995";
const gtquest = "\u2A7C";
const gtrapprox = "\u2A86";
const gtrarr = "\u2978";
const gtrdot = "\u22D7";
const gtreqless = "\u22DB";
const gtreqqless = "\u2A8C";
const gtrless = "\u2277";
const gtrsim = "\u2273";
const gvertneqq = "\u2269\uFE00";
const gvnE = "\u2269\uFE00";
const Hacek = "\u02C7";
const hairsp = "\u200A";
const half = "\xBD";
const hamilt = "\u210B";
const HARDcy = "\u042A";
const hardcy = "\u044A";
const harrcir = "\u2948";
const harr = "\u2194";
const hArr = "\u21D4";
const harrw = "\u21AD";
const Hat = "^";
const hbar = "\u210F";
const Hcirc = "\u0124";
const hcirc = "\u0125";
const hearts = "\u2665";
const heartsuit = "\u2665";
const hellip = "\u2026";
const hercon = "\u22B9";
const hfr = "\u{1D525}";
const Hfr = "\u210C";
const HilbertSpace = "\u210B";
const hksearow = "\u2925";
const hkswarow = "\u2926";
const hoarr = "\u21FF";
const homtht = "\u223B";
const hookleftarrow = "\u21A9";
const hookrightarrow = "\u21AA";
const hopf = "\u{1D559}";
const Hopf = "\u210D";
const horbar = "\u2015";
const HorizontalLine = "\u2500";
const hscr = "\u{1D4BD}";
const Hscr = "\u210B";
const hslash = "\u210F";
const Hstrok = "\u0126";
const hstrok = "\u0127";
const HumpDownHump = "\u224E";
const HumpEqual = "\u224F";
const hybull = "\u2043";
const hyphen = "\u2010";
const Iacute$1 = "\xCD";
const iacute$1 = "\xED";
const ic = "\u2063";
const Icirc$1 = "\xCE";
const icirc$1 = "\xEE";
const Icy = "\u0418";
const icy = "\u0438";
const Idot = "\u0130";
const IEcy = "\u0415";
const iecy = "\u0435";
const iexcl$1 = "\xA1";
const iff = "\u21D4";
const ifr = "\u{1D526}";
const Ifr = "\u2111";
const Igrave$1 = "\xCC";
const igrave$1 = "\xEC";
const ii = "\u2148";
const iiiint = "\u2A0C";
const iiint = "\u222D";
const iinfin = "\u29DC";
const iiota = "\u2129";
const IJlig = "\u0132";
const ijlig = "\u0133";
const Imacr = "\u012A";
const imacr = "\u012B";
const image = "\u2111";
const ImaginaryI = "\u2148";
const imagline = "\u2110";
const imagpart = "\u2111";
const imath = "\u0131";
const Im = "\u2111";
const imof = "\u22B7";
const imped = "\u01B5";
const Implies = "\u21D2";
const incare = "\u2105";
const infin = "\u221E";
const infintie = "\u29DD";
const inodot = "\u0131";
const intcal = "\u22BA";
const int = "\u222B";
const Int = "\u222C";
const integers = "\u2124";
const Integral = "\u222B";
const intercal = "\u22BA";
const Intersection = "\u22C2";
const intlarhk = "\u2A17";
const intprod = "\u2A3C";
const InvisibleComma = "\u2063";
const InvisibleTimes = "\u2062";
const IOcy = "\u0401";
const iocy = "\u0451";
const Iogon = "\u012E";
const iogon = "\u012F";
const Iopf = "\u{1D540}";
const iopf = "\u{1D55A}";
const Iota = "\u0399";
const iota = "\u03B9";
const iprod = "\u2A3C";
const iquest$1 = "\xBF";
const iscr = "\u{1D4BE}";
const Iscr = "\u2110";
const isin = "\u2208";
const isindot = "\u22F5";
const isinE = "\u22F9";
const isins = "\u22F4";
const isinsv = "\u22F3";
const isinv = "\u2208";
const it = "\u2062";
const Itilde = "\u0128";
const itilde = "\u0129";
const Iukcy = "\u0406";
const iukcy = "\u0456";
const Iuml$1 = "\xCF";
const iuml$1 = "\xEF";
const Jcirc = "\u0134";
const jcirc = "\u0135";
const Jcy = "\u0419";
const jcy = "\u0439";
const Jfr = "\u{1D50D}";
const jfr = "\u{1D527}";
const jmath = "\u0237";
const Jopf = "\u{1D541}";
const jopf = "\u{1D55B}";
const Jscr = "\u{1D4A5}";
const jscr = "\u{1D4BF}";
const Jsercy = "\u0408";
const jsercy = "\u0458";
const Jukcy = "\u0404";
const jukcy = "\u0454";
const Kappa = "\u039A";
const kappa = "\u03BA";
const kappav = "\u03F0";
const Kcedil = "\u0136";
const kcedil = "\u0137";
const Kcy = "\u041A";
const kcy = "\u043A";
const Kfr = "\u{1D50E}";
const kfr = "\u{1D528}";
const kgreen = "\u0138";
const KHcy = "\u0425";
const khcy = "\u0445";
const KJcy = "\u040C";
const kjcy = "\u045C";
const Kopf = "\u{1D542}";
const kopf = "\u{1D55C}";
const Kscr = "\u{1D4A6}";
const kscr = "\u{1D4C0}";
const lAarr = "\u21DA";
const Lacute = "\u0139";
const lacute = "\u013A";
const laemptyv = "\u29B4";
const lagran = "\u2112";
const Lambda = "\u039B";
const lambda = "\u03BB";
const lang = "\u27E8";
const Lang = "\u27EA";
const langd = "\u2991";
const langle = "\u27E8";
const lap = "\u2A85";
const Laplacetrf = "\u2112";
const laquo$1 = "\xAB";
const larrb = "\u21E4";
const larrbfs = "\u291F";
const larr = "\u2190";
const Larr = "\u219E";
const lArr = "\u21D0";
const larrfs = "\u291D";
const larrhk = "\u21A9";
const larrlp = "\u21AB";
const larrpl = "\u2939";
const larrsim = "\u2973";
const larrtl = "\u21A2";
const latail = "\u2919";
const lAtail = "\u291B";
const lat = "\u2AAB";
const late = "\u2AAD";
const lates = "\u2AAD\uFE00";
const lbarr = "\u290C";
const lBarr = "\u290E";
const lbbrk = "\u2772";
const lbrace = "{";
const lbrack = "[";
const lbrke = "\u298B";
const lbrksld = "\u298F";
const lbrkslu = "\u298D";
const Lcaron = "\u013D";
const lcaron = "\u013E";
const Lcedil = "\u013B";
const lcedil = "\u013C";
const lceil = "\u2308";
const lcub = "{";
const Lcy = "\u041B";
const lcy = "\u043B";
const ldca = "\u2936";
const ldquo = "\u201C";
const ldquor = "\u201E";
const ldrdhar = "\u2967";
const ldrushar = "\u294B";
const ldsh = "\u21B2";
const le = "\u2264";
const lE = "\u2266";
const LeftAngleBracket = "\u27E8";
const LeftArrowBar = "\u21E4";
const leftarrow = "\u2190";
const LeftArrow = "\u2190";
const Leftarrow = "\u21D0";
const LeftArrowRightArrow = "\u21C6";
const leftarrowtail = "\u21A2";
const LeftCeiling = "\u2308";
const LeftDoubleBracket = "\u27E6";
const LeftDownTeeVector = "\u2961";
const LeftDownVectorBar = "\u2959";
const LeftDownVector = "\u21C3";
const LeftFloor = "\u230A";
const leftharpoondown = "\u21BD";
const leftharpoonup = "\u21BC";
const leftleftarrows = "\u21C7";
const leftrightarrow = "\u2194";
const LeftRightArrow = "\u2194";
const Leftrightarrow = "\u21D4";
const leftrightarrows = "\u21C6";
const leftrightharpoons = "\u21CB";
const leftrightsquigarrow = "\u21AD";
const LeftRightVector = "\u294E";
const LeftTeeArrow = "\u21A4";
const LeftTee = "\u22A3";
const LeftTeeVector = "\u295A";
const leftthreetimes = "\u22CB";
const LeftTriangleBar = "\u29CF";
const LeftTriangle = "\u22B2";
const LeftTriangleEqual = "\u22B4";
const LeftUpDownVector = "\u2951";
const LeftUpTeeVector = "\u2960";
const LeftUpVectorBar = "\u2958";
const LeftUpVector = "\u21BF";
const LeftVectorBar = "\u2952";
const LeftVector = "\u21BC";
const lEg = "\u2A8B";
const leg = "\u22DA";
const leq = "\u2264";
const leqq = "\u2266";
const leqslant = "\u2A7D";
const lescc = "\u2AA8";
const les = "\u2A7D";
const lesdot = "\u2A7F";
const lesdoto = "\u2A81";
const lesdotor = "\u2A83";
const lesg = "\u22DA\uFE00";
const lesges = "\u2A93";
const lessapprox = "\u2A85";
const lessdot = "\u22D6";
const lesseqgtr = "\u22DA";
const lesseqqgtr = "\u2A8B";
const LessEqualGreater = "\u22DA";
const LessFullEqual = "\u2266";
const LessGreater = "\u2276";
const lessgtr = "\u2276";
const LessLess = "\u2AA1";
const lesssim = "\u2272";
const LessSlantEqual = "\u2A7D";
const LessTilde = "\u2272";
const lfisht = "\u297C";
const lfloor = "\u230A";
const Lfr = "\u{1D50F}";
const lfr = "\u{1D529}";
const lg = "\u2276";
const lgE = "\u2A91";
const lHar = "\u2962";
const lhard = "\u21BD";
const lharu = "\u21BC";
const lharul = "\u296A";
const lhblk = "\u2584";
const LJcy = "\u0409";
const ljcy = "\u0459";
const llarr = "\u21C7";
const ll = "\u226A";
const Ll = "\u22D8";
const llcorner = "\u231E";
const Lleftarrow = "\u21DA";
const llhard = "\u296B";
const lltri = "\u25FA";
const Lmidot = "\u013F";
const lmidot = "\u0140";
const lmoustache = "\u23B0";
const lmoust = "\u23B0";
const lnap = "\u2A89";
const lnapprox = "\u2A89";
const lne = "\u2A87";
const lnE = "\u2268";
const lneq = "\u2A87";
const lneqq = "\u2268";
const lnsim = "\u22E6";
const loang = "\u27EC";
const loarr = "\u21FD";
const lobrk = "\u27E6";
const longleftarrow = "\u27F5";
const LongLeftArrow = "\u27F5";
const Longleftarrow = "\u27F8";
const longleftrightarrow = "\u27F7";
const LongLeftRightArrow = "\u27F7";
const Longleftrightarrow = "\u27FA";
const longmapsto = "\u27FC";
const longrightarrow = "\u27F6";
const LongRightArrow = "\u27F6";
const Longrightarrow = "\u27F9";
const looparrowleft = "\u21AB";
const looparrowright = "\u21AC";
const lopar = "\u2985";
const Lopf = "\u{1D543}";
const lopf = "\u{1D55D}";
const loplus = "\u2A2D";
const lotimes = "\u2A34";
const lowast = "\u2217";
const lowbar = "_";
const LowerLeftArrow = "\u2199";
const LowerRightArrow = "\u2198";
const loz = "\u25CA";
const lozenge = "\u25CA";
const lozf = "\u29EB";
const lpar = "(";
const lparlt = "\u2993";
const lrarr = "\u21C6";
const lrcorner = "\u231F";
const lrhar = "\u21CB";
const lrhard = "\u296D";
const lrm = "\u200E";
const lrtri = "\u22BF";
const lsaquo = "\u2039";
const lscr = "\u{1D4C1}";
const Lscr = "\u2112";
const lsh = "\u21B0";
const Lsh = "\u21B0";
const lsim = "\u2272";
const lsime = "\u2A8D";
const lsimg = "\u2A8F";
const lsqb = "[";
const lsquo = "\u2018";
const lsquor = "\u201A";
const Lstrok = "\u0141";
const lstrok = "\u0142";
const ltcc = "\u2AA6";
const ltcir = "\u2A79";
const lt$2 = "<";
const LT$1 = "<";
const Lt = "\u226A";
const ltdot = "\u22D6";
const lthree = "\u22CB";
const ltimes = "\u22C9";
const ltlarr = "\u2976";
const ltquest = "\u2A7B";
const ltri = "\u25C3";
const ltrie = "\u22B4";
const ltrif = "\u25C2";
const ltrPar = "\u2996";
const lurdshar = "\u294A";
const luruhar = "\u2966";
const lvertneqq = "\u2268\uFE00";
const lvnE = "\u2268\uFE00";
const macr$1 = "\xAF";
const male = "\u2642";
const malt = "\u2720";
const maltese = "\u2720";
const map = "\u21A6";
const mapsto = "\u21A6";
const mapstodown = "\u21A7";
const mapstoleft = "\u21A4";
const mapstoup = "\u21A5";
const marker = "\u25AE";
const mcomma = "\u2A29";
const Mcy = "\u041C";
const mcy = "\u043C";
const mdash = "\u2014";
const mDDot = "\u223A";
const measuredangle = "\u2221";
const MediumSpace = "\u205F";
const Mellintrf = "\u2133";
const Mfr = "\u{1D510}";
const mfr = "\u{1D52A}";
const mho = "\u2127";
const micro$1 = "\xB5";
const midast = "*";
const midcir = "\u2AF0";
const mid = "\u2223";
const middot$1 = "\xB7";
const minusb = "\u229F";
const minus = "\u2212";
const minusd = "\u2238";
const minusdu = "\u2A2A";
const MinusPlus = "\u2213";
const mlcp = "\u2ADB";
const mldr = "\u2026";
const mnplus = "\u2213";
const models = "\u22A7";
const Mopf = "\u{1D544}";
const mopf = "\u{1D55E}";
const mp = "\u2213";
const mscr = "\u{1D4C2}";
const Mscr = "\u2133";
const mstpos = "\u223E";
const Mu = "\u039C";
const mu = "\u03BC";
const multimap = "\u22B8";
const mumap = "\u22B8";
const nabla = "\u2207";
const Nacute = "\u0143";
const nacute = "\u0144";
const nang = "\u2220\u20D2";
const nap = "\u2249";
const napE = "\u2A70\u0338";
const napid = "\u224B\u0338";
const napos = "\u0149";
const napprox = "\u2249";
const natural = "\u266E";
const naturals = "\u2115";
const natur = "\u266E";
const nbsp$1 = "\xA0";
const nbump = "\u224E\u0338";
const nbumpe = "\u224F\u0338";
const ncap = "\u2A43";
const Ncaron = "\u0147";
const ncaron = "\u0148";
const Ncedil = "\u0145";
const ncedil = "\u0146";
const ncong = "\u2247";
const ncongdot = "\u2A6D\u0338";
const ncup = "\u2A42";
const Ncy = "\u041D";
const ncy = "\u043D";
const ndash = "\u2013";
const nearhk = "\u2924";
const nearr = "\u2197";
const neArr = "\u21D7";
const nearrow = "\u2197";
const ne = "\u2260";
const nedot = "\u2250\u0338";
const NegativeMediumSpace = "\u200B";
const NegativeThickSpace = "\u200B";
const NegativeThinSpace = "\u200B";
const NegativeVeryThinSpace = "\u200B";
const nequiv = "\u2262";
const nesear = "\u2928";
const nesim = "\u2242\u0338";
const NestedGreaterGreater = "\u226B";
const NestedLessLess = "\u226A";
const NewLine = "\n";
const nexist = "\u2204";
const nexists = "\u2204";
const Nfr = "\u{1D511}";
const nfr = "\u{1D52B}";
const ngE = "\u2267\u0338";
const nge = "\u2271";
const ngeq = "\u2271";
const ngeqq = "\u2267\u0338";
const ngeqslant = "\u2A7E\u0338";
const nges = "\u2A7E\u0338";
const nGg = "\u22D9\u0338";
const ngsim = "\u2275";
const nGt = "\u226B\u20D2";
const ngt = "\u226F";
const ngtr = "\u226F";
const nGtv = "\u226B\u0338";
const nharr = "\u21AE";
const nhArr = "\u21CE";
const nhpar = "\u2AF2";
const ni = "\u220B";
const nis = "\u22FC";
const nisd = "\u22FA";
const niv = "\u220B";
const NJcy = "\u040A";
const njcy = "\u045A";
const nlarr = "\u219A";
const nlArr = "\u21CD";
const nldr = "\u2025";
const nlE = "\u2266\u0338";
const nle = "\u2270";
const nleftarrow = "\u219A";
const nLeftarrow = "\u21CD";
const nleftrightarrow = "\u21AE";
const nLeftrightarrow = "\u21CE";
const nleq = "\u2270";
const nleqq = "\u2266\u0338";
const nleqslant = "\u2A7D\u0338";
const nles = "\u2A7D\u0338";
const nless = "\u226E";
const nLl = "\u22D8\u0338";
const nlsim = "\u2274";
const nLt = "\u226A\u20D2";
const nlt = "\u226E";
const nltri = "\u22EA";
const nltrie = "\u22EC";
const nLtv = "\u226A\u0338";
const nmid = "\u2224";
const NoBreak = "\u2060";
const NonBreakingSpace = "\xA0";
const nopf = "\u{1D55F}";
const Nopf = "\u2115";
const Not = "\u2AEC";
const not$1 = "\xAC";
const NotCongruent = "\u2262";
const NotCupCap = "\u226D";
const NotDoubleVerticalBar = "\u2226";
const NotElement = "\u2209";
const NotEqual = "\u2260";
const NotEqualTilde = "\u2242\u0338";
const NotExists = "\u2204";
const NotGreater = "\u226F";
const NotGreaterEqual = "\u2271";
const NotGreaterFullEqual = "\u2267\u0338";
const NotGreaterGreater = "\u226B\u0338";
const NotGreaterLess = "\u2279";
const NotGreaterSlantEqual = "\u2A7E\u0338";
const NotGreaterTilde = "\u2275";
const NotHumpDownHump = "\u224E\u0338";
const NotHumpEqual = "\u224F\u0338";
const notin = "\u2209";
const notindot = "\u22F5\u0338";
const notinE = "\u22F9\u0338";
const notinva = "\u2209";
const notinvb = "\u22F7";
const notinvc = "\u22F6";
const NotLeftTriangleBar = "\u29CF\u0338";
const NotLeftTriangle = "\u22EA";
const NotLeftTriangleEqual = "\u22EC";
const NotLess = "\u226E";
const NotLessEqual = "\u2270";
const NotLessGreater = "\u2278";
const NotLessLess = "\u226A\u0338";
const NotLessSlantEqual = "\u2A7D\u0338";
const NotLessTilde = "\u2274";
const NotNestedGreaterGreater = "\u2AA2\u0338";
const NotNestedLessLess = "\u2AA1\u0338";
const notni = "\u220C";
const notniva = "\u220C";
const notnivb = "\u22FE";
const notnivc = "\u22FD";
const NotPrecedes = "\u2280";
const NotPrecedesEqual = "\u2AAF\u0338";
const NotPrecedesSlantEqual = "\u22E0";
const NotReverseElement = "\u220C";
const NotRightTriangleBar = "\u29D0\u0338";
const NotRightTriangle = "\u22EB";
const NotRightTriangleEqual = "\u22ED";
const NotSquareSubset = "\u228F\u0338";
const NotSquareSubsetEqual = "\u22E2";
const NotSquareSuperset = "\u2290\u0338";
const NotSquareSupersetEqual = "\u22E3";
const NotSubset = "\u2282\u20D2";
const NotSubsetEqual = "\u2288";
const NotSucceeds = "\u2281";
const NotSucceedsEqual = "\u2AB0\u0338";
const NotSucceedsSlantEqual = "\u22E1";
const NotSucceedsTilde = "\u227F\u0338";
const NotSuperset = "\u2283\u20D2";
const NotSupersetEqual = "\u2289";
const NotTilde = "\u2241";
const NotTildeEqual = "\u2244";
const NotTildeFullEqual = "\u2247";
const NotTildeTilde = "\u2249";
const NotVerticalBar = "\u2224";
const nparallel = "\u2226";
const npar = "\u2226";
const nparsl = "\u2AFD\u20E5";
const npart = "\u2202\u0338";
const npolint = "\u2A14";
const npr = "\u2280";
const nprcue = "\u22E0";
const nprec = "\u2280";
const npreceq = "\u2AAF\u0338";
const npre = "\u2AAF\u0338";
const nrarrc = "\u2933\u0338";
const nrarr = "\u219B";
const nrArr = "\u21CF";
const nrarrw = "\u219D\u0338";
const nrightarrow = "\u219B";
const nRightarrow = "\u21CF";
const nrtri = "\u22EB";
const nrtrie = "\u22ED";
const nsc = "\u2281";
const nsccue = "\u22E1";
const nsce = "\u2AB0\u0338";
const Nscr = "\u{1D4A9}";
const nscr = "\u{1D4C3}";
const nshortmid = "\u2224";
const nshortparallel = "\u2226";
const nsim = "\u2241";
const nsime = "\u2244";
const nsimeq = "\u2244";
const nsmid = "\u2224";
const nspar = "\u2226";
const nsqsube = "\u22E2";
const nsqsupe = "\u22E3";
const nsub = "\u2284";
const nsubE = "\u2AC5\u0338";
const nsube = "\u2288";
const nsubset = "\u2282\u20D2";
const nsubseteq = "\u2288";
const nsubseteqq = "\u2AC5\u0338";
const nsucc = "\u2281";
const nsucceq = "\u2AB0\u0338";
const nsup = "\u2285";
const nsupE = "\u2AC6\u0338";
const nsupe = "\u2289";
const nsupset = "\u2283\u20D2";
const nsupseteq = "\u2289";
const nsupseteqq = "\u2AC6\u0338";
const ntgl = "\u2279";
const Ntilde$1 = "\xD1";
const ntilde$1 = "\xF1";
const ntlg = "\u2278";
const ntriangleleft = "\u22EA";
const ntrianglelefteq = "\u22EC";
const ntriangleright = "\u22EB";
const ntrianglerighteq = "\u22ED";
const Nu = "\u039D";
const nu = "\u03BD";
const num = "#";
const numero = "\u2116";
const numsp = "\u2007";
const nvap = "\u224D\u20D2";
const nvdash = "\u22AC";
const nvDash = "\u22AD";
const nVdash = "\u22AE";
const nVDash = "\u22AF";
const nvge = "\u2265\u20D2";
const nvgt = ">\u20D2";
const nvHarr = "\u2904";
const nvinfin = "\u29DE";
const nvlArr = "\u2902";
const nvle = "\u2264\u20D2";
const nvlt = "<\u20D2";
const nvltrie = "\u22B4\u20D2";
const nvrArr = "\u2903";
const nvrtrie = "\u22B5\u20D2";
const nvsim = "\u223C\u20D2";
const nwarhk = "\u2923";
const nwarr = "\u2196";
const nwArr = "\u21D6";
const nwarrow = "\u2196";
const nwnear = "\u2927";
const Oacute$1 = "\xD3";
const oacute$1 = "\xF3";
const oast = "\u229B";
const Ocirc$1 = "\xD4";
const ocirc$1 = "\xF4";
const ocir = "\u229A";
const Ocy = "\u041E";
const ocy = "\u043E";
const odash = "\u229D";
const Odblac = "\u0150";
const odblac = "\u0151";
const odiv = "\u2A38";
const odot = "\u2299";
const odsold = "\u29BC";
const OElig = "\u0152";
const oelig = "\u0153";
const ofcir = "\u29BF";
const Ofr = "\u{1D512}";
const ofr = "\u{1D52C}";
const ogon = "\u02DB";
const Ograve$1 = "\xD2";
const ograve$1 = "\xF2";
const ogt = "\u29C1";
const ohbar = "\u29B5";
const ohm = "\u03A9";
const oint = "\u222E";
const olarr = "\u21BA";
const olcir = "\u29BE";
const olcross = "\u29BB";
const oline = "\u203E";
const olt = "\u29C0";
const Omacr = "\u014C";
const omacr = "\u014D";
const Omega = "\u03A9";
const omega = "\u03C9";
const Omicron = "\u039F";
const omicron = "\u03BF";
const omid = "\u29B6";
const ominus = "\u2296";
const Oopf = "\u{1D546}";
const oopf = "\u{1D560}";
const opar = "\u29B7";
const OpenCurlyDoubleQuote = "\u201C";
const OpenCurlyQuote = "\u2018";
const operp = "\u29B9";
const oplus = "\u2295";
const orarr = "\u21BB";
const Or = "\u2A54";
const or = "\u2228";
const ord = "\u2A5D";
const order = "\u2134";
const orderof = "\u2134";
const ordf$1 = "\xAA";
const ordm$1 = "\xBA";
const origof = "\u22B6";
const oror = "\u2A56";
const orslope = "\u2A57";
const orv = "\u2A5B";
const oS = "\u24C8";
const Oscr = "\u{1D4AA}";
const oscr = "\u2134";
const Oslash$1 = "\xD8";
const oslash$1 = "\xF8";
const osol = "\u2298";
const Otilde$1 = "\xD5";
const otilde$1 = "\xF5";
const otimesas = "\u2A36";
const Otimes = "\u2A37";
const otimes = "\u2297";
const Ouml$1 = "\xD6";
const ouml$1 = "\xF6";
const ovbar = "\u233D";
const OverBar = "\u203E";
const OverBrace = "\u23DE";
const OverBracket = "\u23B4";
const OverParenthesis = "\u23DC";
const para$1 = "\xB6";
const parallel = "\u2225";
const par = "\u2225";
const parsim = "\u2AF3";
const parsl = "\u2AFD";
const part = "\u2202";
const PartialD = "\u2202";
const Pcy = "\u041F";
const pcy = "\u043F";
const percnt = "%";
const period = ".";
const permil = "\u2030";
const perp = "\u22A5";
const pertenk = "\u2031";
const Pfr = "\u{1D513}";
const pfr = "\u{1D52D}";
const Phi = "\u03A6";
const phi = "\u03C6";
const phiv = "\u03D5";
const phmmat = "\u2133";
const phone = "\u260E";
const Pi = "\u03A0";
const pi = "\u03C0";
const pitchfork = "\u22D4";
const piv = "\u03D6";
const planck = "\u210F";
const planckh = "\u210E";
const plankv = "\u210F";
const plusacir = "\u2A23";
const plusb = "\u229E";
const pluscir = "\u2A22";
const plus = "+";
const plusdo = "\u2214";
const plusdu = "\u2A25";
const pluse = "\u2A72";
const PlusMinus = "\xB1";
const plusmn$1 = "\xB1";
const plussim = "\u2A26";
const plustwo = "\u2A27";
const pm = "\xB1";
const Poincareplane = "\u210C";
const pointint = "\u2A15";
const popf = "\u{1D561}";
const Popf = "\u2119";
const pound$1 = "\xA3";
const prap = "\u2AB7";
const Pr = "\u2ABB";
const pr = "\u227A";
const prcue = "\u227C";
const precapprox = "\u2AB7";
const prec = "\u227A";
const preccurlyeq = "\u227C";
const Precedes = "\u227A";
const PrecedesEqual = "\u2AAF";
const PrecedesSlantEqual = "\u227C";
const PrecedesTilde = "\u227E";
const preceq = "\u2AAF";
const precnapprox = "\u2AB9";
const precneqq = "\u2AB5";
const precnsim = "\u22E8";
const pre = "\u2AAF";
const prE = "\u2AB3";
const precsim = "\u227E";
const prime = "\u2032";
const Prime = "\u2033";
const primes = "\u2119";
const prnap = "\u2AB9";
const prnE = "\u2AB5";
const prnsim = "\u22E8";
const prod = "\u220F";
const Product = "\u220F";
const profalar = "\u232E";
const profline = "\u2312";
const profsurf = "\u2313";
const prop = "\u221D";
const Proportional = "\u221D";
const Proportion = "\u2237";
const propto = "\u221D";
const prsim = "\u227E";
const prurel = "\u22B0";
const Pscr = "\u{1D4AB}";
const pscr = "\u{1D4C5}";
const Psi = "\u03A8";
const psi = "\u03C8";
const puncsp = "\u2008";
const Qfr = "\u{1D514}";
const qfr = "\u{1D52E}";
const qint = "\u2A0C";
const qopf = "\u{1D562}";
const Qopf = "\u211A";
const qprime = "\u2057";
const Qscr = "\u{1D4AC}";
const qscr = "\u{1D4C6}";
const quaternions = "\u210D";
const quatint = "\u2A16";
const quest = "?";
const questeq = "\u225F";
const quot$2 = '"';
const QUOT$1 = '"';
const rAarr = "\u21DB";
const race = "\u223D\u0331";
const Racute = "\u0154";
const racute = "\u0155";
const radic = "\u221A";
const raemptyv = "\u29B3";
const rang = "\u27E9";
const Rang = "\u27EB";
const rangd = "\u2992";
const range = "\u29A5";
const rangle = "\u27E9";
const raquo$1 = "\xBB";
const rarrap = "\u2975";
const rarrb = "\u21E5";
const rarrbfs = "\u2920";
const rarrc = "\u2933";
const rarr = "\u2192";
const Rarr = "\u21A0";
const rArr = "\u21D2";
const rarrfs = "\u291E";
const rarrhk = "\u21AA";
const rarrlp = "\u21AC";
const rarrpl = "\u2945";
const rarrsim = "\u2974";
const Rarrtl = "\u2916";
const rarrtl = "\u21A3";
const rarrw = "\u219D";
const ratail = "\u291A";
const rAtail = "\u291C";
const ratio = "\u2236";
const rationals = "\u211A";
const rbarr = "\u290D";
const rBarr = "\u290F";
const RBarr = "\u2910";
const rbbrk = "\u2773";
const rbrace = "}";
const rbrack = "]";
const rbrke = "\u298C";
const rbrksld = "\u298E";
const rbrkslu = "\u2990";
const Rcaron = "\u0158";
const rcaron = "\u0159";
const Rcedil = "\u0156";
const rcedil = "\u0157";
const rceil = "\u2309";
const rcub = "}";
const Rcy = "\u0420";
const rcy = "\u0440";
const rdca = "\u2937";
const rdldhar = "\u2969";
const rdquo = "\u201D";
const rdquor = "\u201D";
const rdsh = "\u21B3";
const real = "\u211C";
const realine = "\u211B";
const realpart = "\u211C";
const reals = "\u211D";
const Re = "\u211C";
const rect = "\u25AD";
const reg$1 = "\xAE";
const REG$1 = "\xAE";
const ReverseElement = "\u220B";
const ReverseEquilibrium = "\u21CB";
const ReverseUpEquilibrium = "\u296F";
const rfisht = "\u297D";
const rfloor = "\u230B";
const rfr = "\u{1D52F}";
const Rfr = "\u211C";
const rHar = "\u2964";
const rhard = "\u21C1";
const rharu = "\u21C0";
const rharul = "\u296C";
const Rho = "\u03A1";
const rho = "\u03C1";
const rhov = "\u03F1";
const RightAngleBracket = "\u27E9";
const RightArrowBar = "\u21E5";
const rightarrow = "\u2192";
const RightArrow = "\u2192";
const Rightarrow = "\u21D2";
const RightArrowLeftArrow = "\u21C4";
const rightarrowtail = "\u21A3";
const RightCeiling = "\u2309";
const RightDoubleBracket = "\u27E7";
const RightDownTeeVector = "\u295D";
const RightDownVectorBar = "\u2955";
const RightDownVector = "\u21C2";
const RightFloor = "\u230B";
const rightharpoondown = "\u21C1";
const rightharpoonup = "\u21C0";
const rightleftarrows = "\u21C4";
const rightleftharpoons = "\u21CC";
const rightrightarrows = "\u21C9";
const rightsquigarrow = "\u219D";
const RightTeeArrow = "\u21A6";
const RightTee = "\u22A2";
const RightTeeVector = "\u295B";
const rightthreetimes = "\u22CC";
const RightTriangleBar = "\u29D0";
const RightTriangle = "\u22B3";
const RightTriangleEqual = "\u22B5";
const RightUpDownVector = "\u294F";
const RightUpTeeVector = "\u295C";
const RightUpVectorBar = "\u2954";
const RightUpVector = "\u21BE";
const RightVectorBar = "\u2953";
const RightVector = "\u21C0";
const ring = "\u02DA";
const risingdotseq = "\u2253";
const rlarr = "\u21C4";
const rlhar = "\u21CC";
const rlm = "\u200F";
const rmoustache = "\u23B1";
const rmoust = "\u23B1";
const rnmid = "\u2AEE";
const roang = "\u27ED";
const roarr = "\u21FE";
const robrk = "\u27E7";
const ropar = "\u2986";
const ropf = "\u{1D563}";
const Ropf = "\u211D";
const roplus = "\u2A2E";
const rotimes = "\u2A35";
const RoundImplies = "\u2970";
const rpar = ")";
const rpargt = "\u2994";
const rppolint = "\u2A12";
const rrarr = "\u21C9";
const Rrightarrow = "\u21DB";
const rsaquo = "\u203A";
const rscr = "\u{1D4C7}";
const Rscr = "\u211B";
const rsh = "\u21B1";
const Rsh = "\u21B1";
const rsqb = "]";
const rsquo = "\u2019";
const rsquor = "\u2019";
const rthree = "\u22CC";
const rtimes = "\u22CA";
const rtri = "\u25B9";
const rtrie = "\u22B5";
const rtrif = "\u25B8";
const rtriltri = "\u29CE";
const RuleDelayed = "\u29F4";
const ruluhar = "\u2968";
const rx = "\u211E";
const Sacute = "\u015A";
const sacute = "\u015B";
const sbquo = "\u201A";
const scap = "\u2AB8";
const Scaron = "\u0160";
const scaron = "\u0161";
const Sc = "\u2ABC";
const sc = "\u227B";
const sccue = "\u227D";
const sce = "\u2AB0";
const scE = "\u2AB4";
const Scedil = "\u015E";
const scedil = "\u015F";
const Scirc = "\u015C";
const scirc = "\u015D";
const scnap = "\u2ABA";
const scnE = "\u2AB6";
const scnsim = "\u22E9";
const scpolint = "\u2A13";
const scsim = "\u227F";
const Scy = "\u0421";
const scy = "\u0441";
const sdotb = "\u22A1";
const sdot = "\u22C5";
const sdote = "\u2A66";
const searhk = "\u2925";
const searr = "\u2198";
const seArr = "\u21D8";
const searrow = "\u2198";
const sect$1 = "\xA7";
const semi = ";";
const seswar = "\u2929";
const setminus = "\u2216";
const setmn = "\u2216";
const sext = "\u2736";
const Sfr = "\u{1D516}";
const sfr = "\u{1D530}";
const sfrown = "\u2322";
const sharp = "\u266F";
const SHCHcy = "\u0429";
const shchcy = "\u0449";
const SHcy = "\u0428";
const shcy = "\u0448";
const ShortDownArrow = "\u2193";
const ShortLeftArrow = "\u2190";
const shortmid = "\u2223";
const shortparallel = "\u2225";
const ShortRightArrow = "\u2192";
const ShortUpArrow = "\u2191";
const shy$1 = "\xAD";
const Sigma = "\u03A3";
const sigma = "\u03C3";
const sigmaf = "\u03C2";
const sigmav = "\u03C2";
const sim = "\u223C";
const simdot = "\u2A6A";
const sime = "\u2243";
const simeq = "\u2243";
const simg = "\u2A9E";
const simgE = "\u2AA0";
const siml = "\u2A9D";
const simlE = "\u2A9F";
const simne = "\u2246";
const simplus = "\u2A24";
const simrarr = "\u2972";
const slarr = "\u2190";
const SmallCircle = "\u2218";
const smallsetminus = "\u2216";
const smashp = "\u2A33";
const smeparsl = "\u29E4";
const smid = "\u2223";
const smile = "\u2323";
const smt = "\u2AAA";
const smte = "\u2AAC";
const smtes = "\u2AAC\uFE00";
const SOFTcy = "\u042C";
const softcy = "\u044C";
const solbar = "\u233F";
const solb = "\u29C4";
const sol = "/";
const Sopf = "\u{1D54A}";
const sopf = "\u{1D564}";
const spades = "\u2660";
const spadesuit = "\u2660";
const spar = "\u2225";
const sqcap = "\u2293";
const sqcaps = "\u2293\uFE00";
const sqcup = "\u2294";
const sqcups = "\u2294\uFE00";
const Sqrt = "\u221A";
const sqsub = "\u228F";
const sqsube = "\u2291";
const sqsubset = "\u228F";
const sqsubseteq = "\u2291";
const sqsup = "\u2290";
const sqsupe = "\u2292";
const sqsupset = "\u2290";
const sqsupseteq = "\u2292";
const square = "\u25A1";
const Square = "\u25A1";
const SquareIntersection = "\u2293";
const SquareSubset = "\u228F";
const SquareSubsetEqual = "\u2291";
const SquareSuperset = "\u2290";
const SquareSupersetEqual = "\u2292";
const SquareUnion = "\u2294";
const squarf = "\u25AA";
const squ = "\u25A1";
const squf = "\u25AA";
const srarr = "\u2192";
const Sscr = "\u{1D4AE}";
const sscr = "\u{1D4C8}";
const ssetmn = "\u2216";
const ssmile = "\u2323";
const sstarf = "\u22C6";
const Star = "\u22C6";
const star = "\u2606";
const starf = "\u2605";
const straightepsilon = "\u03F5";
const straightphi = "\u03D5";
const strns = "\xAF";
const sub = "\u2282";
const Sub = "\u22D0";
const subdot = "\u2ABD";
const subE = "\u2AC5";
const sube = "\u2286";
const subedot = "\u2AC3";
const submult = "\u2AC1";
const subnE = "\u2ACB";
const subne = "\u228A";
const subplus = "\u2ABF";
const subrarr = "\u2979";
const subset = "\u2282";
const Subset = "\u22D0";
const subseteq = "\u2286";
const subseteqq = "\u2AC5";
const SubsetEqual = "\u2286";
const subsetneq = "\u228A";
const subsetneqq = "\u2ACB";
const subsim = "\u2AC7";
const subsub = "\u2AD5";
const subsup = "\u2AD3";
const succapprox = "\u2AB8";
const succ = "\u227B";
const succcurlyeq = "\u227D";
const Succeeds = "\u227B";
const SucceedsEqual = "\u2AB0";
const SucceedsSlantEqual = "\u227D";
const SucceedsTilde = "\u227F";
const succeq = "\u2AB0";
const succnapprox = "\u2ABA";
const succneqq = "\u2AB6";
const succnsim = "\u22E9";
const succsim = "\u227F";
const SuchThat = "\u220B";
const sum = "\u2211";
const Sum = "\u2211";
const sung = "\u266A";
const sup1$1 = "\xB9";
const sup2$1 = "\xB2";
const sup3$1 = "\xB3";
const sup = "\u2283";
const Sup = "\u22D1";
const supdot = "\u2ABE";
const supdsub = "\u2AD8";
const supE = "\u2AC6";
const supe = "\u2287";
const supedot = "\u2AC4";
const Superset = "\u2283";
const SupersetEqual = "\u2287";
const suphsol = "\u27C9";
const suphsub = "\u2AD7";
const suplarr = "\u297B";
const supmult = "\u2AC2";
const supnE = "\u2ACC";
const supne = "\u228B";
const supplus = "\u2AC0";
const supset = "\u2283";
const Supset = "\u22D1";
const supseteq = "\u2287";
const supseteqq = "\u2AC6";
const supsetneq = "\u228B";
const supsetneqq = "\u2ACC";
const supsim = "\u2AC8";
const supsub = "\u2AD4";
const supsup = "\u2AD6";
const swarhk = "\u2926";
const swarr = "\u2199";
const swArr = "\u21D9";
const swarrow = "\u2199";
const swnwar = "\u292A";
const szlig$1 = "\xDF";
const Tab = "	";
const target = "\u2316";
const Tau = "\u03A4";
const tau = "\u03C4";
const tbrk = "\u23B4";
const Tcaron = "\u0164";
const tcaron = "\u0165";
const Tcedil = "\u0162";
const tcedil = "\u0163";
const Tcy = "\u0422";
const tcy = "\u0442";
const tdot = "\u20DB";
const telrec = "\u2315";
const Tfr = "\u{1D517}";
const tfr = "\u{1D531}";
const there4 = "\u2234";
const therefore = "\u2234";
const Therefore = "\u2234";
const Theta = "\u0398";
const theta = "\u03B8";
const thetasym = "\u03D1";
const thetav = "\u03D1";
const thickapprox = "\u2248";
const thicksim = "\u223C";
const ThickSpace = "\u205F\u200A";
const ThinSpace = "\u2009";
const thinsp = "\u2009";
const thkap = "\u2248";
const thksim = "\u223C";
const THORN$1 = "\xDE";
const thorn$1 = "\xFE";
const tilde = "\u02DC";
const Tilde = "\u223C";
const TildeEqual = "\u2243";
const TildeFullEqual = "\u2245";
const TildeTilde = "\u2248";
const timesbar = "\u2A31";
const timesb = "\u22A0";
const times$1 = "\xD7";
const timesd = "\u2A30";
const tint = "\u222D";
const toea = "\u2928";
const topbot = "\u2336";
const topcir = "\u2AF1";
const top = "\u22A4";
const Topf = "\u{1D54B}";
const topf = "\u{1D565}";
const topfork = "\u2ADA";
const tosa = "\u2929";
const tprime = "\u2034";
const trade = "\u2122";
const TRADE = "\u2122";
const triangle = "\u25B5";
const triangledown = "\u25BF";
const triangleleft = "\u25C3";
const trianglelefteq = "\u22B4";
const triangleq = "\u225C";
const triangleright = "\u25B9";
const trianglerighteq = "\u22B5";
const tridot = "\u25EC";
const trie = "\u225C";
const triminus = "\u2A3A";
const TripleDot = "\u20DB";
const triplus = "\u2A39";
const trisb = "\u29CD";
const tritime = "\u2A3B";
const trpezium = "\u23E2";
const Tscr = "\u{1D4AF}";
const tscr = "\u{1D4C9}";
const TScy = "\u0426";
const tscy = "\u0446";
const TSHcy = "\u040B";
const tshcy = "\u045B";
const Tstrok = "\u0166";
const tstrok = "\u0167";
const twixt = "\u226C";
const twoheadleftarrow = "\u219E";
const twoheadrightarrow = "\u21A0";
const Uacute$1 = "\xDA";
const uacute$1 = "\xFA";
const uarr = "\u2191";
const Uarr = "\u219F";
const uArr = "\u21D1";
const Uarrocir = "\u2949";
const Ubrcy = "\u040E";
const ubrcy = "\u045E";
const Ubreve = "\u016C";
const ubreve = "\u016D";
const Ucirc$1 = "\xDB";
const ucirc$1 = "\xFB";
const Ucy = "\u0423";
const ucy = "\u0443";
const udarr = "\u21C5";
const Udblac = "\u0170";
const udblac = "\u0171";
const udhar = "\u296E";
const ufisht = "\u297E";
const Ufr = "\u{1D518}";
const ufr = "\u{1D532}";
const Ugrave$1 = "\xD9";
const ugrave$1 = "\xF9";
const uHar = "\u2963";
const uharl = "\u21BF";
const uharr = "\u21BE";
const uhblk = "\u2580";
const ulcorn = "\u231C";
const ulcorner = "\u231C";
const ulcrop = "\u230F";
const ultri = "\u25F8";
const Umacr = "\u016A";
const umacr = "\u016B";
const uml$1 = "\xA8";
const UnderBar = "_";
const UnderBrace = "\u23DF";
const UnderBracket = "\u23B5";
const UnderParenthesis = "\u23DD";
const Union = "\u22C3";
const UnionPlus = "\u228E";
const Uogon = "\u0172";
const uogon = "\u0173";
const Uopf = "\u{1D54C}";
const uopf = "\u{1D566}";
const UpArrowBar = "\u2912";
const uparrow = "\u2191";
const UpArrow = "\u2191";
const Uparrow = "\u21D1";
const UpArrowDownArrow = "\u21C5";
const updownarrow = "\u2195";
const UpDownArrow = "\u2195";
const Updownarrow = "\u21D5";
const UpEquilibrium = "\u296E";
const upharpoonleft = "\u21BF";
const upharpoonright = "\u21BE";
const uplus = "\u228E";
const UpperLeftArrow = "\u2196";
const UpperRightArrow = "\u2197";
const upsi = "\u03C5";
const Upsi = "\u03D2";
const upsih = "\u03D2";
const Upsilon = "\u03A5";
const upsilon = "\u03C5";
const UpTeeArrow = "\u21A5";
const UpTee = "\u22A5";
const upuparrows = "\u21C8";
const urcorn = "\u231D";
const urcorner = "\u231D";
const urcrop = "\u230E";
const Uring = "\u016E";
const uring = "\u016F";
const urtri = "\u25F9";
const Uscr = "\u{1D4B0}";
const uscr = "\u{1D4CA}";
const utdot = "\u22F0";
const Utilde = "\u0168";
const utilde = "\u0169";
const utri = "\u25B5";
const utrif = "\u25B4";
const uuarr = "\u21C8";
const Uuml$1 = "\xDC";
const uuml$1 = "\xFC";
const uwangle = "\u29A7";
const vangrt = "\u299C";
const varepsilon = "\u03F5";
const varkappa = "\u03F0";
const varnothing = "\u2205";
const varphi = "\u03D5";
const varpi = "\u03D6";
const varpropto = "\u221D";
const varr = "\u2195";
const vArr = "\u21D5";
const varrho = "\u03F1";
const varsigma = "\u03C2";
const varsubsetneq = "\u228A\uFE00";
const varsubsetneqq = "\u2ACB\uFE00";
const varsupsetneq = "\u228B\uFE00";
const varsupsetneqq = "\u2ACC\uFE00";
const vartheta = "\u03D1";
const vartriangleleft = "\u22B2";
const vartriangleright = "\u22B3";
const vBar = "\u2AE8";
const Vbar = "\u2AEB";
const vBarv = "\u2AE9";
const Vcy = "\u0412";
const vcy = "\u0432";
const vdash = "\u22A2";
const vDash = "\u22A8";
const Vdash = "\u22A9";
const VDash = "\u22AB";
const Vdashl = "\u2AE6";
const veebar = "\u22BB";
const vee = "\u2228";
const Vee = "\u22C1";
const veeeq = "\u225A";
const vellip = "\u22EE";
const verbar = "|";
const Verbar = "\u2016";
const vert = "|";
const Vert = "\u2016";
const VerticalBar = "\u2223";
const VerticalLine = "|";
const VerticalSeparator = "\u2758";
const VerticalTilde = "\u2240";
const VeryThinSpace = "\u200A";
const Vfr = "\u{1D519}";
const vfr = "\u{1D533}";
const vltri = "\u22B2";
const vnsub = "\u2282\u20D2";
const vnsup = "\u2283\u20D2";
const Vopf = "\u{1D54D}";
const vopf = "\u{1D567}";
const vprop = "\u221D";
const vrtri = "\u22B3";
const Vscr = "\u{1D4B1}";
const vscr = "\u{1D4CB}";
const vsubnE = "\u2ACB\uFE00";
const vsubne = "\u228A\uFE00";
const vsupnE = "\u2ACC\uFE00";
const vsupne = "\u228B\uFE00";
const Vvdash = "\u22AA";
const vzigzag = "\u299A";
const Wcirc = "\u0174";
const wcirc = "\u0175";
const wedbar = "\u2A5F";
const wedge = "\u2227";
const Wedge = "\u22C0";
const wedgeq = "\u2259";
const weierp = "\u2118";
const Wfr = "\u{1D51A}";
const wfr = "\u{1D534}";
const Wopf = "\u{1D54E}";
const wopf = "\u{1D568}";
const wp = "\u2118";
const wr = "\u2240";
const wreath = "\u2240";
const Wscr = "\u{1D4B2}";
const wscr = "\u{1D4CC}";
const xcap = "\u22C2";
const xcirc = "\u25EF";
const xcup = "\u22C3";
const xdtri = "\u25BD";
const Xfr = "\u{1D51B}";
const xfr = "\u{1D535}";
const xharr = "\u27F7";
const xhArr = "\u27FA";
const Xi = "\u039E";
const xi = "\u03BE";
const xlarr = "\u27F5";
const xlArr = "\u27F8";
const xmap = "\u27FC";
const xnis = "\u22FB";
const xodot = "\u2A00";
const Xopf = "\u{1D54F}";
const xopf = "\u{1D569}";
const xoplus = "\u2A01";
const xotime = "\u2A02";
const xrarr = "\u27F6";
const xrArr = "\u27F9";
const Xscr = "\u{1D4B3}";
const xscr = "\u{1D4CD}";
const xsqcup = "\u2A06";
const xuplus = "\u2A04";
const xutri = "\u25B3";
const xvee = "\u22C1";
const xwedge = "\u22C0";
const Yacute$1 = "\xDD";
const yacute$1 = "\xFD";
const YAcy = "\u042F";
const yacy = "\u044F";
const Ycirc = "\u0176";
const ycirc = "\u0177";
const Ycy = "\u042B";
const ycy = "\u044B";
const yen$1 = "\xA5";
const Yfr = "\u{1D51C}";
const yfr = "\u{1D536}";
const YIcy = "\u0407";
const yicy = "\u0457";
const Yopf = "\u{1D550}";
const yopf = "\u{1D56A}";
const Yscr = "\u{1D4B4}";
const yscr = "\u{1D4CE}";
const YUcy = "\u042E";
const yucy = "\u044E";
const yuml$1 = "\xFF";
const Yuml = "\u0178";
const Zacute = "\u0179";
const zacute = "\u017A";
const Zcaron = "\u017D";
const zcaron = "\u017E";
const Zcy = "\u0417";
const zcy = "\u0437";
const Zdot = "\u017B";
const zdot = "\u017C";
const zeetrf = "\u2128";
const ZeroWidthSpace = "\u200B";
const Zeta = "\u0396";
const zeta = "\u03B6";
const zfr = "\u{1D537}";
const Zfr = "\u2128";
const ZHcy = "\u0416";
const zhcy = "\u0436";
const zigrarr = "\u21DD";
const zopf = "\u{1D56B}";
const Zopf = "\u2124";
const Zscr = "\u{1D4B5}";
const zscr = "\u{1D4CF}";
const zwj = "\u200D";
const zwnj = "\u200C";
var require$$1$1 = {
  Aacute: Aacute$1,
  aacute: aacute$1,
  Abreve,
  abreve,
  ac,
  acd,
  acE,
  Acirc: Acirc$1,
  acirc: acirc$1,
  acute: acute$1,
  Acy,
  acy,
  AElig: AElig$1,
  aelig: aelig$1,
  af,
  Afr,
  afr,
  Agrave: Agrave$1,
  agrave: agrave$1,
  alefsym,
  aleph,
  Alpha,
  alpha,
  Amacr,
  amacr,
  amalg,
  amp: amp$2,
  AMP: AMP$1,
  andand,
  And,
  and,
  andd,
  andslope,
  andv,
  ang,
  ange,
  angle,
  angmsdaa,
  angmsdab,
  angmsdac,
  angmsdad,
  angmsdae,
  angmsdaf,
  angmsdag,
  angmsdah,
  angmsd,
  angrt,
  angrtvb,
  angrtvbd,
  angsph,
  angst,
  angzarr,
  Aogon,
  aogon,
  Aopf,
  aopf,
  apacir,
  ap,
  apE,
  ape,
  apid,
  apos: apos$1,
  ApplyFunction,
  approx,
  approxeq,
  Aring: Aring$1,
  aring: aring$1,
  Ascr,
  ascr,
  Assign,
  ast,
  asymp,
  asympeq,
  Atilde: Atilde$1,
  atilde: atilde$1,
  Auml: Auml$1,
  auml: auml$1,
  awconint,
  awint,
  backcong,
  backepsilon,
  backprime,
  backsim,
  backsimeq,
  Backslash,
  Barv,
  barvee,
  barwed,
  Barwed,
  barwedge,
  bbrk,
  bbrktbrk,
  bcong,
  Bcy,
  bcy,
  bdquo,
  becaus,
  because,
  Because,
  bemptyv,
  bepsi,
  bernou,
  Bernoullis,
  Beta,
  beta,
  beth,
  between,
  Bfr,
  bfr,
  bigcap,
  bigcirc,
  bigcup,
  bigodot,
  bigoplus,
  bigotimes,
  bigsqcup,
  bigstar,
  bigtriangledown,
  bigtriangleup,
  biguplus,
  bigvee,
  bigwedge,
  bkarow,
  blacklozenge,
  blacksquare,
  blacktriangle,
  blacktriangledown,
  blacktriangleleft,
  blacktriangleright,
  blank,
  blk12,
  blk14,
  blk34,
  block,
  bne,
  bnequiv,
  bNot,
  bnot,
  Bopf,
  bopf,
  bot,
  bottom,
  bowtie,
  boxbox,
  boxdl,
  boxdL,
  boxDl,
  boxDL,
  boxdr,
  boxdR,
  boxDr,
  boxDR,
  boxh,
  boxH,
  boxhd,
  boxHd,
  boxhD,
  boxHD,
  boxhu,
  boxHu,
  boxhU,
  boxHU,
  boxminus,
  boxplus,
  boxtimes,
  boxul,
  boxuL,
  boxUl,
  boxUL,
  boxur,
  boxuR,
  boxUr,
  boxUR,
  boxv,
  boxV,
  boxvh,
  boxvH,
  boxVh,
  boxVH,
  boxvl,
  boxvL,
  boxVl,
  boxVL,
  boxvr,
  boxvR,
  boxVr,
  boxVR,
  bprime,
  breve,
  Breve,
  brvbar: brvbar$1,
  bscr,
  Bscr,
  bsemi,
  bsim,
  bsime,
  bsolb,
  bsol,
  bsolhsub,
  bull,
  bullet,
  bump,
  bumpE,
  bumpe,
  Bumpeq,
  bumpeq,
  Cacute,
  cacute,
  capand,
  capbrcup,
  capcap,
  cap,
  Cap,
  capcup,
  capdot,
  CapitalDifferentialD,
  caps,
  caret,
  caron,
  Cayleys,
  ccaps,
  Ccaron,
  ccaron,
  Ccedil: Ccedil$1,
  ccedil: ccedil$1,
  Ccirc,
  ccirc,
  Cconint,
  ccups,
  ccupssm,
  Cdot,
  cdot,
  cedil: cedil$1,
  Cedilla,
  cemptyv,
  cent: cent$1,
  centerdot,
  CenterDot,
  cfr,
  Cfr,
  CHcy,
  chcy,
  check,
  checkmark,
  Chi,
  chi,
  circ,
  circeq,
  circlearrowleft,
  circlearrowright,
  circledast,
  circledcirc,
  circleddash,
  CircleDot,
  circledR,
  circledS,
  CircleMinus,
  CirclePlus,
  CircleTimes,
  cir,
  cirE,
  cire,
  cirfnint,
  cirmid,
  cirscir,
  ClockwiseContourIntegral,
  CloseCurlyDoubleQuote,
  CloseCurlyQuote,
  clubs,
  clubsuit,
  colon,
  Colon,
  Colone,
  colone,
  coloneq,
  comma,
  commat,
  comp,
  compfn,
  complement,
  complexes,
  cong,
  congdot,
  Congruent,
  conint,
  Conint,
  ContourIntegral,
  copf,
  Copf,
  coprod,
  Coproduct,
  copy: copy$1,
  COPY: COPY$1,
  copysr,
  CounterClockwiseContourIntegral,
  crarr,
  cross,
  Cross,
  Cscr,
  cscr,
  csub,
  csube,
  csup,
  csupe,
  ctdot,
  cudarrl,
  cudarrr,
  cuepr,
  cuesc,
  cularr,
  cularrp,
  cupbrcap,
  cupcap,
  CupCap,
  cup,
  Cup,
  cupcup,
  cupdot,
  cupor,
  cups,
  curarr,
  curarrm,
  curlyeqprec,
  curlyeqsucc,
  curlyvee,
  curlywedge,
  curren: curren$1,
  curvearrowleft,
  curvearrowright,
  cuvee,
  cuwed,
  cwconint,
  cwint,
  cylcty,
  dagger,
  Dagger,
  daleth,
  darr,
  Darr,
  dArr,
  dash,
  Dashv,
  dashv,
  dbkarow,
  dblac,
  Dcaron,
  dcaron,
  Dcy,
  dcy,
  ddagger,
  ddarr,
  DD,
  dd,
  DDotrahd,
  ddotseq,
  deg: deg$1,
  Del,
  Delta,
  delta,
  demptyv,
  dfisht,
  Dfr,
  dfr,
  dHar,
  dharl,
  dharr,
  DiacriticalAcute,
  DiacriticalDot,
  DiacriticalDoubleAcute,
  DiacriticalGrave,
  DiacriticalTilde,
  diam,
  diamond,
  Diamond,
  diamondsuit,
  diams,
  die,
  DifferentialD,
  digamma,
  disin,
  div,
  divide: divide$1,
  divideontimes,
  divonx,
  DJcy,
  djcy,
  dlcorn,
  dlcrop,
  dollar,
  Dopf,
  dopf,
  Dot,
  dot,
  DotDot,
  doteq,
  doteqdot,
  DotEqual,
  dotminus,
  dotplus,
  dotsquare,
  doublebarwedge,
  DoubleContourIntegral,
  DoubleDot,
  DoubleDownArrow,
  DoubleLeftArrow,
  DoubleLeftRightArrow,
  DoubleLeftTee,
  DoubleLongLeftArrow,
  DoubleLongLeftRightArrow,
  DoubleLongRightArrow,
  DoubleRightArrow,
  DoubleRightTee,
  DoubleUpArrow,
  DoubleUpDownArrow,
  DoubleVerticalBar,
  DownArrowBar,
  downarrow,
  DownArrow,
  Downarrow,
  DownArrowUpArrow,
  DownBreve,
  downdownarrows,
  downharpoonleft,
  downharpoonright,
  DownLeftRightVector,
  DownLeftTeeVector,
  DownLeftVectorBar,
  DownLeftVector,
  DownRightTeeVector,
  DownRightVectorBar,
  DownRightVector,
  DownTeeArrow,
  DownTee,
  drbkarow,
  drcorn,
  drcrop,
  Dscr,
  dscr,
  DScy,
  dscy,
  dsol,
  Dstrok,
  dstrok,
  dtdot,
  dtri,
  dtrif,
  duarr,
  duhar,
  dwangle,
  DZcy,
  dzcy,
  dzigrarr,
  Eacute: Eacute$1,
  eacute: eacute$1,
  easter,
  Ecaron,
  ecaron,
  Ecirc: Ecirc$1,
  ecirc: ecirc$1,
  ecir,
  ecolon,
  Ecy,
  ecy,
  eDDot,
  Edot,
  edot,
  eDot,
  ee,
  efDot,
  Efr,
  efr,
  eg,
  Egrave: Egrave$1,
  egrave: egrave$1,
  egs,
  egsdot,
  el,
  Element: Element$1,
  elinters,
  ell,
  els,
  elsdot,
  Emacr,
  emacr,
  empty,
  emptyset,
  EmptySmallSquare,
  emptyv,
  EmptyVerySmallSquare,
  emsp13,
  emsp14,
  emsp,
  ENG,
  eng,
  ensp,
  Eogon,
  eogon,
  Eopf,
  eopf,
  epar,
  eparsl,
  eplus,
  epsi,
  Epsilon,
  epsilon,
  epsiv,
  eqcirc,
  eqcolon,
  eqsim,
  eqslantgtr,
  eqslantless,
  Equal,
  equals,
  EqualTilde,
  equest,
  Equilibrium,
  equiv,
  equivDD,
  eqvparsl,
  erarr,
  erDot,
  escr,
  Escr,
  esdot,
  Esim,
  esim,
  Eta,
  eta,
  ETH: ETH$1,
  eth: eth$1,
  Euml: Euml$1,
  euml: euml$1,
  euro,
  excl,
  exist,
  Exists,
  expectation,
  exponentiale,
  ExponentialE,
  fallingdotseq,
  Fcy,
  fcy,
  female,
  ffilig,
  fflig,
  ffllig,
  Ffr,
  ffr,
  filig,
  FilledSmallSquare,
  FilledVerySmallSquare,
  fjlig,
  flat,
  fllig,
  fltns,
  fnof,
  Fopf,
  fopf,
  forall,
  ForAll,
  fork,
  forkv,
  Fouriertrf,
  fpartint,
  frac12: frac12$1,
  frac13,
  frac14: frac14$1,
  frac15,
  frac16,
  frac18,
  frac23,
  frac25,
  frac34: frac34$1,
  frac35,
  frac38,
  frac45,
  frac56,
  frac58,
  frac78,
  frasl,
  frown,
  fscr,
  Fscr,
  gacute,
  Gamma,
  gamma,
  Gammad,
  gammad,
  gap,
  Gbreve,
  gbreve,
  Gcedil,
  Gcirc,
  gcirc,
  Gcy,
  gcy,
  Gdot,
  gdot,
  ge,
  gE,
  gEl,
  gel,
  geq,
  geqq,
  geqslant,
  gescc,
  ges,
  gesdot,
  gesdoto,
  gesdotol,
  gesl,
  gesles,
  Gfr,
  gfr,
  gg,
  Gg,
  ggg,
  gimel,
  GJcy,
  gjcy,
  gla,
  gl,
  glE,
  glj,
  gnap,
  gnapprox,
  gne,
  gnE,
  gneq,
  gneqq,
  gnsim,
  Gopf,
  gopf,
  grave,
  GreaterEqual,
  GreaterEqualLess,
  GreaterFullEqual,
  GreaterGreater,
  GreaterLess,
  GreaterSlantEqual,
  GreaterTilde,
  Gscr,
  gscr,
  gsim,
  gsime,
  gsiml,
  gtcc,
  gtcir,
  gt: gt$2,
  GT: GT$1,
  Gt,
  gtdot,
  gtlPar,
  gtquest,
  gtrapprox,
  gtrarr,
  gtrdot,
  gtreqless,
  gtreqqless,
  gtrless,
  gtrsim,
  gvertneqq,
  gvnE,
  Hacek,
  hairsp,
  half,
  hamilt,
  HARDcy,
  hardcy,
  harrcir,
  harr,
  hArr,
  harrw,
  Hat,
  hbar,
  Hcirc,
  hcirc,
  hearts,
  heartsuit,
  hellip,
  hercon,
  hfr,
  Hfr,
  HilbertSpace,
  hksearow,
  hkswarow,
  hoarr,
  homtht,
  hookleftarrow,
  hookrightarrow,
  hopf,
  Hopf,
  horbar,
  HorizontalLine,
  hscr,
  Hscr,
  hslash,
  Hstrok,
  hstrok,
  HumpDownHump,
  HumpEqual,
  hybull,
  hyphen,
  Iacute: Iacute$1,
  iacute: iacute$1,
  ic,
  Icirc: Icirc$1,
  icirc: icirc$1,
  Icy,
  icy,
  Idot,
  IEcy,
  iecy,
  iexcl: iexcl$1,
  iff,
  ifr,
  Ifr,
  Igrave: Igrave$1,
  igrave: igrave$1,
  ii,
  iiiint,
  iiint,
  iinfin,
  iiota,
  IJlig,
  ijlig,
  Imacr,
  imacr,
  image,
  ImaginaryI,
  imagline,
  imagpart,
  imath,
  Im,
  imof,
  imped,
  Implies,
  incare,
  "in": "\u2208",
  infin,
  infintie,
  inodot,
  intcal,
  int,
  Int,
  integers,
  Integral,
  intercal,
  Intersection,
  intlarhk,
  intprod,
  InvisibleComma,
  InvisibleTimes,
  IOcy,
  iocy,
  Iogon,
  iogon,
  Iopf,
  iopf,
  Iota,
  iota,
  iprod,
  iquest: iquest$1,
  iscr,
  Iscr,
  isin,
  isindot,
  isinE,
  isins,
  isinsv,
  isinv,
  it,
  Itilde,
  itilde,
  Iukcy,
  iukcy,
  Iuml: Iuml$1,
  iuml: iuml$1,
  Jcirc,
  jcirc,
  Jcy,
  jcy,
  Jfr,
  jfr,
  jmath,
  Jopf,
  jopf,
  Jscr,
  jscr,
  Jsercy,
  jsercy,
  Jukcy,
  jukcy,
  Kappa,
  kappa,
  kappav,
  Kcedil,
  kcedil,
  Kcy,
  kcy,
  Kfr,
  kfr,
  kgreen,
  KHcy,
  khcy,
  KJcy,
  kjcy,
  Kopf,
  kopf,
  Kscr,
  kscr,
  lAarr,
  Lacute,
  lacute,
  laemptyv,
  lagran,
  Lambda,
  lambda,
  lang,
  Lang,
  langd,
  langle,
  lap,
  Laplacetrf,
  laquo: laquo$1,
  larrb,
  larrbfs,
  larr,
  Larr,
  lArr,
  larrfs,
  larrhk,
  larrlp,
  larrpl,
  larrsim,
  larrtl,
  latail,
  lAtail,
  lat,
  late,
  lates,
  lbarr,
  lBarr,
  lbbrk,
  lbrace,
  lbrack,
  lbrke,
  lbrksld,
  lbrkslu,
  Lcaron,
  lcaron,
  Lcedil,
  lcedil,
  lceil,
  lcub,
  Lcy,
  lcy,
  ldca,
  ldquo,
  ldquor,
  ldrdhar,
  ldrushar,
  ldsh,
  le,
  lE,
  LeftAngleBracket,
  LeftArrowBar,
  leftarrow,
  LeftArrow,
  Leftarrow,
  LeftArrowRightArrow,
  leftarrowtail,
  LeftCeiling,
  LeftDoubleBracket,
  LeftDownTeeVector,
  LeftDownVectorBar,
  LeftDownVector,
  LeftFloor,
  leftharpoondown,
  leftharpoonup,
  leftleftarrows,
  leftrightarrow,
  LeftRightArrow,
  Leftrightarrow,
  leftrightarrows,
  leftrightharpoons,
  leftrightsquigarrow,
  LeftRightVector,
  LeftTeeArrow,
  LeftTee,
  LeftTeeVector,
  leftthreetimes,
  LeftTriangleBar,
  LeftTriangle,
  LeftTriangleEqual,
  LeftUpDownVector,
  LeftUpTeeVector,
  LeftUpVectorBar,
  LeftUpVector,
  LeftVectorBar,
  LeftVector,
  lEg,
  leg,
  leq,
  leqq,
  leqslant,
  lescc,
  les,
  lesdot,
  lesdoto,
  lesdotor,
  lesg,
  lesges,
  lessapprox,
  lessdot,
  lesseqgtr,
  lesseqqgtr,
  LessEqualGreater,
  LessFullEqual,
  LessGreater,
  lessgtr,
  LessLess,
  lesssim,
  LessSlantEqual,
  LessTilde,
  lfisht,
  lfloor,
  Lfr,
  lfr,
  lg,
  lgE,
  lHar,
  lhard,
  lharu,
  lharul,
  lhblk,
  LJcy,
  ljcy,
  llarr,
  ll,
  Ll,
  llcorner,
  Lleftarrow,
  llhard,
  lltri,
  Lmidot,
  lmidot,
  lmoustache,
  lmoust,
  lnap,
  lnapprox,
  lne,
  lnE,
  lneq,
  lneqq,
  lnsim,
  loang,
  loarr,
  lobrk,
  longleftarrow,
  LongLeftArrow,
  Longleftarrow,
  longleftrightarrow,
  LongLeftRightArrow,
  Longleftrightarrow,
  longmapsto,
  longrightarrow,
  LongRightArrow,
  Longrightarrow,
  looparrowleft,
  looparrowright,
  lopar,
  Lopf,
  lopf,
  loplus,
  lotimes,
  lowast,
  lowbar,
  LowerLeftArrow,
  LowerRightArrow,
  loz,
  lozenge,
  lozf,
  lpar,
  lparlt,
  lrarr,
  lrcorner,
  lrhar,
  lrhard,
  lrm,
  lrtri,
  lsaquo,
  lscr,
  Lscr,
  lsh,
  Lsh,
  lsim,
  lsime,
  lsimg,
  lsqb,
  lsquo,
  lsquor,
  Lstrok,
  lstrok,
  ltcc,
  ltcir,
  lt: lt$2,
  LT: LT$1,
  Lt,
  ltdot,
  lthree,
  ltimes,
  ltlarr,
  ltquest,
  ltri,
  ltrie,
  ltrif,
  ltrPar,
  lurdshar,
  luruhar,
  lvertneqq,
  lvnE,
  macr: macr$1,
  male,
  malt,
  maltese,
  "Map": "\u2905",
  map,
  mapsto,
  mapstodown,
  mapstoleft,
  mapstoup,
  marker,
  mcomma,
  Mcy,
  mcy,
  mdash,
  mDDot,
  measuredangle,
  MediumSpace,
  Mellintrf,
  Mfr,
  mfr,
  mho,
  micro: micro$1,
  midast,
  midcir,
  mid,
  middot: middot$1,
  minusb,
  minus,
  minusd,
  minusdu,
  MinusPlus,
  mlcp,
  mldr,
  mnplus,
  models,
  Mopf,
  mopf,
  mp,
  mscr,
  Mscr,
  mstpos,
  Mu,
  mu,
  multimap,
  mumap,
  nabla,
  Nacute,
  nacute,
  nang,
  nap,
  napE,
  napid,
  napos,
  napprox,
  natural,
  naturals,
  natur,
  nbsp: nbsp$1,
  nbump,
  nbumpe,
  ncap,
  Ncaron,
  ncaron,
  Ncedil,
  ncedil,
  ncong,
  ncongdot,
  ncup,
  Ncy,
  ncy,
  ndash,
  nearhk,
  nearr,
  neArr,
  nearrow,
  ne,
  nedot,
  NegativeMediumSpace,
  NegativeThickSpace,
  NegativeThinSpace,
  NegativeVeryThinSpace,
  nequiv,
  nesear,
  nesim,
  NestedGreaterGreater,
  NestedLessLess,
  NewLine,
  nexist,
  nexists,
  Nfr,
  nfr,
  ngE,
  nge,
  ngeq,
  ngeqq,
  ngeqslant,
  nges,
  nGg,
  ngsim,
  nGt,
  ngt,
  ngtr,
  nGtv,
  nharr,
  nhArr,
  nhpar,
  ni,
  nis,
  nisd,
  niv,
  NJcy,
  njcy,
  nlarr,
  nlArr,
  nldr,
  nlE,
  nle,
  nleftarrow,
  nLeftarrow,
  nleftrightarrow,
  nLeftrightarrow,
  nleq,
  nleqq,
  nleqslant,
  nles,
  nless,
  nLl,
  nlsim,
  nLt,
  nlt,
  nltri,
  nltrie,
  nLtv,
  nmid,
  NoBreak,
  NonBreakingSpace,
  nopf,
  Nopf,
  Not,
  not: not$1,
  NotCongruent,
  NotCupCap,
  NotDoubleVerticalBar,
  NotElement,
  NotEqual,
  NotEqualTilde,
  NotExists,
  NotGreater,
  NotGreaterEqual,
  NotGreaterFullEqual,
  NotGreaterGreater,
  NotGreaterLess,
  NotGreaterSlantEqual,
  NotGreaterTilde,
  NotHumpDownHump,
  NotHumpEqual,
  notin,
  notindot,
  notinE,
  notinva,
  notinvb,
  notinvc,
  NotLeftTriangleBar,
  NotLeftTriangle,
  NotLeftTriangleEqual,
  NotLess,
  NotLessEqual,
  NotLessGreater,
  NotLessLess,
  NotLessSlantEqual,
  NotLessTilde,
  NotNestedGreaterGreater,
  NotNestedLessLess,
  notni,
  notniva,
  notnivb,
  notnivc,
  NotPrecedes,
  NotPrecedesEqual,
  NotPrecedesSlantEqual,
  NotReverseElement,
  NotRightTriangleBar,
  NotRightTriangle,
  NotRightTriangleEqual,
  NotSquareSubset,
  NotSquareSubsetEqual,
  NotSquareSuperset,
  NotSquareSupersetEqual,
  NotSubset,
  NotSubsetEqual,
  NotSucceeds,
  NotSucceedsEqual,
  NotSucceedsSlantEqual,
  NotSucceedsTilde,
  NotSuperset,
  NotSupersetEqual,
  NotTilde,
  NotTildeEqual,
  NotTildeFullEqual,
  NotTildeTilde,
  NotVerticalBar,
  nparallel,
  npar,
  nparsl,
  npart,
  npolint,
  npr,
  nprcue,
  nprec,
  npreceq,
  npre,
  nrarrc,
  nrarr,
  nrArr,
  nrarrw,
  nrightarrow,
  nRightarrow,
  nrtri,
  nrtrie,
  nsc,
  nsccue,
  nsce,
  Nscr,
  nscr,
  nshortmid,
  nshortparallel,
  nsim,
  nsime,
  nsimeq,
  nsmid,
  nspar,
  nsqsube,
  nsqsupe,
  nsub,
  nsubE,
  nsube,
  nsubset,
  nsubseteq,
  nsubseteqq,
  nsucc,
  nsucceq,
  nsup,
  nsupE,
  nsupe,
  nsupset,
  nsupseteq,
  nsupseteqq,
  ntgl,
  Ntilde: Ntilde$1,
  ntilde: ntilde$1,
  ntlg,
  ntriangleleft,
  ntrianglelefteq,
  ntriangleright,
  ntrianglerighteq,
  Nu,
  nu,
  num,
  numero,
  numsp,
  nvap,
  nvdash,
  nvDash,
  nVdash,
  nVDash,
  nvge,
  nvgt,
  nvHarr,
  nvinfin,
  nvlArr,
  nvle,
  nvlt,
  nvltrie,
  nvrArr,
  nvrtrie,
  nvsim,
  nwarhk,
  nwarr,
  nwArr,
  nwarrow,
  nwnear,
  Oacute: Oacute$1,
  oacute: oacute$1,
  oast,
  Ocirc: Ocirc$1,
  ocirc: ocirc$1,
  ocir,
  Ocy,
  ocy,
  odash,
  Odblac,
  odblac,
  odiv,
  odot,
  odsold,
  OElig,
  oelig,
  ofcir,
  Ofr,
  ofr,
  ogon,
  Ograve: Ograve$1,
  ograve: ograve$1,
  ogt,
  ohbar,
  ohm,
  oint,
  olarr,
  olcir,
  olcross,
  oline,
  olt,
  Omacr,
  omacr,
  Omega,
  omega,
  Omicron,
  omicron,
  omid,
  ominus,
  Oopf,
  oopf,
  opar,
  OpenCurlyDoubleQuote,
  OpenCurlyQuote,
  operp,
  oplus,
  orarr,
  Or,
  or,
  ord,
  order,
  orderof,
  ordf: ordf$1,
  ordm: ordm$1,
  origof,
  oror,
  orslope,
  orv,
  oS,
  Oscr,
  oscr,
  Oslash: Oslash$1,
  oslash: oslash$1,
  osol,
  Otilde: Otilde$1,
  otilde: otilde$1,
  otimesas,
  Otimes,
  otimes,
  Ouml: Ouml$1,
  ouml: ouml$1,
  ovbar,
  OverBar,
  OverBrace,
  OverBracket,
  OverParenthesis,
  para: para$1,
  parallel,
  par,
  parsim,
  parsl,
  part,
  PartialD,
  Pcy,
  pcy,
  percnt,
  period,
  permil,
  perp,
  pertenk,
  Pfr,
  pfr,
  Phi,
  phi,
  phiv,
  phmmat,
  phone,
  Pi,
  pi,
  pitchfork,
  piv,
  planck,
  planckh,
  plankv,
  plusacir,
  plusb,
  pluscir,
  plus,
  plusdo,
  plusdu,
  pluse,
  PlusMinus,
  plusmn: plusmn$1,
  plussim,
  plustwo,
  pm,
  Poincareplane,
  pointint,
  popf,
  Popf,
  pound: pound$1,
  prap,
  Pr,
  pr,
  prcue,
  precapprox,
  prec,
  preccurlyeq,
  Precedes,
  PrecedesEqual,
  PrecedesSlantEqual,
  PrecedesTilde,
  preceq,
  precnapprox,
  precneqq,
  precnsim,
  pre,
  prE,
  precsim,
  prime,
  Prime,
  primes,
  prnap,
  prnE,
  prnsim,
  prod,
  Product,
  profalar,
  profline,
  profsurf,
  prop,
  Proportional,
  Proportion,
  propto,
  prsim,
  prurel,
  Pscr,
  pscr,
  Psi,
  psi,
  puncsp,
  Qfr,
  qfr,
  qint,
  qopf,
  Qopf,
  qprime,
  Qscr,
  qscr,
  quaternions,
  quatint,
  quest,
  questeq,
  quot: quot$2,
  QUOT: QUOT$1,
  rAarr,
  race,
  Racute,
  racute,
  radic,
  raemptyv,
  rang,
  Rang,
  rangd,
  range,
  rangle,
  raquo: raquo$1,
  rarrap,
  rarrb,
  rarrbfs,
  rarrc,
  rarr,
  Rarr,
  rArr,
  rarrfs,
  rarrhk,
  rarrlp,
  rarrpl,
  rarrsim,
  Rarrtl,
  rarrtl,
  rarrw,
  ratail,
  rAtail,
  ratio,
  rationals,
  rbarr,
  rBarr,
  RBarr,
  rbbrk,
  rbrace,
  rbrack,
  rbrke,
  rbrksld,
  rbrkslu,
  Rcaron,
  rcaron,
  Rcedil,
  rcedil,
  rceil,
  rcub,
  Rcy,
  rcy,
  rdca,
  rdldhar,
  rdquo,
  rdquor,
  rdsh,
  real,
  realine,
  realpart,
  reals,
  Re,
  rect,
  reg: reg$1,
  REG: REG$1,
  ReverseElement,
  ReverseEquilibrium,
  ReverseUpEquilibrium,
  rfisht,
  rfloor,
  rfr,
  Rfr,
  rHar,
  rhard,
  rharu,
  rharul,
  Rho,
  rho,
  rhov,
  RightAngleBracket,
  RightArrowBar,
  rightarrow,
  RightArrow,
  Rightarrow,
  RightArrowLeftArrow,
  rightarrowtail,
  RightCeiling,
  RightDoubleBracket,
  RightDownTeeVector,
  RightDownVectorBar,
  RightDownVector,
  RightFloor,
  rightharpoondown,
  rightharpoonup,
  rightleftarrows,
  rightleftharpoons,
  rightrightarrows,
  rightsquigarrow,
  RightTeeArrow,
  RightTee,
  RightTeeVector,
  rightthreetimes,
  RightTriangleBar,
  RightTriangle,
  RightTriangleEqual,
  RightUpDownVector,
  RightUpTeeVector,
  RightUpVectorBar,
  RightUpVector,
  RightVectorBar,
  RightVector,
  ring,
  risingdotseq,
  rlarr,
  rlhar,
  rlm,
  rmoustache,
  rmoust,
  rnmid,
  roang,
  roarr,
  robrk,
  ropar,
  ropf,
  Ropf,
  roplus,
  rotimes,
  RoundImplies,
  rpar,
  rpargt,
  rppolint,
  rrarr,
  Rrightarrow,
  rsaquo,
  rscr,
  Rscr,
  rsh,
  Rsh,
  rsqb,
  rsquo,
  rsquor,
  rthree,
  rtimes,
  rtri,
  rtrie,
  rtrif,
  rtriltri,
  RuleDelayed,
  ruluhar,
  rx,
  Sacute,
  sacute,
  sbquo,
  scap,
  Scaron,
  scaron,
  Sc,
  sc,
  sccue,
  sce,
  scE,
  Scedil,
  scedil,
  Scirc,
  scirc,
  scnap,
  scnE,
  scnsim,
  scpolint,
  scsim,
  Scy,
  scy,
  sdotb,
  sdot,
  sdote,
  searhk,
  searr,
  seArr,
  searrow,
  sect: sect$1,
  semi,
  seswar,
  setminus,
  setmn,
  sext,
  Sfr,
  sfr,
  sfrown,
  sharp,
  SHCHcy,
  shchcy,
  SHcy,
  shcy,
  ShortDownArrow,
  ShortLeftArrow,
  shortmid,
  shortparallel,
  ShortRightArrow,
  ShortUpArrow,
  shy: shy$1,
  Sigma,
  sigma,
  sigmaf,
  sigmav,
  sim,
  simdot,
  sime,
  simeq,
  simg,
  simgE,
  siml,
  simlE,
  simne,
  simplus,
  simrarr,
  slarr,
  SmallCircle,
  smallsetminus,
  smashp,
  smeparsl,
  smid,
  smile,
  smt,
  smte,
  smtes,
  SOFTcy,
  softcy,
  solbar,
  solb,
  sol,
  Sopf,
  sopf,
  spades,
  spadesuit,
  spar,
  sqcap,
  sqcaps,
  sqcup,
  sqcups,
  Sqrt,
  sqsub,
  sqsube,
  sqsubset,
  sqsubseteq,
  sqsup,
  sqsupe,
  sqsupset,
  sqsupseteq,
  square,
  Square,
  SquareIntersection,
  SquareSubset,
  SquareSubsetEqual,
  SquareSuperset,
  SquareSupersetEqual,
  SquareUnion,
  squarf,
  squ,
  squf,
  srarr,
  Sscr,
  sscr,
  ssetmn,
  ssmile,
  sstarf,
  Star,
  star,
  starf,
  straightepsilon,
  straightphi,
  strns,
  sub,
  Sub,
  subdot,
  subE,
  sube,
  subedot,
  submult,
  subnE,
  subne,
  subplus,
  subrarr,
  subset,
  Subset,
  subseteq,
  subseteqq,
  SubsetEqual,
  subsetneq,
  subsetneqq,
  subsim,
  subsub,
  subsup,
  succapprox,
  succ,
  succcurlyeq,
  Succeeds,
  SucceedsEqual,
  SucceedsSlantEqual,
  SucceedsTilde,
  succeq,
  succnapprox,
  succneqq,
  succnsim,
  succsim,
  SuchThat,
  sum,
  Sum,
  sung,
  sup1: sup1$1,
  sup2: sup2$1,
  sup3: sup3$1,
  sup,
  Sup,
  supdot,
  supdsub,
  supE,
  supe,
  supedot,
  Superset,
  SupersetEqual,
  suphsol,
  suphsub,
  suplarr,
  supmult,
  supnE,
  supne,
  supplus,
  supset,
  Supset,
  supseteq,
  supseteqq,
  supsetneq,
  supsetneqq,
  supsim,
  supsub,
  supsup,
  swarhk,
  swarr,
  swArr,
  swarrow,
  swnwar,
  szlig: szlig$1,
  Tab,
  target,
  Tau,
  tau,
  tbrk,
  Tcaron,
  tcaron,
  Tcedil,
  tcedil,
  Tcy,
  tcy,
  tdot,
  telrec,
  Tfr,
  tfr,
  there4,
  therefore,
  Therefore,
  Theta,
  theta,
  thetasym,
  thetav,
  thickapprox,
  thicksim,
  ThickSpace,
  ThinSpace,
  thinsp,
  thkap,
  thksim,
  THORN: THORN$1,
  thorn: thorn$1,
  tilde,
  Tilde,
  TildeEqual,
  TildeFullEqual,
  TildeTilde,
  timesbar,
  timesb,
  times: times$1,
  timesd,
  tint,
  toea,
  topbot,
  topcir,
  top,
  Topf,
  topf,
  topfork,
  tosa,
  tprime,
  trade,
  TRADE,
  triangle,
  triangledown,
  triangleleft,
  trianglelefteq,
  triangleq,
  triangleright,
  trianglerighteq,
  tridot,
  trie,
  triminus,
  TripleDot,
  triplus,
  trisb,
  tritime,
  trpezium,
  Tscr,
  tscr,
  TScy,
  tscy,
  TSHcy,
  tshcy,
  Tstrok,
  tstrok,
  twixt,
  twoheadleftarrow,
  twoheadrightarrow,
  Uacute: Uacute$1,
  uacute: uacute$1,
  uarr,
  Uarr,
  uArr,
  Uarrocir,
  Ubrcy,
  ubrcy,
  Ubreve,
  ubreve,
  Ucirc: Ucirc$1,
  ucirc: ucirc$1,
  Ucy,
  ucy,
  udarr,
  Udblac,
  udblac,
  udhar,
  ufisht,
  Ufr,
  ufr,
  Ugrave: Ugrave$1,
  ugrave: ugrave$1,
  uHar,
  uharl,
  uharr,
  uhblk,
  ulcorn,
  ulcorner,
  ulcrop,
  ultri,
  Umacr,
  umacr,
  uml: uml$1,
  UnderBar,
  UnderBrace,
  UnderBracket,
  UnderParenthesis,
  Union,
  UnionPlus,
  Uogon,
  uogon,
  Uopf,
  uopf,
  UpArrowBar,
  uparrow,
  UpArrow,
  Uparrow,
  UpArrowDownArrow,
  updownarrow,
  UpDownArrow,
  Updownarrow,
  UpEquilibrium,
  upharpoonleft,
  upharpoonright,
  uplus,
  UpperLeftArrow,
  UpperRightArrow,
  upsi,
  Upsi,
  upsih,
  Upsilon,
  upsilon,
  UpTeeArrow,
  UpTee,
  upuparrows,
  urcorn,
  urcorner,
  urcrop,
  Uring,
  uring,
  urtri,
  Uscr,
  uscr,
  utdot,
  Utilde,
  utilde,
  utri,
  utrif,
  uuarr,
  Uuml: Uuml$1,
  uuml: uuml$1,
  uwangle,
  vangrt,
  varepsilon,
  varkappa,
  varnothing,
  varphi,
  varpi,
  varpropto,
  varr,
  vArr,
  varrho,
  varsigma,
  varsubsetneq,
  varsubsetneqq,
  varsupsetneq,
  varsupsetneqq,
  vartheta,
  vartriangleleft,
  vartriangleright,
  vBar,
  Vbar,
  vBarv,
  Vcy,
  vcy,
  vdash,
  vDash,
  Vdash,
  VDash,
  Vdashl,
  veebar,
  vee,
  Vee,
  veeeq,
  vellip,
  verbar,
  Verbar,
  vert,
  Vert,
  VerticalBar,
  VerticalLine,
  VerticalSeparator,
  VerticalTilde,
  VeryThinSpace,
  Vfr,
  vfr,
  vltri,
  vnsub,
  vnsup,
  Vopf,
  vopf,
  vprop,
  vrtri,
  Vscr,
  vscr,
  vsubnE,
  vsubne,
  vsupnE,
  vsupne,
  Vvdash,
  vzigzag,
  Wcirc,
  wcirc,
  wedbar,
  wedge,
  Wedge,
  wedgeq,
  weierp,
  Wfr,
  wfr,
  Wopf,
  wopf,
  wp,
  wr,
  wreath,
  Wscr,
  wscr,
  xcap,
  xcirc,
  xcup,
  xdtri,
  Xfr,
  xfr,
  xharr,
  xhArr,
  Xi,
  xi,
  xlarr,
  xlArr,
  xmap,
  xnis,
  xodot,
  Xopf,
  xopf,
  xoplus,
  xotime,
  xrarr,
  xrArr,
  Xscr,
  xscr,
  xsqcup,
  xuplus,
  xutri,
  xvee,
  xwedge,
  Yacute: Yacute$1,
  yacute: yacute$1,
  YAcy,
  yacy,
  Ycirc,
  ycirc,
  Ycy,
  ycy,
  yen: yen$1,
  Yfr,
  yfr,
  YIcy,
  yicy,
  Yopf,
  yopf,
  Yscr,
  yscr,
  YUcy,
  yucy,
  yuml: yuml$1,
  Yuml,
  Zacute,
  zacute,
  Zcaron,
  zcaron,
  Zcy,
  zcy,
  Zdot,
  zdot,
  zeetrf,
  ZeroWidthSpace,
  Zeta,
  zeta,
  zfr,
  Zfr,
  ZHcy,
  zhcy,
  zigrarr,
  zopf,
  Zopf,
  Zscr,
  zscr,
  zwj,
  zwnj
};
const Aacute = "\xC1";
const aacute = "\xE1";
const Acirc = "\xC2";
const acirc = "\xE2";
const acute = "\xB4";
const AElig = "\xC6";
const aelig = "\xE6";
const Agrave = "\xC0";
const agrave = "\xE0";
const amp$1 = "&";
const AMP = "&";
const Aring = "\xC5";
const aring = "\xE5";
const Atilde = "\xC3";
const atilde = "\xE3";
const Auml = "\xC4";
const auml = "\xE4";
const brvbar = "\xA6";
const Ccedil = "\xC7";
const ccedil = "\xE7";
const cedil = "\xB8";
const cent = "\xA2";
const copy = "\xA9";
const COPY = "\xA9";
const curren = "\xA4";
const deg = "\xB0";
const divide = "\xF7";
const Eacute = "\xC9";
const eacute = "\xE9";
const Ecirc = "\xCA";
const ecirc = "\xEA";
const Egrave = "\xC8";
const egrave = "\xE8";
const ETH = "\xD0";
const eth = "\xF0";
const Euml = "\xCB";
const euml = "\xEB";
const frac12 = "\xBD";
const frac14 = "\xBC";
const frac34 = "\xBE";
const gt$1 = ">";
const GT = ">";
const Iacute = "\xCD";
const iacute = "\xED";
const Icirc = "\xCE";
const icirc = "\xEE";
const iexcl = "\xA1";
const Igrave = "\xCC";
const igrave = "\xEC";
const iquest = "\xBF";
const Iuml = "\xCF";
const iuml = "\xEF";
const laquo = "\xAB";
const lt$1 = "<";
const LT = "<";
const macr = "\xAF";
const micro = "\xB5";
const middot = "\xB7";
const nbsp = "\xA0";
const not = "\xAC";
const Ntilde = "\xD1";
const ntilde = "\xF1";
const Oacute = "\xD3";
const oacute = "\xF3";
const Ocirc = "\xD4";
const ocirc = "\xF4";
const Ograve = "\xD2";
const ograve = "\xF2";
const ordf = "\xAA";
const ordm = "\xBA";
const Oslash = "\xD8";
const oslash = "\xF8";
const Otilde = "\xD5";
const otilde = "\xF5";
const Ouml = "\xD6";
const ouml = "\xF6";
const para = "\xB6";
const plusmn = "\xB1";
const pound = "\xA3";
const quot$1 = '"';
const QUOT = '"';
const raquo = "\xBB";
const reg = "\xAE";
const REG = "\xAE";
const sect = "\xA7";
const shy = "\xAD";
const sup1 = "\xB9";
const sup2 = "\xB2";
const sup3 = "\xB3";
const szlig = "\xDF";
const THORN = "\xDE";
const thorn = "\xFE";
const times = "\xD7";
const Uacute = "\xDA";
const uacute = "\xFA";
const Ucirc = "\xDB";
const ucirc = "\xFB";
const Ugrave = "\xD9";
const ugrave = "\xF9";
const uml = "\xA8";
const Uuml = "\xDC";
const uuml = "\xFC";
const Yacute = "\xDD";
const yacute = "\xFD";
const yen = "\xA5";
const yuml = "\xFF";
var require$$1 = {
  Aacute,
  aacute,
  Acirc,
  acirc,
  acute,
  AElig,
  aelig,
  Agrave,
  agrave,
  amp: amp$1,
  AMP,
  Aring,
  aring,
  Atilde,
  atilde,
  Auml,
  auml,
  brvbar,
  Ccedil,
  ccedil,
  cedil,
  cent,
  copy,
  COPY,
  curren,
  deg,
  divide,
  Eacute,
  eacute,
  Ecirc,
  ecirc,
  Egrave,
  egrave,
  ETH,
  eth,
  Euml,
  euml,
  frac12,
  frac14,
  frac34,
  gt: gt$1,
  GT,
  Iacute,
  iacute,
  Icirc,
  icirc,
  iexcl,
  Igrave,
  igrave,
  iquest,
  Iuml,
  iuml,
  laquo,
  lt: lt$1,
  LT,
  macr,
  micro,
  middot,
  nbsp,
  not,
  Ntilde,
  ntilde,
  Oacute,
  oacute,
  Ocirc,
  ocirc,
  Ograve,
  ograve,
  ordf,
  ordm,
  Oslash,
  oslash,
  Otilde,
  otilde,
  Ouml,
  ouml,
  para,
  plusmn,
  pound,
  quot: quot$1,
  QUOT,
  raquo,
  reg,
  REG,
  sect,
  shy,
  sup1,
  sup2,
  sup3,
  szlig,
  THORN,
  thorn,
  times,
  Uacute,
  uacute,
  Ucirc,
  ucirc,
  Ugrave,
  ugrave,
  uml,
  Uuml,
  uuml,
  Yacute,
  yacute,
  yen,
  yuml
};
const amp = "&";
const apos = "'";
const gt = ">";
const lt = "<";
const quot = '"';
var require$$0 = {
  amp,
  apos,
  gt,
  lt,
  quot
};
var __importDefault$5 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(Tokenizer$1, "__esModule", { value: true });
var decode_codepoint_1$1 = __importDefault$5(decode_codepoint);
var entities_json_1$2 = __importDefault$5(require$$1$1);
var legacy_json_1$1 = __importDefault$5(require$$1);
var xml_json_1$2 = __importDefault$5(require$$0);
function whitespace(c) {
  return c === " " || c === "\n" || c === "	" || c === "\f" || c === "\r";
}
function isASCIIAlpha(c) {
  return c >= "a" && c <= "z" || c >= "A" && c <= "Z";
}
function ifElseState(upper, SUCCESS, FAILURE) {
  var lower = upper.toLowerCase();
  if (upper === lower) {
    return function(t, c) {
      if (c === lower) {
        t._state = SUCCESS;
      } else {
        t._state = FAILURE;
        t._index--;
      }
    };
  }
  return function(t, c) {
    if (c === lower || c === upper) {
      t._state = SUCCESS;
    } else {
      t._state = FAILURE;
      t._index--;
    }
  };
}
function consumeSpecialNameChar(upper, NEXT_STATE) {
  var lower = upper.toLowerCase();
  return function(t, c) {
    if (c === lower || c === upper) {
      t._state = NEXT_STATE;
    } else {
      t._state = 3;
      t._index--;
    }
  };
}
var stateBeforeCdata1 = ifElseState("C", 24, 16);
var stateBeforeCdata2 = ifElseState("D", 25, 16);
var stateBeforeCdata3 = ifElseState("A", 26, 16);
var stateBeforeCdata4 = ifElseState("T", 27, 16);
var stateBeforeCdata5 = ifElseState("A", 28, 16);
var stateBeforeScript1 = consumeSpecialNameChar("R", 35);
var stateBeforeScript2 = consumeSpecialNameChar("I", 36);
var stateBeforeScript3 = consumeSpecialNameChar("P", 37);
var stateBeforeScript4 = consumeSpecialNameChar("T", 38);
var stateAfterScript1 = ifElseState("R", 40, 1);
var stateAfterScript2 = ifElseState("I", 41, 1);
var stateAfterScript3 = ifElseState("P", 42, 1);
var stateAfterScript4 = ifElseState("T", 43, 1);
var stateBeforeStyle1 = consumeSpecialNameChar("Y", 45);
var stateBeforeStyle2 = consumeSpecialNameChar("L", 46);
var stateBeforeStyle3 = consumeSpecialNameChar("E", 47);
var stateAfterStyle1 = ifElseState("Y", 49, 1);
var stateAfterStyle2 = ifElseState("L", 50, 1);
var stateAfterStyle3 = ifElseState("E", 51, 1);
var stateBeforeSpecialT = consumeSpecialNameChar("I", 54);
var stateBeforeTitle1 = consumeSpecialNameChar("T", 55);
var stateBeforeTitle2 = consumeSpecialNameChar("L", 56);
var stateBeforeTitle3 = consumeSpecialNameChar("E", 57);
var stateAfterSpecialTEnd = ifElseState("I", 58, 1);
var stateAfterTitle1 = ifElseState("T", 59, 1);
var stateAfterTitle2 = ifElseState("L", 60, 1);
var stateAfterTitle3 = ifElseState("E", 61, 1);
var stateBeforeEntity = ifElseState("#", 63, 64);
var stateBeforeNumericEntity = ifElseState("X", 66, 65);
var Tokenizer = function() {
  function Tokenizer2(options, cbs) {
    var _a;
    this._state = 1;
    this.buffer = "";
    this.sectionStart = 0;
    this._index = 0;
    this.bufferOffset = 0;
    this.baseState = 1;
    this.special = 1;
    this.running = true;
    this.ended = false;
    this.cbs = cbs;
    this.xmlMode = !!(options === null || options === void 0 ? void 0 : options.xmlMode);
    this.decodeEntities = (_a = options === null || options === void 0 ? void 0 : options.decodeEntities) !== null && _a !== void 0 ? _a : true;
  }
  Tokenizer2.prototype.reset = function() {
    this._state = 1;
    this.buffer = "";
    this.sectionStart = 0;
    this._index = 0;
    this.bufferOffset = 0;
    this.baseState = 1;
    this.special = 1;
    this.running = true;
    this.ended = false;
  };
  Tokenizer2.prototype.write = function(chunk) {
    if (this.ended)
      this.cbs.onerror(Error(".write() after done!"));
    this.buffer += chunk;
    this.parse();
  };
  Tokenizer2.prototype.end = function(chunk) {
    if (this.ended)
      this.cbs.onerror(Error(".end() after done!"));
    if (chunk)
      this.write(chunk);
    this.ended = true;
    if (this.running)
      this.finish();
  };
  Tokenizer2.prototype.pause = function() {
    this.running = false;
  };
  Tokenizer2.prototype.resume = function() {
    this.running = true;
    if (this._index < this.buffer.length) {
      this.parse();
    }
    if (this.ended) {
      this.finish();
    }
  };
  Tokenizer2.prototype.getAbsoluteIndex = function() {
    return this.bufferOffset + this._index;
  };
  Tokenizer2.prototype.stateText = function(c) {
    if (c === "<") {
      if (this._index > this.sectionStart) {
        this.cbs.ontext(this.getSection());
      }
      this._state = 2;
      this.sectionStart = this._index;
    } else if (this.decodeEntities && c === "&" && (this.special === 1 || this.special === 4)) {
      if (this._index > this.sectionStart) {
        this.cbs.ontext(this.getSection());
      }
      this.baseState = 1;
      this._state = 62;
      this.sectionStart = this._index;
    }
  };
  Tokenizer2.prototype.isTagStartChar = function(c) {
    return isASCIIAlpha(c) || this.xmlMode && !whitespace(c) && c !== "/" && c !== ">";
  };
  Tokenizer2.prototype.stateBeforeTagName = function(c) {
    if (c === "/") {
      this._state = 5;
    } else if (c === "<") {
      this.cbs.ontext(this.getSection());
      this.sectionStart = this._index;
    } else if (c === ">" || this.special !== 1 || whitespace(c)) {
      this._state = 1;
    } else if (c === "!") {
      this._state = 15;
      this.sectionStart = this._index + 1;
    } else if (c === "?") {
      this._state = 17;
      this.sectionStart = this._index + 1;
    } else if (!this.isTagStartChar(c)) {
      this._state = 1;
    } else {
      this._state = !this.xmlMode && (c === "s" || c === "S") ? 32 : !this.xmlMode && (c === "t" || c === "T") ? 52 : 3;
      this.sectionStart = this._index;
    }
  };
  Tokenizer2.prototype.stateInTagName = function(c) {
    if (c === "/" || c === ">" || whitespace(c)) {
      this.emitToken("onopentagname");
      this._state = 8;
      this._index--;
    }
  };
  Tokenizer2.prototype.stateBeforeClosingTagName = function(c) {
    if (whitespace(c))
      ;
    else if (c === ">") {
      this._state = 1;
    } else if (this.special !== 1) {
      if (this.special !== 4 && (c === "s" || c === "S")) {
        this._state = 33;
      } else if (this.special === 4 && (c === "t" || c === "T")) {
        this._state = 53;
      } else {
        this._state = 1;
        this._index--;
      }
    } else if (!this.isTagStartChar(c)) {
      this._state = 20;
      this.sectionStart = this._index;
    } else {
      this._state = 6;
      this.sectionStart = this._index;
    }
  };
  Tokenizer2.prototype.stateInClosingTagName = function(c) {
    if (c === ">" || whitespace(c)) {
      this.emitToken("onclosetag");
      this._state = 7;
      this._index--;
    }
  };
  Tokenizer2.prototype.stateAfterClosingTagName = function(c) {
    if (c === ">") {
      this._state = 1;
      this.sectionStart = this._index + 1;
    }
  };
  Tokenizer2.prototype.stateBeforeAttributeName = function(c) {
    if (c === ">") {
      this.cbs.onopentagend();
      this._state = 1;
      this.sectionStart = this._index + 1;
    } else if (c === "/") {
      this._state = 4;
    } else if (!whitespace(c)) {
      this._state = 9;
      this.sectionStart = this._index;
    }
  };
  Tokenizer2.prototype.stateInSelfClosingTag = function(c) {
    if (c === ">") {
      this.cbs.onselfclosingtag();
      this._state = 1;
      this.sectionStart = this._index + 1;
      this.special = 1;
    } else if (!whitespace(c)) {
      this._state = 8;
      this._index--;
    }
  };
  Tokenizer2.prototype.stateInAttributeName = function(c) {
    if (c === "=" || c === "/" || c === ">" || whitespace(c)) {
      this.cbs.onattribname(this.getSection());
      this.sectionStart = -1;
      this._state = 10;
      this._index--;
    }
  };
  Tokenizer2.prototype.stateAfterAttributeName = function(c) {
    if (c === "=") {
      this._state = 11;
    } else if (c === "/" || c === ">") {
      this.cbs.onattribend(void 0);
      this._state = 8;
      this._index--;
    } else if (!whitespace(c)) {
      this.cbs.onattribend(void 0);
      this._state = 9;
      this.sectionStart = this._index;
    }
  };
  Tokenizer2.prototype.stateBeforeAttributeValue = function(c) {
    if (c === '"') {
      this._state = 12;
      this.sectionStart = this._index + 1;
    } else if (c === "'") {
      this._state = 13;
      this.sectionStart = this._index + 1;
    } else if (!whitespace(c)) {
      this._state = 14;
      this.sectionStart = this._index;
      this._index--;
    }
  };
  Tokenizer2.prototype.handleInAttributeValue = function(c, quote) {
    if (c === quote) {
      this.emitToken("onattribdata");
      this.cbs.onattribend(quote);
      this._state = 8;
    } else if (this.decodeEntities && c === "&") {
      this.emitToken("onattribdata");
      this.baseState = this._state;
      this._state = 62;
      this.sectionStart = this._index;
    }
  };
  Tokenizer2.prototype.stateInAttributeValueDoubleQuotes = function(c) {
    this.handleInAttributeValue(c, '"');
  };
  Tokenizer2.prototype.stateInAttributeValueSingleQuotes = function(c) {
    this.handleInAttributeValue(c, "'");
  };
  Tokenizer2.prototype.stateInAttributeValueNoQuotes = function(c) {
    if (whitespace(c) || c === ">") {
      this.emitToken("onattribdata");
      this.cbs.onattribend(null);
      this._state = 8;
      this._index--;
    } else if (this.decodeEntities && c === "&") {
      this.emitToken("onattribdata");
      this.baseState = this._state;
      this._state = 62;
      this.sectionStart = this._index;
    }
  };
  Tokenizer2.prototype.stateBeforeDeclaration = function(c) {
    this._state = c === "[" ? 23 : c === "-" ? 18 : 16;
  };
  Tokenizer2.prototype.stateInDeclaration = function(c) {
    if (c === ">") {
      this.cbs.ondeclaration(this.getSection());
      this._state = 1;
      this.sectionStart = this._index + 1;
    }
  };
  Tokenizer2.prototype.stateInProcessingInstruction = function(c) {
    if (c === ">") {
      this.cbs.onprocessinginstruction(this.getSection());
      this._state = 1;
      this.sectionStart = this._index + 1;
    }
  };
  Tokenizer2.prototype.stateBeforeComment = function(c) {
    if (c === "-") {
      this._state = 19;
      this.sectionStart = this._index + 1;
    } else {
      this._state = 16;
    }
  };
  Tokenizer2.prototype.stateInComment = function(c) {
    if (c === "-")
      this._state = 21;
  };
  Tokenizer2.prototype.stateInSpecialComment = function(c) {
    if (c === ">") {
      this.cbs.oncomment(this.buffer.substring(this.sectionStart, this._index));
      this._state = 1;
      this.sectionStart = this._index + 1;
    }
  };
  Tokenizer2.prototype.stateAfterComment1 = function(c) {
    if (c === "-") {
      this._state = 22;
    } else {
      this._state = 19;
    }
  };
  Tokenizer2.prototype.stateAfterComment2 = function(c) {
    if (c === ">") {
      this.cbs.oncomment(this.buffer.substring(this.sectionStart, this._index - 2));
      this._state = 1;
      this.sectionStart = this._index + 1;
    } else if (c !== "-") {
      this._state = 19;
    }
  };
  Tokenizer2.prototype.stateBeforeCdata6 = function(c) {
    if (c === "[") {
      this._state = 29;
      this.sectionStart = this._index + 1;
    } else {
      this._state = 16;
      this._index--;
    }
  };
  Tokenizer2.prototype.stateInCdata = function(c) {
    if (c === "]")
      this._state = 30;
  };
  Tokenizer2.prototype.stateAfterCdata1 = function(c) {
    if (c === "]")
      this._state = 31;
    else
      this._state = 29;
  };
  Tokenizer2.prototype.stateAfterCdata2 = function(c) {
    if (c === ">") {
      this.cbs.oncdata(this.buffer.substring(this.sectionStart, this._index - 2));
      this._state = 1;
      this.sectionStart = this._index + 1;
    } else if (c !== "]") {
      this._state = 29;
    }
  };
  Tokenizer2.prototype.stateBeforeSpecialS = function(c) {
    if (c === "c" || c === "C") {
      this._state = 34;
    } else if (c === "t" || c === "T") {
      this._state = 44;
    } else {
      this._state = 3;
      this._index--;
    }
  };
  Tokenizer2.prototype.stateBeforeSpecialSEnd = function(c) {
    if (this.special === 2 && (c === "c" || c === "C")) {
      this._state = 39;
    } else if (this.special === 3 && (c === "t" || c === "T")) {
      this._state = 48;
    } else
      this._state = 1;
  };
  Tokenizer2.prototype.stateBeforeSpecialLast = function(c, special) {
    if (c === "/" || c === ">" || whitespace(c)) {
      this.special = special;
    }
    this._state = 3;
    this._index--;
  };
  Tokenizer2.prototype.stateAfterSpecialLast = function(c, sectionStartOffset) {
    if (c === ">" || whitespace(c)) {
      this.special = 1;
      this._state = 6;
      this.sectionStart = this._index - sectionStartOffset;
      this._index--;
    } else
      this._state = 1;
  };
  Tokenizer2.prototype.parseFixedEntity = function(map2) {
    if (map2 === void 0) {
      map2 = this.xmlMode ? xml_json_1$2.default : entities_json_1$2.default;
    }
    if (this.sectionStart + 1 < this._index) {
      var entity = this.buffer.substring(this.sectionStart + 1, this._index);
      if (Object.prototype.hasOwnProperty.call(map2, entity)) {
        this.emitPartial(map2[entity]);
        this.sectionStart = this._index + 1;
      }
    }
  };
  Tokenizer2.prototype.parseLegacyEntity = function() {
    var start = this.sectionStart + 1;
    var limit = Math.min(this._index - start, 6);
    while (limit >= 2) {
      var entity = this.buffer.substr(start, limit);
      if (Object.prototype.hasOwnProperty.call(legacy_json_1$1.default, entity)) {
        this.emitPartial(legacy_json_1$1.default[entity]);
        this.sectionStart += limit + 1;
        return;
      }
      limit--;
    }
  };
  Tokenizer2.prototype.stateInNamedEntity = function(c) {
    if (c === ";") {
      this.parseFixedEntity();
      if (this.baseState === 1 && this.sectionStart + 1 < this._index && !this.xmlMode) {
        this.parseLegacyEntity();
      }
      this._state = this.baseState;
    } else if ((c < "0" || c > "9") && !isASCIIAlpha(c)) {
      if (this.xmlMode || this.sectionStart + 1 === this._index)
        ;
      else if (this.baseState !== 1) {
        if (c !== "=") {
          this.parseFixedEntity(legacy_json_1$1.default);
        }
      } else {
        this.parseLegacyEntity();
      }
      this._state = this.baseState;
      this._index--;
    }
  };
  Tokenizer2.prototype.decodeNumericEntity = function(offset, base, strict) {
    var sectionStart = this.sectionStart + offset;
    if (sectionStart !== this._index) {
      var entity = this.buffer.substring(sectionStart, this._index);
      var parsed = parseInt(entity, base);
      this.emitPartial(decode_codepoint_1$1.default(parsed));
      this.sectionStart = strict ? this._index + 1 : this._index;
    }
    this._state = this.baseState;
  };
  Tokenizer2.prototype.stateInNumericEntity = function(c) {
    if (c === ";") {
      this.decodeNumericEntity(2, 10, true);
    } else if (c < "0" || c > "9") {
      if (!this.xmlMode) {
        this.decodeNumericEntity(2, 10, false);
      } else {
        this._state = this.baseState;
      }
      this._index--;
    }
  };
  Tokenizer2.prototype.stateInHexEntity = function(c) {
    if (c === ";") {
      this.decodeNumericEntity(3, 16, true);
    } else if ((c < "a" || c > "f") && (c < "A" || c > "F") && (c < "0" || c > "9")) {
      if (!this.xmlMode) {
        this.decodeNumericEntity(3, 16, false);
      } else {
        this._state = this.baseState;
      }
      this._index--;
    }
  };
  Tokenizer2.prototype.cleanup = function() {
    if (this.sectionStart < 0) {
      this.buffer = "";
      this.bufferOffset += this._index;
      this._index = 0;
    } else if (this.running) {
      if (this._state === 1) {
        if (this.sectionStart !== this._index) {
          this.cbs.ontext(this.buffer.substr(this.sectionStart));
        }
        this.buffer = "";
        this.bufferOffset += this._index;
        this._index = 0;
      } else if (this.sectionStart === this._index) {
        this.buffer = "";
        this.bufferOffset += this._index;
        this._index = 0;
      } else {
        this.buffer = this.buffer.substr(this.sectionStart);
        this._index -= this.sectionStart;
        this.bufferOffset += this.sectionStart;
      }
      this.sectionStart = 0;
    }
  };
  Tokenizer2.prototype.parse = function() {
    while (this._index < this.buffer.length && this.running) {
      var c = this.buffer.charAt(this._index);
      if (this._state === 1) {
        this.stateText(c);
      } else if (this._state === 12) {
        this.stateInAttributeValueDoubleQuotes(c);
      } else if (this._state === 9) {
        this.stateInAttributeName(c);
      } else if (this._state === 19) {
        this.stateInComment(c);
      } else if (this._state === 20) {
        this.stateInSpecialComment(c);
      } else if (this._state === 8) {
        this.stateBeforeAttributeName(c);
      } else if (this._state === 3) {
        this.stateInTagName(c);
      } else if (this._state === 6) {
        this.stateInClosingTagName(c);
      } else if (this._state === 2) {
        this.stateBeforeTagName(c);
      } else if (this._state === 10) {
        this.stateAfterAttributeName(c);
      } else if (this._state === 13) {
        this.stateInAttributeValueSingleQuotes(c);
      } else if (this._state === 11) {
        this.stateBeforeAttributeValue(c);
      } else if (this._state === 5) {
        this.stateBeforeClosingTagName(c);
      } else if (this._state === 7) {
        this.stateAfterClosingTagName(c);
      } else if (this._state === 32) {
        this.stateBeforeSpecialS(c);
      } else if (this._state === 21) {
        this.stateAfterComment1(c);
      } else if (this._state === 14) {
        this.stateInAttributeValueNoQuotes(c);
      } else if (this._state === 4) {
        this.stateInSelfClosingTag(c);
      } else if (this._state === 16) {
        this.stateInDeclaration(c);
      } else if (this._state === 15) {
        this.stateBeforeDeclaration(c);
      } else if (this._state === 22) {
        this.stateAfterComment2(c);
      } else if (this._state === 18) {
        this.stateBeforeComment(c);
      } else if (this._state === 33) {
        this.stateBeforeSpecialSEnd(c);
      } else if (this._state === 53) {
        stateAfterSpecialTEnd(this, c);
      } else if (this._state === 39) {
        stateAfterScript1(this, c);
      } else if (this._state === 40) {
        stateAfterScript2(this, c);
      } else if (this._state === 41) {
        stateAfterScript3(this, c);
      } else if (this._state === 34) {
        stateBeforeScript1(this, c);
      } else if (this._state === 35) {
        stateBeforeScript2(this, c);
      } else if (this._state === 36) {
        stateBeforeScript3(this, c);
      } else if (this._state === 37) {
        stateBeforeScript4(this, c);
      } else if (this._state === 38) {
        this.stateBeforeSpecialLast(c, 2);
      } else if (this._state === 42) {
        stateAfterScript4(this, c);
      } else if (this._state === 43) {
        this.stateAfterSpecialLast(c, 6);
      } else if (this._state === 44) {
        stateBeforeStyle1(this, c);
      } else if (this._state === 29) {
        this.stateInCdata(c);
      } else if (this._state === 45) {
        stateBeforeStyle2(this, c);
      } else if (this._state === 46) {
        stateBeforeStyle3(this, c);
      } else if (this._state === 47) {
        this.stateBeforeSpecialLast(c, 3);
      } else if (this._state === 48) {
        stateAfterStyle1(this, c);
      } else if (this._state === 49) {
        stateAfterStyle2(this, c);
      } else if (this._state === 50) {
        stateAfterStyle3(this, c);
      } else if (this._state === 51) {
        this.stateAfterSpecialLast(c, 5);
      } else if (this._state === 52) {
        stateBeforeSpecialT(this, c);
      } else if (this._state === 54) {
        stateBeforeTitle1(this, c);
      } else if (this._state === 55) {
        stateBeforeTitle2(this, c);
      } else if (this._state === 56) {
        stateBeforeTitle3(this, c);
      } else if (this._state === 57) {
        this.stateBeforeSpecialLast(c, 4);
      } else if (this._state === 58) {
        stateAfterTitle1(this, c);
      } else if (this._state === 59) {
        stateAfterTitle2(this, c);
      } else if (this._state === 60) {
        stateAfterTitle3(this, c);
      } else if (this._state === 61) {
        this.stateAfterSpecialLast(c, 5);
      } else if (this._state === 17) {
        this.stateInProcessingInstruction(c);
      } else if (this._state === 64) {
        this.stateInNamedEntity(c);
      } else if (this._state === 23) {
        stateBeforeCdata1(this, c);
      } else if (this._state === 62) {
        stateBeforeEntity(this, c);
      } else if (this._state === 24) {
        stateBeforeCdata2(this, c);
      } else if (this._state === 25) {
        stateBeforeCdata3(this, c);
      } else if (this._state === 30) {
        this.stateAfterCdata1(c);
      } else if (this._state === 31) {
        this.stateAfterCdata2(c);
      } else if (this._state === 26) {
        stateBeforeCdata4(this, c);
      } else if (this._state === 27) {
        stateBeforeCdata5(this, c);
      } else if (this._state === 28) {
        this.stateBeforeCdata6(c);
      } else if (this._state === 66) {
        this.stateInHexEntity(c);
      } else if (this._state === 65) {
        this.stateInNumericEntity(c);
      } else if (this._state === 63) {
        stateBeforeNumericEntity(this, c);
      } else {
        this.cbs.onerror(Error("unknown _state"), this._state);
      }
      this._index++;
    }
    this.cleanup();
  };
  Tokenizer2.prototype.finish = function() {
    if (this.sectionStart < this._index) {
      this.handleTrailingData();
    }
    this.cbs.onend();
  };
  Tokenizer2.prototype.handleTrailingData = function() {
    var data = this.buffer.substr(this.sectionStart);
    if (this._state === 29 || this._state === 30 || this._state === 31) {
      this.cbs.oncdata(data);
    } else if (this._state === 19 || this._state === 21 || this._state === 22) {
      this.cbs.oncomment(data);
    } else if (this._state === 64 && !this.xmlMode) {
      this.parseLegacyEntity();
      if (this.sectionStart < this._index) {
        this._state = this.baseState;
        this.handleTrailingData();
      }
    } else if (this._state === 65 && !this.xmlMode) {
      this.decodeNumericEntity(2, 10, false);
      if (this.sectionStart < this._index) {
        this._state = this.baseState;
        this.handleTrailingData();
      }
    } else if (this._state === 66 && !this.xmlMode) {
      this.decodeNumericEntity(3, 16, false);
      if (this.sectionStart < this._index) {
        this._state = this.baseState;
        this.handleTrailingData();
      }
    } else if (this._state !== 3 && this._state !== 8 && this._state !== 11 && this._state !== 10 && this._state !== 9 && this._state !== 13 && this._state !== 12 && this._state !== 14 && this._state !== 6) {
      this.cbs.ontext(data);
    }
  };
  Tokenizer2.prototype.getSection = function() {
    return this.buffer.substring(this.sectionStart, this._index);
  };
  Tokenizer2.prototype.emitToken = function(name) {
    this.cbs[name](this.getSection());
    this.sectionStart = -1;
  };
  Tokenizer2.prototype.emitPartial = function(value) {
    if (this.baseState !== 1) {
      this.cbs.onattribdata(value);
    } else {
      this.cbs.ontext(value);
    }
  };
  return Tokenizer2;
}();
Tokenizer$1.default = Tokenizer;
var __importDefault$4 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(Parser$3, "__esModule", { value: true });
Parser$3.Parser = void 0;
var Tokenizer_1 = __importDefault$4(Tokenizer$1);
var formTags = /* @__PURE__ */ new Set([
  "input",
  "option",
  "optgroup",
  "select",
  "button",
  "datalist",
  "textarea"
]);
var pTag = /* @__PURE__ */ new Set(["p"]);
var openImpliesClose = {
  tr: /* @__PURE__ */ new Set(["tr", "th", "td"]),
  th: /* @__PURE__ */ new Set(["th"]),
  td: /* @__PURE__ */ new Set(["thead", "th", "td"]),
  body: /* @__PURE__ */ new Set(["head", "link", "script"]),
  li: /* @__PURE__ */ new Set(["li"]),
  p: pTag,
  h1: pTag,
  h2: pTag,
  h3: pTag,
  h4: pTag,
  h5: pTag,
  h6: pTag,
  select: formTags,
  input: formTags,
  output: formTags,
  button: formTags,
  datalist: formTags,
  textarea: formTags,
  option: /* @__PURE__ */ new Set(["option"]),
  optgroup: /* @__PURE__ */ new Set(["optgroup", "option"]),
  dd: /* @__PURE__ */ new Set(["dt", "dd"]),
  dt: /* @__PURE__ */ new Set(["dt", "dd"]),
  address: pTag,
  article: pTag,
  aside: pTag,
  blockquote: pTag,
  details: pTag,
  div: pTag,
  dl: pTag,
  fieldset: pTag,
  figcaption: pTag,
  figure: pTag,
  footer: pTag,
  form: pTag,
  header: pTag,
  hr: pTag,
  main: pTag,
  nav: pTag,
  ol: pTag,
  pre: pTag,
  section: pTag,
  table: pTag,
  ul: pTag,
  rt: /* @__PURE__ */ new Set(["rt", "rp"]),
  rp: /* @__PURE__ */ new Set(["rt", "rp"]),
  tbody: /* @__PURE__ */ new Set(["thead", "tbody"]),
  tfoot: /* @__PURE__ */ new Set(["thead", "tbody"])
};
var voidElements = /* @__PURE__ */ new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);
var foreignContextElements = /* @__PURE__ */ new Set(["math", "svg"]);
var htmlIntegrationElements = /* @__PURE__ */ new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignObject",
  "desc",
  "title"
]);
var reNameEnd = /\s|\//;
var Parser$2 = function() {
  function Parser2(cbs, options) {
    if (options === void 0) {
      options = {};
    }
    var _a, _b, _c, _d, _e;
    this.startIndex = 0;
    this.endIndex = null;
    this.tagname = "";
    this.attribname = "";
    this.attribvalue = "";
    this.attribs = null;
    this.stack = [];
    this.foreignContext = [];
    this.options = options;
    this.cbs = cbs !== null && cbs !== void 0 ? cbs : {};
    this.lowerCaseTagNames = (_a = options.lowerCaseTags) !== null && _a !== void 0 ? _a : !options.xmlMode;
    this.lowerCaseAttributeNames = (_b = options.lowerCaseAttributeNames) !== null && _b !== void 0 ? _b : !options.xmlMode;
    this.tokenizer = new ((_c = options.Tokenizer) !== null && _c !== void 0 ? _c : Tokenizer_1.default)(this.options, this);
    (_e = (_d = this.cbs).onparserinit) === null || _e === void 0 ? void 0 : _e.call(_d, this);
  }
  Parser2.prototype.updatePosition = function(initialOffset) {
    if (this.endIndex === null) {
      if (this.tokenizer.sectionStart <= initialOffset) {
        this.startIndex = 0;
      } else {
        this.startIndex = this.tokenizer.sectionStart - initialOffset;
      }
    } else {
      this.startIndex = this.endIndex + 1;
    }
    this.endIndex = this.tokenizer.getAbsoluteIndex();
  };
  Parser2.prototype.ontext = function(data) {
    var _a, _b;
    this.updatePosition(1);
    this.endIndex--;
    (_b = (_a = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a, data);
  };
  Parser2.prototype.onopentagname = function(name) {
    var _a, _b;
    if (this.lowerCaseTagNames) {
      name = name.toLowerCase();
    }
    this.tagname = name;
    if (!this.options.xmlMode && Object.prototype.hasOwnProperty.call(openImpliesClose, name)) {
      var el2 = void 0;
      while (this.stack.length > 0 && openImpliesClose[name].has(el2 = this.stack[this.stack.length - 1])) {
        this.onclosetag(el2);
      }
    }
    if (this.options.xmlMode || !voidElements.has(name)) {
      this.stack.push(name);
      if (foreignContextElements.has(name)) {
        this.foreignContext.push(true);
      } else if (htmlIntegrationElements.has(name)) {
        this.foreignContext.push(false);
      }
    }
    (_b = (_a = this.cbs).onopentagname) === null || _b === void 0 ? void 0 : _b.call(_a, name);
    if (this.cbs.onopentag)
      this.attribs = {};
  };
  Parser2.prototype.onopentagend = function() {
    var _a, _b;
    this.updatePosition(1);
    if (this.attribs) {
      (_b = (_a = this.cbs).onopentag) === null || _b === void 0 ? void 0 : _b.call(_a, this.tagname, this.attribs);
      this.attribs = null;
    }
    if (!this.options.xmlMode && this.cbs.onclosetag && voidElements.has(this.tagname)) {
      this.cbs.onclosetag(this.tagname);
    }
    this.tagname = "";
  };
  Parser2.prototype.onclosetag = function(name) {
    this.updatePosition(1);
    if (this.lowerCaseTagNames) {
      name = name.toLowerCase();
    }
    if (foreignContextElements.has(name) || htmlIntegrationElements.has(name)) {
      this.foreignContext.pop();
    }
    if (this.stack.length && (this.options.xmlMode || !voidElements.has(name))) {
      var pos = this.stack.lastIndexOf(name);
      if (pos !== -1) {
        if (this.cbs.onclosetag) {
          pos = this.stack.length - pos;
          while (pos--) {
            this.cbs.onclosetag(this.stack.pop());
          }
        } else
          this.stack.length = pos;
      } else if (name === "p" && !this.options.xmlMode) {
        this.onopentagname(name);
        this.closeCurrentTag();
      }
    } else if (!this.options.xmlMode && (name === "br" || name === "p")) {
      this.onopentagname(name);
      this.closeCurrentTag();
    }
  };
  Parser2.prototype.onselfclosingtag = function() {
    if (this.options.xmlMode || this.options.recognizeSelfClosing || this.foreignContext[this.foreignContext.length - 1]) {
      this.closeCurrentTag();
    } else {
      this.onopentagend();
    }
  };
  Parser2.prototype.closeCurrentTag = function() {
    var _a, _b;
    var name = this.tagname;
    this.onopentagend();
    if (this.stack[this.stack.length - 1] === name) {
      (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a, name);
      this.stack.pop();
    }
  };
  Parser2.prototype.onattribname = function(name) {
    if (this.lowerCaseAttributeNames) {
      name = name.toLowerCase();
    }
    this.attribname = name;
  };
  Parser2.prototype.onattribdata = function(value) {
    this.attribvalue += value;
  };
  Parser2.prototype.onattribend = function(quote) {
    var _a, _b;
    (_b = (_a = this.cbs).onattribute) === null || _b === void 0 ? void 0 : _b.call(_a, this.attribname, this.attribvalue, quote);
    if (this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname)) {
      this.attribs[this.attribname] = this.attribvalue;
    }
    this.attribname = "";
    this.attribvalue = "";
  };
  Parser2.prototype.getInstructionName = function(value) {
    var idx = value.search(reNameEnd);
    var name = idx < 0 ? value : value.substr(0, idx);
    if (this.lowerCaseTagNames) {
      name = name.toLowerCase();
    }
    return name;
  };
  Parser2.prototype.ondeclaration = function(value) {
    if (this.cbs.onprocessinginstruction) {
      var name_1 = this.getInstructionName(value);
      this.cbs.onprocessinginstruction("!" + name_1, "!" + value);
    }
  };
  Parser2.prototype.onprocessinginstruction = function(value) {
    if (this.cbs.onprocessinginstruction) {
      var name_2 = this.getInstructionName(value);
      this.cbs.onprocessinginstruction("?" + name_2, "?" + value);
    }
  };
  Parser2.prototype.oncomment = function(value) {
    var _a, _b, _c, _d;
    this.updatePosition(4);
    (_b = (_a = this.cbs).oncomment) === null || _b === void 0 ? void 0 : _b.call(_a, value);
    (_d = (_c = this.cbs).oncommentend) === null || _d === void 0 ? void 0 : _d.call(_c);
  };
  Parser2.prototype.oncdata = function(value) {
    var _a, _b, _c, _d, _e, _f;
    this.updatePosition(1);
    if (this.options.xmlMode || this.options.recognizeCDATA) {
      (_b = (_a = this.cbs).oncdatastart) === null || _b === void 0 ? void 0 : _b.call(_a);
      (_d = (_c = this.cbs).ontext) === null || _d === void 0 ? void 0 : _d.call(_c, value);
      (_f = (_e = this.cbs).oncdataend) === null || _f === void 0 ? void 0 : _f.call(_e);
    } else {
      this.oncomment("[CDATA[" + value + "]]");
    }
  };
  Parser2.prototype.onerror = function(err) {
    var _a, _b;
    (_b = (_a = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a, err);
  };
  Parser2.prototype.onend = function() {
    var _a, _b;
    if (this.cbs.onclosetag) {
      for (var i = this.stack.length; i > 0; this.cbs.onclosetag(this.stack[--i]))
        ;
    }
    (_b = (_a = this.cbs).onend) === null || _b === void 0 ? void 0 : _b.call(_a);
  };
  Parser2.prototype.reset = function() {
    var _a, _b, _c, _d;
    (_b = (_a = this.cbs).onreset) === null || _b === void 0 ? void 0 : _b.call(_a);
    this.tokenizer.reset();
    this.tagname = "";
    this.attribname = "";
    this.attribs = null;
    this.stack = [];
    (_d = (_c = this.cbs).onparserinit) === null || _d === void 0 ? void 0 : _d.call(_c, this);
  };
  Parser2.prototype.parseComplete = function(data) {
    this.reset();
    this.end(data);
  };
  Parser2.prototype.write = function(chunk) {
    this.tokenizer.write(chunk);
  };
  Parser2.prototype.end = function(chunk) {
    this.tokenizer.end(chunk);
  };
  Parser2.prototype.pause = function() {
    this.tokenizer.pause();
  };
  Parser2.prototype.resume = function() {
    this.tokenizer.resume();
  };
  Parser2.prototype.parseChunk = function(chunk) {
    this.write(chunk);
  };
  Parser2.prototype.done = function(chunk) {
    this.end(chunk);
  };
  return Parser2;
}();
Parser$3.Parser = Parser$2;
var lib$4 = {};
var lib$3 = {};
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.Doctype = exports2.CDATA = exports2.Tag = exports2.Style = exports2.Script = exports2.Comment = exports2.Directive = exports2.Text = exports2.Root = exports2.isTag = exports2.ElementType = void 0;
  var ElementType2;
  (function(ElementType3) {
    ElementType3["Root"] = "root";
    ElementType3["Text"] = "text";
    ElementType3["Directive"] = "directive";
    ElementType3["Comment"] = "comment";
    ElementType3["Script"] = "script";
    ElementType3["Style"] = "style";
    ElementType3["Tag"] = "tag";
    ElementType3["CDATA"] = "cdata";
    ElementType3["Doctype"] = "doctype";
  })(ElementType2 = exports2.ElementType || (exports2.ElementType = {}));
  function isTag2(elem) {
    return elem.type === ElementType2.Tag || elem.type === ElementType2.Script || elem.type === ElementType2.Style;
  }
  exports2.isTag = isTag2;
  exports2.Root = ElementType2.Root;
  exports2.Text = ElementType2.Text;
  exports2.Directive = ElementType2.Directive;
  exports2.Comment = ElementType2.Comment;
  exports2.Script = ElementType2.Script;
  exports2.Style = ElementType2.Style;
  exports2.Tag = ElementType2.Tag;
  exports2.CDATA = ElementType2.CDATA;
  exports2.Doctype = ElementType2.Doctype;
})(lib$3);
var node = {};
var __extends$1 = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __assign$1 = commonjsGlobal && commonjsGlobal.__assign || function() {
  __assign$1 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign$1.apply(this, arguments);
};
Object.defineProperty(node, "__esModule", { value: true });
node.cloneNode = node.hasChildren = node.isDocument = node.isDirective = node.isComment = node.isText = node.isCDATA = node.isTag = node.Element = node.Document = node.NodeWithChildren = node.ProcessingInstruction = node.Comment = node.Text = node.DataNode = node.Node = void 0;
var domelementtype_1$1 = lib$3;
var nodeTypes = /* @__PURE__ */ new Map([
  [domelementtype_1$1.ElementType.Tag, 1],
  [domelementtype_1$1.ElementType.Script, 1],
  [domelementtype_1$1.ElementType.Style, 1],
  [domelementtype_1$1.ElementType.Directive, 1],
  [domelementtype_1$1.ElementType.Text, 3],
  [domelementtype_1$1.ElementType.CDATA, 4],
  [domelementtype_1$1.ElementType.Comment, 8],
  [domelementtype_1$1.ElementType.Root, 9]
]);
var Node$5 = function() {
  function Node2(type) {
    this.type = type;
    this.parent = null;
    this.prev = null;
    this.next = null;
    this.startIndex = null;
    this.endIndex = null;
  }
  Object.defineProperty(Node2.prototype, "nodeType", {
    get: function() {
      var _a;
      return (_a = nodeTypes.get(this.type)) !== null && _a !== void 0 ? _a : 1;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Node2.prototype, "parentNode", {
    get: function() {
      return this.parent;
    },
    set: function(parent) {
      this.parent = parent;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Node2.prototype, "previousSibling", {
    get: function() {
      return this.prev;
    },
    set: function(prev) {
      this.prev = prev;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Node2.prototype, "nextSibling", {
    get: function() {
      return this.next;
    },
    set: function(next) {
      this.next = next;
    },
    enumerable: false,
    configurable: true
  });
  Node2.prototype.cloneNode = function(recursive) {
    if (recursive === void 0) {
      recursive = false;
    }
    return cloneNode$1(this, recursive);
  };
  return Node2;
}();
node.Node = Node$5;
var DataNode = function(_super) {
  __extends$1(DataNode2, _super);
  function DataNode2(type, data) {
    var _this = _super.call(this, type) || this;
    _this.data = data;
    return _this;
  }
  Object.defineProperty(DataNode2.prototype, "nodeValue", {
    get: function() {
      return this.data;
    },
    set: function(data) {
      this.data = data;
    },
    enumerable: false,
    configurable: true
  });
  return DataNode2;
}(Node$5);
node.DataNode = DataNode;
var Text = function(_super) {
  __extends$1(Text2, _super);
  function Text2(data) {
    return _super.call(this, domelementtype_1$1.ElementType.Text, data) || this;
  }
  return Text2;
}(DataNode);
node.Text = Text;
var Comment$5 = function(_super) {
  __extends$1(Comment2, _super);
  function Comment2(data) {
    return _super.call(this, domelementtype_1$1.ElementType.Comment, data) || this;
  }
  return Comment2;
}(DataNode);
node.Comment = Comment$5;
var ProcessingInstruction = function(_super) {
  __extends$1(ProcessingInstruction2, _super);
  function ProcessingInstruction2(name, data) {
    var _this = _super.call(this, domelementtype_1$1.ElementType.Directive, data) || this;
    _this.name = name;
    return _this;
  }
  return ProcessingInstruction2;
}(DataNode);
node.ProcessingInstruction = ProcessingInstruction;
var NodeWithChildren = function(_super) {
  __extends$1(NodeWithChildren2, _super);
  function NodeWithChildren2(type, children) {
    var _this = _super.call(this, type) || this;
    _this.children = children;
    return _this;
  }
  Object.defineProperty(NodeWithChildren2.prototype, "firstChild", {
    get: function() {
      var _a;
      return (_a = this.children[0]) !== null && _a !== void 0 ? _a : null;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(NodeWithChildren2.prototype, "lastChild", {
    get: function() {
      return this.children.length > 0 ? this.children[this.children.length - 1] : null;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(NodeWithChildren2.prototype, "childNodes", {
    get: function() {
      return this.children;
    },
    set: function(children) {
      this.children = children;
    },
    enumerable: false,
    configurable: true
  });
  return NodeWithChildren2;
}(Node$5);
node.NodeWithChildren = NodeWithChildren;
var Document$4 = function(_super) {
  __extends$1(Document2, _super);
  function Document2(children) {
    return _super.call(this, domelementtype_1$1.ElementType.Root, children) || this;
  }
  return Document2;
}(NodeWithChildren);
node.Document = Document$4;
var Element = function(_super) {
  __extends$1(Element2, _super);
  function Element2(name, attribs, children, type) {
    if (children === void 0) {
      children = [];
    }
    if (type === void 0) {
      type = name === "script" ? domelementtype_1$1.ElementType.Script : name === "style" ? domelementtype_1$1.ElementType.Style : domelementtype_1$1.ElementType.Tag;
    }
    var _this = _super.call(this, type, children) || this;
    _this.name = name;
    _this.attribs = attribs;
    return _this;
  }
  Object.defineProperty(Element2.prototype, "tagName", {
    get: function() {
      return this.name;
    },
    set: function(name) {
      this.name = name;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Element2.prototype, "attributes", {
    get: function() {
      var _this = this;
      return Object.keys(this.attribs).map(function(name) {
        var _a, _b;
        return {
          name,
          value: _this.attribs[name],
          namespace: (_a = _this["x-attribsNamespace"]) === null || _a === void 0 ? void 0 : _a[name],
          prefix: (_b = _this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name]
        };
      });
    },
    enumerable: false,
    configurable: true
  });
  return Element2;
}(NodeWithChildren);
node.Element = Element;
function isTag(node2) {
  return (0, domelementtype_1$1.isTag)(node2);
}
node.isTag = isTag;
function isCDATA(node2) {
  return node2.type === domelementtype_1$1.ElementType.CDATA;
}
node.isCDATA = isCDATA;
function isText(node2) {
  return node2.type === domelementtype_1$1.ElementType.Text;
}
node.isText = isText;
function isComment(node2) {
  return node2.type === domelementtype_1$1.ElementType.Comment;
}
node.isComment = isComment;
function isDirective(node2) {
  return node2.type === domelementtype_1$1.ElementType.Directive;
}
node.isDirective = isDirective;
function isDocument(node2) {
  return node2.type === domelementtype_1$1.ElementType.Root;
}
node.isDocument = isDocument;
function hasChildren(node2) {
  return Object.prototype.hasOwnProperty.call(node2, "children");
}
node.hasChildren = hasChildren;
function cloneNode$1(node2, recursive) {
  if (recursive === void 0) {
    recursive = false;
  }
  var result2;
  if (isText(node2)) {
    result2 = new Text(node2.data);
  } else if (isComment(node2)) {
    result2 = new Comment$5(node2.data);
  } else if (isTag(node2)) {
    var children = recursive ? cloneChildren(node2.children) : [];
    var clone_1 = new Element(node2.name, __assign$1({}, node2.attribs), children);
    children.forEach(function(child) {
      return child.parent = clone_1;
    });
    if (node2.namespace != null) {
      clone_1.namespace = node2.namespace;
    }
    if (node2["x-attribsNamespace"]) {
      clone_1["x-attribsNamespace"] = __assign$1({}, node2["x-attribsNamespace"]);
    }
    if (node2["x-attribsPrefix"]) {
      clone_1["x-attribsPrefix"] = __assign$1({}, node2["x-attribsPrefix"]);
    }
    result2 = clone_1;
  } else if (isCDATA(node2)) {
    var children = recursive ? cloneChildren(node2.children) : [];
    var clone_2 = new NodeWithChildren(domelementtype_1$1.ElementType.CDATA, children);
    children.forEach(function(child) {
      return child.parent = clone_2;
    });
    result2 = clone_2;
  } else if (isDocument(node2)) {
    var children = recursive ? cloneChildren(node2.children) : [];
    var clone_3 = new Document$4(children);
    children.forEach(function(child) {
      return child.parent = clone_3;
    });
    if (node2["x-mode"]) {
      clone_3["x-mode"] = node2["x-mode"];
    }
    result2 = clone_3;
  } else if (isDirective(node2)) {
    var instruction = new ProcessingInstruction(node2.name, node2.data);
    if (node2["x-name"] != null) {
      instruction["x-name"] = node2["x-name"];
      instruction["x-publicId"] = node2["x-publicId"];
      instruction["x-systemId"] = node2["x-systemId"];
    }
    result2 = instruction;
  } else {
    throw new Error("Not implemented yet: ".concat(node2.type));
  }
  result2.startIndex = node2.startIndex;
  result2.endIndex = node2.endIndex;
  if (node2.sourceCodeLocation != null) {
    result2.sourceCodeLocation = node2.sourceCodeLocation;
  }
  return result2;
}
node.cloneNode = cloneNode$1;
function cloneChildren(childs) {
  var children = childs.map(function(child) {
    return cloneNode$1(child, true);
  });
  for (var i = 1; i < children.length; i++) {
    children[i].prev = children[i - 1];
    children[i - 1].next = children[i];
  }
  return children;
}
(function(exports2) {
  var __createBinding2 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m, exports3) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
        __createBinding2(exports3, m, p);
  };
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.DomHandler = void 0;
  var domelementtype_12 = lib$3;
  var node_12 = node;
  __exportStar(node, exports2);
  var reWhitespace = /\s+/g;
  var defaultOpts = {
    normalizeWhitespace: false,
    withStartIndices: false,
    withEndIndices: false,
    xmlMode: false
  };
  var DomHandler = function() {
    function DomHandler2(callback, options, elementCB) {
      this.dom = [];
      this.root = new node_12.Document(this.dom);
      this.done = false;
      this.tagStack = [this.root];
      this.lastNode = null;
      this.parser = null;
      if (typeof options === "function") {
        elementCB = options;
        options = defaultOpts;
      }
      if (typeof callback === "object") {
        options = callback;
        callback = void 0;
      }
      this.callback = callback !== null && callback !== void 0 ? callback : null;
      this.options = options !== null && options !== void 0 ? options : defaultOpts;
      this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
    }
    DomHandler2.prototype.onparserinit = function(parser2) {
      this.parser = parser2;
    };
    DomHandler2.prototype.onreset = function() {
      this.dom = [];
      this.root = new node_12.Document(this.dom);
      this.done = false;
      this.tagStack = [this.root];
      this.lastNode = null;
      this.parser = null;
    };
    DomHandler2.prototype.onend = function() {
      if (this.done)
        return;
      this.done = true;
      this.parser = null;
      this.handleCallback(null);
    };
    DomHandler2.prototype.onerror = function(error) {
      this.handleCallback(error);
    };
    DomHandler2.prototype.onclosetag = function() {
      this.lastNode = null;
      var elem = this.tagStack.pop();
      if (this.options.withEndIndices) {
        elem.endIndex = this.parser.endIndex;
      }
      if (this.elementCB)
        this.elementCB(elem);
    };
    DomHandler2.prototype.onopentag = function(name, attribs) {
      var type = this.options.xmlMode ? domelementtype_12.ElementType.Tag : void 0;
      var element = new node_12.Element(name, attribs, void 0, type);
      this.addNode(element);
      this.tagStack.push(element);
    };
    DomHandler2.prototype.ontext = function(data) {
      var normalizeWhitespace = this.options.normalizeWhitespace;
      var lastNode = this.lastNode;
      if (lastNode && lastNode.type === domelementtype_12.ElementType.Text) {
        if (normalizeWhitespace) {
          lastNode.data = (lastNode.data + data).replace(reWhitespace, " ");
        } else {
          lastNode.data += data;
        }
        if (this.options.withEndIndices) {
          lastNode.endIndex = this.parser.endIndex;
        }
      } else {
        if (normalizeWhitespace) {
          data = data.replace(reWhitespace, " ");
        }
        var node2 = new node_12.Text(data);
        this.addNode(node2);
        this.lastNode = node2;
      }
    };
    DomHandler2.prototype.oncomment = function(data) {
      if (this.lastNode && this.lastNode.type === domelementtype_12.ElementType.Comment) {
        this.lastNode.data += data;
        return;
      }
      var node2 = new node_12.Comment(data);
      this.addNode(node2);
      this.lastNode = node2;
    };
    DomHandler2.prototype.oncommentend = function() {
      this.lastNode = null;
    };
    DomHandler2.prototype.oncdatastart = function() {
      var text = new node_12.Text("");
      var node2 = new node_12.NodeWithChildren(domelementtype_12.ElementType.CDATA, [text]);
      this.addNode(node2);
      text.parent = node2;
      this.lastNode = text;
    };
    DomHandler2.prototype.oncdataend = function() {
      this.lastNode = null;
    };
    DomHandler2.prototype.onprocessinginstruction = function(name, data) {
      var node2 = new node_12.ProcessingInstruction(name, data);
      this.addNode(node2);
    };
    DomHandler2.prototype.handleCallback = function(error) {
      if (typeof this.callback === "function") {
        this.callback(error, this.dom);
      } else if (error) {
        throw error;
      }
    };
    DomHandler2.prototype.addNode = function(node2) {
      var parent = this.tagStack[this.tagStack.length - 1];
      var previousSibling = parent.children[parent.children.length - 1];
      if (this.options.withStartIndices) {
        node2.startIndex = this.parser.startIndex;
      }
      if (this.options.withEndIndices) {
        node2.endIndex = this.parser.endIndex;
      }
      parent.children.push(node2);
      if (previousSibling) {
        node2.prev = previousSibling;
        previousSibling.next = node2;
      }
      node2.parent = parent;
      this.lastNode = null;
    };
    return DomHandler2;
  }();
  exports2.DomHandler = DomHandler;
  exports2.default = DomHandler;
})(lib$4);
var FeedHandler$1 = {};
var lib$2 = {};
var stringify$5 = {};
var lib$1 = {};
var lib = {};
var decode = {};
var __importDefault$3 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(decode, "__esModule", { value: true });
decode.decodeHTML = decode.decodeHTMLStrict = decode.decodeXML = void 0;
var entities_json_1$1 = __importDefault$3(require$$1$1);
var legacy_json_1 = __importDefault$3(require$$1);
var xml_json_1$1 = __importDefault$3(require$$0);
var decode_codepoint_1 = __importDefault$3(decode_codepoint);
var strictEntityRe = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
decode.decodeXML = getStrictDecoder(xml_json_1$1.default);
decode.decodeHTMLStrict = getStrictDecoder(entities_json_1$1.default);
function getStrictDecoder(map2) {
  var replace = getReplacer(map2);
  return function(str) {
    return String(str).replace(strictEntityRe, replace);
  };
}
var sorter = function(a, b) {
  return a < b ? 1 : -1;
};
decode.decodeHTML = function() {
  var legacy2 = Object.keys(legacy_json_1.default).sort(sorter);
  var keys2 = Object.keys(entities_json_1$1.default).sort(sorter);
  for (var i = 0, j = 0; i < keys2.length; i++) {
    if (legacy2[j] === keys2[i]) {
      keys2[i] += ";?";
      j++;
    } else {
      keys2[i] += ";";
    }
  }
  var re = new RegExp("&(?:" + keys2.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g");
  var replace = getReplacer(entities_json_1$1.default);
  function replacer(str) {
    if (str.substr(-1) !== ";")
      str += ";";
    return replace(str);
  }
  return function(str) {
    return String(str).replace(re, replacer);
  };
}();
function getReplacer(map2) {
  return function replace(str) {
    if (str.charAt(1) === "#") {
      var secondChar = str.charAt(2);
      if (secondChar === "X" || secondChar === "x") {
        return decode_codepoint_1.default(parseInt(str.substr(3), 16));
      }
      return decode_codepoint_1.default(parseInt(str.substr(2), 10));
    }
    return map2[str.slice(1, -1)] || str;
  };
}
var encode = {};
var __importDefault$2 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(encode, "__esModule", { value: true });
encode.escapeUTF8 = encode.escape = encode.encodeNonAsciiHTML = encode.encodeHTML = encode.encodeXML = void 0;
var xml_json_1 = __importDefault$2(require$$0);
var inverseXML = getInverseObj(xml_json_1.default);
var xmlReplacer = getInverseReplacer(inverseXML);
encode.encodeXML = getASCIIEncoder(inverseXML);
var entities_json_1 = __importDefault$2(require$$1$1);
var inverseHTML = getInverseObj(entities_json_1.default);
var htmlReplacer = getInverseReplacer(inverseHTML);
encode.encodeHTML = getInverse(inverseHTML, htmlReplacer);
encode.encodeNonAsciiHTML = getASCIIEncoder(inverseHTML);
function getInverseObj(obj) {
  return Object.keys(obj).sort().reduce(function(inverse, name) {
    inverse[obj[name]] = "&" + name + ";";
    return inverse;
  }, {});
}
function getInverseReplacer(inverse) {
  var single = [];
  var multiple = [];
  for (var _i = 0, _a = Object.keys(inverse); _i < _a.length; _i++) {
    var k = _a[_i];
    if (k.length === 1) {
      single.push("\\" + k);
    } else {
      multiple.push(k);
    }
  }
  single.sort();
  for (var start = 0; start < single.length - 1; start++) {
    var end = start;
    while (end < single.length - 1 && single[end].charCodeAt(1) + 1 === single[end + 1].charCodeAt(1)) {
      end += 1;
    }
    var count = 1 + end - start;
    if (count < 3)
      continue;
    single.splice(start, count, single[start] + "-" + single[end]);
  }
  multiple.unshift("[" + single.join("") + "]");
  return new RegExp(multiple.join("|"), "g");
}
var reNonASCII = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g;
var getCodePoint = String.prototype.codePointAt != null ? function(str) {
  return str.codePointAt(0);
} : function(c) {
  return (c.charCodeAt(0) - 55296) * 1024 + c.charCodeAt(1) - 56320 + 65536;
};
function singleCharReplacer(c) {
  return "&#x" + (c.length > 1 ? getCodePoint(c) : c.charCodeAt(0)).toString(16).toUpperCase() + ";";
}
function getInverse(inverse, re) {
  return function(data) {
    return data.replace(re, function(name) {
      return inverse[name];
    }).replace(reNonASCII, singleCharReplacer);
  };
}
var reEscapeChars = new RegExp(xmlReplacer.source + "|" + reNonASCII.source, "g");
function escape(data) {
  return data.replace(reEscapeChars, singleCharReplacer);
}
encode.escape = escape;
function escapeUTF8(data) {
  return data.replace(xmlReplacer, singleCharReplacer);
}
encode.escapeUTF8 = escapeUTF8;
function getASCIIEncoder(obj) {
  return function(data) {
    return data.replace(reEscapeChars, function(c) {
      return obj[c] || singleCharReplacer(c);
    });
  };
}
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.decodeXMLStrict = exports2.decodeHTML5Strict = exports2.decodeHTML4Strict = exports2.decodeHTML5 = exports2.decodeHTML4 = exports2.decodeHTMLStrict = exports2.decodeHTML = exports2.decodeXML = exports2.encodeHTML5 = exports2.encodeHTML4 = exports2.escapeUTF8 = exports2.escape = exports2.encodeNonAsciiHTML = exports2.encodeHTML = exports2.encodeXML = exports2.encode = exports2.decodeStrict = exports2.decode = void 0;
  var decode_1 = decode;
  var encode_1 = encode;
  function decode$1(data, level) {
    return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTML)(data);
  }
  exports2.decode = decode$1;
  function decodeStrict(data, level) {
    return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTMLStrict)(data);
  }
  exports2.decodeStrict = decodeStrict;
  function encode$1(data, level) {
    return (!level || level <= 0 ? encode_1.encodeXML : encode_1.encodeHTML)(data);
  }
  exports2.encode = encode$1;
  var encode_2 = encode;
  Object.defineProperty(exports2, "encodeXML", { enumerable: true, get: function() {
    return encode_2.encodeXML;
  } });
  Object.defineProperty(exports2, "encodeHTML", { enumerable: true, get: function() {
    return encode_2.encodeHTML;
  } });
  Object.defineProperty(exports2, "encodeNonAsciiHTML", { enumerable: true, get: function() {
    return encode_2.encodeNonAsciiHTML;
  } });
  Object.defineProperty(exports2, "escape", { enumerable: true, get: function() {
    return encode_2.escape;
  } });
  Object.defineProperty(exports2, "escapeUTF8", { enumerable: true, get: function() {
    return encode_2.escapeUTF8;
  } });
  Object.defineProperty(exports2, "encodeHTML4", { enumerable: true, get: function() {
    return encode_2.encodeHTML;
  } });
  Object.defineProperty(exports2, "encodeHTML5", { enumerable: true, get: function() {
    return encode_2.encodeHTML;
  } });
  var decode_2 = decode;
  Object.defineProperty(exports2, "decodeXML", { enumerable: true, get: function() {
    return decode_2.decodeXML;
  } });
  Object.defineProperty(exports2, "decodeHTML", { enumerable: true, get: function() {
    return decode_2.decodeHTML;
  } });
  Object.defineProperty(exports2, "decodeHTMLStrict", { enumerable: true, get: function() {
    return decode_2.decodeHTMLStrict;
  } });
  Object.defineProperty(exports2, "decodeHTML4", { enumerable: true, get: function() {
    return decode_2.decodeHTML;
  } });
  Object.defineProperty(exports2, "decodeHTML5", { enumerable: true, get: function() {
    return decode_2.decodeHTML;
  } });
  Object.defineProperty(exports2, "decodeHTML4Strict", { enumerable: true, get: function() {
    return decode_2.decodeHTMLStrict;
  } });
  Object.defineProperty(exports2, "decodeHTML5Strict", { enumerable: true, get: function() {
    return decode_2.decodeHTMLStrict;
  } });
  Object.defineProperty(exports2, "decodeXMLStrict", { enumerable: true, get: function() {
    return decode_2.decodeXML;
  } });
})(lib);
var foreignNames = {};
Object.defineProperty(foreignNames, "__esModule", { value: true });
foreignNames.attributeNames = foreignNames.elementNames = void 0;
foreignNames.elementNames = /* @__PURE__ */ new Map([
  ["altglyph", "altGlyph"],
  ["altglyphdef", "altGlyphDef"],
  ["altglyphitem", "altGlyphItem"],
  ["animatecolor", "animateColor"],
  ["animatemotion", "animateMotion"],
  ["animatetransform", "animateTransform"],
  ["clippath", "clipPath"],
  ["feblend", "feBlend"],
  ["fecolormatrix", "feColorMatrix"],
  ["fecomponenttransfer", "feComponentTransfer"],
  ["fecomposite", "feComposite"],
  ["feconvolvematrix", "feConvolveMatrix"],
  ["fediffuselighting", "feDiffuseLighting"],
  ["fedisplacementmap", "feDisplacementMap"],
  ["fedistantlight", "feDistantLight"],
  ["fedropshadow", "feDropShadow"],
  ["feflood", "feFlood"],
  ["fefunca", "feFuncA"],
  ["fefuncb", "feFuncB"],
  ["fefuncg", "feFuncG"],
  ["fefuncr", "feFuncR"],
  ["fegaussianblur", "feGaussianBlur"],
  ["feimage", "feImage"],
  ["femerge", "feMerge"],
  ["femergenode", "feMergeNode"],
  ["femorphology", "feMorphology"],
  ["feoffset", "feOffset"],
  ["fepointlight", "fePointLight"],
  ["fespecularlighting", "feSpecularLighting"],
  ["fespotlight", "feSpotLight"],
  ["fetile", "feTile"],
  ["feturbulence", "feTurbulence"],
  ["foreignobject", "foreignObject"],
  ["glyphref", "glyphRef"],
  ["lineargradient", "linearGradient"],
  ["radialgradient", "radialGradient"],
  ["textpath", "textPath"]
]);
foreignNames.attributeNames = /* @__PURE__ */ new Map([
  ["definitionurl", "definitionURL"],
  ["attributename", "attributeName"],
  ["attributetype", "attributeType"],
  ["basefrequency", "baseFrequency"],
  ["baseprofile", "baseProfile"],
  ["calcmode", "calcMode"],
  ["clippathunits", "clipPathUnits"],
  ["diffuseconstant", "diffuseConstant"],
  ["edgemode", "edgeMode"],
  ["filterunits", "filterUnits"],
  ["glyphref", "glyphRef"],
  ["gradienttransform", "gradientTransform"],
  ["gradientunits", "gradientUnits"],
  ["kernelmatrix", "kernelMatrix"],
  ["kernelunitlength", "kernelUnitLength"],
  ["keypoints", "keyPoints"],
  ["keysplines", "keySplines"],
  ["keytimes", "keyTimes"],
  ["lengthadjust", "lengthAdjust"],
  ["limitingconeangle", "limitingConeAngle"],
  ["markerheight", "markerHeight"],
  ["markerunits", "markerUnits"],
  ["markerwidth", "markerWidth"],
  ["maskcontentunits", "maskContentUnits"],
  ["maskunits", "maskUnits"],
  ["numoctaves", "numOctaves"],
  ["pathlength", "pathLength"],
  ["patterncontentunits", "patternContentUnits"],
  ["patterntransform", "patternTransform"],
  ["patternunits", "patternUnits"],
  ["pointsatx", "pointsAtX"],
  ["pointsaty", "pointsAtY"],
  ["pointsatz", "pointsAtZ"],
  ["preservealpha", "preserveAlpha"],
  ["preserveaspectratio", "preserveAspectRatio"],
  ["primitiveunits", "primitiveUnits"],
  ["refx", "refX"],
  ["refy", "refY"],
  ["repeatcount", "repeatCount"],
  ["repeatdur", "repeatDur"],
  ["requiredextensions", "requiredExtensions"],
  ["requiredfeatures", "requiredFeatures"],
  ["specularconstant", "specularConstant"],
  ["specularexponent", "specularExponent"],
  ["spreadmethod", "spreadMethod"],
  ["startoffset", "startOffset"],
  ["stddeviation", "stdDeviation"],
  ["stitchtiles", "stitchTiles"],
  ["surfacescale", "surfaceScale"],
  ["systemlanguage", "systemLanguage"],
  ["tablevalues", "tableValues"],
  ["targetx", "targetX"],
  ["targety", "targetY"],
  ["textlength", "textLength"],
  ["viewbox", "viewBox"],
  ["viewtarget", "viewTarget"],
  ["xchannelselector", "xChannelSelector"],
  ["ychannelselector", "yChannelSelector"],
  ["zoomandpan", "zoomAndPan"]
]);
var __assign = commonjsGlobal && commonjsGlobal.__assign || function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __createBinding$1 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  Object.defineProperty(o, k2, { enumerable: true, get: function() {
    return m[k];
  } });
} : function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault$1 = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
} : function(o, v) {
  o["default"] = v;
});
var __importStar$1 = commonjsGlobal && commonjsGlobal.__importStar || function(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result2 = {};
  if (mod != null) {
    for (var k in mod)
      if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
        __createBinding$1(result2, mod, k);
  }
  __setModuleDefault$1(result2, mod);
  return result2;
};
Object.defineProperty(lib$1, "__esModule", { value: true });
var ElementType = __importStar$1(lib$3);
var entities_1 = lib;
var foreignNames_1 = foreignNames;
var unencodedElements = /* @__PURE__ */ new Set([
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
]);
function formatAttributes(attributes, opts) {
  if (!attributes)
    return;
  return Object.keys(attributes).map(function(key) {
    var _a, _b;
    var value = (_a = attributes[key]) !== null && _a !== void 0 ? _a : "";
    if (opts.xmlMode === "foreign") {
      key = (_b = foreignNames_1.attributeNames.get(key)) !== null && _b !== void 0 ? _b : key;
    }
    if (!opts.emptyAttrs && !opts.xmlMode && value === "") {
      return key;
    }
    return key + '="' + (opts.decodeEntities !== false ? entities_1.encodeXML(value) : value.replace(/"/g, "&quot;")) + '"';
  }).join(" ");
}
var singleTag = /* @__PURE__ */ new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);
function render(node2, options) {
  if (options === void 0) {
    options = {};
  }
  var nodes = "length" in node2 ? node2 : [node2];
  var output = "";
  for (var i = 0; i < nodes.length; i++) {
    output += renderNode(nodes[i], options);
  }
  return output;
}
lib$1.default = render;
function renderNode(node2, options) {
  switch (node2.type) {
    case ElementType.Root:
      return render(node2.children, options);
    case ElementType.Directive:
    case ElementType.Doctype:
      return renderDirective(node2);
    case ElementType.Comment:
      return renderComment(node2);
    case ElementType.CDATA:
      return renderCdata(node2);
    case ElementType.Script:
    case ElementType.Style:
    case ElementType.Tag:
      return renderTag(node2, options);
    case ElementType.Text:
      return renderText(node2, options);
  }
}
var foreignModeIntegrationPoints = /* @__PURE__ */ new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignObject",
  "desc",
  "title"
]);
var foreignElements = /* @__PURE__ */ new Set(["svg", "math"]);
function renderTag(elem, opts) {
  var _a;
  if (opts.xmlMode === "foreign") {
    elem.name = (_a = foreignNames_1.elementNames.get(elem.name)) !== null && _a !== void 0 ? _a : elem.name;
    if (elem.parent && foreignModeIntegrationPoints.has(elem.parent.name)) {
      opts = __assign(__assign({}, opts), { xmlMode: false });
    }
  }
  if (!opts.xmlMode && foreignElements.has(elem.name)) {
    opts = __assign(__assign({}, opts), { xmlMode: "foreign" });
  }
  var tag = "<" + elem.name;
  var attribs = formatAttributes(elem.attribs, opts);
  if (attribs) {
    tag += " " + attribs;
  }
  if (elem.children.length === 0 && (opts.xmlMode ? opts.selfClosingTags !== false : opts.selfClosingTags && singleTag.has(elem.name))) {
    if (!opts.xmlMode)
      tag += " ";
    tag += "/>";
  } else {
    tag += ">";
    if (elem.children.length > 0) {
      tag += render(elem.children, opts);
    }
    if (opts.xmlMode || !singleTag.has(elem.name)) {
      tag += "</" + elem.name + ">";
    }
  }
  return tag;
}
function renderDirective(elem) {
  return "<" + elem.data + ">";
}
function renderText(elem, opts) {
  var data = elem.data || "";
  if (opts.decodeEntities !== false && !(!opts.xmlMode && elem.parent && unencodedElements.has(elem.parent.name))) {
    data = entities_1.encodeXML(data);
  }
  return data;
}
function renderCdata(elem) {
  return "<![CDATA[" + elem.children[0].data + "]]>";
}
function renderComment(elem) {
  return "<!--" + elem.data + "-->";
}
var __importDefault$1 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(stringify$5, "__esModule", { value: true });
stringify$5.innerText = stringify$5.textContent = stringify$5.getText = stringify$5.getInnerHTML = stringify$5.getOuterHTML = void 0;
var domhandler_1$5 = lib$4;
var dom_serializer_1 = __importDefault$1(lib$1);
var domelementtype_1 = lib$3;
function getOuterHTML(node2, options) {
  return (0, dom_serializer_1.default)(node2, options);
}
stringify$5.getOuterHTML = getOuterHTML;
function getInnerHTML(node2, options) {
  return (0, domhandler_1$5.hasChildren)(node2) ? node2.children.map(function(node3) {
    return getOuterHTML(node3, options);
  }).join("") : "";
}
stringify$5.getInnerHTML = getInnerHTML;
function getText(node2) {
  if (Array.isArray(node2))
    return node2.map(getText).join("");
  if ((0, domhandler_1$5.isTag)(node2))
    return node2.name === "br" ? "\n" : getText(node2.children);
  if ((0, domhandler_1$5.isCDATA)(node2))
    return getText(node2.children);
  if ((0, domhandler_1$5.isText)(node2))
    return node2.data;
  return "";
}
stringify$5.getText = getText;
function textContent(node2) {
  if (Array.isArray(node2))
    return node2.map(textContent).join("");
  if ((0, domhandler_1$5.hasChildren)(node2) && !(0, domhandler_1$5.isComment)(node2)) {
    return textContent(node2.children);
  }
  if ((0, domhandler_1$5.isText)(node2))
    return node2.data;
  return "";
}
stringify$5.textContent = textContent;
function innerText(node2) {
  if (Array.isArray(node2))
    return node2.map(innerText).join("");
  if ((0, domhandler_1$5.hasChildren)(node2) && (node2.type === domelementtype_1.ElementType.Tag || (0, domhandler_1$5.isCDATA)(node2))) {
    return innerText(node2.children);
  }
  if ((0, domhandler_1$5.isText)(node2))
    return node2.data;
  return "";
}
stringify$5.innerText = innerText;
var traversal = {};
Object.defineProperty(traversal, "__esModule", { value: true });
traversal.prevElementSibling = traversal.nextElementSibling = traversal.getName = traversal.hasAttrib = traversal.getAttributeValue = traversal.getSiblings = traversal.getParent = traversal.getChildren = void 0;
var domhandler_1$4 = lib$4;
var emptyArray = [];
function getChildren(elem) {
  var _a;
  return (_a = elem.children) !== null && _a !== void 0 ? _a : emptyArray;
}
traversal.getChildren = getChildren;
function getParent(elem) {
  return elem.parent || null;
}
traversal.getParent = getParent;
function getSiblings(elem) {
  var _a, _b;
  var parent = getParent(elem);
  if (parent != null)
    return getChildren(parent);
  var siblings = [elem];
  var prev = elem.prev, next = elem.next;
  while (prev != null) {
    siblings.unshift(prev);
    _a = prev, prev = _a.prev;
  }
  while (next != null) {
    siblings.push(next);
    _b = next, next = _b.next;
  }
  return siblings;
}
traversal.getSiblings = getSiblings;
function getAttributeValue(elem, name) {
  var _a;
  return (_a = elem.attribs) === null || _a === void 0 ? void 0 : _a[name];
}
traversal.getAttributeValue = getAttributeValue;
function hasAttrib(elem, name) {
  return elem.attribs != null && Object.prototype.hasOwnProperty.call(elem.attribs, name) && elem.attribs[name] != null;
}
traversal.hasAttrib = hasAttrib;
function getName(elem) {
  return elem.name;
}
traversal.getName = getName;
function nextElementSibling(elem) {
  var _a;
  var next = elem.next;
  while (next !== null && !(0, domhandler_1$4.isTag)(next))
    _a = next, next = _a.next;
  return next;
}
traversal.nextElementSibling = nextElementSibling;
function prevElementSibling(elem) {
  var _a;
  var prev = elem.prev;
  while (prev !== null && !(0, domhandler_1$4.isTag)(prev))
    _a = prev, prev = _a.prev;
  return prev;
}
traversal.prevElementSibling = prevElementSibling;
var manipulation = {};
Object.defineProperty(manipulation, "__esModule", { value: true });
manipulation.prepend = manipulation.prependChild = manipulation.append = manipulation.appendChild = manipulation.replaceElement = manipulation.removeElement = void 0;
function removeElement(elem) {
  if (elem.prev)
    elem.prev.next = elem.next;
  if (elem.next)
    elem.next.prev = elem.prev;
  if (elem.parent) {
    var childs = elem.parent.children;
    childs.splice(childs.lastIndexOf(elem), 1);
  }
}
manipulation.removeElement = removeElement;
function replaceElement(elem, replacement) {
  var prev = replacement.prev = elem.prev;
  if (prev) {
    prev.next = replacement;
  }
  var next = replacement.next = elem.next;
  if (next) {
    next.prev = replacement;
  }
  var parent = replacement.parent = elem.parent;
  if (parent) {
    var childs = parent.children;
    childs[childs.lastIndexOf(elem)] = replacement;
  }
}
manipulation.replaceElement = replaceElement;
function appendChild(elem, child) {
  removeElement(child);
  child.next = null;
  child.parent = elem;
  if (elem.children.push(child) > 1) {
    var sibling = elem.children[elem.children.length - 2];
    sibling.next = child;
    child.prev = sibling;
  } else {
    child.prev = null;
  }
}
manipulation.appendChild = appendChild;
function append(elem, next) {
  removeElement(next);
  var parent = elem.parent;
  var currNext = elem.next;
  next.next = currNext;
  next.prev = elem;
  elem.next = next;
  next.parent = parent;
  if (currNext) {
    currNext.prev = next;
    if (parent) {
      var childs = parent.children;
      childs.splice(childs.lastIndexOf(currNext), 0, next);
    }
  } else if (parent) {
    parent.children.push(next);
  }
}
manipulation.append = append;
function prependChild(elem, child) {
  removeElement(child);
  child.parent = elem;
  child.prev = null;
  if (elem.children.unshift(child) !== 1) {
    var sibling = elem.children[1];
    sibling.prev = child;
    child.next = sibling;
  } else {
    child.next = null;
  }
}
manipulation.prependChild = prependChild;
function prepend(elem, prev) {
  removeElement(prev);
  var parent = elem.parent;
  if (parent) {
    var childs = parent.children;
    childs.splice(childs.indexOf(elem), 0, prev);
  }
  if (elem.prev) {
    elem.prev.next = prev;
  }
  prev.parent = parent;
  prev.prev = elem.prev;
  prev.next = elem;
  elem.prev = prev;
}
manipulation.prepend = prepend;
var querying = {};
Object.defineProperty(querying, "__esModule", { value: true });
querying.findAll = querying.existsOne = querying.findOne = querying.findOneChild = querying.find = querying.filter = void 0;
var domhandler_1$3 = lib$4;
function filter$1(test, node2, recurse, limit) {
  if (recurse === void 0) {
    recurse = true;
  }
  if (limit === void 0) {
    limit = Infinity;
  }
  if (!Array.isArray(node2))
    node2 = [node2];
  return find(test, node2, recurse, limit);
}
querying.filter = filter$1;
function find(test, nodes, recurse, limit) {
  var result2 = [];
  for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
    var elem = nodes_1[_i];
    if (test(elem)) {
      result2.push(elem);
      if (--limit <= 0)
        break;
    }
    if (recurse && (0, domhandler_1$3.hasChildren)(elem) && elem.children.length > 0) {
      var children = find(test, elem.children, recurse, limit);
      result2.push.apply(result2, children);
      limit -= children.length;
      if (limit <= 0)
        break;
    }
  }
  return result2;
}
querying.find = find;
function findOneChild(test, nodes) {
  return nodes.find(test);
}
querying.findOneChild = findOneChild;
function findOne(test, nodes, recurse) {
  if (recurse === void 0) {
    recurse = true;
  }
  var elem = null;
  for (var i = 0; i < nodes.length && !elem; i++) {
    var checked = nodes[i];
    if (!(0, domhandler_1$3.isTag)(checked)) {
      continue;
    } else if (test(checked)) {
      elem = checked;
    } else if (recurse && checked.children.length > 0) {
      elem = findOne(test, checked.children);
    }
  }
  return elem;
}
querying.findOne = findOne;
function existsOne(test, nodes) {
  return nodes.some(function(checked) {
    return (0, domhandler_1$3.isTag)(checked) && (test(checked) || checked.children.length > 0 && existsOne(test, checked.children));
  });
}
querying.existsOne = existsOne;
function findAll(test, nodes) {
  var _a;
  var result2 = [];
  var stack = nodes.filter(domhandler_1$3.isTag);
  var elem;
  while (elem = stack.shift()) {
    var children = (_a = elem.children) === null || _a === void 0 ? void 0 : _a.filter(domhandler_1$3.isTag);
    if (children && children.length > 0) {
      stack.unshift.apply(stack, children);
    }
    if (test(elem))
      result2.push(elem);
  }
  return result2;
}
querying.findAll = findAll;
var legacy = {};
Object.defineProperty(legacy, "__esModule", { value: true });
legacy.getElementsByTagType = legacy.getElementsByTagName = legacy.getElementById = legacy.getElements = legacy.testElement = void 0;
var domhandler_1$2 = lib$4;
var querying_1 = querying;
var Checks = {
  tag_name: function(name) {
    if (typeof name === "function") {
      return function(elem) {
        return (0, domhandler_1$2.isTag)(elem) && name(elem.name);
      };
    } else if (name === "*") {
      return domhandler_1$2.isTag;
    }
    return function(elem) {
      return (0, domhandler_1$2.isTag)(elem) && elem.name === name;
    };
  },
  tag_type: function(type) {
    if (typeof type === "function") {
      return function(elem) {
        return type(elem.type);
      };
    }
    return function(elem) {
      return elem.type === type;
    };
  },
  tag_contains: function(data) {
    if (typeof data === "function") {
      return function(elem) {
        return (0, domhandler_1$2.isText)(elem) && data(elem.data);
      };
    }
    return function(elem) {
      return (0, domhandler_1$2.isText)(elem) && elem.data === data;
    };
  }
};
function getAttribCheck(attrib, value) {
  if (typeof value === "function") {
    return function(elem) {
      return (0, domhandler_1$2.isTag)(elem) && value(elem.attribs[attrib]);
    };
  }
  return function(elem) {
    return (0, domhandler_1$2.isTag)(elem) && elem.attribs[attrib] === value;
  };
}
function combineFuncs(a, b) {
  return function(elem) {
    return a(elem) || b(elem);
  };
}
function compileTest(options) {
  var funcs = Object.keys(options).map(function(key) {
    var value = options[key];
    return Object.prototype.hasOwnProperty.call(Checks, key) ? Checks[key](value) : getAttribCheck(key, value);
  });
  return funcs.length === 0 ? null : funcs.reduce(combineFuncs);
}
function testElement(options, node2) {
  var test = compileTest(options);
  return test ? test(node2) : true;
}
legacy.testElement = testElement;
function getElements$1(options, nodes, recurse, limit) {
  if (limit === void 0) {
    limit = Infinity;
  }
  var test = compileTest(options);
  return test ? (0, querying_1.filter)(test, nodes, recurse, limit) : [];
}
legacy.getElements = getElements$1;
function getElementById(id, nodes, recurse) {
  if (recurse === void 0) {
    recurse = true;
  }
  if (!Array.isArray(nodes))
    nodes = [nodes];
  return (0, querying_1.findOne)(getAttribCheck("id", id), nodes, recurse);
}
legacy.getElementById = getElementById;
function getElementsByTagName(tagName, nodes, recurse, limit) {
  if (recurse === void 0) {
    recurse = true;
  }
  if (limit === void 0) {
    limit = Infinity;
  }
  return (0, querying_1.filter)(Checks.tag_name(tagName), nodes, recurse, limit);
}
legacy.getElementsByTagName = getElementsByTagName;
function getElementsByTagType(type, nodes, recurse, limit) {
  if (recurse === void 0) {
    recurse = true;
  }
  if (limit === void 0) {
    limit = Infinity;
  }
  return (0, querying_1.filter)(Checks.tag_type(type), nodes, recurse, limit);
}
legacy.getElementsByTagType = getElementsByTagType;
var helpers = {};
Object.defineProperty(helpers, "__esModule", { value: true });
helpers.uniqueSort = helpers.compareDocumentPosition = helpers.removeSubsets = void 0;
var domhandler_1$1 = lib$4;
function removeSubsets(nodes) {
  var idx = nodes.length;
  while (--idx >= 0) {
    var node2 = nodes[idx];
    if (idx > 0 && nodes.lastIndexOf(node2, idx - 1) >= 0) {
      nodes.splice(idx, 1);
      continue;
    }
    for (var ancestor = node2.parent; ancestor; ancestor = ancestor.parent) {
      if (nodes.includes(ancestor)) {
        nodes.splice(idx, 1);
        break;
      }
    }
  }
  return nodes;
}
helpers.removeSubsets = removeSubsets;
function compareDocumentPosition(nodeA, nodeB) {
  var aParents = [];
  var bParents = [];
  if (nodeA === nodeB) {
    return 0;
  }
  var current = (0, domhandler_1$1.hasChildren)(nodeA) ? nodeA : nodeA.parent;
  while (current) {
    aParents.unshift(current);
    current = current.parent;
  }
  current = (0, domhandler_1$1.hasChildren)(nodeB) ? nodeB : nodeB.parent;
  while (current) {
    bParents.unshift(current);
    current = current.parent;
  }
  var maxIdx = Math.min(aParents.length, bParents.length);
  var idx = 0;
  while (idx < maxIdx && aParents[idx] === bParents[idx]) {
    idx++;
  }
  if (idx === 0) {
    return 1;
  }
  var sharedParent = aParents[idx - 1];
  var siblings = sharedParent.children;
  var aSibling = aParents[idx];
  var bSibling = bParents[idx];
  if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
    if (sharedParent === nodeB) {
      return 4 | 16;
    }
    return 4;
  }
  if (sharedParent === nodeA) {
    return 2 | 8;
  }
  return 2;
}
helpers.compareDocumentPosition = compareDocumentPosition;
function uniqueSort(nodes) {
  nodes = nodes.filter(function(node2, i, arr) {
    return !arr.includes(node2, i + 1);
  });
  nodes.sort(function(a, b) {
    var relative2 = compareDocumentPosition(a, b);
    if (relative2 & 2) {
      return -1;
    } else if (relative2 & 4) {
      return 1;
    }
    return 0;
  });
  return nodes;
}
helpers.uniqueSort = uniqueSort;
var feeds = {};
Object.defineProperty(feeds, "__esModule", { value: true });
feeds.getFeed = void 0;
var stringify_1$1 = stringify$5;
var legacy_1 = legacy;
function getFeed(doc) {
  var feedRoot = getOneElement$1(isValidFeed$1, doc);
  return !feedRoot ? null : feedRoot.name === "feed" ? getAtomFeed(feedRoot) : getRssFeed(feedRoot);
}
feeds.getFeed = getFeed;
function getAtomFeed(feedRoot) {
  var _a;
  var childs = feedRoot.children;
  var feed = {
    type: "atom",
    items: (0, legacy_1.getElementsByTagName)("entry", childs).map(function(item) {
      var _a2;
      var children = item.children;
      var entry = { media: getMediaElements$1(children) };
      addConditionally$1(entry, "id", "id", children);
      addConditionally$1(entry, "title", "title", children);
      var href2 = (_a2 = getOneElement$1("link", children)) === null || _a2 === void 0 ? void 0 : _a2.attribs.href;
      if (href2) {
        entry.link = href2;
      }
      var description = fetch$1("summary", children) || fetch$1("content", children);
      if (description) {
        entry.description = description;
      }
      var pubDate = fetch$1("updated", children);
      if (pubDate) {
        entry.pubDate = new Date(pubDate);
      }
      return entry;
    })
  };
  addConditionally$1(feed, "id", "id", childs);
  addConditionally$1(feed, "title", "title", childs);
  var href = (_a = getOneElement$1("link", childs)) === null || _a === void 0 ? void 0 : _a.attribs.href;
  if (href) {
    feed.link = href;
  }
  addConditionally$1(feed, "description", "subtitle", childs);
  var updated = fetch$1("updated", childs);
  if (updated) {
    feed.updated = new Date(updated);
  }
  addConditionally$1(feed, "author", "email", childs, true);
  return feed;
}
function getRssFeed(feedRoot) {
  var _a, _b;
  var childs = (_b = (_a = getOneElement$1("channel", feedRoot.children)) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : [];
  var feed = {
    type: feedRoot.name.substr(0, 3),
    id: "",
    items: (0, legacy_1.getElementsByTagName)("item", feedRoot.children).map(function(item) {
      var children = item.children;
      var entry = { media: getMediaElements$1(children) };
      addConditionally$1(entry, "id", "guid", children);
      addConditionally$1(entry, "title", "title", children);
      addConditionally$1(entry, "link", "link", children);
      addConditionally$1(entry, "description", "description", children);
      var pubDate = fetch$1("pubDate", children);
      if (pubDate)
        entry.pubDate = new Date(pubDate);
      return entry;
    })
  };
  addConditionally$1(feed, "title", "title", childs);
  addConditionally$1(feed, "link", "link", childs);
  addConditionally$1(feed, "description", "description", childs);
  var updated = fetch$1("lastBuildDate", childs);
  if (updated) {
    feed.updated = new Date(updated);
  }
  addConditionally$1(feed, "author", "managingEditor", childs, true);
  return feed;
}
var MEDIA_KEYS_STRING = ["url", "type", "lang"];
var MEDIA_KEYS_INT = [
  "fileSize",
  "bitrate",
  "framerate",
  "samplingrate",
  "channels",
  "duration",
  "height",
  "width"
];
function getMediaElements$1(where) {
  return (0, legacy_1.getElementsByTagName)("media:content", where).map(function(elem) {
    var attribs = elem.attribs;
    var media = {
      medium: attribs.medium,
      isDefault: !!attribs.isDefault
    };
    for (var _i = 0, MEDIA_KEYS_STRING_1 = MEDIA_KEYS_STRING; _i < MEDIA_KEYS_STRING_1.length; _i++) {
      var attrib = MEDIA_KEYS_STRING_1[_i];
      if (attribs[attrib]) {
        media[attrib] = attribs[attrib];
      }
    }
    for (var _a = 0, MEDIA_KEYS_INT_1 = MEDIA_KEYS_INT; _a < MEDIA_KEYS_INT_1.length; _a++) {
      var attrib = MEDIA_KEYS_INT_1[_a];
      if (attribs[attrib]) {
        media[attrib] = parseInt(attribs[attrib], 10);
      }
    }
    if (attribs.expression) {
      media.expression = attribs.expression;
    }
    return media;
  });
}
function getOneElement$1(tagName, node2) {
  return (0, legacy_1.getElementsByTagName)(tagName, node2, true, 1)[0];
}
function fetch$1(tagName, where, recurse) {
  if (recurse === void 0) {
    recurse = false;
  }
  return (0, stringify_1$1.textContent)((0, legacy_1.getElementsByTagName)(tagName, where, recurse, 1)).trim();
}
function addConditionally$1(obj, prop2, tagName, where, recurse) {
  if (recurse === void 0) {
    recurse = false;
  }
  var val = fetch$1(tagName, where, recurse);
  if (val)
    obj[prop2] = val;
}
function isValidFeed$1(value) {
  return value === "rss" || value === "feed" || value === "rdf:RDF";
}
(function(exports2) {
  var __createBinding2 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() {
      return m[k];
    } });
  } : function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m, exports3) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
        __createBinding2(exports3, m, p);
  };
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.hasChildren = exports2.isDocument = exports2.isComment = exports2.isText = exports2.isCDATA = exports2.isTag = void 0;
  __exportStar(stringify$5, exports2);
  __exportStar(traversal, exports2);
  __exportStar(manipulation, exports2);
  __exportStar(querying, exports2);
  __exportStar(legacy, exports2);
  __exportStar(helpers, exports2);
  __exportStar(feeds, exports2);
  var domhandler_12 = lib$4;
  Object.defineProperty(exports2, "isTag", { enumerable: true, get: function() {
    return domhandler_12.isTag;
  } });
  Object.defineProperty(exports2, "isCDATA", { enumerable: true, get: function() {
    return domhandler_12.isCDATA;
  } });
  Object.defineProperty(exports2, "isText", { enumerable: true, get: function() {
    return domhandler_12.isText;
  } });
  Object.defineProperty(exports2, "isComment", { enumerable: true, get: function() {
    return domhandler_12.isComment;
  } });
  Object.defineProperty(exports2, "isDocument", { enumerable: true, get: function() {
    return domhandler_12.isDocument;
  } });
  Object.defineProperty(exports2, "hasChildren", { enumerable: true, get: function() {
    return domhandler_12.hasChildren;
  } });
})(lib$2);
var __extends = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  Object.defineProperty(o, k2, { enumerable: true, get: function() {
    return m[k];
  } });
} : function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
} : function(o, v) {
  o["default"] = v;
});
var __importStar = commonjsGlobal && commonjsGlobal.__importStar || function(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result2 = {};
  if (mod != null) {
    for (var k in mod)
      if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
        __createBinding(result2, mod, k);
  }
  __setModuleDefault(result2, mod);
  return result2;
};
var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(FeedHandler$1, "__esModule", { value: true });
FeedHandler$1.parseFeed = FeedHandler$1.FeedHandler = void 0;
var domhandler_1 = __importDefault(lib$4);
var DomUtils = __importStar(lib$2);
var Parser_1 = Parser$3;
var FeedItemMediaMedium;
(function(FeedItemMediaMedium2) {
  FeedItemMediaMedium2[FeedItemMediaMedium2["image"] = 0] = "image";
  FeedItemMediaMedium2[FeedItemMediaMedium2["audio"] = 1] = "audio";
  FeedItemMediaMedium2[FeedItemMediaMedium2["video"] = 2] = "video";
  FeedItemMediaMedium2[FeedItemMediaMedium2["document"] = 3] = "document";
  FeedItemMediaMedium2[FeedItemMediaMedium2["executable"] = 4] = "executable";
})(FeedItemMediaMedium || (FeedItemMediaMedium = {}));
var FeedItemMediaExpression;
(function(FeedItemMediaExpression2) {
  FeedItemMediaExpression2[FeedItemMediaExpression2["sample"] = 0] = "sample";
  FeedItemMediaExpression2[FeedItemMediaExpression2["full"] = 1] = "full";
  FeedItemMediaExpression2[FeedItemMediaExpression2["nonstop"] = 2] = "nonstop";
})(FeedItemMediaExpression || (FeedItemMediaExpression = {}));
var FeedHandler = function(_super) {
  __extends(FeedHandler2, _super);
  function FeedHandler2(callback, options) {
    var _this = this;
    if (typeof callback === "object") {
      callback = void 0;
      options = callback;
    }
    _this = _super.call(this, callback, options) || this;
    return _this;
  }
  FeedHandler2.prototype.onend = function() {
    var _a, _b;
    var feedRoot = getOneElement(isValidFeed, this.dom);
    if (!feedRoot) {
      this.handleCallback(new Error("couldn't find root of feed"));
      return;
    }
    var feed = {};
    if (feedRoot.name === "feed") {
      var childs = feedRoot.children;
      feed.type = "atom";
      addConditionally(feed, "id", "id", childs);
      addConditionally(feed, "title", "title", childs);
      var href = getAttribute("href", getOneElement("link", childs));
      if (href) {
        feed.link = href;
      }
      addConditionally(feed, "description", "subtitle", childs);
      var updated = fetch("updated", childs);
      if (updated) {
        feed.updated = new Date(updated);
      }
      addConditionally(feed, "author", "email", childs, true);
      feed.items = getElements("entry", childs).map(function(item) {
        var entry = {};
        var children = item.children;
        addConditionally(entry, "id", "id", children);
        addConditionally(entry, "title", "title", children);
        var href2 = getAttribute("href", getOneElement("link", children));
        if (href2) {
          entry.link = href2;
        }
        var description = fetch("summary", children) || fetch("content", children);
        if (description) {
          entry.description = description;
        }
        var pubDate = fetch("updated", children);
        if (pubDate) {
          entry.pubDate = new Date(pubDate);
        }
        entry.media = getMediaElements(children);
        return entry;
      });
    } else {
      var childs = (_b = (_a = getOneElement("channel", feedRoot.children)) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : [];
      feed.type = feedRoot.name.substr(0, 3);
      feed.id = "";
      addConditionally(feed, "title", "title", childs);
      addConditionally(feed, "link", "link", childs);
      addConditionally(feed, "description", "description", childs);
      var updated = fetch("lastBuildDate", childs);
      if (updated) {
        feed.updated = new Date(updated);
      }
      addConditionally(feed, "author", "managingEditor", childs, true);
      feed.items = getElements("item", feedRoot.children).map(function(item) {
        var entry = {};
        var children = item.children;
        addConditionally(entry, "id", "guid", children);
        addConditionally(entry, "title", "title", children);
        addConditionally(entry, "link", "link", children);
        addConditionally(entry, "description", "description", children);
        var pubDate = fetch("pubDate", children);
        if (pubDate)
          entry.pubDate = new Date(pubDate);
        entry.media = getMediaElements(children);
        return entry;
      });
    }
    this.feed = feed;
    this.handleCallback(null);
  };
  return FeedHandler2;
}(domhandler_1.default);
FeedHandler$1.FeedHandler = FeedHandler;
function getMediaElements(where) {
  return getElements("media:content", where).map(function(elem) {
    var media = {
      medium: elem.attribs.medium,
      isDefault: !!elem.attribs.isDefault
    };
    if (elem.attribs.url) {
      media.url = elem.attribs.url;
    }
    if (elem.attribs.fileSize) {
      media.fileSize = parseInt(elem.attribs.fileSize, 10);
    }
    if (elem.attribs.type) {
      media.type = elem.attribs.type;
    }
    if (elem.attribs.expression) {
      media.expression = elem.attribs.expression;
    }
    if (elem.attribs.bitrate) {
      media.bitrate = parseInt(elem.attribs.bitrate, 10);
    }
    if (elem.attribs.framerate) {
      media.framerate = parseInt(elem.attribs.framerate, 10);
    }
    if (elem.attribs.samplingrate) {
      media.samplingrate = parseInt(elem.attribs.samplingrate, 10);
    }
    if (elem.attribs.channels) {
      media.channels = parseInt(elem.attribs.channels, 10);
    }
    if (elem.attribs.duration) {
      media.duration = parseInt(elem.attribs.duration, 10);
    }
    if (elem.attribs.height) {
      media.height = parseInt(elem.attribs.height, 10);
    }
    if (elem.attribs.width) {
      media.width = parseInt(elem.attribs.width, 10);
    }
    if (elem.attribs.lang) {
      media.lang = elem.attribs.lang;
    }
    return media;
  });
}
function getElements(tagName, where) {
  return DomUtils.getElementsByTagName(tagName, where, true);
}
function getOneElement(tagName, node2) {
  return DomUtils.getElementsByTagName(tagName, node2, true, 1)[0];
}
function fetch(tagName, where, recurse) {
  if (recurse === void 0) {
    recurse = false;
  }
  return DomUtils.getText(DomUtils.getElementsByTagName(tagName, where, recurse, 1)).trim();
}
function getAttribute(name, elem) {
  if (!elem) {
    return null;
  }
  var attribs = elem.attribs;
  return attribs[name];
}
function addConditionally(obj, prop2, what, where, recurse) {
  if (recurse === void 0) {
    recurse = false;
  }
  var tmp = fetch(what, where, recurse);
  if (tmp)
    obj[prop2] = tmp;
}
function isValidFeed(value) {
  return value === "rss" || value === "feed" || value === "rdf:RDF";
}
function parseFeed(feed, options) {
  if (options === void 0) {
    options = { xmlMode: true };
  }
  var handler = new FeedHandler(options);
  new Parser_1.Parser(handler, options).end(feed);
  return handler.feed;
}
FeedHandler$1.parseFeed = parseFeed;
(function(exports2) {
  var __createBinding2 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() {
      return m[k];
    } });
  } : function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    o[k2] = m[k];
  });
  var __setModuleDefault2 = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
  } : function(o, v) {
    o["default"] = v;
  });
  var __importStar2 = commonjsGlobal && commonjsGlobal.__importStar || function(mod) {
    if (mod && mod.__esModule)
      return mod;
    var result2 = {};
    if (mod != null) {
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding2(result2, mod, k);
    }
    __setModuleDefault2(result2, mod);
    return result2;
  };
  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m, exports3) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
        __createBinding2(exports3, m, p);
  };
  var __importDefault2 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.RssHandler = exports2.DefaultHandler = exports2.DomUtils = exports2.ElementType = exports2.Tokenizer = exports2.createDomStream = exports2.parseDOM = exports2.parseDocument = exports2.DomHandler = exports2.Parser = void 0;
  var Parser_12 = Parser$3;
  Object.defineProperty(exports2, "Parser", { enumerable: true, get: function() {
    return Parser_12.Parser;
  } });
  var domhandler_12 = lib$4;
  Object.defineProperty(exports2, "DomHandler", { enumerable: true, get: function() {
    return domhandler_12.DomHandler;
  } });
  Object.defineProperty(exports2, "DefaultHandler", { enumerable: true, get: function() {
    return domhandler_12.DomHandler;
  } });
  function parseDocument(data, options) {
    var handler = new domhandler_12.DomHandler(void 0, options);
    new Parser_12.Parser(handler, options).end(data);
    return handler.root;
  }
  exports2.parseDocument = parseDocument;
  function parseDOM(data, options) {
    return parseDocument(data, options).children;
  }
  exports2.parseDOM = parseDOM;
  function createDomStream(cb, options, elementCb) {
    var handler = new domhandler_12.DomHandler(cb, options, elementCb);
    return new Parser_12.Parser(handler, options);
  }
  exports2.createDomStream = createDomStream;
  var Tokenizer_12 = Tokenizer$1;
  Object.defineProperty(exports2, "Tokenizer", { enumerable: true, get: function() {
    return __importDefault2(Tokenizer_12).default;
  } });
  var ElementType2 = __importStar2(lib$3);
  exports2.ElementType = ElementType2;
  __exportStar(FeedHandler$1, exports2);
  exports2.DomUtils = __importStar2(lib$2);
  var FeedHandler_1 = FeedHandler$1;
  Object.defineProperty(exports2, "RssHandler", { enumerable: true, get: function() {
    return FeedHandler_1.FeedHandler;
  } });
})(lib$5);
var escapeStringRegexp$1 = (string) => {
  if (typeof string !== "string") {
    throw new TypeError("Expected a string");
  }
  return string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
var isPlainObject$2 = {};
Object.defineProperty(isPlainObject$2, "__esModule", { value: true });
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function isObject(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
function isPlainObject$1(o) {
  var ctor, prot;
  if (isObject(o) === false)
    return false;
  ctor = o.constructor;
  if (ctor === void 0)
    return true;
  prot = ctor.prototype;
  if (isObject(prot) === false)
    return false;
  if (prot.hasOwnProperty("isPrototypeOf") === false) {
    return false;
  }
  return true;
}
isPlainObject$2.isPlainObject = isPlainObject$1;
var isMergeableObject = function isMergeableObject2(value) {
  return isNonNullObject(value) && !isSpecial(value);
};
function isNonNullObject(value) {
  return !!value && typeof value === "object";
}
function isSpecial(value) {
  var stringValue = Object.prototype.toString.call(value);
  return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
}
var canUseSymbol = typeof Symbol === "function" && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
function isReactElement(value) {
  return value.$$typeof === REACT_ELEMENT_TYPE;
}
function emptyTarget(val) {
  return Array.isArray(val) ? [] : {};
}
function cloneUnlessOtherwiseSpecified(value, options) {
  return options.clone !== false && options.isMergeableObject(value) ? deepmerge$1(emptyTarget(value), value, options) : value;
}
function defaultArrayMerge(target2, source, options) {
  return target2.concat(source).map(function(element) {
    return cloneUnlessOtherwiseSpecified(element, options);
  });
}
function getMergeFunction(key, options) {
  if (!options.customMerge) {
    return deepmerge$1;
  }
  var customMerge = options.customMerge(key);
  return typeof customMerge === "function" ? customMerge : deepmerge$1;
}
function getEnumerableOwnPropertySymbols(target2) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target2).filter(function(symbol) {
    return target2.propertyIsEnumerable(symbol);
  }) : [];
}
function getKeys(target2) {
  return Object.keys(target2).concat(getEnumerableOwnPropertySymbols(target2));
}
function propertyIsOnObject(object, property) {
  try {
    return property in object;
  } catch (_) {
    return false;
  }
}
function propertyIsUnsafe(target2, key) {
  return propertyIsOnObject(target2, key) && !(Object.hasOwnProperty.call(target2, key) && Object.propertyIsEnumerable.call(target2, key));
}
function mergeObject(target2, source, options) {
  var destination = {};
  if (options.isMergeableObject(target2)) {
    getKeys(target2).forEach(function(key) {
      destination[key] = cloneUnlessOtherwiseSpecified(target2[key], options);
    });
  }
  getKeys(source).forEach(function(key) {
    if (propertyIsUnsafe(target2, key)) {
      return;
    }
    if (propertyIsOnObject(target2, key) && options.isMergeableObject(source[key])) {
      destination[key] = getMergeFunction(key, options)(target2[key], source[key], options);
    } else {
      destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
    }
  });
  return destination;
}
function deepmerge$1(target2, source, options) {
  options = options || {};
  options.arrayMerge = options.arrayMerge || defaultArrayMerge;
  options.isMergeableObject = options.isMergeableObject || isMergeableObject;
  options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
  var sourceIsArray = Array.isArray(source);
  var targetIsArray = Array.isArray(target2);
  var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
  if (!sourceAndTargetTypesMatch) {
    return cloneUnlessOtherwiseSpecified(source, options);
  } else if (sourceIsArray) {
    return options.arrayMerge(target2, source, options);
  } else {
    return mergeObject(target2, source, options);
  }
}
deepmerge$1.all = function deepmergeAll(array, options) {
  if (!Array.isArray(array)) {
    throw new Error("first argument should be an array");
  }
  return array.reduce(function(prev, next) {
    return deepmerge$1(prev, next, options);
  }, {});
};
var deepmerge_1 = deepmerge$1;
var cjs = deepmerge_1;
var parseSrcset$1 = { exports: {} };
(function(module2) {
  (function(root2, factory) {
    if (module2.exports) {
      module2.exports = factory();
    } else {
      root2.parseSrcset = factory();
    }
  })(commonjsGlobal, function() {
    return function(input2) {
      function isSpace(c2) {
        return c2 === " " || c2 === "	" || c2 === "\n" || c2 === "\f" || c2 === "\r";
      }
      function collectCharacters(regEx) {
        var chars, match = regEx.exec(input2.substring(pos));
        if (match) {
          chars = match[0];
          pos += chars.length;
          return chars;
        }
      }
      var inputLength = input2.length, regexLeadingSpaces = /^[ \t\n\r\u000c]+/, regexLeadingCommasOrSpaces = /^[, \t\n\r\u000c]+/, regexLeadingNotSpaces = /^[^ \t\n\r\u000c]+/, regexTrailingCommas = /[,]+$/, regexNonNegativeInteger = /^\d+$/, regexFloatingPoint = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/, url, descriptors, currentDescriptor, state, c, pos = 0, candidates = [];
      while (true) {
        collectCharacters(regexLeadingCommasOrSpaces);
        if (pos >= inputLength) {
          return candidates;
        }
        url = collectCharacters(regexLeadingNotSpaces);
        descriptors = [];
        if (url.slice(-1) === ",") {
          url = url.replace(regexTrailingCommas, "");
          parseDescriptors();
        } else {
          tokenize2();
        }
      }
      function tokenize2() {
        collectCharacters(regexLeadingSpaces);
        currentDescriptor = "";
        state = "in descriptor";
        while (true) {
          c = input2.charAt(pos);
          if (state === "in descriptor") {
            if (isSpace(c)) {
              if (currentDescriptor) {
                descriptors.push(currentDescriptor);
                currentDescriptor = "";
                state = "after descriptor";
              }
            } else if (c === ",") {
              pos += 1;
              if (currentDescriptor) {
                descriptors.push(currentDescriptor);
              }
              parseDescriptors();
              return;
            } else if (c === "(") {
              currentDescriptor = currentDescriptor + c;
              state = "in parens";
            } else if (c === "") {
              if (currentDescriptor) {
                descriptors.push(currentDescriptor);
              }
              parseDescriptors();
              return;
            } else {
              currentDescriptor = currentDescriptor + c;
            }
          } else if (state === "in parens") {
            if (c === ")") {
              currentDescriptor = currentDescriptor + c;
              state = "in descriptor";
            } else if (c === "") {
              descriptors.push(currentDescriptor);
              parseDescriptors();
              return;
            } else {
              currentDescriptor = currentDescriptor + c;
            }
          } else if (state === "after descriptor") {
            if (isSpace(c))
              ;
            else if (c === "") {
              parseDescriptors();
              return;
            } else {
              state = "in descriptor";
              pos -= 1;
            }
          }
          pos += 1;
        }
      }
      function parseDescriptors() {
        var pError = false, w, d, h2, i, candidate = {}, desc, lastChar, value, intVal, floatVal;
        for (i = 0; i < descriptors.length; i++) {
          desc = descriptors[i];
          lastChar = desc[desc.length - 1];
          value = desc.substring(0, desc.length - 1);
          intVal = parseInt(value, 10);
          floatVal = parseFloat(value);
          if (regexNonNegativeInteger.test(value) && lastChar === "w") {
            if (w || d) {
              pError = true;
            }
            if (intVal === 0) {
              pError = true;
            } else {
              w = intVal;
            }
          } else if (regexFloatingPoint.test(value) && lastChar === "x") {
            if (w || d || h2) {
              pError = true;
            }
            if (floatVal < 0) {
              pError = true;
            } else {
              d = floatVal;
            }
          } else if (regexNonNegativeInteger.test(value) && lastChar === "h") {
            if (h2 || d) {
              pError = true;
            }
            if (intVal === 0) {
              pError = true;
            } else {
              h2 = intVal;
            }
          } else {
            pError = true;
          }
        }
        if (!pError) {
          candidate.url = url;
          if (w) {
            candidate.w = w;
          }
          if (d) {
            candidate.d = d;
          }
          if (h2) {
            candidate.h = h2;
          }
          candidates.push(candidate);
        } else if (console && console.log) {
          console.log("Invalid srcset descriptor found in '" + input2 + "' at '" + desc + "'.");
        }
      }
    };
  });
})(parseSrcset$1);
var picocolors_browser = { exports: {} };
var x = String;
var create = function() {
  return { isColorSupported: false, reset: x, bold: x, dim: x, italic: x, underline: x, inverse: x, hidden: x, strikethrough: x, black: x, red: x, green: x, yellow: x, blue: x, magenta: x, cyan: x, white: x, gray: x, bgBlack: x, bgRed: x, bgGreen: x, bgYellow: x, bgBlue: x, bgMagenta: x, bgCyan: x, bgWhite: x };
};
picocolors_browser.exports = create();
picocolors_browser.exports.createColors = create;
var __viteBrowserExternal = new Proxy({}, {
  get() {
    throw new Error('Module "" has been externalized for browser compatibility and cannot be accessed in client code.');
  }
});
var __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" }));
var require$$2 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
let pico = picocolors_browser.exports;
let terminalHighlight$1 = require$$2;
class CssSyntaxError$3 extends Error {
  constructor(message, line, column, source, file, plugin2) {
    super(message);
    this.name = "CssSyntaxError";
    this.reason = message;
    if (file) {
      this.file = file;
    }
    if (source) {
      this.source = source;
    }
    if (plugin2) {
      this.plugin = plugin2;
    }
    if (typeof line !== "undefined" && typeof column !== "undefined") {
      if (typeof line === "number") {
        this.line = line;
        this.column = column;
      } else {
        this.line = line.line;
        this.column = line.column;
        this.endLine = column.line;
        this.endColumn = column.column;
      }
    }
    this.setMessage();
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CssSyntaxError$3);
    }
  }
  setMessage() {
    this.message = this.plugin ? this.plugin + ": " : "";
    this.message += this.file ? this.file : "<css input>";
    if (typeof this.line !== "undefined") {
      this.message += ":" + this.line + ":" + this.column;
    }
    this.message += ": " + this.reason;
  }
  showSourceCode(color) {
    if (!this.source)
      return "";
    let css = this.source;
    if (color == null)
      color = pico.isColorSupported;
    if (terminalHighlight$1) {
      if (color)
        css = terminalHighlight$1(css);
    }
    let lines = css.split(/\r?\n/);
    let start = Math.max(this.line - 3, 0);
    let end = Math.min(this.line + 2, lines.length);
    let maxWidth = String(end).length;
    let mark, aside;
    if (color) {
      let { bold, red, gray } = pico.createColors(true);
      mark = (text) => bold(red(text));
      aside = (text) => gray(text);
    } else {
      mark = aside = (str) => str;
    }
    return lines.slice(start, end).map((line, index) => {
      let number = start + 1 + index;
      let gutter = " " + (" " + number).slice(-maxWidth) + " | ";
      if (number === this.line) {
        let spacing = aside(gutter.replace(/\d/g, " ")) + line.slice(0, this.column - 1).replace(/[^\t]/g, " ");
        return mark(">") + aside(gutter) + line + "\n " + spacing + mark("^");
      }
      return " " + aside(gutter) + line;
    }).join("\n");
  }
  toString() {
    let code = this.showSourceCode();
    if (code) {
      code = "\n\n" + code + "\n";
    }
    return this.name + ": " + this.message + code;
  }
}
var cssSyntaxError = CssSyntaxError$3;
CssSyntaxError$3.default = CssSyntaxError$3;
var symbols = {};
symbols.isClean = Symbol("isClean");
symbols.my = Symbol("my");
const DEFAULT_RAW = {
  colon: ": ",
  indent: "    ",
  beforeDecl: "\n",
  beforeRule: "\n",
  beforeOpen: " ",
  beforeClose: "\n",
  beforeComment: "\n",
  after: "\n",
  emptyBody: "",
  commentLeft: " ",
  commentRight: " ",
  semicolon: false
};
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}
class Stringifier$2 {
  constructor(builder) {
    this.builder = builder;
  }
  stringify(node2, semicolon) {
    if (!this[node2.type]) {
      throw new Error("Unknown AST node type " + node2.type + ". Maybe you need to change PostCSS stringifier.");
    }
    this[node2.type](node2, semicolon);
  }
  document(node2) {
    this.body(node2);
  }
  root(node2) {
    this.body(node2);
    if (node2.raws.after)
      this.builder(node2.raws.after);
  }
  comment(node2) {
    let left = this.raw(node2, "left", "commentLeft");
    let right = this.raw(node2, "right", "commentRight");
    this.builder("/*" + left + node2.text + right + "*/", node2);
  }
  decl(node2, semicolon) {
    let between2 = this.raw(node2, "between", "colon");
    let string = node2.prop + between2 + this.rawValue(node2, "value");
    if (node2.important) {
      string += node2.raws.important || " !important";
    }
    if (semicolon)
      string += ";";
    this.builder(string, node2);
  }
  rule(node2) {
    this.block(node2, this.rawValue(node2, "selector"));
    if (node2.raws.ownSemicolon) {
      this.builder(node2.raws.ownSemicolon, node2, "end");
    }
  }
  atrule(node2, semicolon) {
    let name = "@" + node2.name;
    let params = node2.params ? this.rawValue(node2, "params") : "";
    if (typeof node2.raws.afterName !== "undefined") {
      name += node2.raws.afterName;
    } else if (params) {
      name += " ";
    }
    if (node2.nodes) {
      this.block(node2, name + params);
    } else {
      let end = (node2.raws.between || "") + (semicolon ? ";" : "");
      this.builder(name + params + end, node2);
    }
  }
  body(node2) {
    let last = node2.nodes.length - 1;
    while (last > 0) {
      if (node2.nodes[last].type !== "comment")
        break;
      last -= 1;
    }
    let semicolon = this.raw(node2, "semicolon");
    for (let i = 0; i < node2.nodes.length; i++) {
      let child = node2.nodes[i];
      let before = this.raw(child, "before");
      if (before)
        this.builder(before);
      this.stringify(child, last !== i || semicolon);
    }
  }
  block(node2, start) {
    let between2 = this.raw(node2, "between", "beforeOpen");
    this.builder(start + between2 + "{", node2, "start");
    let after;
    if (node2.nodes && node2.nodes.length) {
      this.body(node2);
      after = this.raw(node2, "after");
    } else {
      after = this.raw(node2, "after", "emptyBody");
    }
    if (after)
      this.builder(after);
    this.builder("}", node2, "end");
  }
  raw(node2, own, detect) {
    let value;
    if (!detect)
      detect = own;
    if (own) {
      value = node2.raws[own];
      if (typeof value !== "undefined")
        return value;
    }
    let parent = node2.parent;
    if (detect === "before") {
      if (!parent || parent.type === "root" && parent.first === node2) {
        return "";
      }
      if (parent && parent.type === "document") {
        return "";
      }
    }
    if (!parent)
      return DEFAULT_RAW[detect];
    let root2 = node2.root();
    if (!root2.rawCache)
      root2.rawCache = {};
    if (typeof root2.rawCache[detect] !== "undefined") {
      return root2.rawCache[detect];
    }
    if (detect === "before" || detect === "after") {
      return this.beforeAfter(node2, detect);
    } else {
      let method = "raw" + capitalize(detect);
      if (this[method]) {
        value = this[method](root2, node2);
      } else {
        root2.walk((i) => {
          value = i.raws[own];
          if (typeof value !== "undefined")
            return false;
        });
      }
    }
    if (typeof value === "undefined")
      value = DEFAULT_RAW[detect];
    root2.rawCache[detect] = value;
    return value;
  }
  rawSemicolon(root2) {
    let value;
    root2.walk((i) => {
      if (i.nodes && i.nodes.length && i.last.type === "decl") {
        value = i.raws.semicolon;
        if (typeof value !== "undefined")
          return false;
      }
    });
    return value;
  }
  rawEmptyBody(root2) {
    let value;
    root2.walk((i) => {
      if (i.nodes && i.nodes.length === 0) {
        value = i.raws.after;
        if (typeof value !== "undefined")
          return false;
      }
    });
    return value;
  }
  rawIndent(root2) {
    if (root2.raws.indent)
      return root2.raws.indent;
    let value;
    root2.walk((i) => {
      let p = i.parent;
      if (p && p !== root2 && p.parent && p.parent === root2) {
        if (typeof i.raws.before !== "undefined") {
          let parts = i.raws.before.split("\n");
          value = parts[parts.length - 1];
          value = value.replace(/\S/g, "");
          return false;
        }
      }
    });
    return value;
  }
  rawBeforeComment(root2, node2) {
    let value;
    root2.walkComments((i) => {
      if (typeof i.raws.before !== "undefined") {
        value = i.raws.before;
        if (value.includes("\n")) {
          value = value.replace(/[^\n]+$/, "");
        }
        return false;
      }
    });
    if (typeof value === "undefined") {
      value = this.raw(node2, null, "beforeDecl");
    } else if (value) {
      value = value.replace(/\S/g, "");
    }
    return value;
  }
  rawBeforeDecl(root2, node2) {
    let value;
    root2.walkDecls((i) => {
      if (typeof i.raws.before !== "undefined") {
        value = i.raws.before;
        if (value.includes("\n")) {
          value = value.replace(/[^\n]+$/, "");
        }
        return false;
      }
    });
    if (typeof value === "undefined") {
      value = this.raw(node2, null, "beforeRule");
    } else if (value) {
      value = value.replace(/\S/g, "");
    }
    return value;
  }
  rawBeforeRule(root2) {
    let value;
    root2.walk((i) => {
      if (i.nodes && (i.parent !== root2 || root2.first !== i)) {
        if (typeof i.raws.before !== "undefined") {
          value = i.raws.before;
          if (value.includes("\n")) {
            value = value.replace(/[^\n]+$/, "");
          }
          return false;
        }
      }
    });
    if (value)
      value = value.replace(/\S/g, "");
    return value;
  }
  rawBeforeClose(root2) {
    let value;
    root2.walk((i) => {
      if (i.nodes && i.nodes.length > 0) {
        if (typeof i.raws.after !== "undefined") {
          value = i.raws.after;
          if (value.includes("\n")) {
            value = value.replace(/[^\n]+$/, "");
          }
          return false;
        }
      }
    });
    if (value)
      value = value.replace(/\S/g, "");
    return value;
  }
  rawBeforeOpen(root2) {
    let value;
    root2.walk((i) => {
      if (i.type !== "decl") {
        value = i.raws.between;
        if (typeof value !== "undefined")
          return false;
      }
    });
    return value;
  }
  rawColon(root2) {
    let value;
    root2.walkDecls((i) => {
      if (typeof i.raws.between !== "undefined") {
        value = i.raws.between.replace(/[^\s:]/g, "");
        return false;
      }
    });
    return value;
  }
  beforeAfter(node2, detect) {
    let value;
    if (node2.type === "decl") {
      value = this.raw(node2, null, "beforeDecl");
    } else if (node2.type === "comment") {
      value = this.raw(node2, null, "beforeComment");
    } else if (detect === "before") {
      value = this.raw(node2, null, "beforeRule");
    } else {
      value = this.raw(node2, null, "beforeClose");
    }
    let buf = node2.parent;
    let depth = 0;
    while (buf && buf.type !== "root") {
      depth += 1;
      buf = buf.parent;
    }
    if (value.includes("\n")) {
      let indent = this.raw(node2, null, "indent");
      if (indent.length) {
        for (let step = 0; step < depth; step++)
          value += indent;
      }
    }
    return value;
  }
  rawValue(node2, prop2) {
    let value = node2[prop2];
    let raw = node2.raws[prop2];
    if (raw && raw.value === value) {
      return raw.raw;
    }
    return value;
  }
}
var stringifier = Stringifier$2;
Stringifier$2.default = Stringifier$2;
let Stringifier$1 = stringifier;
function stringify$4(node2, builder) {
  let str = new Stringifier$1(builder);
  str.stringify(node2);
}
var stringify_1 = stringify$4;
stringify$4.default = stringify$4;
let { isClean: isClean$2, my: my$2 } = symbols;
let CssSyntaxError$2 = cssSyntaxError;
let Stringifier = stringifier;
let stringify$3 = stringify_1;
function cloneNode(obj, parent) {
  let cloned = new obj.constructor();
  for (let i in obj) {
    if (!Object.prototype.hasOwnProperty.call(obj, i)) {
      continue;
    }
    if (i === "proxyCache")
      continue;
    let value = obj[i];
    let type = typeof value;
    if (i === "parent" && type === "object") {
      if (parent)
        cloned[i] = parent;
    } else if (i === "source") {
      cloned[i] = value;
    } else if (Array.isArray(value)) {
      cloned[i] = value.map((j) => cloneNode(j, cloned));
    } else {
      if (type === "object" && value !== null)
        value = cloneNode(value);
      cloned[i] = value;
    }
  }
  return cloned;
}
class Node$4 {
  constructor(defaults = {}) {
    this.raws = {};
    this[isClean$2] = false;
    this[my$2] = true;
    for (let name in defaults) {
      if (name === "nodes") {
        this.nodes = [];
        for (let node2 of defaults[name]) {
          if (typeof node2.clone === "function") {
            this.append(node2.clone());
          } else {
            this.append(node2);
          }
        }
      } else {
        this[name] = defaults[name];
      }
    }
  }
  error(message, opts = {}) {
    if (this.source) {
      let { start, end } = this.rangeBy(opts);
      return this.source.input.error(message, { line: start.line, column: start.column }, { line: end.line, column: end.column }, opts);
    }
    return new CssSyntaxError$2(message);
  }
  warn(result2, text, opts) {
    let data = { node: this };
    for (let i in opts)
      data[i] = opts[i];
    return result2.warn(text, data);
  }
  remove() {
    if (this.parent) {
      this.parent.removeChild(this);
    }
    this.parent = void 0;
    return this;
  }
  toString(stringifier2 = stringify$3) {
    if (stringifier2.stringify)
      stringifier2 = stringifier2.stringify;
    let result2 = "";
    stringifier2(this, (i) => {
      result2 += i;
    });
    return result2;
  }
  assign(overrides = {}) {
    for (let name in overrides) {
      this[name] = overrides[name];
    }
    return this;
  }
  clone(overrides = {}) {
    let cloned = cloneNode(this);
    for (let name in overrides) {
      cloned[name] = overrides[name];
    }
    return cloned;
  }
  cloneBefore(overrides = {}) {
    let cloned = this.clone(overrides);
    this.parent.insertBefore(this, cloned);
    return cloned;
  }
  cloneAfter(overrides = {}) {
    let cloned = this.clone(overrides);
    this.parent.insertAfter(this, cloned);
    return cloned;
  }
  replaceWith(...nodes) {
    if (this.parent) {
      let bookmark = this;
      let foundSelf = false;
      for (let node2 of nodes) {
        if (node2 === this) {
          foundSelf = true;
        } else if (foundSelf) {
          this.parent.insertAfter(bookmark, node2);
          bookmark = node2;
        } else {
          this.parent.insertBefore(bookmark, node2);
        }
      }
      if (!foundSelf) {
        this.remove();
      }
    }
    return this;
  }
  next() {
    if (!this.parent)
      return void 0;
    let index = this.parent.index(this);
    return this.parent.nodes[index + 1];
  }
  prev() {
    if (!this.parent)
      return void 0;
    let index = this.parent.index(this);
    return this.parent.nodes[index - 1];
  }
  before(add) {
    this.parent.insertBefore(this, add);
    return this;
  }
  after(add) {
    this.parent.insertAfter(this, add);
    return this;
  }
  root() {
    let result2 = this;
    while (result2.parent && result2.parent.type !== "document") {
      result2 = result2.parent;
    }
    return result2;
  }
  raw(prop2, defaultType) {
    let str = new Stringifier();
    return str.raw(this, prop2, defaultType);
  }
  cleanRaws(keepBetween) {
    delete this.raws.before;
    delete this.raws.after;
    if (!keepBetween)
      delete this.raws.between;
  }
  toJSON(_, inputs) {
    let fixed = {};
    let emitInputs = inputs == null;
    inputs = inputs || /* @__PURE__ */ new Map();
    let inputsNextIndex = 0;
    for (let name in this) {
      if (!Object.prototype.hasOwnProperty.call(this, name)) {
        continue;
      }
      if (name === "parent" || name === "proxyCache")
        continue;
      let value = this[name];
      if (Array.isArray(value)) {
        fixed[name] = value.map((i) => {
          if (typeof i === "object" && i.toJSON) {
            return i.toJSON(null, inputs);
          } else {
            return i;
          }
        });
      } else if (typeof value === "object" && value.toJSON) {
        fixed[name] = value.toJSON(null, inputs);
      } else if (name === "source") {
        let inputId = inputs.get(value.input);
        if (inputId == null) {
          inputId = inputsNextIndex;
          inputs.set(value.input, inputsNextIndex);
          inputsNextIndex++;
        }
        fixed[name] = {
          inputId,
          start: value.start,
          end: value.end
        };
      } else {
        fixed[name] = value;
      }
    }
    if (emitInputs) {
      fixed.inputs = [...inputs.keys()].map((input2) => input2.toJSON());
    }
    return fixed;
  }
  positionInside(index) {
    let string = this.toString();
    let column = this.source.start.column;
    let line = this.source.start.line;
    for (let i = 0; i < index; i++) {
      if (string[i] === "\n") {
        column = 1;
        line += 1;
      } else {
        column += 1;
      }
    }
    return { line, column };
  }
  positionBy(opts) {
    let pos = this.source.start;
    if (opts.index) {
      pos = this.positionInside(opts.index);
    } else if (opts.word) {
      let index = this.toString().indexOf(opts.word);
      if (index !== -1)
        pos = this.positionInside(index);
    }
    return pos;
  }
  rangeBy(opts) {
    let start = {
      line: this.source.start.line,
      column: this.source.start.column
    };
    let end = this.source.end ? {
      line: this.source.end.line,
      column: this.source.end.column + 1
    } : {
      line: start.line,
      column: start.column + 1
    };
    if (opts.word) {
      let index = this.toString().indexOf(opts.word);
      if (index !== -1) {
        start = this.positionInside(index);
        end = this.positionInside(index + opts.word.length);
      }
    } else {
      if (opts.start) {
        start = {
          line: opts.start.line,
          column: opts.start.column
        };
      } else if (opts.index) {
        start = this.positionInside(opts.index);
      }
      if (opts.end) {
        end = {
          line: opts.end.line,
          column: opts.end.column
        };
      } else if (opts.endIndex) {
        end = this.positionInside(opts.endIndex);
      } else if (opts.index) {
        end = this.positionInside(opts.index + 1);
      }
    }
    if (end.line < start.line || end.line === start.line && end.column <= start.column) {
      end = { line: start.line, column: start.column + 1 };
    }
    return { start, end };
  }
  getProxyProcessor() {
    return {
      set(node2, prop2, value) {
        if (node2[prop2] === value)
          return true;
        node2[prop2] = value;
        if (prop2 === "prop" || prop2 === "value" || prop2 === "name" || prop2 === "params" || prop2 === "important" || prop2 === "text") {
          node2.markDirty();
        }
        return true;
      },
      get(node2, prop2) {
        if (prop2 === "proxyOf") {
          return node2;
        } else if (prop2 === "root") {
          return () => node2.root().toProxy();
        } else {
          return node2[prop2];
        }
      }
    };
  }
  toProxy() {
    if (!this.proxyCache) {
      this.proxyCache = new Proxy(this, this.getProxyProcessor());
    }
    return this.proxyCache;
  }
  addToError(error) {
    error.postcssNode = this;
    if (error.stack && this.source && /\n\s{4}at /.test(error.stack)) {
      let s = this.source;
      error.stack = error.stack.replace(/\n\s{4}at /, `$&${s.input.from}:${s.start.line}:${s.start.column}$&`);
    }
    return error;
  }
  markDirty() {
    if (this[isClean$2]) {
      this[isClean$2] = false;
      let next = this;
      while (next = next.parent) {
        next[isClean$2] = false;
      }
    }
  }
  get proxyOf() {
    return this;
  }
}
var node_1 = Node$4;
Node$4.default = Node$4;
let Node$3 = node_1;
class Declaration$4 extends Node$3 {
  constructor(defaults) {
    if (defaults && typeof defaults.value !== "undefined" && typeof defaults.value !== "string") {
      defaults = __spreadProps(__spreadValues({}, defaults), { value: String(defaults.value) });
    }
    super(defaults);
    this.type = "decl";
  }
  get variable() {
    return this.prop.startsWith("--") || this.prop[0] === "$";
  }
}
var declaration = Declaration$4;
Declaration$4.default = Declaration$4;
let urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let customAlphabet = (alphabet, defaultSize = 21) => {
  return (size = defaultSize) => {
    let id = "";
    let i = size;
    while (i--) {
      id += alphabet[Math.random() * alphabet.length | 0];
    }
    return id;
  };
};
let nanoid$1 = (size = 21) => {
  let id = "";
  let i = size;
  while (i--) {
    id += urlAlphabet[Math.random() * 64 | 0];
  }
  return id;
};
var nonSecure = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  nanoid: nanoid$1,
  customAlphabet
}, Symbol.toStringTag, { value: "Module" }));
var require$$3 = /* @__PURE__ */ getAugmentedNamespace(nonSecure);
let { SourceMapConsumer: SourceMapConsumer$2, SourceMapGenerator: SourceMapGenerator$2 } = require$$2;
let { existsSync, readFileSync } = require$$2;
let { dirname: dirname$1, join } = require$$2;
function fromBase64(str) {
  if (Buffer) {
    return Buffer.from(str, "base64").toString();
  } else {
    return window.atob(str);
  }
}
class PreviousMap$2 {
  constructor(css, opts) {
    if (opts.map === false)
      return;
    this.loadAnnotation(css);
    this.inline = this.startWith(this.annotation, "data:");
    let prev = opts.map ? opts.map.prev : void 0;
    let text = this.loadMap(opts.from, prev);
    if (!this.mapFile && opts.from) {
      this.mapFile = opts.from;
    }
    if (this.mapFile)
      this.root = dirname$1(this.mapFile);
    if (text)
      this.text = text;
  }
  consumer() {
    if (!this.consumerCache) {
      this.consumerCache = new SourceMapConsumer$2(this.text);
    }
    return this.consumerCache;
  }
  withContent() {
    return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
  }
  startWith(string, start) {
    if (!string)
      return false;
    return string.substr(0, start.length) === start;
  }
  getAnnotationURL(sourceMapString) {
    return sourceMapString.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
  }
  loadAnnotation(css) {
    let comments = css.match(/\/\*\s*# sourceMappingURL=/gm);
    if (!comments)
      return;
    let start = css.lastIndexOf(comments.pop());
    let end = css.indexOf("*/", start);
    if (start > -1 && end > -1) {
      this.annotation = this.getAnnotationURL(css.substring(start, end));
    }
  }
  decodeInline(text) {
    let baseCharsetUri = /^data:application\/json;charset=utf-?8;base64,/;
    let baseUri = /^data:application\/json;base64,/;
    let charsetUri = /^data:application\/json;charset=utf-?8,/;
    let uri = /^data:application\/json,/;
    if (charsetUri.test(text) || uri.test(text)) {
      return decodeURIComponent(text.substr(RegExp.lastMatch.length));
    }
    if (baseCharsetUri.test(text) || baseUri.test(text)) {
      return fromBase64(text.substr(RegExp.lastMatch.length));
    }
    let encoding = text.match(/data:application\/json;([^,]+),/)[1];
    throw new Error("Unsupported source map encoding " + encoding);
  }
  loadFile(path) {
    this.root = dirname$1(path);
    if (existsSync(path)) {
      this.mapFile = path;
      return readFileSync(path, "utf-8").toString().trim();
    }
  }
  loadMap(file, prev) {
    if (prev === false)
      return false;
    if (prev) {
      if (typeof prev === "string") {
        return prev;
      } else if (typeof prev === "function") {
        let prevPath = prev(file);
        if (prevPath) {
          let map2 = this.loadFile(prevPath);
          if (!map2) {
            throw new Error("Unable to load previous source map: " + prevPath.toString());
          }
          return map2;
        }
      } else if (prev instanceof SourceMapConsumer$2) {
        return SourceMapGenerator$2.fromSourceMap(prev).toString();
      } else if (prev instanceof SourceMapGenerator$2) {
        return prev.toString();
      } else if (this.isMap(prev)) {
        return JSON.stringify(prev);
      } else {
        throw new Error("Unsupported previous source map format: " + prev.toString());
      }
    } else if (this.inline) {
      return this.decodeInline(this.annotation);
    } else if (this.annotation) {
      let map2 = this.annotation;
      if (file)
        map2 = join(dirname$1(file), map2);
      return this.loadFile(map2);
    }
  }
  isMap(map2) {
    if (typeof map2 !== "object")
      return false;
    return typeof map2.mappings === "string" || typeof map2._mappings === "string" || Array.isArray(map2.sections);
  }
}
var previousMap = PreviousMap$2;
PreviousMap$2.default = PreviousMap$2;
let { SourceMapConsumer: SourceMapConsumer$1, SourceMapGenerator: SourceMapGenerator$1 } = require$$2;
let { fileURLToPath, pathToFileURL: pathToFileURL$1 } = require$$2;
let { resolve: resolve$1, isAbsolute } = require$$2;
let { nanoid } = require$$3;
let terminalHighlight = require$$2;
let CssSyntaxError$1 = cssSyntaxError;
let PreviousMap$1 = previousMap;
let fromOffsetCache = Symbol("fromOffsetCache");
let sourceMapAvailable$1 = Boolean(SourceMapConsumer$1 && SourceMapGenerator$1);
let pathAvailable$1 = Boolean(resolve$1 && isAbsolute);
class Input$4 {
  constructor(css, opts = {}) {
    if (css === null || typeof css === "undefined" || typeof css === "object" && !css.toString) {
      throw new Error(`PostCSS received ${css} instead of CSS string`);
    }
    this.css = css.toString();
    if (this.css[0] === "\uFEFF" || this.css[0] === "\uFFFE") {
      this.hasBOM = true;
      this.css = this.css.slice(1);
    } else {
      this.hasBOM = false;
    }
    if (opts.from) {
      if (!pathAvailable$1 || /^\w+:\/\//.test(opts.from) || isAbsolute(opts.from)) {
        this.file = opts.from;
      } else {
        this.file = resolve$1(opts.from);
      }
    }
    if (pathAvailable$1 && sourceMapAvailable$1) {
      let map2 = new PreviousMap$1(this.css, opts);
      if (map2.text) {
        this.map = map2;
        let file = map2.consumer().file;
        if (!this.file && file)
          this.file = this.mapResolve(file);
      }
    }
    if (!this.file) {
      this.id = "<input css " + nanoid(6) + ">";
    }
    if (this.map)
      this.map.file = this.from;
  }
  fromOffset(offset) {
    let lastLine, lineToIndex;
    if (!this[fromOffsetCache]) {
      let lines = this.css.split("\n");
      lineToIndex = new Array(lines.length);
      let prevIndex = 0;
      for (let i = 0, l = lines.length; i < l; i++) {
        lineToIndex[i] = prevIndex;
        prevIndex += lines[i].length + 1;
      }
      this[fromOffsetCache] = lineToIndex;
    } else {
      lineToIndex = this[fromOffsetCache];
    }
    lastLine = lineToIndex[lineToIndex.length - 1];
    let min = 0;
    if (offset >= lastLine) {
      min = lineToIndex.length - 1;
    } else {
      let max = lineToIndex.length - 2;
      let mid2;
      while (min < max) {
        mid2 = min + (max - min >> 1);
        if (offset < lineToIndex[mid2]) {
          max = mid2 - 1;
        } else if (offset >= lineToIndex[mid2 + 1]) {
          min = mid2 + 1;
        } else {
          min = mid2;
          break;
        }
      }
    }
    return {
      line: min + 1,
      col: offset - lineToIndex[min] + 1
    };
  }
  error(message, line, column, opts = {}) {
    let result2, endLine, endColumn;
    if (line && typeof line === "object") {
      let start = line;
      let end = column;
      if (typeof line.offset === "number") {
        let pos = this.fromOffset(start.offset);
        line = pos.line;
        column = pos.col;
      } else {
        line = start.line;
        column = start.column;
      }
      if (typeof end.offset === "number") {
        let pos = this.fromOffset(end.offset);
        endLine = pos.line;
        endColumn = pos.col;
      } else {
        endLine = end.line;
        endColumn = end.column;
      }
    } else if (!column) {
      let pos = this.fromOffset(line);
      line = pos.line;
      column = pos.col;
    }
    let origin = this.origin(line, column, endLine, endColumn);
    if (origin) {
      result2 = new CssSyntaxError$1(message, origin.endLine === void 0 ? origin.line : { line: origin.line, column: origin.column }, origin.endLine === void 0 ? origin.column : { line: origin.endLine, column: origin.endColumn }, origin.source, origin.file, opts.plugin);
    } else {
      result2 = new CssSyntaxError$1(message, endLine === void 0 ? line : { line, column }, endLine === void 0 ? column : { line: endLine, column: endColumn }, this.css, this.file, opts.plugin);
    }
    result2.input = { line, column, endLine, endColumn, source: this.css };
    if (this.file) {
      if (pathToFileURL$1) {
        result2.input.url = pathToFileURL$1(this.file).toString();
      }
      result2.input.file = this.file;
    }
    return result2;
  }
  origin(line, column, endLine, endColumn) {
    if (!this.map)
      return false;
    let consumer = this.map.consumer();
    let from = consumer.originalPositionFor({ line, column });
    if (!from.source)
      return false;
    let to;
    if (typeof endLine === "number") {
      to = consumer.originalPositionFor({ line: endLine, column: endColumn });
    }
    let fromUrl;
    if (isAbsolute(from.source)) {
      fromUrl = pathToFileURL$1(from.source);
    } else {
      fromUrl = new URL(from.source, this.map.consumer().sourceRoot || pathToFileURL$1(this.map.mapFile));
    }
    let result2 = {
      url: fromUrl.toString(),
      line: from.line,
      column: from.column,
      endLine: to && to.line,
      endColumn: to && to.column
    };
    if (fromUrl.protocol === "file:") {
      if (fileURLToPath) {
        result2.file = fileURLToPath(fromUrl);
      } else {
        throw new Error(`file: protocol is not available in this PostCSS build`);
      }
    }
    let source = consumer.sourceContentFor(from.source);
    if (source)
      result2.source = source;
    return result2;
  }
  mapResolve(file) {
    if (/^\w+:\/\//.test(file)) {
      return file;
    }
    return resolve$1(this.map.consumer().sourceRoot || this.map.root || ".", file);
  }
  get from() {
    return this.file || this.id;
  }
  toJSON() {
    let json = {};
    for (let name of ["hasBOM", "css", "file", "id"]) {
      if (this[name] != null) {
        json[name] = this[name];
      }
    }
    if (this.map) {
      json.map = __spreadValues({}, this.map);
      if (json.map.consumerCache) {
        json.map.consumerCache = void 0;
      }
    }
    return json;
  }
}
var input = Input$4;
Input$4.default = Input$4;
if (terminalHighlight && terminalHighlight.registerInput) {
  terminalHighlight.registerInput(Input$4);
}
let { SourceMapConsumer, SourceMapGenerator } = require$$2;
let { dirname, resolve, relative, sep } = require$$2;
let { pathToFileURL } = require$$2;
let Input$3 = input;
let sourceMapAvailable = Boolean(SourceMapConsumer && SourceMapGenerator);
let pathAvailable = Boolean(dirname && resolve && relative && sep);
class MapGenerator$2 {
  constructor(stringify2, root2, opts, cssString) {
    this.stringify = stringify2;
    this.mapOpts = opts.map || {};
    this.root = root2;
    this.opts = opts;
    this.css = cssString;
  }
  isMap() {
    if (typeof this.opts.map !== "undefined") {
      return !!this.opts.map;
    }
    return this.previous().length > 0;
  }
  previous() {
    if (!this.previousMaps) {
      this.previousMaps = [];
      if (this.root) {
        this.root.walk((node2) => {
          if (node2.source && node2.source.input.map) {
            let map2 = node2.source.input.map;
            if (!this.previousMaps.includes(map2)) {
              this.previousMaps.push(map2);
            }
          }
        });
      } else {
        let input2 = new Input$3(this.css, this.opts);
        if (input2.map)
          this.previousMaps.push(input2.map);
      }
    }
    return this.previousMaps;
  }
  isInline() {
    if (typeof this.mapOpts.inline !== "undefined") {
      return this.mapOpts.inline;
    }
    let annotation = this.mapOpts.annotation;
    if (typeof annotation !== "undefined" && annotation !== true) {
      return false;
    }
    if (this.previous().length) {
      return this.previous().some((i) => i.inline);
    }
    return true;
  }
  isSourcesContent() {
    if (typeof this.mapOpts.sourcesContent !== "undefined") {
      return this.mapOpts.sourcesContent;
    }
    if (this.previous().length) {
      return this.previous().some((i) => i.withContent());
    }
    return true;
  }
  clearAnnotation() {
    if (this.mapOpts.annotation === false)
      return;
    if (this.root) {
      let node2;
      for (let i = this.root.nodes.length - 1; i >= 0; i--) {
        node2 = this.root.nodes[i];
        if (node2.type !== "comment")
          continue;
        if (node2.text.indexOf("# sourceMappingURL=") === 0) {
          this.root.removeChild(i);
        }
      }
    } else if (this.css) {
      this.css = this.css.replace(/(\n)?\/\*#[\S\s]*?\*\/$/gm, "");
    }
  }
  setSourcesContent() {
    let already = {};
    if (this.root) {
      this.root.walk((node2) => {
        if (node2.source) {
          let from = node2.source.input.from;
          if (from && !already[from]) {
            already[from] = true;
            this.map.setSourceContent(this.toUrl(this.path(from)), node2.source.input.css);
          }
        }
      });
    } else if (this.css) {
      let from = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
      this.map.setSourceContent(from, this.css);
    }
  }
  applyPrevMaps() {
    for (let prev of this.previous()) {
      let from = this.toUrl(this.path(prev.file));
      let root2 = prev.root || dirname(prev.file);
      let map2;
      if (this.mapOpts.sourcesContent === false) {
        map2 = new SourceMapConsumer(prev.text);
        if (map2.sourcesContent) {
          map2.sourcesContent = map2.sourcesContent.map(() => null);
        }
      } else {
        map2 = prev.consumer();
      }
      this.map.applySourceMap(map2, from, this.toUrl(this.path(root2)));
    }
  }
  isAnnotation() {
    if (this.isInline()) {
      return true;
    }
    if (typeof this.mapOpts.annotation !== "undefined") {
      return this.mapOpts.annotation;
    }
    if (this.previous().length) {
      return this.previous().some((i) => i.annotation);
    }
    return true;
  }
  toBase64(str) {
    if (Buffer) {
      return Buffer.from(str).toString("base64");
    } else {
      return window.btoa(unescape(encodeURIComponent(str)));
    }
  }
  addAnnotation() {
    let content;
    if (this.isInline()) {
      content = "data:application/json;base64," + this.toBase64(this.map.toString());
    } else if (typeof this.mapOpts.annotation === "string") {
      content = this.mapOpts.annotation;
    } else if (typeof this.mapOpts.annotation === "function") {
      content = this.mapOpts.annotation(this.opts.to, this.root);
    } else {
      content = this.outputFile() + ".map";
    }
    let eol = "\n";
    if (this.css.includes("\r\n"))
      eol = "\r\n";
    this.css += eol + "/*# sourceMappingURL=" + content + " */";
  }
  outputFile() {
    if (this.opts.to) {
      return this.path(this.opts.to);
    } else if (this.opts.from) {
      return this.path(this.opts.from);
    } else {
      return "to.css";
    }
  }
  generateMap() {
    if (this.root) {
      this.generateString();
    } else if (this.previous().length === 1) {
      let prev = this.previous()[0].consumer();
      prev.file = this.outputFile();
      this.map = SourceMapGenerator.fromSourceMap(prev);
    } else {
      this.map = new SourceMapGenerator({ file: this.outputFile() });
      this.map.addMapping({
        source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>",
        generated: { line: 1, column: 0 },
        original: { line: 1, column: 0 }
      });
    }
    if (this.isSourcesContent())
      this.setSourcesContent();
    if (this.root && this.previous().length > 0)
      this.applyPrevMaps();
    if (this.isAnnotation())
      this.addAnnotation();
    if (this.isInline()) {
      return [this.css];
    } else {
      return [this.css, this.map];
    }
  }
  path(file) {
    if (file.indexOf("<") === 0)
      return file;
    if (/^\w+:\/\//.test(file))
      return file;
    if (this.mapOpts.absolute)
      return file;
    let from = this.opts.to ? dirname(this.opts.to) : ".";
    if (typeof this.mapOpts.annotation === "string") {
      from = dirname(resolve(from, this.mapOpts.annotation));
    }
    file = relative(from, file);
    return file;
  }
  toUrl(path) {
    if (sep === "\\") {
      path = path.replace(/\\/g, "/");
    }
    return encodeURI(path).replace(/[#?]/g, encodeURIComponent);
  }
  sourcePath(node2) {
    if (this.mapOpts.from) {
      return this.toUrl(this.mapOpts.from);
    } else if (this.mapOpts.absolute) {
      if (pathToFileURL) {
        return pathToFileURL(node2.source.input.from).toString();
      } else {
        throw new Error("`map.absolute` option is not available in this PostCSS build");
      }
    } else {
      return this.toUrl(this.path(node2.source.input.from));
    }
  }
  generateString() {
    this.css = "";
    this.map = new SourceMapGenerator({ file: this.outputFile() });
    let line = 1;
    let column = 1;
    let noSource = "<no source>";
    let mapping = {
      source: "",
      generated: { line: 0, column: 0 },
      original: { line: 0, column: 0 }
    };
    let lines, last;
    this.stringify(this.root, (str, node2, type) => {
      this.css += str;
      if (node2 && type !== "end") {
        mapping.generated.line = line;
        mapping.generated.column = column - 1;
        if (node2.source && node2.source.start) {
          mapping.source = this.sourcePath(node2);
          mapping.original.line = node2.source.start.line;
          mapping.original.column = node2.source.start.column - 1;
          this.map.addMapping(mapping);
        } else {
          mapping.source = noSource;
          mapping.original.line = 1;
          mapping.original.column = 0;
          this.map.addMapping(mapping);
        }
      }
      lines = str.match(/\n/g);
      if (lines) {
        line += lines.length;
        last = str.lastIndexOf("\n");
        column = str.length - last;
      } else {
        column += str.length;
      }
      if (node2 && type !== "start") {
        let p = node2.parent || { raws: {} };
        if (node2.type !== "decl" || node2 !== p.last || p.raws.semicolon) {
          if (node2.source && node2.source.end) {
            mapping.source = this.sourcePath(node2);
            mapping.original.line = node2.source.end.line;
            mapping.original.column = node2.source.end.column - 1;
            mapping.generated.line = line;
            mapping.generated.column = column - 2;
            this.map.addMapping(mapping);
          } else {
            mapping.source = noSource;
            mapping.original.line = 1;
            mapping.original.column = 0;
            mapping.generated.line = line;
            mapping.generated.column = column - 1;
            this.map.addMapping(mapping);
          }
        }
      }
    });
  }
  generate() {
    this.clearAnnotation();
    if (pathAvailable && sourceMapAvailable && this.isMap()) {
      return this.generateMap();
    } else {
      let result2 = "";
      this.stringify(this.root, (i) => {
        result2 += i;
      });
      return [result2];
    }
  }
}
var mapGenerator = MapGenerator$2;
let Node$2 = node_1;
class Comment$4 extends Node$2 {
  constructor(defaults) {
    super(defaults);
    this.type = "comment";
  }
}
var comment = Comment$4;
Comment$4.default = Comment$4;
let { isClean: isClean$1, my: my$1 } = symbols;
let Declaration$3 = declaration;
let Comment$3 = comment;
let Node$1 = node_1;
let parse$4, Rule$4, AtRule$4;
function cleanSource(nodes) {
  return nodes.map((i) => {
    if (i.nodes)
      i.nodes = cleanSource(i.nodes);
    delete i.source;
    return i;
  });
}
function markDirtyUp(node2) {
  node2[isClean$1] = false;
  if (node2.proxyOf.nodes) {
    for (let i of node2.proxyOf.nodes) {
      markDirtyUp(i);
    }
  }
}
class Container$7 extends Node$1 {
  push(child) {
    child.parent = this;
    this.proxyOf.nodes.push(child);
    return this;
  }
  each(callback) {
    if (!this.proxyOf.nodes)
      return void 0;
    let iterator = this.getIterator();
    let index, result2;
    while (this.indexes[iterator] < this.proxyOf.nodes.length) {
      index = this.indexes[iterator];
      result2 = callback(this.proxyOf.nodes[index], index);
      if (result2 === false)
        break;
      this.indexes[iterator] += 1;
    }
    delete this.indexes[iterator];
    return result2;
  }
  walk(callback) {
    return this.each((child, i) => {
      let result2;
      try {
        result2 = callback(child, i);
      } catch (e) {
        throw child.addToError(e);
      }
      if (result2 !== false && child.walk) {
        result2 = child.walk(callback);
      }
      return result2;
    });
  }
  walkDecls(prop2, callback) {
    if (!callback) {
      callback = prop2;
      return this.walk((child, i) => {
        if (child.type === "decl") {
          return callback(child, i);
        }
      });
    }
    if (prop2 instanceof RegExp) {
      return this.walk((child, i) => {
        if (child.type === "decl" && prop2.test(child.prop)) {
          return callback(child, i);
        }
      });
    }
    return this.walk((child, i) => {
      if (child.type === "decl" && child.prop === prop2) {
        return callback(child, i);
      }
    });
  }
  walkRules(selector, callback) {
    if (!callback) {
      callback = selector;
      return this.walk((child, i) => {
        if (child.type === "rule") {
          return callback(child, i);
        }
      });
    }
    if (selector instanceof RegExp) {
      return this.walk((child, i) => {
        if (child.type === "rule" && selector.test(child.selector)) {
          return callback(child, i);
        }
      });
    }
    return this.walk((child, i) => {
      if (child.type === "rule" && child.selector === selector) {
        return callback(child, i);
      }
    });
  }
  walkAtRules(name, callback) {
    if (!callback) {
      callback = name;
      return this.walk((child, i) => {
        if (child.type === "atrule") {
          return callback(child, i);
        }
      });
    }
    if (name instanceof RegExp) {
      return this.walk((child, i) => {
        if (child.type === "atrule" && name.test(child.name)) {
          return callback(child, i);
        }
      });
    }
    return this.walk((child, i) => {
      if (child.type === "atrule" && child.name === name) {
        return callback(child, i);
      }
    });
  }
  walkComments(callback) {
    return this.walk((child, i) => {
      if (child.type === "comment") {
        return callback(child, i);
      }
    });
  }
  append(...children) {
    for (let child of children) {
      let nodes = this.normalize(child, this.last);
      for (let node2 of nodes)
        this.proxyOf.nodes.push(node2);
    }
    this.markDirty();
    return this;
  }
  prepend(...children) {
    children = children.reverse();
    for (let child of children) {
      let nodes = this.normalize(child, this.first, "prepend").reverse();
      for (let node2 of nodes)
        this.proxyOf.nodes.unshift(node2);
      for (let id in this.indexes) {
        this.indexes[id] = this.indexes[id] + nodes.length;
      }
    }
    this.markDirty();
    return this;
  }
  cleanRaws(keepBetween) {
    super.cleanRaws(keepBetween);
    if (this.nodes) {
      for (let node2 of this.nodes)
        node2.cleanRaws(keepBetween);
    }
  }
  insertBefore(exist2, add) {
    exist2 = this.index(exist2);
    let type = exist2 === 0 ? "prepend" : false;
    let nodes = this.normalize(add, this.proxyOf.nodes[exist2], type).reverse();
    for (let node2 of nodes)
      this.proxyOf.nodes.splice(exist2, 0, node2);
    let index;
    for (let id in this.indexes) {
      index = this.indexes[id];
      if (exist2 <= index) {
        this.indexes[id] = index + nodes.length;
      }
    }
    this.markDirty();
    return this;
  }
  insertAfter(exist2, add) {
    exist2 = this.index(exist2);
    let nodes = this.normalize(add, this.proxyOf.nodes[exist2]).reverse();
    for (let node2 of nodes)
      this.proxyOf.nodes.splice(exist2 + 1, 0, node2);
    let index;
    for (let id in this.indexes) {
      index = this.indexes[id];
      if (exist2 < index) {
        this.indexes[id] = index + nodes.length;
      }
    }
    this.markDirty();
    return this;
  }
  removeChild(child) {
    child = this.index(child);
    this.proxyOf.nodes[child].parent = void 0;
    this.proxyOf.nodes.splice(child, 1);
    let index;
    for (let id in this.indexes) {
      index = this.indexes[id];
      if (index >= child) {
        this.indexes[id] = index - 1;
      }
    }
    this.markDirty();
    return this;
  }
  removeAll() {
    for (let node2 of this.proxyOf.nodes)
      node2.parent = void 0;
    this.proxyOf.nodes = [];
    this.markDirty();
    return this;
  }
  replaceValues(pattern, opts, callback) {
    if (!callback) {
      callback = opts;
      opts = {};
    }
    this.walkDecls((decl) => {
      if (opts.props && !opts.props.includes(decl.prop))
        return;
      if (opts.fast && !decl.value.includes(opts.fast))
        return;
      decl.value = decl.value.replace(pattern, callback);
    });
    this.markDirty();
    return this;
  }
  every(condition) {
    return this.nodes.every(condition);
  }
  some(condition) {
    return this.nodes.some(condition);
  }
  index(child) {
    if (typeof child === "number")
      return child;
    if (child.proxyOf)
      child = child.proxyOf;
    return this.proxyOf.nodes.indexOf(child);
  }
  get first() {
    if (!this.proxyOf.nodes)
      return void 0;
    return this.proxyOf.nodes[0];
  }
  get last() {
    if (!this.proxyOf.nodes)
      return void 0;
    return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
  }
  normalize(nodes, sample) {
    if (typeof nodes === "string") {
      nodes = cleanSource(parse$4(nodes).nodes);
    } else if (Array.isArray(nodes)) {
      nodes = nodes.slice(0);
      for (let i of nodes) {
        if (i.parent)
          i.parent.removeChild(i, "ignore");
      }
    } else if (nodes.type === "root" && this.type !== "document") {
      nodes = nodes.nodes.slice(0);
      for (let i of nodes) {
        if (i.parent)
          i.parent.removeChild(i, "ignore");
      }
    } else if (nodes.type) {
      nodes = [nodes];
    } else if (nodes.prop) {
      if (typeof nodes.value === "undefined") {
        throw new Error("Value field is missed in node creation");
      } else if (typeof nodes.value !== "string") {
        nodes.value = String(nodes.value);
      }
      nodes = [new Declaration$3(nodes)];
    } else if (nodes.selector) {
      nodes = [new Rule$4(nodes)];
    } else if (nodes.name) {
      nodes = [new AtRule$4(nodes)];
    } else if (nodes.text) {
      nodes = [new Comment$3(nodes)];
    } else {
      throw new Error("Unknown node type in node creation");
    }
    let processed = nodes.map((i) => {
      if (!i[my$1])
        Container$7.rebuild(i);
      i = i.proxyOf;
      if (i.parent)
        i.parent.removeChild(i);
      if (i[isClean$1])
        markDirtyUp(i);
      if (typeof i.raws.before === "undefined") {
        if (sample && typeof sample.raws.before !== "undefined") {
          i.raws.before = sample.raws.before.replace(/\S/g, "");
        }
      }
      i.parent = this.proxyOf;
      return i;
    });
    return processed;
  }
  getProxyProcessor() {
    return {
      set(node2, prop2, value) {
        if (node2[prop2] === value)
          return true;
        node2[prop2] = value;
        if (prop2 === "name" || prop2 === "params" || prop2 === "selector") {
          node2.markDirty();
        }
        return true;
      },
      get(node2, prop2) {
        if (prop2 === "proxyOf") {
          return node2;
        } else if (!node2[prop2]) {
          return node2[prop2];
        } else if (prop2 === "each" || typeof prop2 === "string" && prop2.startsWith("walk")) {
          return (...args) => {
            return node2[prop2](...args.map((i) => {
              if (typeof i === "function") {
                return (child, index) => i(child.toProxy(), index);
              } else {
                return i;
              }
            }));
          };
        } else if (prop2 === "every" || prop2 === "some") {
          return (cb) => {
            return node2[prop2]((child, ...other) => cb(child.toProxy(), ...other));
          };
        } else if (prop2 === "root") {
          return () => node2.root().toProxy();
        } else if (prop2 === "nodes") {
          return node2.nodes.map((i) => i.toProxy());
        } else if (prop2 === "first" || prop2 === "last") {
          return node2[prop2].toProxy();
        } else {
          return node2[prop2];
        }
      }
    };
  }
  getIterator() {
    if (!this.lastEach)
      this.lastEach = 0;
    if (!this.indexes)
      this.indexes = {};
    this.lastEach += 1;
    let iterator = this.lastEach;
    this.indexes[iterator] = 0;
    return iterator;
  }
}
Container$7.registerParse = (dependant) => {
  parse$4 = dependant;
};
Container$7.registerRule = (dependant) => {
  Rule$4 = dependant;
};
Container$7.registerAtRule = (dependant) => {
  AtRule$4 = dependant;
};
var container = Container$7;
Container$7.default = Container$7;
Container$7.rebuild = (node2) => {
  if (node2.type === "atrule") {
    Object.setPrototypeOf(node2, AtRule$4.prototype);
  } else if (node2.type === "rule") {
    Object.setPrototypeOf(node2, Rule$4.prototype);
  } else if (node2.type === "decl") {
    Object.setPrototypeOf(node2, Declaration$3.prototype);
  } else if (node2.type === "comment") {
    Object.setPrototypeOf(node2, Comment$3.prototype);
  }
  node2[my$1] = true;
  if (node2.nodes) {
    node2.nodes.forEach((child) => {
      Container$7.rebuild(child);
    });
  }
};
let Container$6 = container;
let LazyResult$4, Processor$3;
class Document$3 extends Container$6 {
  constructor(defaults) {
    super(__spreadValues({ type: "document" }, defaults));
    if (!this.nodes) {
      this.nodes = [];
    }
  }
  toResult(opts = {}) {
    let lazy = new LazyResult$4(new Processor$3(), this, opts);
    return lazy.stringify();
  }
}
Document$3.registerLazyResult = (dependant) => {
  LazyResult$4 = dependant;
};
Document$3.registerProcessor = (dependant) => {
  Processor$3 = dependant;
};
var document$1 = Document$3;
Document$3.default = Document$3;
let printed = {};
var warnOnce$2 = function warnOnce(message) {
  if (printed[message])
    return;
  printed[message] = true;
  if (typeof console !== "undefined" && console.warn) {
    console.warn(message);
  }
};
class Warning$2 {
  constructor(text, opts = {}) {
    this.type = "warning";
    this.text = text;
    if (opts.node && opts.node.source) {
      let range2 = opts.node.rangeBy(opts);
      this.line = range2.start.line;
      this.column = range2.start.column;
      this.endLine = range2.end.line;
      this.endColumn = range2.end.column;
    }
    for (let opt in opts)
      this[opt] = opts[opt];
  }
  toString() {
    if (this.node) {
      return this.node.error(this.text, {
        plugin: this.plugin,
        index: this.index,
        word: this.word
      }).message;
    }
    if (this.plugin) {
      return this.plugin + ": " + this.text;
    }
    return this.text;
  }
}
var warning = Warning$2;
Warning$2.default = Warning$2;
let Warning$1 = warning;
class Result$3 {
  constructor(processor2, root2, opts) {
    this.processor = processor2;
    this.messages = [];
    this.root = root2;
    this.opts = opts;
    this.css = void 0;
    this.map = void 0;
  }
  toString() {
    return this.css;
  }
  warn(text, opts = {}) {
    if (!opts.plugin) {
      if (this.lastPlugin && this.lastPlugin.postcssPlugin) {
        opts.plugin = this.lastPlugin.postcssPlugin;
      }
    }
    let warning2 = new Warning$1(text, opts);
    this.messages.push(warning2);
    return warning2;
  }
  warnings() {
    return this.messages.filter((i) => i.type === "warning");
  }
  get content() {
    return this.css;
  }
}
var result = Result$3;
Result$3.default = Result$3;
const SINGLE_QUOTE = "'".charCodeAt(0);
const DOUBLE_QUOTE = '"'.charCodeAt(0);
const BACKSLASH = "\\".charCodeAt(0);
const SLASH = "/".charCodeAt(0);
const NEWLINE = "\n".charCodeAt(0);
const SPACE = " ".charCodeAt(0);
const FEED = "\f".charCodeAt(0);
const TAB = "	".charCodeAt(0);
const CR = "\r".charCodeAt(0);
const OPEN_SQUARE = "[".charCodeAt(0);
const CLOSE_SQUARE = "]".charCodeAt(0);
const OPEN_PARENTHESES = "(".charCodeAt(0);
const CLOSE_PARENTHESES = ")".charCodeAt(0);
const OPEN_CURLY = "{".charCodeAt(0);
const CLOSE_CURLY = "}".charCodeAt(0);
const SEMICOLON = ";".charCodeAt(0);
const ASTERISK = "*".charCodeAt(0);
const COLON = ":".charCodeAt(0);
const AT = "@".charCodeAt(0);
const RE_AT_END = /[\t\n\f\r "#'()/;[\\\]{}]/g;
const RE_WORD_END = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g;
const RE_BAD_BRACKET = /.[\n"'(/\\]/;
const RE_HEX_ESCAPE = /[\da-f]/i;
var tokenize = function tokenizer(input2, options = {}) {
  let css = input2.css.valueOf();
  let ignore = options.ignoreErrors;
  let code, next, quote, content, escape2;
  let escaped, escapePos, prev, n, currentToken;
  let length = css.length;
  let pos = 0;
  let buffer = [];
  let returned = [];
  function position() {
    return pos;
  }
  function unclosed(what) {
    throw input2.error("Unclosed " + what, pos);
  }
  function endOfFile() {
    return returned.length === 0 && pos >= length;
  }
  function nextToken(opts) {
    if (returned.length)
      return returned.pop();
    if (pos >= length)
      return;
    let ignoreUnclosed = opts ? opts.ignoreUnclosed : false;
    code = css.charCodeAt(pos);
    switch (code) {
      case NEWLINE:
      case SPACE:
      case TAB:
      case CR:
      case FEED: {
        next = pos;
        do {
          next += 1;
          code = css.charCodeAt(next);
        } while (code === SPACE || code === NEWLINE || code === TAB || code === CR || code === FEED);
        currentToken = ["space", css.slice(pos, next)];
        pos = next - 1;
        break;
      }
      case OPEN_SQUARE:
      case CLOSE_SQUARE:
      case OPEN_CURLY:
      case CLOSE_CURLY:
      case COLON:
      case SEMICOLON:
      case CLOSE_PARENTHESES: {
        let controlChar = String.fromCharCode(code);
        currentToken = [controlChar, controlChar, pos];
        break;
      }
      case OPEN_PARENTHESES: {
        prev = buffer.length ? buffer.pop()[1] : "";
        n = css.charCodeAt(pos + 1);
        if (prev === "url" && n !== SINGLE_QUOTE && n !== DOUBLE_QUOTE && n !== SPACE && n !== NEWLINE && n !== TAB && n !== FEED && n !== CR) {
          next = pos;
          do {
            escaped = false;
            next = css.indexOf(")", next + 1);
            if (next === -1) {
              if (ignore || ignoreUnclosed) {
                next = pos;
                break;
              } else {
                unclosed("bracket");
              }
            }
            escapePos = next;
            while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
              escapePos -= 1;
              escaped = !escaped;
            }
          } while (escaped);
          currentToken = ["brackets", css.slice(pos, next + 1), pos, next];
          pos = next;
        } else {
          next = css.indexOf(")", pos + 1);
          content = css.slice(pos, next + 1);
          if (next === -1 || RE_BAD_BRACKET.test(content)) {
            currentToken = ["(", "(", pos];
          } else {
            currentToken = ["brackets", content, pos, next];
            pos = next;
          }
        }
        break;
      }
      case SINGLE_QUOTE:
      case DOUBLE_QUOTE: {
        quote = code === SINGLE_QUOTE ? "'" : '"';
        next = pos;
        do {
          escaped = false;
          next = css.indexOf(quote, next + 1);
          if (next === -1) {
            if (ignore || ignoreUnclosed) {
              next = pos + 1;
              break;
            } else {
              unclosed("string");
            }
          }
          escapePos = next;
          while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
            escapePos -= 1;
            escaped = !escaped;
          }
        } while (escaped);
        currentToken = ["string", css.slice(pos, next + 1), pos, next];
        pos = next;
        break;
      }
      case AT: {
        RE_AT_END.lastIndex = pos + 1;
        RE_AT_END.test(css);
        if (RE_AT_END.lastIndex === 0) {
          next = css.length - 1;
        } else {
          next = RE_AT_END.lastIndex - 2;
        }
        currentToken = ["at-word", css.slice(pos, next + 1), pos, next];
        pos = next;
        break;
      }
      case BACKSLASH: {
        next = pos;
        escape2 = true;
        while (css.charCodeAt(next + 1) === BACKSLASH) {
          next += 1;
          escape2 = !escape2;
        }
        code = css.charCodeAt(next + 1);
        if (escape2 && code !== SLASH && code !== SPACE && code !== NEWLINE && code !== TAB && code !== CR && code !== FEED) {
          next += 1;
          if (RE_HEX_ESCAPE.test(css.charAt(next))) {
            while (RE_HEX_ESCAPE.test(css.charAt(next + 1))) {
              next += 1;
            }
            if (css.charCodeAt(next + 1) === SPACE) {
              next += 1;
            }
          }
        }
        currentToken = ["word", css.slice(pos, next + 1), pos, next];
        pos = next;
        break;
      }
      default: {
        if (code === SLASH && css.charCodeAt(pos + 1) === ASTERISK) {
          next = css.indexOf("*/", pos + 2) + 1;
          if (next === 0) {
            if (ignore || ignoreUnclosed) {
              next = css.length;
            } else {
              unclosed("comment");
            }
          }
          currentToken = ["comment", css.slice(pos, next + 1), pos, next];
          pos = next;
        } else {
          RE_WORD_END.lastIndex = pos + 1;
          RE_WORD_END.test(css);
          if (RE_WORD_END.lastIndex === 0) {
            next = css.length - 1;
          } else {
            next = RE_WORD_END.lastIndex - 2;
          }
          currentToken = ["word", css.slice(pos, next + 1), pos, next];
          buffer.push(currentToken);
          pos = next;
        }
        break;
      }
    }
    pos++;
    return currentToken;
  }
  function back(token) {
    returned.push(token);
  }
  return {
    back,
    nextToken,
    endOfFile,
    position
  };
};
let Container$5 = container;
class AtRule$3 extends Container$5 {
  constructor(defaults) {
    super(defaults);
    this.type = "atrule";
  }
  append(...children) {
    if (!this.proxyOf.nodes)
      this.nodes = [];
    return super.append(...children);
  }
  prepend(...children) {
    if (!this.proxyOf.nodes)
      this.nodes = [];
    return super.prepend(...children);
  }
}
var atRule = AtRule$3;
AtRule$3.default = AtRule$3;
Container$5.registerAtRule(AtRule$3);
let Container$4 = container;
let LazyResult$3, Processor$2;
class Root$5 extends Container$4 {
  constructor(defaults) {
    super(defaults);
    this.type = "root";
    if (!this.nodes)
      this.nodes = [];
  }
  removeChild(child, ignore) {
    let index = this.index(child);
    if (!ignore && index === 0 && this.nodes.length > 1) {
      this.nodes[1].raws.before = this.nodes[index].raws.before;
    }
    return super.removeChild(child);
  }
  normalize(child, sample, type) {
    let nodes = super.normalize(child);
    if (sample) {
      if (type === "prepend") {
        if (this.nodes.length > 1) {
          sample.raws.before = this.nodes[1].raws.before;
        } else {
          delete sample.raws.before;
        }
      } else if (this.first !== sample) {
        for (let node2 of nodes) {
          node2.raws.before = sample.raws.before;
        }
      }
    }
    return nodes;
  }
  toResult(opts = {}) {
    let lazy = new LazyResult$3(new Processor$2(), this, opts);
    return lazy.stringify();
  }
}
Root$5.registerLazyResult = (dependant) => {
  LazyResult$3 = dependant;
};
Root$5.registerProcessor = (dependant) => {
  Processor$2 = dependant;
};
var root = Root$5;
Root$5.default = Root$5;
let list$2 = {
  split(string, separators, last) {
    let array = [];
    let current = "";
    let split = false;
    let func = 0;
    let quote = false;
    let escape2 = false;
    for (let letter of string) {
      if (escape2) {
        escape2 = false;
      } else if (letter === "\\") {
        escape2 = true;
      } else if (quote) {
        if (letter === quote) {
          quote = false;
        }
      } else if (letter === '"' || letter === "'") {
        quote = letter;
      } else if (letter === "(") {
        func += 1;
      } else if (letter === ")") {
        if (func > 0)
          func -= 1;
      } else if (func === 0) {
        if (separators.includes(letter))
          split = true;
      }
      if (split) {
        if (current !== "")
          array.push(current.trim());
        current = "";
        split = false;
      } else {
        current += letter;
      }
    }
    if (last || current !== "")
      array.push(current.trim());
    return array;
  },
  space(string) {
    let spaces = [" ", "\n", "	"];
    return list$2.split(string, spaces);
  },
  comma(string) {
    return list$2.split(string, [","], true);
  }
};
var list_1 = list$2;
list$2.default = list$2;
let Container$3 = container;
let list$1 = list_1;
class Rule$3 extends Container$3 {
  constructor(defaults) {
    super(defaults);
    this.type = "rule";
    if (!this.nodes)
      this.nodes = [];
  }
  get selectors() {
    return list$1.comma(this.selector);
  }
  set selectors(values) {
    let match = this.selector ? this.selector.match(/,\s*/) : null;
    let sep2 = match ? match[0] : "," + this.raw("between", "beforeOpen");
    this.selector = values.join(sep2);
  }
}
var rule = Rule$3;
Rule$3.default = Rule$3;
Container$3.registerRule(Rule$3);
let Declaration$2 = declaration;
let tokenizer2 = tokenize;
let Comment$2 = comment;
let AtRule$2 = atRule;
let Root$4 = root;
let Rule$2 = rule;
const SAFE_COMMENT_NEIGHBOR = {
  empty: true,
  space: true
};
function findLastWithPosition(tokens) {
  for (let i = tokens.length - 1; i >= 0; i--) {
    let token = tokens[i];
    let pos = token[3] || token[2];
    if (pos)
      return pos;
  }
}
class Parser$1 {
  constructor(input2) {
    this.input = input2;
    this.root = new Root$4();
    this.current = this.root;
    this.spaces = "";
    this.semicolon = false;
    this.customProperty = false;
    this.createTokenizer();
    this.root.source = { input: input2, start: { offset: 0, line: 1, column: 1 } };
  }
  createTokenizer() {
    this.tokenizer = tokenizer2(this.input);
  }
  parse() {
    let token;
    while (!this.tokenizer.endOfFile()) {
      token = this.tokenizer.nextToken();
      switch (token[0]) {
        case "space":
          this.spaces += token[1];
          break;
        case ";":
          this.freeSemicolon(token);
          break;
        case "}":
          this.end(token);
          break;
        case "comment":
          this.comment(token);
          break;
        case "at-word":
          this.atrule(token);
          break;
        case "{":
          this.emptyRule(token);
          break;
        default:
          this.other(token);
          break;
      }
    }
    this.endFile();
  }
  comment(token) {
    let node2 = new Comment$2();
    this.init(node2, token[2]);
    node2.source.end = this.getPosition(token[3] || token[2]);
    let text = token[1].slice(2, -2);
    if (/^\s*$/.test(text)) {
      node2.text = "";
      node2.raws.left = text;
      node2.raws.right = "";
    } else {
      let match = text.match(/^(\s*)([^]*\S)(\s*)$/);
      node2.text = match[2];
      node2.raws.left = match[1];
      node2.raws.right = match[3];
    }
  }
  emptyRule(token) {
    let node2 = new Rule$2();
    this.init(node2, token[2]);
    node2.selector = "";
    node2.raws.between = "";
    this.current = node2;
  }
  other(start) {
    let end = false;
    let type = null;
    let colon2 = false;
    let bracket = null;
    let brackets = [];
    let customProperty = start[1].startsWith("--");
    let tokens = [];
    let token = start;
    while (token) {
      type = token[0];
      tokens.push(token);
      if (type === "(" || type === "[") {
        if (!bracket)
          bracket = token;
        brackets.push(type === "(" ? ")" : "]");
      } else if (customProperty && colon2 && type === "{") {
        if (!bracket)
          bracket = token;
        brackets.push("}");
      } else if (brackets.length === 0) {
        if (type === ";") {
          if (colon2) {
            this.decl(tokens, customProperty);
            return;
          } else {
            break;
          }
        } else if (type === "{") {
          this.rule(tokens);
          return;
        } else if (type === "}") {
          this.tokenizer.back(tokens.pop());
          end = true;
          break;
        } else if (type === ":") {
          colon2 = true;
        }
      } else if (type === brackets[brackets.length - 1]) {
        brackets.pop();
        if (brackets.length === 0)
          bracket = null;
      }
      token = this.tokenizer.nextToken();
    }
    if (this.tokenizer.endOfFile())
      end = true;
    if (brackets.length > 0)
      this.unclosedBracket(bracket);
    if (end && colon2) {
      if (!customProperty) {
        while (tokens.length) {
          token = tokens[tokens.length - 1][0];
          if (token !== "space" && token !== "comment")
            break;
          this.tokenizer.back(tokens.pop());
        }
      }
      this.decl(tokens, customProperty);
    } else {
      this.unknownWord(tokens);
    }
  }
  rule(tokens) {
    tokens.pop();
    let node2 = new Rule$2();
    this.init(node2, tokens[0][2]);
    node2.raws.between = this.spacesAndCommentsFromEnd(tokens);
    this.raw(node2, "selector", tokens);
    this.current = node2;
  }
  decl(tokens, customProperty) {
    let node2 = new Declaration$2();
    this.init(node2, tokens[0][2]);
    let last = tokens[tokens.length - 1];
    if (last[0] === ";") {
      this.semicolon = true;
      tokens.pop();
    }
    node2.source.end = this.getPosition(last[3] || last[2] || findLastWithPosition(tokens));
    while (tokens[0][0] !== "word") {
      if (tokens.length === 1)
        this.unknownWord(tokens);
      node2.raws.before += tokens.shift()[1];
    }
    node2.source.start = this.getPosition(tokens[0][2]);
    node2.prop = "";
    while (tokens.length) {
      let type = tokens[0][0];
      if (type === ":" || type === "space" || type === "comment") {
        break;
      }
      node2.prop += tokens.shift()[1];
    }
    node2.raws.between = "";
    let token;
    while (tokens.length) {
      token = tokens.shift();
      if (token[0] === ":") {
        node2.raws.between += token[1];
        break;
      } else {
        if (token[0] === "word" && /\w/.test(token[1])) {
          this.unknownWord([token]);
        }
        node2.raws.between += token[1];
      }
    }
    if (node2.prop[0] === "_" || node2.prop[0] === "*") {
      node2.raws.before += node2.prop[0];
      node2.prop = node2.prop.slice(1);
    }
    let firstSpaces = [];
    let next;
    while (tokens.length) {
      next = tokens[0][0];
      if (next !== "space" && next !== "comment")
        break;
      firstSpaces.push(tokens.shift());
    }
    this.precheckMissedSemicolon(tokens);
    for (let i = tokens.length - 1; i >= 0; i--) {
      token = tokens[i];
      if (token[1].toLowerCase() === "!important") {
        node2.important = true;
        let string = this.stringFrom(tokens, i);
        string = this.spacesFromEnd(tokens) + string;
        if (string !== " !important")
          node2.raws.important = string;
        break;
      } else if (token[1].toLowerCase() === "important") {
        let cache = tokens.slice(0);
        let str = "";
        for (let j = i; j > 0; j--) {
          let type = cache[j][0];
          if (str.trim().indexOf("!") === 0 && type !== "space") {
            break;
          }
          str = cache.pop()[1] + str;
        }
        if (str.trim().indexOf("!") === 0) {
          node2.important = true;
          node2.raws.important = str;
          tokens = cache;
        }
      }
      if (token[0] !== "space" && token[0] !== "comment") {
        break;
      }
    }
    let hasWord = tokens.some((i) => i[0] !== "space" && i[0] !== "comment");
    if (hasWord) {
      node2.raws.between += firstSpaces.map((i) => i[1]).join("");
      firstSpaces = [];
    }
    this.raw(node2, "value", firstSpaces.concat(tokens), customProperty);
    if (node2.value.includes(":") && !customProperty) {
      this.checkMissedSemicolon(tokens);
    }
  }
  atrule(token) {
    let node2 = new AtRule$2();
    node2.name = token[1].slice(1);
    if (node2.name === "") {
      this.unnamedAtrule(node2, token);
    }
    this.init(node2, token[2]);
    let type;
    let prev;
    let shift;
    let last = false;
    let open = false;
    let params = [];
    let brackets = [];
    while (!this.tokenizer.endOfFile()) {
      token = this.tokenizer.nextToken();
      type = token[0];
      if (type === "(" || type === "[") {
        brackets.push(type === "(" ? ")" : "]");
      } else if (type === "{" && brackets.length > 0) {
        brackets.push("}");
      } else if (type === brackets[brackets.length - 1]) {
        brackets.pop();
      }
      if (brackets.length === 0) {
        if (type === ";") {
          node2.source.end = this.getPosition(token[2]);
          this.semicolon = true;
          break;
        } else if (type === "{") {
          open = true;
          break;
        } else if (type === "}") {
          if (params.length > 0) {
            shift = params.length - 1;
            prev = params[shift];
            while (prev && prev[0] === "space") {
              prev = params[--shift];
            }
            if (prev) {
              node2.source.end = this.getPosition(prev[3] || prev[2]);
            }
          }
          this.end(token);
          break;
        } else {
          params.push(token);
        }
      } else {
        params.push(token);
      }
      if (this.tokenizer.endOfFile()) {
        last = true;
        break;
      }
    }
    node2.raws.between = this.spacesAndCommentsFromEnd(params);
    if (params.length) {
      node2.raws.afterName = this.spacesAndCommentsFromStart(params);
      this.raw(node2, "params", params);
      if (last) {
        token = params[params.length - 1];
        node2.source.end = this.getPosition(token[3] || token[2]);
        this.spaces = node2.raws.between;
        node2.raws.between = "";
      }
    } else {
      node2.raws.afterName = "";
      node2.params = "";
    }
    if (open) {
      node2.nodes = [];
      this.current = node2;
    }
  }
  end(token) {
    if (this.current.nodes && this.current.nodes.length) {
      this.current.raws.semicolon = this.semicolon;
    }
    this.semicolon = false;
    this.current.raws.after = (this.current.raws.after || "") + this.spaces;
    this.spaces = "";
    if (this.current.parent) {
      this.current.source.end = this.getPosition(token[2]);
      this.current = this.current.parent;
    } else {
      this.unexpectedClose(token);
    }
  }
  endFile() {
    if (this.current.parent)
      this.unclosedBlock();
    if (this.current.nodes && this.current.nodes.length) {
      this.current.raws.semicolon = this.semicolon;
    }
    this.current.raws.after = (this.current.raws.after || "") + this.spaces;
  }
  freeSemicolon(token) {
    this.spaces += token[1];
    if (this.current.nodes) {
      let prev = this.current.nodes[this.current.nodes.length - 1];
      if (prev && prev.type === "rule" && !prev.raws.ownSemicolon) {
        prev.raws.ownSemicolon = this.spaces;
        this.spaces = "";
      }
    }
  }
  getPosition(offset) {
    let pos = this.input.fromOffset(offset);
    return {
      offset,
      line: pos.line,
      column: pos.col
    };
  }
  init(node2, offset) {
    this.current.push(node2);
    node2.source = {
      start: this.getPosition(offset),
      input: this.input
    };
    node2.raws.before = this.spaces;
    this.spaces = "";
    if (node2.type !== "comment")
      this.semicolon = false;
  }
  raw(node2, prop2, tokens, customProperty) {
    let token, type;
    let length = tokens.length;
    let value = "";
    let clean = true;
    let next, prev;
    for (let i = 0; i < length; i += 1) {
      token = tokens[i];
      type = token[0];
      if (type === "space" && i === length - 1 && !customProperty) {
        clean = false;
      } else if (type === "comment") {
        prev = tokens[i - 1] ? tokens[i - 1][0] : "empty";
        next = tokens[i + 1] ? tokens[i + 1][0] : "empty";
        if (!SAFE_COMMENT_NEIGHBOR[prev] && !SAFE_COMMENT_NEIGHBOR[next]) {
          if (value.slice(-1) === ",") {
            clean = false;
          } else {
            value += token[1];
          }
        } else {
          clean = false;
        }
      } else {
        value += token[1];
      }
    }
    if (!clean) {
      let raw = tokens.reduce((all, i) => all + i[1], "");
      node2.raws[prop2] = { value, raw };
    }
    node2[prop2] = value;
  }
  spacesAndCommentsFromEnd(tokens) {
    let lastTokenType;
    let spaces = "";
    while (tokens.length) {
      lastTokenType = tokens[tokens.length - 1][0];
      if (lastTokenType !== "space" && lastTokenType !== "comment")
        break;
      spaces = tokens.pop()[1] + spaces;
    }
    return spaces;
  }
  spacesAndCommentsFromStart(tokens) {
    let next;
    let spaces = "";
    while (tokens.length) {
      next = tokens[0][0];
      if (next !== "space" && next !== "comment")
        break;
      spaces += tokens.shift()[1];
    }
    return spaces;
  }
  spacesFromEnd(tokens) {
    let lastTokenType;
    let spaces = "";
    while (tokens.length) {
      lastTokenType = tokens[tokens.length - 1][0];
      if (lastTokenType !== "space")
        break;
      spaces = tokens.pop()[1] + spaces;
    }
    return spaces;
  }
  stringFrom(tokens, from) {
    let result2 = "";
    for (let i = from; i < tokens.length; i++) {
      result2 += tokens[i][1];
    }
    tokens.splice(from, tokens.length - from);
    return result2;
  }
  colon(tokens) {
    let brackets = 0;
    let token, type, prev;
    for (let [i, element] of tokens.entries()) {
      token = element;
      type = token[0];
      if (type === "(") {
        brackets += 1;
      }
      if (type === ")") {
        brackets -= 1;
      }
      if (brackets === 0 && type === ":") {
        if (!prev) {
          this.doubleColon(token);
        } else if (prev[0] === "word" && prev[1] === "progid") {
          continue;
        } else {
          return i;
        }
      }
      prev = token;
    }
    return false;
  }
  unclosedBracket(bracket) {
    throw this.input.error("Unclosed bracket", { offset: bracket[2] }, { offset: bracket[2] + 1 });
  }
  unknownWord(tokens) {
    throw this.input.error("Unknown word", { offset: tokens[0][2] }, { offset: tokens[0][2] + tokens[0][1].length });
  }
  unexpectedClose(token) {
    throw this.input.error("Unexpected }", { offset: token[2] }, { offset: token[2] + 1 });
  }
  unclosedBlock() {
    let pos = this.current.source.start;
    throw this.input.error("Unclosed block", pos.line, pos.column);
  }
  doubleColon(token) {
    throw this.input.error("Double colon", { offset: token[2] }, { offset: token[2] + token[1].length });
  }
  unnamedAtrule(node2, token) {
    throw this.input.error("At-rule without name", { offset: token[2] }, { offset: token[2] + token[1].length });
  }
  precheckMissedSemicolon() {
  }
  checkMissedSemicolon(tokens) {
    let colon2 = this.colon(tokens);
    if (colon2 === false)
      return;
    let founded = 0;
    let token;
    for (let j = colon2 - 1; j >= 0; j--) {
      token = tokens[j];
      if (token[0] !== "space") {
        founded += 1;
        if (founded === 2)
          break;
      }
    }
    throw this.input.error("Missed semicolon", token[0] === "word" ? token[3] + 1 : token[2]);
  }
}
var parser = Parser$1;
let Container$2 = container;
let Parser = parser;
let Input$2 = input;
function parse$3(css, opts) {
  let input2 = new Input$2(css, opts);
  let parser2 = new Parser(input2);
  try {
    parser2.parse();
  } catch (e) {
    {
      if (e.name === "CssSyntaxError" && opts && opts.from) {
        if (/\.scss$/i.test(opts.from)) {
          e.message += "\nYou tried to parse SCSS with the standard CSS parser; try again with the postcss-scss parser";
        } else if (/\.sass/i.test(opts.from)) {
          e.message += "\nYou tried to parse Sass with the standard CSS parser; try again with the postcss-sass parser";
        } else if (/\.less$/i.test(opts.from)) {
          e.message += "\nYou tried to parse Less with the standard CSS parser; try again with the postcss-less parser";
        }
      }
    }
    throw e;
  }
  return parser2.root;
}
var parse_1 = parse$3;
parse$3.default = parse$3;
Container$2.registerParse(parse$3);
let { isClean, my } = symbols;
let MapGenerator$1 = mapGenerator;
let stringify$2 = stringify_1;
let Container$1 = container;
let Document$2 = document$1;
let warnOnce$1 = warnOnce$2;
let Result$2 = result;
let parse$2 = parse_1;
let Root$3 = root;
const TYPE_TO_CLASS_NAME = {
  document: "Document",
  root: "Root",
  atrule: "AtRule",
  rule: "Rule",
  decl: "Declaration",
  comment: "Comment"
};
const PLUGIN_PROPS = {
  postcssPlugin: true,
  prepare: true,
  Once: true,
  Document: true,
  Root: true,
  Declaration: true,
  Rule: true,
  AtRule: true,
  Comment: true,
  DeclarationExit: true,
  RuleExit: true,
  AtRuleExit: true,
  CommentExit: true,
  RootExit: true,
  DocumentExit: true,
  OnceExit: true
};
const NOT_VISITORS = {
  postcssPlugin: true,
  prepare: true,
  Once: true
};
const CHILDREN = 0;
function isPromise(obj) {
  return typeof obj === "object" && typeof obj.then === "function";
}
function getEvents(node2) {
  let key = false;
  let type = TYPE_TO_CLASS_NAME[node2.type];
  if (node2.type === "decl") {
    key = node2.prop.toLowerCase();
  } else if (node2.type === "atrule") {
    key = node2.name.toLowerCase();
  }
  if (key && node2.append) {
    return [
      type,
      type + "-" + key,
      CHILDREN,
      type + "Exit",
      type + "Exit-" + key
    ];
  } else if (key) {
    return [type, type + "-" + key, type + "Exit", type + "Exit-" + key];
  } else if (node2.append) {
    return [type, CHILDREN, type + "Exit"];
  } else {
    return [type, type + "Exit"];
  }
}
function toStack(node2) {
  let events2;
  if (node2.type === "document") {
    events2 = ["Document", CHILDREN, "DocumentExit"];
  } else if (node2.type === "root") {
    events2 = ["Root", CHILDREN, "RootExit"];
  } else {
    events2 = getEvents(node2);
  }
  return {
    node: node2,
    events: events2,
    eventIndex: 0,
    visitors: [],
    visitorIndex: 0,
    iterator: 0
  };
}
function cleanMarks(node2) {
  node2[isClean] = false;
  if (node2.nodes)
    node2.nodes.forEach((i) => cleanMarks(i));
  return node2;
}
let postcss$1 = {};
class LazyResult$2 {
  constructor(processor2, css, opts) {
    this.stringified = false;
    this.processed = false;
    let root2;
    if (typeof css === "object" && css !== null && (css.type === "root" || css.type === "document")) {
      root2 = cleanMarks(css);
    } else if (css instanceof LazyResult$2 || css instanceof Result$2) {
      root2 = cleanMarks(css.root);
      if (css.map) {
        if (typeof opts.map === "undefined")
          opts.map = {};
        if (!opts.map.inline)
          opts.map.inline = false;
        opts.map.prev = css.map;
      }
    } else {
      let parser2 = parse$2;
      if (opts.syntax)
        parser2 = opts.syntax.parse;
      if (opts.parser)
        parser2 = opts.parser;
      if (parser2.parse)
        parser2 = parser2.parse;
      try {
        root2 = parser2(css, opts);
      } catch (error) {
        this.processed = true;
        this.error = error;
      }
      if (root2 && !root2[my]) {
        Container$1.rebuild(root2);
      }
    }
    this.result = new Result$2(processor2, root2, opts);
    this.helpers = __spreadProps(__spreadValues({}, postcss$1), { result: this.result, postcss: postcss$1 });
    this.plugins = this.processor.plugins.map((plugin2) => {
      if (typeof plugin2 === "object" && plugin2.prepare) {
        return __spreadValues(__spreadValues({}, plugin2), plugin2.prepare(this.result));
      } else {
        return plugin2;
      }
    });
  }
  get [Symbol.toStringTag]() {
    return "LazyResult";
  }
  get processor() {
    return this.result.processor;
  }
  get opts() {
    return this.result.opts;
  }
  get css() {
    return this.stringify().css;
  }
  get content() {
    return this.stringify().content;
  }
  get map() {
    return this.stringify().map;
  }
  get root() {
    return this.sync().root;
  }
  get messages() {
    return this.sync().messages;
  }
  warnings() {
    return this.sync().warnings();
  }
  toString() {
    return this.css;
  }
  then(onFulfilled, onRejected) {
    {
      if (!("from" in this.opts)) {
        warnOnce$1("Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning.");
      }
    }
    return this.async().then(onFulfilled, onRejected);
  }
  catch(onRejected) {
    return this.async().catch(onRejected);
  }
  finally(onFinally) {
    return this.async().then(onFinally, onFinally);
  }
  async() {
    if (this.error)
      return Promise.reject(this.error);
    if (this.processed)
      return Promise.resolve(this.result);
    if (!this.processing) {
      this.processing = this.runAsync();
    }
    return this.processing;
  }
  sync() {
    if (this.error)
      throw this.error;
    if (this.processed)
      return this.result;
    this.processed = true;
    if (this.processing) {
      throw this.getAsyncError();
    }
    for (let plugin2 of this.plugins) {
      let promise = this.runOnRoot(plugin2);
      if (isPromise(promise)) {
        throw this.getAsyncError();
      }
    }
    this.prepareVisitors();
    if (this.hasListener) {
      let root2 = this.result.root;
      while (!root2[isClean]) {
        root2[isClean] = true;
        this.walkSync(root2);
      }
      if (this.listeners.OnceExit) {
        if (root2.type === "document") {
          for (let subRoot of root2.nodes) {
            this.visitSync(this.listeners.OnceExit, subRoot);
          }
        } else {
          this.visitSync(this.listeners.OnceExit, root2);
        }
      }
    }
    return this.result;
  }
  stringify() {
    if (this.error)
      throw this.error;
    if (this.stringified)
      return this.result;
    this.stringified = true;
    this.sync();
    let opts = this.result.opts;
    let str = stringify$2;
    if (opts.syntax)
      str = opts.syntax.stringify;
    if (opts.stringifier)
      str = opts.stringifier;
    if (str.stringify)
      str = str.stringify;
    let map2 = new MapGenerator$1(str, this.result.root, this.result.opts);
    let data = map2.generate();
    this.result.css = data[0];
    this.result.map = data[1];
    return this.result;
  }
  walkSync(node2) {
    node2[isClean] = true;
    let events2 = getEvents(node2);
    for (let event of events2) {
      if (event === CHILDREN) {
        if (node2.nodes) {
          node2.each((child) => {
            if (!child[isClean])
              this.walkSync(child);
          });
        }
      } else {
        let visitors = this.listeners[event];
        if (visitors) {
          if (this.visitSync(visitors, node2.toProxy()))
            return;
        }
      }
    }
  }
  visitSync(visitors, node2) {
    for (let [plugin2, visitor] of visitors) {
      this.result.lastPlugin = plugin2;
      let promise;
      try {
        promise = visitor(node2, this.helpers);
      } catch (e) {
        throw this.handleError(e, node2.proxyOf);
      }
      if (node2.type !== "root" && node2.type !== "document" && !node2.parent) {
        return true;
      }
      if (isPromise(promise)) {
        throw this.getAsyncError();
      }
    }
  }
  runOnRoot(plugin2) {
    this.result.lastPlugin = plugin2;
    try {
      if (typeof plugin2 === "object" && plugin2.Once) {
        if (this.result.root.type === "document") {
          let roots = this.result.root.nodes.map((root2) => plugin2.Once(root2, this.helpers));
          if (isPromise(roots[0])) {
            return Promise.all(roots);
          }
          return roots;
        }
        return plugin2.Once(this.result.root, this.helpers);
      } else if (typeof plugin2 === "function") {
        return plugin2(this.result.root, this.result);
      }
    } catch (error) {
      throw this.handleError(error);
    }
  }
  getAsyncError() {
    throw new Error("Use process(css).then(cb) to work with async plugins");
  }
  handleError(error, node2) {
    let plugin2 = this.result.lastPlugin;
    try {
      if (node2)
        node2.addToError(error);
      this.error = error;
      if (error.name === "CssSyntaxError" && !error.plugin) {
        error.plugin = plugin2.postcssPlugin;
        error.setMessage();
      } else if (plugin2.postcssVersion) {
        if (true) {
          let pluginName = plugin2.postcssPlugin;
          let pluginVer = plugin2.postcssVersion;
          let runtimeVer = this.result.processor.version;
          let a = pluginVer.split(".");
          let b = runtimeVer.split(".");
          if (a[0] !== b[0] || parseInt(a[1]) > parseInt(b[1])) {
            console.error("Unknown error from PostCSS plugin. Your current PostCSS version is " + runtimeVer + ", but " + pluginName + " uses " + pluginVer + ". Perhaps this is the source of the error below.");
          }
        }
      }
    } catch (err) {
      if (console && console.error)
        console.error(err);
    }
    return error;
  }
  async runAsync() {
    this.plugin = 0;
    for (let i = 0; i < this.plugins.length; i++) {
      let plugin2 = this.plugins[i];
      let promise = this.runOnRoot(plugin2);
      if (isPromise(promise)) {
        try {
          await promise;
        } catch (error) {
          throw this.handleError(error);
        }
      }
    }
    this.prepareVisitors();
    if (this.hasListener) {
      let root2 = this.result.root;
      while (!root2[isClean]) {
        root2[isClean] = true;
        let stack = [toStack(root2)];
        while (stack.length > 0) {
          let promise = this.visitTick(stack);
          if (isPromise(promise)) {
            try {
              await promise;
            } catch (e) {
              let node2 = stack[stack.length - 1].node;
              throw this.handleError(e, node2);
            }
          }
        }
      }
      if (this.listeners.OnceExit) {
        for (let [plugin2, visitor] of this.listeners.OnceExit) {
          this.result.lastPlugin = plugin2;
          try {
            if (root2.type === "document") {
              let roots = root2.nodes.map((subRoot) => visitor(subRoot, this.helpers));
              await Promise.all(roots);
            } else {
              await visitor(root2, this.helpers);
            }
          } catch (e) {
            throw this.handleError(e);
          }
        }
      }
    }
    this.processed = true;
    return this.stringify();
  }
  prepareVisitors() {
    this.listeners = {};
    let add = (plugin2, type, cb) => {
      if (!this.listeners[type])
        this.listeners[type] = [];
      this.listeners[type].push([plugin2, cb]);
    };
    for (let plugin2 of this.plugins) {
      if (typeof plugin2 === "object") {
        for (let event in plugin2) {
          if (!PLUGIN_PROPS[event] && /^[A-Z]/.test(event)) {
            throw new Error(`Unknown event ${event} in ${plugin2.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
          }
          if (!NOT_VISITORS[event]) {
            if (typeof plugin2[event] === "object") {
              for (let filter2 in plugin2[event]) {
                if (filter2 === "*") {
                  add(plugin2, event, plugin2[event][filter2]);
                } else {
                  add(plugin2, event + "-" + filter2.toLowerCase(), plugin2[event][filter2]);
                }
              }
            } else if (typeof plugin2[event] === "function") {
              add(plugin2, event, plugin2[event]);
            }
          }
        }
      }
    }
    this.hasListener = Object.keys(this.listeners).length > 0;
  }
  visitTick(stack) {
    let visit = stack[stack.length - 1];
    let { node: node2, visitors } = visit;
    if (node2.type !== "root" && node2.type !== "document" && !node2.parent) {
      stack.pop();
      return;
    }
    if (visitors.length > 0 && visit.visitorIndex < visitors.length) {
      let [plugin2, visitor] = visitors[visit.visitorIndex];
      visit.visitorIndex += 1;
      if (visit.visitorIndex === visitors.length) {
        visit.visitors = [];
        visit.visitorIndex = 0;
      }
      this.result.lastPlugin = plugin2;
      try {
        return visitor(node2.toProxy(), this.helpers);
      } catch (e) {
        throw this.handleError(e, node2);
      }
    }
    if (visit.iterator !== 0) {
      let iterator = visit.iterator;
      let child;
      while (child = node2.nodes[node2.indexes[iterator]]) {
        node2.indexes[iterator] += 1;
        if (!child[isClean]) {
          child[isClean] = true;
          stack.push(toStack(child));
          return;
        }
      }
      visit.iterator = 0;
      delete node2.indexes[iterator];
    }
    let events2 = visit.events;
    while (visit.eventIndex < events2.length) {
      let event = events2[visit.eventIndex];
      visit.eventIndex += 1;
      if (event === CHILDREN) {
        if (node2.nodes && node2.nodes.length) {
          node2[isClean] = true;
          visit.iterator = node2.getIterator();
        }
        return;
      } else if (this.listeners[event]) {
        visit.visitors = this.listeners[event];
        return;
      }
    }
    stack.pop();
  }
}
LazyResult$2.registerPostcss = (dependant) => {
  postcss$1 = dependant;
};
var lazyResult = LazyResult$2;
LazyResult$2.default = LazyResult$2;
Root$3.registerLazyResult(LazyResult$2);
Document$2.registerLazyResult(LazyResult$2);
let MapGenerator = mapGenerator;
let stringify$1 = stringify_1;
let warnOnce2 = warnOnce$2;
let parse$1 = parse_1;
const Result$1 = result;
class NoWorkResult$1 {
  constructor(processor2, css, opts) {
    css = css.toString();
    this.stringified = false;
    this._processor = processor2;
    this._css = css;
    this._opts = opts;
    this._map = void 0;
    let root2;
    let str = stringify$1;
    this.result = new Result$1(this._processor, root2, this._opts);
    this.result.css = css;
    let self = this;
    Object.defineProperty(this.result, "root", {
      get() {
        return self.root;
      }
    });
    let map2 = new MapGenerator(str, root2, this._opts, css);
    if (map2.isMap()) {
      let [generatedCSS, generatedMap] = map2.generate();
      if (generatedCSS) {
        this.result.css = generatedCSS;
      }
      if (generatedMap) {
        this.result.map = generatedMap;
      }
    }
  }
  get [Symbol.toStringTag]() {
    return "NoWorkResult";
  }
  get processor() {
    return this.result.processor;
  }
  get opts() {
    return this.result.opts;
  }
  get css() {
    return this.result.css;
  }
  get content() {
    return this.result.css;
  }
  get map() {
    return this.result.map;
  }
  get root() {
    if (this._root) {
      return this._root;
    }
    let root2;
    let parser2 = parse$1;
    try {
      root2 = parser2(this._css, this._opts);
    } catch (error) {
      this.error = error;
    }
    if (this.error) {
      throw this.error;
    } else {
      this._root = root2;
      return root2;
    }
  }
  get messages() {
    return [];
  }
  warnings() {
    return [];
  }
  toString() {
    return this._css;
  }
  then(onFulfilled, onRejected) {
    {
      if (!("from" in this._opts)) {
        warnOnce2("Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning.");
      }
    }
    return this.async().then(onFulfilled, onRejected);
  }
  catch(onRejected) {
    return this.async().catch(onRejected);
  }
  finally(onFinally) {
    return this.async().then(onFinally, onFinally);
  }
  async() {
    if (this.error)
      return Promise.reject(this.error);
    return Promise.resolve(this.result);
  }
  sync() {
    if (this.error)
      throw this.error;
    return this.result;
  }
}
var noWorkResult = NoWorkResult$1;
NoWorkResult$1.default = NoWorkResult$1;
let NoWorkResult = noWorkResult;
let LazyResult$1 = lazyResult;
let Document$1 = document$1;
let Root$2 = root;
class Processor$1 {
  constructor(plugins = []) {
    this.version = "8.4.14";
    this.plugins = this.normalize(plugins);
  }
  use(plugin2) {
    this.plugins = this.plugins.concat(this.normalize([plugin2]));
    return this;
  }
  process(css, opts = {}) {
    if (this.plugins.length === 0 && typeof opts.parser === "undefined" && typeof opts.stringifier === "undefined" && typeof opts.syntax === "undefined") {
      return new NoWorkResult(this, css, opts);
    } else {
      return new LazyResult$1(this, css, opts);
    }
  }
  normalize(plugins) {
    let normalized = [];
    for (let i of plugins) {
      if (i.postcss === true) {
        i = i();
      } else if (i.postcss) {
        i = i.postcss;
      }
      if (typeof i === "object" && Array.isArray(i.plugins)) {
        normalized = normalized.concat(i.plugins);
      } else if (typeof i === "object" && i.postcssPlugin) {
        normalized.push(i);
      } else if (typeof i === "function") {
        normalized.push(i);
      } else if (typeof i === "object" && (i.parse || i.stringify)) {
        {
          throw new Error("PostCSS syntaxes cannot be used as plugins. Instead, please use one of the syntax/parser/stringifier options as outlined in your PostCSS runner documentation.");
        }
      } else {
        throw new Error(i + " is not a PostCSS plugin");
      }
    }
    return normalized;
  }
}
var processor = Processor$1;
Processor$1.default = Processor$1;
Root$2.registerProcessor(Processor$1);
Document$1.registerProcessor(Processor$1);
let Declaration$1 = declaration;
let PreviousMap = previousMap;
let Comment$1 = comment;
let AtRule$1 = atRule;
let Input$1 = input;
let Root$1 = root;
let Rule$1 = rule;
function fromJSON$1(json, inputs) {
  if (Array.isArray(json))
    return json.map((n) => fromJSON$1(n));
  let _a = json, { inputs: ownInputs } = _a, defaults = __objRest(_a, ["inputs"]);
  if (ownInputs) {
    inputs = [];
    for (let input2 of ownInputs) {
      let inputHydrated = __spreadProps(__spreadValues({}, input2), { __proto__: Input$1.prototype });
      if (inputHydrated.map) {
        inputHydrated.map = __spreadProps(__spreadValues({}, inputHydrated.map), {
          __proto__: PreviousMap.prototype
        });
      }
      inputs.push(inputHydrated);
    }
  }
  if (defaults.nodes) {
    defaults.nodes = json.nodes.map((n) => fromJSON$1(n, inputs));
  }
  if (defaults.source) {
    let _b = defaults.source, { inputId } = _b, source = __objRest(_b, ["inputId"]);
    defaults.source = source;
    if (inputId != null) {
      defaults.source.input = inputs[inputId];
    }
  }
  if (defaults.type === "root") {
    return new Root$1(defaults);
  } else if (defaults.type === "decl") {
    return new Declaration$1(defaults);
  } else if (defaults.type === "rule") {
    return new Rule$1(defaults);
  } else if (defaults.type === "comment") {
    return new Comment$1(defaults);
  } else if (defaults.type === "atrule") {
    return new AtRule$1(defaults);
  } else {
    throw new Error("Unknown node type: " + json.type);
  }
}
var fromJSON_1 = fromJSON$1;
fromJSON$1.default = fromJSON$1;
let CssSyntaxError = cssSyntaxError;
let Declaration = declaration;
let LazyResult = lazyResult;
let Container = container;
let Processor = processor;
let stringify = stringify_1;
let fromJSON = fromJSON_1;
let Document = document$1;
let Warning = warning;
let Comment = comment;
let AtRule = atRule;
let Result = result;
let Input = input;
let parse = parse_1;
let list = list_1;
let Rule = rule;
let Root = root;
let Node = node_1;
function postcss(...plugins) {
  if (plugins.length === 1 && Array.isArray(plugins[0])) {
    plugins = plugins[0];
  }
  return new Processor(plugins);
}
postcss.plugin = function plugin(name, initializer) {
  let warningPrinted = false;
  function creator(...args) {
    if (console && console.warn && !warningPrinted) {
      warningPrinted = true;
      console.warn(name + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration");
      if ({}.LANG && {}.LANG.startsWith("cn")) {
        console.warn(name + ": \u91CC\u9762 postcss.plugin \u88AB\u5F03\u7528. \u8FC1\u79FB\u6307\u5357:\nhttps://www.w3ctech.com/topic/2226");
      }
    }
    let transformer = initializer(...args);
    transformer.postcssPlugin = name;
    transformer.postcssVersion = new Processor().version;
    return transformer;
  }
  let cache;
  Object.defineProperty(creator, "postcss", {
    get() {
      if (!cache)
        cache = creator();
      return cache;
    }
  });
  creator.process = function(css, processOpts, pluginOpts) {
    return postcss([creator(pluginOpts)]).process(css, processOpts);
  };
  return creator;
};
postcss.stringify = stringify;
postcss.parse = parse;
postcss.fromJSON = fromJSON;
postcss.list = list;
postcss.comment = (defaults) => new Comment(defaults);
postcss.atRule = (defaults) => new AtRule(defaults);
postcss.decl = (defaults) => new Declaration(defaults);
postcss.rule = (defaults) => new Rule(defaults);
postcss.root = (defaults) => new Root(defaults);
postcss.document = (defaults) => new Document(defaults);
postcss.CssSyntaxError = CssSyntaxError;
postcss.Declaration = Declaration;
postcss.Container = Container;
postcss.Processor = Processor;
postcss.Document = Document;
postcss.Comment = Comment;
postcss.Warning = Warning;
postcss.AtRule = AtRule;
postcss.Result = Result;
postcss.Input = Input;
postcss.Rule = Rule;
postcss.Root = Root;
postcss.Node = Node;
LazyResult.registerPostcss(postcss);
var postcss_1 = postcss;
postcss.default = postcss;
const htmlparser = lib$5;
const escapeStringRegexp = escapeStringRegexp$1;
const { isPlainObject } = isPlainObject$2;
const deepmerge = cjs;
const parseSrcset = parseSrcset$1.exports;
const { parse: postcssParse } = postcss_1;
const mediaTags = [
  "img",
  "audio",
  "video",
  "picture",
  "svg",
  "object",
  "map",
  "iframe",
  "embed"
];
const vulnerableTags = ["script", "style"];
function each(obj, cb) {
  if (obj) {
    Object.keys(obj).forEach(function(key) {
      cb(obj[key], key);
    });
  }
}
function has(obj, key) {
  return {}.hasOwnProperty.call(obj, key);
}
function filter(a, cb) {
  const n = [];
  each(a, function(v) {
    if (cb(v)) {
      n.push(v);
    }
  });
  return n;
}
function isEmptyObject(obj) {
  for (const key in obj) {
    if (has(obj, key)) {
      return false;
    }
  }
  return true;
}
function stringifySrcset(parsedSrcset) {
  return parsedSrcset.map(function(part2) {
    if (!part2.url) {
      throw new Error("URL missing");
    }
    return part2.url + (part2.w ? ` ${part2.w}w` : "") + (part2.h ? ` ${part2.h}h` : "") + (part2.d ? ` ${part2.d}x` : "");
  }).join(", ");
}
var sanitizeHtml_1 = sanitizeHtml;
const VALID_HTML_ATTRIBUTE_NAME = /^[^\0\t\n\f\r /<=>]+$/;
function sanitizeHtml(html, options, _recursing) {
  if (html == null) {
    return "";
  }
  let result2 = "";
  let tempResult = "";
  function Frame(tag, attribs) {
    const that = this;
    this.tag = tag;
    this.attribs = attribs || {};
    this.tagPosition = result2.length;
    this.text = "";
    this.mediaChildren = [];
    this.updateParentNodeText = function() {
      if (stack.length) {
        const parentFrame = stack[stack.length - 1];
        parentFrame.text += that.text;
      }
    };
    this.updateParentNodeMediaChildren = function() {
      if (stack.length && mediaTags.includes(this.tag)) {
        const parentFrame = stack[stack.length - 1];
        parentFrame.mediaChildren.push(this.tag);
      }
    };
  }
  options = Object.assign({}, sanitizeHtml.defaults, options);
  options.parser = Object.assign({}, htmlParserDefaults, options.parser);
  vulnerableTags.forEach(function(tag) {
    if (options.allowedTags && options.allowedTags.indexOf(tag) > -1 && !options.allowVulnerableTags) {
      console.warn(`

\u26A0\uFE0F Your \`allowedTags\` option includes, \`${tag}\`, which is inherently
vulnerable to XSS attacks. Please remove it from \`allowedTags\`.
Or, to disable this warning, add the \`allowVulnerableTags\` option
and ensure you are accounting for this risk.

`);
    }
  });
  const nonTextTagsArray = options.nonTextTags || [
    "script",
    "style",
    "textarea",
    "option"
  ];
  let allowedAttributesMap;
  let allowedAttributesGlobMap;
  if (options.allowedAttributes) {
    allowedAttributesMap = {};
    allowedAttributesGlobMap = {};
    each(options.allowedAttributes, function(attributes, tag) {
      allowedAttributesMap[tag] = [];
      const globRegex = [];
      attributes.forEach(function(obj) {
        if (typeof obj === "string" && obj.indexOf("*") >= 0) {
          globRegex.push(escapeStringRegexp(obj).replace(/\\\*/g, ".*"));
        } else {
          allowedAttributesMap[tag].push(obj);
        }
      });
      if (globRegex.length) {
        allowedAttributesGlobMap[tag] = new RegExp("^(" + globRegex.join("|") + ")$");
      }
    });
  }
  const allowedClassesMap = {};
  const allowedClassesGlobMap = {};
  const allowedClassesRegexMap = {};
  each(options.allowedClasses, function(classes, tag) {
    if (allowedAttributesMap) {
      if (!has(allowedAttributesMap, tag)) {
        allowedAttributesMap[tag] = [];
      }
      allowedAttributesMap[tag].push("class");
    }
    allowedClassesMap[tag] = [];
    allowedClassesRegexMap[tag] = [];
    const globRegex = [];
    classes.forEach(function(obj) {
      if (typeof obj === "string" && obj.indexOf("*") >= 0) {
        globRegex.push(escapeStringRegexp(obj).replace(/\\\*/g, ".*"));
      } else if (obj instanceof RegExp) {
        allowedClassesRegexMap[tag].push(obj);
      } else {
        allowedClassesMap[tag].push(obj);
      }
    });
    if (globRegex.length) {
      allowedClassesGlobMap[tag] = new RegExp("^(" + globRegex.join("|") + ")$");
    }
  });
  const transformTagsMap = {};
  let transformTagsAll;
  each(options.transformTags, function(transform, tag) {
    let transFun;
    if (typeof transform === "function") {
      transFun = transform;
    } else if (typeof transform === "string") {
      transFun = sanitizeHtml.simpleTransform(transform);
    }
    if (tag === "*") {
      transformTagsAll = transFun;
    } else {
      transformTagsMap[tag] = transFun;
    }
  });
  let depth;
  let stack;
  let skipMap;
  let transformMap;
  let skipText;
  let skipTextDepth;
  let addedText = false;
  initializeState();
  const parser2 = new htmlparser.Parser({
    onopentag: function(name, attribs) {
      if (options.enforceHtmlBoundary && name === "html") {
        initializeState();
      }
      if (skipText) {
        skipTextDepth++;
        return;
      }
      const frame = new Frame(name, attribs);
      stack.push(frame);
      let skip = false;
      const hasText = !!frame.text;
      let transformedTag;
      if (has(transformTagsMap, name)) {
        transformedTag = transformTagsMap[name](name, attribs);
        frame.attribs = attribs = transformedTag.attribs;
        if (transformedTag.text !== void 0) {
          frame.innerText = transformedTag.text;
        }
        if (name !== transformedTag.tagName) {
          frame.name = name = transformedTag.tagName;
          transformMap[depth] = transformedTag.tagName;
        }
      }
      if (transformTagsAll) {
        transformedTag = transformTagsAll(name, attribs);
        frame.attribs = attribs = transformedTag.attribs;
        if (name !== transformedTag.tagName) {
          frame.name = name = transformedTag.tagName;
          transformMap[depth] = transformedTag.tagName;
        }
      }
      if (options.allowedTags && options.allowedTags.indexOf(name) === -1 || options.disallowedTagsMode === "recursiveEscape" && !isEmptyObject(skipMap) || options.nestingLimit != null && depth >= options.nestingLimit) {
        skip = true;
        skipMap[depth] = true;
        if (options.disallowedTagsMode === "discard") {
          if (nonTextTagsArray.indexOf(name) !== -1) {
            skipText = true;
            skipTextDepth = 1;
          }
        }
        skipMap[depth] = true;
      }
      depth++;
      if (skip) {
        if (options.disallowedTagsMode === "discard") {
          return;
        }
        tempResult = result2;
        result2 = "";
      }
      result2 += "<" + name;
      if (name === "script") {
        if (options.allowedScriptHostnames || options.allowedScriptDomains) {
          frame.innerText = "";
        }
      }
      if (!allowedAttributesMap || has(allowedAttributesMap, name) || allowedAttributesMap["*"]) {
        each(attribs, function(value, a) {
          if (!VALID_HTML_ATTRIBUTE_NAME.test(a)) {
            delete frame.attribs[a];
            return;
          }
          let parsed;
          let passedAllowedAttributesMapCheck = false;
          if (!allowedAttributesMap || has(allowedAttributesMap, name) && allowedAttributesMap[name].indexOf(a) !== -1 || allowedAttributesMap["*"] && allowedAttributesMap["*"].indexOf(a) !== -1 || has(allowedAttributesGlobMap, name) && allowedAttributesGlobMap[name].test(a) || allowedAttributesGlobMap["*"] && allowedAttributesGlobMap["*"].test(a)) {
            passedAllowedAttributesMapCheck = true;
          } else if (allowedAttributesMap && allowedAttributesMap[name]) {
            for (const o of allowedAttributesMap[name]) {
              if (isPlainObject(o) && o.name && o.name === a) {
                passedAllowedAttributesMapCheck = true;
                let newValue = "";
                if (o.multiple === true) {
                  const splitStrArray = value.split(" ");
                  for (const s of splitStrArray) {
                    if (o.values.indexOf(s) !== -1) {
                      if (newValue === "") {
                        newValue = s;
                      } else {
                        newValue += " " + s;
                      }
                    }
                  }
                } else if (o.values.indexOf(value) >= 0) {
                  newValue = value;
                }
                value = newValue;
              }
            }
          }
          if (passedAllowedAttributesMapCheck) {
            if (options.allowedSchemesAppliedToAttributes.indexOf(a) !== -1) {
              if (naughtyHref(name, value)) {
                delete frame.attribs[a];
                return;
              }
            }
            if (name === "script" && a === "src") {
              let allowed = true;
              try {
                const parsed2 = new URL(value);
                if (options.allowedScriptHostnames || options.allowedScriptDomains) {
                  const allowedHostname = (options.allowedScriptHostnames || []).find(function(hostname) {
                    return hostname === parsed2.hostname;
                  });
                  const allowedDomain = (options.allowedScriptDomains || []).find(function(domain) {
                    return parsed2.hostname === domain || parsed2.hostname.endsWith(`.${domain}`);
                  });
                  allowed = allowedHostname || allowedDomain;
                }
              } catch (e) {
                allowed = false;
              }
              if (!allowed) {
                delete frame.attribs[a];
                return;
              }
            }
            if (name === "iframe" && a === "src") {
              let allowed = true;
              try {
                value = value.replace(/^(\w+:)?\s*[\\/]\s*[\\/]/, "$1//");
                if (value.startsWith("relative:")) {
                  throw new Error("relative: exploit attempt");
                }
                let base = "relative://relative-site";
                for (let i = 0; i < 100; i++) {
                  base += `/${i}`;
                }
                const parsed2 = new URL(value, base);
                const isRelativeUrl = parsed2 && parsed2.hostname === "relative-site" && parsed2.protocol === "relative:";
                if (isRelativeUrl) {
                  allowed = has(options, "allowIframeRelativeUrls") ? options.allowIframeRelativeUrls : !options.allowedIframeHostnames && !options.allowedIframeDomains;
                } else if (options.allowedIframeHostnames || options.allowedIframeDomains) {
                  const allowedHostname = (options.allowedIframeHostnames || []).find(function(hostname) {
                    return hostname === parsed2.hostname;
                  });
                  const allowedDomain = (options.allowedIframeDomains || []).find(function(domain) {
                    return parsed2.hostname === domain || parsed2.hostname.endsWith(`.${domain}`);
                  });
                  allowed = allowedHostname || allowedDomain;
                }
              } catch (e) {
                allowed = false;
              }
              if (!allowed) {
                delete frame.attribs[a];
                return;
              }
            }
            if (a === "srcset") {
              try {
                parsed = parseSrcset(value);
                parsed.forEach(function(value2) {
                  if (naughtyHref("srcset", value2.url)) {
                    value2.evil = true;
                  }
                });
                parsed = filter(parsed, function(v) {
                  return !v.evil;
                });
                if (!parsed.length) {
                  delete frame.attribs[a];
                  return;
                } else {
                  value = stringifySrcset(filter(parsed, function(v) {
                    return !v.evil;
                  }));
                  frame.attribs[a] = value;
                }
              } catch (e) {
                delete frame.attribs[a];
                return;
              }
            }
            if (a === "class") {
              const allowedSpecificClasses = allowedClassesMap[name];
              const allowedWildcardClasses = allowedClassesMap["*"];
              const allowedSpecificClassesGlob = allowedClassesGlobMap[name];
              const allowedSpecificClassesRegex = allowedClassesRegexMap[name];
              const allowedWildcardClassesGlob = allowedClassesGlobMap["*"];
              const allowedClassesGlobs = [
                allowedSpecificClassesGlob,
                allowedWildcardClassesGlob
              ].concat(allowedSpecificClassesRegex).filter(function(t) {
                return t;
              });
              if (allowedSpecificClasses && allowedWildcardClasses) {
                value = filterClasses(value, deepmerge(allowedSpecificClasses, allowedWildcardClasses), allowedClassesGlobs);
              } else {
                value = filterClasses(value, allowedSpecificClasses || allowedWildcardClasses, allowedClassesGlobs);
              }
              if (!value.length) {
                delete frame.attribs[a];
                return;
              }
            }
            if (a === "style") {
              try {
                const abstractSyntaxTree = postcssParse(name + " {" + value + "}");
                const filteredAST = filterCss(abstractSyntaxTree, options.allowedStyles);
                value = stringifyStyleAttributes(filteredAST);
                if (value.length === 0) {
                  delete frame.attribs[a];
                  return;
                }
              } catch (e) {
                delete frame.attribs[a];
                return;
              }
            }
            result2 += " " + a;
            if (value && value.length) {
              result2 += '="' + escapeHtml(value, true) + '"';
            }
          } else {
            delete frame.attribs[a];
          }
        });
      }
      if (options.selfClosing.indexOf(name) !== -1) {
        result2 += " />";
      } else {
        result2 += ">";
        if (frame.innerText && !hasText && !options.textFilter) {
          result2 += escapeHtml(frame.innerText);
          addedText = true;
        }
      }
      if (skip) {
        result2 = tempResult + escapeHtml(result2);
        tempResult = "";
      }
    },
    ontext: function(text) {
      if (skipText) {
        return;
      }
      const lastFrame = stack[stack.length - 1];
      let tag;
      if (lastFrame) {
        tag = lastFrame.tag;
        text = lastFrame.innerText !== void 0 ? lastFrame.innerText : text;
      }
      if (options.disallowedTagsMode === "discard" && (tag === "script" || tag === "style")) {
        result2 += text;
      } else {
        const escaped = escapeHtml(text, false);
        if (options.textFilter && !addedText) {
          result2 += options.textFilter(escaped, tag);
        } else if (!addedText) {
          result2 += escaped;
        }
      }
      if (stack.length) {
        const frame = stack[stack.length - 1];
        frame.text += text;
      }
    },
    onclosetag: function(name) {
      if (skipText) {
        skipTextDepth--;
        if (!skipTextDepth) {
          skipText = false;
        } else {
          return;
        }
      }
      const frame = stack.pop();
      if (!frame) {
        return;
      }
      skipText = options.enforceHtmlBoundary ? name === "html" : false;
      depth--;
      const skip = skipMap[depth];
      if (skip) {
        delete skipMap[depth];
        if (options.disallowedTagsMode === "discard") {
          frame.updateParentNodeText();
          return;
        }
        tempResult = result2;
        result2 = "";
      }
      if (transformMap[depth]) {
        name = transformMap[depth];
        delete transformMap[depth];
      }
      if (options.exclusiveFilter && options.exclusiveFilter(frame)) {
        result2 = result2.substr(0, frame.tagPosition);
        return;
      }
      frame.updateParentNodeMediaChildren();
      frame.updateParentNodeText();
      if (options.selfClosing.indexOf(name) !== -1) {
        if (skip) {
          result2 = tempResult;
          tempResult = "";
        }
        return;
      }
      result2 += "</" + name + ">";
      if (skip) {
        result2 = tempResult + escapeHtml(result2);
        tempResult = "";
      }
      addedText = false;
    }
  }, options.parser);
  parser2.write(html);
  parser2.end();
  return result2;
  function initializeState() {
    result2 = "";
    depth = 0;
    stack = [];
    skipMap = {};
    transformMap = {};
    skipText = false;
    skipTextDepth = 0;
  }
  function escapeHtml(s, quote) {
    if (typeof s !== "string") {
      s = s + "";
    }
    if (options.parser.decodeEntities) {
      s = s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      if (quote) {
        s = s.replace(/"/g, "&quot;");
      }
    }
    s = s.replace(/&(?![a-zA-Z0-9#]{1,20};)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    if (quote) {
      s = s.replace(/"/g, "&quot;");
    }
    return s;
  }
  function naughtyHref(name, href) {
    href = href.replace(/[\x00-\x20]+/g, "");
    href = href.replace(/<!--.*?-->/g, "");
    const matches = href.match(/^([a-zA-Z][a-zA-Z0-9.\-+]*):/);
    if (!matches) {
      if (href.match(/^[/\\]{2}/)) {
        return !options.allowProtocolRelative;
      }
      return false;
    }
    const scheme = matches[1].toLowerCase();
    if (has(options.allowedSchemesByTag, name)) {
      return options.allowedSchemesByTag[name].indexOf(scheme) === -1;
    }
    return !options.allowedSchemes || options.allowedSchemes.indexOf(scheme) === -1;
  }
  function filterCss(abstractSyntaxTree, allowedStyles) {
    if (!allowedStyles) {
      return abstractSyntaxTree;
    }
    const astRules = abstractSyntaxTree.nodes[0];
    let selectedRule;
    if (allowedStyles[astRules.selector] && allowedStyles["*"]) {
      selectedRule = deepmerge(allowedStyles[astRules.selector], allowedStyles["*"]);
    } else {
      selectedRule = allowedStyles[astRules.selector] || allowedStyles["*"];
    }
    if (selectedRule) {
      abstractSyntaxTree.nodes[0].nodes = astRules.nodes.reduce(filterDeclarations(selectedRule), []);
    }
    return abstractSyntaxTree;
  }
  function stringifyStyleAttributes(filteredAST) {
    return filteredAST.nodes[0].nodes.reduce(function(extractedAttributes, attrObject) {
      extractedAttributes.push(`${attrObject.prop}:${attrObject.value}${attrObject.important ? " !important" : ""}`);
      return extractedAttributes;
    }, []).join(";");
  }
  function filterDeclarations(selectedRule) {
    return function(allowedDeclarationsList, attributeObject) {
      if (has(selectedRule, attributeObject.prop)) {
        const matchesRegex = selectedRule[attributeObject.prop].some(function(regularExpression) {
          return regularExpression.test(attributeObject.value);
        });
        if (matchesRegex) {
          allowedDeclarationsList.push(attributeObject);
        }
      }
      return allowedDeclarationsList;
    };
  }
  function filterClasses(classes, allowed, allowedGlobs) {
    if (!allowed) {
      return classes;
    }
    classes = classes.split(/\s+/);
    return classes.filter(function(clss) {
      return allowed.indexOf(clss) !== -1 || allowedGlobs.some(function(glob) {
        return glob.test(clss);
      });
    }).join(" ");
  }
}
const htmlParserDefaults = {
  decodeEntities: true
};
sanitizeHtml.defaults = {
  allowedTags: [
    "address",
    "article",
    "aside",
    "footer",
    "header",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "hgroup",
    "main",
    "nav",
    "section",
    "blockquote",
    "dd",
    "div",
    "dl",
    "dt",
    "figcaption",
    "figure",
    "hr",
    "li",
    "main",
    "ol",
    "p",
    "pre",
    "ul",
    "a",
    "abbr",
    "b",
    "bdi",
    "bdo",
    "br",
    "cite",
    "code",
    "data",
    "dfn",
    "em",
    "i",
    "kbd",
    "mark",
    "q",
    "rb",
    "rp",
    "rt",
    "rtc",
    "ruby",
    "s",
    "samp",
    "small",
    "span",
    "strong",
    "sub",
    "sup",
    "time",
    "u",
    "var",
    "wbr",
    "caption",
    "col",
    "colgroup",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "tr"
  ],
  disallowedTagsMode: "discard",
  allowedAttributes: {
    a: ["href", "name", "target"],
    img: ["src", "srcset", "alt", "title", "width", "height", "loading"]
  },
  selfClosing: ["img", "br", "hr", "area", "base", "basefont", "input", "link", "meta"],
  allowedSchemes: ["http", "https", "ftp", "mailto", "tel"],
  allowedSchemesByTag: {},
  allowedSchemesAppliedToAttributes: ["href", "src", "cite"],
  allowProtocolRelative: true,
  enforceHtmlBoundary: false
};
sanitizeHtml.simpleTransform = function(newTagName, newAttribs, merge) {
  merge = merge === void 0 ? true : merge;
  newAttribs = newAttribs || {};
  return function(tagName, attribs) {
    let attrib;
    if (merge) {
      for (attrib in newAttribs) {
        attribs[attrib] = newAttribs[attrib];
      }
    } else {
      attribs = newAttribs;
    }
    return {
      tagName: newTagName,
      attribs
    };
  };
};
var sanitizeHtml$1 = sanitizeHtml_1;
const _sfc_main$w = {
  name: "FieldPreview",
  props: {
    id: {
      type: String,
      default: ""
    },
    expectedType: {
      type: String,
      default: ""
    }
  },
  computed: __spreadProps(__spreadValues({}, mapState(["fields"])), {
    field() {
      const field = this.$store.getters["form/field"](this.id);
      if (!field) {
        return {
          settings: {}
        };
      }
      return field;
    },
    fieldType() {
      return this.$store.getters["fieldtypes/fieldtype"](this.field.type);
    }
  }),
  render() {
    let { preview } = this.fieldType;
    const props = {
      field: this.field,
      fieldType: this.fieldType,
      parseDate(date) {
        return parseDate(date);
      },
      getMonthName(date) {
        const parsed = parseDate(date);
        return new Intl.DateTimeFormat("en-US", { month: "long" }).format(new Date(parsed));
      },
      sanitize(html) {
        return sanitizeHtml$1(html);
      }
    };
    preview = preview.replace(/\${/g, "{{").replace(/}/g, "}}");
    return h(compileToFunction(`<div>${preview}</div>`), props);
  }
};
var FieldPreview = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["__file", "/Users/joshcrawford/public_html/craft4-plugins/formie/src/web/assets/forms/src/js/components/FieldPreview.vue"]]);
const _sfc_main$v = {
  name: "FieldDropdownItem",
  props: {
    icon: {
      type: String,
      default: ""
    },
    action: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    classes: {
      type: String,
      default: ""
    }
  },
  emits: ["clicked"],
  methods: {
    click(event) {
      this.$emit("clicked", this.action);
    }
  }
};
const _hoisted_1$r = ["data-icon"];
function _sfc_render$v(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("li", null, [
    createBaseVNode("a", {
      "data-icon": $props.icon,
      role: "option",
      class: normalizeClass($props.classes),
      onClick: _cache[0] || (_cache[0] = withModifiers((...args) => $options.click && $options.click(...args), ["prevent"]))
    }, toDisplayString($props.label), 11, _hoisted_1$r)
  ]);
}
var FieldDropdownItem = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$v], ["__file", "/Users/joshcrawford/public_html/craft4-plugins/formie/src/web/assets/forms/src/js/components/FieldDropdownItem.vue"]]);
const _sfc_main$u = {
  name: "FieldEditTab",
  components: {
    FieldDropdownItem
  },
  props: {
    isRequired: {
      type: Boolean,
      default: false
    },
    canRequire: {
      type: Boolean,
      default: true
    }
  },
  emits: ["edit", "require", "unrequire", "clone", "delete"],
  mounted() {
    Craft.initUiElements();
  },
  methods: {
    selectOption(action) {
      this.$emit(action);
    }
  }
};
const _hoisted_1$q = { class: "fui-field-actions" };
const _hoisted_2$n = ["data-menu-anchor"];
const _hoisted_3$m = /* @__PURE__ */ createBaseVNode("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32"
}, [
  /* @__PURE__ */ createBaseVNode("path", { d: "M29.328 13.732l-3.551-0.35c-0.251-0.927-0.597-1.739-1.038-2.488l2.294-2.716c0.104-0.127 0.167-0.292 0.167-0.471 0-0.206-0.084-0.393-0.219-0.528l-2.161-2.161c-0.135-0.135-0.322-0.219-0.528-0.219-0.179 0-0.344 0.063-0.472 0.168l-2.761 2.267c-0.702-0.415-1.513-0.761-2.37-0.996l-0.42-3.568c-0.039-0.379-0.356-0.671-0.742-0.672h-3.052c-0.386 0.001-0.703 0.293-0.742 0.669l-0.35 3.559c-0.927 0.251-1.739 0.597-2.487 1.038l-2.716-2.293c-0.127-0.104-0.292-0.167-0.471-0.167-0.206 0-0.393 0.083-0.528 0.219l-2.156 2.156c-0.135 0.135-0.219 0.322-0.219 0.528 0 0.179 0.063 0.344 0.168 0.472l2.267 2.761c-0.415 0.702-0.762 1.513-0.996 2.371l-3.572 0.42c-0.379 0.039-0.671 0.356-0.672 0.742v3.052c0.001 0.386 0.293 0.703 0.669 0.742l3.559 0.35c0.251 0.927 0.597 1.739 1.038 2.487l-2.293 2.716c-0.106 0.128-0.171 0.293-0.171 0.474 0 0.205 0.083 0.391 0.218 0.525l2.156 2.156c0.135 0.135 0.322 0.219 0.528 0.219 0.179 0 0.344-0.063 0.472-0.168l2.761-2.267c0.702 0.416 1.513 0.764 2.37 1.001l0.421 3.568c0.039 0.379 0.357 0.672 0.743 0.672 0.001 0 0.003 0 0.004 0h3.052c0.386-0 0.703-0.293 0.742-0.669l0.35-3.555c0.927-0.253 1.739-0.6 2.487-1.043l2.716 2.293c0.127 0.104 0.292 0.167 0.471 0.167 0.206 0 0.393-0.084 0.528-0.219l2.156-2.156c0.134-0.134 0.218-0.32 0.218-0.525 0-0.181-0.065-0.346-0.172-0.475l-2.267-2.761c0.415-0.702 0.761-1.513 0.996-2.37l3.568-0.42c0.383-0.035 0.68-0.353 0.681-0.742v-3.052c-0-0.386-0.293-0.703-0.669-0.742l-0.003-0zM16 20.13c-2.281 0-4.13-1.849-4.13-4.13s1.849-4.13 4.13-4.13c2.281 0 4.13 1.849 4.13 4.13s-1.849 4.13-4.13 4.13z" })
], -1);
const _hoisted_4$l = /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Field options", -1);
const _hoisted_5$k = ["id"];
const _hoisted_6$h = {
  class: "fui-menu menu",
  "data-align": "right"
};
const _hoisted_7$h = { class: "padded" };
const _hoisted_8$g = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createBaseVNode("hr", { class: "padded" })
], -1);
function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_field_dropdown_item = resolveComponent("field-dropdown-item");
  return openBlock(), createElementBlock("div", _hoisted_1$q, [
    createBaseVNode("button", {
      class: "fui-field-settings fui-tab-btn menubtn",
      role: "button",
      type: "button",
      "data-menu-anchor": _ctx.$idRef("edit-field-anchor")
    }, [
      _hoisted_3$m,
      _hoisted_4$l,
      createBaseVNode("div", {
        id: _ctx.$id("edit-field-anchor")
      }, null, 8, _hoisted_5$k)
    ], 8, _hoisted_2$n),
    createBaseVNode("div", _hoisted_6$h, [
      createBaseVNode("ul", _hoisted_7$h, [
        createVNode(_component_field_dropdown_item, {
          icon: "edit",
          action: "edit",
          label: "Edit",
          onClicked: $options.selectOption
        }, null, 8, ["onClicked"]),
        !$props.isRequired && $props.canRequire ? (openBlock(), createBlock(_component_field_dropdown_item, {
          key: 0,
          icon: "asterisk",
          action: "require",
          label: "Make required",
          onClicked: $options.selectOption
        }, null, 8, ["onClicked"])) : $props.canRequire ? (openBlock(), createBlock(_component_field_dropdown_item, {
          key: 1,
          icon: "asterisk",
          action: "unrequire",
          label: "Make not required",
          onClicked: $options.selectOption
        }, null, 8, ["onClicked"])) : createCommentVNode("v-if", true),
        createVNode(_component_field_dropdown_item, {
          icon: "clone",
          action: "clone",
          label: "Clone",
          onClicked: $options.selectOption
        }, null, 8, ["onClicked"]),
        _hoisted_8$g,
        createVNode(_component_field_dropdown_item, {
          icon: "remove",
          action: "delete",
          label: "Delete",
          classes: "error",
          onClicked: $options.selectOption
        }, null, 8, ["onClicked"])
      ])
    ])
  ]);
}
var FieldDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", _sfc_render$u], ["__file", "/Users/joshcrawford/public_html/craft4-plugins/formie/src/web/assets/forms/src/js/components/FieldDropdown.vue"]]);
const markdown = new markdownIt();
const _sfc_main$t = {
  name: "Markdown",
  props: {
    source: {
      type: String,
      default: ""
    }
  },
  computed: {
    html() {
      return markdown.renderInline(this.source);
    }
  }
};
const _hoisted_1$p = ["innerHTML"];
function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("p", { innerHTML: $options.html }, null, 8, _hoisted_1$p);
}
var Markdown = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$t], ["__file", "/Users/joshcrawford/public_html/craft4-plugins/formie/src/web/assets/forms/src/js/components/Markdown.vue"]]);
const _sfc_main$s = {
  name: "Field",
  components: {
    FieldEditModal,
    FieldPreview,
    FieldDropdown,
    Drag,
    Drop,
    Markdown
  },
  props: {
    field: {
      type: Object,
      default: () => {
      }
    },
    columnIndex: {
      type: Number,
      default: 0
    },
    pageIndex: {
      type: Number,
      default: null
    },
    rowIndex: {
      type: Number,
      default: 0
    },
    fieldId: {
      type: [String, Number],
      default: ""
    },
    expectedType: {
      type: String,
      default: ""
    },
    brandNewField: {
      type: Boolean,
      default: false
    },
    parentFieldId: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      dropzonesActive: false,
      dropzoneLeftHover: false,
      dropzoneRightHover: false,
      dragActive: false,
      showModal: false,
      submitButton: false,
      isSafari: isSafari()
    };
  },
  computed: {
    columnWidth() {
      const columns = this.$parent.fields.length;
      return 12 / columns;
    },
    showDropzones() {
      const columns = this.$parent.fields.length;
      return columns < 4;
    },
    fieldtype() {
      return this.$store.getters["fieldtypes/fieldtype"](this.field.type);
    },
    sourceField() {
      return this.$store.getters["form/field"](this.fieldId);
    },
    displayName() {
      return getDisplayName(this.field.type);
    },
    nameKebab() {
      return generateKebab(this.displayName);
    },
    fieldHandles() {
      return this.$store.getters["form/fieldHandlesExcluding"](this.field.vid, this.parentFieldId);
    },
    fieldCanRequire() {
      const disallowedFields = {
        "verbb\\formie\\fields\\formfields\\Address": false,
        "verbb\\formie\\fields\\formfields\\Heading": false,
        "verbb\\formie\\fields\\formfields\\Hidden": false,
        "verbb\\formie\\fields\\formfields\\Html": false,
        "verbb\\formie\\fields\\formfields\\Repeater": false,
        "verbb\\formie\\fields\\formfields\\Section": false,
        "verbb\\formie\\fields\\formfields\\Name": (field) => {
          return !field.settings.useMultipleFields;
        }
      };
      const disallowedField = disallowedFields[this.field.type];
      if (typeof disallowedField === "boolean") {
        return disallowedField;
      }
      if (typeof disallowedField === "function") {
        const field = this.$store.getters["form/field"](this.field.vid);
        return disallowedField(field);
      }
      return true;
    },
    fieldsSchema() {
      return this.fieldtype.fieldsSchema;
    },
    tabsSchema() {
      return this.fieldtype.tabsSchema;
    }
  },
  created() {
    this.$events.on("formie:dragging-active", this.draggingActive);
    this.$events.on("formie:dragging-inactive", this.draggingInactive);
    if (this.brandNewField) {
      this.openModal();
    }
  },
  mounted() {
    if (this.$parent.$parent.pageIndex == 0 && this.$parent.rowIndex == 5 && this.columnIndex == 0)
      ;
  },
  beforeUnmount() {
    this.$events.off("formie:dragging-active", this.draggingActive);
    this.$events.off("formie:dragging-inactive", this.draggingInactive);
  },
  methods: {
    draggingActive(data) {
      if (!this.canDrag(data)) {
        return;
      }
      this.dropzonesActive = true;
    },
    draggingInactive() {
      this.dragActive = false;
      this.dropzoneLeftHover = false;
      this.dropzoneRightHover = false;
      this.dropzonesActive = false;
    },
    openModal() {
      this.showModal = true;
    },
    onModalClosed() {
      this.showModal = false;
      if (this.brandNewField) {
        this.$store.dispatch("form/deleteField", { id: this.field.vid });
      }
    },
    requireField() {
      const payload = {
        rowIndex: this.rowIndex,
        columnIndex: this.columnIndex,
        prop: "required",
        value: true
      };
      if (this.fieldId) {
        payload.fieldId = this.fieldId;
      } else {
        payload.pageIndex = this.pageIndex;
      }
      this.$store.dispatch("form/updateFieldSettings", payload);
    },
    unrequireField() {
      const payload = {
        rowIndex: this.rowIndex,
        columnIndex: this.columnIndex,
        prop: "required",
        value: false
      };
      if (this.fieldId) {
        payload.fieldId = this.fieldId;
      } else {
        payload.pageIndex = this.pageIndex;
      }
      this.$store.dispatch("form/updateFieldSettings", payload);
    },
    cloneField() {
      const generatedHandle = generateHandle(this.field.label);
      let handles = this.$store.getters["form/fieldHandles"];
      if (this.parentFieldId) {
        handles = this.$store.getters["form/fieldHandlesForField"](this.parentFieldId);
      }
      const value = getNextAvailableHandle(handles, generatedHandle, 0);
      const maxHandleLength = this.$store.getters["formie/maxFieldHandleLength"]();
      const newHandle = value.substr(0, maxHandleLength);
      const newField = this.$store.getters["fieldtypes/newField"](this.field.type, {
        label: this.field.label,
        handle: newHandle,
        settings: cloneDeep(this.field.settings)
      });
      if (this.field.supportsNested) {
        newField.rows = cloneDeep(this.field.rows);
        newField.rows.forEach((row) => {
          row.id = newId();
          row.fields.forEach((field) => {
            delete field.id;
            field.vid = newId();
          });
        });
      }
      const payload = {
        rowIndex: this.rowIndex + 1,
        data: {
          id: newId(),
          fields: [
            newField
          ]
        }
      };
      if (this.fieldId) {
        payload.fieldId = this.fieldId;
      } else {
        payload.pageIndex = this.pageIndex;
      }
      this.$store.dispatch("form/appendRow", payload);
    },
    deleteField() {
      const name = this.field.label || this.fieldtype.label;
      const confirmationMessage = Craft.t("formie", "Are you sure you want to delete \u201C{name}\u201D?", { name });
      if (confirm(confirmationMessage)) {
        this.$store.dispatch("form/deleteField", { id: this.field.vid });
      }
    },
    dragStart(data, event) {
      if (this.pageIndex < 0) {
        event.stopPropagation();
      }
      setTimeout(() => {
        this.$events.emit("formie:dragging-active", data, event);
      }, 50);
      this.dragActive = true;
    },
    dragEnd(data, event) {
      this.$events.emit("formie:dragging-inactive", data, event);
    },
    dragEnter(data, event) {
      this.toggleDropzone(event, true);
    },
    dragLeave(data, event) {
      this.toggleDropzone(event, false);
    },
    dragDrop(data, event) {
      if (!data) {
        return;
      }
      this.$events.emit("formie:dragging-inactive");
      const isPill = data.trigger === "pill";
      const columnIndex = event.target.getAttribute("data-column");
      const rowIndex = event.target.getAttribute("data-row");
      if (isPill) {
        this.addColumn(columnIndex, data.type);
      } else {
        const sourceRowIndex = data.rowIndex;
        const sourceColumnIndex = data.columnIndex;
        this.moveColumn(sourceRowIndex, sourceColumnIndex, rowIndex, columnIndex);
      }
    },
    canDrag(data) {
      return canDrag(this.pageIndex, this.sourceField, data);
    },
    toggleDropzone(event, state) {
      if (event.target === this.$refs.dropzoneLeft.$el) {
        this.dropzoneLeftHover = state;
      } else if (event.target === this.$refs.dropzoneRight.$el) {
        this.dropzoneRightHover = state;
      }
    },
    addColumn(columnIndex, type) {
      const newColumns = 12 / (this.$parent.fields.length + 1);
      const newField = this.$store.getters["fieldtypes/newField"](type, {
        columnWidth: newColumns,
        brandNewField: true,
        isNested: this.field.isNested
      });
      const payload = {
        rowIndex: this.rowIndex,
        data: newField,
        columnIndex
      };
      if (this.fieldId) {
        payload.fieldId = this.fieldId;
      } else {
        payload.pageIndex = this.pageIndex;
      }
      this.$store.dispatch("form/addColumn", payload);
    },
    moveColumn(sourceRowIndex, sourceColumnIndex, rowIndex, columnIndex) {
      const payload = {
        sourceRowIndex,
        sourceColumnIndex,
        rowIndex,
        columnIndex
      };
      if (this.fieldId) {
        payload.fieldId = this.fieldId;
      } else {
        payload.pageIndex = this.pageIndex;
      }
      this.$store.dispatch("form/moveColumn", payload);
    },
    markAsSaved() {
      const payload = {
        rowIndex: this.rowIndex,
        columnIndex: this.columnIndex,
        prop: "brandNewField",
        value: false
      };
      if (this.fieldId) {
        payload.fieldId = this.fieldId;
      } else {
        payload.pageIndex = this.pageIndex;
      }
      this.$store.dispatch("form/setFieldProp", payload);
    },
    markAsError(error) {
      const payload = {
        rowIndex: this.rowIndex,
        columnIndex: this.columnIndex,
        prop: "hasError",
        value: error
      };
      if (this.fieldId) {
        payload.fieldId = this.fieldId;
      } else {
        payload.pageIndex = this.pageIndex;
      }
      this.$store.dispatch("form/setFieldProp", payload);
    }
  }
};
const _hoisted_1$o = { class: "dropzone-holder" };
const _hoisted_2$m = /* @__PURE__ */ createBaseVNode("div", { class: "dashed-dropzone dashed-dropzone-vertical" }, null, -1);
const _hoisted_3$l = { class: "fui-field-info" };
const _hoisted_4$k = {
  key: 0,
  class: "fui-field-label"
};
const _hoisted_5$j = { key: 0 };
const _hoisted_6$g = { key: 1 };
const _hoisted_7$g = {
  key: 2,
  class: "error"
};
const _hoisted_8$f = {
  key: 1,
  class: "fui-field-synced"
};
const _hoisted_9$b = /* @__PURE__ */ createBaseVNode("svg", {
  "aria-hidden": "true",
  focusable: "false",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    fill: "currentColor",
    d: "M440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26 175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57zM255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432z"
  })
], -1);
const _hoisted_10$9 = {
  key: 2,
  class: "fui-field-conditions"
};
const _hoisted_11$8 = /* @__PURE__ */ createBaseVNode("svg", {
  "aria-hidden": "true",
  focusable: "false",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 576 512"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    fill: "currentColor",
    d: "M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"
  })
], -1);
const _hoisted_12$8 = { class: "fui-field-handle" };
const _hoisted_13$7 = /* @__PURE__ */ createBaseVNode("span", { class: "fui-flex-break" }, null, -1);
const _hoisted_14$6 = { class: "fui-field-instructions" };
const _hoisted_15$5 = {
  class: "fui-field-pill",
  style: { "width": "148px" }
};
const _hoisted_16$5 = ["innerHTML"];
const _hoisted_17$5 = { class: "fui-field-pill-name" };
const _hoisted_18$5 = /* @__PURE__ */ createBaseVNode("span", { class: "fui-field-pill-drag" }, null, -1);
const _hoisted_19$5 = { class: "dropzone-holder" };
const _hoisted_20$5 = /* @__PURE__ */ createBaseVNode("div", { class: "dashed-dropzone dashed-dropzone-vertical" }, null, -1);
function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_drop = resolveComponent("drop");
  const _component_field_dropdown = resolveComponent("field-dropdown");
  const _component_field_preview = resolveComponent("field-preview");
  const _component_markdown = resolveComponent("markdown");
  const _component_field_edit_modal = resolveComponent("field-edit-modal");
  const _component_drag = resolveComponent("drag");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass("fui-col-" + $options.columnWidth),
    style: { "display": "flex" }
  }, [
    withDirectives(createBaseVNode("div", {
      class: normalizeClass(["form-field-drop-target", { "is-active": $data.dropzonesActive, "is-hover": $data.dropzoneLeftHover }])
    }, [
      createBaseVNode("div", _hoisted_1$o, [
        createVNode(_component_drop, {
          ref: "dropzoneLeft",
          class: "form-field-dropzone form-field-dropzone-vertical",
          "data-column": $props.columnIndex,
          "data-row": $props.rowIndex,
          onOnDrop: $options.dragDrop,
          onOnDragenter: $options.dragEnter,
          onOnDragleave: $options.dragLeave
        }, null, 8, ["data-column", "data-row", "onOnDrop", "onOnDragenter", "onOnDragleave"]),
        _hoisted_2$m
      ])
    ], 2), [
      [vShow, $props.columnIndex === 0 && $options.showDropzones]
    ]),
    createVNode(_component_drag, {
      ref: "draggableField",
      class: normalizeClass(["fui-field-block", { "is-active": $data.dragActive, "has-errors": $props.field.hasError }]),
      "transfer-data": {
        trigger: "field",
        supportsNested: $options.fieldtype.supportsNested,
        rowIndex: $props.rowIndex,
        fieldId: $props.fieldId,
        pageIndex: $props.pageIndex,
        columnIndex: $props.columnIndex
      },
      "hide-image-html": !$data.isSafari,
      onOnDragstart: $options.dragStart,
      onOnDragend: $options.dragEnd
    }, createSlots({
      default: withCtx(() => [
        !$options.fieldtype.supportsNested ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "fui-edit-overlay",
          onClick: _cache[0] || (_cache[0] = withModifiers((...args) => $options.openModal && $options.openModal(...args), ["prevent"]))
        })) : createCommentVNode("v-if", true),
        createBaseVNode("div", _hoisted_3$l, [
          $options.fieldtype.hasLabel ? (openBlock(), createElementBlock("label", _hoisted_4$k, [
            $props.field.label && $props.field.label.length ? (openBlock(), createElementBlock("span", _hoisted_5$j, toDisplayString($props.field.label), 1)) : (openBlock(), createElementBlock("span", _hoisted_6$g, toDisplayString($options.fieldtype.label), 1)),
            $props.field.settings.required ? (openBlock(), createElementBlock("span", _hoisted_7$g, " *")) : createCommentVNode("v-if", true)
          ])) : createCommentVNode("v-if", true),
          $props.field.isSynced ? (openBlock(), createElementBlock("span", _hoisted_8$f, [
            _hoisted_9$b,
            createTextVNode(" " + toDisplayString(_ctx.t("formie", "Synced")), 1)
          ])) : createCommentVNode("v-if", true),
          $props.field.hasConditions ? (openBlock(), createElementBlock("span", _hoisted_10$9, [
            _hoisted_11$8,
            createTextVNode(" " + toDisplayString(_ctx.t("formie", "Conditions")), 1)
          ])) : createCommentVNode("v-if", true),
          createBaseVNode("code", _hoisted_12$8, toDisplayString($props.field.handle), 1),
          _hoisted_13$7,
          createBaseVNode("span", _hoisted_14$6, toDisplayString($props.field.settings.instructions), 1),
          createVNode(_component_field_dropdown, {
            "is-required": $props.field.settings.required,
            "can-require": $options.fieldCanRequire,
            onEdit: $options.openModal,
            onRequire: $options.requireField,
            onUnrequire: $options.unrequireField,
            onClone: $options.cloneField,
            onDelete: $options.deleteField
          }, null, 8, ["is-required", "can-require", "onEdit", "onRequire", "onUnrequire", "onClone", "onDelete"])
        ]),
        createVNode(_component_field_preview, {
          id: $props.field.vid,
          class: normalizeClass(["fui-field-preview", `fui-type-${$options.nameKebab}`]),
          "expected-type": $props.expectedType
        }, null, 8, ["id", "class", "expected-type"]),
        $options.fieldtype.data.warning ? (openBlock(), createBlock(_component_markdown, {
          key: 1,
          class: "warning with-icon",
          source: $options.fieldtype.data.warning
        }, null, 8, ["source"])) : createCommentVNode("v-if", true),
        $data.showModal ? (openBlock(), createBlock(_component_field_edit_modal, {
          key: 2,
          showModal: $data.showModal,
          "onUpdate:showModal": _cache[1] || (_cache[1] = ($event) => $data.showModal = $event),
          field: $props.field,
          "onUpdate:field": _cache[2] || (_cache[2] = ($event) => $props.field = $event),
          "field-ref": this,
          "fields-schema": $options.fieldsSchema,
          "tabs-schema": $options.tabsSchema,
          onDelete: $options.deleteField,
          onClosed: $options.onModalClosed
        }, null, 8, ["showModal", "field", "fields-schema", "tabs-schema", "onDelete", "onClosed"])) : createCommentVNode("v-if", true)
      ]),
      _: 2
    }, [
      !$data.isSafari ? {
        name: "image",
        fn: withCtx(() => [
          createBaseVNode("div", _hoisted_15$5, [
            createBaseVNode("span", {
              class: "fui-field-pill-icon",
              innerHTML: $options.fieldtype.icon
            }, null, 8, _hoisted_16$5),
            createBaseVNode("span", _hoisted_17$5, toDisplayString($props.field.label), 1),
            _hoisted_18$5
          ])
        ])
      } : void 0
    ]), 1032, ["class", "transfer-data", "hide-image-html", "onOnDragstart", "onOnDragend"]),
    withDirectives(createBaseVNode("div", {
      class: normalizeClass(["form-field-drop-target", { "is-active": $data.dropzonesActive, "is-hover": $data.dropzoneRightHover }])
    }, [
      createBaseVNode("div", _hoisted_19$5, [
        createVNode(_component_drop, {
          ref: "dropzoneRight",
          class: "form-field-dropzone form-field-dropzone-vertical",
          "data-column": $props.columnIndex + 1,
          "data-row": $props.rowIndex,
          onOnDrop: $options.dragDrop,
          onOnDragenter: $options.dragEnter,
          onOnDragleave: $options.dragLeave
        }, null, 8, ["data-column", "data-row", "onOnDrop", "onOnDragenter", "onOnDragleave"]),
        _hoisted_20$5
      ])
    ], 2), [
      [vShow, $options.showDropzones]
    ])
  ], 2);
}
var Field = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$s], ["__file", "/Users/joshcrawford/public_html/craft4-plugins/formie/src/web/assets/forms/src/js/components/Field.vue"]]);
const _sfc_main$r = {
  name: "FieldRow",
  components: {
    Field,
    Drop
  },
  props: {
    id: {
      type: [String, Number],
      default: ""
    },
    pageIndex: {
      type: Number,
      default: -1
    },
    rowIndex: {
      type: Number,
      default: 0
    },
    fieldId: {
      type: String,
      default: ""
    },
    fields: {
      type: Array,
      default: () => {
        return [];
      }
    },
    parentFieldId: {
      type: String,
      default: ""
    },
    isNested: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dropzonesActive: false,
      dropzoneTopHover: false,
      dropzoneBottomHover: false
    };
  },
  computed: {
    sourceField() {
      return this.$store.getters["form/field"](this.fieldId);
    }
  },
  created() {
    this.$events.on("formie:dragging-active", this.draggingActive);
    this.$events.on("formie:dragging-inactive", this.draggingInactive);
  },
  beforeUnmount() {
    this.$events.off("formie:dragging-active", this.draggingActive);
    this.$events.off("formie:dragging-inactive", this.draggingInactive);
  },
  methods: {
    draggingActive(data) {
      if (!this.canDrag(data)) {
        return;
      }
      this.dropzonesActive = true;
    },
    draggingInactive() {
      this.dropzonesActive = false;
      this.dropzoneTopHover = false;
      this.dropzoneBottomHover = false;
    },
    dragEnter(data, event) {
      if (!data || !this.canDrag(data)) {
        return;
      }
      this.toggleDropzone(event, true);
    },
    dragLeave(data, event) {
      this.toggleDropzone(event, false);
    },
    dragDrop(data, event) {
      if (!data || !this.canDrag(data)) {
        return;
      }
      this.$events.emit("formie:dragging-inactive");
      const isPill = data.trigger === "pill";
      const rowIndex = event.target.getAttribute("data-row");
      if (isPill) {
        const fieldtype = this.$store.getters["fieldtypes/fieldtype"](data.type);
        this.addRow(rowIndex, fieldtype.type);
      } else {
        const sourceRowIndex = data.rowIndex;
        const sourceColumnIndex = data.columnIndex;
        this.moveRow(sourceRowIndex, sourceColumnIndex, rowIndex);
      }
    },
    toggleDropzone(event, state) {
      if (event.target === this.$refs.dropzoneTop.$el) {
        this.dropzoneTopHover = state;
      } else if (event.target === this.$refs.dropzoneBottom.$el) {
        this.dropzoneBottomHover = state;
      }
    },
    addRow(rowIndex, type) {
      const newField = this.$store.getters["fieldtypes/newField"](type, {
        brandNewField: true,
        isNested: this.isNested
      });
      const payload = {
        rowIndex,
        data: {
          id: newId(),
          fields: [
            newField
          ]
        }
      };
      if (this.fieldId) {
        payload.fieldId = this.fieldId;
      } else {
        payload.pageIndex = this.pageIndex;
      }
      this.$store.dispatch("form/addRow", payload);
    },
    moveRow(sourceRowIndex, sourceColumnIndex, rowIndex) {
      const payload = {
        sourceRowIndex,
        sourceColumnIndex,
        rowIndex,
        data: {
          id: newId()
        }
      };
      if (this.fieldId) {
        payload.fieldId = this.fieldId;
      } else {
        payload.pageIndex = this.pageIndex;
      }
      this.$store.dispatch("form/moveRow", payload);
    },
    canDrag(data) {
      return canDrag(this.pageIndex, this.sourceField, data);
    }
  }
};
const _hoisted_1$n = { class: "dropzone-holder" };
const _hoisted_2$l = /* @__PURE__ */ createBaseVNode("div", { class: "dashed-dropzone dashed-dropzone-horizontal" }, null, -1);
const _hoisted_3$k = { class: "fui-row no-padding" };
const _hoisted_4$j = { class: "dropzone-holder" };
const _hoisted_5$i = /* @__PURE__ */ createBaseVNode("div", { class: "dashed-dropzone dashed-dropzone-horizontal" }, null, -1);
function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_drop = resolveComponent("drop");
  const _component_field = resolveComponent("field");
  return openBlock(), createElementBlock("div", null, [
    withDirectives(createBaseVNode("div", {
      class: normalizeClass(["form-field-drop-target-container", { "is-active": $data.dropzonesActive, "is-hover": $data.dropzoneTopHover }])
    }, [
      createBaseVNode("div", _hoisted_1$n, [
        createVNode(_component_drop, {
          ref: "dropzoneTop",
          class: "form-field-dropzone form-field-dropzone-horizontal",
          "data-row": $props.rowIndex,
          onOnDrop: $options.dragDrop,
          onOnDragenter: $options.dragEnter,
          onOnDragleave: $options.dragLeave
        }, null, 8, ["data-row", "onOnDrop", "onOnDragenter", "onOnDragleave"]),
        _hoisted_2$l
      ])
    ], 2), [
      [vShow, $props.rowIndex === 0]
    ]),
    createBaseVNode("div", _hoisted_3$k, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.fields, (field, index) => {
        return openBlock(), createBlock(_component_field, mergeProps({
          ref_for: true,
          ref: "fields",
          key: field.vid,
          "column-index": index,
          "page-index": $props.pageIndex,
          "row-index": $props.rowIndex,
          "field-id": $props.fieldId,
          field
        }, field, { "parent-field-id": $props.parentFieldId }), null, 16, ["column-index", "page-index", "row-index", "field-id", "field", "parent-field-id"]);
      }), 128))
    ]),
    createBaseVNode("div", {
      class: normalizeClass(["form-field-drop-target-container", { "is-active": $data.dropzonesActive, "is-hover": $data.dropzoneBottomHover }])
    }, [
      createBaseVNode("div", _hoisted_4$j, [
        createVNode(_component_drop, {
          ref: "dropzoneBottom",
          class: "form-field-dropzone form-field-dropzone-horizontal",
          "data-row": $props.rowIndex + 1,
          onOnDrop: $options.dragDrop,
          onOnDragenter: $options.dragEnter,
          onOnDragleave: $options.dragLeave
        }, null, 8, ["data-row", "onOnDrop", "onOnDragenter", "onOnDragleave"]),
        _hoisted_5$i
      ])
    ], 2)
  ]);
}
var FieldRow = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$r], ["__file", "/Users/joshcrawford/public_html/craft4-plugins/formie/src/web/assets/forms/src/js/components/FieldRow.vue"]]);
const _sfc_main$q = {
  name: "DropzoneNewField",
  components: {
    Drop
  },
  props: {
    pageIndex: {
      type: Number,
      default: -1
    },
    fieldId: {
      type: [String, Number],
      default: ""
    },
    isNested: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dropzonesActive: false,
      dropzoneHover: false
    };
  },
  computed: {
    sourceField() {
      return this.$store.getters["form/field"](this.fieldId);
    }
  },
  created() {
    this.$events.on("formie:dragging-active", this.draggingActive);
    this.$events.on("formie:dragging-inactive", this.draggingInactive);
  },
  beforeUnmount() {
    this.$events.off("formie:dragging-active", this.draggingActive);
    this.$events.off("formie:dragging-inactive", this.draggingInactive);
  },
  methods: {
    draggingActive(data) {
      if (!this.canDrag(data)) {
        return;
      }
      this.dropzonesActive = true;
    },
    draggingInactive() {
      this.dropzonesActive = false;
      this.dropzoneHover = false;
    },
    dragEnter(data, event) {
      if (!data) {
        return;
      }
      if (this.canDrag(data)) {
        this.dropzoneHover = true;
      }
    },
    dragLeave() {
      this.dropzoneHover = false;
    },
    dragDrop(data, event) {
      if (!data) {
        return;
      }
      this.$events.emit("formie:dragging-inactive");
      if (!this.canDrag(data)) {
        return;
      }
      const newField = this.$store.getters["fieldtypes/newField"](data.type, {
        brandNewField: true
      });
      const payload = {
        data: {
          id: newId(),
          fields: [
            newField
          ]
        }
      };
      if (this.fieldId) {
        payload.fieldId = this.fieldId;
      } else {
        payload.pageIndex = this.pageIndex;
      }
      this.$store.dispatch("form/appendRow", payload);
    },
    canDrag(data) {
      return canDrag(this.pageIndex, this.sourceField, data);
    }
  }
};
function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_drop = resolveComponent("drop");
  return openBlock(), createBlock(_component_drop, {
    class: normalizeClass(["dropzone-new-field", { "is-active": $data.dropzonesActive, "is-hover": $data.dropzoneHover }]),
    onOnDrop: $options.dragDrop,
    onOnDragenter: $options.dragEnter,
    onOnDragleave: $options.dragLeave
  }, {
    default: withCtx(() => [
      createBaseVNode("span", null, toDisplayString(_ctx.t("formie", "Drag and drop a field here")), 1)
    ]),
    _: 1
  }, 8, ["class", "onOnDrop", "onOnDragenter", "onOnDragleave"]);
}
var DropzoneNewField = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$q], ["__file", "/Users/joshcrawford/public_html/craft4-plugins/formie/src/web/assets/forms/src/js/components/DropzoneNewField.vue"]]);
var SubmitButtons_vue_vue_type_style_index_0_lang = /* @__PURE__ */ (() => ".fui-btn-link {\n  color: #e12d38;\n  padding: 0 0.5rem;\n}")();
const _sfc_main$p = {
  name: "SubmitButtons",
  components: {
    FieldEditModal
  },
  props: {
    pageId: {
      type: [String, Number],
      default: ""
    },
    pageIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      id: Math.random(),
      showModal: false,
      originalField: null,
      submitButton: true
    };
  },
  computed: __spreadProps(__spreadValues({}, mapState({
    pages: (state) => {
      return state.form.pages;
    },
    form: (state) => {
      return state.form;
    }
  })), {
    field: {
      get() {
        return this.pages[this.pageIndex];
      },
      set(newValue) {
        const payload = {
          pageIndex: this.pageIndex,
          data: newValue.settings
        };
        this.$store.dispatch("form/addPageSettings", payload);
      }
    },
    settings() {
      return this.field.settings;
    },
    isFirstButton() {
      return this.pageIndex === 0;
    },
    tabsSchema() {
      return [
        {
          label: Craft.t("formie", "General"),
          fields: [
            "submitButtonLabel",
            "showBackButton",
            "backButtonLabel"
          ]
        },
        {
          label: Craft.t("formie", "Appearance"),
          fields: [
            "buttonsPosition",
            "cssClasses"
          ]
        },
        {
          label: Craft.t("formie", "Conditions"),
          fields: [
            "enableConditions",
            "conditions"
          ]
        },
        {
          label: Craft.t("formie", "Advanced"),
          fields: [
            "enableJsEvents",
            "jsEvents"
          ]
        }
      ];
    },
    fieldsSchema() {
      let fields = [];
      if (!this.isFirstButton) {
        fields = [
          {
            $formkit: "lightswitch",
            label: Craft.t("formie", "Show Back Button"),
            help: Craft.t("formie", "Whether to show the back button, to go back to a previous page."),
            name: "showBackButton",
            id: "showBackButton",
            key: "showBackButton"
          },
          {
            $formkit: "text",
            inputClass: "text fullwidth",
            autocomplete: "off",
            label: Craft.t("formie", "Back Button Label"),
            help: Craft.t("formie", "The label for the back submit button."),
            name: "backButtonLabel",
            id: "backButtonLabel",
            key: "backButtonLabel",
            if: "$get(showBackButton).value",
            validation: "required",
            required: true
          }
        ];
      }
      const fieldsSchema = [
        {
          $cmp: "TabPanel",
          attrs: {
            "data-tab-panel": "General"
          },
          children: [
            {
              $formkit: "text",
              inputClass: "text fullwidth",
              autocomplete: "off",
              label: Craft.t("formie", "Button Label"),
              help: Craft.t("formie", "The label for the submit button."),
              name: "submitButtonLabel",
              id: "submitButtonLabel",
              key: "submitButtonLabel",
              validation: "required",
              required: true
            },
            {
              $formkit: "lightswitch",
              label: Craft.t("formie", "Show Save Button"),
              help: Craft.t("formie", "Whether to show the save button, allowing users to save progress on a submission to return later."),
              name: "showSaveButton",
              id: "showSaveButton",
              key: "showSaveButton"
            },
            {
              $formkit: "text",
              inputClass: "text fullwidth",
              autocomplete: "off",
              label: Craft.t("formie", "Save Button Label"),
              help: Craft.t("formie", "The label for the save submit button."),
              name: "saveButtonLabel",
              id: "saveButtonLabel",
              key: "saveButtonLabel",
              if: "$get(showSaveButton).value",
              validation: "required",
              required: true
            },
            ...fields
          ]
        },
        {
          $cmp: "TabPanel",
          attrs: {
            "data-tab-panel": "General"
          },
          children: [
            {
              $formkit: "select",
              label: Craft.t("formie", "Submit Buttons Position"),
              help: Craft.t("formie", "How the submit buttons should be positioned."),
              name: "buttonsPosition",
              id: "buttonsPosition",
              key: "buttonsPosition",
              options: this.buttonsPosition
            },
            {
              $formkit: "select",
              label: Craft.t("formie", "Save Button Style"),
              help: Craft.t("formie", "Select the style for the save button."),
              name: "saveButtonStyle",
              id: "saveButtonStyle",
              key: "saveButtonStyle",
              if: "$get(showSaveButton).value",
              options: [
                { label: Craft.t("formie", "Link"), value: "link" },
                { label: Craft.t("formie", "Button"), value: "button" }
              ]
            },
            {
              $formkit: "text",
              inputClass: "text fullwidth",
              autocomplete: "off",
              label: Craft.t("formie", "CSS Classes"),
              help: Craft.t("formie", "Add classes that will be output on submit button container."),
              name: "cssClasses",
              id: "cssClasses",
              key: "cssClasses"
            },
            {
              $formkit: "table",
              label: Craft.t("formie", "Container Attributes"),
              help: Craft.t("formie", "Add attributes to be outputted on this submit button\u2019s container."),
              validation: "min:0",
              generateValue: false,
              name: "containerAttributes",
              id: "containerAttributes",
              key: "containerAttributes",
              newRowDefaults: {
                label: "",
                value: ""
              },
              columns: [
                {
                  type: "label",
                  label: "Name",
                  class: "singleline-cell textual"
                },
                {
                  type: "value",
                  label: "Value",
                  class: "singleline-cell textual"
                }
              ]
            },
            {
              $formkit: "table",
              label: Craft.t("formie", "Input Attributes"),
              help: Craft.t("formie", "Add attributes to be outputted on this submit button\u2019s input."),
              validation: "min:0",
              generateValue: false,
              name: "inputAttributes",
              id: "inputAttributes",
              key: "inputAttributes",
              newRowDefaults: {
                label: "",
                value: ""
              },
              columns: [
                {
                  type: "label",
                  label: "Name",
                  class: "singleline-cell textual"
                },
                {
                  type: "value",
                  label: "Value",
                  class: "singleline-cell textual"
                }
              ]
            }
          ]
        },
        {
          $cmp: "TabPanel",
          attrs: {
            "data-tab-panel": "General"
          },
          children: [
            {
              $formkit: "lightswitch",
              labelPosition: "before",
              label: Craft.t("formie", "Enable Conditions"),
              help: Craft.t("formie", "Whether to enable conditional logic to control how the next button is shown."),
              name: "enableNextButtonConditions",
              id: "enableNextButtonConditions",
              key: "enableNextButtonConditions"
            },
            {
              $formkit: "fieldConditions",
              name: "nextButtonConditions",
              id: "nextButtonConditions",
              key: "nextButtonConditions",
              descriptionText: "the next button if",
              if: "$get(enableNextButtonConditions).value"
            }
          ]
        },
        {
          $cmp: "TabPanel",
          attrs: {
            "data-tab-panel": "General"
          },
          children: [
            {
              $formkit: "lightswitch",
              labelPosition: "before",
              label: Craft.t("formie", "Enable JavaScript Events"),
              help: Craft.t("formie", "Whether to enable management of JavaScript events when this button is pressed."),
              name: "enableJsEvents",
              id: "enableJsEvents",
              key: "enableJsEvents"
            },
            {
              $formkit: "table",
              label: Craft.t("formie", "Google Tag Manager Event Data"),
              help: Craft.t("formie", "Add event data to be sent to Google Tag Manager."),
              validation: "min:0",
              generateValue: false,
              name: "jsGtmEventOptions",
              id: "jsGtmEventOptions",
              key: "jsGtmEventOptions",
              if: "$get(enableJsEvents).value",
              newRowDefaults: {
                label: "",
                value: ""
              },
              initialValue: [{
                label: "event",
                value: "formPageSubmission"
              }, {
                label: "formId",
                value: this.form.handle
              }, {
                label: "pageId",
                value: this.pageId
              }, {
                label: "pageIndex",
                value: this.pageIndex
              }],
              columns: [
                {
                  type: "label",
                  label: "Option",
                  class: "singleline-cell textual"
                },
                {
                  type: "value",
                  label: "Value",
                  class: "singleline-cell textual"
                }
              ]
            }
          ]
        }
      ];
      return [{
        $cmp: "TabPanels",
        attrs: {
          class: "fui-modal-content"
        },
        children: fieldsSchema
      }];
    },
    buttonsPosition() {
      const positions = [
        { label: Craft.t("formie", "Left"), value: "left" },
        { label: Craft.t("formie", "Right"), value: "right" }
      ];
      if (this.settings.showSaveButton) {
        positions.push({ label: Craft.t("formie", "Right (Save on Left)"), value: "right-save-left" });
        positions.push({ label: Craft.t("formie", "Center (Save on Left)"), value: "center-save-left" });
        positions.push({ label: Craft.t("formie", "Center (Save on Right)"), value: "center-save-right" });
        positions.push({ label: Craft.t("formie", "Save on Right"), value: "save-right" });
        positions.push({ label: Craft.t("formie", "Save on Left"), value: "save-left" });
      } else {
        positions.push({ label: Craft.t("formie", "Center"), value: "center" });
        if (this.settings.showBackButton) {
          positions.push({ label: Craft.t("formie", "Left & Right"), value: "left-right" });
        }
      }
      return positions;
    },
    cssAlignment() {
      if (this.settings.buttonsPosition === "right") {
        return { "justify-content": "flex-end" };
      }
      if (this.settings.buttonsPosition === "center") {
        return { "justify-content": "center" };
      }
      if (this.settings.buttonsPosition === "left-right") {
        return { "justify-content": "space-between" };
      }
      if (this.settings.buttonsPosition === "right-save-left") {
        return { "justify-content": "flex-start", "flex-direction": "row-reverse" };
      }
      if (this.settings.buttonsPosition === "center-save-left") {
        return { "justify-content": "center", "flex-direction": "row-reverse" };
      }
      if (this.settings.buttonsPosition === "center-save-right") {
        return { "justify-content": "center" };
      }
      if (this.settings.buttonsPosition === "save-right") {
        return { "justify-content": "space-between" };
      }
      if (this.settings.buttonsPosition === "save-left") {
        return { "justify-content": "space-between", "flex-direction": "row-reverse" };
      }
      return { "justify-content": "normal" };
    }
  }),
  created() {
    this.originalField = this.clone(this.settings);
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    onModalClosed() {
      this.showModal = false;
    },
    markAsSaved() {
    }
  }
};
const _hoisted_1$m = { class: "flex" };
const _hoisted_2$k = {
  key: 0,
  href: "#",
  class: "btn"
};
const _hoisted_3$j = {
  href: "#",
  class: "btn submit"
};
const _hoisted_4$i = { class: "flex" };
const _hoisted_5$h = {
  key: 0,
  href: "#",
  class: "fui-btn-link"
};
const _hoisted_6$f = {
  key: 1,
  href: "#",
  class: "btn submit"
};
const _hoisted_7$f = {
  key: 0,
  href: "#",
  class: "btn"
};
const _hoisted_8$e = {
  href: "#",
  class: "btn submit"
};
function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_field_edit_modal = resolveComponent("field-edit-modal");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["fui-field-block fui-submit-block", { "has-errors": false }]),
    onClick: _cache[3] || (_cache[3] = withModifiers((...args) => $options.openModal && $options.openModal(...args), ["prevent"]))
  }, [
    createBaseVNode("div", {
      class: "fui-edit-overlay",
      onClick: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.editField && _ctx.editField(...args), ["prevent"]))
    }),
    $options.settings.showSaveButton ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: "flex",
      style: normalizeStyle($options.cssAlignment)
    }, [
      createBaseVNode("div", _hoisted_1$m, [
        !$options.isFirstButton && $options.settings.showBackButton ? (openBlock(), createElementBlock("a", _hoisted_2$k, toDisplayString($options.settings.backButtonLabel), 1)) : createCommentVNode("v-if", true),
        createBaseVNode("a", _hoisted_3$j, toDisplayString($options.settings.submitButtonLabel), 1)
      ]),
      createBaseVNode("div", _hoisted_4$i, [
        $options.settings.saveButtonStyle === "link" ? (openBlock(), createElementBlock("a", _hoisted_5$h, toDisplayString($options.settings.saveButtonLabel), 1)) : (openBlock(), createElementBlock("a", _hoisted_6$f, toDisplayString($options.settings.saveButtonLabel), 1))
      ])
    ], 4)) : (openBlock(), createElementBlock("div", {
      key: 1,
      class: "flex",
      style: normalizeStyle($options.cssAlignment)
    }, [
      !$options.isFirstButton && $options.settings.showBackButton ? (openBlock(), createElementBlock("a", _hoisted_7$f, toDisplayString($options.settings.backButtonLabel), 1)) : createCommentVNode("v-if", true),
      createBaseVNode("a", _hoisted_8$e, toDisplayString($options.settings.submitButtonLabel), 1)
    ], 4)),
    $data.showModal ? (openBlock(), createBlock(_component_field_edit_modal, {
      key: 2,
      showModal: $data.showModal,
      "onUpdate:showModal": _cache[1] || (_cache[1] = ($event) => $data.showModal = $event),
      field: $options.field,
      "onUpdate:field": _cache[2] || (_cache[2] = ($event) => $options.field = $event),
      "field-ref": this,
      "fields-schema": $options.fieldsSchema,
      "tabs-schema": $options.tabsSchema,
      "can-delete": false,
      "show-field-type": false,
      onClosed: $options.onModalClosed
    }, null, 8, ["showModal", "field", "fields-schema", "tabs-schema", "onClosed"])) : createCommentVNode("v-if", true)
  ]);
}
var SubmitButtons = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$p], ["__file", "/Users/joshcrawford/public_html/craft4-plugins/formie/src/web/assets/forms/src/js/components/SubmitButtons.vue"]]);
const _sfc_main$o = {
  name: "FieldPage",
  components: {
    FieldRow,
    DropzoneNewField,
    SubmitButtons
  },
  props: {
    id: {
      type: [String, Number],
      default: ""
    },
    pageIndex: {
      type: Number,
      default: 0
    },
    label: {
      type: String,
      default: ""
    },
    rows: {
      type: Array,
      default: () => {
        return [];
      }
    },
    settings: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {
      dropzonesActive: false
    };
  },
  created() {
    this.$events.on("formie:dragging-active", () => {
      this.dropzonesActive = true;
    });
    this.$events.on("formie:dragging-inactive", () => {
      this.dropzonesActive = false;
    });
    if (!this.settings) {
      const payload = {
        pageIndex: this.pageIndex,
        data: {
          submitButtonLabel: Craft.t("formie", "Submit"),
          showBackButton: this.pageIndex !== 0,
          backButtonLabel: Craft.t("formie", "Back"),
          buttonsPosition: "left",
          saveButtonLabel: Craft.t("formie", "Save"),
          saveButtonStyle: "link"
        }
      };
      this.$store.dispatch("form/addPageSettings", payload);
    }
  }
};
const _hoisted_1$l = { class: "fui-fields-collection" };
const _hoisted_2$j = { class: "fui-row no-padding" };
const _hoisted_3$i = { class: "fui-col-12" };
const _hoisted_4$h = {
  key: 0,
  class: "fui-row no-padding"
};
const _hoisted_5$g = { class: "fui-col-12" };
function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_field_row = resolveComponent("field-row");
  const _component_dropzone_new_field = resolveComponent("dropzone-new-field");
  const _component_submit_buttons = resolveComponent("submit-buttons");
  return openBlock(), createElementBlock("div", _hoisted_1$l, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.rows, (row, index) => {
      return openBlock(), createBlock(_component_field_row, mergeProps({
        ref_for: true,
        ref: "rows",
        key: row.id,
        "row-index": index,
        "page-index": $props.pageIndex
      }, row), null, 16, ["row-index", "page-index"]);
    }), 128)),
    createBaseVNode("div", _hoisted_2$j, [
      createBaseVNode("div", _hoisted_3$i, [
        !$props.rows.length ? (openBlock(), createBlock(_component_dropzone_new_field, {
          key: 0,
          "page-index": $props.pageIndex
        }, null, 8, ["page-index"])) : createCommentVNode("v-if", true)
      ])
    ]),
    $props.rows.length ? (openBlock(), createElementBlock("div", _hoisted_4$h, [
      createBaseVNode("div", _hoisted_5$g, [
        createVNode(_component_submit_buttons, {
          "page-index": $props.pageIndex,
          "page-id": $props.id
        }, null, 8, ["page-index", "page-id"])
      ])
    ])) : createCommentVNode("v-if", true)
  ]);
}
var FieldPage = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$o], ["__file", "/Users/joshcrawford/public_html/craft4-plugins/formie/src/web/assets/forms/src/js/components/FieldPage.vue"]]);
const _sfc_main$n = {
  name: "FieldPageTab",
  components: {
    Drop
  },
  props: {
    pageIndex: {
      type: Number,
      default: 0
    },
    label: {
      type: String,
      default: ""
    },
    active: {
      type: String,
      default: ""
    },
    errors: {
      type: [Object, Array],
      default: () => {
      }
    }
  },
  emits: ["selected"],
  data() {
    return {
      dropzoneHover: false
    };
  },
  computed: __spreadProps(__spreadValues({}, mapState({
    pages: (state) => {
      return state.form.pages;
    }
  })), {
    hash() {
      return `#tab-fields-page-${this.pageIndex + 1}`;
    },
    isActive() {
      return this.hash === this.active;
    },
    hasError() {
      let hasError = false;
      const fields = this.$store.getters["form/fieldsForPage"](this.pageIndex);
      if (!isEmpty(this.errors)) {
        hasError = true;
      }
      fields.forEach((field) => {
        if (field.hasError) {
          hasError = true;
        }
      });
      return hasError;
    }
  }),
  mounted() {
    if (document.location.hash === this.hash) {
      this.selectTab();
    }
  },
  methods: {
    selectTab(event) {
      this.$emit("selected", this.hash);
      this.$events.emit("formie:page-selected", this.pageIndex);
    },
    dragEnter(data, event) {
      if (!data || data.trigger !== "field") {
        return;
      }
      this.dropzoneHover = true;
    },
    dragLeave(data, event) {
      this.dropzoneHover = false;
    },
    dragDrop(data, event) {
      if (!data || data.trigger !== "field") {
        return;
      }
      this.$events.emit("formie:dragging-inactive");
      this.dropzoneHover = false;
      const pageIndex = event.target.getAttribute("data-page");
      const sourcePageIndex = data.pageIndex;
      const sourceRowIndex = data.rowIndex;
      const sourceColumnIndex = data.columnIndex;
      const payload = {
        pageIndex,
        sourcePageIndex,
        sourceRowIndex,
        sourceColumnIndex,
        data: {
          id: newId()
        }
      };
      this.$store.dispatch("form/appendRowToPage", payload);
    }
  }
};
const _hoisted_1$k = ["data-page", "href"];
function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_drop = resolveComponent("drop");
  return openBlock(), createBlock(_component_drop, {
    tag: "li",
    "data-page": $props.pageIndex,
    onOnDrop: $options.dragDrop,
    onOnDragenter: $options.dragEnter,
    onOnDragleave: $options.dragLeave
  }, {
    default: withCtx(() => [
      createBaseVNode("a", {
        class: normalizeClass(["fui-tab-item", { "is-hover": $data.dropzoneHover, "sel": $options.isActive, "error": $options.hasError }]),
        "data-page": $props.pageIndex,
        href: $options.hash,
        onClick: _cache[0] || (_cache[0] = withModifiers((...args) => $options.selectTab && $options.selectTab(...args), ["prevent"]))
      }, [
        createBaseVNode("span", null, toDisplayString($props.label), 1)
      ], 10, _hoisted_1$k)
    ]),
    _: 1
  }, 8, ["data-page", "onOnDrop", "onOnDragenter", "onOnDragleave"]);
}
var FieldPageTab = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$n], ["__file", "/Users/joshcrawford/public_html/craft4-plugins/formie/src/web/assets/forms/src/js/components/FieldPageTab.vue"]]);
var FieldPageModal_vue_vue_type_style_index_0_lang = /* @__PURE__ */ (() => ".fui-edit-pages-modal .fui-modal-wrap {\n  width: 60%;\n  min-height: 400px;\n}\n.fui-edit-pages-modal .formkit-form {\n  min-height: 100%;\n  display: flex;\n}")();
var FieldPageModal_vue_vue_type_style_index_1_scoped_true_lang = /* @__PURE__ */ (() => ".fui-pages-wrap[data-v-efb3a160] {\n  display: flex;\n  min-height: 100%;\n}\n.fui-pages-sidebar[data-v-efb3a160] {\n  width: 200px;\n  background: #f3f7fb;\n}\n.fui-pages-sidebar-items[data-v-efb3a160] {\n  margin-top: -1px;\n  padding-top: 1px;\n}\n.fui-pages-sidebar-item[data-v-efb3a160] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: default;\n  min-height: 48px;\n  box-sizing: border-box;\n  margin-top: -1px;\n  padding: 8px 14px;\n  border: solid rgba(51, 64, 77, 0.1);\n  border-width: 1px 0;\n  background-color: #e4edf6;\n  cursor: pointer;\n}\n.fui-pages-sidebar-item.is-active[data-v-efb3a160] {\n  background-color: #cdd8e4;\n  z-index: 1;\n}\n.fui-pages-sidebar-item.has-error h4[data-v-efb3a160] {\n  color: #CF1124;\n}\n.fui-pages-sidebar-item h4[data-v-efb3a160] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-bottom: 2px;\n  font-weight: normal;\n  color: #3f4d5a;\n}\n.fui-pages-sidebar-item h4 span[data-v-efb3a160] {\n  display: inline-flex;\n}\n.fui-pages-sidebar-item-name[data-v-efb3a160] {\n  flex: 1;\n  overflow: hidden;\n}\n.fui-pages-sidebar .btn[data-v-efb3a160] {\n  margin: 14px;\n}\n.fui-pages-pane[data-v-efb3a160] {\n  flex: 1;\n  z-index: 1;\n  margin-left: -1px;\n  border-left: 1px rgba(31, 41, 51, 0.15) solid;\n  padding: 20px;\n}")();
const _sfc_main$m = {
  name: "FieldPageModal",
  components: {
    Modal,
    Draggable
  },
  props: {
    showModal: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      originalPages: null,
      dragging: false,
      selectedPage: 0
    };
  },
  computed: __spreadValues({}, mapState({
    pages: (state) => {
      return state.form.pages;
    }
  })),
  created() {
    this.originalPages = this.clone(this.pages);
    this.selectedPage = this.pages[0].id;
  },
  methods: {
    get(collection, key) {
      return get(collection, key);
    },
    set(collection, key, value) {
      set(collection, key, value);
    },
    isEmpty(object) {
      return isEmpty(object);
    },
    closeModal() {
      this.$refs.modal.close();
    },
    onModalCancel() {
      this.$store.state.form.pages = this.originalPages;
      this.closeModal();
    },
    deletePage(page) {
      const confirmationMessage = Craft.escapeHtml(Craft.t("formie", "Are you sure you want to delete \u201C{name}\u201D? This will also delete all fields for this page, and cannot be undone.", { name: page.label }));
      if (confirm(confirmationMessage)) {
        const index = this.pages.indexOf(page);
        this.pages.splice(index, 1);
      }
    },
    newPage() {
      const newPageId = newId();
      this.pages.push({
        id: newPageId,
        label: Craft.t("formie", "New Page"),
        enableConditions: false,
        rows: []
      });
      this.selectedPage = newPageId;
    },
    selectPage(index) {
      this.selectedPage = index;
    },
    submitHandler() {
      this.closeModal();
    },
    savePages() {
      this.$refs.fieldForm.submit();
    }
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-efb3a160"), n = n(), popScopeId(), n);
const _hoisted_1$j = { class: "fui-modal-title" };
const _hoisted_2$i = { class: "fui-pages-wrap" };
const _hoisted_3$h = { class: "fui-pages-sidebar" };
const _hoisted_4$g = ["onClick"];
const _hoisted_5$f = { class: "fui-pages-sidebar-item-name" };
const _hoisted_6$e = {
  key: 0,
  "data-icon": "alert",
  "aria-label": "Error"
};
const _hoisted_7$e = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("a", {
  class: "move icon",
  title: "Reorder"
}, null, -1));
const _hoisted_8$d = { class: "fui-pages-pane" };
const _hoisted_9$a = { key: 1 };
const _hoisted_10$8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("hr", null, null, -1));
const _hoisted_11$7 = ["onClick"];
const _hoisted_12$7 = { class: "buttons right" };
const _hoisted_13$6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "spinner hidden" }, null, -1));
function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_draggable = resolveComponent("draggable");
  const _component_FormKit = resolveComponent("FormKit");
  const _component_FormKitForm = resolveComponent("FormKitForm");
  const _component_modal = resolveComponent("modal");
  return openBlock(), createBlock(_component_modal, {
    ref: "modal",
    modelValue: $props.showModal,
    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $props.showModal = $event),
    "modal-class": "fui-edit-pages-modal",
    onClickOutside: $options.onModalCancel
  }, {
    header: withCtx(() => [
      createBaseVNode("h3", _hoisted_1$j, toDisplayString(_ctx.t("formie", "Edit Pages")), 1),
      createBaseVNode("div", {
        class: "fui-dialog-close",
        onClick: _cache[0] || (_cache[0] = withModifiers((...args) => $options.onModalCancel && $options.onModalCancel(...args), ["prevent"]))
      })
    ]),
    body: withCtx(() => [
      createVNode(_component_FormKitForm, {
        ref: "fieldForm",
        onSubmit: $options.submitHandler
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_2$i, [
            createBaseVNode("div", _hoisted_3$h, [
              createVNode(_component_draggable, {
                list: _ctx.pages,
                class: normalizeClass([{ "is-dragging": $data.dragging }, "fui-pages-sidebar-items"]),
                handle: ".move.icon",
                animation: "150",
                "ghost-class": "vue-admin-table-drag",
                "item-key": "id",
                onStart: _cache[1] || (_cache[1] = ($event) => $data.dragging = true),
                onEnd: _cache[2] || (_cache[2] = ($event) => $data.dragging = false)
              }, {
                item: withCtx(({ element }) => [
                  createBaseVNode("div", {
                    class: normalizeClass(["fui-pages-sidebar-item", { "is-active": $data.selectedPage === element.id, "has-error": !$options.isEmpty(element.errors) }]),
                    onClick: withModifiers(($event) => $options.selectPage(element.id), ["prevent"])
                  }, [
                    createBaseVNode("div", _hoisted_5$f, [
                      createBaseVNode("h4", null, [
                        createTextVNode(toDisplayString(element.label) + " ", 1),
                        !$options.isEmpty(element.errors) ? (openBlock(), createElementBlock("span", _hoisted_6$e)) : createCommentVNode("v-if", true)
                      ])
                    ]),
                    _hoisted_7$e
                  ], 10, _hoisted_4$g)
                ]),
                _: 1
              }, 8, ["list", "class"]),
              createBaseVNode("button", {
                type: "button",
                class: "btn add icon",
                onClick: _cache[3] || (_cache[3] = withModifiers((...args) => $options.newPage && $options.newPage(...args), ["prevent"]))
              }, toDisplayString(_ctx.t("formie", "New Page")), 1)
            ]),
            createBaseVNode("div", _hoisted_8$d, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.pages, (page) => {
                return withDirectives((openBlock(), createElementBlock("div", {
                  key: page.id
                }, [
                  createVNode(_component_FormKit, {
                    value: $options.get(page, "label"),
                    type: "text",
                    "input-class": "text fullwidth",
                    autocomplete: "off",
                    label: _ctx.t("formie", "Page Label"),
                    help: _ctx.t("formie", "The label for this page."),
                    validation: "required",
                    required: true,
                    error: $options.get(page.errors, "name.0"),
                    onInput: ($event) => $options.set(page, "label", $event)
                  }, null, 8, ["value", "label", "help", "error", "onInput"]),
                  createVNode(_component_FormKit, {
                    modelValue: page.settings.enablePageConditions,
                    "onUpdate:modelValue": ($event) => page.settings.enablePageConditions = $event,
                    type: "lightswitch",
                    "label-position": "before",
                    label: _ctx.t("formie", "Enable Conditions"),
                    help: _ctx.t("formie", "Whether to enable conditional logic to control how this page is shown.")
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "help"]),
                  createCommentVNode(" eslint-disable-next-line "),
                  page.settings.enablePageConditions ? (openBlock(), createBlock(_component_FormKit, {
                    key: 0,
                    modelValue: page.settings.pageConditions,
                    "onUpdate:modelValue": ($event) => page.settings.pageConditions = $event,
                    type: "fieldConditions",
                    descriptionText: "this page if",
                    isPageModal: true,
                    page
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "page"])) : createCommentVNode("v-if", true),
                  _ctx.pages.length > 1 ? (openBlock(), createElementBlock("div", _hoisted_9$a, [
                    _hoisted_10$8,
                    createBaseVNode("a", {
                      class: "error delete",
                      onClick: withModifiers(($event) => $options.deletePage(page), ["prevent"])
                    }, toDisplayString(_ctx.t("app", "Delete")), 9, _hoisted_11$7)
                  ])) : createCommentVNode("v-if", true)
                ])), [
                  [vShow, $data.selectedPage === page.id]
                ]);
              }), 128))
            ])
          ])
        ]),
        _: 1
      }, 8, ["onSubmit"])
    ]),
    footer: withCtx(() => [
      createBaseVNode("div", _hoisted_12$7, [
        createBaseVNode("div", {
          class: "btn",
          role: "button",
          onClick: _cache[4] || (_cache[4] = withModifiers((...args) => $options.onModalCancel && $options.onModalCancel(...args), ["prevent"]))
        }, toDisplayString(_ctx.t("app", "Close")), 1),
        createBaseVNode("div", {
          class: "btn submit",
          role: "button",
          onClick: _cache[5] || (_cache[5] = withModifiers((...args) => $options.savePages && $options.savePages(...args), ["prevent"]))
        }, toDisplayString(_ctx.t("app", "Apply")), 1),
        _hoisted_13$6
      ])
    ]),
    _: 1
  }, 8, ["modelValue", "onClickOutside"]);
}
var FieldPageModal = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$m], ["__scopeId", "data-v-efb3a160"], ["__file", "/Users/joshcrawford/public_html/craft4-plugins/formie/src/web/assets/forms/src/js/components/FieldPageModal.vue"]]);
const _sfc_main$l = {
  name: "FieldPageTabs",
  components: {
    FieldPageTab,
    FieldPageModal
  },
  props: {
    modelValue: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      showModal: false,
      tabs: []
    };
  },
  computed: __spreadValues({}, mapState({
    pages: (state) => {
      return state.form.pages;
    }
  })),
  created() {
    this.tabs = this.$children;
  },
  methods: {
    editPages() {
      this.showModal = true;
    },
    onModalClosed() {
      this.showModal = false;
    },
    selectTab(hash) {
      this.$emit("update:modelValue", hash);
      if (typeof history !== "undefined") {
        history.replaceState(void 0, void 0, hash);
      }
      Garnish.$doc.trigger("scroll");
    }
  }
};
const _hoisted_1$i = { class: "fui-pages-menu" };
function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_field_page_tab = resolveComponent("field-page-tab");
  const _component_field_page_modal = resolveComponent("field-page-modal");
  return openBlock(), createElementBlock("nav", _hoisted_1$i, [
    createBaseVNode("ul", null, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.pages, (page, index) => {
        return openBlock(), createBlock(_component_field_page_tab, {
          key: page.id,
          ref_for: true,
          ref: "tab-" + index,
          "page-index": index,
          label: page.label,
          active: $props.modelValue,
          errors: page.errors,
          onSelected: $options.selectTab
        }, null, 8, ["page-index", "label", "active", "errors", "onSelected"]);
      }), 128))
    ]),
    createBaseVNode("button", {
      class: "btn fui-tab-btn",
      role: "button",
      type: "button",
      onClick: _cache[0] || (_cache[0] = withModifiers((...args) => $options.editPages && $options.editPages(...args), ["prevent"]))
    }),
    $data.showModal ? (openBlock(), createBlock(_component_field_page_modal, {
      key: 0,
      showModal: $data.showModal,
      "onUpdate:showModal": _cache[1] || (_cache[1] = ($event) => $data.showModal = $event),
      onClosed: $options.onModalClosed
    }, null, 8, ["showModal", "onClosed"])) : createCommentVNode("v-if", true)
  ]);
}
var FieldPageTabs = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$l], ["__file", "/Users/joshcrawford/public_html/craft4-plugins/formie/src/web/assets/forms/src/js/components/FieldPageTabs.vue"]]);
const _sfc_main$k = {
  name: "FieldPill",
  components: {
    Drag
  },
  props: {
    type: {
      type: String,
      default: "text"
    }
  },
  data() {
    return {
      isSafari: isSafari()
    };
  },
  computed: {
    fieldtype() {
      return this.$store.getters["fieldtypes/fieldtype"](this.type);
    }
  },
  methods: {
    dragStart(data, event) {
      this.$events.emit("formie:dragging-active", data, event);
    },
    dragEnd(data, event) {
      this.$events.emit("formie:dragging-inactive");
    }
  }
};
const _hoisted_1$h = ["innerHTML"];
const _hoisted_2$h = { class: "fui-field-pill-name" };
const _hoisted_3$g = /* @__PURE__ */ createBaseVNode("span", { class: "fui-field-pill-drag" }, null, -1);
const _hoisted_4$f = {
  class: "fui-field-pill",
  style: { "width": "148px" }
};
const _hoisted_5$e = ["innerHTML"];
const _hoisted_6$d = { class: "fui-field-pill-name" };
const _hoisted_7$d = /* @__PURE__ */ createBaseVNode("span", { class: "fui-field-pill-drag" }, null, -1);
function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_drag = resolveComponent("drag");
  return openBlock(), createBlock(_component_drag, {
    class: "fui-field-pill",
    "hide-image-html": !$data.isSafari,
    "transfer-data": { trigger: "pill", supportsNested: $options.fieldtype.supportsNested, type: $props.type },
    onOnDragstart: $options.dragStart,
    onOnDragend: $options.dragEnd
  }, createSlots({
    default: withCtx(() => [
      createBaseVNode("span", {
        class: "fui-field-pill-icon",
        innerHTML: $options.fieldtype.icon
      }, null, 8, _hoisted_1$h),
      createBaseVNode("span", _hoisted_2$h, toDisplayString($options.fieldtype.label), 1),
      _hoisted_3$g
    ]),
    _: 2
  }, [
    !$data.isSafari ? {
      name: "image",
      fn: withCtx(() => [
        createBaseVNode("div", _hoisted_4$f, [
          createBaseVNode("span", {
            class: "fui-field-pill-icon",
            innerHTML: $options.fieldtype.icon
          }, null, 8, _hoisted_5$e),
          createBaseVNode("span", _hoisted_6$d, toDisplayString($options.fieldtype.label), 1),
          _hoisted_7$d
        ])
      ])
    } : void 0
  ]), 1032, ["hide-image-html", "transfer-data", "onOnDragstart", "onOnDragend"]);
}
var FieldPill = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$k], ["__file", "/Users/joshcrawford/public_html/craft4-plugins/formie/src/web/assets/forms/src/js/components/FieldPill.vue"]]);
const _sfc_main$j = {
  name: "MenuBtn",
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      menuBtn: null
    };
  },
  watch: {
    disabled(newValue) {
      if (newValue) {
        this.menuBtn.disable();
      } else {
        this.menuBtn.enable();
      }
    }
  },
  mounted() {
    this.menuBtn = new Garnish.MenuBtn(this.$refs.submitBtn);
    if (this.disabled) {
      this.menuBtn.disable();
    }
  }
};
const _hoisted_1$g = { class: "btngroup submit" };
const _hoisted_2$g = { class: "menu" };
function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$g, [
    renderSlot(_ctx.$slots, "primary", { disabled: $props.disabled }),
    createBaseVNode("div", {
      ref: "submitBtn",
      class: normalizeClass(["btn submit menubtn", { "disabled": $props.disabled }])
    }, null, 2),
    createBaseVNode("div", _hoisted_2$g, [
      renderSlot(_ctx.$slots, "default")
    ])
  ]);
}
var MenuBtn = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$j], ["__file", "/Users/joshcrawford/public_html/craft4-plugins/formie/src/web/assets/forms/src/js/components/MenuBtn.vue"]]);
const _sfc_main$i = {
  name: "ExistingField",
  props: {
    id: {
      type: [String, Number],
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    handle: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: ""
    },
    selected: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ""
    },
    settings: {
      type: [Object, Array],
      default: () => {
      }
    },
    isSynced: {
      type: Boolean,
      default: false
    },
    supportsNested: {
      type: Boolean,
      default: false
    },
    rows: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  emits: ["selected"],
  computed: {
    fieldHandles() {
      return this.$store.getters["form/fieldHandles"];
    },
    isDisabled() {
      return this.fieldHandles.indexOf(this.handle) !== -1;
    },
    fieldtype() {
      return this.$store.getters["fieldtypes/fieldtype"](this.type);
    }
  },
  methods: {
    click() {
      this.$emit("selected", this, !this.selected);
    }
  }
};
const _hoisted_1$f = { class: "fui-col-6" };
const _hoisted_2$f = { class: "fui-existing-item-wrap" };
const _hoisted_3$f = { class: "fui-existing-item-title" };
const _hoisted_4$e = { class: "fui-existing-item-type" };
const _hoisted_5$d = { class: "fui-existing-item-right" };
const _hoisted_6$c = {
  key: 0,
  class: "fui-field-synced"
};
const _hoisted_7$c = /* @__PURE__ */ createBaseVNode("svg", {
  "aria-hidden": "true",
  focusable: "false",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    fill: "currentColor",
    d: "M440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26 175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57zM255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432z"
  })
], -1);
const _hoisted_8$c = ["innerHTML"];
function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$f, [
    createBaseVNode("div", {
      class: normalizeClass(["fui-existing-item", { "sel": $props.selected, "disabled": $options.isDisabled }]),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.click && $options.click(...args))
    }, [
      createBaseVNode("div", _hoisted_2$f, [
        createBaseVNode("div", _hoisted_3$f, toDisplayString($props.label), 1),
        createBaseVNode("div", _hoisted_4$e, toDisplayString($options.fieldtype.label), 1)
      ]),
      createBaseVNode("div", _hoisted_5$d, [
        $props.isSynced ? (openBlock(), createElementBlock("span", _hoisted_6$c, [
          _hoisted_7$c,
          createTextVNode(" " + toDisplayString(_ctx.t("formie", "Synced")), 1)
        ])) : createCommentVNode("v-if", true),
        createBaseVNode("div", {
          class: "fui-existing-item-icon",
          innerHTML: $props.icon
        }, null, 8, _hoisted_8$c)
      ])
    ], 2)
  ]);
}
var ExistingField = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$i], ["__file", "/Users/joshcrawford/public_html/craft4-plugins/formie/src/web/assets/forms/src/js/components/ExistingField.vue"]]);
var ExistingFieldModal_vue_vue_type_style_index_0_lang = /* @__PURE__ */ (() => ".fui-modal-footer .info {\n  margin: 8px 10px 0 0;\n}\n.fui-existing-item-modal .fui-error-pane {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n.fui-existing-item-modal .fui-error-pane {\n  align-items: center;\n  justify-content: center;\n  display: flex;\n}\n.fui-existing-item-modal .fui-error-pane [data-icon] {\n  display: block;\n  font-size: 3em;\n  margin-bottom: 0.5rem;\n}\n.fui-existing-item-modal .fui-error-content {\n  text-align: center;\n  width: 90%;\n}")();
const _sfc_main$h = {
  name: "ExistingFieldModal",
  components: {
    Modal,
    MenuBtn,
    ExistingField
  },
  data() {
    return {
      error: false,
      errorMessage: "",
      loading: true,
      showModal: false,
      pageIndex: 0,
      search: "",
      selectedKey: "",
      selectedFields: []
    };
  },
  computed: __spreadProps(__spreadValues({}, mapState({
    existingFields: (state) => {
      return state.formie.existingFields;
    },
    form: (state) => {
      return state.form;
    }
  })), {
    totalSelected() {
      return this.selectedFields.length;
    },
    filteredExistingFields() {
      return this.existingFields.reduce((acc, form) => {
        const pages = form.pages.reduce((acc2, page) => {
          const fields = page.fields.filter((field) => {
            const inLabel = field.label.toLowerCase().includes(this.search.toLowerCase());
            const inHandle = field.handle.toLowerCase().includes(this.search.toLowerCase());
            return inLabel || inHandle;
          });
          return !fields.length ? acc2 : acc2.concat(__spreadProps(__spreadValues({}, page), { fields }));
        }, []);
        return !pages.length ? acc : acc.concat(__spreadProps(__spreadValues({}, form), { pages }));
      }, []);
    },
    submitText() {
      if (this.totalSelected > 1) {
        return Craft.t("formie", "Add {num} as new fields", { num: this.totalSelected });
      }
      if (this.totalSelected > 0) {
        return Craft.t("formie", "Add {num} as new field", { num: this.totalSelected });
      }
      return Craft.t("formie", "Add as new field");
    },
    syncedText() {
      if (this.totalSelected > 1) {
        return Craft.t("formie", "Add {num} as synced fields", { num: this.totalSelected });
      }
      if (this.totalSelected > 0) {
        return Craft.t("formie", "Add {num} as synced field", { num: this.totalSelected });
      }
      return Craft.t("formie", "Add as synced field");
    }
  }),
  created() {
    if (this.existingFields.length) {
      this.selectedKey = this.existingFields[0].key;
    }
    this.$events.on("formie:page-selected", (pageIndex) => {
      this.pageIndex = pageIndex;
    });
  },
  methods: {
    openModal() {
      this.showModal = true;
      this.loading = true;
      if (!this.existingFields.length) {
        this.fetchExistingFields();
      } else {
        setTimeout(() => {
          this.mounted = true;
          this.loading = false;
        }, 100);
      }
    },
    closeModal() {
      this.selectedFields = [];
      this.showModal = false;
    },
    selectTab(key) {
      this.selectedKey = key;
    },
    isFieldSelected(field) {
      return findIndex(this.selectedFields, { id: field.id }) > -1;
    },
    fieldSelected(field, selected) {
      if (selected) {
        this.selectedFields.push(field);
      } else {
        const index = findIndex(this.selectedFields, { id: field.id });
        if (index > -1) {
          this.selectedFields.splice(index, 1);
        }
      }
    },
    fetchExistingFields() {
      this.error = false;
      this.errorMessage = "";
      this.loading = true;
      const data = { formId: this.form.id };
      Craft.sendActionRequest("POST", "formie/forms/get-existing-fields", { data }).then((response) => {
        this.loading = false;
        if (response.data.error) {
          throw new Error(response.data.error);
        }
        if (response.data) {
          this.$store.dispatch("formie/setExistingFields", response.data);
        }
        this.mounted = true;
      }).catch((error) => {
        this.loading = false;
        this.error = true;
        this.errorMessage = error;
        if (error.response.data.error) {
          this.errorMessage += `<br><code>${error.response.data.error}</code>`;
        }
      });
    },
    addFields() {
      for (const field of this.selectedFields) {
        const config = {
          label: field.label,
          handle: field.handle,
          settings: field.settings
        };
        const newField = this.$store.getters["fieldtypes/newField"](field.type, config);
        const rowCount = this.form.pages[this.pageIndex].rows.length;
        const payload = {
          pageIndex: this.pageIndex,
          rowIndex: rowCount,
          data: {
            id: newId(),
            fields: [
              newField
            ]
          }
        };
        this.$store.dispatch("form/appendRow", payload);
      }
      this.closeModal();
    },
    addSynced() {
      for (const field of this.selectedFields) {
        const rowCount = this.form.pages[this.pageIndex].rows.length;
        const newField = {
          id: `sync:${field.id}`,
          label: field.label,
          handle: field.handle,
          type: field.type,
          isSynced: true,
          settings: field.settings
        };
        const payload = {
          pageIndex: this.pageIndex,
          rowIndex: rowCount,
          data: {
            id: newId(),
            fields: [
              newField
            ]
          }
        };
        this.$store.dispatch("form/appendRow", payload);
      }
      this.closeModal();
    }
  }
};
const _hoisted_1$e = { class: "fui-modal-title" };
const _hoisted_2$e = {
  key: 0,
  class: "fui-error-pane error"
};
const _hoisted_3$e = { class: "fui-error-content" };
const _hoisted_4$d = /* @__PURE__ */ createBaseVNode("span", { "data-icon": "alert" }, null, -1);
const _hoisted_5$c = ["innerHTML"];
const _hoisted_6$b = {
  key: 1,
  class: "fui-loading fui-loading-lg",
  style: { "height": "100%" }
};
const _hoisted_7$b = { key: 2 };
const _hoisted_8$b = {
  key: 0,
  class: "fui-modal-content-wrap"
};
const _hoisted_9$9 = { class: "fui-modal-sidebar sidebar" };
const _hoisted_10$7 = { key: 0 };
const _hoisted_11$6 = { key: 0 };
const _hoisted_12$6 = { class: "label" };
const _hoisted_13$5 = { class: "heading" };
const _hoisted_14$5 = ["onClick"];
const _hoisted_15$4 = { class: "label" };
const _hoisted_16$4 = { class: "fui-modal-content" };
const _hoisted_17$4 = { class: "toolbar flex flex-nowrap" };
const _hoisted_18$4 = { class: "flex-grow texticon search icon clearable" };
const _hoisted_19$4 = /* @__PURE__ */ createBaseVNode("div", {
  class: "clear hidden",
  title: "Clear"
}, null, -1);
const _hoisted_20$4 = { key: 0 };
const _hoisted_21$4 = { class: "fui-existing-item-heading-wrap" };
const _hoisted_22$4 = { class: "fui-existing-item-heading" };
const _hoisted_23$3 = { class: "fui-row small-padding" };
const _hoisted_24$3 = { key: 1 };
const _hoisted_25$3 = {
  key: 1,
  class: "fui-modal-content-wrap"
};
const _hoisted_26$3 = { class: "fui-modal-content" };
const _hoisted_27$3 = { class: "buttons left" };
const _hoisted_28$1 = /* @__PURE__ */ createBaseVNode("div", { class: "spinner hidden" }, null, -1);
const _hoisted_29$1 = {
  key: 0,
  class: "buttons right"
};
const _hoisted_30$1 = { class: "hidden" };
const _hoisted_31$1 = ["value", "disabled"];
const _hoisted_32$1 = /* @__PURE__ */ createBaseVNode("div", { class: "spinner hidden" }, null, -1);
function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_existing_field = resolveComponent("existing-field");
  const _component_menu_btn = resolveComponent("menu-btn");
  const _component_modal = resolveComponent("modal");
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", {
      class: "btn add icon dashed",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.openModal && $options.openModal(...args))
    }, toDisplayString(_ctx.t("formie", "Add existing fields")), 1),
    createVNode(_component_modal, {
      ref: "modal",
      modelValue: $data.showModal,
      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.showModal = $event),
      "modal-class": ["fui-edit-field-modal", "fui-existing-item-modal"],
      onClickOutside: $options.closeModal
    }, {
      header: withCtx(() => [
        createBaseVNode("h3", _hoisted_1$e, toDisplayString(_ctx.t("formie", "Add Existing Field")), 1),
        createBaseVNode("div", {
          class: "fui-dialog-close",
          onClick: _cache[1] || (_cache[1] = withModifiers((...args) => $options.closeModal && $options.closeModal(...args), ["prevent"]))
        })
      ]),
      body: withCtx(() => [
        $data.error ? (openBlock(), createElementBlock("div", _hoisted_2$e, [
          createBaseVNode("div", _hoisted_3$e, [
            _hoisted_4$d,
            createBaseVNode("span", {
              class: "error",
              innerHTML: $data.errorMessage
            }, null, 8, _hoisted_5$c)
          ])
        ])) : $data.loading ? (openBlock(), createElementBlock("div", _hoisted_6$b)) : _ctx.mounted ? (openBlock(), createElementBlock("div", _hoisted_7$b, [
          _ctx.existingFields.length ? (openBlock(), createElementBlock("div", _hoisted_8$b, [
            createBaseVNode("div", _hoisted_9$9, [
              $options.filteredExistingFields.length ? (openBlock(), createElementBlock("nav", _hoisted_10$7, [
                createBaseVNode("ul", null, [
                  _ctx.existingFields.length ? (openBlock(), createElementBlock("li", _hoisted_11$6, [
                    createBaseVNode("a", {
                      class: normalizeClass({ "sel": $data.selectedKey === _ctx.existingFields[0].key }),
                      onClick: _cache[2] || (_cache[2] = withModifiers(($event) => $options.selectTab(_ctx.existingFields[0].key), ["prevent"]))
                    }, [
                      createBaseVNode("span", _hoisted_12$6, toDisplayString(_ctx.existingFields[0].label), 1)
                    ], 2)
                  ])) : createCommentVNode("v-if", true),
                  createBaseVNode("li", _hoisted_13$5, [
                    createBaseVNode("span", null, toDisplayString(_ctx.t("formie", "Forms")), 1)
                  ]),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.existingFields, (form, index) => {
                    return openBlock(), createElementBlock("li", { key: index }, [
                      index > 0 ? (openBlock(), createElementBlock("a", {
                        key: 0,
                        class: normalizeClass({ "sel": $data.selectedKey === form.key }),
                        onClick: withModifiers(($event) => $options.selectTab(form.key), ["prevent"])
                      }, [
                        createBaseVNode("span", _hoisted_15$4, toDisplayString(form.label), 1)
                      ], 10, _hoisted_14$5)) : createCommentVNode("v-if", true)
                    ]);
                  }), 128))
                ])
              ])) : createCommentVNode("v-if", true)
            ]),
            createBaseVNode("div", _hoisted_16$4, [
              createBaseVNode("div", _hoisted_17$4, [
                createBaseVNode("div", _hoisted_18$4, [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.search = $event),
                    class: "text fullwidth",
                    type: "text",
                    autocomplete: "off",
                    placeholder: "Search"
                  }, null, 512), [
                    [vModelText, $data.search]
                  ]),
                  _hoisted_19$4
                ])
              ]),
              $options.filteredExistingFields.length ? (openBlock(), createElementBlock("div", _hoisted_20$4, [
                (openBlock(true), createElementBlock(Fragment, null, renderList($options.filteredExistingFields, (form, formIndex) => {
                  return openBlock(), createElementBlock("div", {
                    key: formIndex,
                    class: normalizeClass({ hidden: $data.selectedKey !== form.key })
                  }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(form.pages, (page, pIndex) => {
                      return openBlock(), createElementBlock("div", { key: pIndex }, [
                        createBaseVNode("div", _hoisted_21$4, [
                          createBaseVNode("div", _hoisted_22$4, toDisplayString(page.label), 1)
                        ]),
                        createBaseVNode("div", _hoisted_23$3, [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(page.fields, (field, fieldIndex) => {
                            return openBlock(), createBlock(_component_existing_field, mergeProps({
                              key: fieldIndex,
                              selected: $options.isFieldSelected(field)
                            }, field, { onSelected: $options.fieldSelected }), null, 16, ["selected", "onSelected"]);
                          }), 128))
                        ])
                      ]);
                    }), 128))
                  ], 2);
                }), 128))
              ])) : (openBlock(), createElementBlock("div", _hoisted_24$3, [
                createBaseVNode("p", null, toDisplayString(_ctx.t("formie", "No fields found.")), 1)
              ]))
            ])
          ])) : (openBlock(), createElementBlock("div", _hoisted_25$3, [
            createBaseVNode("div", _hoisted_26$3, [
              createBaseVNode("p", null, toDisplayString(_ctx.t("formie", "No existing fields to select.")), 1)
            ])
          ]))
        ])) : createCommentVNode("v-if", true)
      ]),
      footer: withCtx(() => [
        createBaseVNode("div", _hoisted_27$3, [
          _hoisted_28$1,
          createBaseVNode("div", {
            class: "btn",
            role: "button",
            onClick: _cache[4] || (_cache[4] = withModifiers((...args) => $options.closeModal && $options.closeModal(...args), ["prevent"]))
          }, toDisplayString(_ctx.t("app", "Cancel")), 1)
        ]),
        $options.filteredExistingFields.length ? (openBlock(), createElementBlock("div", _hoisted_29$1, [
          createBaseVNode("span", _hoisted_30$1, toDisplayString(_ctx.t("formie", '"Add as a new field" to make a new field from a copy the original field. Or, "Add as a synced field" to keep the field synchronized to the original field, reflecting any changes to that field.')), 1),
          createVNode(_component_menu_btn, {
            disabled: $options.totalSelected === 0
          }, {
            primary: withCtx(({ disabled }) => [
              createBaseVNode("input", {
                type: "submit",
                value: $options.submitText,
                disabled,
                class: normalizeClass(["btn submit", { "disabled": disabled }]),
                onClick: _cache[5] || (_cache[5] = withModifiers((...args) => $options.addFields && $options.addFields(...args), ["prevent"]))
              }, null, 10, _hoisted_31$1)
            ]),
            default: withCtx(() => [
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createBaseVNode("a", {
                    onClick: _cache[6] || (_cache[6] = withModifiers((...args) => $options.addSynced && $options.addSynced(...args), ["prevent"]))
                  }, toDisplayString($options.syncedText), 1)
                ])
              ])
            ]),
            _: 1
          }, 8, ["disabled"]),
          _hoisted_32$1
        ])) : createCommentVNode("v-if", true)
      ]),
      _: 1
    }, 8, ["modelValue", "onClickOutside"])
  ], 64);
}
var ExistingFieldModal = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$h], ["__file", "/Users/joshcrawford/public_html/craft4-plugins/formie/src/web/assets/forms/src/js/components/ExistingFieldModal.vue"]]);
var index_min = { exports: {} };
/*! mobile-drag-drop 3.0.0-beta.0 | Copyright (c) 2022 Tim Ruffles | MIT License */
(function(module2, exports2) {
  !function(t, i) {
    i(exports2);
  }(commonjsGlobal, function(t) {
    var c = "dnd-poly-", s = ["none", "copy", "copyLink", "copyMove", "link", "linkMove", "move", "all"], f = ["none", "copy", "move", "link"];
    function i() {
      var t2 = false;
      try {
        var i2 = Object.defineProperty({}, "passive", { get: function() {
          t2 = true;
        } });
        window.addEventListener("test", null, i2);
      } catch (t3) {
      }
      return t2;
    }
    var e = i();
    function l(t2) {
      return t2 && t2.tagName;
    }
    function h2(t2, i2, s2) {
      s2 === void 0 && (s2 = true), document.addEventListener(t2, i2, !!e && { passive: s2 });
    }
    function n(t2, i2) {
      document.removeEventListener(t2, i2);
    }
    function u(t2, i2, s2, n2) {
      n2 === void 0 && (n2 = false);
      var h3 = e ? { passive: true, capture: n2 } : n2;
      return t2.addEventListener(i2, s2, h3), { off: function() {
        t2.removeEventListener(i2, s2, h3);
      } };
    }
    function o(t2) {
      return t2.length === 0 ? 0 : t2.reduce(function(t3, i2) {
        return i2 + t3;
      }, 0) / t2.length;
    }
    function r(t2, i2) {
      for (var s2 = 0; s2 < t2.changedTouches.length; s2++)
        if (t2.changedTouches[s2].identifier === i2)
          return true;
      return false;
    }
    function a(t2, i2, s2) {
      for (var n2 = [], h3 = [], e2 = 0; e2 < i2.touches.length; e2++) {
        var r2 = i2.touches[e2];
        n2.push(r2[t2 + "X"]), h3.push(r2[t2 + "Y"]);
      }
      s2.x = o(n2), s2.y = o(h3);
    }
    var d = ["", "-webkit-"];
    function v(t2, i2, s2, n2, h3) {
      var e2 = i2.x, i2 = i2.y;
      n2 && (e2 += n2.x, i2 += n2.y), (h3 = h3 === void 0 || h3) && (e2 -= parseInt(t2.offsetWidth, 10) / 2, i2 -= parseInt(t2.offsetHeight, 10) / 2);
      for (var r2 = "translate3d(" + e2 + "px," + i2 + "px, 0)", o2 = 0; o2 < d.length; o2++) {
        var u2 = d[o2] + "transform";
        t2.style[u2] = r2 + " " + s2[o2];
      }
    }
    var p = (Object.defineProperty(g.prototype, "dropEffect", { get: function() {
      return this.t;
    }, set: function(t2) {
      this.i.mode !== 0 && -1 < s.indexOf(t2) && (this.t = t2);
    }, enumerable: false, configurable: true }), Object.defineProperty(g.prototype, "types", { get: function() {
      if (this.i.mode !== 0)
        return Object.freeze(this.i.types);
    }, enumerable: false, configurable: true }), Object.defineProperty(g.prototype, "effectAllowed", { get: function() {
      return this.i.effectAllowed;
    }, set: function(t2) {
      this.i.mode === 2 && -1 < s.indexOf(t2) && (this.i.effectAllowed = t2);
    }, enumerable: false, configurable: true }), g.prototype.setData = function(t2, i2) {
      if (this.i.mode === 2) {
        if (-1 < t2.indexOf(" "))
          throw new Error("illegal arg: type contains space");
        this.i.data[t2] = i2, this.i.types.indexOf(t2) === -1 && this.i.types.push(t2);
      }
    }, g.prototype.getData = function(t2) {
      if (this.i.mode === 1 || this.i.mode === 2)
        return this.i.data[t2] || "";
    }, g.prototype.clearData = function(t2) {
      this.i.mode === 2 && (t2 && this.i.data[t2] ? (delete this.i.data[t2], -1 < (t2 = this.i.types.indexOf(t2)) && this.i.types.splice(t2, 1)) : (this.i.data = {}, this.i.types = []));
    }, g.prototype.setDragImage = function(t2, i2, s2) {
      this.i.mode === 2 && this.h(t2, i2, s2);
    }, g);
    function g(t2, i2) {
      this.i = t2, this.h = i2, this.t = f[0];
    }
    function m(t2, i2) {
      return t2 ? t2 === s[0] ? f[0] : t2.indexOf(s[1]) === 0 || t2 === s[7] ? f[1] : t2.indexOf(s[4]) === 0 ? f[3] : t2 === s[6] ? f[2] : f[1] : i2.nodeType === 3 && i2.tagName === "A" ? f[3] : f[1];
    }
    function y(u2, t2, a2, i2, s2, n2, c2) {
      c2 === void 0 && (c2 = null);
      s2 = function(t3, i3, s3, n3, h3, e2, r2) {
        c2 === void 0 && (r2 = null);
        var o2 = a2.changedTouches[0], n3 = new Event(u2, { bubbles: true, cancelable: n3 });
        n3.dataTransfer = e2, n3.relatedTarget = r2, n3.screenX = o2.screenX, n3.screenY = o2.screenY, n3.clientX = o2.clientX, n3.clientY = o2.clientY, n3.pageX = o2.pageX, n3.pageY = o2.pageY;
        t3 = t3.getBoundingClientRect();
        return n3.offsetX = n3.clientX - t3.left, n3.offsetY = n3.clientY - t3.top, n3;
      }(t2, 0, 0, n2 = n2 === void 0 || n2, document.defaultView, s2, c2), s2 = !t2.dispatchEvent(s2);
      return i2.mode = 0, s2;
    }
    function b(t2, i2) {
      if (!t2 || t2 === s[7])
        return i2;
      if (i2 === f[1]) {
        if (t2.indexOf(f[1]) === 0)
          return f[1];
      } else if (i2 === f[3]) {
        if (t2.indexOf(f[3]) === 0 || -1 < t2.indexOf("Link"))
          return f[3];
      } else if (i2 === f[2] && (t2.indexOf(f[2]) === 0 || -1 < t2.indexOf("Move")))
        return f[2];
      return f[0];
    }
    var w = (x2.prototype.o = function() {
      var n2 = this;
      this.u = 1, this.l = f[0], this.v = { data: {}, effectAllowed: void 0, mode: 3, types: [] }, this.p = { x: null, y: null }, this.g = { x: null, y: null };
      var h3 = this.m;
      if (this.I = new p(this.v, function(t3, i3, s3) {
        h3 = t3, typeof i3 != "number" && typeof s3 != "number" || (n2.j = { x: i3 || 0, y: s3 || 0 });
      }), this.v.mode = 2, this.I.dropEffect = f[0], y("dragstart", this.m, this.k, this.v, this.I))
        return this.u = 3, this.C(), false;
      a("page", this.k, this.g);
      var i2, t2, s2 = this.S.dragImageSetup(h3);
      return this.A = (i2 = s2, d.map(function(t3) {
        t3 = i2.style[t3 + "transform"];
        return t3 && t3 !== "none" ? t3.replace(/translate\(\D*\d+[^,]*,\D*\d+[^,]*\)\s*/g, "") : "";
      })), s2.style.position = "absolute", s2.style.left = "0px", s2.style.top = "0px", s2.style.zIndex = "999999", s2.classList.add("dnd-poly-drag-image"), s2.classList.add("dnd-poly-icon"), this.O = s2, this.j || (this.S.dragImageOffset ? this.j = { x: this.S.dragImageOffset.x, y: this.S.dragImageOffset.y } : this.S.dragImageCenterOnTouch ? (t2 = getComputedStyle(h3), this.j = { x: 0 - parseInt(t2.marginLeft, 10), y: 0 - parseInt(t2.marginTop, 10) }) : (s2 = h3.getBoundingClientRect(), t2 = getComputedStyle(h3), this.j = { x: s2.left - this.M.clientX - parseInt(t2.marginLeft, 10) + s2.width / 2, y: s2.top - this.M.clientY - parseInt(t2.marginTop, 10) + s2.height / 2 })), v(this.O, this.g, this.A, this.j, this.S.dragImageCenterOnTouch), document.body.appendChild(this.O), this.D = window.setInterval(function() {
        n2.F || (n2.F = true, n2.N(), n2.F = false);
      }, this.S.iterationInterval), true;
    }, x2.prototype.C = function() {
      this.D && (clearInterval(this.D), this.D = null), n("touchmove", this.P), n("touchend", this.T), n("touchcancel", this.T), this.O && (this.O.parentNode.removeChild(this.O), this.O = null), this.L(this.S, this.k, this.u);
    }, x2.prototype._ = function(t2) {
      var s2 = this;
      if (r(t2, this.M.identifier) !== false) {
        if (this.k = t2, this.u === 0) {
          var i2 = void 0;
          if (this.S.dragStartConditionOverride)
            try {
              i2 = this.S.dragStartConditionOverride(t2);
            } catch (t3) {
              i2 = false;
            }
          else
            i2 = t2.touches.length === 1;
          return i2 ? void (this.o() === true && (this.H.preventDefault(), t2.preventDefault())) : void this.C();
        }
        if (t2.preventDefault(), a("client", t2, this.p), a("page", t2, this.g), this.S.dragImageTranslateOverride)
          try {
            var n2 = false;
            if (this.S.dragImageTranslateOverride(t2, { x: this.p.x, y: this.p.y }, this.V, function(t3, i3) {
              s2.O && (n2 = true, s2.p.x += t3, s2.p.y += i3, s2.g.x += t3, s2.g.y += i3, v(s2.O, s2.g, s2.A, s2.j, s2.S.dragImageCenterOnTouch));
            }), n2)
              return;
          } catch (t3) {
          }
        v(this.O, this.g, this.A, this.j, this.S.dragImageCenterOnTouch);
      }
    }, x2.prototype.X = function(t2) {
      if (r(t2, this.M.identifier) !== false) {
        if (this.S.dragImageTranslateOverride)
          try {
            this.S.dragImageTranslateOverride(void 0, void 0, void 0, function() {
            });
          } catch (t3) {
          }
        this.u !== 0 ? (t2.preventDefault(), this.u = t2.type === "touchcancel" ? 3 : 2) : this.C();
      }
    }, x2.prototype.N = function() {
      var t2 = this, i2 = this.l;
      this.v.mode = 3, this.I.dropEffect = f[0];
      var s2, n2, h3, e2, r2, o2 = y("drag", this.m, this.k, this.v, this.I);
      if (o2 && (this.l = f[0]), o2 || this.u === 2 || this.u === 3)
        return this.Y(this.u) ? (e2 = this.m, s2 = this.O, n2 = this.A, a2 = function() {
          t2.q();
        }, void ((r2 = getComputedStyle(e2)).visibility !== "hidden" && r2.display !== "none" ? (s2.classList.add("dnd-poly-snapback"), h3 = getComputedStyle(s2), o2 = parseFloat(h3.transitionDuration), isNaN(o2) || o2 === 0 ? a2() : ((e2 = { x: (u2 = e2.getBoundingClientRect()).left, y: u2.top }).x += document.body.scrollLeft || document.documentElement.scrollLeft, e2.y += document.body.scrollTop || document.documentElement.scrollTop, e2.x -= parseInt(r2.marginLeft, 10), e2.y -= parseInt(r2.marginTop, 10), u2 = parseFloat(h3.transitionDelay), u2 = Math.round(1e3 * (o2 + u2)), v(s2, e2, n2, void 0, false), setTimeout(a2, u2))) : a2())) : void this.q();
      var u2 = this.S.elementFromPoint(this.p.x, this.p.y), a2 = this.B;
      u2 !== this.V && u2 !== this.B && (this.V = u2, this.B !== null && (this.v.mode = 3, this.I.dropEffect = f[0], y("dragexit", this.B, this.k, this.v, this.I, false)), this.V === null ? this.B = this.V : (this.v.mode = 3, this.I.dropEffect = m(this.v.effectAllowed, this.m), y("dragenter", this.V, this.k, this.v, this.I) ? (this.B = this.V, this.l = b(this.I.effectAllowed, this.I.dropEffect)) : this.V !== document.body && (this.B = document.body))), a2 !== this.B && l(a2) && (this.v.mode = 3, this.I.dropEffect = f[0], y("dragleave", a2, this.k, this.v, this.I, false, this.B)), l(this.B) && (this.v.mode = 3, this.I.dropEffect = m(this.v.effectAllowed, this.m), y("dragover", this.B, this.k, this.v, this.I) === false ? this.l = f[0] : this.l = b(this.I.effectAllowed, this.I.dropEffect)), i2 !== this.l && this.O.classList.remove(c + i2);
      i2 = c + this.l;
      this.O.classList.add(i2);
    }, x2.prototype.Y = function(t2) {
      t2 = this.l === f[0] || this.B === null || t2 === 3;
      return t2 ? l(this.B) && (this.v.mode = 3, this.I.dropEffect = f[0], y("dragleave", this.B, this.k, this.v, this.I, false)) : l(this.B) && (this.v.mode = 1, this.I.dropEffect = this.l, y("drop", this.B, this.k, this.v, this.I) === true ? this.l = this.I.dropEffect : this.l = f[0]), t2;
    }, x2.prototype.q = function() {
      this.v.mode = 3, this.I.dropEffect = this.l, y("dragend", this.m, this.k, this.v, this.I, false), this.u = 2, this.C();
    }, x2);
    function x2(t2, i2, s2, n2) {
      this.H = t2, this.S = i2, this.m = s2, this.L = n2, this.u = 0, this.V = null, this.B = null, this.k = t2, this.M = t2.changedTouches[0], this.P = this._.bind(this), this.T = this.X.bind(this), h2("touchmove", this.P, false), h2("touchend", this.T, false), h2("touchcancel", this.T, false);
    }
    var I, j = { iterationInterval: 150, tryFindDraggableTarget: function(t2) {
      for (var i2 = 0, s2 = t2.composedPath(); i2 < s2.length; i2++) {
        var n2 = s2[i2];
        do {
          if (n2.draggable !== false) {
            if (n2.draggable === true)
              return n2;
            if (n2.getAttribute && n2.getAttribute("draggable") === "true")
              return n2;
          }
        } while ((n2 = n2.parentNode) && n2 !== document.body);
      }
    }, dragImageSetup: function(t2) {
      var i2 = t2.cloneNode(true);
      return function t3(i3, s2) {
        if (i3.nodeType === 1) {
          for (var n2, h3, e2 = getComputedStyle(i3), r2 = 0; r2 < e2.length; r2++) {
            var o2 = e2[r2];
            s2.style.setProperty(o2, e2.getPropertyValue(o2), e2.getPropertyPriority(o2));
          }
          s2.style.pointerEvents = "none", s2.removeAttribute("id"), s2.removeAttribute("class"), s2.removeAttribute("draggable"), s2.nodeName === "CANVAS" && (n2 = s2, h3 = (h3 = i3).getContext("2d").getImageData(0, 0, h3.width, h3.height), n2.getContext("2d").putImageData(h3, 0, 0));
        }
        if (i3.hasChildNodes())
          for (r2 = 0; r2 < i3.childNodes.length; r2++)
            t3(i3.childNodes[r2], s2.childNodes[r2]);
        !function t4(i4) {
          if (i4 instanceof HTMLElement && (i4.style.pointerEvents = "none"), i4.children.length)
            for (var s3 = 0; s3 < i4.children.length; s3++)
              t4(i4.children[s3]);
          if (i4.shadowRoot && i4.shadowRoot.children.length)
            for (s3 = 0; s3 < i4.shadowRoot.children.length; s3++)
              t4(i4.shadowRoot.children[s3]);
        }(s2);
      }(t2, i2), i2;
    }, elementFromPoint: function(t2, i2) {
      var s2 = document.elementFromPoint(t2, i2);
      if (s2) {
        for (; s2.shadowRoot; ) {
          var n2 = s2.shadowRoot.elementFromPoint(t2, i2);
          if (n2 === null || n2 === s2)
            break;
          s2 = n2;
        }
        return s2;
      }
    } };
    function k(i2) {
      if (!I) {
        var t2 = j.tryFindDraggableTarget(i2);
        if (t2)
          try {
            I = new w(i2, j, t2, S);
          } catch (t3) {
            throw S(j, i2, 3), t3;
          }
      }
    }
    function C(t2) {
      function i2(t3) {
        h3.off(), e2.off(), r2.off(), o2.off(), s2 && s2.dispatchEvent(new CustomEvent("dnd-poly-dragstart-cancel", { bubbles: true, cancelable: true })), clearTimeout(n2);
      }
      var s2 = t2.target;
      s2 && s2.dispatchEvent(new CustomEvent("dnd-poly-dragstart-pending", { bubbles: true, cancelable: true }));
      var n2 = window.setTimeout(function() {
        h3.off(), e2.off(), r2.off(), o2.off(), k(t2);
      }, j.holdToDrag), h3 = u(s2, "touchend", i2), e2 = u(s2, "touchcancel", i2), r2 = u(s2, "touchmove", i2), o2 = u(window, "scroll", i2, true);
    }
    function S(t2, i2, s2) {
      if (s2 === 0 && t2.defaultActionOverride)
        try {
          t2.defaultActionOverride(i2), i2.defaultPrevented;
        } catch (t3) {
        }
      I = null;
    }
    t.polyfill = function(i2) {
      if (i2 && Object.keys(i2).forEach(function(t3) {
        j[t3] = i2[t3];
      }), !j.forceApply) {
        t2 = (t2 = !!window.chrome || /chrome/i.test(navigator.userAgent), { dragEvents: "ondragstart" in document.documentElement, draggable: "draggable" in document.documentElement, userAgentSupportingNativeDnD: !(/iPad|iPhone|iPod|Android/.test(navigator.userAgent) || t2 && "ontouchstart" in document.documentElement) });
        if (t2.userAgentSupportingNativeDnD && t2.draggable && t2.dragEvents)
          return false;
      }
      var t2;
      return j.holdToDrag ? h2("touchstart", C, false) : h2("touchstart", k, false), true;
    }, t.supportsPassiveEventListener = i, Object.defineProperty(t, "G", { value: true });
  });
})(index_min, index_min.exports);
var scrollBehaviour = { exports: {} };
(function(module2, exports2) {
  (function(global, factory) {
    factory(exports2);
  })(commonjsGlobal, function(exports3) {
    function isTopLevelEl(el2) {
      return el2 === document.body || el2 === document.documentElement;
    }
    function getElementViewportOffset(el2, axis) {
      var offset;
      if (isTopLevelEl(el2)) {
        offset = axis === 0 ? el2.clientLeft : el2.clientTop;
      } else {
        var bounds = el2.getBoundingClientRect();
        offset = axis === 0 ? bounds.left : bounds.top;
      }
      return offset;
    }
    function getElementViewportSize(el2, axis) {
      var size;
      if (isTopLevelEl(el2)) {
        size = axis === 0 ? window.innerWidth : window.innerHeight;
      } else {
        size = axis === 0 ? el2.clientWidth : el2.clientHeight;
      }
      return size;
    }
    function getSetElementScroll(el2, axis, scroll) {
      var prop2 = axis === 0 ? "scrollLeft" : "scrollTop";
      var isTopLevel = isTopLevelEl(el2);
      if (arguments.length === 2) {
        if (isTopLevel) {
          return document.body[prop2] || document.documentElement[prop2];
        }
        return el2[prop2];
      }
      if (isTopLevel) {
        document.documentElement[prop2] += scroll;
        document.body[prop2] += scroll;
      } else {
        el2[prop2] += scroll;
      }
    }
    function isScrollable(el2) {
      var cs = getComputedStyle(el2);
      if (el2.scrollHeight > el2.clientHeight && (cs.overflowY === "scroll" || cs.overflowY === "auto")) {
        return true;
      }
      if (el2.scrollWidth > el2.clientWidth && (cs.overflowX === "scroll" || cs.overflowX === "auto")) {
        return true;
      }
      return false;
    }
    function findScrollableParent(el2) {
      do {
        if (!el2) {
          return void 0;
        }
        if (isScrollable(el2)) {
          return el2;
        }
        if (el2 === document.documentElement) {
          return null;
        }
      } while (el2 = el2.parentNode);
      return null;
    }
    function determineScrollIntention(currentCoordinate, size, threshold) {
      if (currentCoordinate < threshold) {
        return -1;
      } else if (size - currentCoordinate < threshold) {
        return 1;
      }
      return 0;
    }
    function determineDynamicVelocity(scrollIntention, currentCoordinate, size, threshold) {
      if (scrollIntention === -1) {
        return Math.abs(currentCoordinate - threshold);
      } else if (scrollIntention === 1) {
        return Math.abs(size - currentCoordinate - threshold);
      }
      return 0;
    }
    function isScrollEndReached(axis, scrollIntention, scrollBounds) {
      var currentScrollOffset = axis === 0 ? scrollBounds.scrollX : scrollBounds.scrollY;
      if (scrollIntention === 1) {
        var maxScrollOffset = axis === 0 ? scrollBounds.scrollWidth - scrollBounds.width : scrollBounds.scrollHeight - scrollBounds.height;
        return currentScrollOffset >= maxScrollOffset;
      } else if (scrollIntention === -1) {
        return currentScrollOffset <= 0;
      }
      return true;
    }
    var _options = {
      threshold: 75,
      velocityFn: function(velocity, threshold) {
        var multiplier = velocity / threshold;
        var easeInCubic = multiplier * multiplier * multiplier;
        return easeInCubic * threshold;
      }
    };
    var _scrollIntentions = {
      horizontal: 0,
      vertical: 0
    };
    var _dynamicVelocity = {
      x: 0,
      y: 0
    };
    var _scrollAnimationFrameId;
    var _currentCoordinates;
    var _hoveredElement;
    var _scrollableParent;
    var _translateDragImageFn;
    function handleDragImageTranslateOverride(event, currentCoordinates, hoveredElement, translateDragImageFn) {
      _currentCoordinates = currentCoordinates;
      _translateDragImageFn = translateDragImageFn;
      if (_hoveredElement !== hoveredElement) {
        _hoveredElement = hoveredElement;
        _scrollableParent = findScrollableParent(_hoveredElement);
      }
      var performScrollAnimation = updateScrollIntentions(_currentCoordinates, _scrollableParent, _options.threshold, _scrollIntentions, _dynamicVelocity);
      if (performScrollAnimation) {
        scheduleScrollAnimation();
      } else if (!!_scrollAnimationFrameId) {
        window.cancelAnimationFrame(_scrollAnimationFrameId);
        _scrollAnimationFrameId = null;
      }
    }
    function scheduleScrollAnimation() {
      if (!!_scrollAnimationFrameId) {
        return;
      }
      _scrollAnimationFrameId = window.requestAnimationFrame(scrollAnimation);
    }
    function scrollAnimation() {
      var scrollDiffX = 0, scrollDiffY = 0, isTopLevel = isTopLevelEl(_scrollableParent);
      if (_scrollIntentions.horizontal !== 0) {
        scrollDiffX = Math.round(_options.velocityFn(_dynamicVelocity.x, _options.threshold) * _scrollIntentions.horizontal);
        getSetElementScroll(_scrollableParent, 0, scrollDiffX);
      }
      if (_scrollIntentions.vertical !== 0) {
        scrollDiffY = Math.round(_options.velocityFn(_dynamicVelocity.y, _options.threshold) * _scrollIntentions.vertical);
        getSetElementScroll(_scrollableParent, 1, scrollDiffY);
      }
      if (isTopLevel) {
        _translateDragImageFn(scrollDiffX, scrollDiffY);
      } else {
        _translateDragImageFn(0, 0);
      }
      _scrollAnimationFrameId = null;
      if (updateScrollIntentions(_currentCoordinates, _scrollableParent, _options.threshold, _scrollIntentions, _dynamicVelocity)) {
        scheduleScrollAnimation();
      }
    }
    function updateScrollIntentions(currentCoordinates, scrollableParent, threshold, scrollIntentions, dynamicVelocity) {
      if (!currentCoordinates || !scrollableParent) {
        return false;
      }
      var scrollableParentBounds = {
        x: getElementViewportOffset(scrollableParent, 0),
        y: getElementViewportOffset(scrollableParent, 1),
        width: getElementViewportSize(scrollableParent, 0),
        height: getElementViewportSize(scrollableParent, 1),
        scrollX: getSetElementScroll(scrollableParent, 0),
        scrollY: getSetElementScroll(scrollableParent, 1),
        scrollWidth: scrollableParent.scrollWidth,
        scrollHeight: scrollableParent.scrollHeight
      };
      var currentCoordinatesOffset = {
        x: currentCoordinates.x - scrollableParentBounds.x,
        y: currentCoordinates.y - scrollableParentBounds.y
      };
      scrollIntentions.horizontal = determineScrollIntention(currentCoordinatesOffset.x, scrollableParentBounds.width, threshold);
      scrollIntentions.vertical = determineScrollIntention(currentCoordinatesOffset.y, scrollableParentBounds.height, threshold);
      if (scrollIntentions.horizontal && isScrollEndReached(0, scrollIntentions.horizontal, scrollableParentBounds)) {
        scrollIntentions.horizontal = 0;
      } else if (scrollIntentions.horizontal) {
        dynamicVelocity.x = determineDynamicVelocity(scrollIntentions.horizontal, currentCoordinatesOffset.x, scrollableParentBounds.width, threshold);
      }
      if (scrollIntentions.vertical && isScrollEndReached(1, scrollIntentions.vertical, scrollableParentBounds)) {
        scrollIntentions.vertical = 0;
      } else if (scrollIntentions.vertical) {
        dynamicVelocity.y = determineDynamicVelocity(scrollIntentions.vertical, currentCoordinatesOffset.y, scrollableParentBounds.height, threshold);
      }
      return !!(scrollIntentions.horizontal || scrollIntentions.vertical);
    }
    var scrollBehaviourDragImageTranslateOverride = handleDragImageTranslateOverride;
    exports3.scrollBehaviourDragImageTranslateOverride = scrollBehaviourDragImageTranslateOverride;
    Object.defineProperty(exports3, "__esModule", { value: true });
  });
})(scrollBehaviour, scrollBehaviour.exports);
var FormBuilder_vue_vue_type_style_index_0_lang = /* @__PURE__ */ (() => "#main-content:not(.has-sidebar):not(.has-details) #content-container {\n  min-height: auto !important;\n}")();
index_min.exports.polyfill({
  dragImageTranslateOverride: scrollBehaviour.exports.scrollBehaviourDragImageTranslateOverride,
  holdToDrag: 100
});
window.addEventListener("dragenter", (event) => {
  event.preventDefault();
});
window.addEventListener("touchmove", () => {
});
const _sfc_main$g = {
  name: "FormBuilder",
  components: {
    FieldPage,
    FieldPageTabs,
    FieldPill,
    ExistingFieldModal
  },
  data() {
    let activePage = location.hash;
    if (activePage.indexOf("#tab-fields-page") !== 0) {
      activePage = "#tab-fields-page-1";
    }
    return {
      activePage,
      savedFormHash: ""
    };
  },
  computed: __spreadProps(__spreadValues({}, mapState({
    fieldGroups: (state) => {
      return state.fieldGroups;
    },
    pages: (state) => {
      return state.form.pages;
    },
    form: (state) => {
      return state.form;
    }
  })), {
    formHash() {
      return this.$store.getters["form/formHash"];
    },
    enabledFieldGroups() {
      return this.fieldGroups.filter((group) => {
        return group.label !== "Internal" ? group : false;
      });
    },
    isStencil() {
      return this.$store.state.form.isStencil;
    }
  }),
  created() {
    window.addEventListener("beforeunload", this.checkForChanges);
    this.savedFormHash = this.formHash;
  },
  methods: {
    checkForChanges(event) {
      if (this.savedFormHash !== this.formHash) {
        event.returnValue = Craft.t("formie", "Are you sure you want to leave?");
      }
    },
    saveUpdatedHash() {
      this.savedFormHash = this.formHash;
    }
  }
};
const _hoisted_1$d = { class: "fui-fields-pane" };
const _hoisted_2$d = { class: "fui-fields-wrapper" };
const _hoisted_3$d = { class: "fui-tabs fui-field-tabs fui-editor-tabs" };
const _hoisted_4$c = { class: "fui-fields-inner-wrapper" };
const _hoisted_5$b = { class: "fui-fields-scroll" };
const _hoisted_6$a = ["id"];
const _hoisted_7$a = { class: "fui-sidebar-wrapper" };
const _hoisted_8$a = { class: "fui-sidebar-scroll" };
const _hoisted_9$8 = { key: 0 };
const _hoisted_10$6 = { class: "sidebar-title" };
const _hoisted_11$5 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
const _hoisted_12$5 = { class: "sidebar-title" };
const _hoisted_13$4 = { class: "fui-row small-padding" };
const _hoisted_14$4 = { key: 0 };
function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_field_page_tabs = resolveComponent("field-page-tabs");
  const _component_field_page = resolveComponent("field-page");
  const _component_existing_field_modal = resolveComponent("existing-field-modal");
  const _component_field_pill = resolveComponent("field-pill");
  return openBlock(), createElementBlock("div", _hoisted_1$d, [
    createBaseVNode("div", _hoisted_2$d, [
      createBaseVNode("div", _hoisted_3$d, [
        createVNode(_component_field_page_tabs, {
          modelValue: $data.activePage,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.activePage = $event)
        }, null, 8, ["modelValue"])
      ]),
      createBaseVNode("div", _hoisted_4$c, [
        createBaseVNode("div", _hoisted_5$b, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.pages, (page, index) => {
            return openBlock(), createElementBlock("div", {
              id: "tab-fields-page-" + page.id,
              key: page.id,
              class: normalizeClass(["fui-tab-page", { "hidden": $data.activePage != "#tab-fields-page-" + (index + 1) }])
            }, [
              createVNode(_component_field_page, mergeProps({
                ref_for: true,
                ref: "pages",
                "page-index": index
              }, page), null, 16, ["page-index"])
            ], 10, _hoisted_6$a);
          }), 128))
        ])
      ])
    ]),
    createBaseVNode("div", _hoisted_7$a, [
      createBaseVNode("div", _hoisted_8$a, [
        !$options.isStencil ? (openBlock(), createElementBlock("div", _hoisted_9$8, [
          createBaseVNode("h6", _hoisted_10$6, toDisplayString(_ctx.t("formie", "Existing fields")), 1),
          createVNode(_component_existing_field_modal),
          _hoisted_11$5
        ])) : createCommentVNode("v-if", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList($options.enabledFieldGroups, (group, index) => {
          return openBlock(), createElementBlock("div", { key: index }, [
            createBaseVNode("h6", _hoisted_12$5, toDisplayString(group.label), 1),
            createBaseVNode("div", _hoisted_13$4, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(group.fields, (field, i) => {
                return openBlock(), createElementBlock("div", {
                  key: i,
                  class: "fui-col-6"
                }, [
                  createVNode(_component_field_pill, {
                    type: field.type
                  }, null, 8, ["type"])
                ]);
              }), 128))
            ]),
            index != Object.keys($options.enabledFieldGroups).length - 1 ? (openBlock(), createElementBlock("hr", _hoisted_14$4)) : createCommentVNode("v-if", true)
          ]);
        }), 128))
      ])
    ])
  ]);
}
var FormBuilder = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$g], ["__file", "/Users/joshcrawford/public_html/craft4-plugins/formie/src/web/assets/forms/src/js/components/FormBuilder.vue"]]);
function errorCollection() {
  const errorMap2 = reactive({});
  const errorPlugin2 = (node2) => {
    if (node2.props.type == "form" || node2.props.type == "group") {
      return;
    }
    errorMap2[node2.name] = errorMap2[node2.name] || {};
    node2.on("created", () => {
      errorMap2[node2.name].valid = toRef(node2.context.state, "valid");
    });
    node2.on("count:blocking", ({ payload: count }) => {
      errorMap2[node2.name].blockingCount = count;
    });
    node2.on("count:errors", ({ payload: count }) => {
      errorMap2[node2.name].errorCount = count;
    });
  };
  return { errorMap: errorMap2, errorPlugin: errorPlugin2 };
}
const { errorMap, errorPlugin } = errorCollection();
const _sfc_main$f = {
  name: "FormKitForm",
  computed: {
    errorPlugin() {
      return errorPlugin;
    },
    errorMap() {
      return errorMap;
    }
  },
  mounted() {
    this.$refs.form.node.config.rootConfig.formieConfig = this.$store;
    this.$refs.form.node.config.rootConfig.errorMap = this.errorMap;
  },
  methods: {
    submit() {
      this.$refs.form.node.submit();
    },
    getErrors() {
      const errors = [];
      for (const [key, value] of Object.entries(this.errorMap)) {
        if (value.blockingCount || value.errorCount) {
          errors.push(key);
        }
      }
      return errors;
    },
    setErrors(errors) {
      this.$refs.form.node.setErrors(errors);
    }
  }
};
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FormKit = resolveComponent("FormKit");
  return openBlock(), createBlock(_component_FormKit, mergeProps(_ctx.$attrs, {
    ref: "form",
    type: "form",
    actions: false,
    preserve: true,
    "incomplete-message": false,
    "formie-store": _ctx.$store,
    plugins: [$options.errorPlugin]
  }), {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 16, ["formie-store", "plugins"]);
}
var FormKitForm = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$f], ["__file", "/Users/joshcrawford/public_html/craft4-plugins/formie/src/web/assets/forms/src/js/formkit/FormKitForm.vue"]]);
const _sfc_main$e = {
  name: "NotificationEditModal",
  components: {
    Modal,
    Tabs,
    Tab: Tab$1,
    TabList
  },
  props: {
    notificationRef: {
      type: Object,
      default: () => {
      }
    },
    showModal: {
      type: Boolean,
      default: () => {
      }
    },
    notification: {
      type: Object,
      default: () => {
      }
    },
    tabsSchema: {
      type: Array,
      default: () => {
        return [];
      }
    },
    fieldsSchema: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  emits: ["delete", "update:notification"],
  data() {
    return {
      originalNotification: null,
      mounted: false,
      tabsWithErrors: []
    };
  },
  computed: {
    notificationErrors() {
      return this.notification.errors;
    },
    getFirstError() {
      if (!isEmpty(this.notificationErrors)) {
        return this.notificationErrors[Object.keys(this.notificationErrors)[0]][0] || "";
      }
      return null;
    }
  },
  created() {
    this.originalNotification = this.clone(this.notification);
    this.$store.dispatch("formie/setEditingNotification", this.notificationRef);
  },
  mounted() {
    setTimeout(() => {
      this.mounted = true;
      this.$nextTick().then(() => {
        if (!isEmpty(this.fieldErrors)) {
          this.$refs.fieldForm.setErrors(this.fieldErrors);
          setTimeout(() => {
            this.updateTabs();
          }, 50);
        }
      });
    }, 50);
  },
  destroy() {
    this.destroy();
  },
  methods: {
    destroy() {
      setTimeout(() => {
        this.$store.dispatch("formie/setEditingNotification", null);
      }, 200);
    },
    closeModal() {
      this.$refs.modal.close();
      this.destroy();
    },
    deleteNotification() {
      this.$emit("delete");
      this.destroy();
    },
    tabErrorClass(tab) {
      return this.tabsWithErrors.includes(tab) ? "error" : false;
    },
    submitHandler() {
      this.notificationRef.addNotification();
      this.closeModal();
    },
    onCancelModal() {
      this.$emit("update:notification", this.originalNotification);
      this.closeModal();
    },
    updateTabs() {
      const errors = this.$refs.fieldForm.getErrors();
      this.tabsWithErrors = [];
      this.tabsSchema.forEach((tab) => {
        const isInTab = tab.fields.some((v) => {
          return errors.includes(v);
        });
        if (isInTab) {
          this.tabsWithErrors.push(tab.label);
        }
      });
    },
    onSave() {
      this.updateTabs();
      this.$refs.fieldForm.submit();
    }
  }
};
const _hoisted_1$c = { class: "fui-modal-title" };
const _hoisted_2$c = { class: "fui-tabs fui-field-tabs fui-field-tab-list" };
const _hoisted_3$c = {
  key: 0,
  class: "fui-notice-wrap"
};
const _hoisted_4$b = { class: "fui-notice error" };
const _hoisted_5$a = /* @__PURE__ */ createBaseVNode("span", { class: "error with-icon" }, null, -1);
const _hoisted_6$9 = {
  key: 0,
  class: "fui-loading fui-loading-lg",
  style: { "height": "100%" }
};
const _hoisted_7$9 = {
  key: 0,
  class: "buttons left"
};
const _hoisted_8$9 = { class: "buttons right" };
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_tab = resolveComponent("tab");
  const _component_tab_list = resolveComponent("tab-list");
  const _component_FormKitSchema = resolveComponent("FormKitSchema");
  const _component_FormKitForm = resolveComponent("FormKitForm");
  const _component_tabs = resolveComponent("tabs");
  const _component_modal = resolveComponent("modal");
  return openBlock(), createBlock(_component_modal, {
    ref: "modal",
    modelValue: $props.showModal,
    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $props.showModal = $event),
    "modal-class": "fui-edit-notification-modal",
    onClickOutside: $options.onCancelModal
  }, {
    header: withCtx(() => [
      createBaseVNode("h3", _hoisted_1$c, toDisplayString(_ctx.t("formie", "Edit Notification")), 1),
      createBaseVNode("div", {
        class: "fui-dialog-close",
        onClick: _cache[0] || (_cache[0] = withModifiers((...args) => $options.onCancelModal && $options.onCancelModal(...args), ["prevent"]))
      })
    ]),
    body: withCtx(() => [
      createVNode(_component_tabs, null, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_2$c, [
            createVNode(_component_tab_list, { class: "fui-pages-menu" }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList($props.tabsSchema, (tab, index) => {
                  return openBlock(), createBlock(_component_tab, {
                    key: index,
                    index,
                    class: normalizeClass(["fui-tab-item", $options.tabErrorClass(tab.label)])
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(tab.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["index", "class"]);
                }), 128))
              ]),
              _: 1
            })
          ]),
          $options.getFirstError ? (openBlock(), createElementBlock("div", _hoisted_3$c, [
            createBaseVNode("div", _hoisted_4$b, [
              _hoisted_5$a,
              createTextVNode(" " + toDisplayString($options.getFirstError), 1)
            ])
          ])) : createCommentVNode("v-if", true),
          createBaseVNode("div", {
            class: "fui-modal-content",
            style: normalizeStyle({ height: !$data.mounted ? "80%" : "" })
          }, [
            !$data.mounted ? (openBlock(), createElementBlock("div", _hoisted_6$9)) : createCommentVNode("v-if", true),
            $data.mounted ? (openBlock(), createBlock(_component_FormKitForm, {
              key: 1,
              ref: "fieldForm",
              modelValue: $props.notification,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $props.notification = $event),
              onSubmit: $options.submitHandler
            }, {
              default: withCtx(() => [
                createVNode(_component_FormKitSchema, { schema: $props.fieldsSchema }, null, 8, ["schema"])
              ]),
              _: 1
            }, 8, ["modelValue", "onSubmit"])) : createCommentVNode("v-if", true)
          ], 4)
        ]),
        _: 1
      })
    ]),
    footer: withCtx(() => [
      !$props.notificationRef.isNew ? (openBlock(), createElementBlock("div", _hoisted_7$9, [
        createBaseVNode("div", {
          class: "btn delete",
          role: "button",
          onClick: _cache[2] || (_cache[2] = withModifiers((...args) => $options.deleteNotification && $options.deleteNotification(...args), ["prevent"]))
        }, toDisplayString(_ctx.t("app", "Delete")), 1)
      ])) : createCommentVNode("v-if", true),
      createBaseVNode("div", _hoisted_8$9, [
        createBaseVNode("div", {
          class: "btn",
          role: "button",
          onClick: _cache[3] || (_cache[3] = withModifiers((...args) => $options.onCancelModal && $options.onCancelModal(...args), ["prevent"]))
        }, toDisplayString(_ctx.t("app", "Cancel")), 1),
        createBaseVNode("div", {
          class: "btn submit",
          role: "button",
          onClick: _cache[4] || (_cache[4] = withModifiers((...args) => $options.onSave && $options.onSave(...args), ["prevent"]))
        }, toDisplayString(_ctx.t("app", "Apply")), 1)
      ])
    ]),
    _: 1
  }, 8, ["modelValue", "onClickOutside"]);
}
var NotificationEditModal = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$e], ["__file", "/Users/joshcrawford/public_html/craft4-plugins/formie/src/web/assets/forms/src/js/components/NotificationEditModal.vue"]]);
var Notification_vue_vue_type_style_index_0_lang = /* @__PURE__ */ (() => ".fui-notification-row .fui-icon {\n  display: block;\n  width: 12px;\n  height: 12px;\n  color: #cbcfd4;\n  margin-top: 2px;\n}\n.fui-notification-row .fui-icon:hover {\n  color: #0B69A3;\n}\n.fui-notification-row .fui-icon svg {\n  display: block;\n}\n.fui-unsaved-pill {\n  position: relative;\n  background-color: #e5edf6;\n  color: #92a3b7;\n  border-radius: 2px;\n  display: inline-flex;\n  padding: 0 5px;\n  margin: 0;\n  font-size: 12px;\n  white-space: nowrap;\n  text-transform: uppercase;\n  font-weight: 700;\n  border: 1px #c8d3e0 solid;\n  margin-left: 10px;\n}")();
const _sfc_main$d = {
  name: "Notification",
  components: {
    NotificationEditModal
  },
  props: {
    notification: {
      type: Object,
      default: () => {
      }
    },
    schema: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {
      showModal: false
    };
  },
  computed: {
    isNew() {
      return (this.notification.id || "").toString() === "";
    },
    isUnsaved() {
      if (this.$store.state.form.isStencil) {
        return false;
      }
      return (this.notification.id || "").toString().startsWith("new");
    }
  },
  mounted() {
    if (this.notification.id == 1)
      ;
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    onModalClosed() {
      this.showModal = false;
    },
    addNotification() {
      if (this.isNew) {
        const payload = {
          data: Object.assign(this.notification, { id: newId() })
        };
        this.$store.dispatch("notifications/addNotification", payload);
      }
      this.$store.state.form.pages[0].notificationFlag = true;
    },
    deleteNotification() {
      const { name } = this.notification;
      const confirmationMessage = Craft.t("formie", "Are you sure you want to delete \u201C{name}\u201D?", { name });
      if (confirm(confirmationMessage)) {
        const payload = {
          id: this.notification.id
        };
        this.$store.dispatch("notifications/deleteNotification", payload);
        this.$store.state.form.pages[0].notificationFlag = true;
      }
    },
    duplicateNotification() {
      const newNotification = this.clone(this.notification);
      newNotification.id = newId();
      delete newNotification.errors;
      delete newNotification.hasError;
      delete newNotification.uid;
      this.$store.dispatch("notifications/addNotification", {
        data: newNotification
      });
      this.$store.state.form.pages[0].notificationFlag = true;
    }
  }
};
const _hoisted_1$b = { class: "fui-notification-row" };
const _hoisted_2$b = { class: "" };
const _hoisted_3$b = {
  key: 0,
  class: "fui-unsaved-pill"
};
const _hoisted_4$a = { class: "" };
const _hoisted_5$9 = ["title"];
const _hoisted_6$8 = /* @__PURE__ */ createBaseVNode("svg", {
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fas",
  "data-icon": "clone",
  class: "svg-inline--fa fa-clone fa-w-16",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    fill: "currentColor",
    d: "M464 0c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48H176c-26.51 0-48-21.49-48-48V48c0-26.51 21.49-48 48-48h288M176 416c-44.112 0-80-35.888-80-80V128H48c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48v-48H176z"
  })
], -1);
const _hoisted_7$8 = [
  _hoisted_6$8
];
const _hoisted_8$8 = ["title"];
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_notification_edit_modal = resolveComponent("notification-edit-modal");
  return openBlock(), createElementBlock("tr", _hoisted_1$b, [
    createBaseVNode("td", _hoisted_2$b, [
      createBaseVNode("a", {
        href: "#",
        class: normalizeClass({ "error": false }),
        onClick: _cache[0] || (_cache[0] = withModifiers((...args) => $options.openModal && $options.openModal(...args), ["prevent"]))
      }, [
        createBaseVNode("span", {
          class: normalizeClass(["status", { "on": !!+$props.notification.enabled }])
        }, null, 2),
        createBaseVNode("strong", null, toDisplayString($props.notification.name), 1)
      ]),
      $options.isUnsaved ? (openBlock(), createElementBlock("span", _hoisted_3$b, toDisplayString(_ctx.t("formie", "Unsaved")), 1)) : createCommentVNode("v-if", true)
    ]),
    createBaseVNode("td", _hoisted_4$a, [
      createBaseVNode("span", null, toDisplayString($props.notification.subject), 1)
    ]),
    createBaseVNode("td", null, [
      createBaseVNode("a", {
        title: _ctx.t("formie", "Duplicate"),
        role: "button",
        href: "#",
        class: "fui-icon",
        onClick: _cache[1] || (_cache[1] = withModifiers((...args) => $options.duplicateNotification && $options.duplicateNotification(...args), ["prevent"]))
      }, _hoisted_7$8, 8, _hoisted_5$9)
    ]),
    createBaseVNode("td", null, [
      createBaseVNode("a", {
        title: _ctx.t("formie", "Delete"),
        role: "button",
        href: "#",
        class: "delete icon",
        onClick: _cache[2] || (_cache[2] = withModifiers((...args) => $options.deleteNotification && $options.deleteNotification(...args), ["prevent"]))
      }, null, 8, _hoisted_8$8)
    ]),
    $data.showModal ? (openBlock(), createBlock(_component_notification_edit_modal, {
      key: 0,
      showModal: $data.showModal,
      "onUpdate:showModal": _cache[3] || (_cache[3] = ($event) => $data.showModal = $event),
      notification: $props.notification,
      "onUpdate:notification": _cache[4] || (_cache[4] = ($event) => $props.notification = $event),
      "notification-ref": this,
      "fields-schema": $props.schema.fieldsSchema,
      "tabs-schema": $props.schema.tabsSchema,
      onDelete: $options.deleteNotification,
      onClosed: $options.onModalClosed
    }, null, 8, ["showModal", "notification", "fields-schema", "tabs-schema", "onDelete", "onClosed"])) : createCommentVNode("v-if", true)
  ]);
}
var Notification = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$d], ["__file", "/Users/joshcrawford/public_html/craft4-plugins/formie/src/web/assets/forms/src/js/components/Notification.vue"]]);
const _sfc_main$c = {
  name: "ExistingNotification",
  props: {
    id: {
      type: [String, Number],
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    subject: {
      type: String,
      default: ""
    },
    notification: {
      type: Object,
      default: () => {
      }
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  emits: ["selected"],
  computed: {
    notificationIds() {
      return this.$store.getters["form/notificationIds"];
    },
    isDisabled() {
      return this.notificationIds.indexOf(this.id) !== -1;
    }
  },
  methods: {
    click() {
      this.$emit("selected", this, !this.selected);
    }
  }
};
const _hoisted_1$a = { class: "fui-col-6" };
const _hoisted_2$a = { class: "fui-existing-item-wrap" };
const _hoisted_3$a = { class: "fui-existing-item-title" };
const _hoisted_4$9 = { class: "fui-existing-item-type" };
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$a, [
    createBaseVNode("div", {
      class: normalizeClass(["fui-existing-item", { "sel": $props.selected, "disabled": $options.isDisabled }]),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.click && $options.click(...args))
    }, [
      createBaseVNode("div", _hoisted_2$a, [
        createBaseVNode("div", _hoisted_3$a, toDisplayString($props.name), 1),
        createBaseVNode("div", _hoisted_4$9, toDisplayString($props.subject), 1)
      ])
    ], 2)
  ]);
}
var ExistingNotification = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c], ["__file", "/Users/joshcrawford/public_html/craft4-plugins/formie/src/web/assets/forms/src/js/components/ExistingNotification.vue"]]);
var ExistingNotificationModal_vue_vue_type_style_index_0_lang = /* @__PURE__ */ (() => ".fui-modal-footer .info {\n  margin: 8px 10px 0 0;\n}\n.fui-existing-item-modal .fui-error-pane {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n.fui-existing-item-modal .fui-error-pane {\n  align-items: center;\n  justify-content: center;\n  display: flex;\n}\n.fui-existing-item-modal .fui-error-pane [data-icon] {\n  display: block;\n  font-size: 3em;\n  margin-bottom: 0.5rem;\n}\n.fui-existing-item-modal .fui-error-content {\n  text-align: center;\n  width: 90%;\n}")();
const _sfc_main$b = {
  name: "ExistingNotificationModal",
  components: {
    Modal,
    ExistingNotification
  },
  data() {
    return {
      error: false,
      errorMessage: "",
      loading: true,
      showModal: false,
      search: "",
      selectedKey: "",
      selectedNotifications: []
    };
  },
  computed: __spreadProps(__spreadValues({}, mapState({
    existingNotifications: (state) => {
      return state.formie.existingNotifications;
    },
    form: (state) => {
      return state.form;
    }
  })), {
    totalSelected() {
      return this.selectedNotifications.length;
    },
    filteredExistingNotifications() {
      return this.existingNotifications.reduce((acc, form) => {
        const notifications = form.notifications.filter((notification) => {
          const inLabel = notification.name.toLowerCase().includes(this.search.toLowerCase());
          return inLabel;
        });
        return !notifications.length ? acc : acc.concat(__spreadProps(__spreadValues({}, form), { notifications }));
      }, []);
    },
    submitText() {
      if (this.totalSelected > 1) {
        return Craft.t("formie", "Add {num} notifications", { num: this.totalSelected });
      }
      if (this.totalSelected > 0) {
        return Craft.t("formie", "Add {num} notification", { num: this.totalSelected });
      }
      return Craft.t("formie", "Add notification");
    }
  }),
  created() {
    if (this.existingNotifications.length) {
      this.selectedKey = this.existingNotifications[0].key;
    }
  },
  methods: {
    openModal() {
      this.showModal = true;
      this.loading = true;
      if (!this.existingNotifications.length) {
        this.fetchExistingNotifications();
      } else {
        setTimeout(() => {
          this.mounted = true;
          this.loading = false;
        }, 100);
      }
    },
    closeModal() {
      this.selectedNotifications = [];
      this.showModal = false;
    },
    selectTab(key) {
      this.selectedKey = key;
    },
    isNotificationSelected(notification) {
      return findIndex(this.selectedNotifications, { id: notification.id }) > -1;
    },
    notificationSelected(notification, selected) {
      if (selected) {
        this.selectedNotifications.push(notification);
      } else {
        const index = findIndex(this.selectedNotifications, { id: notification.id });
        if (index > -1) {
          this.selectedNotifications.splice(index, 1);
        }
      }
    },
    fetchExistingNotifications() {
      this.error = false;
      this.errorMessage = "";
      this.loading = true;
      const data = { formId: this.form.id };
      Craft.sendActionRequest("POST", "formie/forms/get-existing-notifications", { data }).then((response) => {
        this.loading = false;
        if (response.data.error) {
          throw new Error(response.data.error);
        }
        if (response.data) {
          this.$store.dispatch("formie/setExistingNotifications", response.data);
        }
        this.mounted = true;
      }).catch((error) => {
        this.loading = false;
        this.error = true;
        this.errorMessage = error;
        if (error.response.data.error) {
          this.errorMessage += `<br><code>${error.response.data.error}</code>`;
        }
      });
    },
    addNotifications() {
      for (const element of this.selectedNotifications) {
        const newNotification = this.clone(element.notification);
        newNotification.id = newId();
        delete newNotification.errors;
        delete newNotification.hasError;
        delete newNotification.uid;
        this.$store.dispatch("notifications/addNotification", {
          data: newNotification
        });
      }
      this.closeModal();
    }
  }
};
const _hoisted_1$9 = { class: "fui-modal-title" };
const _hoisted_2$9 = {
  key: 0,
  class: "fui-error-pane error"
};
const _hoisted_3$9 = { class: "fui-error-content" };
const _hoisted_4$8 = /* @__PURE__ */ createBaseVNode("span", { "data-icon": "alert" }, null, -1);
const _hoisted_5$8 = ["innerHTML"];
const _hoisted_6$7 = {
  key: 1,
  class: "fui-loading fui-loading-lg",
  style: { "height": "100%" }
};
const _hoisted_7$7 = { key: 2 };
const _hoisted_8$7 = {
  key: 0,
  class: "fui-modal-content-wrap"
};
const _hoisted_9$7 = { class: "fui-modal-sidebar sidebar" };
const _hoisted_10$5 = { key: 0 };
const _hoisted_11$4 = { key: 0 };
const _hoisted_12$4 = ["onClick"];
const _hoisted_13$3 = { class: "label" };
const _hoisted_14$3 = { class: "fui-modal-content" };
const _hoisted_15$3 = { class: "toolbar flex flex-nowrap" };
const _hoisted_16$3 = { class: "flex-grow texticon search icon clearable" };
const _hoisted_17$3 = /* @__PURE__ */ createBaseVNode("div", {
  class: "clear hidden",
  title: "Clear"
}, null, -1);
const _hoisted_18$3 = { key: 0 };
const _hoisted_19$3 = { class: "fui-row small-padding" };
const _hoisted_20$3 = { key: 1 };
const _hoisted_21$3 = {
  key: 1,
  class: "fui-modal-content-wrap"
};
const _hoisted_22$3 = { class: "fui-modal-content" };
const _hoisted_23$2 = { class: "buttons left" };
const _hoisted_24$2 = /* @__PURE__ */ createBaseVNode("div", { class: "spinner hidden" }, null, -1);
const _hoisted_25$2 = {
  key: 0,
  class: "buttons right"
};
const _hoisted_26$2 = ["value", "disabled"];
const _hoisted_27$2 = /* @__PURE__ */ createBaseVNode("div", { class: "spinner hidden" }, null, -1);
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_existing_notification = resolveComponent("existing-notification");
  const _component_modal = resolveComponent("modal");
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("a", {
      href: "#",
      onClick: _cache[0] || (_cache[0] = withModifiers((...args) => $options.openModal && $options.openModal(...args), ["prevent"]))
    }, toDisplayString(_ctx.t("formie", "Select existing notification")), 1),
    createVNode(_component_modal, {
      ref: "modal",
      modelValue: $data.showModal,
      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.showModal = $event),
      "modal-class": ["fui-edit-notification-modal", "fui-existing-item-modal"],
      onClickOutside: $options.closeModal
    }, {
      header: withCtx(() => [
        createBaseVNode("h3", _hoisted_1$9, toDisplayString(_ctx.t("formie", "Add Existing Notification")), 1),
        createBaseVNode("div", {
          class: "fui-dialog-close",
          onClick: _cache[1] || (_cache[1] = withModifiers((...args) => $options.closeModal && $options.closeModal(...args), ["prevent"]))
        })
      ]),
      body: withCtx(() => [
        $data.error ? (openBlock(), createElementBlock("div", _hoisted_2$9, [
          createBaseVNode("div", _hoisted_3$9, [
            _hoisted_4$8,
            createBaseVNode("span", {
              class: "error",
              innerHTML: $data.errorMessage
            }, null, 8, _hoisted_5$8)
          ])
        ])) : $data.loading ? (openBlock(), createElementBlock("div", _hoisted_6$7)) : _ctx.mounted ? (openBlock(), createElementBlock("div", _hoisted_7$7, [
          _ctx.existingNotifications.length ? (openBlock(), createElementBlock("div", _hoisted_8$7, [
            createBaseVNode("div", _hoisted_9$7, [
              $options.filteredExistingNotifications.length ? (openBlock(), createElementBlock("nav", _hoisted_10$5, [
                createBaseVNode("ul", null, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.existingNotifications, (item, index) => {
                    return openBlock(), createElementBlock("li", {
                      key: index,
                      class: normalizeClass({ "heading": item.heading })
                    }, [
                      item.heading ? (openBlock(), createElementBlock("span", _hoisted_11$4, toDisplayString(item.heading), 1)) : (openBlock(), createElementBlock("a", {
                        key: 1,
                        class: normalizeClass({ "sel": $data.selectedKey === item.key }),
                        onClick: withModifiers(($event) => $options.selectTab(item.key), ["prevent"])
                      }, [
                        createBaseVNode("span", _hoisted_13$3, toDisplayString(item.label), 1)
                      ], 10, _hoisted_12$4))
                    ], 2);
                  }), 128))
                ])
              ])) : createCommentVNode("v-if", true)
            ]),
            createBaseVNode("div", _hoisted_14$3, [
              createBaseVNode("div", _hoisted_15$3, [
                createBaseVNode("div", _hoisted_16$3, [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.search = $event),
                    class: "text fullwidth",
                    type: "text",
                    autocomplete: "off",
                    placeholder: "Search"
                  }, null, 512), [
                    [vModelText, $data.search]
                  ]),
                  _hoisted_17$3
                ])
              ]),
              $options.filteredExistingNotifications.length ? (openBlock(), createElementBlock("div", _hoisted_18$3, [
                (openBlock(true), createElementBlock(Fragment, null, renderList($options.filteredExistingNotifications, (form, formIndex) => {
                  return openBlock(), createElementBlock("div", {
                    key: formIndex,
                    class: normalizeClass({ hidden: $data.selectedKey !== form.key })
                  }, [
                    createBaseVNode("div", _hoisted_19$3, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(form.notifications, (notification, notificationIndex) => {
                        return openBlock(), createBlock(_component_existing_notification, mergeProps({
                          key: notificationIndex,
                          selected: $options.isNotificationSelected(notification)
                        }, notification, {
                          notification,
                          onSelected: $options.notificationSelected
                        }), null, 16, ["selected", "notification", "onSelected"]);
                      }), 128))
                    ])
                  ], 2);
                }), 128))
              ])) : (openBlock(), createElementBlock("div", _hoisted_20$3, [
                createBaseVNode("p", null, toDisplayString(_ctx.t("formie", "No notifications found.")), 1)
              ]))
            ])
          ])) : (openBlock(), createElementBlock("div", _hoisted_21$3, [
            createBaseVNode("div", _hoisted_22$3, [
              createBaseVNode("p", null, toDisplayString(_ctx.t("formie", "No existing notifications to select.")), 1)
            ])
          ]))
        ])) : createCommentVNode("v-if", true)
      ]),
      footer: withCtx(() => [
        createBaseVNode("div", _hoisted_23$2, [
          _hoisted_24$2,
          createBaseVNode("div", {
            class: "btn",
            role: "button",
            onClick: _cache[3] || (_cache[3] = withModifiers((...args) => $options.closeModal && $options.closeModal(...args), ["prevent"]))
          }, toDisplayString(_ctx.t("app", "Cancel")), 1)
        ]),
        $options.filteredExistingNotifications.length ? (openBlock(), createElementBlock("div", _hoisted_25$2, [
          createBaseVNode("input", {
            type: "submit",
            value: $options.submitText,
            disabled: $options.totalSelected === 0,
            class: normalizeClass(["btn submit", { "disabled": $options.totalSelected === 0 }]),
            onClick: _cache[4] || (_cache[4] = withModifiers((...args) => $options.addNotifications && $options.addNotifications(...args), ["prevent"]))
          }, null, 10, _hoisted_26$2),
          _hoisted_27$2
        ])) : createCommentVNode("v-if", true)
      ]),
      _: 1
    }, 8, ["modelValue", "onClickOutside"])
  ], 64);
}
var ExistingNotificationModal = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b], ["__file", "/Users/joshcrawford/public_html/craft4-plugins/formie/src/web/assets/forms/src/js/components/ExistingNotificationModal.vue"]]);
var NotificationsBuilder_vue_vue_type_style_index_0_lang = /* @__PURE__ */ (() => ".fui-new-notification-buttons {\n  font-size: 14px;\n  line-height: 20px;\n}\n.zilch .fui-new-notification-buttons .btngroup {\n  justify-content: center;\n}")();
const _sfc_main$a = {
  name: "NotificationsBuilder",
  components: {
    Notification,
    ExistingNotificationModal
  },
  props: {
    schema: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {
      newNotificationModel: {}
    };
  },
  computed: __spreadValues({}, mapState(["notifications", "form"])),
  methods: {
    newNotification() {
      this.newNotificationModel = {
        enabled: true,
        attachFiles: true,
        enableConditions: false,
        templateId: this.form.settings.defaultEmailTemplateId
      };
      this.$refs.newNotification.openModal();
    }
  }
};
const _hoisted_1$8 = { class: "tableview" };
const _hoisted_2$8 = { class: "tablepane vue-admin-tablepane" };
const _hoisted_3$8 = { class: "vuetable data fullwidth" };
const _hoisted_4$7 = /* @__PURE__ */ createBaseVNode("th", { class: "thin" }, null, -1);
const _hoisted_5$7 = /* @__PURE__ */ createBaseVNode("th", { class: "thin" }, null, -1);
const _hoisted_6$6 = { class: "vuetable-body" };
const _hoisted_7$6 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
const _hoisted_8$6 = { key: 1 };
const _hoisted_9$6 = { class: "fui-new-notification-buttons" };
const _hoisted_10$4 = { class: "btngroup submit first" };
const _hoisted_11$3 = /* @__PURE__ */ createBaseVNode("div", { class: "btn submit menubtn" }, null, -1);
const _hoisted_12$3 = { class: "menu" };
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_notification = resolveComponent("notification");
  const _component_existing_notification_modal = resolveComponent("existing-notification-modal");
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_notification, {
      ref: "newNotification",
      class: "hidden",
      schema: $props.schema,
      notification: $data.newNotificationModel
    }, null, 8, ["schema", "notification"]),
    createBaseVNode("div", {
      class: normalizeClass({ "zilch": !_ctx.notifications.length })
    }, [
      _ctx.notifications.length ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createBaseVNode("div", _hoisted_1$8, [
          createBaseVNode("div", _hoisted_2$8, [
            createBaseVNode("table", _hoisted_3$8, [
              createBaseVNode("thead", null, [
                createBaseVNode("tr", null, [
                  createBaseVNode("th", null, toDisplayString(_ctx.t("formie", "Name")), 1),
                  createBaseVNode("th", null, toDisplayString(_ctx.t("formie", "Subject")), 1),
                  _hoisted_4$7,
                  _hoisted_5$7
                ])
              ]),
              createBaseVNode("tbody", _hoisted_6$6, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.notifications, (notification) => {
                  return openBlock(), createBlock(_component_notification, {
                    key: notification.id,
                    ref_for: true,
                    ref: "notification",
                    notification,
                    schema: $props.schema
                  }, null, 8, ["notification", "schema"]);
                }), 128))
              ])
            ])
          ])
        ]),
        _hoisted_7$6
      ], 64)) : (openBlock(), createElementBlock("p", _hoisted_8$6, toDisplayString(_ctx.t("formie", "No notifications created.")), 1)),
      createBaseVNode("div", _hoisted_9$6, [
        createBaseVNode("div", _hoisted_10$4, [
          createBaseVNode("a", {
            href: "#",
            class: "btn submit add icon",
            onClick: _cache[0] || (_cache[0] = withModifiers((...args) => $options.newNotification && $options.newNotification(...args), ["prevent"]))
          }, toDisplayString(_ctx.t("formie", "New Notification")), 1),
          _hoisted_11$3,
          createBaseVNode("div", _hoisted_12$3, [
            createBaseVNode("ul", null, [
              createBaseVNode("li", null, [
                createVNode(_component_existing_notification_modal)
              ])
            ])
          ])
        ])
      ])
    ], 2)
  ]);
}
var NotificationsBuilder = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a], ["__file", "/Users/joshcrawford/public_html/craft4-plugins/formie/src/web/assets/forms/src/js/components/NotificationsBuilder.vue"]]);
const _sfc_main$9 = {
  name: "DatePreview",
  props: {
    field: {
      type: Object,
      required: true
    }
  },
  computed: {
    date() {
      let { defaultValue } = this.field.settings;
      defaultValue = new Date(parseDate(defaultValue));
      if (!(defaultValue instanceof Date) || isNaN(defaultValue)) {
        return null;
      }
      let day = defaultValue.getDate();
      let month = defaultValue.getMonth() + 1;
      const year = defaultValue.getFullYear();
      month = (month < 10 ? "0" : "") + month;
      day = (day < 10 ? "0" : "") + day;
      return `${year}-${month}-${day}`;
    },
    time() {
      let { defaultValue } = this.field.settings;
      defaultValue = new Date(parseDate(defaultValue));
      if (!(defaultValue instanceof Date) || isNaN(defaultValue)) {
        return null;
      }
      let hour = defaultValue.getHours();
      let min = defaultValue.getMinutes();
      let sec = defaultValue.getSeconds();
      hour = (hour < 10 ? "0" : "") + hour;
      min = (min < 10 ? "0" : "") + min;
      sec = (sec < 10 ? "0" : "") + sec;
      return `${hour}:${min}:${sec}`;
    },
    fields() {
      const chars = {
        Y: "year",
        m: "month",
        d: "day",
        H: "hour",
        h: "hour",
        i: "minute",
        s: "second",
        A: "ampm"
      };
      const format = (this.field.settings.includeDate ? this.field.settings.dateFormat : "") + (this.field.settings.includeTime ? this.field.settings.timeFormat : "");
      const dateFields = [];
      let defaultValue = new Date();
      if (this.field.settings.defaultValue && this.field.settings.defaultValue.length) {
        defaultValue = new Date(parseDate(this.field.settings.defaultValue));
      }
      for (const char of format.replace(/[.\-:/ ]/g, "").split("")) {
        let value = null;
        if (defaultValue) {
          switch (char) {
            case "Y":
              value = defaultValue.getFullYear();
              break;
            case "m":
              value = defaultValue.toLocaleString("default", { month: "long" });
              break;
            case "d":
              value = defaultValue.getDate();
              break;
            case "H":
              value = (defaultValue.getHours() + 24) % 12 || 12;
              break;
            case "h":
              value = defaultValue.getHours();
              break;
            case "i":
              value = defaultValue.getMinutes();
              break;
            case "s":
              value = defaultValue.getSeconds();
              break;
            case "A":
              value = defaultValue.getHours() >= 12 ? "PM" : "AM";
              break;
          }
        }
        dateFields.push({
          char,
          value,
          label: this.field.settings[`${chars[char]}Label`],
          placeholder: this.field.settings[`${chars[char]}Placeholder`]
        });
      }
      return dateFields;
    }
  }
};
const _hoisted_1$7 = {
  key: 0,
  class: "fui-row"
};
const _hoisted_2$7 = {
  key: 0,
  class: "fui-col-auto"
};
const _hoisted_3$7 = {
  key: 0,
  class: "fui-field-label"
};
const _hoisted_4$6 = { class: "fui-field-preview" };
const _hoisted_5$6 = ["value"];
const _hoisted_6$5 = { class: "fui-field-icon" };
const _hoisted_7$5 = {
  key: 1,
  class: "fui-col-auto"
};
const _hoisted_8$5 = {
  key: 0,
  class: "fui-field-label"
};
const _hoisted_9$5 = { class: "fui-field-preview" };
const _hoisted_10$3 = ["value"];
const _hoisted_11$2 = { class: "fui-field-icon" };
const _hoisted_12$2 = { key: 1 };
const _hoisted_13$2 = { class: "fui-row" };
const _hoisted_14$2 = { class: "fui-field-preview" };
const _hoisted_15$2 = { class: "fui-field-label" };
const _hoisted_16$2 = { class: "fui-field-select" };
const _hoisted_17$2 = {
  value: "",
  selected: ""
};
const _hoisted_18$2 = { key: 2 };
const _hoisted_19$2 = { class: "fui-row" };
const _hoisted_20$2 = { class: "fui-field-preview" };
const _hoisted_21$2 = { class: "fui-field-label" };
const _hoisted_22$2 = ["placeholder", "value"];
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    $props.field.settings.displayType === "calendar" ? (openBlock(), createElementBlock("div", _hoisted_1$7, [
      $props.field.settings.includeDate ? (openBlock(), createElementBlock("div", _hoisted_2$7, [
        $props.field.settings.includeTime && $props.field.settings.timeLabel ? (openBlock(), createElementBlock("label", _hoisted_3$7, toDisplayString($props.field.name), 1)) : createCommentVNode("v-if", true),
        createBaseVNode("div", _hoisted_4$6, [
          createBaseVNode("input", {
            type: "text",
            class: "fui-field-input",
            value: $options.date
          }, null, 8, _hoisted_5$6),
          createBaseVNode("span", _hoisted_6$5, [
            renderSlot(_ctx.$slots, "default")
          ])
        ])
      ])) : createCommentVNode("v-if", true),
      $props.field.settings.includeTime ? (openBlock(), createElementBlock("div", _hoisted_7$5, [
        $props.field.settings.timeLabel && $props.field.settings.includeDate ? (openBlock(), createElementBlock("label", _hoisted_8$5, toDisplayString($props.field.settings.timeLabel), 1)) : createCommentVNode("v-if", true),
        createBaseVNode("div", _hoisted_9$5, [
          $props.field.settings.includeTime ? (openBlock(), createElementBlock("input", {
            key: 0,
            type: "text",
            class: "fui-field-input",
            value: $options.time
          }, null, 8, _hoisted_10$3)) : createCommentVNode("v-if", true),
          createBaseVNode("span", _hoisted_11$2, [
            renderSlot(_ctx.$slots, "default")
          ])
        ])
      ])) : createCommentVNode("v-if", true)
    ])) : $props.field.settings.displayType === "dropdowns" ? (openBlock(), createElementBlock("div", _hoisted_12$2, [
      createBaseVNode("div", _hoisted_13$2, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($options.fields, (subfield) => {
          return openBlock(), createElementBlock("div", {
            key: subfield.char,
            class: "fui-col-auto"
          }, [
            createBaseVNode("div", _hoisted_14$2, [
              createBaseVNode("label", _hoisted_15$2, toDisplayString(subfield.label), 1),
              createBaseVNode("select", _hoisted_16$2, [
                createBaseVNode("option", _hoisted_17$2, toDisplayString(subfield.value !== null ? subfield.value : subfield.placeholder), 1)
              ])
            ])
          ]);
        }), 128))
      ])
    ])) : $props.field.settings.displayType === "inputs" ? (openBlock(), createElementBlock("div", _hoisted_18$2, [
      createBaseVNode("div", _hoisted_19$2, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($options.fields, (subfield) => {
          return openBlock(), createElementBlock("div", {
            key: subfield.char,
            class: "fui-col-auto"
          }, [
            createBaseVNode("div", _hoisted_20$2, [
              createBaseVNode("label", _hoisted_21$2, toDisplayString(subfield.label), 1),
              createBaseVNode("input", {
                type: "text",
                class: "fui-field-input",
                placeholder: subfield.placeholder,
                value: subfield.value !== null ? subfield.value : subfield.placeholder
              }, null, 8, _hoisted_22$2)
            ])
          ]);
        }), 128))
      ])
    ])) : createCommentVNode("v-if", true)
  ]);
}
var DatePreview = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9], ["__file", "/Users/joshcrawford/public_html/craft4-plugins/formie/src/web/assets/forms/src/js/components/DatePreview.vue"]]);
const _sfc_main$8 = {
  name: "ElementFieldPreview",
  props: {
    field: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      total: null,
      options: []
    };
  },
  computed: {
    sources() {
      return this.field.settings.sources;
    },
    source() {
      return this.field.settings.source;
    },
    displayType() {
      return this.field.settings.displayType;
    },
    defaultValue() {
      if (this.field.defaultValueOptions) {
        if (this.field.defaultValueOptions.length && this.field.defaultValueOptions[0]) {
          return this.field.defaultValueOptions[0];
        }
      }
      return {};
    }
  },
  watch: {
    sources: debounce(function(newValue) {
      this.updateSources();
    }, 2e3),
    source: debounce(function(newValue) {
      this.updateSources();
    }, 2e3),
    displayType(newValue) {
      this.updateSources();
    }
  },
  created() {
    if (this.field.elements) {
      this.options = this.field.elements.options;
      this.total = this.field.elements.total;
    } else {
      this.updateSources();
    }
  },
  methods: {
    updateSources() {
      if (this.field.settings.displayType === "dropdown") {
        return;
      }
      const data = { field: this.field };
      Craft.sendActionRequest("POST", "formie/fields/get-element-select-options", { data }).then((response) => {
        this.options = response.data.options;
        this.total = response.data.total;
      });
    }
  }
};
const _hoisted_1$6 = { key: 0 };
const _hoisted_2$6 = ["multiple"];
const _hoisted_3$6 = { value: "" };
const _hoisted_4$5 = ["selected"];
const _hoisted_5$5 = { key: 1 };
const _hoisted_6$4 = ["value", "checked"];
const _hoisted_7$4 = {
  key: 0,
  class: "fui-field-instructions"
};
const _hoisted_8$4 = { key: 2 };
const _hoisted_9$4 = ["value", "checked"];
const _hoisted_10$2 = {
  key: 0,
  class: "fui-field-instructions"
};
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    $props.field.settings.displayType == "dropdown" ? (openBlock(), createElementBlock("div", _hoisted_1$6, [
      createBaseVNode("select", {
        class: "fui-field-select",
        multiple: $props.field.settings.multiple
      }, [
        createBaseVNode("option", _hoisted_3$6, toDisplayString($options.defaultValue.label || $props.field.settings.placeholder), 1),
        (openBlock(true), createElementBlock(Fragment, null, renderList($data.options, (option, index) => {
          return openBlock(), createElementBlock("option", {
            key: index,
            selected: $options.defaultValue.value === option.value ? true : false
          }, toDisplayString(option.label), 9, _hoisted_4$5);
        }), 128))
      ], 8, _hoisted_2$6)
    ])) : createCommentVNode("v-if", true),
    $props.field.settings.displayType == "checkboxes" ? (openBlock(), createElementBlock("div", _hoisted_5$5, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($data.options, (option, index) => {
        return openBlock(), createElementBlock("div", {
          key: index,
          class: "fui-field-checkbox"
        }, [
          createBaseVNode("input", {
            value: option.value,
            type: "checkbox",
            checked: $options.defaultValue.value === option.value ? true : false
          }, null, 8, _hoisted_6$4),
          createBaseVNode("label", null, toDisplayString(option.label), 1)
        ]);
      }), 128)),
      $data.total > $data.options.length ? (openBlock(), createElementBlock("div", _hoisted_7$4, "... " + toDisplayString($data.total - $data.options.length) + " " + toDisplayString(_ctx.t("formie", "more")), 1)) : createCommentVNode("v-if", true)
    ])) : createCommentVNode("v-if", true),
    $props.field.settings.displayType == "radio" ? (openBlock(), createElementBlock("div", _hoisted_8$4, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($data.options, (option, index) => {
        return openBlock(), createElementBlock("div", {
          key: index,
          class: "fui-field-radio"
        }, [
          createBaseVNode("input", {
            value: option.value,
            type: "radio",
            checked: $options.defaultValue.value === option.value ? true : false
          }, null, 8, _hoisted_9$4),
          createBaseVNode("label", null, toDisplayString(option.label), 1)
        ]);
      }), 128)),
      $data.total > $data.options.length ? (openBlock(), createElementBlock("div", _hoisted_10$2, "... " + toDisplayString($data.total - $data.options.length) + " " + toDisplayString(_ctx.t("formie", "more")), 1)) : createCommentVNode("v-if", true)
    ])) : createCommentVNode("v-if", true)
  ]);
}
var ElementFieldPreview = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8], ["__file", "/Users/joshcrawford/public_html/craft4-plugins/formie/src/web/assets/forms/src/js/components/ElementFieldPreview.vue"]]);
const _sfc_main$7 = {
  name: "FieldGroup",
  components: {
    FieldRow,
    DropzoneNewField
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    field() {
      const field = this.$store.getters["form/field"](this.id);
      if (!field) {
        return {
          settings: {}
        };
      }
      return field;
    },
    fieldType() {
      return this.$store.getters["fieldtypes/fieldtype"](this.field.type);
    }
  }
};
const _hoisted_1$5 = { class: "fui-fields-collection" };
const _hoisted_2$5 = { class: "fui-row no-padding" };
const _hoisted_3$5 = { class: "fui-col-12" };
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_field_row = resolveComponent("field-row");
  const _component_dropzone_new_field = resolveComponent("dropzone-new-field");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["fui-group-fields", { "fui-empty": $options.field.rows.length === 0 }])
  }, [
    createBaseVNode("div", _hoisted_1$5, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($options.field.rows, (row, index) => {
        return openBlock(), createBlock(_component_field_row, mergeProps({
          ref_for: true,
          ref: "rows",
          key: row.id,
          "row-index": index,
          "field-id": $props.id,
          "parent-field-id": $options.field.vid,
          "is-nested": true
        }, row), null, 16, ["row-index", "field-id", "parent-field-id"]);
      }), 128)),
      createBaseVNode("div", _hoisted_2$5, [
        createBaseVNode("div", _hoisted_3$5, [
          !$options.field.rows.length ? (openBlock(), createBlock(_component_dropzone_new_field, {
            key: 0,
            "field-id": $props.id,
            "is-nested": true
          }, null, 8, ["field-id"])) : createCommentVNode("v-if", true)
        ])
      ])
    ])
  ], 2);
}
var FieldGroup = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["__file", "/Users/joshcrawford/public_html/craft4-plugins/formie/src/web/assets/forms/src/js/components/FieldGroup.vue"]]);
const _sfc_main$6 = {
  name: "FieldRepeater",
  components: {
    FieldRow,
    DropzoneNewField
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    field() {
      const field = this.$store.getters["form/field"](this.id);
      if (!field) {
        return {
          settings: {}
        };
      }
      return field;
    },
    fieldType() {
      return this.$store.getters["fieldtypes/fieldtype"](this.field.type);
    }
  }
};
const _hoisted_1$4 = { class: "fui-fields-collection" };
const _hoisted_2$4 = { class: "fui-row no-padding" };
const _hoisted_3$4 = { class: "fui-col-12" };
const _hoisted_4$4 = {
  key: 0,
  class: "fui-repeater-button"
};
const _hoisted_5$4 = ["innerHTML"];
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_field_row = resolveComponent("field-row");
  const _component_dropzone_new_field = resolveComponent("dropzone-new-field");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["fui-repeater-fields", { "fui-empty": $options.field.rows.length === 0 }])
  }, [
    createBaseVNode("div", _hoisted_1$4, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($options.field.rows, (row, index) => {
        return openBlock(), createBlock(_component_field_row, mergeProps({
          ref_for: true,
          ref: "rows",
          key: row.id,
          "row-index": index,
          "field-id": $props.id,
          "parent-field-id": $options.field.vid,
          "is-nested": true
        }, row), null, 16, ["row-index", "field-id", "parent-field-id"]);
      }), 128)),
      createBaseVNode("div", _hoisted_2$4, [
        createBaseVNode("div", _hoisted_3$4, [
          !$options.field.rows.length ? (openBlock(), createBlock(_component_dropzone_new_field, {
            key: 0,
            "field-id": $props.id,
            "is-nested": true
          }, null, 8, ["field-id"])) : createCommentVNode("v-if", true)
        ])
      ]),
      $options.field.rows.length !== 0 ? (openBlock(), createElementBlock("div", _hoisted_4$4, [
        createBaseVNode("span", {
          class: "fui-field-pill-icon",
          innerHTML: $options.fieldType.icon
        }, null, 8, _hoisted_5$4),
        createTextVNode(" " + toDisplayString($options.field.settings.addLabel), 1)
      ])) : createCommentVNode("v-if", true)
    ])
  ], 2);
}
var FieldRepeater = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["__file", "/Users/joshcrawford/public_html/craft4-plugins/formie/src/web/assets/forms/src/js/components/FieldRepeater.vue"]]);
const _sfc_main$5 = {
  name: "HtmlBlocks",
  components: {
    EditorContent
  },
  props: {
    content: {
      type: [String, Array],
      default: ""
    }
  },
  data() {
    return {
      editor: null
    };
  },
  watch: {
    content(newValue) {
      this.editor.chain().setContent(this.valueToContent(newValue), true).run();
    }
  },
  mounted() {
    this.editor = new Editor({
      extensions: this.getExtensions(),
      content: this.valueToContent(this.content)
    });
  },
  beforeUnmount() {
    if (this.editor) {
      this.editor.destroy();
    }
  },
  methods: {
    valueToContent(value) {
      if (!value) {
        return null;
      }
      if (!Array.isArray(value)) {
        try {
          value = JSON.parse(value);
        } catch (e) {
          console.log(e);
          console.log(value);
        }
      }
      return value.length ? { type: "doc", content: value } : null;
    },
    getExtensions() {
      const extensions = [
        Document$5,
        Dropcursor,
        Gapcursor,
        HardBreak,
        Paragraph,
        Text$1,
        FocusClasses.configure({ className: "has-focus", mode: "deepest" }),
        Bold,
        Code,
        Highlight,
        Italic,
        Strike,
        Subscript,
        Superscript,
        Underline,
        Blockquote,
        BulletList,
        CodeBlock,
        Heading.configure({ levels: [1, 2, 3, 4, 5, 6] }),
        HorizontalRule,
        ListItem,
        OrderedList,
        History,
        TextAlign.configure({
          types: ["heading", "paragraph"],
          defaultAlignment: "start"
        }),
        Link.configure({ openOnClick: false })
      ];
      return extensions;
    }
  }
};
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_editor_content = resolveComponent("editor-content");
  return openBlock(), createBlock(_component_editor_content, { editor: $data.editor }, null, 8, ["editor"]);
}
var HtmlBlocks = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__file", "/Users/joshcrawford/public_html/craft4-plugins/formie/src/web/assets/forms/src/js/components/HtmlBlocks.vue"]]);
var NotificationPreview_vue_vue_type_style_index_0_lang = /* @__PURE__ */ (() => ".fui-email-preview {\n  position: relative;\n  box-shadow: 0 0 0 1px rgba(49, 49, 93, 0.05), 0 2px 5px 0 rgba(49, 49, 93, 0.075), 0 1px 3px 0 rgba(49, 49, 93, 0.15);\n  background-color: #fff;\n  border-radius: 4px;\n}\n.fui-email-header,\n.fui-email-footer {\n  background: #f5f8fc;\n  width: 100%;\n  height: 20px;\n}\n.fui-email-header {\n  border-bottom: 1px #e5e5e5 solid;\n  border-radius: 4px 4px 0 0;\n}\n.fui-email-footer {\n  border-top: 1px #e5e5e5 solid;\n  border-radius: 0 0 4px 4px;\n}\n.fui-email-meta {\n  display: flex;\n  font-size: 13px;\n  padding: 4px 0;\n  border-bottom: 1px #e5e5e5 solid;\n}\n.fui-email-meta-label {\n  width: 75px;\n  text-align: right;\n  font-weight: 700;\n  color: #b2bac1;\n  margin-right: 8px;\n  flex: 0 0 auto;\n}\n.fui-email-body {\n  min-height: 20rem;\n  padding: 16px;\n}\n.fui-email-preview .fui-error-pane,\n.fui-email-preview .fui-loading-pane {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: #fff;\n  background: rgba(255, 255, 255, 0.7);\n}\n.fui-email-preview .fui-loading {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  background: #fff;\n}\n.fui-notification-preview .fui-refresh-btn {\n  padding: 5px 10px;\n  font-size: 12px;\n  font-weight: 600;\n  height: auto;\n}\n.fui-notification-preview .field {\n  justify-content: space-between;\n}\n.fui-email-preview .fui-error-pane {\n  align-items: center;\n  justify-content: center;\n  display: flex;\n}\n.fui-email-preview .fui-error-pane [data-icon] {\n  display: block;\n  font-size: 3em;\n  margin-bottom: 0.5rem;\n}\n.fui-email-preview .fui-error-content {\n  text-align: center;\n  max-width: 35rem;\n}")();
const _sfc_main$4 = {
  name: "NotificationPreview",
  data() {
    return {
      email: {},
      error: false,
      errorMessage: "",
      loading: false
    };
  },
  computed: __spreadProps(__spreadValues({}, mapState({
    form: (state) => {
      return state.form;
    }
  })), {
    notification() {
      return this.$parent.$parent.$parent.$parent.$parent.node._value;
    },
    isStencil() {
      return this.$store.state.form.isStencil;
    }
  }),
  created() {
    this.updatePreview();
  },
  methods: {
    updateiFrame() {
      this.$nextTick().then(() => {
        const $iframe = this.$el.querySelector("#email-iframe");
        if ($iframe && this.email.body) {
          const doc = $iframe.contentWindow.document;
          if (doc) {
            doc.open();
            doc.write(`<html><head><title></title></head><body>${this.email.body}</body></html>`);
            doc.close();
          }
        }
      });
    },
    updatePreview() {
      this.error = false;
      this.errorMessage = "";
      this.loading = true;
      const data = {
        handle: this.form.handle,
        notification: this.notification
      };
      if (!this.isStencil) {
        data.formId = this.form.id;
      }
      Craft.sendActionRequest("POST", "formie/email/preview", { data }).then((response) => {
        this.loading = false;
        if (response.data.error) {
          this.error = true;
          this.errorMessage = Craft.t("formie", "An error occurred.");
          if (response.data.error) {
            this.errorMessage += `<br><br><code>${response.data.error}</code>`;
          }
          return;
        }
        this.email = response.data;
        this.updateiFrame();
      }).catch((error) => {
        this.loading = false;
        this.error = true;
        this.errorMessage = error;
        if (error.response.data.error) {
          this.errorMessage += `<br><br><code>${error.response.data.error}</code>`;
        }
      });
    },
    emailAddress(object) {
      if (!object) {
        return "";
      }
      const [email] = Object.keys(object);
      if (object[email]) {
        return `${object[email]} <${email}>`;
      }
      return email;
    }
  }
};
const _hoisted_1$3 = { class: "fui-notification-preview" };
const _hoisted_2$3 = { class: "field field-wrapper flex" };
const _hoisted_3$3 = { class: "heading" };
const _hoisted_4$3 = { class: "" };
const _hoisted_5$3 = { class: "instructions" };
const _hoisted_6$3 = { class: "" };
const _hoisted_7$3 = { class: "fui-email-preview" };
const _hoisted_8$3 = /* @__PURE__ */ createBaseVNode("div", { class: "fui-email-header" }, null, -1);
const _hoisted_9$3 = { class: "fui-email-meta" };
const _hoisted_10$1 = { class: "fui-email-meta-label" };
const _hoisted_11$1 = { class: "fui-email-meta-value" };
const _hoisted_12$1 = {
  key: 0,
  class: "fui-email-meta"
};
const _hoisted_13$1 = { class: "fui-email-meta-label" };
const _hoisted_14$1 = { class: "fui-email-meta-value" };
const _hoisted_15$1 = {
  key: 1,
  class: "fui-email-meta"
};
const _hoisted_16$1 = { class: "fui-email-meta-label" };
const _hoisted_17$1 = { class: "fui-email-meta-value" };
const _hoisted_18$1 = { class: "fui-email-meta" };
const _hoisted_19$1 = { class: "fui-email-meta-label" };
const _hoisted_20$1 = { class: "fui-email-meta-value" };
const _hoisted_21$1 = {
  key: 2,
  class: "fui-email-meta"
};
const _hoisted_22$1 = { class: "fui-email-meta-label" };
const _hoisted_23$1 = { class: "fui-email-meta-value" };
const _hoisted_24$1 = { class: "fui-email-meta" };
const _hoisted_25$1 = { class: "fui-email-meta-label" };
const _hoisted_26$1 = { class: "fui-email-meta-value" };
const _hoisted_27$1 = { class: "fui-email-body" };
const _hoisted_28 = {
  key: 0,
  id: "email-iframe",
  src: "about:blank",
  frameborder: "0",
  style: { "height": "100vh", "width": "100%" }
};
const _hoisted_29 = {
  key: 1,
  class: "warning with-icon"
};
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("div", { class: "fui-email-footer" }, null, -1);
const _hoisted_31 = {
  key: 3,
  class: "fui-loading-pane"
};
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("div", { class: "fui-loading fui-loading-lg" }, null, -1);
const _hoisted_33 = [
  _hoisted_32
];
const _hoisted_34 = {
  key: 4,
  class: "fui-error-pane error"
};
const _hoisted_35 = { class: "fui-error-content" };
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("span", { "data-icon": "alert" }, null, -1);
const _hoisted_37 = ["innerHTML"];
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    createBaseVNode("div", _hoisted_2$3, [
      createBaseVNode("div", _hoisted_3$3, [
        createBaseVNode("label", _hoisted_4$3, toDisplayString(_ctx.t("formie", "Email Preview")), 1),
        createBaseVNode("div", _hoisted_5$3, [
          createBaseVNode("p", null, toDisplayString(_ctx.t("formie", "The example below shows a preview of this email notification.")), 1)
        ])
      ]),
      createBaseVNode("div", _hoisted_6$3, [
        createBaseVNode("a", {
          href: "#",
          class: normalizeClass(["btn submit fui-refresh-btn", { "fui-loading fui-loading-sm": $data.loading }]),
          onClick: _cache[0] || (_cache[0] = withModifiers((...args) => $options.updatePreview && $options.updatePreview(...args), ["prevent"]))
        }, toDisplayString(_ctx.t("formie", "Refresh")), 3)
      ])
    ]),
    createBaseVNode("div", _hoisted_7$3, [
      _hoisted_8$3,
      createBaseVNode("div", _hoisted_9$3, [
        createBaseVNode("div", _hoisted_10$1, toDisplayString(_ctx.t("formie", "To:")), 1),
        createBaseVNode("div", _hoisted_11$1, toDisplayString($options.emailAddress($data.email.to)), 1)
      ]),
      $data.email.cc ? (openBlock(), createElementBlock("div", _hoisted_12$1, [
        createBaseVNode("div", _hoisted_13$1, toDisplayString(_ctx.t("formie", "Cc:")), 1),
        createBaseVNode("div", _hoisted_14$1, toDisplayString($options.emailAddress($data.email.cc)), 1)
      ])) : createCommentVNode("v-if", true),
      $data.email.bcc ? (openBlock(), createElementBlock("div", _hoisted_15$1, [
        createBaseVNode("div", _hoisted_16$1, toDisplayString(_ctx.t("formie", "Bcc:")), 1),
        createBaseVNode("div", _hoisted_17$1, toDisplayString($options.emailAddress($data.email.bcc)), 1)
      ])) : createCommentVNode("v-if", true),
      createBaseVNode("div", _hoisted_18$1, [
        createBaseVNode("div", _hoisted_19$1, toDisplayString(_ctx.t("formie", "Subject:")), 1),
        createBaseVNode("div", _hoisted_20$1, toDisplayString($data.email.subject), 1)
      ]),
      $data.email.replyTo ? (openBlock(), createElementBlock("div", _hoisted_21$1, [
        createBaseVNode("div", _hoisted_22$1, toDisplayString(_ctx.t("formie", "Reply To:")), 1),
        createBaseVNode("div", _hoisted_23$1, toDisplayString($options.emailAddress($data.email.replyTo)), 1)
      ])) : createCommentVNode("v-if", true),
      createBaseVNode("div", _hoisted_24$1, [
        createBaseVNode("div", _hoisted_25$1, toDisplayString(_ctx.t("formie", "From:")), 1),
        createBaseVNode("div", _hoisted_26$1, toDisplayString($options.emailAddress($data.email.from)), 1)
      ]),
      createBaseVNode("div", _hoisted_27$1, [
        createCommentVNode(" Note the odd use of length - we'll get an empty `<p>` back for empty "),
        $data.email.body && $data.email.body.length > 10 ? (openBlock(), createElementBlock("iframe", _hoisted_28)) : (openBlock(), createElementBlock("div", _hoisted_29, toDisplayString(_ctx.t("formie", "No email content.")), 1))
      ]),
      _hoisted_30,
      $data.loading ? (openBlock(), createElementBlock("div", _hoisted_31, _hoisted_33)) : createCommentVNode("v-if", true),
      $data.error ? (openBlock(), createElementBlock("div", _hoisted_34, [
        createBaseVNode("div", _hoisted_35, [
          _hoisted_36,
          createBaseVNode("span", {
            class: "error",
            innerHTML: $data.errorMessage
          }, null, 8, _hoisted_37)
        ])
      ])) : createCommentVNode("v-if", true)
    ])
  ]);
}
var NotificationPreview = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__file", "/Users/joshcrawford/public_html/craft4-plugins/formie/src/web/assets/forms/src/js/components/NotificationPreview.vue"]]);
var NotificationTest_vue_vue_type_style_index_0_lang = /* @__PURE__ */ (() => ".fui-test-input {\n  display: flex;\n}\n.fui-test-input .text {\n  margin-right: 1rem;\n}\n.fui-notification-test .fui-message-pane {\n  margin-top: 10px;\n}")();
const _sfc_main$3 = {
  name: "NotificationTest",
  data() {
    return {
      to: null,
      error: false,
      success: false,
      loading: false,
      message: ""
    };
  },
  computed: __spreadProps(__spreadValues({}, mapState({
    form: (state) => {
      return state.form;
    }
  })), {
    notification() {
      return this.$parent.$parent.$parent.$parent.$parent.node._value;
    }
  }),
  created() {
    if (this.$attrs.userEmail) {
      this.to = this.$attrs.userEmail;
    }
  },
  methods: {
    sendTestEmail() {
      this.error = false;
      this.success = false;
      this.loading = true;
      this.message = "";
      const data = {
        formId: this.form.id,
        notification: this.notification,
        to: this.to
      };
      Craft.sendActionRequest("POST", "formie/email/send-test-email", { data }).then((response) => {
        this.loading = false;
        if (response.data.success) {
          this.success = true;
          this.message = Craft.t("formie", "Email sent successfully. Please check your email.");
        }
        if (response.data.error) {
          this.error = true;
          this.message = Craft.t("formie", "Error sending test email.");
          if (response.data.error) {
            this.message += `<br><br><code>${response.data.error}</code>`;
          }
        }
      }).catch((error) => {
        this.loading = false;
        this.error = true;
        this.message = error;
        if (error.response.data.error) {
          this.message += `<br><br><code>${error.response.data.error}</code>`;
        }
      });
    }
  }
};
const _hoisted_1$2 = { class: "fui-notification-test" };
const _hoisted_2$2 = { class: "field field-wrapper" };
const _hoisted_3$2 = { class: "heading" };
const _hoisted_4$2 = { class: "" };
const _hoisted_5$2 = { class: "instructions" };
const _hoisted_6$2 = { class: "fui-test-input" };
const _hoisted_7$2 = { class: "fui-message-content" };
const _hoisted_8$2 = {
  key: 0,
  "data-icon": "alert"
};
const _hoisted_9$2 = ["innerHTML"];
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    createBaseVNode("div", _hoisted_2$2, [
      createBaseVNode("div", _hoisted_3$2, [
        createBaseVNode("label", _hoisted_4$2, toDisplayString(_ctx.t("formie", "Send Test Email")), 1),
        createBaseVNode("div", _hoisted_5$2, [
          createBaseVNode("p", null, toDisplayString(_ctx.t("formie", "Use the form below to send a test email to the nominated email address.")), 1)
        ])
      ]),
      createBaseVNode("div", _hoisted_6$2, [
        withDirectives(createBaseVNode("input", {
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.to = $event),
          class: "text fullwidth",
          type: "text"
        }, null, 512), [
          [vModelText, $data.to]
        ]),
        createBaseVNode("a", {
          href: "#",
          class: normalizeClass(["btn submit fui-refresh-btn", { "fui-loading fui-loading-sm": $data.loading }]),
          onClick: _cache[1] || (_cache[1] = withModifiers((...args) => $options.sendTestEmail && $options.sendTestEmail(...args), ["prevent"]))
        }, toDisplayString(_ctx.t("formie", "Send Test Email")), 3)
      ])
    ]),
    $data.error || $data.success ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(["fui-message-pane", { "error": $data.error, "success": $data.success }])
    }, [
      createBaseVNode("div", _hoisted_7$2, [
        $data.error ? (openBlock(), createElementBlock("span", _hoisted_8$2)) : createCommentVNode("v-if", true),
        createBaseVNode("span", { innerHTML: $data.message }, null, 8, _hoisted_9$2)
      ])
    ], 2)) : createCommentVNode("v-if", true)
  ]);
}
var NotificationTest = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/Users/joshcrawford/public_html/craft4-plugins/formie/src/web/assets/forms/src/js/components/NotificationTest.vue"]]);
const _sfc_main$2 = {
  name: "FieldSelect",
  props: {
    label: {
      type: String,
      default: ""
    },
    instructions: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      error: false,
      errorMessage: "",
      loading: false,
      proxyValue: ""
    };
  },
  created() {
    this.proxyValue = this.value || "";
  },
  methods: {
    getFieldOptions() {
      const fields = this.$store.getters["form/fields"];
      const customFields = [];
      fields.forEach((field) => {
        if (field.isCosmetic) {
          return;
        }
        if (!toBoolean(field.isNested)) {
          customFields.push({ label: truncate(field.label, { length: 60 }), value: `{${field.handle}}` });
          if (field.subfieldOptions && field.hasSubfields) {
            field.subfieldOptions.forEach((subfield) => {
              customFields.push({
                label: `${truncate(field.label, { length: 60 })}: ${truncate(subfield.label, { length: 60 })}`,
                value: `{${field.handle}[${subfield.handle}]}`
              });
            });
          }
          if (toBoolean(field.supportsNested) && field.rows) {
            field.rows.forEach((row) => {
              row.fields.forEach((subfield) => {
                customFields.push({
                  label: `${truncate(field.label, { length: 60 })}: ${truncate(subfield.label, { length: 60 })}`,
                  value: `{${field.handle}[${subfield.handle}]}`
                });
                if (subfield.subfieldOptions && subfield.hasSubfields) {
                  subfield.subfieldOptions.forEach((subsubfield) => {
                    customFields.push({
                      label: `${truncate(field.label, { length: 60 })}: ${truncate(subfield.label, { length: 60 })}: ${truncate(subsubfield.label, { length: 60 })}`,
                      value: `{${field.handle}[${subfield.handle}[${subsubfield.handle}]]}`
                    });
                  });
                }
              });
            });
          }
        }
      });
      return customFields;
    }
  }
};
const _hoisted_1$1 = { class: "field" };
const _hoisted_2$1 = { class: "heading" };
const _hoisted_3$1 = ["id", "for"];
const _hoisted_4$1 = { class: "instructions" };
const _hoisted_5$1 = { class: "fui-element-mapping input ltr" };
const _hoisted_6$1 = { class: "select" };
const _hoisted_7$1 = ["name"];
const _hoisted_8$1 = { value: "" };
const _hoisted_9$1 = ["value"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("div", _hoisted_2$1, [
      createBaseVNode("label", {
        id: $props.id + "-label",
        for: $props.id
      }, toDisplayString($props.label), 9, _hoisted_3$1),
      createBaseVNode("div", _hoisted_4$1, [
        createBaseVNode("p", null, toDisplayString($props.instructions), 1)
      ])
    ]),
    createBaseVNode("div", _hoisted_5$1, [
      createBaseVNode("div", _hoisted_6$1, [
        withDirectives(createBaseVNode("select", {
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.proxyValue = $event),
          name: $props.name
        }, [
          createBaseVNode("option", _hoisted_8$1, toDisplayString(_ctx.t("formie", "Always Opt-in")), 1),
          (openBlock(true), createElementBlock(Fragment, null, renderList($options.getFieldOptions(), (option, j) => {
            return openBlock(), createElementBlock("option", {
              key: j,
              value: option.value
            }, toDisplayString(option.label), 9, _hoisted_9$1);
          }), 128))
        ], 8, _hoisted_7$1), [
          [vModelSelect, $data.proxyValue]
        ])
      ])
    ])
  ]);
}
var FieldSelect = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/Users/joshcrawford/public_html/craft4-plugins/formie/src/web/assets/forms/src/js/components/FieldSelect.vue"]]);
var IntegrationFieldMapping_vue_vue_type_style_index_0_lang = /* @__PURE__ */ (() => ".fui-table-label {\n  min-height: 34px;\n  display: flex;\n  align-items: center;\n  margin: 0 10px;\n  text-align: left;\n}")();
const _sfc_main$1 = {
  name: "IntegrationFieldMapping",
  props: {
    label: {
      type: String,
      default: ""
    },
    instructions: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    nameLabel: {
      type: String,
      default: ""
    },
    rows: {
      type: Array,
      default: () => {
        return [];
      }
    },
    value: {
      type: [Object, String],
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      error: false,
      errorMessage: "",
      loading: false,
      proxyValue: {}
    };
  },
  watch: {
    rows(newValue) {
      this.resetValues();
    }
  },
  created() {
    this.proxyValue = this.value;
    if (!this.proxyValue) {
      this.proxyValue = {};
    }
    if (!Object.keys(this.proxyValue).length) {
      this.resetValues();
    }
  },
  methods: {
    resetValues() {
      this.rows.forEach((row) => {
        if (!this.proxyValue[row.handle]) {
          this.proxyValue[row.handle] = "";
        }
      });
    },
    getFieldOptions(providerOptions) {
      const fields = this.$store.getters["form/fields"];
      const options = [];
      if (!isEmpty(providerOptions)) {
        options.push(providerOptions);
      }
      options.push({
        label: Craft.t("formie", "Submission"),
        options: [
          { label: Craft.t("formie", "Title"), value: "{submission:title}" },
          { label: Craft.t("formie", "ID"), value: "{submission:id}" },
          { label: Craft.t("formie", "Form Name"), value: "{submission:formName}" }
        ]
      });
      const customFields = [];
      fields.forEach((field) => {
        if (field.isCosmetic) {
          return;
        }
        if (!toBoolean(field.isNested)) {
          customFields.push({ label: truncate(field.label, { length: 60 }), value: `{${field.handle}}` });
          if (field.subfieldOptions && field.hasSubfields) {
            field.subfieldOptions.forEach((subfield) => {
              customFields.push({
                label: `${truncate(field.label, { length: 60 })}: ${truncate(subfield.label, { length: 60 })}`,
                value: `{${field.handle}[${subfield.handle}]}`
              });
            });
          }
          if (toBoolean(field.supportsNested) && field.rows) {
            field.rows.forEach((row) => {
              row.fields.forEach((subfield) => {
                customFields.push({
                  label: `${truncate(field.label, { length: 60 })}: ${truncate(subfield.label, { length: 60 })}`,
                  value: `{${field.handle}[${subfield.handle}]}`
                });
                if (subfield.subfieldOptions && subfield.hasSubfields) {
                  subfield.subfieldOptions.forEach((subsubfield) => {
                    customFields.push({
                      label: `${truncate(field.label, { length: 60 })}: ${truncate(subfield.label, { length: 60 })}: ${truncate(subsubfield.label, { length: 60 })}`,
                      value: `{${field.handle}[${subfield.handle}[${subsubfield.handle}]]}`
                    });
                  });
                }
              });
            });
          }
        }
      });
      options.push({
        label: Craft.t("formie", "Fields"),
        options: customFields
      });
      return options;
    }
  }
};
const _hoisted_1 = { class: "field" };
const _hoisted_2 = { class: "heading" };
const _hoisted_3 = ["id", "for"];
const _hoisted_4 = { class: "instructions" };
const _hoisted_5 = { class: "fui-element-mapping input ltr" };
const _hoisted_6 = ["name"];
const _hoisted_7 = {
  key: 0,
  class: "fui-loading-pane"
};
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", { class: "fui-loading fui-loading-lg" }, null, -1);
const _hoisted_9 = [
  _hoisted_8
];
const _hoisted_10 = {
  key: 1,
  class: "fui-error-pane error"
};
const _hoisted_11 = { class: "fui-error-content" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("span", { "data-icon": "alert" }, null, -1);
const _hoisted_13 = ["innerHTML"];
const _hoisted_14 = ["id"];
const _hoisted_15 = {
  scope: "col",
  class: "singleline-cell textual"
};
const _hoisted_16 = {
  scope: "col",
  class: "select-cell"
};
const _hoisted_17 = { key: 0 };
const _hoisted_18 = { colspan: "2" };
const _hoisted_19 = { class: "zilch" };
const _hoisted_20 = {
  class: "singleline-cell textual",
  style: { "width": "50%" }
};
const _hoisted_21 = {
  class: "select-cell",
  style: { "width": "50%" }
};
const _hoisted_22 = { class: "flex flex-nowrap" };
const _hoisted_23 = { class: "select small" };
const _hoisted_24 = ["onUpdate:modelValue", "name"];
const _hoisted_25 = { value: "" };
const _hoisted_26 = ["label"];
const _hoisted_27 = ["value"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("label", {
        id: $props.id + "-label",
        for: $props.id
      }, toDisplayString($props.label), 9, _hoisted_3),
      createBaseVNode("div", _hoisted_4, [
        createBaseVNode("p", null, toDisplayString($props.instructions), 1)
      ])
    ]),
    createBaseVNode("div", _hoisted_5, [
      createBaseVNode("input", {
        type: "hidden",
        name: $props.name,
        value: ""
      }, null, 8, _hoisted_6),
      $data.loading ? (openBlock(), createElementBlock("div", _hoisted_7, _hoisted_9)) : createCommentVNode("v-if", true),
      $data.error ? (openBlock(), createElementBlock("div", _hoisted_10, [
        createBaseVNode("div", _hoisted_11, [
          _hoisted_12,
          createBaseVNode("span", {
            class: "error",
            innerHTML: $data.errorMessage
          }, null, 8, _hoisted_13)
        ])
      ])) : createCommentVNode("v-if", true),
      createBaseVNode("table", {
        id: $props.id,
        class: "editable fullwidth"
      }, [
        createBaseVNode("thead", null, [
          createBaseVNode("tr", null, [
            createBaseVNode("th", _hoisted_15, toDisplayString(_ctx.t("formie", "{name} Field", { name: $props.nameLabel })), 1),
            createBaseVNode("th", _hoisted_16, toDisplayString(_ctx.t("formie", "Form Field")), 1)
          ])
        ]),
        createBaseVNode("tbody", null, [
          $props.rows.length === 0 ? (openBlock(), createElementBlock("tr", _hoisted_17, [
            createBaseVNode("td", _hoisted_18, [
              createBaseVNode("div", _hoisted_19, toDisplayString(_ctx.t("formie", "No fields available.")), 1)
            ])
          ])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList($props.rows, (row, index) => {
            return openBlock(), createElementBlock("tr", {
              key: index,
              "data-id": "0"
            }, [
              createBaseVNode("td", _hoisted_20, [
                createBaseVNode("span", {
                  class: normalizeClass(["fui-table-label", { "required": row.required }])
                }, toDisplayString(row.name), 3)
              ]),
              createBaseVNode("td", _hoisted_21, [
                createBaseVNode("div", _hoisted_22, [
                  createBaseVNode("div", _hoisted_23, [
                    withDirectives(createBaseVNode("select", {
                      "onUpdate:modelValue": ($event) => $data.proxyValue[row.handle] = $event,
                      name: $props.name + "[" + row.handle + "]"
                    }, [
                      createBaseVNode("option", _hoisted_25, toDisplayString(_ctx.t("formie", "Don\u2019t Include")), 1),
                      (openBlock(true), createElementBlock(Fragment, null, renderList($options.getFieldOptions(row.options), (optgroup, i) => {
                        return openBlock(), createElementBlock("optgroup", {
                          key: i,
                          label: optgroup.label
                        }, [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(optgroup.options, (option, j) => {
                            return openBlock(), createElementBlock("option", {
                              key: j,
                              value: option.value
                            }, toDisplayString(option.label), 9, _hoisted_27);
                          }), 128))
                        ], 8, _hoisted_26);
                      }), 128))
                    ], 8, _hoisted_24), [
                      [vModelSelect, $data.proxyValue[row.handle]]
                    ])
                  ])
                ])
              ])
            ]);
          }), 128))
        ])
      ], 8, _hoisted_14)
    ])
  ]);
}
var IntegrationFieldMapping = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/Users/joshcrawford/public_html/craft4-plugins/formie/src/web/assets/forms/src/js/components/IntegrationFieldMapping.vue"]]);
const _sfc_main = {
  name: "IntegrationFormSettings",
  props: {
    handle: {
      type: String,
      default: ""
    },
    source: {
      type: String,
      default: ""
    },
    formSettings: {
      type: [Object, Array],
      default: () => {
      }
    },
    values: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {
      loading: false,
      error: false,
      errorMessage: "",
      success: false,
      mounted: false,
      settings: {},
      sourceId: "",
      model: {},
      globalParams: {}
    };
  },
  computed: {
    form() {
      return this.$store.state.form;
    }
  },
  created() {
    this.settings = this.formSettings;
    this.sourceId = this.source;
    if (this.values) {
      Object.keys(this.values).forEach((prop2) => {
        this.model[prop2] = this.values[prop2];
      });
    }
  },
  mounted() {
    setTimeout(() => {
      this.mounted = true;
      setTimeout(() => {
        Craft.initUiElements(this.$el.parentNode);
      }, 50);
    }, 50);
  },
  methods: {
    get(object, key) {
      return get(object, key);
    },
    isEmpty(object) {
      return isEmpty(object);
    },
    input(prop2, value) {
      set(this, prop2, value);
    },
    getSourceFields(key) {
      let fields = [];
      if (this.sourceId) {
        const sources = get(this.settings, key, []);
        if (Array.isArray(sources)) {
          sources.forEach((item) => {
            if (item.id === this.sourceId) {
              fields = item.fields;
            }
          });
        } else {
          Object.keys(sources).forEach((key2) => {
            if (Array.isArray(sources[key2])) {
              sources[key2].forEach((item) => {
                if (item.id === this.sourceId) {
                  fields = item.fields;
                }
              });
            }
          });
        }
      }
      return fields;
    },
    refresh(payloadParams = {}) {
      this.success = false;
      this.error = false;
      this.errorMessage = "";
      this.loading = true;
      const data = __spreadValues(__spreadValues({
        formId: this.form.id,
        integration: this.handle
      }, this.globalParams), payloadParams);
      Craft.sendActionRequest("POST", "formie/integrations/form-settings", { data }).then((response) => {
        this.loading = false;
        if (response.data.error) {
          this.error = true;
          this.errorMessage = Craft.t("formie", "An error occurred.");
          if (response.data.error) {
            this.errorMessage += `<br><code>${response.data.error}</code>`;
          }
          return;
        }
        this.settings = response.data;
        this.success = true;
      }).catch((error) => {
        this.loading = false;
        this.error = true;
        this.errorMessage = error;
        if (error.response.data.error) {
          this.errorMessage += `<br><code>${error.response.data.error}</code>`;
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return $data.mounted ? renderSlot(_ctx.$slots, "default", mergeProps({ key: 0 }, _ctx.$data, {
    input: $options.input,
    getSourceFields: $options.getSourceFields,
    get: $options.get,
    isEmpty: $options.isEmpty,
    refresh: $options.refresh
  })) : createCommentVNode("v-if", true);
}
var IntegrationFormSettings = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/joshcrawford/public_html/craft4-plugins/formie/src/web/assets/forms/src/js/components/IntegrationFormSettings.vue"]]);
if (typeof Craft.Formie === "undefined") {
  Craft.Formie = {};
}
if (typeof Craft.Formie === "undefined") {
  Craft.Formie = {};
}
Craft.Formie.EditForm = Garnish.Base.extend({
  init(settings) {
    settings.config.isStencil = settings.isStencil;
    store.dispatch("form/setFormConfig", settings.config);
    store.dispatch("form/setVariables", settings.variables);
    store.dispatch("fieldtypes/setFieldtypes", settings.fields);
    store.dispatch("fieldGroups/setFieldGroups", settings.fields);
    store.dispatch("notifications/setNotifications", settings.notifications);
    store.dispatch("formie/setEmailTemplates", settings.emailTemplates);
    store.dispatch("formie/setMaxFieldHandleLength", settings.maxFieldHandleLength);
    store.dispatch("formie/setMaxFormHandleLength", settings.maxFormHandleLength);
    store.dispatch("formie/setReservedHandles", settings.reservedHandles);
    store.dispatch("formie/setStatuses", settings.statuses);
    new Craft.Formie.PageTitle();
    new Craft.Formie.SaveButton();
    const app = createVueApp({
      components: {
        FormBuilder,
        NotificationsBuilder
      },
      data() {
        return {
          templateReloadNotice: false,
          formHandles: settings.formHandles
        };
      },
      computed: {
        form() {
          return this.$store.state.form;
        },
        notifications() {
          return this.$store.state.notifications;
        },
        plainTextVariables() {
          return this.$store.getters["form/plainTextFields"](true);
        }
      },
      watch: {
        "form.templateId": function(newValue, oldValue) {
          if (!newValue || !oldValue) {
            return;
          }
          if (!settings.isStencil) {
            this.templateReloadNotice = true;
          }
        }
      },
      created() {
        this.$events.on("formie:save-form", (options) => {
          this.onSave(options);
        });
        this.$events.on("formie:delete-form", (e) => {
          this.onDelete(e);
        });
      },
      mounted() {
        this.$nextTick().then(() => {
          Craft.initUiElements(this.$el.parentNode);
        });
      },
      methods: {
        getFieldsForType(type) {
          return this.$store.getters["form/fieldsForType"](type);
        },
        get(object, key) {
          return get(object, key);
        },
        isEmpty(object) {
          return isEmpty(object);
        },
        getFormElement() {
          return this.$el.parentNode;
        },
        forcedAjax() {
          const allFields = this.$store.getters["form/fields"];
          const stripeFields = allFields.filter((field) => {
            return field.type === "verbb\\formie\\fields\\formfields\\Payment" && (field.settings.paymentIntegration === "stripe" || field.settings.paymentIntegration === "opayo");
          });
          return stripeFields.length;
        },
        getFormData(options = {}) {
          const formElem = this.getFormElement();
          const data = new FormData(formElem);
          const pageData = clone(this.form.pages);
          if (pageData) {
            pageData.forEach((page) => {
              delete page.errors;
              delete page.hasError;
              page.rows.forEach((row) => {
                row.fields.forEach((field) => {
                  delete field.icon;
                  delete field.errors;
                  delete field.hasError;
                });
              });
            });
          }
          const notificationsData = clone(this.notifications);
          if (notificationsData) {
            notificationsData.forEach((notification) => {
              delete notification.errors;
              delete notification.hasError;
            });
          }
          data.append("pages", JSON.stringify(pageData));
          data.append("notifications", JSON.stringify(notificationsData));
          Object.keys(options).forEach((option) => {
            data.append(option, options[option]);
          });
          return data;
        },
        onSave(options = {}) {
          const $fieldsTab = document.querySelector('a[href="#tab-fields"]');
          const $notificationsTab = document.querySelector('a[href="#tab-notifications"]');
          const $integrationsTab = document.querySelector('a[href="#tab-integrations"]');
          if ($fieldsTab) {
            $fieldsTab.classList.remove("error");
          }
          if ($notificationsTab) {
            $notificationsTab.classList.remove("error");
          }
          if ($integrationsTab) {
            $integrationsTab.classList.remove("error");
          }
          this.$refs;
          const data = this.getFormData(options);
          let actionUrl = "formie/forms/save";
          if (settings.isStencil) {
            actionUrl = "formie/stencils/save";
          }
          if (options.saveAsStencil) {
            actionUrl = "formie/forms/save-as-stencil";
          }
          Craft.sendActionRequest("POST", actionUrl, { data }).then((response) => {
            if (response.data) {
              if (response.data.config) {
                response.data.config.pages.forEach((page) => {
                  if (!page.id) {
                    page.id = newId();
                  }
                  page.rows.forEach((row) => {
                    if (!row.id) {
                      row.id = newId();
                    }
                  });
                });
                this.$store.dispatch("form/setFormConfig", response.data.config);
                this.$store.dispatch("notifications/setNotifications", response.data.notifications);
              }
              if (response.data.success) {
                this.onSuccess(response.data);
              } else {
                this.onError(response.data);
              }
            }
          }).catch((error) => {
            console.error(error);
            this.onError(error);
          });
        },
        onSuccess(data) {
          const { formBuilder } = this.$refs;
          formBuilder.saveUpdatedHash();
          if (data.redirect) {
            Craft.cp.displayNotice(Craft.t("formie", data.redirectMessage));
            return window.location = data.redirect;
          }
          if (!settings.isStencil) {
            history.replaceState({}, "", Craft.getUrl(`formie/forms/edit/${data.id}${location.hash}`));
            this.addInput("formId", data.id);
            this.addInput("fieldLayoutId", data.fieldLayoutId);
          } else {
            history.replaceState({}, "", Craft.getUrl(`formie/settings/stencils/edit/${data.id}${location.hash}`));
            this.addInput("stencilId", data.id);
          }
          Craft.cp.displayNotice(Craft.t("formie", "Form saved."));
          this.$events.emit("formie:save-form-loading", false);
        },
        onError(data = {}) {
          let message = "Unable to save form.";
          if (data.errors && (data.errors.length || data.errors)) {
            message = `Unable to save form: ${JSON.stringify(data.errors)}.`;
          }
          Craft.cp.displayError(Craft.t("formie", message));
          this.$events.emit("formie:save-form-loading", false);
          const $fieldsTab = document.querySelector('a[href="#tab-fields"]');
          const $notificationsTab = document.querySelector('a[href="#tab-notifications"]');
          const $integrationsTab = document.querySelector('a[href="#tab-integrations"]');
          if (data && data.config) {
            data.config.pages.forEach((page) => {
              page.rows.forEach((row) => {
                row.fields.forEach((field) => {
                  if ($fieldsTab && field.hasError) {
                    $fieldsTab.classList.add("error");
                  }
                });
              });
            });
            if (data.config.settings.integrations) {
              Object.keys(data.config.settings.integrations).forEach((handle) => {
                const integration = data.config.settings.integrations[handle];
                if ($integrationsTab && integration.errors) {
                  $integrationsTab.classList.add("error");
                }
              });
            }
          }
          if (data && data.notifications) {
            data.notifications.forEach((notification) => {
              if ($notificationsTab && notification.hasError) {
                $notificationsTab.classList.add("error");
              }
            });
          }
        },
        addInput(name, value) {
          const formElem = this.getFormElement();
          let input2 = formElem.querySelector(`[name="${name}"]`);
          if (!input2) {
            input2 = document.createElement("input");
            input2.setAttribute("type", "hidden");
            input2.setAttribute("name", name);
            input2.setAttribute("value", value);
            formElem.appendChild(input2);
          } else {
            input2.setAttribute("value", value);
          }
        },
        onDelete(e) {
          const formElem = this.getFormElement();
          const data = {
            redirect: e.target.getAttribute("data-redirect"),
            formId: formElem.querySelector('[name="formId"]').value
          };
          Craft.sendActionRequest("POST", "formie/forms/delete-form", { data }).then((response) => {
            window.location = response.data.redirect;
          }).catch(() => {
            return this.onError();
          });
        }
      }
    });
    app.component("FormKitForm", FormKitForm);
    app.component("ToggleBlock", ToggleBlock);
    app.component("TabPanel", TabPanel);
    app.component("TabPanels", TabPanels);
    app.component("DatePreview", DatePreview);
    app.component("ElementFieldPreview", ElementFieldPreview);
    app.component("FieldGroup", FieldGroup);
    app.component("FieldRepeater", FieldRepeater);
    app.component("HtmlBlocks", HtmlBlocks);
    app.component("NotificationPreview", NotificationPreview);
    app.component("NotificationTest", NotificationTest);
    app.component("FieldSelect", FieldSelect);
    app.component("IntegrationFieldMapping", IntegrationFieldMapping);
    app.component("IntegrationFormSettings", IntegrationFormSettings);
    app.mount("#fui-forms");
  }
});
Craft.Formie.PageTitle = Garnish.Base.extend({
  init() {
    const app = createVueApp({
      computed: {
        form() {
          return this.$store.state.form;
        }
      }
    });
    app.mount("#fui-page-title");
  }
});
Craft.Formie.SaveButton = Garnish.Base.extend({
  init() {
    if (!document.getElementById("fui-save-form-button")) {
      return;
    }
    const app = createVueApp({
      data() {
        return {
          loading: false
        };
      },
      created() {
        this.$events.on("formie:save-form-loading", (state) => {
          this.loading = state;
        });
      },
      mounted() {
        this._keyListener = function(e) {
          if (e.key === "s" && (e.ctrlKey || e.metaKey)) {
            e.preventDefault();
            this.onSave();
          }
        };
        document.addEventListener("keydown", this._keyListener.bind(this));
        $(".menubtn-custom", this.$el).menubtn();
      },
      beforeDestroy() {
        document.removeEventListener("keydown", this._keyListener);
      },
      methods: {
        onSave() {
          this.loading = true;
          this.$nextTick(() => {
            this.$events.emit("formie:save-form");
          });
        },
        onSaveAs(params) {
          this.loading = true;
          this.$nextTick(() => {
            this.$events.emit("formie:save-form", params);
          });
        },
        onDelete(e) {
          const message = Craft.t("formie", "Are you sure you want to delete this form?");
          if (confirm(message)) {
            this.$events.emit("formie:delete-form", e);
          }
        }
      }
    });
    app.mount("#fui-save-form-button");
  }
});
Craft.Formie.SiteElementSelect = Craft.BaseElementSelectInput.extend({
  createNewElement(elementInfo) {
    const $element = elementInfo.$element.clone();
    const removeText = Craft.t("app", "Remove {label}", {
      label: Craft.escapeHtml(elementInfo.label)
    });
    Craft.setElementSize($element, this.settings.viewMode === "large" ? "large" : "small");
    $element.addClass("removable");
    $element.prepend(`
            <input type="hidden" name="${this.settings.name}[id]" value="${elementInfo.id}">
            <input type="hidden" name="${this.settings.name}[siteId]" value="${elementInfo.siteId}">
            <button type="button" class="delete icon" title="${Craft.t("app", "Remove")}" aria-label="${removeText}"></button>
        `);
    return $element;
  }
});
$(document).ready(() => {
  document.dispatchEvent(new CustomEvent("vite-script-loaded", { detail: { path: "src/js/formie-form.js" } }));
});
//# sourceMappingURL=formie-form.4f9153b6.js.map
