"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/trough";
exports.ids = ["vendor-chunks/trough"];
exports.modules = {

/***/ "(ssr)/./node_modules/trough/lib/index.js":
/*!******************************************!*\
  !*** ./node_modules/trough/lib/index.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   trough: () => (/* binding */ trough),\n/* harmony export */   wrap: () => (/* binding */ wrap)\n/* harmony export */ });\n// To do: remove `void`s\n// To do: remove `null` from output of our APIs, allow it as user APIs.\n\n/**\n * @typedef {(error?: Error | null | undefined, ...output: Array<any>) => void} Callback\n *   Callback.\n *\n * @typedef {(...input: Array<any>) => any} Middleware\n *   Ware.\n *\n * @typedef Pipeline\n *   Pipeline.\n * @property {Run} run\n *   Run the pipeline.\n * @property {Use} use\n *   Add middleware.\n *\n * @typedef {(...input: Array<any>) => void} Run\n *   Call all middleware.\n *\n *   Calls `done` on completion with either an error or the output of the\n *   last middleware.\n *\n *   > 👉 **Note**: as the length of input defines whether async functions get a\n *   > `next` function,\n *   > it’s recommended to keep `input` at one value normally.\n\n *\n * @typedef {(fn: Middleware) => Pipeline} Use\n *   Add middleware.\n */\n\n/**\n * Create new middleware.\n *\n * @returns {Pipeline}\n *   Pipeline.\n */\nfunction trough() {\n  /** @type {Array<Middleware>} */\n  const fns = []\n  /** @type {Pipeline} */\n  const pipeline = {run, use}\n\n  return pipeline\n\n  /** @type {Run} */\n  function run(...values) {\n    let middlewareIndex = -1\n    /** @type {Callback} */\n    const callback = values.pop()\n\n    if (typeof callback !== 'function') {\n      throw new TypeError('Expected function as last argument, not ' + callback)\n    }\n\n    next(null, ...values)\n\n    /**\n     * Run the next `fn`, or we’re done.\n     *\n     * @param {Error | null | undefined} error\n     * @param {Array<any>} output\n     */\n    function next(error, ...output) {\n      const fn = fns[++middlewareIndex]\n      let index = -1\n\n      if (error) {\n        callback(error)\n        return\n      }\n\n      // Copy non-nullish input into values.\n      while (++index < values.length) {\n        if (output[index] === null || output[index] === undefined) {\n          output[index] = values[index]\n        }\n      }\n\n      // Save the newly created `output` for the next call.\n      values = output\n\n      // Next or done.\n      if (fn) {\n        wrap(fn, next)(...output)\n      } else {\n        callback(null, ...output)\n      }\n    }\n  }\n\n  /** @type {Use} */\n  function use(middelware) {\n    if (typeof middelware !== 'function') {\n      throw new TypeError(\n        'Expected `middelware` to be a function, not ' + middelware\n      )\n    }\n\n    fns.push(middelware)\n    return pipeline\n  }\n}\n\n/**\n * Wrap `middleware` into a uniform interface.\n *\n * You can pass all input to the resulting function.\n * `callback` is then called with the output of `middleware`.\n *\n * If `middleware` accepts more arguments than the later given in input,\n * an extra `done` function is passed to it after that input,\n * which must be called by `middleware`.\n *\n * The first value in `input` is the main input value.\n * All other input values are the rest input values.\n * The values given to `callback` are the input values,\n * merged with every non-nullish output value.\n *\n * * if `middleware` throws an error,\n *   returns a promise that is rejected,\n *   or calls the given `done` function with an error,\n *   `callback` is called with that error\n * * if `middleware` returns a value or returns a promise that is resolved,\n *   that value is the main output value\n * * if `middleware` calls `done`,\n *   all non-nullish values except for the first one (the error) overwrite the\n *   output values\n *\n * @param {Middleware} middleware\n *   Function to wrap.\n * @param {Callback} callback\n *   Callback called with the output of `middleware`.\n * @returns {Run}\n *   Wrapped middleware.\n */\nfunction wrap(middleware, callback) {\n  /** @type {boolean} */\n  let called\n\n  return wrapped\n\n  /**\n   * Call `middleware`.\n   * @this {any}\n   * @param {Array<any>} parameters\n   * @returns {void}\n   */\n  function wrapped(...parameters) {\n    const fnExpectsCallback = middleware.length > parameters.length\n    /** @type {any} */\n    let result\n\n    if (fnExpectsCallback) {\n      parameters.push(done)\n    }\n\n    try {\n      result = middleware.apply(this, parameters)\n    } catch (error) {\n      const exception = /** @type {Error} */ (error)\n\n      // Well, this is quite the pickle.\n      // `middleware` received a callback and called it synchronously, but that\n      // threw an error.\n      // The only thing left to do is to throw the thing instead.\n      if (fnExpectsCallback && called) {\n        throw exception\n      }\n\n      return done(exception)\n    }\n\n    if (!fnExpectsCallback) {\n      if (result && result.then && typeof result.then === 'function') {\n        result.then(then, done)\n      } else if (result instanceof Error) {\n        done(result)\n      } else {\n        then(result)\n      }\n    }\n  }\n\n  /**\n   * Call `callback`, only once.\n   *\n   * @type {Callback}\n   */\n  function done(error, ...output) {\n    if (!called) {\n      called = true\n      callback(error, ...output)\n    }\n  }\n\n  /**\n   * Call `done` with one value.\n   *\n   * @param {any} [value]\n   */\n  function then(value) {\n    done(null, value)\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHJvdWdoL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLG1FQUFtRTtBQUNoRjtBQUNBO0FBQ0EsYUFBYSwrQkFBK0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLEtBQUs7QUFDbkI7QUFDQSxjQUFjLEtBQUs7QUFDbkI7QUFDQTtBQUNBLGFBQWEsZ0NBQWdDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLDhCQUE4QjtBQUMzQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUCxhQUFhLG1CQUFtQjtBQUNoQztBQUNBLGFBQWEsVUFBVTtBQUN2QixvQkFBb0I7O0FBRXBCOztBQUVBLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0EsZUFBZSxVQUFVO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDBCQUEwQjtBQUN6QyxlQUFlLFlBQVk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFlBQVk7QUFDdkI7QUFDQSxXQUFXLFVBQVU7QUFDckI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1AsYUFBYSxTQUFTO0FBQ3RCOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osYUFBYSxZQUFZO0FBQ3pCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxlQUFlLEtBQUs7QUFDcEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sbUNBQW1DLE9BQU87O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2dlbGF0by8uL25vZGVfbW9kdWxlcy90cm91Z2gvbGliL2luZGV4LmpzP2MzZGIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVG8gZG86IHJlbW92ZSBgdm9pZGBzXG4vLyBUbyBkbzogcmVtb3ZlIGBudWxsYCBmcm9tIG91dHB1dCBvZiBvdXIgQVBJcywgYWxsb3cgaXQgYXMgdXNlciBBUElzLlxuXG4vKipcbiAqIEB0eXBlZGVmIHsoZXJyb3I/OiBFcnJvciB8IG51bGwgfCB1bmRlZmluZWQsIC4uLm91dHB1dDogQXJyYXk8YW55PikgPT4gdm9pZH0gQ2FsbGJhY2tcbiAqICAgQ2FsbGJhY2suXG4gKlxuICogQHR5cGVkZWYgeyguLi5pbnB1dDogQXJyYXk8YW55PikgPT4gYW55fSBNaWRkbGV3YXJlXG4gKiAgIFdhcmUuXG4gKlxuICogQHR5cGVkZWYgUGlwZWxpbmVcbiAqICAgUGlwZWxpbmUuXG4gKiBAcHJvcGVydHkge1J1bn0gcnVuXG4gKiAgIFJ1biB0aGUgcGlwZWxpbmUuXG4gKiBAcHJvcGVydHkge1VzZX0gdXNlXG4gKiAgIEFkZCBtaWRkbGV3YXJlLlxuICpcbiAqIEB0eXBlZGVmIHsoLi4uaW5wdXQ6IEFycmF5PGFueT4pID0+IHZvaWR9IFJ1blxuICogICBDYWxsIGFsbCBtaWRkbGV3YXJlLlxuICpcbiAqICAgQ2FsbHMgYGRvbmVgIG9uIGNvbXBsZXRpb24gd2l0aCBlaXRoZXIgYW4gZXJyb3Igb3IgdGhlIG91dHB1dCBvZiB0aGVcbiAqICAgbGFzdCBtaWRkbGV3YXJlLlxuICpcbiAqICAgPiDwn5GJICoqTm90ZSoqOiBhcyB0aGUgbGVuZ3RoIG9mIGlucHV0IGRlZmluZXMgd2hldGhlciBhc3luYyBmdW5jdGlvbnMgZ2V0IGFcbiAqICAgPiBgbmV4dGAgZnVuY3Rpb24sXG4gKiAgID4gaXTigJlzIHJlY29tbWVuZGVkIHRvIGtlZXAgYGlucHV0YCBhdCBvbmUgdmFsdWUgbm9ybWFsbHkuXG5cbiAqXG4gKiBAdHlwZWRlZiB7KGZuOiBNaWRkbGV3YXJlKSA9PiBQaXBlbGluZX0gVXNlXG4gKiAgIEFkZCBtaWRkbGV3YXJlLlxuICovXG5cbi8qKlxuICogQ3JlYXRlIG5ldyBtaWRkbGV3YXJlLlxuICpcbiAqIEByZXR1cm5zIHtQaXBlbGluZX1cbiAqICAgUGlwZWxpbmUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cm91Z2goKSB7XG4gIC8qKiBAdHlwZSB7QXJyYXk8TWlkZGxld2FyZT59ICovXG4gIGNvbnN0IGZucyA9IFtdXG4gIC8qKiBAdHlwZSB7UGlwZWxpbmV9ICovXG4gIGNvbnN0IHBpcGVsaW5lID0ge3J1biwgdXNlfVxuXG4gIHJldHVybiBwaXBlbGluZVxuXG4gIC8qKiBAdHlwZSB7UnVufSAqL1xuICBmdW5jdGlvbiBydW4oLi4udmFsdWVzKSB7XG4gICAgbGV0IG1pZGRsZXdhcmVJbmRleCA9IC0xXG4gICAgLyoqIEB0eXBlIHtDYWxsYmFja30gKi9cbiAgICBjb25zdCBjYWxsYmFjayA9IHZhbHVlcy5wb3AoKVxuXG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgZnVuY3Rpb24gYXMgbGFzdCBhcmd1bWVudCwgbm90ICcgKyBjYWxsYmFjaylcbiAgICB9XG5cbiAgICBuZXh0KG51bGwsIC4uLnZhbHVlcylcblxuICAgIC8qKlxuICAgICAqIFJ1biB0aGUgbmV4dCBgZm5gLCBvciB3ZeKAmXJlIGRvbmUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Vycm9yIHwgbnVsbCB8IHVuZGVmaW5lZH0gZXJyb3JcbiAgICAgKiBAcGFyYW0ge0FycmF5PGFueT59IG91dHB1dFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG5leHQoZXJyb3IsIC4uLm91dHB1dCkge1xuICAgICAgY29uc3QgZm4gPSBmbnNbKyttaWRkbGV3YXJlSW5kZXhdXG4gICAgICBsZXQgaW5kZXggPSAtMVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyb3IpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBDb3B5IG5vbi1udWxsaXNoIGlucHV0IGludG8gdmFsdWVzLlxuICAgICAgd2hpbGUgKCsraW5kZXggPCB2YWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgIGlmIChvdXRwdXRbaW5kZXhdID09PSBudWxsIHx8IG91dHB1dFtpbmRleF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIG91dHB1dFtpbmRleF0gPSB2YWx1ZXNbaW5kZXhdXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gU2F2ZSB0aGUgbmV3bHkgY3JlYXRlZCBgb3V0cHV0YCBmb3IgdGhlIG5leHQgY2FsbC5cbiAgICAgIHZhbHVlcyA9IG91dHB1dFxuXG4gICAgICAvLyBOZXh0IG9yIGRvbmUuXG4gICAgICBpZiAoZm4pIHtcbiAgICAgICAgd3JhcChmbiwgbmV4dCkoLi4ub3V0cHV0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgLi4ub3V0cHV0KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKiBAdHlwZSB7VXNlfSAqL1xuICBmdW5jdGlvbiB1c2UobWlkZGVsd2FyZSkge1xuICAgIGlmICh0eXBlb2YgbWlkZGVsd2FyZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgJ0V4cGVjdGVkIGBtaWRkZWx3YXJlYCB0byBiZSBhIGZ1bmN0aW9uLCBub3QgJyArIG1pZGRlbHdhcmVcbiAgICAgIClcbiAgICB9XG5cbiAgICBmbnMucHVzaChtaWRkZWx3YXJlKVxuICAgIHJldHVybiBwaXBlbGluZVxuICB9XG59XG5cbi8qKlxuICogV3JhcCBgbWlkZGxld2FyZWAgaW50byBhIHVuaWZvcm0gaW50ZXJmYWNlLlxuICpcbiAqIFlvdSBjYW4gcGFzcyBhbGwgaW5wdXQgdG8gdGhlIHJlc3VsdGluZyBmdW5jdGlvbi5cbiAqIGBjYWxsYmFja2AgaXMgdGhlbiBjYWxsZWQgd2l0aCB0aGUgb3V0cHV0IG9mIGBtaWRkbGV3YXJlYC5cbiAqXG4gKiBJZiBgbWlkZGxld2FyZWAgYWNjZXB0cyBtb3JlIGFyZ3VtZW50cyB0aGFuIHRoZSBsYXRlciBnaXZlbiBpbiBpbnB1dCxcbiAqIGFuIGV4dHJhIGBkb25lYCBmdW5jdGlvbiBpcyBwYXNzZWQgdG8gaXQgYWZ0ZXIgdGhhdCBpbnB1dCxcbiAqIHdoaWNoIG11c3QgYmUgY2FsbGVkIGJ5IGBtaWRkbGV3YXJlYC5cbiAqXG4gKiBUaGUgZmlyc3QgdmFsdWUgaW4gYGlucHV0YCBpcyB0aGUgbWFpbiBpbnB1dCB2YWx1ZS5cbiAqIEFsbCBvdGhlciBpbnB1dCB2YWx1ZXMgYXJlIHRoZSByZXN0IGlucHV0IHZhbHVlcy5cbiAqIFRoZSB2YWx1ZXMgZ2l2ZW4gdG8gYGNhbGxiYWNrYCBhcmUgdGhlIGlucHV0IHZhbHVlcyxcbiAqIG1lcmdlZCB3aXRoIGV2ZXJ5IG5vbi1udWxsaXNoIG91dHB1dCB2YWx1ZS5cbiAqXG4gKiAqIGlmIGBtaWRkbGV3YXJlYCB0aHJvd3MgYW4gZXJyb3IsXG4gKiAgIHJldHVybnMgYSBwcm9taXNlIHRoYXQgaXMgcmVqZWN0ZWQsXG4gKiAgIG9yIGNhbGxzIHRoZSBnaXZlbiBgZG9uZWAgZnVuY3Rpb24gd2l0aCBhbiBlcnJvcixcbiAqICAgYGNhbGxiYWNrYCBpcyBjYWxsZWQgd2l0aCB0aGF0IGVycm9yXG4gKiAqIGlmIGBtaWRkbGV3YXJlYCByZXR1cm5zIGEgdmFsdWUgb3IgcmV0dXJucyBhIHByb21pc2UgdGhhdCBpcyByZXNvbHZlZCxcbiAqICAgdGhhdCB2YWx1ZSBpcyB0aGUgbWFpbiBvdXRwdXQgdmFsdWVcbiAqICogaWYgYG1pZGRsZXdhcmVgIGNhbGxzIGBkb25lYCxcbiAqICAgYWxsIG5vbi1udWxsaXNoIHZhbHVlcyBleGNlcHQgZm9yIHRoZSBmaXJzdCBvbmUgKHRoZSBlcnJvcikgb3ZlcndyaXRlIHRoZVxuICogICBvdXRwdXQgdmFsdWVzXG4gKlxuICogQHBhcmFtIHtNaWRkbGV3YXJlfSBtaWRkbGV3YXJlXG4gKiAgIEZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0NhbGxiYWNrfSBjYWxsYmFja1xuICogICBDYWxsYmFjayBjYWxsZWQgd2l0aCB0aGUgb3V0cHV0IG9mIGBtaWRkbGV3YXJlYC5cbiAqIEByZXR1cm5zIHtSdW59XG4gKiAgIFdyYXBwZWQgbWlkZGxld2FyZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdyYXAobWlkZGxld2FyZSwgY2FsbGJhY2spIHtcbiAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xuICBsZXQgY2FsbGVkXG5cbiAgcmV0dXJuIHdyYXBwZWRcblxuICAvKipcbiAgICogQ2FsbCBgbWlkZGxld2FyZWAuXG4gICAqIEB0aGlzIHthbnl9XG4gICAqIEBwYXJhbSB7QXJyYXk8YW55Pn0gcGFyYW1ldGVyc1xuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIGZ1bmN0aW9uIHdyYXBwZWQoLi4ucGFyYW1ldGVycykge1xuICAgIGNvbnN0IGZuRXhwZWN0c0NhbGxiYWNrID0gbWlkZGxld2FyZS5sZW5ndGggPiBwYXJhbWV0ZXJzLmxlbmd0aFxuICAgIC8qKiBAdHlwZSB7YW55fSAqL1xuICAgIGxldCByZXN1bHRcblxuICAgIGlmIChmbkV4cGVjdHNDYWxsYmFjaykge1xuICAgICAgcGFyYW1ldGVycy5wdXNoKGRvbmUpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9IG1pZGRsZXdhcmUuYXBwbHkodGhpcywgcGFyYW1ldGVycylcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc3QgZXhjZXB0aW9uID0gLyoqIEB0eXBlIHtFcnJvcn0gKi8gKGVycm9yKVxuXG4gICAgICAvLyBXZWxsLCB0aGlzIGlzIHF1aXRlIHRoZSBwaWNrbGUuXG4gICAgICAvLyBgbWlkZGxld2FyZWAgcmVjZWl2ZWQgYSBjYWxsYmFjayBhbmQgY2FsbGVkIGl0IHN5bmNocm9ub3VzbHksIGJ1dCB0aGF0XG4gICAgICAvLyB0aHJldyBhbiBlcnJvci5cbiAgICAgIC8vIFRoZSBvbmx5IHRoaW5nIGxlZnQgdG8gZG8gaXMgdG8gdGhyb3cgdGhlIHRoaW5nIGluc3RlYWQuXG4gICAgICBpZiAoZm5FeHBlY3RzQ2FsbGJhY2sgJiYgY2FsbGVkKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvblxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZG9uZShleGNlcHRpb24pXG4gICAgfVxuXG4gICAgaWYgKCFmbkV4cGVjdHNDYWxsYmFjaykge1xuICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbiAmJiB0eXBlb2YgcmVzdWx0LnRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmVzdWx0LnRoZW4odGhlbiwgZG9uZSlcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0IGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgZG9uZShyZXN1bHQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGVuKHJlc3VsdClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsbCBgY2FsbGJhY2tgLCBvbmx5IG9uY2UuXG4gICAqXG4gICAqIEB0eXBlIHtDYWxsYmFja31cbiAgICovXG4gIGZ1bmN0aW9uIGRvbmUoZXJyb3IsIC4uLm91dHB1dCkge1xuICAgIGlmICghY2FsbGVkKSB7XG4gICAgICBjYWxsZWQgPSB0cnVlXG4gICAgICBjYWxsYmFjayhlcnJvciwgLi4ub3V0cHV0KVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsIGBkb25lYCB3aXRoIG9uZSB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHthbnl9IFt2YWx1ZV1cbiAgICovXG4gIGZ1bmN0aW9uIHRoZW4odmFsdWUpIHtcbiAgICBkb25lKG51bGwsIHZhbHVlKVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/trough/lib/index.js\n");

/***/ })

};
;