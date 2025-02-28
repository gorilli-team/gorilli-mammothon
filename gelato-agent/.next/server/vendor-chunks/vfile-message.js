"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/vfile-message";
exports.ids = ["vendor-chunks/vfile-message"];
exports.modules = {

/***/ "(ssr)/./node_modules/vfile-message/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/vfile-message/lib/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   VFileMessage: () => (/* binding */ VFileMessage)\n/* harmony export */ });\n/* harmony import */ var unist_util_stringify_position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unist-util-stringify-position */ \"(ssr)/./node_modules/unist-util-stringify-position/lib/index.js\");\n/**\n * @typedef {import('unist').Node} Node\n * @typedef {import('unist').Point} Point\n * @typedef {import('unist').Position} Position\n */\n\n/**\n * @typedef {object & {type: string, position?: Position | undefined}} NodeLike\n *\n * @typedef Options\n *   Configuration.\n * @property {Array<Node> | null | undefined} [ancestors]\n *   Stack of (inclusive) ancestor nodes surrounding the message (optional).\n * @property {Error | null | undefined} [cause]\n *   Original error cause of the message (optional).\n * @property {Point | Position | null | undefined} [place]\n *   Place of message (optional).\n * @property {string | null | undefined} [ruleId]\n *   Category of message (optional, example: `'my-rule'`).\n * @property {string | null | undefined} [source]\n *   Namespace of who sent the message (optional, example: `'my-package'`).\n */\n\n\n\n/**\n * Message.\n */\nclass VFileMessage extends Error {\n  /**\n   * Create a message for `reason`.\n   *\n   * > 🪦 **Note**: also has obsolete signatures.\n   *\n   * @overload\n   * @param {string} reason\n   * @param {Options | null | undefined} [options]\n   * @returns\n   *\n   * @overload\n   * @param {string} reason\n   * @param {Node | NodeLike | null | undefined} parent\n   * @param {string | null | undefined} [origin]\n   * @returns\n   *\n   * @overload\n   * @param {string} reason\n   * @param {Point | Position | null | undefined} place\n   * @param {string | null | undefined} [origin]\n   * @returns\n   *\n   * @overload\n   * @param {string} reason\n   * @param {string | null | undefined} [origin]\n   * @returns\n   *\n   * @overload\n   * @param {Error | VFileMessage} cause\n   * @param {Node | NodeLike | null | undefined} parent\n   * @param {string | null | undefined} [origin]\n   * @returns\n   *\n   * @overload\n   * @param {Error | VFileMessage} cause\n   * @param {Point | Position | null | undefined} place\n   * @param {string | null | undefined} [origin]\n   * @returns\n   *\n   * @overload\n   * @param {Error | VFileMessage} cause\n   * @param {string | null | undefined} [origin]\n   * @returns\n   *\n   * @param {Error | VFileMessage | string} causeOrReason\n   *   Reason for message, should use markdown.\n   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]\n   *   Configuration (optional).\n   * @param {string | null | undefined} [origin]\n   *   Place in code where the message originates (example:\n   *   `'my-package:my-rule'` or `'my-rule'`).\n   * @returns\n   *   Instance of `VFileMessage`.\n   */\n  // eslint-disable-next-line complexity\n  constructor(causeOrReason, optionsOrParentOrPlace, origin) {\n    super()\n\n    if (typeof optionsOrParentOrPlace === 'string') {\n      origin = optionsOrParentOrPlace\n      optionsOrParentOrPlace = undefined\n    }\n\n    /** @type {string} */\n    let reason = ''\n    /** @type {Options} */\n    let options = {}\n    let legacyCause = false\n\n    if (optionsOrParentOrPlace) {\n      // Point.\n      if (\n        'line' in optionsOrParentOrPlace &&\n        'column' in optionsOrParentOrPlace\n      ) {\n        options = {place: optionsOrParentOrPlace}\n      }\n      // Position.\n      else if (\n        'start' in optionsOrParentOrPlace &&\n        'end' in optionsOrParentOrPlace\n      ) {\n        options = {place: optionsOrParentOrPlace}\n      }\n      // Node.\n      else if ('type' in optionsOrParentOrPlace) {\n        options = {\n          ancestors: [optionsOrParentOrPlace],\n          place: optionsOrParentOrPlace.position\n        }\n      }\n      // Options.\n      else {\n        options = {...optionsOrParentOrPlace}\n      }\n    }\n\n    if (typeof causeOrReason === 'string') {\n      reason = causeOrReason\n    }\n    // Error.\n    else if (!options.cause && causeOrReason) {\n      legacyCause = true\n      reason = causeOrReason.message\n      options.cause = causeOrReason\n    }\n\n    if (!options.ruleId && !options.source && typeof origin === 'string') {\n      const index = origin.indexOf(':')\n\n      if (index === -1) {\n        options.ruleId = origin\n      } else {\n        options.source = origin.slice(0, index)\n        options.ruleId = origin.slice(index + 1)\n      }\n    }\n\n    if (!options.place && options.ancestors && options.ancestors) {\n      const parent = options.ancestors[options.ancestors.length - 1]\n\n      if (parent) {\n        options.place = parent.position\n      }\n    }\n\n    const start =\n      options.place && 'start' in options.place\n        ? options.place.start\n        : options.place\n\n    /* eslint-disable no-unused-expressions */\n    /**\n     * Stack of ancestor nodes surrounding the message.\n     *\n     * @type {Array<Node> | undefined}\n     */\n    this.ancestors = options.ancestors || undefined\n\n    /**\n     * Original error cause of the message.\n     *\n     * @type {Error | undefined}\n     */\n    this.cause = options.cause || undefined\n\n    /**\n     * Starting column of message.\n     *\n     * @type {number | undefined}\n     */\n    this.column = start ? start.column : undefined\n\n    /**\n     * State of problem.\n     *\n     * * `true` — error, file not usable\n     * * `false` — warning, change may be needed\n     * * `undefined` — change likely not needed\n     *\n     * @type {boolean | null | undefined}\n     */\n    this.fatal = undefined\n\n    /**\n     * Path of a file (used throughout the `VFile` ecosystem).\n     *\n     * @type {string | undefined}\n     */\n    this.file\n\n    // Field from `Error`.\n    /**\n     * Reason for message.\n     *\n     * @type {string}\n     */\n    this.message = reason\n\n    /**\n     * Starting line of error.\n     *\n     * @type {number | undefined}\n     */\n    this.line = start ? start.line : undefined\n\n    // Field from `Error`.\n    /**\n     * Serialized positional info of message.\n     *\n     * On normal errors, this would be something like `ParseError`, buit in\n     * `VFile` messages we use this space to show where an error happened.\n     */\n    this.name = (0,unist_util_stringify_position__WEBPACK_IMPORTED_MODULE_0__.stringifyPosition)(options.place) || '1:1'\n\n    /**\n     * Place of message.\n     *\n     * @type {Point | Position | undefined}\n     */\n    this.place = options.place || undefined\n\n    /**\n     * Reason for message, should use markdown.\n     *\n     * @type {string}\n     */\n    this.reason = this.message\n\n    /**\n     * Category of message (example: `'my-rule'`).\n     *\n     * @type {string | undefined}\n     */\n    this.ruleId = options.ruleId || undefined\n\n    /**\n     * Namespace of message (example: `'my-package'`).\n     *\n     * @type {string | undefined}\n     */\n    this.source = options.source || undefined\n\n    // Field from `Error`.\n    /**\n     * Stack of message.\n     *\n     * This is used by normal errors to show where something happened in\n     * programming code, irrelevant for `VFile` messages,\n     *\n     * @type {string}\n     */\n    this.stack =\n      legacyCause && options.cause && typeof options.cause.stack === 'string'\n        ? options.cause.stack\n        : ''\n\n    // The following fields are “well known”.\n    // Not standard.\n    // Feel free to add other non-standard fields to your messages.\n\n    /**\n     * Specify the source value that’s being reported, which is deemed\n     * incorrect.\n     *\n     * @type {string | undefined}\n     */\n    this.actual\n\n    /**\n     * Suggest acceptable values that can be used instead of `actual`.\n     *\n     * @type {Array<string> | undefined}\n     */\n    this.expected\n\n    /**\n     * Long form description of the message (you should use markdown).\n     *\n     * @type {string | undefined}\n     */\n    this.note\n\n    /**\n     * Link to docs for the message.\n     *\n     * > 👉 **Note**: this must be an absolute URL that can be passed as `x`\n     * > to `new URL(x)`.\n     *\n     * @type {string | undefined}\n     */\n    this.url\n    /* eslint-enable no-unused-expressions */\n  }\n}\n\nVFileMessage.prototype.file = ''\nVFileMessage.prototype.name = ''\nVFileMessage.prototype.reason = ''\nVFileMessage.prototype.message = ''\nVFileMessage.prototype.stack = ''\nVFileMessage.prototype.column = undefined\nVFileMessage.prototype.line = undefined\nVFileMessage.prototype.ancestors = undefined\nVFileMessage.prototype.cause = undefined\nVFileMessage.prototype.fatal = undefined\nVFileMessage.prototype.place = undefined\nVFileMessage.prototype.ruleId = undefined\nVFileMessage.prototype.source = undefined\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdmZpbGUtbWVzc2FnZS9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBLGFBQWEsc0JBQXNCO0FBQ25DLGFBQWEsdUJBQXVCO0FBQ3BDLGFBQWEsMEJBQTBCO0FBQ3ZDOztBQUVBO0FBQ0EsYUFBYSxVQUFVLGdEQUFnRDtBQUN2RTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdDQUFnQztBQUM5QztBQUNBLGNBQWMsMEJBQTBCO0FBQ3hDO0FBQ0EsY0FBYyxxQ0FBcUM7QUFDbkQ7QUFDQSxjQUFjLDJCQUEyQjtBQUN6QztBQUNBLGNBQWMsMkJBQTJCO0FBQ3pDO0FBQ0E7O0FBRStEOztBQUUvRDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLDRCQUE0QjtBQUN6QztBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxvQ0FBb0M7QUFDakQsYUFBYSwyQkFBMkI7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEscUNBQXFDO0FBQ2xELGFBQWEsMkJBQTJCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLDJCQUEyQjtBQUN4QztBQUNBO0FBQ0E7QUFDQSxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLG9DQUFvQztBQUNqRCxhQUFhLDJCQUEyQjtBQUN4QztBQUNBO0FBQ0E7QUFDQSxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLHFDQUFxQztBQUNsRCxhQUFhLDJCQUEyQjtBQUN4QztBQUNBO0FBQ0E7QUFDQSxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLDJCQUEyQjtBQUN4QztBQUNBO0FBQ0EsYUFBYSwrQkFBK0I7QUFDNUM7QUFDQSxhQUFhLDBFQUEwRTtBQUN2RjtBQUNBLGFBQWEsMkJBQTJCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixnRkFBaUI7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nZWxhdG8vLi9ub2RlX21vZHVsZXMvdmZpbGUtbWVzc2FnZS9saWIvaW5kZXguanM/ZTkwOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0JykuTm9kZX0gTm9kZVxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QnKS5Qb2ludH0gUG9pbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0JykuUG9zaXRpb259IFBvc2l0aW9uXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7b2JqZWN0ICYge3R5cGU6IHN0cmluZywgcG9zaXRpb24/OiBQb3NpdGlvbiB8IHVuZGVmaW5lZH19IE5vZGVMaWtlXG4gKlxuICogQHR5cGVkZWYgT3B0aW9uc1xuICogICBDb25maWd1cmF0aW9uLlxuICogQHByb3BlcnR5IHtBcnJheTxOb2RlPiB8IG51bGwgfCB1bmRlZmluZWR9IFthbmNlc3RvcnNdXG4gKiAgIFN0YWNrIG9mIChpbmNsdXNpdmUpIGFuY2VzdG9yIG5vZGVzIHN1cnJvdW5kaW5nIHRoZSBtZXNzYWdlIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge0Vycm9yIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NhdXNlXVxuICogICBPcmlnaW5hbCBlcnJvciBjYXVzZSBvZiB0aGUgbWVzc2FnZSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtQb2ludCB8IFBvc2l0aW9uIHwgbnVsbCB8IHVuZGVmaW5lZH0gW3BsYWNlXVxuICogICBQbGFjZSBvZiBtZXNzYWdlIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge3N0cmluZyB8IG51bGwgfCB1bmRlZmluZWR9IFtydWxlSWRdXG4gKiAgIENhdGVnb3J5IG9mIG1lc3NhZ2UgKG9wdGlvbmFsLCBleGFtcGxlOiBgJ215LXJ1bGUnYCkuXG4gKiBAcHJvcGVydHkge3N0cmluZyB8IG51bGwgfCB1bmRlZmluZWR9IFtzb3VyY2VdXG4gKiAgIE5hbWVzcGFjZSBvZiB3aG8gc2VudCB0aGUgbWVzc2FnZSAob3B0aW9uYWwsIGV4YW1wbGU6IGAnbXktcGFja2FnZSdgKS5cbiAqL1xuXG5pbXBvcnQge3N0cmluZ2lmeVBvc2l0aW9ufSBmcm9tICd1bmlzdC11dGlsLXN0cmluZ2lmeS1wb3NpdGlvbidcblxuLyoqXG4gKiBNZXNzYWdlLlxuICovXG5leHBvcnQgY2xhc3MgVkZpbGVNZXNzYWdlIGV4dGVuZHMgRXJyb3Ige1xuICAvKipcbiAgICogQ3JlYXRlIGEgbWVzc2FnZSBmb3IgYHJlYXNvbmAuXG4gICAqXG4gICAqID4g8J+qpiAqKk5vdGUqKjogYWxzbyBoYXMgb2Jzb2xldGUgc2lnbmF0dXJlcy5cbiAgICpcbiAgICogQG92ZXJsb2FkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWFzb25cbiAgICogQHBhcmFtIHtPcHRpb25zIHwgbnVsbCB8IHVuZGVmaW5lZH0gW29wdGlvbnNdXG4gICAqIEByZXR1cm5zXG4gICAqXG4gICAqIEBvdmVybG9hZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVhc29uXG4gICAqIEBwYXJhbSB7Tm9kZSB8IE5vZGVMaWtlIHwgbnVsbCB8IHVuZGVmaW5lZH0gcGFyZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZH0gW29yaWdpbl1cbiAgICogQHJldHVybnNcbiAgICpcbiAgICogQG92ZXJsb2FkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWFzb25cbiAgICogQHBhcmFtIHtQb2ludCB8IFBvc2l0aW9uIHwgbnVsbCB8IHVuZGVmaW5lZH0gcGxhY2VcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkfSBbb3JpZ2luXVxuICAgKiBAcmV0dXJuc1xuICAgKlxuICAgKiBAb3ZlcmxvYWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlYXNvblxuICAgKiBAcGFyYW0ge3N0cmluZyB8IG51bGwgfCB1bmRlZmluZWR9IFtvcmlnaW5dXG4gICAqIEByZXR1cm5zXG4gICAqXG4gICAqIEBvdmVybG9hZFxuICAgKiBAcGFyYW0ge0Vycm9yIHwgVkZpbGVNZXNzYWdlfSBjYXVzZVxuICAgKiBAcGFyYW0ge05vZGUgfCBOb2RlTGlrZSB8IG51bGwgfCB1bmRlZmluZWR9IHBhcmVudFxuICAgKiBAcGFyYW0ge3N0cmluZyB8IG51bGwgfCB1bmRlZmluZWR9IFtvcmlnaW5dXG4gICAqIEByZXR1cm5zXG4gICAqXG4gICAqIEBvdmVybG9hZFxuICAgKiBAcGFyYW0ge0Vycm9yIHwgVkZpbGVNZXNzYWdlfSBjYXVzZVxuICAgKiBAcGFyYW0ge1BvaW50IHwgUG9zaXRpb24gfCBudWxsIHwgdW5kZWZpbmVkfSBwbGFjZVxuICAgKiBAcGFyYW0ge3N0cmluZyB8IG51bGwgfCB1bmRlZmluZWR9IFtvcmlnaW5dXG4gICAqIEByZXR1cm5zXG4gICAqXG4gICAqIEBvdmVybG9hZFxuICAgKiBAcGFyYW0ge0Vycm9yIHwgVkZpbGVNZXNzYWdlfSBjYXVzZVxuICAgKiBAcGFyYW0ge3N0cmluZyB8IG51bGwgfCB1bmRlZmluZWR9IFtvcmlnaW5dXG4gICAqIEByZXR1cm5zXG4gICAqXG4gICAqIEBwYXJhbSB7RXJyb3IgfCBWRmlsZU1lc3NhZ2UgfCBzdHJpbmd9IGNhdXNlT3JSZWFzb25cbiAgICogICBSZWFzb24gZm9yIG1lc3NhZ2UsIHNob3VsZCB1c2UgbWFya2Rvd24uXG4gICAqIEBwYXJhbSB7Tm9kZSB8IE5vZGVMaWtlIHwgT3B0aW9ucyB8IFBvaW50IHwgUG9zaXRpb24gfCBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkfSBbb3B0aW9uc09yUGFyZW50T3JQbGFjZV1cbiAgICogICBDb25maWd1cmF0aW9uIChvcHRpb25hbCkuXG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZH0gW29yaWdpbl1cbiAgICogICBQbGFjZSBpbiBjb2RlIHdoZXJlIHRoZSBtZXNzYWdlIG9yaWdpbmF0ZXMgKGV4YW1wbGU6XG4gICAqICAgYCdteS1wYWNrYWdlOm15LXJ1bGUnYCBvciBgJ215LXJ1bGUnYCkuXG4gICAqIEByZXR1cm5zXG4gICAqICAgSW5zdGFuY2Ugb2YgYFZGaWxlTWVzc2FnZWAuXG4gICAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuICBjb25zdHJ1Y3RvcihjYXVzZU9yUmVhc29uLCBvcHRpb25zT3JQYXJlbnRPclBsYWNlLCBvcmlnaW4pIHtcbiAgICBzdXBlcigpXG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnNPclBhcmVudE9yUGxhY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICBvcmlnaW4gPSBvcHRpb25zT3JQYXJlbnRPclBsYWNlXG4gICAgICBvcHRpb25zT3JQYXJlbnRPclBsYWNlID0gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gICAgbGV0IHJlYXNvbiA9ICcnXG4gICAgLyoqIEB0eXBlIHtPcHRpb25zfSAqL1xuICAgIGxldCBvcHRpb25zID0ge31cbiAgICBsZXQgbGVnYWN5Q2F1c2UgPSBmYWxzZVxuXG4gICAgaWYgKG9wdGlvbnNPclBhcmVudE9yUGxhY2UpIHtcbiAgICAgIC8vIFBvaW50LlxuICAgICAgaWYgKFxuICAgICAgICAnbGluZScgaW4gb3B0aW9uc09yUGFyZW50T3JQbGFjZSAmJlxuICAgICAgICAnY29sdW1uJyBpbiBvcHRpb25zT3JQYXJlbnRPclBsYWNlXG4gICAgICApIHtcbiAgICAgICAgb3B0aW9ucyA9IHtwbGFjZTogb3B0aW9uc09yUGFyZW50T3JQbGFjZX1cbiAgICAgIH1cbiAgICAgIC8vIFBvc2l0aW9uLlxuICAgICAgZWxzZSBpZiAoXG4gICAgICAgICdzdGFydCcgaW4gb3B0aW9uc09yUGFyZW50T3JQbGFjZSAmJlxuICAgICAgICAnZW5kJyBpbiBvcHRpb25zT3JQYXJlbnRPclBsYWNlXG4gICAgICApIHtcbiAgICAgICAgb3B0aW9ucyA9IHtwbGFjZTogb3B0aW9uc09yUGFyZW50T3JQbGFjZX1cbiAgICAgIH1cbiAgICAgIC8vIE5vZGUuXG4gICAgICBlbHNlIGlmICgndHlwZScgaW4gb3B0aW9uc09yUGFyZW50T3JQbGFjZSkge1xuICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgIGFuY2VzdG9yczogW29wdGlvbnNPclBhcmVudE9yUGxhY2VdLFxuICAgICAgICAgIHBsYWNlOiBvcHRpb25zT3JQYXJlbnRPclBsYWNlLnBvc2l0aW9uXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIE9wdGlvbnMuXG4gICAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IHsuLi5vcHRpb25zT3JQYXJlbnRPclBsYWNlfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY2F1c2VPclJlYXNvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJlYXNvbiA9IGNhdXNlT3JSZWFzb25cbiAgICB9XG4gICAgLy8gRXJyb3IuXG4gICAgZWxzZSBpZiAoIW9wdGlvbnMuY2F1c2UgJiYgY2F1c2VPclJlYXNvbikge1xuICAgICAgbGVnYWN5Q2F1c2UgPSB0cnVlXG4gICAgICByZWFzb24gPSBjYXVzZU9yUmVhc29uLm1lc3NhZ2VcbiAgICAgIG9wdGlvbnMuY2F1c2UgPSBjYXVzZU9yUmVhc29uXG4gICAgfVxuXG4gICAgaWYgKCFvcHRpb25zLnJ1bGVJZCAmJiAhb3B0aW9ucy5zb3VyY2UgJiYgdHlwZW9mIG9yaWdpbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gb3JpZ2luLmluZGV4T2YoJzonKVxuXG4gICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIG9wdGlvbnMucnVsZUlkID0gb3JpZ2luXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcHRpb25zLnNvdXJjZSA9IG9yaWdpbi5zbGljZSgwLCBpbmRleClcbiAgICAgICAgb3B0aW9ucy5ydWxlSWQgPSBvcmlnaW4uc2xpY2UoaW5kZXggKyAxKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghb3B0aW9ucy5wbGFjZSAmJiBvcHRpb25zLmFuY2VzdG9ycyAmJiBvcHRpb25zLmFuY2VzdG9ycykge1xuICAgICAgY29uc3QgcGFyZW50ID0gb3B0aW9ucy5hbmNlc3RvcnNbb3B0aW9ucy5hbmNlc3RvcnMubGVuZ3RoIC0gMV1cblxuICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICBvcHRpb25zLnBsYWNlID0gcGFyZW50LnBvc2l0aW9uXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnQgPVxuICAgICAgb3B0aW9ucy5wbGFjZSAmJiAnc3RhcnQnIGluIG9wdGlvbnMucGxhY2VcbiAgICAgICAgPyBvcHRpb25zLnBsYWNlLnN0YXJ0XG4gICAgICAgIDogb3B0aW9ucy5wbGFjZVxuXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG4gICAgLyoqXG4gICAgICogU3RhY2sgb2YgYW5jZXN0b3Igbm9kZXMgc3Vycm91bmRpbmcgdGhlIG1lc3NhZ2UuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7QXJyYXk8Tm9kZT4gfCB1bmRlZmluZWR9XG4gICAgICovXG4gICAgdGhpcy5hbmNlc3RvcnMgPSBvcHRpb25zLmFuY2VzdG9ycyB8fCB1bmRlZmluZWRcblxuICAgIC8qKlxuICAgICAqIE9yaWdpbmFsIGVycm9yIGNhdXNlIG9mIHRoZSBtZXNzYWdlLlxuICAgICAqXG4gICAgICogQHR5cGUge0Vycm9yIHwgdW5kZWZpbmVkfVxuICAgICAqL1xuICAgIHRoaXMuY2F1c2UgPSBvcHRpb25zLmNhdXNlIHx8IHVuZGVmaW5lZFxuXG4gICAgLyoqXG4gICAgICogU3RhcnRpbmcgY29sdW1uIG9mIG1lc3NhZ2UuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyIHwgdW5kZWZpbmVkfVxuICAgICAqL1xuICAgIHRoaXMuY29sdW1uID0gc3RhcnQgPyBzdGFydC5jb2x1bW4gOiB1bmRlZmluZWRcblxuICAgIC8qKlxuICAgICAqIFN0YXRlIG9mIHByb2JsZW0uXG4gICAgICpcbiAgICAgKiAqIGB0cnVlYCDigJQgZXJyb3IsIGZpbGUgbm90IHVzYWJsZVxuICAgICAqICogYGZhbHNlYCDigJQgd2FybmluZywgY2hhbmdlIG1heSBiZSBuZWVkZWRcbiAgICAgKiAqIGB1bmRlZmluZWRgIOKAlCBjaGFuZ2UgbGlrZWx5IG5vdCBuZWVkZWRcbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH1cbiAgICAgKi9cbiAgICB0aGlzLmZhdGFsID0gdW5kZWZpbmVkXG5cbiAgICAvKipcbiAgICAgKiBQYXRoIG9mIGEgZmlsZSAodXNlZCB0aHJvdWdob3V0IHRoZSBgVkZpbGVgIGVjb3N5c3RlbSkuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nIHwgdW5kZWZpbmVkfVxuICAgICAqL1xuICAgIHRoaXMuZmlsZVxuXG4gICAgLy8gRmllbGQgZnJvbSBgRXJyb3JgLlxuICAgIC8qKlxuICAgICAqIFJlYXNvbiBmb3IgbWVzc2FnZS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5tZXNzYWdlID0gcmVhc29uXG5cbiAgICAvKipcbiAgICAgKiBTdGFydGluZyBsaW5lIG9mIGVycm9yLlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlciB8IHVuZGVmaW5lZH1cbiAgICAgKi9cbiAgICB0aGlzLmxpbmUgPSBzdGFydCA/IHN0YXJ0LmxpbmUgOiB1bmRlZmluZWRcblxuICAgIC8vIEZpZWxkIGZyb20gYEVycm9yYC5cbiAgICAvKipcbiAgICAgKiBTZXJpYWxpemVkIHBvc2l0aW9uYWwgaW5mbyBvZiBtZXNzYWdlLlxuICAgICAqXG4gICAgICogT24gbm9ybWFsIGVycm9ycywgdGhpcyB3b3VsZCBiZSBzb21ldGhpbmcgbGlrZSBgUGFyc2VFcnJvcmAsIGJ1aXQgaW5cbiAgICAgKiBgVkZpbGVgIG1lc3NhZ2VzIHdlIHVzZSB0aGlzIHNwYWNlIHRvIHNob3cgd2hlcmUgYW4gZXJyb3IgaGFwcGVuZWQuXG4gICAgICovXG4gICAgdGhpcy5uYW1lID0gc3RyaW5naWZ5UG9zaXRpb24ob3B0aW9ucy5wbGFjZSkgfHwgJzE6MSdcblxuICAgIC8qKlxuICAgICAqIFBsYWNlIG9mIG1lc3NhZ2UuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7UG9pbnQgfCBQb3NpdGlvbiB8IHVuZGVmaW5lZH1cbiAgICAgKi9cbiAgICB0aGlzLnBsYWNlID0gb3B0aW9ucy5wbGFjZSB8fCB1bmRlZmluZWRcblxuICAgIC8qKlxuICAgICAqIFJlYXNvbiBmb3IgbWVzc2FnZSwgc2hvdWxkIHVzZSBtYXJrZG93bi5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5yZWFzb24gPSB0aGlzLm1lc3NhZ2VcblxuICAgIC8qKlxuICAgICAqIENhdGVnb3J5IG9mIG1lc3NhZ2UgKGV4YW1wbGU6IGAnbXktcnVsZSdgKS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmcgfCB1bmRlZmluZWR9XG4gICAgICovXG4gICAgdGhpcy5ydWxlSWQgPSBvcHRpb25zLnJ1bGVJZCB8fCB1bmRlZmluZWRcblxuICAgIC8qKlxuICAgICAqIE5hbWVzcGFjZSBvZiBtZXNzYWdlIChleGFtcGxlOiBgJ215LXBhY2thZ2UnYCkuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nIHwgdW5kZWZpbmVkfVxuICAgICAqL1xuICAgIHRoaXMuc291cmNlID0gb3B0aW9ucy5zb3VyY2UgfHwgdW5kZWZpbmVkXG5cbiAgICAvLyBGaWVsZCBmcm9tIGBFcnJvcmAuXG4gICAgLyoqXG4gICAgICogU3RhY2sgb2YgbWVzc2FnZS5cbiAgICAgKlxuICAgICAqIFRoaXMgaXMgdXNlZCBieSBub3JtYWwgZXJyb3JzIHRvIHNob3cgd2hlcmUgc29tZXRoaW5nIGhhcHBlbmVkIGluXG4gICAgICogcHJvZ3JhbW1pbmcgY29kZSwgaXJyZWxldmFudCBmb3IgYFZGaWxlYCBtZXNzYWdlcyxcbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5zdGFjayA9XG4gICAgICBsZWdhY3lDYXVzZSAmJiBvcHRpb25zLmNhdXNlICYmIHR5cGVvZiBvcHRpb25zLmNhdXNlLnN0YWNrID09PSAnc3RyaW5nJ1xuICAgICAgICA/IG9wdGlvbnMuY2F1c2Uuc3RhY2tcbiAgICAgICAgOiAnJ1xuXG4gICAgLy8gVGhlIGZvbGxvd2luZyBmaWVsZHMgYXJlIOKAnHdlbGwga25vd27igJ0uXG4gICAgLy8gTm90IHN0YW5kYXJkLlxuICAgIC8vIEZlZWwgZnJlZSB0byBhZGQgb3RoZXIgbm9uLXN0YW5kYXJkIGZpZWxkcyB0byB5b3VyIG1lc3NhZ2VzLlxuXG4gICAgLyoqXG4gICAgICogU3BlY2lmeSB0aGUgc291cmNlIHZhbHVlIHRoYXTigJlzIGJlaW5nIHJlcG9ydGVkLCB3aGljaCBpcyBkZWVtZWRcbiAgICAgKiBpbmNvcnJlY3QuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nIHwgdW5kZWZpbmVkfVxuICAgICAqL1xuICAgIHRoaXMuYWN0dWFsXG5cbiAgICAvKipcbiAgICAgKiBTdWdnZXN0IGFjY2VwdGFibGUgdmFsdWVzIHRoYXQgY2FuIGJlIHVzZWQgaW5zdGVhZCBvZiBgYWN0dWFsYC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtBcnJheTxzdHJpbmc+IHwgdW5kZWZpbmVkfVxuICAgICAqL1xuICAgIHRoaXMuZXhwZWN0ZWRcblxuICAgIC8qKlxuICAgICAqIExvbmcgZm9ybSBkZXNjcmlwdGlvbiBvZiB0aGUgbWVzc2FnZSAoeW91IHNob3VsZCB1c2UgbWFya2Rvd24pLlxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZyB8IHVuZGVmaW5lZH1cbiAgICAgKi9cbiAgICB0aGlzLm5vdGVcblxuICAgIC8qKlxuICAgICAqIExpbmsgdG8gZG9jcyBmb3IgdGhlIG1lc3NhZ2UuXG4gICAgICpcbiAgICAgKiA+IPCfkYkgKipOb3RlKio6IHRoaXMgbXVzdCBiZSBhbiBhYnNvbHV0ZSBVUkwgdGhhdCBjYW4gYmUgcGFzc2VkIGFzIGB4YFxuICAgICAqID4gdG8gYG5ldyBVUkwoeClgLlxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZyB8IHVuZGVmaW5lZH1cbiAgICAgKi9cbiAgICB0aGlzLnVybFxuICAgIC8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG4gIH1cbn1cblxuVkZpbGVNZXNzYWdlLnByb3RvdHlwZS5maWxlID0gJydcblZGaWxlTWVzc2FnZS5wcm90b3R5cGUubmFtZSA9ICcnXG5WRmlsZU1lc3NhZ2UucHJvdG90eXBlLnJlYXNvbiA9ICcnXG5WRmlsZU1lc3NhZ2UucHJvdG90eXBlLm1lc3NhZ2UgPSAnJ1xuVkZpbGVNZXNzYWdlLnByb3RvdHlwZS5zdGFjayA9ICcnXG5WRmlsZU1lc3NhZ2UucHJvdG90eXBlLmNvbHVtbiA9IHVuZGVmaW5lZFxuVkZpbGVNZXNzYWdlLnByb3RvdHlwZS5saW5lID0gdW5kZWZpbmVkXG5WRmlsZU1lc3NhZ2UucHJvdG90eXBlLmFuY2VzdG9ycyA9IHVuZGVmaW5lZFxuVkZpbGVNZXNzYWdlLnByb3RvdHlwZS5jYXVzZSA9IHVuZGVmaW5lZFxuVkZpbGVNZXNzYWdlLnByb3RvdHlwZS5mYXRhbCA9IHVuZGVmaW5lZFxuVkZpbGVNZXNzYWdlLnByb3RvdHlwZS5wbGFjZSA9IHVuZGVmaW5lZFxuVkZpbGVNZXNzYWdlLnByb3RvdHlwZS5ydWxlSWQgPSB1bmRlZmluZWRcblZGaWxlTWVzc2FnZS5wcm90b3R5cGUuc291cmNlID0gdW5kZWZpbmVkXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/vfile-message/lib/index.js\n");

/***/ })

};
;