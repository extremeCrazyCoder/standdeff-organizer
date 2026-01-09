/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/helpers/helper-functions.ts":
/*!*****************************************!*\
  !*** ./src/helpers/helper-functions.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("" +
"var __read = (this && this.__read) || function (o, n) {" +
"    var m = typeof Symbol === \"function\" && o[Symbol.iterator];" +
"    if (!m) return o;" +
"    var i = m.call(o), r, ar = [], e;" +
"    try {" +
"        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);" +
"    }" +
"    catch (error) { e = { error: error }; }" +
"    finally {" +
"        try {" +
"            if (r && !r.done && (m = i[\"return\"])) m.call(i);" +
"        }" +
"        finally { if (e) throw e.error; }" +
"    }" +
"    return ar;" +
"};" +
"Object.defineProperty(exports, \"__esModule\", ({ value: true }));" +
"exports.parseGermanDate = exports.convertDateToEpoch = exports.convertEpochToDate = exports.addThreadIdToLocalStorage = void 0;" +
"var local_storage_helper_1 = __webpack_require__(/*! ./local-storage-helper */ \"./src/helpers/local-storage-helper.ts\");" +
"var logging_helper_1 = __webpack_require__(/*! ./logging-helper */ \"./src/helpers/logging-helper.ts\");" +
"function addThreadIdToLocalStorage(currentThreadId, postId, threadName, forumName, forumId) {" +
"    var localStorageService = local_storage_helper_1.LocalStorageHelper.getInstance();" +
"    var threads = localStorageService.getAllThreads;" +
"    if (currentThreadId !== null && postId !== null && threadName !== null && forumName !== null && forumId !== null) {" +
"        var existingThread = threads[currentThreadId] !== undefined;" +
"        if (!existingThread) {" +
"            var threadData = {" +
"                threadName: threadName," +
"                forumName: forumName," +
"                forumId: forumId," +
"                sdPostId: postId," +
"                bunkerInquiryCache: []," +
"                stateOfSdTable: new Map()," +
"                packagesSent: new Map()," +
"                updatedPostIds: []" +
"            };" +
"            localStorageService.addThread(currentThreadId, threadData);" +
"        }" +
"        else {" +
"            logging_helper_1.Log.error(\"thread id is already in thread ids\");" +
"            return;" +
"        }" +
"    }" +
"    else {" +
"        if (currentThreadId === null) {" +
"            logging_helper_1.Log.error(\"current thread id is null\");" +
"        }" +
"        if (postId === null) {" +
"            logging_helper_1.Log.error(\"post id is null\");" +
"        }" +
"        if (threadName === null) {" +
"            logging_helper_1.Log.error(\"thread name is null\");" +
"        }" +
"        if (forumName === null) {" +
"            logging_helper_1.Log.error(\"forum name is null\");" +
"        }" +
"        return;" +
"    }" +
"}" +
"exports.addThreadIdToLocalStorage = addThreadIdToLocalStorage;" +
"function convertEpochToDate(epoch) {" +
"    // Convert the epoch to milliseconds and create a new Date object" +
"    var date = new Date(epoch * 1000);" +
"    // Format the date and time in the 'YYYY-MM-DDTHH:mm' format" +
"    return date.toISOString().substring(0, 16);" +
"}" +
"exports.convertEpochToDate = convertEpochToDate;" +
"function convertDateToEpoch(date) {" +
"    // Create a new Date object from the date string" +
"    var datetime = new Date(date);" +
"    // Get the time in milliseconds and convert it to seconds" +
"    return datetime.getTime() / 1000;" +
"}" +
"exports.convertDateToEpoch = convertDateToEpoch;" +
"function parseGermanDate(dateStr) {" +
"    if (!dateStr || typeof dateStr !== \"string\")" +
"        return 0;" +
"    // Erwartetes Format: \"DD.MM.YYYY HH:MM\"" +
"    var _a = __read(dateStr.split(\" \"), 2), d = _a[0], t = _a[1];" +
"    var _b = __read(d.split(\".\").map(Number), 3), day = _b[0], month = _b[1], year = _b[2];" +
"    var _c = __read(t.split(\":\").map(Number), 2), hour = _c[0], minute = _c[1];" +
"    // gültiges Date-Objekt erzeugen → richtig interpretiert" +
"    return new Date(year, month - 1, day, hour, minute).getTime();" +
"}" +
"exports.parseGermanDate = parseGermanDate;" +
"" +
"" +
"//# sourceURL=webpack://standdeff-organizer/./src/helpers/helper-functions.ts?");

/***/ }),

/***/ "./src/helpers/local-storage-helper.ts":
/*!*********************************************!*\
  !*** ./src/helpers/local-storage-helper.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("" +
"Object.defineProperty(exports, \"__esModule\", ({ value: true }));" +
"exports.LocalStorageHelper = void 0;" +
"var logging_helper_1 = __webpack_require__(/*! ./logging-helper */ \"./src/helpers/logging-helper.ts\");" +
"var LocalStorageHelper = /** @class */ (function () {" +
"    function LocalStorageHelper() {" +
"        var initData = localStorage.getItem(\"standdeff-organizer\");" +
"        if (initData !== null && this.isStringValidJson(initData)) {" +
"            this._localStorageData = JSON.parse(initData);" +
"            return;" +
"        }" +
"        this._localStorageData = {" +
"            generalSettings: {" +
"                newThread: false," +
"                firstStartPopup: true," +
"                automateMassenUt: false," +
"                sdGroupId: \"0\"," +
"                sortBy: \"\"," +
"                selectedTemplate: \"\"," +
"                preventDuplicateDestination: true," +
"                swordLfz: 22," +
"                templateData: []," +
"                groupData: []" +
"            }," +
"            threads: {}" +
"        };" +
"        this.storeDataInLocalStorage(this._localStorageData);" +
"    }" +
"    LocalStorageHelper.prototype.isStringValidJson = function (str) {" +
"        try {" +
"            JSON.parse(str);" +
"        }" +
"        catch (e) {" +
"            logging_helper_1.Log.error(\"Error parsing string to JSON: \" + str);" +
"            return false;" +
"        }" +
"        return true;" +
"    };" +
"    LocalStorageHelper.prototype.storeDataInLocalStorage = function (data) {" +
"        logging_helper_1.Log.info(\"storing data in local storage\");" +
"        logging_helper_1.Log.info(data);" +
"        var test = JSON.stringify(data);" +
"        try {" +
"            localStorage.setItem(\"standdeff-organizer\", test);" +
"        }" +
"        catch (e) {" +
"            logging_helper_1.Log.error(\"Error storing data in LocalStorage: \" + e);" +
"        }" +
"    };" +
"    LocalStorageHelper.prototype.updateFromLocalStorage = function () {" +
"        var data = localStorage.getItem(\"standdeff-organizer\");" +
"        if (data === null) {" +
"            logging_helper_1.Log.error(\"No data found in LocalStorage for key: \" + \"standdeff-organizer\");" +
"        }" +
"        if (data !== null && this.isStringValidJson(data)) {" +
"            this._localStorageData = JSON.parse(data);" +
"        }" +
"    };" +
"    LocalStorageHelper.getInstance = function () {" +
"        if (!LocalStorageHelper.instance) {" +
"            LocalStorageHelper.instance = new LocalStorageHelper();" +
"        }" +
"        return LocalStorageHelper.instance;" +
"    };" +
"    Object.defineProperty(LocalStorageHelper.prototype, \"getNewThread\", {" +
"        // generalSettings getter and setter" +
"        get: function () {" +
"            this.updateFromLocalStorage();" +
"            return this._localStorageData.generalSettings.newThread;" +
"        }," +
"        enumerable: false," +
"        configurable: true" +
"    });" +
"    Object.defineProperty(LocalStorageHelper.prototype, \"setNewThread\", {" +
"        set: function (value) {" +
"            this._localStorageData.generalSettings.newThread = value;" +
"            this.storeDataInLocalStorage(this._localStorageData);" +
"        }," +
"        enumerable: false," +
"        configurable: true" +
"    });" +
"    Object.defineProperty(LocalStorageHelper.prototype, \"getFirstStartPopup\", {" +
"        get: function () {" +
"            this.updateFromLocalStorage();" +
"            return this._localStorageData.generalSettings.firstStartPopup;" +
"        }," +
"        enumerable: false," +
"        configurable: true" +
"    });" +
"    Object.defineProperty(LocalStorageHelper.prototype, \"setFirstStartPopup\", {" +
"        set: function (value) {" +
"            this._localStorageData.generalSettings.firstStartPopup = value;" +
"            this.storeDataInLocalStorage(this._localStorageData);" +
"        }," +
"        enumerable: false," +
"        configurable: true" +
"    });" +
"    Object.defineProperty(LocalStorageHelper.prototype, \"getSortBy\", {" +
"        get: function () {" +
"            this.updateFromLocalStorage();" +
"            return this._localStorageData.generalSettings.sortBy;" +
"        }," +
"        enumerable: false," +
"        configurable: true" +
"    });" +
"    Object.defineProperty(LocalStorageHelper.prototype, \"setSortBy\", {" +
"        set: function (value) {" +
"            this._localStorageData.generalSettings.sortBy = value;" +
"            this.storeDataInLocalStorage(this._localStorageData);" +
"        }," +
"        enumerable: false," +
"        configurable: true" +
"    });" +
"    Object.defineProperty(LocalStorageHelper.prototype, \"getAutomateMassenUt\", {" +
"        get: function () {" +
"            this.updateFromLocalStorage();" +
"            return this._localStorageData.generalSettings.automateMassenUt;" +
"        }," +
"        enumerable: false," +
"        configurable: true" +
"    });" +
"    Object.defineProperty(LocalStorageHelper.prototype, \"setAutomateMassenUt\", {" +
"        set: function (value) {" +
"            this._localStorageData.generalSettings.automateMassenUt = value;" +
"            this.storeDataInLocalStorage(this._localStorageData);" +
"        }," +
"        enumerable: false," +
"        configurable: true" +
"    });" +
"    Object.defineProperty(LocalStorageHelper.prototype, \"getPreventDuplicateDestination\", {" +
"        get: function () {" +
"            this.updateFromLocalStorage();" +
"            return this._localStorageData.generalSettings.preventDuplicateDestination;" +
"        }," +
"        enumerable: false," +
"        configurable: true" +
"    });" +
"    Object.defineProperty(LocalStorageHelper.prototype, \"setPreventDuplicateDestination\", {" +
"        set: function (value) {" +
"            this._localStorageData.generalSettings.preventDuplicateDestination = value;" +
"            this.storeDataInLocalStorage(this._localStorageData);" +
"        }," +
"        enumerable: false," +
"        configurable: true" +
"    });" +
"    Object.defineProperty(LocalStorageHelper.prototype, \"getSdGroupId\", {" +
"        get: function () {" +
"            this.updateFromLocalStorage();" +
"            return this._localStorageData.generalSettings.sdGroupId;" +
"        }," +
"        enumerable: false," +
"        configurable: true" +
"    });" +
"    Object.defineProperty(LocalStorageHelper.prototype, \"setSdGroupId\", {" +
"        set: function (value) {" +
"            this._localStorageData.generalSettings.sdGroupId = value;" +
"            this.storeDataInLocalStorage(this._localStorageData);" +
"        }," +
"        enumerable: false," +
"        configurable: true" +
"    });" +
"    Object.defineProperty(LocalStorageHelper.prototype, \"getGroupData\", {" +
"        get: function () {" +
"            this.updateFromLocalStorage();" +
"            return this._localStorageData.generalSettings.groupData;" +
"        }," +
"        enumerable: false," +
"        configurable: true" +
"    });" +
"    Object.defineProperty(LocalStorageHelper.prototype, \"setGroupData\", {" +
"        set: function (value) {" +
"            this._localStorageData.generalSettings.groupData = value;" +
"            this.storeDataInLocalStorage(this._localStorageData);" +
"        }," +
"        enumerable: false," +
"        configurable: true" +
"    });" +
"    Object.defineProperty(LocalStorageHelper.prototype, \"getSwordLfz\", {" +
"        get: function () {" +
"            this.updateFromLocalStorage();" +
"            return this._localStorageData.generalSettings.swordLfz;" +
"        }," +
"        enumerable: false," +
"        configurable: true" +
"    });" +
"    Object.defineProperty(LocalStorageHelper.prototype, \"setSwordLfz\", {" +
"        set: function (value) {" +
"            this._localStorageData.generalSettings.swordLfz = value;" +
"            this.storeDataInLocalStorage(this._localStorageData);" +
"        }," +
"        enumerable: false," +
"        configurable: true" +
"    });" +
"    Object.defineProperty(LocalStorageHelper.prototype, \"getTemplateData\", {" +
"        get: function () {" +
"            this.updateFromLocalStorage();" +
"            return this._localStorageData.generalSettings.templateData;" +
"        }," +
"        enumerable: false," +
"        configurable: true" +
"    });" +
"    Object.defineProperty(LocalStorageHelper.prototype, \"setTemplateData\", {" +
"        set: function (value) {" +
"            this._localStorageData.generalSettings.templateData = value;" +
"            this.storeDataInLocalStorage(this._localStorageData);" +
"        }," +
"        enumerable: false," +
"        configurable: true" +
"    });" +
"    Object.defineProperty(LocalStorageHelper.prototype, \"getSelectedTemplate\", {" +
"        get: function () {" +
"            this.updateFromLocalStorage();" +
"            return this._localStorageData.generalSettings.selectedTemplate;" +
"        }," +
"        enumerable: false," +
"        configurable: true" +
"    });" +
"    Object.defineProperty(LocalStorageHelper.prototype, \"setSelectedTemplate\", {" +
"        set: function (value) {" +
"            this._localStorageData.generalSettings.selectedTemplate = value;" +
"            this.storeDataInLocalStorage(this._localStorageData);" +
"        }," +
"        enumerable: false," +
"        configurable: true" +
"    });" +
"    LocalStorageHelper.prototype.getThreadData = function (id) {" +
"        this.updateFromLocalStorage();" +
"        var lsThreadData = this._localStorageData.threads[id];" +
"        if (!lsThreadData) {" +
"            return undefined;" +
"        }" +
"        return {" +
"            threadName: lsThreadData.threadName," +
"            forumName: lsThreadData.forumName," +
"            forumId: lsThreadData.forumId," +
"            sdPostId: lsThreadData.sdPostId," +
"            bunkerInquiryCache: lsThreadData.bunkerInquiryCache," +
"            stateOfSdTable: new Map(lsThreadData.stateOfSdTable)," +
"            packagesSent: new Map(lsThreadData.packagesSent)," +
"            updatedPostIds: lsThreadData.updatedPostIds" +
"        };" +
"    };" +
"    LocalStorageHelper.prototype.setThreadData = function (id, value) {" +
"        // Convert the Map to an Array before storing it" +
"        var stateOfSdTable = Array.from(value.stateOfSdTable.entries());" +
"        var packagesSent = Array.from(value.packagesSent.entries());" +
"        this._localStorageData.threads[id] = {" +
"            threadName: value.threadName," +
"            forumName: value.forumName," +
"            forumId: value.forumId," +
"            sdPostId: value.sdPostId," +
"            bunkerInquiryCache: value.bunkerInquiryCache," +
"            stateOfSdTable: stateOfSdTable," +
"            packagesSent: packagesSent," +
"            updatedPostIds: value.updatedPostIds" +
"        };" +
"        this.storeDataInLocalStorage(this._localStorageData);" +
"    };" +
"    Object.defineProperty(LocalStorageHelper.prototype, \"getAllThreads\", {" +
"        get: function () {" +
"            this.updateFromLocalStorage();" +
"            var threads = {};" +
"            for (var id in this._localStorageData.threads) {" +
"                var lsThreadData = this._localStorageData.threads[id];" +
"                if (lsThreadData) {" +
"                    // Convert the Array back to a Map when retrieving it" +
"                    var stateOfSdTable = new Map(lsThreadData.stateOfSdTable);" +
"                    var packagesSent = new Map(lsThreadData.packagesSent);" +
"                    // Create a new ThreadData object with the converted data" +
"                    threads[id] = {" +
"                        threadName: lsThreadData.threadName," +
"                        forumName: lsThreadData.forumName," +
"                        forumId: lsThreadData.forumId," +
"                        sdPostId: lsThreadData.sdPostId," +
"                        bunkerInquiryCache: lsThreadData.bunkerInquiryCache," +
"                        stateOfSdTable: stateOfSdTable," +
"                        packagesSent: packagesSent," +
"                        updatedPostIds: lsThreadData.updatedPostIds" +
"                    };" +
"                }" +
"            }" +
"            return threads;" +
"        }," +
"        enumerable: false," +
"        configurable: true" +
"    });" +
"    LocalStorageHelper.prototype.addThread = function (id, value) {" +
"        // Convert the Map to an Array before storing it" +
"        var stateOfSdTable = Array.from(value.stateOfSdTable.entries());" +
"        var packagesSent = Array.from(value.packagesSent.entries());" +
"        this._localStorageData.threads[id] = {" +
"            threadName: value.threadName," +
"            forumName: value.forumName," +
"            forumId: value.forumId," +
"            sdPostId: value.sdPostId," +
"            bunkerInquiryCache: value.bunkerInquiryCache," +
"            stateOfSdTable: stateOfSdTable," +
"            packagesSent: packagesSent," +
"            updatedPostIds: value.updatedPostIds" +
"        };" +
"        this.storeDataInLocalStorage(this._localStorageData);" +
"    };" +
"    LocalStorageHelper.prototype.deleteThread = function (id) {" +
"        delete this._localStorageData.threads[id];" +
"        this.storeDataInLocalStorage(this._localStorageData);" +
"    };" +
"    LocalStorageHelper.prototype.getSdInquiry = function (id) {" +
"        this.updateFromLocalStorage();" +
"        return this._localStorageData.threads[id].bunkerInquiryCache;" +
"    };" +
"    LocalStorageHelper.prototype.setSdInquiry = function (id, value) {" +
"        this._localStorageData.threads[id].bunkerInquiryCache = value;" +
"        this.storeDataInLocalStorage(this._localStorageData);" +
"    };" +
"    LocalStorageHelper.prototype.getSdPostId = function (id) {" +
"        this.updateFromLocalStorage();" +
"        return this._localStorageData.threads[id].sdPostId;" +
"    };" +
"    LocalStorageHelper.prototype.setSdTableState = function (id, value) {" +
"        this._localStorageData.threads[id].stateOfSdTable = Array.from(value.entries());" +
"        this.storeDataInLocalStorage(this._localStorageData);" +
"    };" +
"    LocalStorageHelper.prototype.getSdTableState = function (id) {" +
"        this.updateFromLocalStorage();" +
"        return new Map(this._localStorageData.threads[id].stateOfSdTable);" +
"    };" +
"    LocalStorageHelper.prototype.setPackagesSent = function (id, value) {" +
"        this._localStorageData.threads[id].packagesSent = Array.from(value.entries());" +
"        this.storeDataInLocalStorage(this._localStorageData);" +
"    };" +
"    LocalStorageHelper.prototype.getPackagesSent = function (id) {" +
"        this.updateFromLocalStorage();" +
"        return new Map(this._localStorageData.threads[id].packagesSent);" +
"    };" +
"    return LocalStorageHelper;" +
"}());" +
"exports.LocalStorageHelper = LocalStorageHelper;" +
"" +
"" +
"//# sourceURL=webpack://standdeff-organizer/./src/helpers/local-storage-helper.ts?");

