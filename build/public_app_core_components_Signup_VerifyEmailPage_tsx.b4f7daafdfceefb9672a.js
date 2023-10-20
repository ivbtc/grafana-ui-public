"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["public_app_core_components_Signup_VerifyEmailPage_tsx"],{

/***/ "./public/app/core/components/Signup/VerifyEmail.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   VerifyEmail: () => (/* binding */ VerifyEmail)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(\"./.yarn/__virtual__/@grafana-runtime-virtual-68c57d4c0c/1/packages/grafana-runtime/src/services/backendSrv.ts\");\n/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(\"./.yarn/__virtual__/@grafana-ui-virtual-d722efae30/1/packages/grafana-ui/src/components/Layout/Layout.tsx\");\n/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(\"./.yarn/__virtual__/@grafana-ui-virtual-d722efae30/1/packages/grafana-ui/src/components/Button/Button.tsx\");\n/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(\"./.yarn/__virtual__/@grafana-ui-virtual-d722efae30/1/packages/grafana-ui/src/components/Forms/Form.tsx\");\n/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(\"./.yarn/__virtual__/@grafana-ui-virtual-d722efae30/1/packages/grafana-ui/src/components/Forms/Legend.tsx\");\n/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(\"./.yarn/__virtual__/@grafana-ui-virtual-d722efae30/1/packages/grafana-ui/src/components/Forms/Field.tsx\");\n/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(\"./.yarn/__virtual__/@grafana-ui-virtual-d722efae30/1/packages/grafana-ui/src/components/Input/Input.tsx\");\n/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"./public/app/core/config.ts\");\n/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"./public/app/core/copy/appNotification.ts\");\n/* harmony import */ var app_features_admin_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(\"./public/app/features/admin/utils.ts\");\n\n\n\n\n\n\n\nconst VerifyEmail = () => {\n  const notifyApp = (0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__.useAppNotification)();\n  const [emailSent, setEmailSent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const onSubmit = (formModel) => {\n    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.getBackendSrv)().post(\"/api/user/signup\", formModel).then(() => {\n      setEmailSent(true);\n    }).catch((err) => {\n      const msg = err.data?.message || err;\n      notifyApp.warning(msg);\n    });\n  };\n  if (emailSent) {\n    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"An email with a verification link has been sent to the email address. You should receive it shortly.\"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Container, { margin: \"md\" }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.LinkButton, { variant: \"primary\", href: (0,app_core_config__WEBPACK_IMPORTED_MODULE_1__.getConfig)().appSubUrl + \"/signup\" }, \"Complete Signup\"));\n  }\n  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Form, { onSubmit }, ({ register, errors }) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Legend, null, \"Verify Email\"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\n    _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Field,\n    {\n      label: \"Email\",\n      description: \"Enter your email address to get a verification link sent to you\",\n      invalid: !!errors.email,\n      error: errors.email?.message\n    },\n    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\n      _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Input,\n      {\n        id: \"email\",\n        ...register(\"email\", {\n          required: \"Email is required\",\n          pattern: {\n            value: app_features_admin_utils__WEBPACK_IMPORTED_MODULE_3__.w3cStandardEmailValidator,\n            message: \"Email is invalid\"\n          }\n        }),\n        placeholder: \"Email\"\n      }\n    )\n  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.HorizontalGroup, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, { type: \"submit\" }, \"Send verification email\"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.LinkButton, { fill: \"text\", href: (0,app_core_config__WEBPACK_IMPORTED_MODULE_1__.getConfig)().appSubUrl + \"/login\" }, \"Back to login\"))));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvYXBwL2NvcmUvY29tcG9uZW50cy9TaWdudXAvVmVyaWZ5RW1haWwudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWdDO0FBRUY7QUFDNkQ7QUFDakU7QUFDUztBQUNPO0FBTW5DLE1BQU0sY0FBYyxNQUFNO0FBQy9CLFFBQU0sWUFBWSxpRkFBa0IsQ0FBQztBQUNyQyxRQUFNLENBQUMsV0FBVyxZQUFZLElBQUksK0NBQVEsQ0FBQyxLQUFLO0FBRWhELFFBQU0sV0FBVyxDQUFDLGNBQXdCO0FBQ3hDLG1FQUFhLENBQUMsRUFDWCxLQUFLLG9CQUFvQixTQUFTLEVBQ2xDLEtBQUssTUFBTTtBQUNWLG1CQUFhLElBQUk7QUFBQSxJQUNuQixDQUFDLEVBQ0EsTUFBTSxDQUFDLFFBQVE7QUFDZCxZQUFNLE1BQU0sSUFBSSxNQUFNLFdBQVc7QUFDakMsZ0JBQVUsUUFBUSxHQUFHO0FBQUEsSUFDdkIsQ0FBQztBQUFBLEVBQ0w7QUFFQSxNQUFJLFdBQVc7QUFDYixXQUNFLDJFQUFDLGFBQ0MsMkVBQUMsV0FBRSxzR0FBb0csR0FDdkcsMkVBQUMsa0RBQVMsSUFBQyxRQUFPLE1BQUssR0FDdkIsMkVBQUMsbURBQVUsSUFBQyxTQUFRLFdBQVUsTUFBTSwwREFBUyxDQUFDLEVBQUUsWUFBWSxhQUFXLGlCQUV2RSxDQUNGO0FBQUEsRUFFSjtBQUVBLFNBQ0UsMkVBQUMsNkNBQUksSUFBQyxZQUNILENBQUMsRUFBRSxVQUFVLE9BQU8sTUFDbkIsMElBQ0UsMkVBQUMsK0NBQU0sUUFBQyxjQUFZLEdBQ3BCO0FBQUEsSUFBQyw4Q0FBSztBQUFMO0FBQUEsTUFDQyxPQUFNO0FBQUEsTUFDTixhQUFZO0FBQUEsTUFDWixTQUFTLENBQUMsQ0FBQyxPQUFPO0FBQUEsTUFDbEIsT0FBTyxPQUFPLE9BQU87QUFBQTtBQUFBLElBRXJCO0FBQUEsTUFBQywrQ0FBSztBQUFMO0FBQUEsUUFDQyxJQUFHO0FBQUEsUUFDRixHQUFHLFNBQVMsU0FBUztBQUFBLFVBQ3BCLFVBQVU7QUFBQSxVQUNWLFNBQVM7QUFBQSxZQUNQLE9BQU8sK0VBQXlCO0FBQXpCLFlBQ1AsU0FBUztBQUFBLFVBQ1g7QUFBQSxRQUNGLENBQUM7QUFBQSxRQUNELGFBQVk7QUFBQTtBQUFBLElBQ2Q7QUFBQSxFQUNGLEdBQ0EsMkVBQUMsd0RBQWUsUUFDZCwyRUFBQywrQ0FBTSxJQUFDLE1BQUssWUFBUyx5QkFBdUIsR0FDN0MsMkVBQUMsbURBQVUsSUFBQyxNQUFLLFFBQU8sTUFBTSwwREFBUyxDQUFDLEVBQUUsWUFBWSxZQUFVLGVBRWhFLENBQ0YsQ0FDRixDQUVKO0FBRUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9jb3JlL2NvbXBvbmVudHMvU2lnbnVwL1ZlcmlmeUVtYWlsLnRzeD9lZDgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgZ2V0QmFja2VuZFNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgRm9ybSwgRmllbGQsIElucHV0LCBCdXR0b24sIExlZ2VuZCwgQ29udGFpbmVyLCBIb3Jpem9udGFsR3JvdXAsIExpbmtCdXR0b24gfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBnZXRDb25maWcgfSBmcm9tICdhcHAvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgdXNlQXBwTm90aWZpY2F0aW9uIH0gZnJvbSAnYXBwL2NvcmUvY29weS9hcHBOb3RpZmljYXRpb24nO1xuaW1wb3J0IHsgdzNjU3RhbmRhcmRFbWFpbFZhbGlkYXRvciB9IGZyb20gJ2FwcC9mZWF0dXJlcy9hZG1pbi91dGlscyc7XG5cbmludGVyZmFjZSBFbWFpbERUTyB7XG4gIGVtYWlsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBWZXJpZnlFbWFpbCA9ICgpID0+IHtcbiAgY29uc3Qgbm90aWZ5QXBwID0gdXNlQXBwTm90aWZpY2F0aW9uKCk7XG4gIGNvbnN0IFtlbWFpbFNlbnQsIHNldEVtYWlsU2VudF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSAoZm9ybU1vZGVsOiBFbWFpbERUTykgPT4ge1xuICAgIGdldEJhY2tlbmRTcnYoKVxuICAgICAgLnBvc3QoJy9hcGkvdXNlci9zaWdudXAnLCBmb3JtTW9kZWwpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHNldEVtYWlsU2VudCh0cnVlKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zdCBtc2cgPSBlcnIuZGF0YT8ubWVzc2FnZSB8fCBlcnI7XG4gICAgICAgIG5vdGlmeUFwcC53YXJuaW5nKG1zZyk7XG4gICAgICB9KTtcbiAgfTtcblxuICBpZiAoZW1haWxTZW50KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxwPkFuIGVtYWlsIHdpdGggYSB2ZXJpZmljYXRpb24gbGluayBoYXMgYmVlbiBzZW50IHRvIHRoZSBlbWFpbCBhZGRyZXNzLiBZb3Ugc2hvdWxkIHJlY2VpdmUgaXQgc2hvcnRseS48L3A+XG4gICAgICAgIDxDb250YWluZXIgbWFyZ2luPVwibWRcIiAvPlxuICAgICAgICA8TGlua0J1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIGhyZWY9e2dldENvbmZpZygpLmFwcFN1YlVybCArICcvc2lnbnVwJ30+XG4gICAgICAgICAgQ29tcGxldGUgU2lnbnVwXG4gICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICB7KHsgcmVnaXN0ZXIsIGVycm9ycyB9KSA9PiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPExlZ2VuZD5WZXJpZnkgRW1haWw8L0xlZ2VuZD5cbiAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJFbnRlciB5b3VyIGVtYWlsIGFkZHJlc3MgdG8gZ2V0IGEgdmVyaWZpY2F0aW9uIGxpbmsgc2VudCB0byB5b3VcIlxuICAgICAgICAgICAgaW52YWxpZD17ISFlcnJvcnMuZW1haWx9XG4gICAgICAgICAgICBlcnJvcj17ZXJyb3JzLmVtYWlsPy5tZXNzYWdlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdlbWFpbCcsIHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogJ0VtYWlsIGlzIHJlcXVpcmVkJyxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogdzNjU3RhbmRhcmRFbWFpbFZhbGlkYXRvcixcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdFbWFpbCBpcyBpbnZhbGlkJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgPEhvcml6b250YWxHcm91cD5cbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlNlbmQgdmVyaWZpY2F0aW9uIGVtYWlsPC9CdXR0b24+XG4gICAgICAgICAgICA8TGlua0J1dHRvbiBmaWxsPVwidGV4dFwiIGhyZWY9e2dldENvbmZpZygpLmFwcFN1YlVybCArICcvbG9naW4nfT5cbiAgICAgICAgICAgICAgQmFjayB0byBsb2dpblxuICAgICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICAgIDwvSG9yaXpvbnRhbEdyb3VwPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9Gb3JtPlxuICApO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/app/core/components/Signup/VerifyEmail.tsx\n");

