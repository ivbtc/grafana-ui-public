"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["ChangePasswordPage"],{

/***/ "./public/app/core/components/ForgottenPassword/ChangePasswordPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ChangePasswordPage: () => (/* binding */ ChangePasswordPage),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Login_LoginCtrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"./public/app/core/components/Login/LoginCtrl.tsx\");\n/* harmony import */ var _Login_LoginLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"./public/app/core/components/Login/LoginLayout.tsx\");\n/* harmony import */ var _ChangePassword__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(\"./public/app/core/components/ForgottenPassword/ChangePassword.tsx\");\n\n\n\n\n\nconst ChangePasswordPage = (props) => {\n  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Login_LoginLayout__WEBPACK_IMPORTED_MODULE_2__.LoginLayout, { isChangingPassword: true }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Login_LoginLayout__WEBPACK_IMPORTED_MODULE_2__.InnerBox, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Login_LoginCtrl__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { resetCode: props.queryParams.code }, ({ changePassword }) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ChangePassword__WEBPACK_IMPORTED_MODULE_3__.ChangePassword, { onSubmit: changePassword }))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChangePasswordPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvYXBwL2NvcmUvY29tcG9uZW50cy9Gb3Jnb3R0ZW5QYXNzd29yZC9DaGFuZ2VQYXNzd29yZFBhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWtCO0FBSUk7QUFDZ0I7QUFFUDtBQUl4QixNQUFNLHFCQUFxQixDQUFDLFVBQWlCO0FBQ2xELFNBQ0UsMkVBQUMsMkRBQVcsSUFBQyxvQkFBa0IsUUFDN0IsMkVBQUMsd0RBQVEsUUFDUCwyRUFBQyx3REFBUyxJQUFDLFdBQVcsTUFBTSxZQUFZLFFBQ3JDLENBQUMsRUFBRSxlQUFlLE1BQU0sMkVBQUMsMkRBQWMsSUFBQyxVQUFVLGdCQUFnQixDQUNyRSxDQUNGLENBQ0Y7QUFFSjtBQUVBLGlFQUFlLGtCQUFrQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvY29yZS9jb21wb25lbnRzL0ZvcmdvdHRlblBhc3N3b3JkL0NoYW5nZVBhc3N3b3JkUGFnZS50c3g/YTYxMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ2FwcC9jb3JlL25hdmlnYXRpb24vdHlwZXMnO1xuXG5pbXBvcnQgTG9naW5DdHJsIGZyb20gJy4uL0xvZ2luL0xvZ2luQ3RybCc7XG5pbXBvcnQgeyBMb2dpbkxheW91dCwgSW5uZXJCb3ggfSBmcm9tICcuLi9Mb2dpbi9Mb2dpbkxheW91dCc7XG5cbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkIH0gZnJvbSAnLi9DaGFuZ2VQYXNzd29yZCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wczx7fSwgeyBjb2RlOiBzdHJpbmcgfT4ge31cblxuZXhwb3J0IGNvbnN0IENoYW5nZVBhc3N3b3JkUGFnZSA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TG9naW5MYXlvdXQgaXNDaGFuZ2luZ1Bhc3N3b3JkPlxuICAgICAgPElubmVyQm94PlxuICAgICAgICA8TG9naW5DdHJsIHJlc2V0Q29kZT17cHJvcHMucXVlcnlQYXJhbXMuY29kZX0+XG4gICAgICAgICAgeyh7IGNoYW5nZVBhc3N3b3JkIH0pID0+IDxDaGFuZ2VQYXNzd29yZCBvblN1Ym1pdD17Y2hhbmdlUGFzc3dvcmR9IC8+fVxuICAgICAgICA8L0xvZ2luQ3RybD5cbiAgICAgIDwvSW5uZXJCb3g+XG4gICAgPC9Mb2dpbkxheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYW5nZVBhc3N3b3JkUGFnZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/app/core/components/ForgottenPassword/ChangePasswordPage.tsx\n");

/***/ })

}]);