/***/ }),

/***/ "./src/helpers/logging-helper.ts":
/*!***************************************!*\
  !*** ./src/helpers/logging-helper.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("" +
"Object.defineProperty(exports, \"__esModule\", ({ value: true }));" +
"exports.Log = void 0;" +
"var isDebug = false;" +
"var info = function () {" +
"    var msg = [];" +
"    for (var _i = 0; _i < arguments.length; _i++) {" +
"        msg[_i] = arguments[_i];" +
"    }" +
"    if (isDebug) {" +
"        msg.forEach(function (m) {" +
"            console.log(m);" +
"        });" +
"    }" +
"};" +
"var error = function (msg) {" +
"    console.error(msg);" +
"};" +
"exports.Log = {" +
"    info: info," +
"    error: error" +
"};" +
"" +
"" +
"//# sourceURL=webpack://standdeff-organizer/./src/helpers/logging-helper.ts?");

/***/ }),

/***/ "./src/helpers/table-helper.ts":
/*!*************************************!*\
  !*** ./src/helpers/table-helper.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("" +
"var __assign = (this && this.__assign) || function () {" +
"    __assign = Object.assign || function(t) {" +
"        for (var s, i = 1, n = arguments.length; i < n; i++) {" +
"            s = arguments[i];" +
"            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))" +
"                t[p] = s[p];" +
"        }" +
"        return t;" +
"    };" +
"    return __assign.apply(this, arguments);" +
"};" +
"var __values = (this && this.__values) || function(o) {" +
"    var s = typeof Symbol === \"function\" && Symbol.iterator, m = s && o[s], i = 0;" +
"    if (m) return m.call(o);" +
"    if (o && typeof o.length === \"number\") return {" +
"        next: function () {" +
"            if (o && i >= o.length) o = void 0;" +
"            return { value: o && o[i++], done: !o };" +
"        }" +
"    };" +
"    throw new TypeError(s ? \"Object is not iterable.\" : \"Symbol.iterator is not defined.\");" +
"};" +
"var __read = (this && this.__read) || function (o, n) {" +
"    var m = typeof Symbol === \"function\" && o[Symbol.iterator];" +
"    if (!m) return o;" +
"    var i = m.call(o), r, ar = [], e;" +
"    try {" +
"        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);" +
"    }" +
"    catch (error) { e = { error: error }; }" +
"    finally {" +
"        try {" +
"            if (r && !r.done && (m = i[\"return\"])) m.call(i);" +
"        }" +
"        finally { if (e) throw e.error; }" +
"    }" +
"    return ar;" +
"};" +
"Object.defineProperty(exports, \"__esModule\", ({ value: true }));" +
"exports.trimYearFromDateStrings = exports.trimVillageNameText = exports.applySettingsToMassUtLink = exports.updateSentPackagesInSdTable = exports.displayUpdatedSdTable = exports.parseTableHtmlElemToSdState = exports.parseSdStateToTableString = exports.calculateSdTableState = exports.parseEditSdTableData = exports.parseSdPosts = exports.convertRequestArrayToMessageString = exports.convertMessageRequestStringToRequestArray = void 0;" +
"var local_storage_helper_1 = __webpack_require__(/*! ./local-storage-helper */ \"./src/helpers/local-storage-helper.ts\");" +
"var logging_helper_1 = __webpack_require__(/*! ./logging-helper */ \"./src/helpers/logging-helper.ts\");" +
"function convertMessageRequestStringToRequestArray(messageString) {" +
"    var e_1, _a;" +
"    var _b;" +
"    // Split the messageString into lines" +
"    var lines = messageString.split('\n');" +
"    // Array to hold the requestData objects" +
"    var requests = [];" +
"    try {" +
"        // Iterate over each line" +
"        //evtl auch mit regex" +
"        for (var lines_1 = __values(lines), lines_1_1 = lines_1.next(); !lines_1_1.done; lines_1_1 = lines_1.next()) {" +
"            var line = lines_1_1.value;" +
"            // Split the line at the first space to get coords and amount" +
"            var _c = __read(line.split(' ', 3)), coords = _c[0], amount = _c[1], optionalData = _c.slice(2);" +
"            // Check if coords matches the pattern \"3digits | 3 digits\"" +
"            var coordsPattern = /^\\d{3}\\|\\d{3}$/;" +
"            var amountPattern = /^\\d+$/;" +
"            if (!coordsPattern.test(coords) || !amountPattern.test(amount)) {" +
"                continue; // Skip this line if coords does not match the pattern" +
"            }" +
"            // Split the optional data at the delimiter \"" +
"            optionalData = ((_b = optionalData[0]) === null || _b === void 0 ? void 0 : _b.split('\"')) || [];" +
"            // Create the requestData object" +
"            var request = {" +
"                coords: coords," +
"                amount: Number(amount)," +
"                playerName: optionalData[1] || undefined," +
"                comment: optionalData[2] || undefined," +
"                dateFrom: optionalData[3] || undefined," +
"                dateUntil: optionalData[4] || undefined" +
"            };" +
"            // Add the requestData object to the array" +
"            requests.push(request);" +
"        }" +
"    }" +
"    catch (e_1_1) { e_1 = { error: e_1_1 }; }" +
"    finally {" +
"        try {" +
"            if (lines_1_1 && !lines_1_1.done && (_a = lines_1.return)) _a.call(lines_1);" +
"        }" +
"        finally { if (e_1) throw e_1.error; }" +
"    }" +
"    return requests;" +
"}" +
"exports.convertMessageRequestStringToRequestArray = convertMessageRequestStringToRequestArray;" +
"function convertRequestArrayToMessageString(requests) {" +
"    var e_2, _a;" +
"    // Array to hold the lines" +
"    var lines = [];" +
"    // helper to format numeric date values into DD.MM.YYYY HH:MM (handles seconds, ms, yyyymmdd and year)" +
"    function pad(n) { return n < 10 ? '0' + n : String(n); }" +
"    function formatDate(value) {" +
"        // treat undefined, null, NaN and 0 as empty (no date)" +
"        if (value === undefined || value === null)" +
"            return \"\";" +
"        var v = Number(value);" +
"        if (isNaN(v) || v === 0)" +
"            return \"\";" +
"        var date = null;" +
"        if (v > 1e12) { // milliseconds" +
"            date = new Date(v);" +
"        }" +
"        else if (v > 1e9) { // seconds" +
"            date = new Date(v * 1000);" +
"        }" +
"        else if (/^\\d{8}$/.test(String(v))) { // yyyymmdd -> date only, time = 00:00" +
"            var s = String(v);" +
"            var y = parseInt(s.slice(0, 4));" +
"            var m = parseInt(s.slice(4, 6));" +
"            var d = parseInt(s.slice(6, 8));" +
"            date = new Date(y, m - 1, d, 0, 0);" +
"        }" +
"        else if (v >= 1970 && v <= 3000) { // year only -> date = 01.01.<year> 00:00" +
"            date = new Date(v, 0, 1, 0, 0);" +
"        }" +
"        else {" +
"            // unknown format: return numeric value as string to avoid data loss" +
"            return String(v);" +
"        }" +
"        if (!date || isNaN(date.getTime()))" +
"            return String(v);" +
"        var day = pad(date.getDate());" +
"        var month = pad(date.getMonth() + 1);" +
"        var year = date.getFullYear();" +
"        var hours = pad(date.getHours());" +
"        var minutes = pad(date.getMinutes());" +
"        // always append hours:minutes (for date-only sources this will be 00:00)" +
"        return \"\".concat(day, \".\").concat(month, \".\").concat(year, \" \").concat(hours, \":\").concat(minutes);" +
"    }" +
"    try {" +
"        // Iterate over each requestData object" +
"        for (var requests_1 = __values(requests), requests_1_1 = requests_1.next(); !requests_1_1.done; requests_1_1 = requests_1.next()) {" +
"            var request = requests_1_1.value;" +
"            // Create the line" +
"            var dateFrom = formatDate(request.dateFrom);" +
"            var dateUntil = formatDate(request.dateUntil);" +
"            var line = \"\".concat(request.coords, \" \").concat(request.amount, \" \\\"\").concat(request.playerName || '', \"\\\"\").concat(request.comment || '', \"\\\"\").concat(dateFrom, \"\\\"\").concat(dateUntil);" +
"            // Add the line to the array" +
"            lines.push(line);" +
"        }" +
"    }" +
"    catch (e_2_1) { e_2 = { error: e_2_1 }; }" +
"    finally {" +
"        try {" +
"            if (requests_1_1 && !requests_1_1.done && (_a = requests_1.return)) _a.call(requests_1);" +
"        }" +
"        finally { if (e_2) throw e_2.error; }" +
"    }" +
"    // Join the lines with a newline character" +
"    return lines.join('\n');" +
"}" +
"exports.convertRequestArrayToMessageString = convertRequestArrayToMessageString;" +
"function parseSdPosts() {" +
"    var localStorageService = local_storage_helper_1.LocalStorageHelper.getInstance();" +
"    var urlParams = new URLSearchParams(window.location.search);" +
"    var currentThreadId = urlParams.get(\"thread_id\") || \"\";" +
"    var sdPostId = localStorageService.getSdPostId(currentThreadId);" +
"    var coordVilIdMap = new Map();" +
"    var updateData = new Map();" +
"    //parse all village links on page to get the village id and store into map" +
"    $(\".village_anchor\").each(function (index, element) {" +
"        var _a;" +
"        var coordsMatch = /(\\d{3}\\|\\d{3})\\)\\sK/;" +
"        var possibleCoords = $(element).text().trim().split(\"(\");" +
"        var coords = (_a = possibleCoords[possibleCoords.length - 1].match(coordsMatch)) === null || _a === void 0 ? void 0 : _a[1];" +
"        var villageId = $(element).attr(\"data-id\");" +
"        if (coords && villageId) {" +
"            coordVilIdMap.set(coords, parseInt(villageId));" +
"        }" +
"        else {" +
"            logging_helper_1.Log.error(\"coords or village id is undefined\");" +
"        }" +
"    });" +
"    // Get the post container" +
"    var newInquiryRegex = /(\\d{3}\\|\\d{3})\\)\\sK\\d+\\s+(\\d+)\\s+[\"\\u201c](.+)?[\"\\u201c](.+)?[\"\\u201c](.+)?[\"\\u201c](.+)?/; // hier die anführungszeichen für mac hinzufügen todo:" +
"    var packagesSentRegex = /(\\d+)\\s(\\d+|done)/; // evtl noch optimieren todo:" +
"    $(\".post\").each(function (index, element) {" +
"        var packagesSent = new Map();" +
"        var inquiries = new Map();" +
"        var finished = false; // for skipping the signature" +
"        if ($(element).find(\"a\").first().attr(\"name\") === sdPostId) { // or already updated and not deleted todo:" +
"            return; // skip sd thread id" +
"        }" +
"        var postId = $(element).find(\"a\").first().attr(\"name\") || \"\";" +
"        var postContent = $(element).find(\".text\").text();" +
"        var postContentSplit = postContent.split(\"\n\");" +
"        postContentSplit.forEach(function (line) {" +
"            if (finished || line === \"______________________________\") {" +
"                finished = true;" +
"                return;" +
"            }" +
"            var inquiryMatch = line.match(newInquiryRegex);" +
"            var packagesMatch = line.match(packagesSentRegex);" +
"            if (inquiryMatch) {" +
"                if (!coordVilIdMap.has(inquiryMatch[1])) {" +
"                    logging_helper_1.Log.error(\"coords not found in map\");" +
"                }" +
"                var villageId = coordVilIdMap.get(inquiryMatch[1]) || 0;" +
"                var sdInquiry = {" +
"                    coords: inquiryMatch[1]," +
"                    amount: parseInt(inquiryMatch[2])," +
"                    playerName: inquiryMatch[3]," +
"                    comment: inquiryMatch[4]," +
"                    dateFrom: inquiryMatch[5] ? inquiryMatch[5] : undefined," +
"                    dateUntil: inquiryMatch[6] ? inquiryMatch[6] : undefined" +
"                };" +
"                inquiries.set(villageId, sdInquiry);" +
"            }" +
"            else if (packagesMatch) {" +
"                if (packagesSent.has(packagesMatch[1])) {" +
"                    var oldVal = packagesSent.get(packagesMatch[1]);" +
"                    if (oldVal === \"done\" || oldVal === undefined) {" +
"                        return;" +
"                    }" +
"                    if (packagesMatch[2] === \"done\") {" +
"                        packagesSent.set(packagesMatch[1], \"done\");" +
"                        return;" +
"                    }" +
"                    var newVal = parseInt(oldVal) + parseInt(packagesMatch[2]);" +
"                    packagesSent.set(packagesMatch[1], newVal.toString());" +
"                    return;" +
"                }" +
"                packagesSent.set(packagesMatch[1], packagesMatch[2]);" +
"            }" +
"        });" +
"        updateData.set(postId, { inquiries: inquiries, packages: packagesSent });" +
"    });" +
"    return updateData;" +
"}" +
"exports.parseSdPosts = parseSdPosts;" +
"function parseEditSdTableData(tableText, cacheText) {" +
"    var villageIdPattern = /target=(\\d+)/;" +
"    // const playerPattern = /[player]([a-zA-Z0-9.]+)[/player]/; // unused - entfernt" +
"    var sdTableState = new Map();" +
"    tableText.split(\"[*]\").forEach(function (line) {" +
"        var _a;" +
"        var cells = line.split(\"[|]\");" +
"        if (cells.length < 5 || cells.length > 9) {" +
"            return;" +
"        }" +
"        while (cells.length < 9)" +
"            cells.push(\"\");" +
"        cells[8] = ((_a = cells[8].match(villageIdPattern)) === null || _a === void 0 ? void 0 : _a[1]) || \"\";" +
"        cells[4] = cells[4].replace(/\\[player]/, \"\").replace(/\\[\\/player]/, \"\");" +
"        var dateFrom = cells[6] ? cells[6].trim() : \"\";" +
"        var dateUntil = cells[7] ? cells[7].trim() : \"\";" +
"        sdTableState.set(parseInt(cells[8]), {" +
"            coords: cells[1].trim()," +
"            sdId: cells[0]," +
"            startAmount: parseInt(cells[2])," +
"            leftAmount: parseInt(cells[3])," +
"            playerName: cells[4]," +
"            comment: cells[5]," +
"            dateFrom: dateFrom," +
"            dateUntil: dateUntil" +
"        });" +
"    });" +
"    var cache = cacheText.replace(/\\[spoiler=postCache]/, \"\").replace(/\\[\\/spoiler]/, \"\").split(\",\");" +
"    return [sdTableState, cache];" +
"}" +
"exports.parseEditSdTableData = parseEditSdTableData;" +
"function calculateSdTableState(updateData, sdState) {" +
"    var addUpSetting = true;" +
"    var _a = __read(sdState, 2), sdTableState = _a[0], postCache = _a[1];" +
"    var updateDataWithoutCache = new Map();" +
"    var newPostCache = [];" +
"    updateData.forEach(function (postData, postId) {" +
"        if (!postCache.includes(postId)) {" +
"            updateDataWithoutCache.set(postId, postData);" +
"        }" +
"        newPostCache.push(postId);" +
"    });" +
"    var summarizedData = {" +
"        inquiries: new Map()," +
"        packagesSent: new Map()" +
"    };" +
"    updateDataWithoutCache.forEach(function (postData) {" +
"        postData.inquiries.forEach(function (inquiry, villageId) {" +
"            if (summarizedData.inquiries.has(villageId)) {" +
"                var existingInquiry = summarizedData.inquiries.get(villageId);" +
"                if (existingInquiry && existingInquiry.amount < inquiry.amount) {" +
"                    summarizedData.inquiries.set(villageId, inquiry);" +
"                }" +
"            }" +
"            else {" +
"                summarizedData.inquiries.set(villageId, inquiry);" +
"            }" +
"        });" +
"        postData.packages.forEach(function (packageSent, sdId) {" +
"            if (summarizedData.packagesSent.has(sdId)) {" +
"                var existingPackage = summarizedData.packagesSent.get(sdId);" +
"                if (existingPackage !== \"done\") {" +
"                    var newPackage = packageSent === \"done\" ? \"done\" : (parseInt(existingPackage || \"0\") + parseInt(packageSent)).toString();" +
"                    summarizedData.packagesSent.set(sdId, newPackage);" +
"                }" +
"                else {" +
"                    summarizedData.packagesSent.set(sdId, packageSent);" +
"                }" +
"            }" +
"            else {" +
"                summarizedData.packagesSent.set(sdId, packageSent);" +
"            }" +
"        });" +
"    });" +
"    logging_helper_1.Log.info(summarizedData);" +
"    logging_helper_1.Log.info(\"sdTableState\");" +
"    logging_helper_1.Log.info(sdTableState);" +
"    summarizedData.inquiries.forEach(function (inquiry, villageId) {" +
"        if (sdTableState.has(villageId)) {" +
"            if (addUpSetting) {" +
"                var existingRow = sdTableState.get(villageId);" +
"                if (existingRow) {" +
"                    var newLeftAmount = existingRow.leftAmount + inquiry.amount;" +
"                    var newStartAmount = existingRow.startAmount + inquiry.amount;" +
"                    sdTableState.set(villageId, __assign(__assign({}, existingRow), { startAmount: newStartAmount, leftAmount: newLeftAmount }));" +
"                }" +
"            }" +
"        }" +
"        else {" +
"            sdTableState.set(villageId, {" +
"                coords: inquiry.coords," +
"                sdId: String(sdTableState.size + 1)," +
"                startAmount: inquiry.amount," +
"                leftAmount: inquiry.amount," +
"                playerName: inquiry.playerName || \"\"," +
"                comment: inquiry.comment || \"\"," +
"                dateFrom: inquiry.dateFrom || \"\"," +
"                dateUntil: inquiry.dateUntil || \"\"" +
"            });" +
"        }" +
"    });" +
"    logging_helper_1.Log.info(\"sdTableState after update\");" +
"    logging_helper_1.Log.info(sdTableState);" +
"    summarizedData.packagesSent.forEach(function (amount, sdId) {" +
"        var matchingEntry = Array.from(sdTableState.entries()).find(function (_a) {" +
"            var _b = __read(_a, 2), _ = _b[0], row = _b[1];" +
"            return row.sdId === sdId;" +
"        });" +
"        if (matchingEntry) {" +
"            var _a = __read(matchingEntry, 2), villageId = _a[0], row = _a[1];" +
"            row.leftAmount -= amount === \"done\" ? row.leftAmount : parseInt(amount);" +
"            sdTableState.set(villageId, row);" +
"        }" +
"        else {" +
"            logging_helper_1.Log.error(\"no matching sdTableRowEntry found for package Id: \".concat(sdId, \" -> I will ignore it :)\"));" +
"        }" +
"    });" +
"    logging_helper_1.Log.info(\"sdTableState after package update\");" +
"    logging_helper_1.Log.info(sdTableState);" +
"    //clean up sdTableState and delete everything with leftAmount = 0 // hier logging von fertigen anfragen einbauen wenn gewünscht :)" +
"    var newId = 1;" +
"    sdTableState.forEach(function (row, villageId) {" +
"        if (row.leftAmount === 0) {" +
"            sdTableState.delete(villageId);" +
"            newId--;" +
"        }" +
"        row.sdId = String(newId);" +
"        newId++;" +
"    });" +
"    logging_helper_1.Log.info(\"sdTableState after cleanup\");" +
"    logging_helper_1.Log.info(sdTableState, newPostCache);" +
"    return [sdTableState, newPostCache];" +
"}" +
"exports.calculateSdTableState = calculateSdTableState;" +
"function parseSdStateToTableString(sdState) {" +
"    var _a = __read(sdState, 2), sdTableState = _a[0], cache = _a[1];" +
"    var tableString = \"\";" +
"    sdTableState.forEach(function (row, villageId) {" +
"        tableString += \"[*]\".concat(row.sdId, \"[|]\").concat(\" \" + row.coords + \" \", \"[|]\").concat(row.startAmount, \"[|]\").concat(row.leftAmount, \"[|][player]\").concat(row.playerName, \"[/player][|]\").concat(row.comment, \"[|]\").concat(row.dateFrom, \"[|]\").concat(row.dateUntil, \"[|][url=\").concat(generateMassUtLink(villageId), \"]Massen UT-Link[/url][/*]\n\");" +
"    });" +
"    var cacheString = \"[spoiler=postCache]\".concat(cache.join(\",\"), \"[/spoiler]\");" +
"    return [tableString, cacheString];" +
"}" +
"exports.parseSdStateToTableString = parseSdStateToTableString;" +
"function generateMassUtLink(villageId) {" +
"    var world = game_data.world;" +
"    return \"https://\".concat(world, \".die-staemme.de/game.php?village=0&screen=place&mode=call&target=\").concat(villageId);" +
"}" +
"function parseTableHtmlElemToSdState(tableBodyElem) {" +
"    var sdTableState = new Map();" +
"    tableBodyElem.find(\"tr\").each(function (index, row) {" +
"        //skip the first" +
"        if (index === 0) {" +
"            return;" +
"        }" +
"        //build up rowSdTable" +
"        var rowSdTableArray = [];" +
"        $(row).find(\"td\").each(function (index, cell) {" +
"            rowSdTableArray.push($(cell));" +
"        });" +
"        var coords = parseTwCoordsToCoords(rowSdTableArray[1].text().trim());" +
"        var villageId = parseTwLinkToVillageId(rowSdTableArray[8]);" +
"        var rowSdTable = {" +
"            coords: coords," +
"            sdId: rowSdTableArray[0].text().trim()," +
"            startAmount: parseInt(rowSdTableArray[2].text().trim())," +
"            leftAmount: parseInt(rowSdTableArray[3].text().trim())," +
"            playerName: rowSdTableArray[4].text().trim()," +
"            comment: rowSdTableArray[5].text().trim()," +
"            dateFrom: rowSdTableArray[6].text().trim()," +
"            dateUntil: rowSdTableArray[7].text().trim()" +
"        };" +
"        sdTableState.set(villageId, rowSdTable);" +
"    });" +
"    return sdTableState;" +
"}" +
"exports.parseTableHtmlElemToSdState = parseTableHtmlElemToSdState;" +
"function parseTwCoordsToCoords(coords) {" +
"    var coordsPattern = /\\d{3}\\|\\d{3}/g;" +
"    var found = coords.match(coordsPattern);" +
"    return found ? found[found.length - 1] : \"\";" +
"}" +
"function parseTwLinkToVillageId(linkElem) {" +
"    var link = $(linkElem).find(\"a\").attr(\"href\") || \"\";" +
"    var villageIdPattern = /target=(\\d+)/;" +
"    var found = link.match(villageIdPattern);" +
"    return found ? parseInt(found[1]) : 0;" +
"}" +
"function displayUpdatedSdTable(packagesToUpdate) {" +
"    var localStorageService = local_storage_helper_1.LocalStorageHelper.getInstance();" +
"    var urlParams = new URLSearchParams(window.location.search);" +
"    var currentThreadId = urlParams.get('thread_id') || \"\";" +
"    //let sentPackages = localStorageService.getPackagesSent(currentThreadId);" +
"    var sdPostId = localStorageService.getSdPostId(currentThreadId);" +
"    logging_helper_1.Log.info(packagesToUpdate);" +
"    var result = $(\"a[name='\" + sdPostId + \"']\").parent().find(\"table\").find(\"tbody\").find(\"tr\").map(function (index, row) {" +
"        var rowData = $(row).find(\"td\").map(function (tdIndex, td) { return $(td).text(); }).get();" +
"        rowData.push(row); // Add the current row element to the end of the array" +
"        return [rowData];" +
"    }).get();" +
"    logging_helper_1.Log.info(result);" +
"    result.forEach(function (rowData) {" +
"        // Die ID ist der erste Wert im rowData Array" +
"        var id = rowData[0];" +
"        // Überprüfe, ob die ID in packageToUpdate vorhanden ist" +
"        if (packagesToUpdate.has(id)) {" +
"            // Hole den zu aktualisierenden Wert" +
"            if (rowData[3] === \"done\") {" +
"                return;" +
"            }" +
"            var updateValue = parseInt(packagesToUpdate.get(id) || \"0\");" +
"            var oldValue = parseInt(rowData[3]);" +
"            var newVal_1 = Math.max(0, oldValue - updateValue);" +
"            var addionalText_1 = \"\";" +
"            // Nehmen Sie an, dass result Ihr Array ist und das letzte Element das gespeicherte tr-Element ist" +
"            var savedTr_1 = result[id][9];" +
"            $(\"a[name='\" + sdPostId + \"']\").parent().find(\"table\").find(\"tbody\").find(\"tr\").each(function (index, tr) {" +
"                // Überprüfen Sie, ob das aktuelle tr-Element mit dem gespeicherten tr-Element übereinstimmt" +
"                if ($(tr).is(savedTr_1)) {" +
"                    // Das aktuelle tr-Element stimmt mit dem gespeicherten tr-Element überein" +
"                    // Sie können hier Code hinzufügen, um das tr-Element zu bearbeiten" +
"                    // Zum Beispiel, um den Text des ersten td-Elements zu ändern:" +
"                    $(tr).find(\"td\").eq(3).text(newVal_1.toString());" +
"                    if (addionalText_1 !== \"\") {" +
"                        $(tr).find(\"td\").eq(3).append(addionalText_1);" +
"                    }" +
"                }" +
"            });" +
"        }" +
"    });" +
"}" +
"exports.displayUpdatedSdTable = displayUpdatedSdTable;" +
"function updateSentPackagesInSdTable() {" +
"    var localStorageService = local_storage_helper_1.LocalStorageHelper.getInstance();" +
"    var urlParams = new URLSearchParams(window.location.search);" +
"    var currentThreadId = urlParams.get('thread_id') || \"\";" +
"    var sdPostId = localStorageService.getSdPostId(currentThreadId);" +
"    var sentPackages = localStorageService.getPackagesSent(currentThreadId);" +
"    var result = $(\"a[name='\" + sdPostId + \"']\").parent().find(\"table\").find(\"tbody\").find(\"tr\").map(function (index, row) {" +
"        var rowData = $(row).find(\"td\").map(function (tdIndex, td) { return $(td).text(); }).get();" +
"        rowData.push(row); // Add the current row element to the end of the array" +
"        return [rowData];" +
"    }).get();" +
"    result.forEach(function (rowData) {" +
"        // Die ID ist der erste Wert im rowData Array" +
"        var id = rowData[0];" +
"        // Überprüfe, ob die ID in packageToUpdate vorhanden ist" +
"        if (sentPackages.has(id)) {" +
"            var sentAmount_1 = sentPackages.get(id);" +
"            var addionalText_2 = \"\";" +
"            if (sentAmount_1) {" +
"                addionalText_2 = \" <span id='sent-info' style='color:#FF0000;'>(-\" + sentAmount_1 + \")</span>\";" +
"            }" +
"            // Nehmen Sie an, dass result Ihr Array ist und das letzte Element das gespeicherte tr-Element ist" +
"            var savedTr_2 = result[id][9];" +
"            $(\"a[name='\" + sdPostId + \"']\").parent().find(\"table\").find(\"tbody\").find(\"tr\").each(function (index, tr) {" +
"                // Überprüfen Sie, ob das aktuelle tr-Element mit dem gespeicherten tr-Element übereinstimmt" +
"                if ($(tr).is(savedTr_2)) {" +
"                    // Das aktuelle tr-Element stimmt mit dem gespeicherten tr-Element überein" +
"                    // Sie können hier Code hinzufügen, um das tr-Element zu bearbeiten" +
"                    // Zum Beispiel, um den Text des ersten td-Elements zu ändern:" +
"                    if ($(tr).find(\"#sent-info\").length > 0) {" +
"                        if (sentAmount_1) {" +
"                            $(tr).find(\"#sent-info\").text(\"(-\" + sentAmount_1 + \")\");" +
"                            return;" +
"                        }" +
"                    }" +
"                    if (addionalText_2 !== \"\") {" +
"                        $(tr).find(\"td\").eq(3).append(addionalText_2);" +
"                    }" +
"                }" +
"            });" +
"        }" +
"    });" +
"}" +
"exports.updateSentPackagesInSdTable = updateSentPackagesInSdTable;" +
"function applySettingsToMassUtLink() {" +
"    logging_helper_1.Log.info(\"apply settings to mass ut link\");" +
"    var localStorageService = local_storage_helper_1.LocalStorageHelper.getInstance();" +
"    var urlParams = new URLSearchParams(window.location.search);" +
"    var currentThreadId = urlParams.get('thread_id') || \"\";" +
"    var automate = localStorageService.getAutomateMassenUt;" +
"    var sdGroupId = localStorageService.getSdGroupId;" +
"    var orderBy = localStorageService.getSortBy;" +
"    var addionalLinkText = \"&dir=0&sdTableId=\" + currentThreadId;" +
"    if (automate) {" +
"        logging_helper_1.Log.info(\"automate mass ut\");" +
"        if (sdGroupId !== \"\")" +
"            addionalLinkText += \"&group=\" + sdGroupId;" +
"        if (orderBy !== \"\")" +
"            addionalLinkText += \"&order=\" + orderBy;" +
"    }" +
"    $(\".bbcodetable\").find(\"a[referrerpolicy^='no-ref']\").each(function () {" +
"        var oldHref = $(this).attr('href');" +
"        if (oldHref) {" +
"            var newHref = oldHref + addionalLinkText;" +
"            $(this).attr('href', newHref);" +
"        }" +
"    });" +
"}" +
"exports.applySettingsToMassUtLink = applySettingsToMassUtLink;" +
"function trimVillageNameText() {" +
"    logging_helper_1.Log.info(\"trim village names\");" +
"    $(\".village_anchor>a\").each(function (index, element) {" +
"        var coordsPattern = /(\\d{3}\\|\\d{3})/;" +
"        var match = $(element).text().match(coordsPattern);" +
"        if (match) {" +
"            $(element).text(match[1]);" +
"        }" +
"    });" +
"}" +
"exports.trimVillageNameText = trimVillageNameText;" +
"function trimYearFromDateStrings() {" +
"    logging_helper_1.Log.info(\"trim year from date strings\");" +
"    $(\".bbcodetable>tbody\").children().each(function (index, element) {" +
"        // skip header row if present (index 0)" +
"        if (index === 0)" +
"            return;" +
"        var $cells = $(element).find('td');" +
"        var $dateFrom = $cells.eq(6);" +
"        var $dateUntil = $cells.eq(7);" +
"        function stripYear($cell) {" +
"            if (!$cell || $cell.length === 0)" +
"                return;" +
"            var text = $cell.text().trim();" +
"            if (!text)" +
"                return;" +
"            // Match formats like \"DD.MM.YYYY HH:MM\" or \"DD.MM.YYYY\" (be tolerant)" +
"            var m = text.match(/^(\\d{2}\\.\\d{2})\\.(\\d{4})(?:\\s+(\\d{1,2}:\\d{2}))?.*$/);" +
"            if (m) {" +
"                var dayMonth = m[1];" +
"                var time = m[3] ? m[3] : \"00:00\"; // if no time present, show 00:00 to keep consistent visual" +
"                $cell.text(\"\".concat(dayMonth, \" \").concat(time));" +
"            }" +
"        }" +
"        stripYear($dateFrom);" +
"        stripYear($dateUntil);" +
"    });" +
"}" +
"exports.trimYearFromDateStrings = trimYearFromDateStrings;" +
"" +
"" +
"//# sourceURL=webpack://standdeff-organizer/./src/helpers/table-helper.ts?");