/***/ }),

/***/ "./public/app/core/components/Signup/VerifyEmailPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   VerifyEmailPage: () => (/* binding */ VerifyEmailPage),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Login_LoginLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"./public/app/core/components/Login/LoginLayout.tsx\");\n/* harmony import */ var _VerifyEmail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"./public/app/core/components/Signup/VerifyEmail.tsx\");\n\n\n\n\nconst VerifyEmailPage = () => {\n  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Login_LoginLayout__WEBPACK_IMPORTED_MODULE_1__.LoginLayout, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Login_LoginLayout__WEBPACK_IMPORTED_MODULE_1__.InnerBox, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_VerifyEmail__WEBPACK_IMPORTED_MODULE_2__.VerifyEmail, null)));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VerifyEmailPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvYXBwL2NvcmUvY29tcG9uZW50cy9TaWdudXAvVmVyaWZ5RW1haWxQYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWtCO0FBRW9CO0FBRVY7QUFFckIsTUFBTSxrQkFBa0IsTUFBTTtBQUNuQyxTQUNFLDJFQUFDLDJEQUFXLFFBQ1YsMkVBQUMsd0RBQVEsUUFDUCwyRUFBQyxxREFBVyxNQUFDLENBQ2YsQ0FDRjtBQUVKO0FBRUEsaUVBQWUsZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvY29yZS9jb21wb25lbnRzL1NpZ251cC9WZXJpZnlFbWFpbFBhZ2UudHN4P2U3MzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgTG9naW5MYXlvdXQsIElubmVyQm94IH0gZnJvbSAnLi4vTG9naW4vTG9naW5MYXlvdXQnO1xuXG5pbXBvcnQgeyBWZXJpZnlFbWFpbCB9IGZyb20gJy4vVmVyaWZ5RW1haWwnO1xuXG5leHBvcnQgY29uc3QgVmVyaWZ5RW1haWxQYWdlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMb2dpbkxheW91dD5cbiAgICAgIDxJbm5lckJveD5cbiAgICAgICAgPFZlcmlmeUVtYWlsIC8+XG4gICAgICA8L0lubmVyQm94PlxuICAgIDwvTG9naW5MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBWZXJpZnlFbWFpbFBhZ2U7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/app/core/components/Signup/VerifyEmailPage.tsx\n");

/***/ })

}]);