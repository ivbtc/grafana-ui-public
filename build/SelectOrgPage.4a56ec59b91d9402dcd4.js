"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["SelectOrgPage"],{

/***/ "./public/app/features/org/SelectOrgPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SelectOrgPage: () => (/* binding */ SelectOrgPage),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"./.yarn/__virtual__/react-redux-virtual-5487a8ab90/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(\"./.yarn/__virtual__/react-use-virtual-dd7926f458/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useEffectOnce.js\");\n/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(\"./.yarn/__virtual__/@grafana-runtime-virtual-68c57d4c0c/1/packages/grafana-runtime/src/config.ts\");\n/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(\"./.yarn/__virtual__/@grafana-ui-virtual-d722efae30/1/packages/grafana-ui/src/components/Layout/Layout.tsx\");\n/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(\"./.yarn/__virtual__/@grafana-ui-virtual-d722efae30/1/packages/grafana-ui/src/components/Button/Button.tsx\");\n/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"./public/app/core/components/Page/Page.tsx\");\n/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(\"./public/app/features/org/state/actions.ts\");\n\n\n\n\n\n\n\n\nconst navModel = {\n  main: {\n    icon: \"grafana\",\n    subTitle: \"Preferences\",\n    text: \"Select active organization\"\n  },\n  node: {\n    text: \"Select active organization\"\n  }\n};\nconst mapStateToProps = (state) => {\n  return {\n    userOrgs: state.organization.userOrgs\n  };\n};\nconst mapDispatchToProps = {\n  setUserOrganization: _state_actions__WEBPACK_IMPORTED_MODULE_3__.setUserOrganization,\n  getUserOrganizations: _state_actions__WEBPACK_IMPORTED_MODULE_3__.getUserOrganizations\n};\nconst connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);\nconst SelectOrgPage = ({ setUserOrganization: setUserOrganization2, getUserOrganizations: getUserOrganizations2, userOrgs }) => {\n  const setUserOrg = async (org) => {\n    await setUserOrganization2(org.orgId);\n    window.location.href = _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.appSubUrl + \"/\";\n  };\n  (0,react_use__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(() => {\n    getUserOrganizations2();\n  });\n  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__.Page, { navModel }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__.Page.Contents, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"You have been invited to another organization! Please select which organization that you want to use right now. You can change this later at any time.\"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.HorizontalGroup, { wrap: true }, userOrgs && userOrgs.map((org) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button, { key: org.orgId, icon: \"signin\", onClick: () => setUserOrg(org) }, org.name))))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(SelectOrgPage));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL29yZy9TZWxlY3RPcmdQYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBa0I7QUFDc0I7QUFDVjtBQUVQO0FBQ2lCO0FBQ25CO0FBR3FDO0FBRTFELE1BQU0sV0FBVztBQUFBLEVBQ2YsTUFBTTtBQUFBLElBQ0osTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNKLE1BQU07QUFBQSxFQUNSO0FBQ0Y7QUFFQSxNQUFNLGtCQUFrQixDQUFDLFVBQXNCO0FBQzdDLFNBQU87QUFBQSxJQUNMLFVBQVUsTUFBTSxhQUFhO0FBQUEsRUFDL0I7QUFDRjtBQUVBLE1BQU0scUJBQXFCO0FBQUEsRUFDekIsbUJBQW1CO0FBQW5CLEVBQ0Esb0JBQW9CO0FBQ3RCO0FBRUEsTUFBTSxZQUFZLG9EQUFPLENBQUMsaUJBQWlCLGtCQUFrQjtBQUl0RCxNQUFNLGdCQUFnQixDQUFDLEVBQUUscUJBQUFBLHNCQUFxQixzQkFBQUMsdUJBQXNCLFNBQVMsTUFBYTtBQUMvRixRQUFNLGFBQWEsT0FBTyxRQUFpQjtBQUN6QyxVQUFNRCxxQkFBb0IsSUFBSSxLQUFLO0FBQ25DLFdBQU8sU0FBUyxPQUFPLG9EQUFNLENBQUMsWUFBWTtBQUFBLEVBQzVDO0FBRUEsdURBQWEsQ0FBQyxNQUFNO0FBQ2xCLElBQUFDLHNCQUFxQjtBQUFBLEVBQ3ZCLENBQUM7QUFFRCxTQUNFLDJFQUFDLCtEQUFJLElBQUMsWUFDSiwyRUFBQywrREFBSSxDQUFDLFVBQUwsTUFDQywyRUFBQyxhQUNDLDJFQUFDLFdBQUUsd0pBR0gsR0FDQSwyRUFBQyx3REFBZSxJQUFDLE1BQUksUUFDbEIsWUFDQyxTQUFTLElBQUksQ0FBQyxRQUNaLDJFQUFDLCtDQUFNLElBQUMsS0FBSyxJQUFJLE9BQU8sTUFBSyxVQUFTLFNBQVMsTUFBTSxXQUFXLEdBQUcsS0FDaEUsSUFBSSxJQUNQLENBQ0QsQ0FDTCxDQUNGLENBQ0YsQ0FDRjtBQUVKO0FBRUEsaUVBQWUsVUFBVSxhQUFhLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL29yZy9TZWxlY3RPcmdQYWdlLnRzeD8wZDEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVzZUVmZmVjdE9uY2UgfSBmcm9tICdyZWFjdC11c2UnO1xuXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IEJ1dHRvbiwgSG9yaXpvbnRhbEdyb3VwIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCB7IFN0b3JlU3RhdGUsIFVzZXJPcmcgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBnZXRVc2VyT3JnYW5pemF0aW9ucywgc2V0VXNlck9yZ2FuaXphdGlvbiB9IGZyb20gJy4vc3RhdGUvYWN0aW9ucyc7XG5cbmNvbnN0IG5hdk1vZGVsID0ge1xuICBtYWluOiB7XG4gICAgaWNvbjogJ2dyYWZhbmEnIGFzIGNvbnN0LFxuICAgIHN1YlRpdGxlOiAnUHJlZmVyZW5jZXMnLFxuICAgIHRleHQ6ICdTZWxlY3QgYWN0aXZlIG9yZ2FuaXphdGlvbicsXG4gIH0sXG4gIG5vZGU6IHtcbiAgICB0ZXh0OiAnU2VsZWN0IGFjdGl2ZSBvcmdhbml6YXRpb24nLFxuICB9LFxufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBTdG9yZVN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdXNlck9yZ3M6IHN0YXRlLm9yZ2FuaXphdGlvbi51c2VyT3JncyxcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgc2V0VXNlck9yZ2FuaXphdGlvbixcbiAgZ2V0VXNlck9yZ2FuaXphdGlvbnMsXG59O1xuXG5jb25zdCBjb25uZWN0b3IgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKTtcblxudHlwZSBQcm9wcyA9IENvbm5lY3RlZFByb3BzPHR5cGVvZiBjb25uZWN0b3I+O1xuXG5leHBvcnQgY29uc3QgU2VsZWN0T3JnUGFnZSA9ICh7IHNldFVzZXJPcmdhbml6YXRpb24sIGdldFVzZXJPcmdhbml6YXRpb25zLCB1c2VyT3JncyB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBzZXRVc2VyT3JnID0gYXN5bmMgKG9yZzogVXNlck9yZykgPT4ge1xuICAgIGF3YWl0IHNldFVzZXJPcmdhbml6YXRpb24ob3JnLm9yZ0lkKTtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGNvbmZpZy5hcHBTdWJVcmwgKyAnLyc7XG4gIH07XG5cbiAgdXNlRWZmZWN0T25jZSgoKSA9PiB7XG4gICAgZ2V0VXNlck9yZ2FuaXphdGlvbnMoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZSBuYXZNb2RlbD17bmF2TW9kZWx9PlxuICAgICAgPFBhZ2UuQ29udGVudHM+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBZb3UgaGF2ZSBiZWVuIGludml0ZWQgdG8gYW5vdGhlciBvcmdhbml6YXRpb24hIFBsZWFzZSBzZWxlY3Qgd2hpY2ggb3JnYW5pemF0aW9uIHRoYXQgeW91IHdhbnQgdG8gdXNlIHJpZ2h0XG4gICAgICAgICAgICBub3cuIFlvdSBjYW4gY2hhbmdlIHRoaXMgbGF0ZXIgYXQgYW55IHRpbWUuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxIb3Jpem9udGFsR3JvdXAgd3JhcD5cbiAgICAgICAgICAgIHt1c2VyT3JncyAmJlxuICAgICAgICAgICAgICB1c2VyT3Jncy5tYXAoKG9yZykgPT4gKFxuICAgICAgICAgICAgICAgIDxCdXR0b24ga2V5PXtvcmcub3JnSWR9IGljb249XCJzaWduaW5cIiBvbkNsaWNrPXsoKSA9PiBzZXRVc2VyT3JnKG9yZyl9PlxuICAgICAgICAgICAgICAgICAge29yZy5uYW1lfVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1BhZ2UuQ29udGVudHM+XG4gICAgPC9QYWdlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdG9yKFNlbGVjdE9yZ1BhZ2UpO1xuIl0sIm5hbWVzIjpbInNldFVzZXJPcmdhbml6YXRpb24iLCJnZXRVc2VyT3JnYW5pemF0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/app/features/org/SelectOrgPage.tsx\n");

/***/ })

}]);