/***/ }),

/***/ "./src/helpers/tw-helper.ts":
/*!**********************************!*\
  !*** ./src/helpers/tw-helper.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("" +
"var __read = (this && this.__read) || function (o, n) {" +
"    var m = typeof Symbol === \"function\" && o[Symbol.iterator];" +
"    if (!m) return o;" +
"    var i = m.call(o), r, ar = [], e;" +
"    try {" +
"        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);" +
"    }" +
"    catch (error) { e = { error: error }; }" +
"    finally {" +
"        try {" +
"            if (r && !r.done && (m = i[\"return\"])) m.call(i);" +
"        }" +
"        finally { if (e) throw e.error; }" +
"    }" +
"    return ar;" +
"};" +
"Object.defineProperty(exports, \"__esModule\", ({ value: true }));" +
"exports.distanceXY = exports.villageBBCodeToCoordinates = exports.isUserForumMod = void 0;" +
"var logging_helper_1 = __webpack_require__(/*! ./logging-helper */ \"./src/helpers/logging-helper.ts\");" +
"function isUserForumMod() {" +
"    //only works inside the forum" +
"    if (game_data.screen === \"forum\") {" +
"        var modDefiningElement = $(\"#ally_content > :eq(1)\").find(\"a\");" +
"        //return false;" +
"        return modDefiningElement.length > 0;" +
"    }" +
"    else {" +
"        logging_helper_1.Log.error(\"you can only authenticate as a forum mod in the forum screen\");" +
"        return false;" +
"    }" +
"}" +
"exports.isUserForumMod = isUserForumMod;" +
"function villageBBCodeToCoordinates(bbcode) {" +
"    var coordRegex = /\\b\\d{3}\\|\\d{3}\\b/g;" +
"    var match = bbcode.match(coordRegex);" +
"    if (match) {" +
"        return match[match.length - 1];" +
"    }" +
"    else {" +
"        logging_helper_1.Log.error(\"Invalid village BBCode format\");" +
"        return \"\";" +
"    }" +
"}" +
"exports.villageBBCodeToCoordinates = villageBBCodeToCoordinates;" +
"function distanceXY(a, b) {" +
"    var _a = __read(a.split(\"|\").map(Number), 2), x1 = _a[0], y1 = _a[1];" +
"    var _b = __read(b.split(\"|\").map(Number), 2), x2 = _b[0], y2 = _b[1];" +
"    return Math.hypot(x2 - x1, y2 - y1);" +
"}" +
"exports.distanceXY = distanceXY;" +
"" +
"" +
"//# sourceURL=webpack://standdeff-organizer/./src/helpers/tw-helper.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("" +
"// ==UserScript==" +
"// @name         Development Script" +
"// @version      0.1" +
"// @description  try to take over the world!" +
"// @author       You, Fine, Regenmantel" +
"// @match        https://*.die-staemme.de/game.php?village=*&screen=place&*mode=call*" +
"// @match        https://*.die-staemme.de/game.php?*village=*&screen=forum*" +
"// @match        https://*.die-staemme.de/game.php?*village=*&screen=settings*" +
"// @grant        GM_getValue" +
"// @grant        GM_setValue" +
"// @grant        GM_deleteValue" +
"// @grant        none" +
"// ==/UserScript==" +
"Object.defineProperty(exports, \"__esModule\", ({ value: true }));" +
"var mass_ut_1 = __webpack_require__(/*! ./ui/mass-ut */ \"./src/ui/mass-ut.ts\");" +
"var view_thread_1 = __webpack_require__(/*! ./ui/view-thread */ \"./src/ui/view-thread.ts\");" +
"var new_thread_1 = __webpack_require__(/*! ./ui/new-thread */ \"./src/ui/new-thread.ts\");" +
"var settings_1 = __webpack_require__(/*! ./ui/settings */ \"./src/ui/settings.ts\");" +
"var logging_helper_1 = __webpack_require__(/*! ./helpers/logging-helper */ \"./src/helpers/logging-helper.ts\");" +
"(function () {" +
"    //load when document is ready" +
"    $(function () {" +
"        var currentScriptContext = getCurrentScriptContext();" +
"        logging_helper_1.Log.info(\"standdeff-organizer will be loaded in context: \" + currentScriptContext);" +
"        setupScriptUI(currentScriptContext);" +
"    });" +
"    function getCurrentScriptContext() {" +
"        // returns the current context of the script as string" +
"        var urlParams = new URLSearchParams(window.location.search);" +
"        var screenParamValue = urlParams.get('screen');" +
"        var screenName = screenParamValue !== null ? screenParamValue : \"\";" +
"        if (screenName === \"place\") {" +
"            return screenName;" +
"        }" +
"        if (screenName === \"forum\") {" +
"            var modeParamValue = urlParams.get('mode') === null ? urlParams.get('screenmode') : urlParams.get('mode');" +
"            return screenName + \"-\" + modeParamValue;" +
"        }" +
"        if (screenName === \"settings\") {" +
"            return screenName;" +
"        }" +
"        return \"unknown\";" +
"    }" +
"    function setupScriptUI(currentScriptContext) {" +
"        // the four possible contexts are: place, forum-view_thread, forum-new_thread, settings" +
"        if (currentScriptContext === \"place\") {" +
"            (0, mass_ut_1.displayMassUt)();" +
"        }" +
"        else if (currentScriptContext === \"forum-view_thread\") {" +
"            (0, view_thread_1.viewThread)();" +
"        }" +
"        else if (currentScriptContext === \"forum-new_thread\") {" +
"            (0, new_thread_1.createNewTable)();" +
"        }" +
"        else if (currentScriptContext === \"settings\") {" +
"            (0, settings_1.displaySettings)();" +
"        }" +
"    }" +
"})();" +
"" +
"" +
"//# sourceURL=webpack://standdeff-organizer/./src/index.ts?");

