(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/admin/FileUpload.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FileUpload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function FileUpload(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(48);
    if ($[0] !== "6b49934bba6d2b57f2adf77e44184f443452d077ca06d2c99998e3fd96278ccc") {
        for(let $i = 0; $i < 48; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6b49934bba6d2b57f2adf77e44184f443452d077ca06d2c99998e3fd96278ccc";
    }
    const { name, label, accept, multiple: t1, required: t2, onFilesSelected, accentColor: t3 } = t0;
    const multiple = t1 === undefined ? false : t1;
    const required = t2 === undefined ? false : t2;
    const accentColor = t3 === undefined ? "primary" : t3;
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t4;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = [];
        $[1] = t4;
    } else {
        t4 = $[1];
    }
    const [selectedFiles, setSelectedFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t4);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t5;
    let t6;
    if ($[2] !== selectedFiles) {
        t5 = ({
            "FileUpload[useEffect()]": ()=>{
                if (fileInputRef.current) {
                    const dataTransfer = new DataTransfer();
                    selectedFiles.forEach({
                        "FileUpload[useEffect() > selectedFiles.forEach()]": (file)=>dataTransfer.items.add(file)
                    }["FileUpload[useEffect() > selectedFiles.forEach()]"]);
                    fileInputRef.current.files = dataTransfer.files;
                }
            }
        })["FileUpload[useEffect()]"];
        t6 = [
            selectedFiles
        ];
        $[2] = selectedFiles;
        $[3] = t5;
        $[4] = t6;
    } else {
        t5 = $[3];
        t6 = $[4];
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect(t5, t6);
    let t7;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "FileUpload[handleDragOver]": (e)=>{
                e.preventDefault();
                setIsDragging(true);
            }
        })["FileUpload[handleDragOver]"];
        $[5] = t7;
    } else {
        t7 = $[5];
    }
    const handleDragOver = t7;
    let t8;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ({
            "FileUpload[handleDragLeave]": ()=>{
                setIsDragging(false);
            }
        })["FileUpload[handleDragLeave]"];
        $[6] = t8;
    } else {
        t8 = $[6];
    }
    const handleDragLeave = t8;
    let t9;
    if ($[7] !== multiple || $[8] !== onFilesSelected || $[9] !== selectedFiles) {
        t9 = ({
            "FileUpload[handleDrop]": (e_0)=>{
                e_0.preventDefault();
                setIsDragging(false);
                const files = Array.from(e_0.dataTransfer.files);
                if (files.length > 0) {
                    const newFiles = multiple ? [
                        ...selectedFiles,
                        ...files
                    ] : [
                        files[0]
                    ];
                    setSelectedFiles(newFiles);
                    if (fileInputRef.current) {
                        const dt = new DataTransfer();
                        newFiles.forEach({
                            "FileUpload[handleDrop > newFiles.forEach()]": (f)=>dt.items.add(f)
                        }["FileUpload[handleDrop > newFiles.forEach()]"]);
                        fileInputRef.current.files = dt.files;
                    }
                    onFilesSelected?.(newFiles);
                }
            }
        })["FileUpload[handleDrop]"];
        $[7] = multiple;
        $[8] = onFilesSelected;
        $[9] = selectedFiles;
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    const handleDrop = t9;
    let t10;
    if ($[11] !== multiple || $[12] !== onFilesSelected || $[13] !== selectedFiles) {
        t10 = ({
            "FileUpload[handleFileChange]": (e_1)=>{
                const files_0 = e_1.target.files ? Array.from(e_1.target.files) : [];
                if (files_0.length > 0) {
                    const newFiles_0 = multiple ? [
                        ...selectedFiles,
                        ...files_0
                    ] : [
                        files_0[0]
                    ];
                    setSelectedFiles(newFiles_0);
                    onFilesSelected?.(newFiles_0);
                }
            }
        })["FileUpload[handleFileChange]"];
        $[11] = multiple;
        $[12] = onFilesSelected;
        $[13] = selectedFiles;
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    const handleFileChange = t10;
    let t11;
    if ($[15] !== onFilesSelected || $[16] !== selectedFiles) {
        t11 = ({
            "FileUpload[removeFile]": (index)=>{
                const newFiles_1 = selectedFiles.filter({
                    "FileUpload[removeFile > selectedFiles.filter()]": (_, i)=>i !== index
                }["FileUpload[removeFile > selectedFiles.filter()]"]);
                setSelectedFiles(newFiles_1);
                onFilesSelected?.(newFiles_1);
            }
        })["FileUpload[removeFile]"];
        $[15] = onFilesSelected;
        $[16] = selectedFiles;
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    const removeFile = t11;
    const accentClass = accentColor === "accent" ? "text-accent" : "text-primary";
    const accentBgClass = accentColor === "accent" ? "bg-accent/5" : "bg-primary/5";
    const accentBorderClass = accentColor === "accent" ? "border-accent/20" : "border-primary/20";
    let t12;
    if ($[18] !== label) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-xs font-bold text-primary/40 uppercase tracking-widest ml-1",
            children: label
        }, void 0, false, {
            fileName: "[project]/src/components/admin/FileUpload.tsx",
            lineNumber: 164,
            columnNumber: 11
        }, this);
        $[18] = label;
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    let t13;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = ({
            "FileUpload[<div>.onClick]": ()=>fileInputRef.current?.click()
        })["FileUpload[<div>.onClick]"];
        $[20] = t13;
    } else {
        t13 = $[20];
    }
    const t14 = `
          relative border-2 border-dashed rounded-[2rem] p-8 text-center transition-all cursor-pointer group
          ${isDragging ? `${accentBorderClass} ${accentBgClass} scale-[0.99]` : "border-neutral-100 hover:border-neutral-200 bg-neutral-50"}
        `;
    const t15 = required && selectedFiles.length === 0;
    let t16;
    if ($[21] !== accept || $[22] !== handleFileChange || $[23] !== multiple || $[24] !== name || $[25] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "file",
            ref: fileInputRef,
            name: name,
            multiple: multiple,
            accept: accept,
            required: t15,
            onChange: handleFileChange,
            className: "hidden"
        }, void 0, false, {
            fileName: "[project]/src/components/admin/FileUpload.tsx",
            lineNumber: 186,
            columnNumber: 11
        }, this);
        $[21] = accept;
        $[22] = handleFileChange;
        $[23] = multiple;
        $[24] = name;
        $[25] = t15;
        $[26] = t16;
    } else {
        t16 = $[26];
    }
    const t17 = `w-16 h-16 ${accentBgClass} ${accentClass} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`;
    let t18;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "32",
            height: "32",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/FileUpload.tsx",
                    lineNumber: 199,
                    columnNumber: 154
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "17 8 12 3 7 8"
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/FileUpload.tsx",
                    lineNumber: 199,
                    columnNumber: 208
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "3",
                    x2: "12",
                    y2: "15"
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/FileUpload.tsx",
                    lineNumber: 199,
                    columnNumber: 243
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/admin/FileUpload.tsx",
            lineNumber: 199,
            columnNumber: 11
        }, this);
        $[27] = t18;
    } else {
        t18 = $[27];
    }
    let t19;
    if ($[28] !== t17) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t17,
            children: t18
        }, void 0, false, {
            fileName: "[project]/src/components/admin/FileUpload.tsx",
            lineNumber: 206,
            columnNumber: 11
        }, this);
        $[28] = t17;
        $[29] = t19;
    } else {
        t19 = $[29];
    }
    let t20;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-bold text-primary italic",
            children: "Arrastra archivos aquí o haz clic para subir"
        }, void 0, false, {
            fileName: "[project]/src/components/admin/FileUpload.tsx",
            lineNumber: 214,
            columnNumber: 11
        }, this);
        $[30] = t20;
    } else {
        t20 = $[30];
    }
    const t21 = multiple ? "Puedes subir m\xFAltiples archivos." : "Selecciona un solo archivo.";
    let t22;
    if ($[31] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-1",
            children: [
                t20,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-primary/40 font-sans tracking-tight",
                    children: t21
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/FileUpload.tsx",
                    lineNumber: 222,
                    columnNumber: 43
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/admin/FileUpload.tsx",
            lineNumber: 222,
            columnNumber: 11
        }, this);
        $[31] = t21;
        $[32] = t22;
    } else {
        t22 = $[32];
    }
    let t23;
    if ($[33] !== handleDrop || $[34] !== t14 || $[35] !== t16 || $[36] !== t19 || $[37] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onDragOver: handleDragOver,
            onDragLeave: handleDragLeave,
            onDrop: handleDrop,
            onClick: t13,
            className: t14,
            children: [
                t16,
                t19,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/admin/FileUpload.tsx",
            lineNumber: 230,
            columnNumber: 11
        }, this);
        $[33] = handleDrop;
        $[34] = t14;
        $[35] = t16;
        $[36] = t19;
        $[37] = t22;
        $[38] = t23;
    } else {
        t23 = $[38];
    }
    let t24;
    if ($[39] !== accentBgClass || $[40] !== accentClass || $[41] !== removeFile || $[42] !== selectedFiles) {
        t24 = selectedFiles.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 grid grid-cols-1 gap-2",
            children: selectedFiles.map({
                "FileUpload[selectedFiles.map()]": (file_0, index_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between bg-white border border-neutral-100 p-3 rounded-2xl animate-in slide-in-from-top-2 duration-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-10 h-10 ${accentBgClass} ${accentClass} rounded-xl flex items-center justify-center`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/FileUpload.tsx",
                                                    lineNumber: 243,
                                                    columnNumber: 514
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                    points: "13 2 13 9 20 9"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/FileUpload.tsx",
                                                    lineNumber: 243,
                                                    columnNumber: 585
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/FileUpload.tsx",
                                            lineNumber: 243,
                                            columnNumber: 371
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/FileUpload.tsx",
                                        lineNumber: 243,
                                        columnNumber: 266
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "max-w-[200px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-bold text-primary truncate italic",
                                                children: file_0.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/FileUpload.tsx",
                                                lineNumber: 243,
                                                columnNumber: 664
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] text-primary/40 font-mono uppercase tracking-widest",
                                                children: [
                                                    (file_0.size / 1024).toFixed(1),
                                                    " KB"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/FileUpload.tsx",
                                                lineNumber: 243,
                                                columnNumber: 743
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/FileUpload.tsx",
                                        lineNumber: 243,
                                        columnNumber: 633
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/FileUpload.tsx",
                                lineNumber: 243,
                                columnNumber: 225
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: {
                                    "FileUpload[selectedFiles.map() > <button>.onClick]": (e_2)=>{
                                        e_2.stopPropagation();
                                        removeFile(index_0);
                                    }
                                }["FileUpload[selectedFiles.map() > <button>.onClick]"],
                                className: "p-2 text-primary/20 hover:text-red-500 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "18",
                                    height: "18",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "18",
                                            y1: "6",
                                            x2: "6",
                                            y2: "18"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/FileUpload.tsx",
                                            lineNumber: 248,
                                            columnNumber: 282
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "6",
                                            y1: "6",
                                            x2: "18",
                                            y2: "18"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/FileUpload.tsx",
                                            lineNumber: 248,
                                            columnNumber: 320
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/FileUpload.tsx",
                                    lineNumber: 248,
                                    columnNumber: 137
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/FileUpload.tsx",
                                lineNumber: 243,
                                columnNumber: 874
                            }, this)
                        ]
                    }, index_0, true, {
                        fileName: "[project]/src/components/admin/FileUpload.tsx",
                        lineNumber: 243,
                        columnNumber: 65
                    }, this)
            }["FileUpload[selectedFiles.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/components/admin/FileUpload.tsx",
            lineNumber: 242,
            columnNumber: 39
        }, this);
        $[39] = accentBgClass;
        $[40] = accentClass;
        $[41] = removeFile;
        $[42] = selectedFiles;
        $[43] = t24;
    } else {
        t24 = $[43];
    }
    let t25;
    if ($[44] !== t12 || $[45] !== t23 || $[46] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                t12,
                t23,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/admin/FileUpload.tsx",
            lineNumber: 260,
            columnNumber: 11
        }, this);
        $[44] = t12;
        $[45] = t23;
        $[46] = t24;
        $[47] = t25;
    } else {
        t25 = $[47];
    }
    return t25;
}
_s(FileUpload, "6Q/yGW2vP1L0l27+gKvwWDcqJjI=");
_c = FileUpload;
var _c;
__turbopack_context__.k.register(_c, "FileUpload");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/commerce/admin/nuevo/data:239590 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteResourceFile",
    ()=>$$RSC_SERVER_ACTION_2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"400517cb0baba475fcf0d3a74d656aa6406b10c25e":"deleteResourceFile"},"src/app/commerce/admin/nuevo/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("400517cb0baba475fcf0d3a74d656aa6406b10c25e", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteResourceFile");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcblxuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnQC9saWIvc3VwYWJhc2Uvc2VydmVyJ1xuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJ1xuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tICduZXh0L25hdmlnYXRpb24nXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQcm9kdWN0KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXG5cbiAgY29uc3Qgbm9tYnJlID0gZm9ybURhdGEuZ2V0KCdub21icmUnKSBhcyBzdHJpbmdcbiAgY29uc3QgZGVzY3JpcGNpb24gPSBmb3JtRGF0YS5nZXQoJ2Rlc2NyaXBjaW9uJykgYXMgc3RyaW5nXG4gIGNvbnN0IHByZWNpbyA9IHBhcnNlRmxvYXQoZm9ybURhdGEuZ2V0KCdwcmVjaW8nKSBhcyBzdHJpbmcpXG4gIGNvbnN0IGltYWdlRmlsZSA9IGZvcm1EYXRhLmdldCgnaW1hZ2VuJykgYXMgRmlsZVxuICBjb25zdCByZXNvdXJjZUZpbGVzID0gZm9ybURhdGEuZ2V0QWxsKCdhcmNoaXZvJykgYXMgRmlsZVtdXG5cbiAgY29uc29sZS5sb2coJ0RFQlVHOiBDcmVhbmRvIHByb2R1Y3RvJywgeyBcbiAgICBub21icmUsIFxuICAgIGltYWdlU2l6ZTogaW1hZ2VGaWxlPy5zaXplLCBcbiAgICBpbWFnZU5hbWU6IGltYWdlRmlsZT8ubmFtZSxcbiAgICByZXNvdXJjZXNDb3VudDogcmVzb3VyY2VGaWxlcy5sZW5ndGggXG4gIH0pXG5cbiAgbGV0IGltYWdlbl91cmwgPSAnJ1xuXG4gIC8vIDEuIFN1YmlyIEltYWdlbiBkZSBQb3J0YWRhXG4gIGlmIChpbWFnZUZpbGUgJiYgaW1hZ2VGaWxlLnNpemUgPiAwICYmIGltYWdlRmlsZS5uYW1lICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnN0IGZpbGVFeHQgPSBpbWFnZUZpbGUubmFtZS5zcGxpdCgnLicpLnBvcCgpXG4gICAgY29uc3QgZmlsZU5hbWUgPSBgJHtNYXRoLnJhbmRvbSgpfS4ke2ZpbGVFeHR9YFxuICAgIGNvbnN0IHsgZXJyb3I6IHVwbG9hZEVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5zdG9yYWdlXG4gICAgICAuZnJvbSgncHJvZHVjdG9zLWRpZ2l0YWxlcy1wb3J0YWRhcycpXG4gICAgICAudXBsb2FkKGZpbGVOYW1lLCBpbWFnZUZpbGUpXG5cbiAgICBpZiAoIXVwbG9hZEVycm9yKSB7XG4gICAgICBjb25zdCB7IGRhdGE6IHsgcHVibGljVXJsIH0gfSA9IHN1cGFiYXNlLnN0b3JhZ2VcbiAgICAgICAgLmZyb20oJ3Byb2R1Y3Rvcy1kaWdpdGFsZXMtcG9ydGFkYXMnKVxuICAgICAgICAuZ2V0UHVibGljVXJsKGZpbGVOYW1lKVxuICAgICAgaW1hZ2VuX3VybCA9IHB1YmxpY1VybFxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFUlJPUiBVUExPQURJTkcgSU1BR0U6JywgdXBsb2FkRXJyb3IpXG4gICAgfVxuICB9XG5cbiAgLy8gMi4gSW5zZXJ0YXIgUHJvZHVjdG8gUHJpbmNpcGFsXG4gIGNvbnN0IHsgZGF0YTogcHJvZHVjdERhdGEsIGVycm9yOiBwcm9kdWN0RXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb20oJ3Byb2R1Y3RvcycpXG4gICAgLmluc2VydCh7XG4gICAgICBub21icmUsXG4gICAgICBkZXNjcmlwY2lvbixcbiAgICAgIHByZWNpbyxcbiAgICAgIGltYWdlbl91cmwsXG4gICAgICBhcmNoaXZvX3VybDogJycgLy8gU2F0aXNmYWNlciBjb25zdHJhaW50IE5PVCBOVUxMIG1pZW50cmFzIG1pZ3JhbW9zXG4gICAgfSlcbiAgICAuc2VsZWN0KClcbiAgICAuc2luZ2xlKClcblxuICBpZiAocHJvZHVjdEVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW5zZXJ0YW5kbyBwcm9kdWN0bzonLCBwcm9kdWN0RXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6ICdFcnJvciBhbCBjcmVhciBlbCBwcm9kdWN0bycgfVxuICB9XG5cbiAgY29uc3QgcHJvZHVjdElkID0gcHJvZHVjdERhdGEuaWRcblxuICAvLyAzLiBTdWJpciBlIEluc2VydGFyIEFyY2hpdm9zIGRlIFJlY3Vyc29cbiAgZm9yIChjb25zdCBmaWxlIG9mIHJlc291cmNlRmlsZXMpIHtcbiAgICBpZiAoZmlsZSAmJiBmaWxlLnNpemUgPiAwICYmIGZpbGUubmFtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnN0IGZpbGVFeHQgPSBmaWxlLm5hbWUuc3BsaXQoJy4nKS5wb3AoKVxuICAgICAgY29uc3QgZmlsZU5hbWUgPSBgJHtNYXRoLnJhbmRvbSgpfS4ke2ZpbGVFeHR9YFxuICAgICAgY29uc3Qgb3JpZ2luYWxOYW1lID0gZmlsZS5uYW1lXG5cbiAgICAgIGNvbnN0IHsgZXJyb3I6IHVwbG9hZEVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5zdG9yYWdlXG4gICAgICAgIC5mcm9tKCdwcm9kdWN0b3MtZGlnaXRhbGVzLWFyY2hpdm9zJylcbiAgICAgICAgLnVwbG9hZChmaWxlTmFtZSwgZmlsZSlcblxuICAgICAgaWYgKCF1cGxvYWRFcnJvcikge1xuICAgICAgICBjb25zdCB7IGRhdGE6IHsgcHVibGljVXJsIH0gfSA9IHN1cGFiYXNlLnN0b3JhZ2VcbiAgICAgICAgICAuZnJvbSgncHJvZHVjdG9zLWRpZ2l0YWxlcy1hcmNoaXZvcycpXG4gICAgICAgICAgLmdldFB1YmxpY1VybChmaWxlTmFtZSlcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHsgZXJyb3I6IHJlbEVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAgIC5mcm9tKCdwcm9kdWN0b19hcmNoaXZvcycpXG4gICAgICAgICAgLmluc2VydCh7XG4gICAgICAgICAgICBwcm9kdWN0b19pZDogcHJvZHVjdElkLFxuICAgICAgICAgICAgbm9tYnJlX2FyY2hpdm86IG9yaWdpbmFsTmFtZSxcbiAgICAgICAgICAgIGFyY2hpdm9fdXJsOiBwdWJsaWNVcmxcbiAgICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgaWYgKHJlbEVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRVJST1IgSU5TRVJUSU5HIElOVE8gcHJvZHVjdG9fYXJjaGl2b3M6JywgcmVsRXJyb3IpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VSUk9SIFVQTE9BRElORyBSRVNPVVJDRTonLCB1cGxvYWRFcnJvcilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXZhbGlkYXRlUGF0aCgnL2NvbW1lcmNlL2FkbWluJylcbiAgcmV2YWxpZGF0ZVBhdGgoJy9jb21tZXJjZS9zaG9wJylcbiAgcmVkaXJlY3QoJy9jb21tZXJjZS9hZG1pbicpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQcm9kdWN0KHByb2R1Y3RJZDogc3RyaW5nKSB7XG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcblxuICAvLyBTw5NMTyBERVNBQ1RJVkFNT1MgcGFyYSBubyByb21wZXIgaGlzdG9yaWFsIGRlIHBlZGlkb3MgKFNvZnQgRGVsZXRlKVxuICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKCdwcm9kdWN0b3MnKVxuICAgIC51cGRhdGUoeyBhY3Rpdm86IGZhbHNlIH0pIC8vIEVuIGx1Z2FyIGRlIC5kZWxldGUoKVxuICAgIC5lcSgnaWQnLCBwcm9kdWN0SWQpXG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZGVzYWN0aXZhbmRvIHByb2R1Y3RvOicsIGVycm9yKVxuICAgIHJldHVybiB7IGVycm9yOiAnTm8gc2UgcHVkbyBlbGltaW5hciBlbCBwcm9kdWN0bycgfVxuICB9XG5cbiAgcmV2YWxpZGF0ZVBhdGgoJy9jb21tZXJjZS9hZG1pbicpXG4gIHJldmFsaWRhdGVQYXRoKCcvY29tbWVyY2Uvc2hvcCcpXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUmVzb3VyY2VGaWxlKGZpbGVJZDogc3RyaW5nKSB7XG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcblxuICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKCdwcm9kdWN0b19hcmNoaXZvcycpXG4gICAgLmRlbGV0ZSgpXG4gICAgLmVxKCdpZCcsIGZpbGVJZClcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBlbGltaW5hbmRvIGFyY2hpdm86JywgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6ICdObyBzZSBwdWRvIGVsaW1pbmFyIGVsIGFyY2hpdm8nIH1cbiAgfVxuXG4gIHJldmFsaWRhdGVQYXRoKCcvY29tbWVyY2UvYWRtaW4nKVxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2R1Y3QoZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcblxuICBjb25zdCBpZCA9IGZvcm1EYXRhLmdldCgnaWQnKSBhcyBzdHJpbmdcbiAgY29uc3Qgbm9tYnJlID0gZm9ybURhdGEuZ2V0KCdub21icmUnKSBhcyBzdHJpbmdcbiAgY29uc3QgZGVzY3JpcGNpb24gPSBmb3JtRGF0YS5nZXQoJ2Rlc2NyaXBjaW9uJykgYXMgc3RyaW5nXG4gIGNvbnN0IHByZWNpbyA9IHBhcnNlRmxvYXQoZm9ybURhdGEuZ2V0KCdwcmVjaW8nKSBhcyBzdHJpbmcpXG4gIGNvbnN0IGltYWdlRmlsZSA9IGZvcm1EYXRhLmdldCgnaW1hZ2VuJykgYXMgRmlsZVxuICBjb25zdCByZXNvdXJjZUZpbGVzID0gZm9ybURhdGEuZ2V0QWxsKCdhcmNoaXZvJykgYXMgRmlsZVtdXG5cbiAgLy8gMS4gQWN0dWFsaXphciBkYXRvcyBiw6FzaWNvc1xuICBjb25zdCB1cGRhdGVEYXRhOiBhbnkgPSB7XG4gICAgbm9tYnJlLFxuICAgIGRlc2NyaXBjaW9uLFxuICAgIHByZWNpbyxcbiAgfVxuXG4gIC8vIDIuIFN1YmlyIG51ZXZhIGltYWdlbiBzaSBleGlzdGVcbiAgaWYgKGltYWdlRmlsZSAmJiBpbWFnZUZpbGUuc2l6ZSA+IDAgJiYgaW1hZ2VGaWxlLm5hbWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc3QgZmlsZUV4dCA9IGltYWdlRmlsZS5uYW1lLnNwbGl0KCcuJykucG9wKClcbiAgICBjb25zdCBmaWxlTmFtZSA9IGAke01hdGgucmFuZG9tKCl9LiR7ZmlsZUV4dH1gXG4gICAgY29uc3QgeyBlcnJvcjogdXBsb2FkRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLnN0b3JhZ2VcbiAgICAgIC5mcm9tKCdwcm9kdWN0b3MtZGlnaXRhbGVzLXBvcnRhZGFzJylcbiAgICAgIC51cGxvYWQoZmlsZU5hbWUsIGltYWdlRmlsZSlcblxuICAgIGlmICghdXBsb2FkRXJyb3IpIHtcbiAgICAgIGNvbnN0IHsgZGF0YTogeyBwdWJsaWNVcmwgfSB9ID0gc3VwYWJhc2Uuc3RvcmFnZVxuICAgICAgICAuZnJvbSgncHJvZHVjdG9zLWRpZ2l0YWxlcy1wb3J0YWRhcycpXG4gICAgICAgIC5nZXRQdWJsaWNVcmwoZmlsZU5hbWUpXG4gICAgICB1cGRhdGVEYXRhLmltYWdlbl91cmwgPSBwdWJsaWNVcmxcbiAgICB9XG4gIH1cblxuICBjb25zdCB7IGVycm9yOiBwcm9kdWN0RXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb20oJ3Byb2R1Y3RvcycpXG4gICAgLnVwZGF0ZSh1cGRhdGVEYXRhKVxuICAgIC5lcSgnaWQnLCBpZClcblxuICBpZiAocHJvZHVjdEVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgYWN0dWFsaXphbmRvIHByb2R1Y3RvOicsIHByb2R1Y3RFcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogJ0Vycm9yIGFsIGFjdHVhbGl6YXIgZWwgcHJvZHVjdG8nIH1cbiAgfVxuXG4gIC8vIDMuIFN1YmlyIG51ZXZvcyBhcmNoaXZvcyBhZGljaW9uYWxlc1xuICBmb3IgKGNvbnN0IGZpbGUgb2YgcmVzb3VyY2VGaWxlcykge1xuICAgIGlmIChmaWxlICYmIGZpbGUuc2l6ZSA+IDAgJiYgZmlsZS5uYW1lICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc3QgZmlsZUV4dCA9IGZpbGUubmFtZS5zcGxpdCgnLicpLnBvcCgpXG4gICAgICBjb25zdCBmaWxlTmFtZSA9IGAke01hdGgucmFuZG9tKCl9LiR7ZmlsZUV4dH1gXG4gICAgICBjb25zdCBvcmlnaW5hbE5hbWUgPSBmaWxlLm5hbWVcblxuICAgICAgY29uc3QgeyBlcnJvcjogdXBsb2FkRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLnN0b3JhZ2VcbiAgICAgICAgLmZyb20oJ3Byb2R1Y3Rvcy1kaWdpdGFsZXMtYXJjaGl2b3MnKVxuICAgICAgICAudXBsb2FkKGZpbGVOYW1lLCBmaWxlKVxuXG4gICAgICBpZiAoIXVwbG9hZEVycm9yKSB7XG4gICAgICAgIGNvbnN0IHsgZGF0YTogeyBwdWJsaWNVcmwgfSB9ID0gc3VwYWJhc2Uuc3RvcmFnZVxuICAgICAgICAgIC5mcm9tKCdwcm9kdWN0b3MtZGlnaXRhbGVzLWFyY2hpdm9zJylcbiAgICAgICAgICAuZ2V0UHVibGljVXJsKGZpbGVOYW1lKVxuICAgICAgICBcbiAgICAgICAgYXdhaXQgc3VwYWJhc2VcbiAgICAgICAgICAuZnJvbSgncHJvZHVjdG9fYXJjaGl2b3MnKVxuICAgICAgICAgIC5pbnNlcnQoe1xuICAgICAgICAgICAgcHJvZHVjdG9faWQ6IGlkLFxuICAgICAgICAgICAgbm9tYnJlX2FyY2hpdm86IG9yaWdpbmFsTmFtZSxcbiAgICAgICAgICAgIGFyY2hpdm9fdXJsOiBwdWJsaWNVcmxcbiAgICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldmFsaWRhdGVQYXRoKCcvY29tbWVyY2UvYWRtaW4nKVxuICByZXZhbGlkYXRlUGF0aCgnL2NvbW1lcmNlL3Nob3AnKVxuICByZXZhbGlkYXRlUGF0aChgL2NvbW1lcmNlL2FkbWluL2VkaXRhci8ke2lkfWApXG4gIHJlZGlyZWN0KCcvY29tbWVyY2UvYWRtaW4nKVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI4U0F1SHNCLCtMQUFBIn0=
}),
"[project]/src/components/admin/DeleteResourceButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DeleteResourceButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$commerce$2f$admin$2f$nuevo$2f$data$3a$239590__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/commerce/admin/nuevo/data:239590 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function DeleteResourceButton(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "7c761d63ca00b1ebba80df458cef81447c59a1587cb03b1928b122784e7a10cf") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7c761d63ca00b1ebba80df458cef81447c59a1587cb03b1928b122784e7a10cf";
    }
    const { fileId, fileName } = t0;
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    let t1;
    if ($[1] !== fileId || $[2] !== fileName) {
        t1 = ({
            "DeleteResourceButton[handleDelete]": (e)=>{
                e.preventDefault();
                e.stopPropagation();
                if (confirm(`¿Estás seguro de que deseas eliminar el archivo "${fileName}"?`)) {
                    startTransition({
                        "DeleteResourceButton[handleDelete > startTransition()]": async ()=>{
                            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$commerce$2f$admin$2f$nuevo$2f$data$3a$239590__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteResourceFile"])(fileId);
                            if (result?.error) {
                                alert(result.error);
                            }
                        }
                    }["DeleteResourceButton[handleDelete > startTransition()]"]);
                }
            }
        })["DeleteResourceButton[handleDelete]"];
        $[1] = fileId;
        $[2] = fileName;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const handleDelete = t1;
    const t2 = `p-2 transition-colors rounded-lg ${isPending ? "bg-neutral-50 text-neutral-300" : "bg-red-50 text-red-500 hover:bg-red-100"}`;
    let t3;
    if ($[4] !== isPending) {
        t3 = isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "animate-spin",
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21 12a9 9 0 1 1-6.219-8.56"
            }, void 0, false, {
                fileName: "[project]/src/components/admin/DeleteResourceButton.tsx",
                lineNumber: 51,
                columnNumber: 190
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/admin/DeleteResourceButton.tsx",
            lineNumber: 51,
            columnNumber: 22
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "18",
                    y1: "6",
                    x2: "6",
                    y2: "18"
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/DeleteResourceButton.tsx",
                    lineNumber: 51,
                    columnNumber: 384
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "6",
                    y1: "6",
                    x2: "18",
                    y2: "18"
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/DeleteResourceButton.tsx",
                    lineNumber: 51,
                    columnNumber: 422
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/admin/DeleteResourceButton.tsx",
            lineNumber: 51,
            columnNumber: 239
        }, this);
        $[4] = isPending;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== handleDelete || $[7] !== isPending || $[8] !== t2 || $[9] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleDelete,
            disabled: isPending,
            className: t2,
            title: "Eliminar archivo",
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/components/admin/DeleteResourceButton.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[6] = handleDelete;
        $[7] = isPending;
        $[8] = t2;
        $[9] = t3;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    return t4;
}
_s(DeleteResourceButton, "F6rOvlKxJWx0auMIl1x3Vgc91fQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"]
    ];
});
_c = DeleteResourceButton;
var _c;
__turbopack_context__.k.register(_c, "DeleteResourceButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_54fa608a._.js.map