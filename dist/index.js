"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  OrderFunnel: () => OrderFunnel,
  useKeyFunnel: () => useKeyFunnel
});
module.exports = __toCommonJS(src_exports);

// src/order/index.tsx
var import_react = __toESM(require("react"));
var OrderFunnel = ({ page, children }) => {
  const [currentComponent, setCurrentComponent] = (0, import_react.useState)();
  (0, import_react.useEffect)(() => {
    setCurrentComponent(import_react.Children.toArray(children)[page - 1]);
  }, [page]);
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, currentComponent);
};

// src/key/index.tsx
var import_react2 = __toESM(require("react"));
var useKeyFunnel = (defaultValue) => {
  const [step, setStep] = (0, import_react2.useState)(defaultValue);
  const Step = (props) => {
    return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, props.children);
  };
  const FunnelProvider = ({ children }) => {
    const targetStep = import_react2.Children.toArray(children).find((childStep) => childStep.props.name === step);
    return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, targetStep);
  };
  return [FunnelProvider, Step, setStep];
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  OrderFunnel,
  useKeyFunnel
});
//# sourceMappingURL=index.js.map