/***/ }),

/***/ "./src/ui/components/edit-sd-post.ts":
/*!*******************************************!*\
  !*** ./src/ui/components/edit-sd-post.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("" +
"var __read = (this && this.__read) || function (o, n) {" +
"    var m = typeof Symbol === \"function\" && o[Symbol.iterator];" +
"    if (!m) return o;" +
"    var i = m.call(o), r, ar = [], e;" +
"    try {" +
"        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);" +
"    }" +
"    catch (error) { e = { error: error }; }" +
"    finally {" +
"        try {" +
"            if (r && !r.done && (m = i[\"return\"])) m.call(i);" +
"        }" +
"        finally { if (e) throw e.error; }" +
"    }" +
"    return ar;" +
"};" +
"Object.defineProperty(exports, \"__esModule\", ({ value: true }));" +
"exports.editSdPost = void 0;" +
"var local_storage_helper_1 = __webpack_require__(/*! ../../helpers/local-storage-helper */ \"./src/helpers/local-storage-helper.ts\");" +
"var table_helper_1 = __webpack_require__(/*! ../../helpers/table-helper */ \"./src/helpers/table-helper.ts\");" +
"var logging_helper_1 = __webpack_require__(/*! ../../helpers/logging-helper */ \"./src/helpers/logging-helper.ts\");" +
"function editSdPost(updateData) {" +
"    logging_helper_1.Log.info(\"Sd tabellen bearbeitenmodus\");" +
"    //only sf mod can edit sd table" +
"    var localStorageService = local_storage_helper_1.LocalStorageHelper.getInstance();" +
"    var urlParams = new URLSearchParams(window.location.search);" +
"    var currentThreadId = urlParams.get(\"thread_id\") || \"\";" +
"    //ui" +
"    var sdPostId = localStorageService.getSdPostId(currentThreadId);" +
"    var updateBtn = \"<a class=\\\"updateSDTabelle\\\" style=\\\"cursor: pointer\\\">Update SD Tabelle</a>\";" +
"    $(\"a[name='\" + sdPostId + \"']\").parent().find(\".postheader_right\").append(updateBtn);" +
"    $(\".updateSDTabelle\").on(\"click\", function () {" +
"        updateSdTable(updateData);" +
"    });" +
"}" +
"exports.editSdPost = editSdPost;" +
"function updateSdTable(updateData) {" +
"    var tablePattern = /\\[table]([\\s\\S]*)\\[\\/table]/;" +
"    var cachePattern = /\\[spoiler=postCache]([\\s\\S]*?)\\[\\/spoiler]/;" +
"    var rawSdPostText = String($(\"#message\").val());" +
"    var table = rawSdPostText.match(tablePattern);" +
"    var cache = rawSdPostText.match(cachePattern);" +
"    if (table === null || cache === null) {" +
"        logging_helper_1.Log.error(\"Table or Cache not found\");" +
"        return;" +
"    }" +
"    var sdState = (0, table_helper_1.parseEditSdTableData)(table[1], cache[0]);" +
"    var newSdState = (0, table_helper_1.calculateSdTableState)(updateData, sdState);" +
"    var _a = __read((0, table_helper_1.parseSdStateToTableString)(newSdState), 2), tableText = _a[0], cacheText = _a[1];" +
"    var updatedSdPostText = rawSdPostText.replace(tablePattern, \"[table]\n    [**]ID[||]Dorfkoordinaten[||]Angefordert[||][color=#8d0100]Noch ben\\u00F6tigt[/color] [||]Spieler[||]Bemerkung[||]Ab[||]Bis[||][color=#001c83]Massen UT-Link[/color][/**]\".concat(tableText, \"[/table]\"));" +
"    updatedSdPostText = updatedSdPostText.replace(cachePattern, \"\".concat(cacheText));" +
"    logging_helper_1.Log.info(\"updated sd post text:\");" +
"    $(\"#message\").val(updatedSdPostText);" +
"}" +
"" +
"" +
"//# sourceURL=webpack://standdeff-organizer/./src/ui/components/edit-sd-post.ts?");

/***/ }),

/***/ "./src/ui/components/first-start-thread-popup.ts":
/*!*******************************************************!*\
  !*** ./src/ui/components/first-start-thread-popup.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("" +
"Object.defineProperty(exports, \"__esModule\", ({ value: true }));" +
"exports.addSdPopup = void 0;" +
"var helper_functions_1 = __webpack_require__(/*! ../../helpers/helper-functions */ \"./src/helpers/helper-functions.ts\");" +
"var local_storage_helper_1 = __webpack_require__(/*! ../../helpers/local-storage-helper */ \"./src/helpers/local-storage-helper.ts\");" +
"var logging_helper_1 = __webpack_require__(/*! ../../helpers/logging-helper */ \"./src/helpers/logging-helper.ts\");" +
"function addSdPopup(currentThreadId) {" +
"    var localStorageService = local_storage_helper_1.LocalStorageHelper.getInstance();" +
"    logging_helper_1.Log.info(\"no thread ids found\");" +
"    var popupBoxNewThread = \"\n                    <div class=\\\"popup_box_container\\\" id=\\\"dbInfo_popup_box\\\">\n                        <div class='popup_box show'>\n                            <a class='popup_box_close tooltip-delayed' href='#' onclick='$(\\\"#dbInfo_popup_box\\\").remove()'>&nbsp</a>\n                            <div class='popup_box_content'>\n                              <div class='center'>\n                                <h2>Handelt es sich bei dem Thread um die Sd Tabelle?</h2>\n                                <input id=\\\"safeThreadAsSd\\\" type=\\\"button\\\" value=\\\"Ja, bitte abspeichern\\\" class=\\\"btn\\\" style=\\\"margin-top: 5px;\\\">\n                                <input id=\\\"hideFuturePopup\\\" type=\\\"button\\\" value=\\\"Popup permanent ausblenden\\\" class=\\\"btn\\\" style>\n                              </div>\n                            </div>\n                        </div>\n                        <div class='fader'></div>\n                    </div>\n    \";" +
"    if (localStorageService.getFirstStartPopup) {" +
"        $('#ds_body')[0].insertAdjacentHTML('beforeend', popupBoxNewThread);" +
"        $(\"#safeThreadAsSd\").on(\"click\", function () {" +
"            var urlParams = new URLSearchParams(window.location.search);" +
"            var edit_post_id = $(\".post > a\").attr(\"name\");" +
"            var thread_name = $(\".clearfix > table\").first().find(\"h2\").text();" +
"            var forum_name = $(\".forum-container\").find(\".selected\").text().trim();" +
"            var forum_id = urlParams.get('forum_id');" +
"            if (edit_post_id !== undefined) {" +
"                (0, helper_functions_1.addThreadIdToLocalStorage)(currentThreadId, edit_post_id, thread_name, forum_name, forum_id);" +
"                logging_helper_1.Log.info(localStorageService.getAllThreads);" +
"                $(\"#dbInfo_popup_box\").remove();" +
"            }" +
"            else {" +
"                logging_helper_1.Log.error(\"edit_post_id is undefined\");" +
"            }" +
"        });" +
"        $(\"#hideFuturePopup\").on(\"click\", function () {" +
"            localStorageService.setFirstStartPopup = false;" +
"            $(\"#dbInfo_popup_box\").remove();" +
"        });" +
"    }" +
"}" +
"exports.addSdPopup = addSdPopup;" +
"" +
"" +
"//# sourceURL=webpack://standdeff-organizer/./src/ui/components/first-start-thread-popup.ts?");

/***/ }),

/***/ "./src/ui/components/options-sd-thread.ts":
/*!************************************************!*\
  !*** ./src/ui/components/options-sd-thread.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("" +
"Object.defineProperty(exports, \"__esModule\", ({ value: true }));" +
"exports.addSdOptions = void 0;" +
"var helper_functions_1 = __webpack_require__(/*! ../../helpers/helper-functions */ \"./src/helpers/helper-functions.ts\");" +
"var logging_helper_1 = __webpack_require__(/*! ../../helpers/logging-helper */ \"./src/helpers/logging-helper.ts\");" +
"function addSdOptions(currentThreadId) {" +
"    logging_helper_1.Log.info(\"thread id is not in thread ids\");" +
"    //button zum hinzufügen der thread id anheften" +
"    var addThreadELem = \"<img class=\\\"addThread\\\" style=\\\"cursor: pointer\\\" src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMESURBVDhPrZVpSFRRFMf/740zo+hgmjpODqNpmYWQwZgLZIL5oYxwiyJoFcJoozIjIsoPQYQgWYQ1TSAaKbmippKFpZaS5kZaUoimuGaoM46z9+71OSYaqPT78t4957z/vefcw3kMOHTTQ9bmkidoKs6CZmKImFaMk6sMIXHJUMaehoNExjBErPDOKXxvrITX1mB4bQniQxcwGk0QCu341WIGv7VhsPsTNoXuRcKNZ2DqctKsb9S3EJWUhpD4JD5sdTQVqTGvwaTHy6zOUjmOpxfz7rWRnRKHyZEBsKRmy6W5WogG0VpUGL3egO6vPZia0oBhGLi5ucDHWwF7ezF6e/sxMjpG60lgWQYyTynk8g0Qi0XURrAJErH39R+hUudifHwCApZFQMBmXL6YzH0kQ5YqG7XvPsDBwZ5eEMuw8Pf3Q0L8fuxU7uBVuI34J4aHR3D3XiaOHklEVXkeql/l02AniSP12wkEOHHsEAry1aipKkB56XN4eLgh8+FTtLZ1YnbWQONsgiaTGa6uLpxDz6Vl5FJiERkRDne39XzEYkQiIVKvnIPvRgWaW9qh0f0lSOqykXMEbQ9EYUkFyiqq0dXdA51ulgb9Czs7AYKVQTCZTdBotdRmOyE50fXUC0iIjUFxaSUy7j/G29p6TE9r+IjlsVoBrWYGFvLCQQX1et3cghM9mHgAL3KyEB0VgcwHKnxu7aTlWA6LxYrR0XFIpe4QCwXUZjuhVjuDXxO/bfWL2RcNF9d16P85AN3s0tQtFgvaO76grqERfn4+cHSYax3aNgbNJN2JpOjJ7SaRSDA2Ng6z2QyZTAqxSERT6+sbQGNjM5ydnWE0GZGT+xK7d4XT2jd0lC0IEry95RjiWqewqBwGo4HrQwHOnjmJsBAlbVyFwgvVr2vR0tpO40VCEa5dPY+wUCW98XmY25GwbttzGLGX0nnT2ijJSEFXTR5YMs8mB3/w5rVDNIgWS4YjmWc1qjTetXoqH92kGkRryYD18A20tdFKICdbNGCJ8f/9AmTMH8N0QjyBbMOkAAAAAElFTkSuQmCC\\\"/>\";" +
"    $(\".thread_answer\").parent().parent().append(addThreadELem);" +
"    $(\".addThread\").on(\"click\", function () {" +
"        var urlParams = new URLSearchParams(window.location.search);" +
"        var edit_post_id = $(\".post > a\").attr(\"name\");" +
"        var thread_name = $(\".clearfix > table\").first().find(\"h2\").text();" +
"        var forum_name = $(\".forum-container\").find(\".selected\").text().trim();" +
"        var forum_id = urlParams.get('forum_id');" +
"        if (edit_post_id !== undefined) {" +
"            (0, helper_functions_1.addThreadIdToLocalStorage)(currentThreadId, edit_post_id, thread_name, forum_name, forum_id);" +
"            $(\".addThread\").remove();" +
"            $(\"#tooltip\").css({" +
"                \"display\": \"none\"," +
"            });" +
"            var sdTableTitle = \"<span style=\\\"color: #002bff; font-size: x-small\\\"> (SD Tabelle)</span>\";" +
"            $(\".clearfix > table\").first().find(\"h2\").append(sdTableTitle);" +
"        }" +
"        else {" +
"            logging_helper_1.Log.error(\"edit_post_id is undefined\");" +
"        }" +
"    });" +
"    $(\".addThread\").on(\"mousemove\", function (event) {" +
"        //get mouse position" +
"        var x = event.clientX;" +
"        var y = event.clientY;" +
"        //position des tooltips" +
"        $(\"#tooltip\").css({" +
"            \"top\": \"\".concat(y + 15, \"px\")," +
"            \"left\": \"\".concat(x + 12, \"px\")," +
"            \"right\": \"auto\"," +
"            \"display\": \"\"," +
"        }).addClass(\"tooltip-style\");" +
"        $(\"#tooltip > h3\").text(\"SD Tabelle hinzuf\\u00fcgen\");" +
"    });" +
"    $(\".addThread\").on(\"mouseout\", function () {" +
"        $(\"#tooltip\").css({" +
"            \"display\": \"none\"," +
"        });" +
"    });" +
"}" +
"exports.addSdOptions = addSdOptions;" +
"" +
"" +
"//# sourceURL=webpack://standdeff-organizer/./src/ui/components/options-sd-thread.ts?");

/***/ }),

/***/ "./src/ui/components/post-layout.ts":
/*!******************************************!*\
  !*** ./src/ui/components/post-layout.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("" +
"Object.defineProperty(exports, \"__esModule\", ({ value: true }));" +
"exports.postLayout = void 0;" +
"var tw_helper_1 = __webpack_require__(/*! ../../helpers/tw-helper */ \"./src/helpers/tw-helper.ts\");" +
"var request_popup_1 = __webpack_require__(/*! ./request-popup */ \"./src/ui/components/request-popup.ts\");" +
"var local_storage_helper_1 = __webpack_require__(/*! ../../helpers/local-storage-helper */ \"./src/helpers/local-storage-helper.ts\");" +
"var logging_helper_1 = __webpack_require__(/*! ../../helpers/logging-helper */ \"./src/helpers/logging-helper.ts\");" +
"function postLayout(updateData) {" +
"    logging_helper_1.Log.info(\"parsed posts in view thread\");" +
"    logging_helper_1.Log.info(updateData); //parsed posts in view thread // für die darstellung der sd tabelle" +
"    logging_helper_1.Log.info(\"post layout\");" +
"    var localStorageService = local_storage_helper_1.LocalStorageHelper.getInstance();" +
"    var urlParams = new URLSearchParams(window.location.search);" +
"    var currentThreadId = urlParams.get(\"thread_id\") || \"\";" +
"    if (urlParams.has(\"answer\")) {" +
"        if (!(0, tw_helper_1.isUserForumMod)()) {" +
"            logging_helper_1.Log.info(\"user is not forum mod and text area is present\");" +
"            $(\"#message\").prop(\"readonly\", true);" +
"            var element = $(\"#message\");" +
"            var styledElem = \"<div class=\\\"hideUserInput\\\" style=\\\"position: relative\\\">\n                                                          <div id=\\\"messageCover\\\" style=\\\"position: absolute; width: 614px; height: 220px; top:-16%; left: 0; background-color: gray; opacity: 0.5\\\"></div>\n                                                      </div>\";" +
"            $(\"#message\").parent().append(styledElem);" +
"            $(\".hideUserInput\").append(element);" +
"            $(\".hideUserInput\").on(\"dblclick\", function () {" +
"                $(\"#messageCover\").remove();" +
"                $(\"#message\").prop(\"readonly\", false);" +
"            });" +
"        }" +
"        var finishedRequests = localStorageService.getPackagesSent(currentThreadId).size;" +
"        logging_helper_1.Log.info(finishedRequests);" +
"        var postLayout_1 = \"\n<input class=\\\"btn\\\" type=\\\"button\\\" value=\\\"Bunker anfragen\\\" id=\\\"requestBunker\\\">\n<input class=\\\"btn\\\" type=\\\"button\\\" value=\\\"Bearbeitung eintragen\\\" id=\\\"addBearbeitung\\\">\";" +
"        $(\"input[name=preview]\").remove();" +
"        $(\"input[name=send]\").parent().prepend(postLayout_1);" +
"        if (finishedRequests > 0) {" +
"            $(\"#addBearbeitung\").after('<span class=\"notification-badge\" id=\"notificationBadge\">!</span>');" +
"            var style = document.createElement('style');" +
"            style.innerHTML = \"\n.notification-badge {\n  position: relative;\n  top: -10px;\n  right: 10px;\n  background-color: red;\n  color: white;\n  border-radius: 50%;\n  padding: 5px 10px;\n  font-size: 12px;\n}\";" +
"            document.head.appendChild(style);" +
"        }" +
"        logging_helper_1.Log.info(\"neuer post\");" +
"        $(\"#requestBunker\").on(\"click\", function () {" +
"            (0, request_popup_1.showRequestPopup)();" +
"            logging_helper_1.Log.info(\"past requests\");" +
"        });" +
"        $(\"#addBearbeitung\").on(\"click\", function () {" +
"            $(\"input[name=send]\").on(\"click\", function () {" +
"                localStorageService.setPackagesSent(currentThreadId, new Map());" +
"            });" +
"            $(\"#notificationBadge\").remove();" +
"            var packagesSent = localStorageService.getPackagesSent(currentThreadId);" +
"            var res = \"\";" +
"            packagesSent.forEach(function (value, key) {" +
"                res += \"\".concat(key, \" \").concat(value, \"\n\");" +
"            });" +
"            $(\"#message\").val(res);" +
"            logging_helper_1.Log.info(\"bearbeitung eintragen\");" +
"        });" +
"        $(\"input[name=send]\").on(\"click\", function () {" +
"            var emptyRequestData = [];" +
"            localStorageService.setSdInquiry(currentThreadId, emptyRequestData);" +
"        });" +
"    }" +
"}" +
"exports.postLayout = postLayout;" +
"" +
"" +
"//# sourceURL=webpack://standdeff-organizer/./src/ui/components/post-layout.ts?");

/***/ }),

/***/ "./src/ui/components/request-popup.ts":
/*!********************************************!*\
  !*** ./src/ui/components/request-popup.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("" +
"var __read = (this && this.__read) || function (o, n) {" +
"    var m = typeof Symbol === \"function\" && o[Symbol.iterator];" +
"    if (!m) return o;" +
"    var i = m.call(o), r, ar = [], e;" +
"    try {" +
"        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);" +
"    }" +
"    catch (error) { e = { error: error }; }" +
"    finally {" +
"        try {" +
"            if (r && !r.done && (m = i[\"return\"])) m.call(i);" +
"        }" +
"        finally { if (e) throw e.error; }" +
"    }" +
"    return ar;" +
"};" +
"var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {" +
"    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {" +
"        if (ar || !(i in from)) {" +
"            if (!ar) ar = Array.prototype.slice.call(from, 0, i);" +
"            ar[i] = from[i];" +
"        }" +
"    }" +
"    return to.concat(ar || Array.prototype.slice.call(from));" +
"};" +
"Object.defineProperty(exports, \"__esModule\", ({ value: true }));" +
"exports.showRequestPopup = void 0;" +
"var helper_functions_1 = __webpack_require__(/*! ../../helpers/helper-functions */ \"./src/helpers/helper-functions.ts\");" +
"var table_helper_1 = __webpack_require__(/*! ../../helpers/table-helper */ \"./src/helpers/table-helper.ts\");" +
"var local_storage_helper_1 = __webpack_require__(/*! ../../helpers/local-storage-helper */ \"./src/helpers/local-storage-helper.ts\");" +
"var logging_helper_1 = __webpack_require__(/*! ../../helpers/logging-helper */ \"./src/helpers/logging-helper.ts\");" +
"function showRequestPopup() {" +
"    var localStorageService = local_storage_helper_1.LocalStorageHelper.getInstance();" +
"    var urlParams = new URLSearchParams(window.location.search);" +
"    var currentThreadId = urlParams.get(\"thread_id\") || \"\";" +
"    logging_helper_1.Log.info(\"show request popup\");" +
"    // requestData-Objekt aus dem LocalStorage abrufen" +
"    var initPopopBox = \"\n                    <div class=\\\"popup_box_container\\\" id=\\\"dbInfo_popup_box\\\">\n                        <div class='popup_box show'>\n                            <a class='popup_box_close tooltip-delayed' href='#' onclick='$(\\\"#dbInfo_popup_box\\\").remove()'>&nbsp</a>\n                            <div class='popup_box_content'>\n                              <div class='center'>\n                                <h2>Bunker Anfragen</h2>\n                                <table class=\\\"requestContent\\\">\n                                  \n                                    \n                                </table>\n                                <hr style=\\\"margin-top: 15px; margin-bottom: 15px\\\">\n                                <textarea class=\\\"textAreaKoords\\\" id=\\\"textAreaKoords\\\" style=\\\"background-color:#EAD5AA;\\\" placeholder=\\\"Koordinaten\\\"></textarea>\n                                <input type=\\\"button\\\" value=\\\"Bunker anfragen\\\" class=\\\"addBunkerAnfrage btn\\\" disabled style=\\\"float: right; margin-top: 15px\\\">\n                              </div>\n                            </div>\n                        </div>\n                        <div class='fader'></div>\n                    </div>\n    \";" +
"    $('#ds_body')[0].insertAdjacentHTML('beforeend', initPopopBox);" +
"    $(\"#textAreaKoords\").on(\"focusout\", function () {" +
"        var input = getFilteredInput(String($(\"#textAreaKoords\").val()) || \"\");" +
"        logging_helper_1.Log.info(input);" +
"        addNewRequestsToArray(input);" +
"        renderTableRows();" +
"    });" +
"    renderTableRows();" +
"    $(\".addBunkerAnfrage\").on(\"click\", function () {" +
"        var isEmpty = false;" +
"        $(\".amountInput\").each(function () {" +
"            if ($(this).val() === \"\") {" +
"                $(this).css(\"background-color\", \"red\");" +
"                isEmpty = true;" +
"                return false; // break the loop" +
"            }" +
"        });" +
"        if (!isEmpty) {" +
"            var result = (0, table_helper_1.convertRequestArrayToMessageString)(localStorageService.getSdInquiry(currentThreadId));" +
"            $(\"#message\").val(result);" +
"            $(\"#dbInfo_popup_box\").remove();" +
"        }" +
"    });" +
"}" +
"exports.showRequestPopup = showRequestPopup;" +
"function renderTableRows() {" +
"    var localStorageService = local_storage_helper_1.LocalStorageHelper.getInstance();" +
"    var urlParams = new URLSearchParams(window.location.search);" +
"    var currentThreadId = urlParams.get(\"thread_id\") || \"\";" +
"    $(\".requestContent\").empty();" +
"    var requestDataArray = localStorageService.getSdInquiry(currentThreadId);" +
"    var returnHtml = \"<tr style='margin=2px;'><th style=\\\"padding-left: 10px; padding-right: 10px\\\">Koordinate</th>\n                                    <th style=\\\"padding-left: 10px; padding-right: 10px\\\">Pakete</th>\n                                    <th style=\\\"padding-left: 10px; padding-right: 10px\\\">Spieler <span style=\\\"font-size: 0.8em;\\\">(optional)</span></th>\n                                    <th style=\\\"padding-left: 10px; padding-right: 10px\\\">Anmerkung <span style=\\\"font-size: 0.8em;\\\">(optional)</span></th>\n                                    <th style=\\\"padding-left: 10px; padding-right: 10px\\\">ab <span style=\\\"font-size: 0.8em;\\\">(optional)</span></th>\n                                    <th style=\\\"padding-left: 10px; padding-right: 10px\\\">bis <span style=\\\"font-size: 0.8em;\\\">(optional)</span></th>\n                                    <th style=\\\"padding-left: 10px; padding-right: 10px\\\">L\\u00F6schen <button style=\\\"cursor:pointer; background: url(https://dsde.innogamescdn.com/asset/c045337f/graphic/delete.png); width: 20px; height: 20px;  border: none\\\" class=\\\"deleteRequest\\\" id=\\\"deleteAll\\\"></button></th></tr>\";" +
"    if (requestDataArray.length === 0) {" +
"        $(\".addBunkerAnfrage\").prop(\"disabled\", true);" +
"    }" +
"    else {" +
"        $(\".addBunkerAnfrage\").prop(\"disabled\", false);" +
"    }" +
"    requestDataArray.forEach(function (requestRow, index) {" +
"        Object.values(requestRow).forEach(function (value) {" +
"            if (value === undefined) {" +
"                logging_helper_1.Log.info(\"value is undefined\");" +
"            }" +
"        });" +
"        returnHtml += \"<tr style='margin=2px;'><td style=\\\"padding-left: 10px; padding-right: 10px\\\">\";" +
"        if (requestRow.coords) {" +
"            returnHtml += \"<span style=\\\"font-size: 1.2em; font-weight: bold;\\\">\".concat(requestRow.coords, \"</span>\");" +
"        }" +
"        returnHtml += \"</td><td style=\\\"padding-left: 10px; padding-right: 10px\\\">\";" +
"        if (requestRow.amount) {" +
"            returnHtml += \"<input type=\\\"number\\\" style=\\\"background-color:#EAD5AA; border: none;\\\" id=\\\"amountInput\".concat(index, \"\\\" class=\\\"amountInput\\\" value=\\\"\").concat(requestRow.amount, \"\\\">\");" +
"        }" +
"        else {" +
"            returnHtml += \"<input type=\\\"number\\\" style=\\\"background-color:#EAD5AA; border: none;\\\" id=\\\"amountInput\".concat(index, \"\\\" class=\\\"amountInput\\\" value=\\\"\\\">\");" +
"        }" +
"        returnHtml += \"</td><td style=\\\"padding-left: 10px; padding-right: 10px\\\">\";" +
"        if (requestRow.playerName) {" +
"            returnHtml += \"<input type=\\\"text\\\" style=\\\"background-color:#EAD5AA; border: none;\\\" id=\\\"playerNameInput\".concat(index, \"\\\" class=\\\"playerNameInput\\\" value=\\\"\").concat(requestRow.playerName, \"\\\">\");" +
"        }" +
"        else {" +
"            returnHtml += \"<input type=\\\"text\\\" style=\\\"background-color:#EAD5AA; border: none;\\\" id=\\\"playerNameInput\".concat(index, \"\\\" class=\\\"playerNameInput\\\" value=\\\"\\\">\");" +
"        }" +
"        returnHtml += \"</td><td style=\\\"padding-left: 10px; padding-right: 10px\\\">\";" +
"        if (requestRow.comment) {" +
"            returnHtml += \"<input type=\\\"text\\\" style=\\\"background-color:#EAD5AA; border: none;\\\" id=\\\"commentInput\".concat(index, \"\\\" class=\\\"commentInput\\\" value=\\\"\").concat(requestRow.comment, \"\\\">\");" +
"        }" +
"        else {" +
"            returnHtml += \"<input type=\\\"text\\\" style=\\\"background-color:#EAD5AA; border: none;\\\" id=\\\"commentInput\".concat(index, \"\\\" class=\\\"commentInput\\\" value=\\\"\\\">\");" +
"        }" +
"        returnHtml += \"</td><td style=\\\"padding-left: 10px; padding-right: 10px\\\">\";" +
"        if (requestRow.dateFrom) {" +
"            var dateFrom = (0, helper_functions_1.convertEpochToDate)(requestRow.dateFrom);" +
"            returnHtml += \"<input type=\\\"datetime-local\\\" style=\\\"background-color:#EAD5AA; border: none;\\\" id=\\\"dateFromInput\".concat(index, \"\\\" class=\\\"dateFromInput\\\" value=\\\"\").concat(dateFrom, \"\\\">\");" +
"        }" +
"        else {" +
"            returnHtml += \"<input type=\\\"datetime-local\\\" style=\\\"background-color:#EAD5AA; border: none;\\\" id=\\\"dateFromInput\".concat(index, \"\\\" class=\\\"dateFromInput\\\" value=\\\"\\\">\");" +
"        }" +
"        returnHtml += \"</td><td style=\\\"padding-left: 10px; padding-right: 10px\\\">\";" +
"        if (requestRow.dateUntil) {" +
"            var dateUntil = (0, helper_functions_1.convertEpochToDate)(requestRow.dateUntil);" +
"            returnHtml += \"<input type=\\\"datetime-local\\\" style=\\\"background-color:#EAD5AA; border: none;\\\" id=\\\"dateUntilInput\".concat(index, \"\\\" class=\\\"dateUntilInput\\\" value=\\\"\").concat(dateUntil, \"\\\">\");" +
"        }" +
"        else {" +
"            returnHtml += \"<input type=\\\"datetime-local\\\" style=\\\"background-color:#EAD5AA; border: none;\\\" id=\\\"dateUntilInput\".concat(index, \"\\\" class=\\\"dateUntilInput\\\" value=\\\"\\\">\");" +
"        }" +
"        returnHtml += \"</td><td style=\\\"padding-left: 10px; padding-right: 10px\\\">\";" +
"        returnHtml += \"<button style=\\\"cursor:pointer; background: url(https://dsde.innogamescdn.com/asset/c045337f/graphic/delete.png); width: 20px; height: 20px;  border: none\\\" class=\\\"deleteRequest\\\" id=\\\"deleteRequest\".concat(index, \"\\\"></button>\");" +
"        returnHtml += \"</td></tr>\";" +
"    });" +
"    $(\".requestContent\").append(returnHtml);" +
"    $(\".deleteRequest\").on(\"click\", function () {" +
"        var sdInquiryCollection = localStorageService.getSdInquiry(currentThreadId);" +
"        var coords = $(this).closest('tr').children('td:first').text();" +
"        var index = sdInquiryCollection.findIndex(function (request) { return request.coords === coords; });" +
"        if (index !== -1) {" +
"            sdInquiryCollection.splice(index, 1);" +
"            localStorageService.setSdInquiry(currentThreadId, sdInquiryCollection);" +
"            renderTableRows();" +
"        }" +
"    });" +
"    $(\".amountInput\").on(\"click\", function () {" +
"        $(this).val(\"\");" +
"        $(this).css(\"background-color\", \"#EAD5AA\");" +
"    });" +
"    $(\".playerNameInput\").on(\"click\", function () {" +
"        $(this).val(\"\");" +
"    });" +
"    $(\".commentInput\").on(\"click\", function () {" +
"        $(this).val(\"\");" +
"    });" +
"    $(\".amountInput\").on(\"focusout\", function () {" +
"        var sdInquiryCollection = localStorageService.getSdInquiry(currentThreadId);" +
"        var coords = $(this).closest('tr').children('td:first').text();" +
"        var index = sdInquiryCollection.findIndex(function (request) { return request.coords === coords; });" +
"        if (index !== -1) {" +
"            sdInquiryCollection[index].amount = Number($(this).val());" +
"            localStorageService.setSdInquiry(currentThreadId, sdInquiryCollection);" +
"        }" +
"        // Füllen Sie alle anderen leeren Textboxen mit dem Wert" +
"        var value = String($(this).val());" +
"        $(\".amountInput\").each(function () {" +
"            if ($(this).val() === \"\") {" +
"                $(this).val(value);" +
"                var coords_1 = $(this).closest('tr').children('td:first').text();" +
"                var index_1 = sdInquiryCollection.findIndex(function (request) { return request.coords === coords_1; });" +
"                if (index_1 !== -1) {" +
"                    sdInquiryCollection[index_1].amount = Number(value);" +
"                    localStorageService.setSdInquiry(currentThreadId, sdInquiryCollection);" +
"                }" +
"            }" +
"        });" +
"    });" +
"    $(\".playerNameInput\").on(\"focusout\", function () {" +
"        var sdInquiryCollection = localStorageService.getSdInquiry(currentThreadId);" +
"        var coords = $(this).closest('tr').children('td:first').text();" +
"        var index = sdInquiryCollection.findIndex(function (request) { return request.coords === coords; });" +
"        if (index !== -1) {" +
"            sdInquiryCollection[index].playerName = String($(this).val());" +
"            localStorageService.setSdInquiry(currentThreadId, sdInquiryCollection);" +
"        }" +
"        // Füllen Sie alle anderen leeren Textboxen mit dem Wert" +
"        var value = String($(this).val());" +
"        $(\".playerNameInput\").each(function () {" +
"            if ($(this).val() === \"\") {" +
"                $(this).val(value);" +
"                var coords_2 = $(this).closest('tr').children('td:first').text();" +
"                var index_2 = sdInquiryCollection.findIndex(function (request) { return request.coords === coords_2; });" +
"                if (index_2 !== -1) {" +
"                    sdInquiryCollection[index_2].playerName = String(value);" +
"                    localStorageService.setSdInquiry(currentThreadId, sdInquiryCollection);" +
"                }" +
"            }" +
"        });" +
"    });" +
"    $(\".commentInput\").on(\"focusout\", function () {" +
"        var sdInquiryCollection = localStorageService.getSdInquiry(currentThreadId);" +
"        var coords = $(this).closest('tr').children('td:first').text();" +
"        var index = sdInquiryCollection.findIndex(function (request) { return request.coords === coords; });" +
"        if (index !== -1) {" +
"            sdInquiryCollection[index].comment = String($(this).val());" +
"            localStorageService.setSdInquiry(currentThreadId, sdInquiryCollection);" +
"        }" +
"        // Füllen Sie alle anderen leeren Textboxen mit dem Wert" +
"        var value = String($(this).val());" +
"        $(\".commentInput\").each(function () {" +
"            if ($(this).val() === \"\") {" +
"                $(this).val(value);" +
"                var coords_3 = $(this).closest('tr').children('td:first').text();" +
"                var index_3 = sdInquiryCollection.findIndex(function (request) { return request.coords === coords_3; });" +
"                if (index_3 !== -1) {" +
"                    sdInquiryCollection[index_3].comment = String(value);" +
"                    localStorageService.setSdInquiry(currentThreadId, sdInquiryCollection);" +
"                }" +
"            }" +
"        });" +
"    });" +
"    $(\".dateFromInput\").on(\"change\", function () {" +
"        var sdInquiryCollection = localStorageService.getSdInquiry(currentThreadId);" +
"        var coords = $(this).closest('tr').children('td:first').text();" +
"        var index = sdInquiryCollection.findIndex(function (request) { return request.coords === coords; });" +
"        if (index !== -1) {" +
"            var dateFrom = (0, helper_functions_1.convertDateToEpoch)(String($(this).val()));" +
"            var dateUntil = sdInquiryCollection[index].dateUntil;" +
"            if (dateUntil && dateFrom >= dateUntil) {" +
"                $(this).css(\"background-color\", \"red\");" +
"                $(this).val(\"\");" +
"                return;" +
"            }" +
"            $(this).css(\"background-color\", \"#EAD5AA\");" +
"            sdInquiryCollection[index].dateFrom = dateFrom;" +
"            localStorageService.setSdInquiry(currentThreadId, sdInquiryCollection);" +
"        }" +
"    });" +
"    $(\".dateUntilInput\").on(\"change\", function () {" +
"        var sdInquiryCollection = localStorageService.getSdInquiry(currentThreadId);" +
"        var coords = $(this).closest('tr').children('td:first').text();" +
"        var index = sdInquiryCollection.findIndex(function (request) { return request.coords === coords; });" +
"        if (index !== -1) {" +
"            var dateUntil = (0, helper_functions_1.convertDateToEpoch)(String($(this).val()));" +
"            var dateFrom = sdInquiryCollection[index].dateFrom;" +
"            if (dateFrom && dateFrom >= dateUntil) {" +
"                $(this).css(\"background-color\", \"red\");" +
"                $(this).val(\"\");" +
"                return;" +
"            }" +
"            $(this).css(\"background-color\", \"#EAD5AA\");" +
"            sdInquiryCollection[index].dateUntil = dateUntil;" +
"            localStorageService.setSdInquiry(currentThreadId, sdInquiryCollection);" +
"        }" +
"    });" +
"    $(\".playerNameInput\").on(\"input\", function () {" +
"        handleInput(this);" +
"    });" +
"    $(\".commentInput\").on(\"input\", function () {" +
"        handleInput(this);" +
"    });" +
"    $(\"#deleteAll\").on(\"click\", function () {" +
"        localStorageService.setSdInquiry(currentThreadId, []);" +
"        renderTableRows();" +
"    });" +
"}" +
"function handleInput(htmlElement) {" +
"    var _a;" +
"    var $el = $(htmlElement);" +
"    var input = String((_a = $el.val()) !== null && _a !== void 0 ? _a : \"\");" +
"    if (input.includes('\"')) {" +
"        var cleaned = input.replace(/\"/g, \"\");" +
"        $el.val(cleaned);" +
"    }" +
"}" +
"function getFilteredInput(input) {" +
"    logging_helper_1.Log.info(\"getFilteredInput\");" +
"    var coordsPattern = /\\d{3}\\|\\d{3}/g;" +
"    var inputArray = input.split(\"\n\");" +
"    var resultArray = [];" +
"    logging_helper_1.Log.info(inputArray);" +
"    inputArray.forEach(function (line) {" +
"        var matches = line.match(coordsPattern);" +
"        if (matches) {" +
"            logging_helper_1.Log.info(\"line is valid\");" +
"            resultArray.push.apply(resultArray, __spreadArray([], __read(matches), false));" +
"        }" +
"    });" +
"    $(\"#textAreaKoords\").val(\"\");" +
"    return resultArray;" +
"}" +
"function addNewRequestsToArray(input) {" +
"    var urlParams = new URLSearchParams(window.location.search);" +
"    var currentThreadId = urlParams.get(\"thread_id\") || \"\";" +
"    var localStorageService = local_storage_helper_1.LocalStorageHelper.getInstance();" +
"    var sdInquiryCollection = localStorageService.getSdInquiry(currentThreadId);" +
"    logging_helper_1.Log.info(sdInquiryCollection);" +
"    input.forEach(function (line) {" +
"        var _a = __read(line.split(' ', 3)), coords = _a[0], amount = _a[1], optionalData = _a.slice(2);" +
"        var request = {" +
"            coords: coords," +
"            amount: Number(amount)," +
"            playerName: optionalData[1] || undefined," +
"            comment: optionalData[2] || undefined," +
"            dateFrom: Number(optionalData[3]) || undefined," +
"            dateUntil: Number(optionalData[4]) || undefined" +
"        };" +
"        sdInquiryCollection.push(request);" +
"    });" +
"    sdInquiryCollection = removeDuplicatesByCoords(sdInquiryCollection);" +
"    logging_helper_1.Log.info(sdInquiryCollection);" +
"    localStorageService.setSdInquiry(currentThreadId, sdInquiryCollection);" +
"}" +
"function removeDuplicatesByCoords(collection) {" +
"    var uniqueCoords = new Set();" +
"    return collection.filter(function (item) {" +
"        if (uniqueCoords.has(item.coords)) {" +
"            return false;" +
"        }" +
"        else {" +
"            uniqueCoords.add(item.coords);" +
"            return true;" +
"        }" +
"    });" +
"}" +
"" +
"" +
"//# sourceURL=webpack://standdeff-organizer/./src/ui/components/request-popup.ts?");

/***/ }),

/***/ "./src/ui/components/sd-table.ts":
/*!***************************************!*\
  !*** ./src/ui/components/sd-table.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("" +
"var __values = (this && this.__values) || function(o) {" +
"    var s = typeof Symbol === \"function\" && Symbol.iterator, m = s && o[s], i = 0;" +
"    if (m) return m.call(o);" +
"    if (o && typeof o.length === \"number\") return {" +
"        next: function () {" +
"            if (o && i >= o.length) o = void 0;" +
"            return { value: o && o[i++], done: !o };" +
"        }" +
"    };" +
"    throw new TypeError(s ? \"Object is not iterable.\" : \"Symbol.iterator is not defined.\");" +
"};" +
"Object.defineProperty(exports, \"__esModule\", ({ value: true }));" +
"exports.sdTable = void 0;" +
"var edit_sd_post_1 = __webpack_require__(/*! ./edit-sd-post */ \"./src/ui/components/edit-sd-post.ts\");" +
"var post_layout_1 = __webpack_require__(/*! ./post-layout */ \"./src/ui/components/post-layout.ts\");" +
"var local_storage_helper_1 = __webpack_require__(/*! ../../helpers/local-storage-helper */ \"./src/helpers/local-storage-helper.ts\");" +
"var tw_helper_1 = __webpack_require__(/*! ../../helpers/tw-helper */ \"./src/helpers/tw-helper.ts\");" +
"var table_helper_1 = __webpack_require__(/*! ../../helpers/table-helper */ \"./src/helpers/table-helper.ts\");" +
"var logging_helper_1 = __webpack_require__(/*! ../../helpers/logging-helper */ \"./src/helpers/logging-helper.ts\");" +
"function sdTable(threads) {" +
"    var e_1, _a;" +
"    var _b;" +
"    var updateData = (0, table_helper_1.parseSdPosts)();" +
"    logging_helper_1.Log.info(\"visualisierung der sd tabelle\");" +
"    //visuell anzeigen, dass es sich um die sd tabelle handelt" +
"    var sdTableTitle = \"<span style=\\\"color: #002bff; font-size: x-small\\\"> (SD Tabelle)</span>\";" +
"    $(\".clearfix > table\").first().find(\"h2\").append(sdTableTitle);" +
"    $(\".text\").css(\"max-width\", \"100%\");" +
"    logging_helper_1.Log.info(\"thread id is in sd thread ids\");" +
"    var localStorageService = local_storage_helper_1.LocalStorageHelper.getInstance();" +
"    var urlParams = new URLSearchParams(window.location.search);" +
"    var edit_post_id = urlParams.get('edit_post_id');" +
"    var currentThreadId = urlParams.get('thread_id') || \"\";" +
"    if (edit_post_id === ((_b = threads[currentThreadId]) === null || _b === void 0 ? void 0 : _b.sdPostId)) {" +
"        logging_helper_1.Log.info(\"edit mode\");" +
"        (0, edit_sd_post_1.editSdPost)(updateData);" +
"        return;" +
"    }" +
"    if ($(\"#message\").length) { //wenn textarea vorhanden" +
"        logging_helper_1.Log.info(\"textarea vorhanden\");" +
"        (0, post_layout_1.postLayout)(updateData);" +
"        // return; // wenn textarea vorhanden, dann sd tabelle nicht visuell anhand den darunterleigenden posts anpassen" +
"    }" +
"    //removal of all options for non mods" +
"    if (!(0, tw_helper_1.isUserForumMod)()) {" +
"        $(\".postheader_right\").each(function (index, elem) {" +
"            $(elem).children().each(function (index, elem) {" +
"                var keywords = [\"Zitat\", \"Bearbeiten\"];" +
"                $(elem).text().split(\" \").some(function (word) { return keywords.includes(word); }) && $(elem).remove();" +
"            });" +
"        });" +
"    }" +
"    logging_helper_1.Log.info(\"--------------------\");" +
"    var sdTablePost = $(\"a[name='\" + threads[currentThreadId].sdPostId + \"']\").parent();" +
"    var sdTableBody = $(sdTablePost).find(\"table\").find(\"tbody\");" +
"    var postCache = $(sdTablePost).find(\"input[value=postCache]\").siblings().find(\"span\").text();" +
"    var postCacheSplit;" +
"    logging_helper_1.Log.info(postCache.length);" +
"    if (postCache.length > 1) {" +
"        if (postCache.length > 2) {" +
"            postCacheSplit = postCache.split(\",\");" +
"        }" +
"        try {" +
"            // delete every map member of the updateData that is not in the postCache" +
"            for (var postCacheSplit_1 = __values(postCacheSplit), postCacheSplit_1_1 = postCacheSplit_1.next(); !postCacheSplit_1_1.done; postCacheSplit_1_1 = postCacheSplit_1.next()) {" +
"                var key = postCacheSplit_1_1.value;" +
"                updateData.delete(key);" +
"                if (!(0, tw_helper_1.isUserForumMod)()) {" +
"                    $(\"a[name='\" + key + \"']\").parent().remove();" +
"                }" +
"            }" +
"        }" +
"        catch (e_1_1) { e_1 = { error: e_1_1 }; }" +
"        finally {" +
"            try {" +
"                if (postCacheSplit_1_1 && !postCacheSplit_1_1.done && (_a = postCacheSplit_1.return)) _a.call(postCacheSplit_1);" +
"            }" +
"            finally { if (e_1) throw e_1.error; }" +
"        }" +
"    }" +
"    if (sdTableBody.length === 0) {" +
"        logging_helper_1.Log.error(\"sd table body not found\");" +
"        return;" +
"    }" +
"    var sdTableState = (0, table_helper_1.parseTableHtmlElemToSdState)(sdTableBody);" +
"    localStorageService.setSdTableState(currentThreadId, sdTableState);" +
"    logging_helper_1.Log.info(localStorageService.getSdTableState(currentThreadId));" +
"    //Schandfleck des typings, quasi weiße flagge gehisst -.-" +
"    var inquiriesMap = new Map();" +
"    var packagesMap = new Map();" +
"    updateData.forEach(function (value, key) {" +
"        inquiriesMap.set(key, value.inquiries);" +
"        packagesMap.set(key, value.packages);" +
"    });" +
"    var packagesToUpdateFromPosts = new Map();" +
"    packagesMap.forEach(function (value) {" +
"        value.forEach(function (amount, id) {" +
"            if (packagesToUpdateFromPosts.has(id)) {" +
"                var existingAmount = packagesToUpdateFromPosts.get(id);" +
"                packagesToUpdateFromPosts.set(id, parseInt(existingAmount) + parseInt(amount));" +
"            }" +
"            else {" +
"                packagesToUpdateFromPosts.set(id, parseInt(amount));" +
"            }" +
"        });" +
"    });" +
"    logging_helper_1.Log.info(\"--\");" +
"    logging_helper_1.Log.info(packagesToUpdateFromPosts);" +
"    //localStorageService.setPackagesSent(currentThreadId, packagesToUpdate)" +
"    (0, table_helper_1.displayUpdatedSdTable)(packagesToUpdateFromPosts);" +
"    sdTableState = (0, table_helper_1.parseTableHtmlElemToSdState)(sdTableBody);" +
"    localStorageService.setSdTableState(currentThreadId, sdTableState);" +
"    //display sd zeugs für alle nutzer" +
"    //if admin or mod dann zu löschende Posts selecten und" +
"    (0, table_helper_1.updateSentPackagesInSdTable)();" +
"    (0, table_helper_1.applySettingsToMassUtLink)();" +
"    (0, table_helper_1.trimVillageNameText)();" +
"    (0, table_helper_1.trimYearFromDateStrings)();" +
"    if ((0, tw_helper_1.isUserForumMod)()) {" +
"        var sdPostId = threads[currentThreadId].sdPostId;" +
"        //find sd post" +
"        var sdPosts = $(\"a[name='\" + sdPostId + \"']\").parent();" +
"        var postsToDelete = $(sdPosts).find(\"input[value=postCache]\").siblings().find(\"span\").text();" +
"        logging_helper_1.Log.info(postsToDelete);" +
"        if (postsToDelete.length > 1) {" +
"            var postToDelete = postsToDelete.split(\",\");" +
"            postToDelete.forEach(function (postId) {" +
"                $(\"input[value=\".concat(postId, \"]\"))" +
"                    .prop(\"checked\", true)" +
"                    .parent().parent()" +
"                    .css(\"background\", \"rgba(174,6,6,0.73)\");" +
"            });" +
"        }" +
"    }" +
"    else {" +
"        var sdPostId = threads[currentThreadId].sdPostId;" +
"        var sdPostElement = $(\"a[name='\" + sdPostId + \"']\").parent();" +
"        sdPostElement.nextAll(\".post\").hide();" +
"    }" +
"    var showHiddenPosts = '<button class=\"btn\" id=\"showPostsButton\">Zeige versteckte Posts</button>';" +
"    $(\".thread_button\").last().parent().append(showHiddenPosts);" +
"    $(\"#showPostsButton\").on(\"click\", function () {" +
"        restorePosts();" +
"        $(this).remove();" +
"    });" +
"    window.addEventListener('storage', function (event) {" +
"        // Prüfen Sie den Schlüssel, der geändert wurde" +
"        logging_helper_1.Log.info(event.key);" +
"        if (event.key === \"standdeff-organizer\") {" +
"            // Führen Sie Ihre Aktion aus" +
"            logging_helper_1.Log.info('Der Wert von \"standdeff-organizer\" hat sich ge\\u00e4ndert!');" +
"            (0, table_helper_1.updateSentPackagesInSdTable)();" +
"        }" +
"    });" +
"    localStorageService.setSdTableState(currentThreadId, sdTableState);" +
"    function restorePosts() {" +
"        var sdPostId = threads[currentThreadId].sdPostId;" +
"        var sdPostElement = $(\"a[name='\" + sdPostId + \"']\").parent();" +
"        sdPostElement.nextAll(\".post\").show();" +
"    }" +
"}" +
"exports.sdTable = sdTable;" +
"" +
"" +
"//# sourceURL=webpack://standdeff-organizer/./src/ui/components/sd-table.ts?");

/***/ }),

/***/ "./src/ui/mass-ut.ts":
/*!***************************!*\
  !*** ./src/ui/mass-ut.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("" +
"Object.defineProperty(exports, \"__esModule\", ({ value: true }));" +
"exports.displayMassUt = void 0;" +
"var local_storage_helper_1 = __webpack_require__(/*! ../helpers/local-storage-helper */ \"./src/helpers/local-storage-helper.ts\");" +
"var logging_helper_1 = __webpack_require__(/*! ../helpers/logging-helper */ \"./src/helpers/logging-helper.ts\");" +
"var tw_helper_1 = __webpack_require__(/*! ../helpers/tw-helper */ \"./src/helpers/tw-helper.ts\");" +
"var helper_functions_1 = __webpack_require__(/*! ../helpers/helper-functions */ \"./src/helpers/helper-functions.ts\");" +
"function displayMassUt() {" +
"    $(document).ready(function () {" +
"        logging_helper_1.Log.info(\"standdeff-organizer loaded in mass-ut\");" +
"        storeGroupData();" +
"        storeTemplateData();" +
"        var localStorageService = local_storage_helper_1.LocalStorageHelper.getInstance();" +
"        var urlParams = new URLSearchParams(window.location.search);" +
"        var refererThreadId = urlParams.get('sdTableId');" +
"        var preventDuplicateDestination = localStorageService.getPreventDuplicateDestination;" +
"        if (refererThreadId !== null) {" +
"            $(\".group-menu-item\").each(function () {" +
"                var currentHref = $(this).attr(\"href\");" +
"                var newHref = new URL(currentHref, window.location.origin);" +
"                newHref.searchParams.set('sdTableId', refererThreadId);" +
"                $(this).attr(\"href\", newHref.toString());" +
"            });" +
"            var threadData_1 = localStorageService.getThreadData(refererThreadId) || {};" +
"            logging_helper_1.Log.info(threadData_1);" +
"            var destinationVillageId = urlParams.get('target');" +
"            var selectedTemplate_1 = localStorageService.getSelectedTemplate;" +
"            //auswahl der passenden vorlage" +
"            if (localStorageService.getAutomateMassenUt) {" +
"                $(\"select[name='template'] > option\").each(function () {" +
"                    var optionValue = $(this).val();" +
"                    if (optionValue) {" +
"                        var optionObj = JSON.parse(String(optionValue));" +
"                        if (optionObj.id === selectedTemplate_1) {" +
"                            $(this).prop('selected', true);" +
"                            return false; // Beendet die each-Schleife, sobald das passende Element gefunden wurde" +
"                        }" +
"                    }" +
"                });" +
"            }" +
"            var sendingObj_1 = (threadData_1 === null || threadData_1 === void 0 ? void 0 : threadData_1.stateOfSdTable.get(Number(destinationVillageId))) || {};" +
"            var alreadySentAmount = parseInt(String(threadData_1 === null || threadData_1 === void 0 ? void 0 : threadData_1.packagesSent.get(sendingObj_1 === null || sendingObj_1 === void 0 ? void 0 : sendingObj_1.sdId))) | 0;" +
"            logging_helper_1.Log.info(sendingObj_1);" +
"            logging_helper_1.Log.info(alreadySentAmount);" +
"            var packagesToSend_1 = sendingObj_1.leftAmount - alreadySentAmount;" +
"            var epochDateUntil_1 = (0, helper_functions_1.parseGermanDate)(sendingObj_1.dateUntil);" +
"            var epochDateFrom_1 = (0, helper_functions_1.parseGermanDate)(sendingObj_1.dateFrom);" +
"            console.log(epochDateUntil_1, epochDateFrom_1);" +
"            //!(alreadySentAmount!==undefined && preventDuplicateDestination)" +
"            if ((alreadySentAmount > 0 && preventDuplicateDestination) || packagesToSend_1 < 0) {" +
"                packagesToSend_1 = 0;" +
"            }" +
"            $(\".unit_checkbox\").each(function () {" +
"                if (!$(this).is(':checked')) {" +
"                    $(this).trigger('click');" +
"                }" +
"            });" +
"            // check how many checkboxes are present" +
"            if ($(\".troop-request-selector\").length < packagesToSend_1 && epochDateFrom_1 === 0 && epochDateUntil_1 === 0) {" +
"                $(\"#place_call_select_all\").trigger('click');" +
"            }" +
"            else {" +
"                var slowestUnitLfz_1 = localStorageService.getSwordLfz * 60 * 1000;" +
"                var currentTime_1 = Date.now();" +
"                $(\".call-village\").each(function () {" +
"                    if (packagesToSend_1 > 0) {" +
"                        var sourceCoords = (0, tw_helper_1.villageBBCodeToCoordinates)($(this).find(\"a\").text().trim());" +
"                        var destinationCoords = (0, tw_helper_1.villageBBCodeToCoordinates)(sendingObj_1.coords);" +
"                        var distance = Number((0, tw_helper_1.distanceXY)(sourceCoords, destinationCoords).toFixed(3));" +
"                        var travelTime = distance * slowestUnitLfz_1; // ms" +
"                        var arrival = currentTime_1 + travelTime; // ms" +
"                        var fromIsSet = typeof epochDateFrom_1 === \"number\" && epochDateFrom_1 > 0;" +
"                        var untilIsSet = typeof epochDateUntil_1 === \"number\" && epochDateUntil_1 > 0;" +
"                        var withinFrom = fromIsSet ? arrival >= epochDateFrom_1 : true;" +
"                        var withinUntil = untilIsSet ? arrival <= epochDateUntil_1 : true;" +
"                        console.log(new Date(arrival));" +
"                        if (fromIsSet)" +
"                            console.log(\"from:\", new Date(epochDateFrom_1));" +
"                        if (untilIsSet)" +
"                            console.log(\"until:\", new Date(epochDateUntil_1));" +
"                        console.log(\"--\");" +
"                        if (withinFrom && withinUntil) {" +
"                            $(this).find(\".troop-request-selector\").trigger('click');" +
"                            packagesToSend_1--;" +
"                        }" +
"                    }" +
"                });" +
"            }" +
"            // count checked checkboxes" +
"            $(\"#place_call_form_submit\").prop('disabled', true);" +
"            $(\".evt-button-fill\").css(\"background\", \"#0e7a0e\");" +
"            $(\".evt-button-fill\").on(\"click\", function () {" +
"                $(this).prop('disabled', true);" +
"                $(\"#place_call_form_submit\").prop('disabled', false);" +
"                $(\"#place_call_form_submit\").css(\"background\", \"#0e7a0e\");" +
"            });" +
"            $(\"#place_call_form_submit\").on(\"click\", function () {" +
"                //$(this).prop('disabled', true);" +
"                var checkedBoxes = $(\".troop-request-selector:checked\").length;" +
"                threadData_1 === null || threadData_1 === void 0 ? void 0 : threadData_1.packagesSent.set(sendingObj_1.sdId, String(checkedBoxes));" +
"                localStorageService.setThreadData(refererThreadId, threadData_1);" +
"                logging_helper_1.Log.info(packagesToSend_1);" +
"            });" +
"        }" +
"    });" +
"}" +
"exports.displayMassUt = displayMassUt;" +
"function storeGroupData() {" +
"    var groupData = [];" +
"    var localStorageService = local_storage_helper_1.LocalStorageHelper.getInstance();" +
"    $(\".vis_item\").find(\".group-menu-item\").each(function () {" +
"        var groupId = $(this).attr(\"data-group-id\");" +
"        var groupName = $(this).text().trim().slice(1, -1);" +
"        if (groupId !== undefined && groupName !== undefined) {" +
"            groupData.push({ id: groupId, name: groupName });" +
"            return;" +
"        }" +
"        logging_helper_1.Log.error(\"group id or group name is undefined\");" +
"    });" +
"    localStorageService.setGroupData = groupData;" +
"}" +
"function storeTemplateData() {" +
"    var optionArray = [];" +
"    var localStorageService = local_storage_helper_1.LocalStorageHelper.getInstance();" +
"    $(\"select[name='template'] > option\").each(function () {" +
"        if ($(this).val() === \"\")" +
"            return;" +
"        var optionValue = String($(this).val());" +
"        var optionObj = JSON.parse(optionValue);" +
"        var returnObj = { id: optionObj.id, name: optionObj.name };" +
"        optionArray.push(returnObj);" +
"    });" +
"    localStorageService.setTemplateData = optionArray;" +
"}" +
"" +
"" +
"//# sourceURL=webpack://standdeff-organizer/./src/ui/mass-ut.ts?");

/***/ }),

/***/ "./src/ui/new-thread.ts":
/*!******************************!*\
  !*** ./src/ui/new-thread.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("" +
"Object.defineProperty(exports, \"__esModule\", ({ value: true }));" +
"exports.createNewTable = void 0;" +
"var tw_helper_1 = __webpack_require__(/*! ../helpers/tw-helper */ \"./src/helpers/tw-helper.ts\");" +
"var local_storage_helper_1 = __webpack_require__(/*! ../helpers/local-storage-helper */ \"./src/helpers/local-storage-helper.ts\");" +
"var logging_helper_1 = __webpack_require__(/*! ../helpers/logging-helper */ \"./src/helpers/logging-helper.ts\");" +
"function createNewTable() {" +
"    var localStorageService = local_storage_helper_1.LocalStorageHelper.getInstance();" +
"    logging_helper_1.Log.info(\"standdeff-organizer loaded in new_thread\");" +
"    localStorageService.setNewThread = false;" +
"    $(\".clearfix > form > input[value=Senden]\").on(\"mouseenter\", function () {" +
"        // @ts-ignore" +
"        if ($(\"input[name=subject]\").val().length < 3) {" +
"            $(\".clearfix > form > input[value=Senden]\").attr(\"disabled\", \"true\");" +
"        }" +
"    });" +
"    $(\".clearfix > form > input[value=Senden]\").on(\"mouseleave\", function () {" +
"        $(\".clearfix > form > input[value=Senden]\").removeAttr(\"disabled\");" +
"    });" +
"    //debugger;" +
"    if ((0, tw_helper_1.isUserForumMod)()) {" +
"        logging_helper_1.Log.info(\"user is forum mod\");" +
"        //html elements" +
"        var settingsBtn = \"<input type=\\\"button\\\" style=\\\"background-image: url(https://dsde.innogamescdn.com/asset/7b986b1a/graphic//buildings/smith.png);\n            background-repeat: no-repeat; width:20px;height:20px; border: none; cursor: pointer; background-color: transparent; margin-left:7px;\\\" class=\\\"configbtn\\\">\";" +
"        var tbBows = game_data.units.includes(\"archer\") ? \"<img src=\\\"https://dsde.innogamescdn.com/asset/b5d78b17/graphic/unit/unit_archer@2x.png\\\" title=\\\"Bogensch\\u00FCtze\\\" alt=\\\"\\\" class=\\\"\\\" style=\\\"width: 15px; height: 15px\\\">\n      <input type=\\\"text\\\" class=\\\"inputBow\\\" style=\\\"width:70px;background-color:#EAD5AA\\\">\" : \"\";" +
"        var newPaketLineButton = \"<input type=\\\"button\\\" class=\\\"btn\\\" id=\\\"newPaketLine\\\" style=\\\"background-image: url('https://media.innogamescdn.com/TribalWars/emoji/274e.png'); background-size: cover; width: 15px; height: 15px; border: none; cursor: pointer; transform: rotate(45deg);\\\">\";" +
"        var configContent_1 = \"<br><img src=\\\"https://dsde.innogamescdn.com/asset/b5d78b17/graphic/unit/unit_spear@2x.png\\\" title=\\\"Speertr\\u00E4ger\\\" alt=\\\"\\\" class=\\\"\\\" style=\\\"width: 15px; height: 15px\\\">\n<input type=\\\"text\\\" class=\\\"inputSpear\\\" style=\\\"width:70px;background-color:#EAD5AA;margin-right: 10px\\\">\n<img src=\\\"https://dsde.innogamescdn.com/asset/b5d78b17/graphic/unit/unit_sword@2x.png\\\" title=\\\"Schwertk\\u00E4mpfer\\\" alt=\\\"\\\" class=\\\"\\\" style=\\\"width: 15px; height: 15px\\\">\n<input type=\\\"text\\\" class=\\\"inputSword\\\" style=\\\"width:70px;background-color:#EAD5AA;margin-right: 10px\\\">\" + tbBows + \"\n<img src=\\\"https://dsde.innogamescdn.com/asset/b5d78b17/graphic/unit/unit_spy@2x.png\\\" title=\\\"Sp\\u00E4her\\\" alt=\\\"\\\" class=\\\"\\\" style=\\\"width: 15px; height: 15px\\\">\n<input type=\\\"text\\\" class=\\\"inputSpy\\\" style=\\\"width:70px;background-color:#EAD5AA;margin-right: 10px\\\">\";" +
"        var config = \"<br><div class=\\\"configs\\\" style=\\\"display: none; width: 95%;margin-left: auto;margin-bottom: 20px;\n  margin-right: auto;margin-top:15px;\\\"><div class=\\\"inputCollection\\\">\" + configContent_1 + newPaketLineButton + \"</div>\n  <br>\n  <br>\n  <input type=\\\"button\\\" class=\\\"btn\\\" id=\\\"setupTable\\\" value=\\\"SD Tabelle generieren\\\">\n</div>\";" +
"        //append html elements" +
"        $(\".clearfix > h2\").append(settingsBtn);" +
"        $(\".clearfix > h2\").append(config);" +
"        $(\".configbtn\").on(\"click\", swapConfgDisplay);" +
"        $(\"#setupTable\").on(\"click\", newThread);" +
"        $(\"#newPaketLine\").on(\"click\", function () {" +
"            $(\".inputCollection\").append(configContent_1);" +
"        });" +
"    }" +
"}" +
"exports.createNewTable = createNewTable;" +
"function newThread() {" +
"    var localStorageService = local_storage_helper_1.LocalStorageHelper.getInstance();" +
"    var troopArray = [];" +
"    // Collect values from input elements with the class 'inputSpear'" +
"    var spear = $(\".inputSpear\").map(function () {" +
"        return $(this).val();" +
"    }).get();" +
"    // Collect values from input elements with the class 'inputSword'" +
"    var sword = $(\".inputSword\").map(function () {" +
"        return $(this).val();" +
"    }).get();" +
"    // Collect values from input elements with the class 'inputBow' if 'archer' is included in game_data.units" +
"    var bow = game_data.units.includes(\"archer\") ? $(\".inputBow\").map(function () {" +
"        return $(this).val();" +
"    }).get() : null;" +
"    var spy = $(\".inputSpy\").map(function () {" +
"        return $(this).val();" +
"    }).get();" +
"    var allInputsEmpty = spear.every(function (val) { return val === \"\"; }) && sword.every(function (val) { return val === \"\"; }) && (!bow || bow.every(function (val) { return val === \"\"; })) && spy.every(function (val) { return val === \"\"; });" +
"    // Set default values if all inputs are empty" +
"    if (allInputsEmpty) {" +
"        spear = spear.map(function () { return \"100\"; });" +
"        sword = sword.map(function () { return \"100\"; });" +
"        if (bow) {" +
"            bow = bow.map(function () { return \"100\"; });" +
"        }" +
"        spy = spy.map(function () { return \"5\"; });" +
"    }" +
"    // Determine the maximum number of rows" +
"    var maxRows = Math.max(spear.length, sword.length, bow ? bow.length : 0, spy.length);" +
"    // Group values row by row" +
"    for (var i = 0; i < maxRows; i++) {" +
"        var row = [];" +
"        row.push(spear[i] || \"\");" +
"        row.push(sword[i] || \"\");" +
"        if (bow) {" +
"            row.push(bow[i] || \"\");" +
"        }" +
"        row.push(spy[i] || \"\");" +
"        troopArray.push(row);" +
"    }" +
"    troopArray = troopArray.filter(function (row) { return row.some(function (value) { return value !== \"\"; }); });" +
"    var paketText = createPaketHtml(troopArray);" +
"    $(\".clearfix > form > input[value=Senden]\").on(\"click\", function () {" +
"        localStorageService.setNewThread = true;" +
"    });" +
"    var text = \"[b]SD Tabelle Paketsystem[/b]\n\n[table]\n[**]ID[||]Dorfkoordinaten[||]angefordert[||][color=#8d0100]noch ben\\u00F6tigt[/color] [||]Spieler[||]Bemerkung[||]ab[||]bis[||][color=#001c83]Massen UT-Link[/color][/**]\n[/table]\n\n\".concat(paketText, \"\n\n[spoiler=Erkl\\u00E4rung Paketsystem]Zur Vereinfachung des Standdeffschickens wird ein Paketsystem verwendet.\n- regt zum Splitten an\n- einheitliche Bunker und keine komischen Ausrutscher\n- Rechnung innerhalb des Skriptes einfacher :)\n- das Pflegen der Tabelle w\\u00E4re auch ohne Skript einfacher\n\nEin Paket besteht aus einer festen hoffentlich sinnvollen (keine skav in sd splits) Anzahl an Einheiten.\nDadruch entstehen im Stamm einheitliche Bunker und keine komischen Ausrutscher. Durch diese Art des Deffens k\\u00F6nnen Verluste aufgeteilt und schneller nachgebaut werden.\n[/spoiler]\n\n[spoiler=Erkl\\u00E4rung SD Skript]\nDas SD Skript besteht seit dem Update aus mehreren Bereichen:\n- Spieloptionen ganz unten -> Settings: Hier k\\u00F6nnen die Einstellungen f\\u00FCr das Skript vorgenommen werden\n- Massenunterst\\u00FCtzung: Hier\\u00FCber wird die Deff verschickt und das Skript (wenn eingeschaltet) trackt wieviele Einheiten ben\\u00F6tigt werden und im Anschluss geschickt wurde.\n- SD Tabelle: Die Sd Tabelle ist die \\u00DCbersicht, welche Auskunft \\u00FCber die Deffanfragen gibt. Es ist bei jedem Nutzer einzustellen in welchem Forum sich die SD Tabelle befindet. Dies kann \\u00FCber einen Button oder \\u00FCber ein Popup vermerkt werden.\n- Bearbeiten und Erstellen von Posts:\n  ->\\u00FCber den Button \\\"Bunker Anfragen\\\" wird eine neue Anfrage erstellt. Diese wird innerhalb einem UI bearbeitet.\n  ->\\u00FCber den Button \\\"Bearbeitung eintragen\\\" werden die bisher bearbeiteten Anfragen in das Nachrichtenfenster eingetragen.\n\n\nHandling ohne das Skript: (wieso auch immer)\n[b]Beispiele: \nAnfordern:[/b]\n[code]\n567|123 200\\\"TheHebel97\\\"ohne den Bunker front rip\\\"\\\"\n897|123 2\\\"-EDM\\\"2 Pakete f\\u00FCr Bruder Marwin\\\"\\\"\n234|123 444 \\\"alt_f4 \\\" mauer_f4\\\"\\\"\n432|848 222 \\\"Manu|RWE\\\"\\\"\\\"\n345|123 1 \\\"Andimacht\\\"\\\"\\\"\n345|123 1\\\"\\\"\\\"\\\"\n  [/code]\n[b]Bearbeiten:[/b]\n [code] id5 20\n  2 20\n  1 70Pakete\n  1abcdefg20\n  1 done\n  [/code]\n\n\n[spoiler=Wissenswertes f\\u00FCr SFs]\nMoin SFs:\n- postCache Spoiler ignorieren und nicht bearbeiten\n- nun muss jeder im Stamm das entsprechende Skript installieren um von den Neuerungen zu profitieren (gl beim einrichten xD)\n- um Filter und \\u00E4hnliches in Massen Ut auszuf\\u00FChren, muss das Setting in den Spieleinstellungen aktiviert werden\n- Gruppen werden beim erstmaligen \\u00D6ffnen von Massen UT eingelesen, im Anschluss daran kann in den Settings ausgew\\u00E4hlt werden, was die SD Gruppe ist\n- f\\u00FCr die normalen Nutzer ist das Textfeld blockiert, dies kann durch einen Doppelklick entfernt werden. Das dient dazu, dass die Sd posts clean bleiben. Sozialer Overhead in der SD Tabelle ist nicht erw\\u00FCnscht.\n- normale Nutzer haben ebenfalls keine bearbeiten Funktionen im sd Thread, au\\u00DFerdem sehen diese keine posts\n\n[/spoiler]\n[spoiler=postCache]\n[/spoiler]\n[/spoiler]\n\n\");" +
"    $(\"#message\").val(text);" +
"}" +
"var createPaketHtml = function (troopArray) {" +
"    var text = \"\";" +
"    troopArray.forEach(function (row, index) {" +
"        text += \"[b]Paket \".concat(index + 1, \":[/b]\n\");" +
"        text += \"[unit]spear[/unit] \".concat(row[0] || 0, \" \");" +
"        text += \"[unit]sword[/unit] \".concat(row[1] || 0, \" \");" +
"        if (row.length > 3) {" +
"            text += \"[unit]archer[/unit] \".concat(row[2] || 0, \" \");" +
"        }" +
"        text += \"[unit]spy[/unit] \".concat(row[row.length - 1] || 0, \"\n \");" +
"        text += \"\n\";" +
"    });" +
"    return text;" +
"};" +
"function swapConfgDisplay() {" +
"    var element = $(\".configs\");" +
"    if (element.css(\"display\") === \"none\") {" +
"        element.css(\"display\", \"block\");" +
"    }" +
"    else {" +
"        element.css(\"display\", \"none\");" +
"    }" +
"}" +
"" +
"" +
"//# sourceURL=webpack://standdeff-organizer/./src/ui/new-thread.ts?");

/***/ }),

/***/ "./src/ui/settings.ts":
/*!****************************!*\
  !*** ./src/ui/settings.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("" +
"var __read = (this && this.__read) || function (o, n) {" +
"    var m = typeof Symbol === \"function\" && o[Symbol.iterator];" +
"    if (!m) return o;" +
"    var i = m.call(o), r, ar = [], e;" +
"    try {" +
"        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);" +
"    }" +
"    catch (error) { e = { error: error }; }" +
"    finally {" +
"        try {" +
"            if (r && !r.done && (m = i[\"return\"])) m.call(i);" +
"        }" +
"        finally { if (e) throw e.error; }" +
"    }" +
"    return ar;" +
"};" +
"Object.defineProperty(exports, \"__esModule\", ({ value: true }));" +
"exports.displaySettings = void 0;" +
"var local_storage_helper_1 = __webpack_require__(/*! ../helpers/local-storage-helper */ \"./src/helpers/local-storage-helper.ts\");" +
"var logging_helper_1 = __webpack_require__(/*! ../helpers/logging-helper */ \"./src/helpers/logging-helper.ts\");" +
"var localStorageService = local_storage_helper_1.LocalStorageHelper.getInstance();" +
"function displaySettings() {" +
"    logging_helper_1.Log.info(\"standdeff-organizer loaded in settings\");" +
"    var unitDropDownOptions = '<option value=\"default\"></option>';" +
"    game_data.units.forEach(function (unit) {" +
"        unitDropDownOptions += \"<option value=\\\"\".concat(unit, \"\\\">\").concat(unit, \"</option>\");" +
"    });" +
"    var settingsHtml = \"<table class=\\\"vis settings\\\" width=\\\"100%\\\" style=\\\"margin-top: 15px\\\">\n  <tbody>\n  <tr>\n    <th colspan=\\\"4\\\" style=\\\"text-align: center\\\">\n      <img class=\\\"addThread\\\" style=\\\"cursor: pointer\\\"\n           src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMESURBVDhPrZVpSFRRFMf/740zo+hgmjpODqNpmYWQwZgLZIL5oYxwiyJoFcJoozIjIsoPQYQgWYQ1TSAaKbmippKFpZaS5kZaUoimuGaoM46z9+71OSYaqPT78t4957z/vefcw3kMOHTTQ9bmkidoKs6CZmKImFaMk6sMIXHJUMaehoNExjBErPDOKXxvrITX1mB4bQniQxcwGk0QCu341WIGv7VhsPsTNoXuRcKNZ2DqctKsb9S3EJWUhpD4JD5sdTQVqTGvwaTHy6zOUjmOpxfz7rWRnRKHyZEBsKRmy6W5WogG0VpUGL3egO6vPZia0oBhGLi5ucDHWwF7ezF6e/sxMjpG60lgWQYyTynk8g0Qi0XURrAJErH39R+hUudifHwCApZFQMBmXL6YzH0kQ5YqG7XvPsDBwZ5eEMuw8Pf3Q0L8fuxU7uBVuI34J4aHR3D3XiaOHklEVXkeql/l02AniSP12wkEOHHsEAry1aipKkB56XN4eLgh8+FTtLZ1YnbWQONsgiaTGa6uLpxDz6Vl5FJiERkRDne39XzEYkQiIVKvnIPvRgWaW9qh0f0lSOqykXMEbQ9EYUkFyiqq0dXdA51ulgb9Czs7AYKVQTCZTdBotdRmOyE50fXUC0iIjUFxaSUy7j/G29p6TE9r+IjlsVoBrWYGFvLCQQX1et3cghM9mHgAL3KyEB0VgcwHKnxu7aTlWA6LxYrR0XFIpe4QCwXUZjuhVjuDXxO/bfWL2RcNF9d16P85AN3s0tQtFgvaO76grqERfn4+cHSYax3aNgbNJN2JpOjJ7SaRSDA2Ng6z2QyZTAqxSERT6+sbQGNjM5ydnWE0GZGT+xK7d4XT2jd0lC0IEry95RjiWqewqBwGo4HrQwHOnjmJsBAlbVyFwgvVr2vR0tpO40VCEa5dPY+wUCW98XmY25GwbttzGLGX0nnT2ijJSEFXTR5YMs8mB3/w5rVDNIgWS4YjmWc1qjTetXoqH92kGkRryYD18A20tdFKICdbNGCJ8f/9AmTMH8N0QjyBbMOkAAAAAElFTkSuQmCC\\\"/>\n      SD-Tabellen-Skript-Einstellungen\n      <img class=\\\"addThread\\\" style=\\\"cursor: pointer\\\"\n           src=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMESURBVDhPrZVpSFRRFMf/740zo+hgmjpODqNpmYWQwZgLZIL5oYxwiyJoFcJoozIjIsoPQYQgWYQ1TSAaKbmippKFpZaS5kZaUoimuGaoM46z9+71OSYaqPT78t4957z/vefcw3kMOHTTQ9bmkidoKs6CZmKImFaMk6sMIXHJUMaehoNExjBErPDOKXxvrITX1mB4bQniQxcwGk0QCu341WIGv7VhsPsTNoXuRcKNZ2DqctKsb9S3EJWUhpD4JD5sdTQVqTGvwaTHy6zOUjmOpxfz7rWRnRKHyZEBsKRmy6W5WogG0VpUGL3egO6vPZia0oBhGLi5ucDHWwF7ezF6e/sxMjpG60lgWQYyTynk8g0Qi0XURrAJErH39R+hUudifHwCApZFQMBmXL6YzH0kQ5YqG7XvPsDBwZ5eEMuw8Pf3Q0L8fuxU7uBVuI34J4aHR3D3XiaOHklEVXkeql/l02AniSP12wkEOHHsEAry1aipKkB56XN4eLgh8+FTtLZ1YnbWQONsgiaTGa6uLpxDz6Vl5FJiERkRDne39XzEYkQiIVKvnIPvRgWaW9qh0f0lSOqykXMEbQ9EYUkFyiqq0dXdA51ulgb9Czs7AYKVQTCZTdBotdRmOyE50fXUC0iIjUFxaSUy7j/G29p6TE9r+IjlsVoBrWYGFvLCQQX1et3cghM9mHgAL3KyEB0VgcwHKnxu7aTlWA6LxYrR0XFIpe4QCwXUZjuhVjuDXxO/bfWL2RcNF9d16P85AN3s0tQtFgvaO76grqERfn4+cHSYax3aNgbNJN2JpOjJ7SaRSDA2Ng6z2QyZTAqxSERT6+sbQGNjM5ydnWE0GZGT+xK7d4XT2jd0lC0IEry95RjiWqewqBwGo4HrQwHOnjmJsBAlbVyFwgvVr2vR0tpO40VCEa5dPY+wUCW98XmY25GwbttzGLGX0nnT2ijJSEFXTR5YMs8mB3/w5rVDNIgWS4YjmWc1qjTetXoqH92kGkRryYD18A20tdFKICdbNGCJ8f/9AmTMH8N0QjyBbMOkAAAAAElFTkSuQmCC\\\"/>\n    </th>\n  </tr>\n  <tr>\n    <td width=\\\"40%\\\">\n      <table class=\\\"vis settings\\\">\n        <tbody>\n        <tr>\n          <td>\n            Popup beim ersten Start:\n          </td>\n          <td>\n            <input class=\\\"btn btn-confirm-no\\\" type=\\\"button\\\" value=\\\"An\\\" id=\\\"first-start-popup\\\" style=\\\"width:75px; background-color: #8d0100; color: #ffffff !important;\\\"/>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            Massen-UT vereinfachen:\n          </td>\n          <td>\n            <input class=\\\"btn btn-confirm-no\\\"  type=\\\"button\\\" value=\\\"Aus\\\" id=\\\"automate-massen-ut\\\" style=\\\"width:75px;  background-color: #8d0100;color: #ffffff \\\"/>\n          </td>\n\n        </tr>\n        <tr>\n          <td>\n            verhindere doppeltes Schicken:\n          </td>\n          <td>\n            <input class=\\\"btn btn-confirm-no\\\"  type=\\\"button\\\" value=\\\"An\\\" id=\\\"prevent-duplicate-destination\\\" style=\\\"width:75px;  background-color: #8d0100;color: #ffffff \\\"/>\n          </td>\n\n        </tr>\n        <tr>\n            <td>\n                sortieren nach:\n            </td>\n            <td>\n                <select id=\\\"sd-sort-by\\\" style=\\\"width:150px; background-color: #8d0100; color: #ffffff; border: none; padding: 5px 10px; border-radius: 4px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\\\">\" + unitDropDownOptions + \"</select>\n            </td>\n      </tr>\n        <tr>\n          <td>\n            SD verschicken Gruppen ID:\n          </td>\n          <td>\n            <input type=\\\"number\\\" value=\\\"0\\\" id=\\\"sd-group-id\\\" style=\\\"width:68px;  background-color: #8d0100; color: #ffffff\\\"/>\n          </td>\n\n        </tr>\n        <tr>\n          <td>\n            SD Vorlagen ID:\n          </td>\n          <td>\n            <input type=\\\"number\\\" value=\\\"0\\\" id=\\\"sd-template-id\\\" style=\\\"width:68px;  background-color: #8d0100; color: #ffffff\\\"/>\n          </td>\n\n        </tr>\n        <tr>\n          <td>\n            Schwert Laufzeit:\n          </td>\n          <td>\n            <input type=\\\"number\\\" value=\\\"0\\\" id=\\\"sd-schwertLfz\\\" style=\\\"width:68px;  background-color: #8d0100; color: #ffffff\\\"/>\n          </td>\n\n        </tr>\n        \n        </tbody>\n      </table>\n\n    </td>\n    <td width=\\\"50%\\\">\n      <table class=\\\"vis settings\\\" width=\\\"100%\\\">\n        <tbody id=\\\"activeSdThreads\\\">\n        <tr>\n          <th width=\\\"85%\\\">\n            Forenname\n          </th>\n          <th> L\\u00F6schen\n          </th>\n        </tr>\n        </tbody>\n      </table>\n    </td>\n  </tr>\n\n</table>\";" +
"    $(\"#content_value > table > tbody > tr > td:nth-child(2)\").append(settingsHtml);" +
"    //colorize the buttons depending on the value of the setting" +
"    if (localStorageService.getFirstStartPopup) {" +
"        $(\"#first-start-popup\").val(\"An\").css(\"background\", \"#0e7a0e\");" +
"    }" +
"    else {" +
"        $(\"#first-start-popup\").val(\"Aus\").css(\"background\", \"#8d0100\");" +
"    }" +
"    if (localStorageService.getAutomateMassenUt) {" +
"        $(\"#automate-massen-ut\").val(\"An\").css(\"background\", \"#0e7a0e\");" +
"    }" +
"    else {" +
"        $(\"#automate-massen-ut\").val(\"Aus\").css(\"background\", \"#8d0100\");" +
"    }" +
"    if (localStorageService.getPreventDuplicateDestination) {" +
"        $(\"#prevent-duplicate-destination\").val(\"An\").css(\"background\", \"#0e7a0e\");" +
"    }" +
"    else {" +
"        $(\"#prevent-duplicate-destination\").val(\"Aus\").css(\"background\", \"#8d0100\");" +
"    }" +
"    if (localStorageService.getSortBy !== \"default\") {" +
"        $(\"#sd-sort-by\").val(localStorageService.getSortBy).css(\"background\", \"#0e7a0e\");" +
"    }" +
"    else {" +
"        $(\"#sd-sort-by\").val(\"default\").css(\"background\", \"#8d0100\");" +
"    }" +
"    if (localStorageService.getSwordLfz !== 0) {" +
"        $(\"#sd-schwertLfz\").val(localStorageService.getSwordLfz).css(\"background\", \"#0e7a0e\");" +
"    }" +
"    else {" +
"        $(\"#sd-schwertLfz\").val(\"0\").css(\"background\", \"#8d0100\");" +
"    }" +
"    // get group data from local storage" +
"    var groupData = localStorageService.getGroupData;" +
"    logging_helper_1.Log.info(\"groupData: \", groupData);" +
"    var templateData = localStorageService.getTemplateData;" +
"    if (groupData.length > 0) {" +
"        var dropdown_1 = '<select id=\"sd-group-id\" style=\"width:150px; background-color: #8d0100; color: #ffffff; border: none; padding: 5px 10px; border-radius: 4px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\">';" +
"        groupData.forEach(function (group) {" +
"            dropdown_1 += \"<option value=\\\"\".concat(group.id, \"\\\">\").concat(group.name, \"</option>\");" +
"        });" +
"        dropdown_1 += '</select>';" +
"        $(\"#sd-group-id\").replaceWith(dropdown_1);" +
"        if (localStorageService.getSdGroupId !== \"0\") {" +
"            $(\"#sd-group-id\").val(localStorageService.getSdGroupId).css(\"background\", \"#0e7a0e\");" +
"        }" +
"    }" +
"    if (templateData.length > 0) {" +
"        var dropdown_2 = '<select id=\"sd-template-id\" style=\"width:150px; background-color: #8d0100; color: #ffffff; border: none; padding: 5px 10px; border-radius: 4px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\">';" +
"        dropdown_2 += '<option value=\"\">nicht gesetzt</option>';" +
"        templateData.forEach(function (template) {" +
"            dropdown_2 += \"<option value=\\\"\".concat(template.id, \"\\\">\").concat(template.name, \"</option>\");" +
"        });" +
"        dropdown_2 += '</select>';" +
"        $(\"#sd-template-id\").replaceWith(dropdown_2);" +
"        if (localStorageService.getSelectedTemplate !== \"\") {" +
"            $(\"#sd-template-id\").val(localStorageService.getSelectedTemplate).css(\"background\", \"#0e7a0e\");" +
"        }" +
"    }" +
"    var threads = localStorageService.getAllThreads;" +
"    var baseUrl = window.location.origin + window.location.pathname;" +
"    var villageId = game_data.village.id;" +
"    if (threads) {" +
"        Object.entries(threads).forEach(function (_a) {" +
"            var _b = __read(_a, 2), threadId = _b[0], threadData = _b[1];" +
"            var threadLink = \"\".concat(baseUrl, \"?village=\").concat(villageId, \"&screen=forum&screenmode=view_thread&forum_id=\").concat(threadData.forumId, \"&thread_id=\").concat(threadId);" +
"            var row = \"<tr>\n             <td>\n                 <span style=\\\"font-size: larger; font-weight: bold\\\">\".concat(threadData.forumName, \"</span> -\n                 <a href=\\\"\").concat(threadLink, \"\\\">\n                     \").concat(threadData.threadName, \"\n                 </a>\n             </td>\n             <td style=\\\"text-align: center;\\\"><button style=\\\"background: url(https://dsde.innogamescdn.com/asset/c045337f/graphic/delete.png); width: 20px; height: 20px;  border: none\\\" class=\\\"delete-thread\\\" data-thread-id=\\\"\").concat(threadId, \"\\\"></button></td>\n         </tr>\");" +
"            $(\"#activeSdThreads\").append(row);" +
"        });" +
"    }" +
"    //listener" +
"    $(\".delete-thread\").on(\"click\", function () {" +
"        var threadIdToDelete = $(this).data(\"thread-id\");" +
"        localStorageService.deleteThread(threadIdToDelete);" +
"        $(this).parent().parent().remove();" +
"    });" +
"    $(\"#first-start-popup\").on(\"click\", function () {" +
"        var value = $(this).val();" +
"        if (value === \"An\") {" +
"            $(this).val(\"Aus\");" +
"            $(\"#first-start-popup\").css(\"background\", \"#8d0100\");" +
"            localStorageService.setFirstStartPopup = false;" +
"        }" +
"        else {" +
"            $(this).val(\"An\");" +
"            $(\"#first-start-popup\").css(\"background\", \"#0e7a0e\");" +
"            localStorageService.setFirstStartPopup = true;" +
"        }" +
"    });" +
"    $(\"#prevent-duplicate-destination\").on(\"click\", function () {" +
"        var value = $(this).val();" +
"        if (value === \"An\") {" +
"            $(this).val(\"Aus\");" +
"            $(\"#prevent-duplicate-destination\").css(\"background\", \"#8d0100\");" +
"            localStorageService.setPreventDuplicateDestination = false;" +
"        }" +
"        else {" +
"            $(this).val(\"An\");" +
"            $(\"#prevent-duplicate-destination\").css(\"background\", \"#0e7a0e\");" +
"            localStorageService.setPreventDuplicateDestination = true;" +
"        }" +
"    });" +
"    $(\"#automate-massen-ut\").on(\"click\", function () {" +
"        var value = $(this).val();" +
"        if (value === \"An\") {" +
"            $(this).val(\"Aus\");" +
"            $(\"#automate-massen-ut\").css(\"background\", \"#8d0100\");" +
"            localStorageService.setAutomateMassenUt = false;" +
"        }" +
"        else {" +
"            $(this).val(\"An\");" +
"            $(\"#automate-massen-ut\").css(\"background\", \"#0e7a0e\");" +
"            localStorageService.setAutomateMassenUt = true;" +
"        }" +
"    });" +
"    $(\"#sd-group-id\").on(\"change\", function () {" +
"        if ($(this).val() !== \"0\") {" +
"            localStorageService.setSdGroupId = String($(this).val());" +
"            $(this).css(\"background\", \"#0e7a0e\");" +
"            return;" +
"        }" +
"        localStorageService.setSdGroupId = \"0\";" +
"        $(this).css(\"background\", \"#8d0100\");" +
"    });" +
"    $(\"#sd-template-id\").on(\"change\", function () {" +
"        if ($(this).val() !== \"0\") {" +
"            localStorageService.setSelectedTemplate = String($(this).val());" +
"            $(this).css(\"background\", \"#0e7a0e\");" +
"            return;" +
"        }" +
"        localStorageService.setSelectedTemplate = \"0\";" +
"        $(this).css(\"background\", \"#8d0100\");" +
"    });" +
"    $(\"#sd-sort-by\").on(\"change\", function () {" +
"        if ($(this).val() !== \"default\") {" +
"            localStorageService.setSortBy = String($(this).val());" +
"            $(this).css(\"background\", \"#0e7a0e\");" +
"            return;" +
"        }" +
"        localStorageService.setSortBy = \"default\";" +
"        $(this).css(\"background\", \"#8d0100\");" +
"    });" +
"    $(\"#sd-schwertLfz\").on(\"change\", function () {" +
"        var value = Number($(this).val());" +
"        if (!isNaN(value) && value >= 0) {" +
"            localStorageService.setSwordLfz = value;" +
"        }" +
"        else {" +
"            logging_helper_1.Log.error(\"Ung\\u00fcltiger Wert f\\u00fcr Schwert lfz:\");" +
"            $(this).val(localStorageService.getSwordLfz);" +
"        }" +
"    });" +
"}" +
"exports.displaySettings = displaySettings;" +
"" +
"" +
"//# sourceURL=webpack://standdeff-organizer/./src/ui/settings.ts?");

/***/ }),

/***/ "./src/ui/view-thread.ts":
/*!*******************************!*\
  !*** ./src/ui/view-thread.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("" +
"Object.defineProperty(exports, \"__esModule\", ({ value: true }));" +
"exports.viewThread = void 0;" +
"var helper_functions_1 = __webpack_require__(/*! ../helpers/helper-functions */ \"./src/helpers/helper-functions.ts\");" +
"var options_sd_thread_1 = __webpack_require__(/*! ./components/options-sd-thread */ \"./src/ui/components/options-sd-thread.ts\");" +
"var first_start_thread_popup_1 = __webpack_require__(/*! ./components/first-start-thread-popup */ \"./src/ui/components/first-start-thread-popup.ts\");" +
"var sd_table_1 = __webpack_require__(/*! ./components/sd-table */ \"./src/ui/components/sd-table.ts\");" +
"var local_storage_helper_1 = __webpack_require__(/*! ../helpers/local-storage-helper */ \"./src/helpers/local-storage-helper.ts\");" +
"var logging_helper_1 = __webpack_require__(/*! ../helpers/logging-helper */ \"./src/helpers/logging-helper.ts\");" +
"function viewThread() {" +
"    var localStorageService = local_storage_helper_1.LocalStorageHelper.getInstance();" +
"    logging_helper_1.Log.info(\"standdeff-organizer loaded in view_thread\");" +
"    var urlParams = new URLSearchParams(window.location.search);" +
"    var currentThreadId = urlParams.get('thread_id') || \"\";" +
"    //wenn zuvor ein neuer SD Thread erstellt wurde, ist der Boolean in newThread true" +
"    if (localStorageService.getNewThread) {" +
"        logging_helper_1.Log.info(\"new thread data found\");" +
"        localStorageService.setNewThread = false;" +
"        var edit_post_id = $(\".post > a\").attr(\"name\");" +
"        var thread_name = $(\".clearfix > table\").first().find(\"h2\").text();" +
"        var forum_name = $(\".forum-container\").find(\".selected\").text().trim();" +
"        // @ts-ignore" +
"        var forum_id = $(\".forum.selected\").find(\"a\").attr(\"href\").match(/forum_id=\\d+/)[0].split(\"=\")[1] || null;" +
"        if (edit_post_id !== undefined) {" +
"            (0, helper_functions_1.addThreadIdToLocalStorage)(currentThreadId, edit_post_id, thread_name, forum_name, forum_id);" +
"        }" +
"        else {" +
"            logging_helper_1.Log.error(\"edit_post_id is undefined\");" +
"        }" +
"    }" +
"    else {" +
"        logging_helper_1.Log.info(\"no new thread data found\");" +
"    }" +
"    // auslesen der ThreadIds aus dem localstorage um zu verifizieren, dass es sich um eine SD Tabelle handelt" +
"    var threads = localStorageService.getAllThreads;" +
"    if (threads[currentThreadId] !== undefined) {" +
"        logging_helper_1.Log.info(\"thread ids found\");" +
"        (0, sd_table_1.sdTable)(threads);" +
"    }" +
"    else {" +
"        if (Object.keys(threads).length === 0) {" +
"            (0, first_start_thread_popup_1.addSdPopup)(currentThreadId);" +
"        }" +
"        (0, options_sd_thread_1.addSdOptions)(currentThreadId);" +
"    }" +
"}" +
"exports.viewThread = viewThread;" +
"" +
"" +
"//# sourceURL=webpack://standdeff-organizer/./src/ui/view-thread.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;