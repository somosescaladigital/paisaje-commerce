module.exports = [
"[project]/src/components/admin/FileUpload.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FileUpload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function FileUpload({ name, label, accept, multiple = false, required = false, onFilesSelected, accentColor = 'primary' }) {
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedFiles, setSelectedFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Sync state with hidden input for FormData
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (fileInputRef.current) {
            const dataTransfer = new DataTransfer();
            selectedFiles.forEach((file)=>dataTransfer.items.add(file));
            fileInputRef.current.files = dataTransfer.files;
        }
    }, [
        selectedFiles
    ]);
    const handleDragOver = (e)=>{
        e.preventDefault();
        setIsDragging(true);
    };
    const handleDragLeave = ()=>{
        setIsDragging(false);
    };
    const handleDrop = (e)=>{
        e.preventDefault();
        setIsDragging(false);
        const files = Array.from(e.dataTransfer.files);
        if (files.length > 0) {
            const newFiles = multiple ? [
                ...selectedFiles,
                ...files
            ] : [
                files[0]
            ];
            setSelectedFiles(newFiles);
            // Sincronización síncrona inmediata para asegurar que el input tenga los archivos antes del submit
            if (fileInputRef.current) {
                const dt = new DataTransfer();
                newFiles.forEach((f)=>dt.items.add(f));
                fileInputRef.current.files = dt.files;
            }
            onFilesSelected?.(newFiles);
        }
    };
    const handleFileChange = (e)=>{
        const files = e.target.files ? Array.from(e.target.files) : [];
        if (files.length > 0) {
            const newFiles = multiple ? [
                ...selectedFiles,
                ...files
            ] : [
                files[0]
            ];
            setSelectedFiles(newFiles);
            onFilesSelected?.(newFiles);
        }
    };
    const removeFile = (index)=>{
        const newFiles = selectedFiles.filter((_, i)=>i !== index);
        setSelectedFiles(newFiles);
        onFilesSelected?.(newFiles);
    };
    const accentClass = accentColor === 'accent' ? 'text-accent' : 'text-primary';
    const accentBgClass = accentColor === 'accent' ? 'bg-accent/5' : 'bg-primary/5';
    const accentBorderClass = accentColor === 'accent' ? 'border-accent/20' : 'border-primary/20';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "text-xs font-bold text-primary/40 uppercase tracking-widest ml-1",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/admin/FileUpload.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onDragOver: handleDragOver,
                onDragLeave: handleDragLeave,
                onDrop: handleDrop,
                onClick: ()=>fileInputRef.current?.click(),
                className: `
          relative border-2 border-dashed rounded-[2rem] p-8 text-center transition-all cursor-pointer group
          ${isDragging ? `${accentBorderClass} ${accentBgClass} scale-[0.99]` : 'border-neutral-100 hover:border-neutral-200 bg-neutral-50'}
        `,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "file",
                        ref: fileInputRef,
                        name: name,
                        multiple: multiple,
                        accept: accept,
                        required: required && selectedFiles.length === 0,
                        onChange: handleFileChange,
                        className: "hidden"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/FileUpload.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-16 h-16 ${accentBgClass} ${accentClass} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "32",
                            height: "32",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/FileUpload.tsx",
                                    lineNumber: 110,
                                    columnNumber: 155
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                    points: "17 8 12 3 7 8"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/FileUpload.tsx",
                                    lineNumber: 110,
                                    columnNumber: 214
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "12",
                                    y1: "3",
                                    x2: "12",
                                    y2: "15"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/FileUpload.tsx",
                                    lineNumber: 110,
                                    columnNumber: 258
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/FileUpload.tsx",
                            lineNumber: 110,
                            columnNumber: 12
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/FileUpload.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-bold text-primary italic",
                                children: "Arrastra archivos aquí o haz clic para subir"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/FileUpload.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-primary/40 font-sans tracking-tight",
                                children: multiple ? 'Puedes subir múltiples archivos.' : 'Selecciona un solo archivo.'
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/FileUpload.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/FileUpload.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/FileUpload.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            selectedFiles.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 grid grid-cols-1 gap-2",
                children: selectedFiles.map((file, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between bg-white border border-neutral-100 p-3 rounded-2xl animate-in slide-in-from-top-2 duration-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-10 h-10 ${accentBgClass} ${accentClass} rounded-xl flex items-center justify-center`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/FileUpload.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 162
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                    points: "13 2 13 9 20 9"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/FileUpload.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 238
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/FileUpload.tsx",
                                            lineNumber: 127,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/FileUpload.tsx",
                                        lineNumber: 126,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "max-w-[200px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-bold text-primary truncate italic",
                                                children: file.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/FileUpload.tsx",
                                                lineNumber: 130,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] text-primary/40 font-mono uppercase tracking-widest",
                                                children: [
                                                    (file.size / 1024).toFixed(1),
                                                    " KB"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/FileUpload.tsx",
                                                lineNumber: 131,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/FileUpload.tsx",
                                        lineNumber: 129,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/FileUpload.tsx",
                                lineNumber: 125,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    removeFile(index);
                                },
                                className: "p-2 text-primary/20 hover:text-red-500 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "18",
                                    height: "18",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "18",
                                            y1: "6",
                                            x2: "6",
                                            y2: "18"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/FileUpload.tsx",
                                            lineNumber: 139,
                                            columnNumber: 162
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "6",
                                            y1: "6",
                                            x2: "18",
                                            y2: "18"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/FileUpload.tsx",
                                            lineNumber: 139,
                                            columnNumber: 205
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/FileUpload.tsx",
                                    lineNumber: 139,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/FileUpload.tsx",
                                lineNumber: 134,
                                columnNumber: 15
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/components/admin/FileUpload.tsx",
                        lineNumber: 124,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/admin/FileUpload.tsx",
                lineNumber: 122,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/FileUpload.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/commerce/admin/nuevo/data:a111ea [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteResourceFile",
    ()=>$$RSC_SERVER_ACTION_2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40a1dbb287365d278a9a0f8dbfe1683913c0d3fb40":"deleteResourceFile"},"src/app/commerce/admin/nuevo/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40a1dbb287365d278a9a0f8dbfe1683913c0d3fb40", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteResourceFile");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcclxuXHJcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0AvbGliL3N1cGFiYXNlL3NlcnZlcidcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJ1xyXG5pbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQcm9kdWN0KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcclxuXHJcbiAgY29uc3Qgbm9tYnJlID0gZm9ybURhdGEuZ2V0KCdub21icmUnKSBhcyBzdHJpbmdcclxuICBjb25zdCBkZXNjcmlwY2lvbiA9IGZvcm1EYXRhLmdldCgnZGVzY3JpcGNpb24nKSBhcyBzdHJpbmdcclxuICBjb25zdCBwcmVjaW8gPSBwYXJzZUZsb2F0KGZvcm1EYXRhLmdldCgncHJlY2lvJykgYXMgc3RyaW5nKVxyXG4gIGNvbnN0IHR5cGUgPSAoZm9ybURhdGEuZ2V0KCd0eXBlJykgYXMgc3RyaW5nKSB8fCAnZGlnaXRhbCdcclxuICBjb25zdCBlc19tZW1icmVzaWEgPSBmb3JtRGF0YS5nZXQoJ2VzX21lbWJyZXNpYScpID09PSAndHJ1ZSdcclxuICBjb25zdCBkdXJhY2lvbl9tZXNlcyA9IHBhcnNlSW50KGZvcm1EYXRhLmdldCgnZHVyYWNpb25fbWVzZXMnKSBhcyBzdHJpbmcgfHwgJzEnKVxyXG4gIGNvbnN0IGltYWdlRmlsZSA9IGZvcm1EYXRhLmdldCgnaW1hZ2VuJykgYXMgRmlsZVxyXG4gIGNvbnN0IHJlc291cmNlRmlsZXMgPSBmb3JtRGF0YS5nZXRBbGwoJ2FyY2hpdm8nKSBhcyBGaWxlW11cclxuXHJcbiAgLy8gVmFsaWRhY2lvbmVzIGLDoXNpY2FzXHJcbiAgaWYgKCFub21icmUgfHwgIWRlc2NyaXBjaW9uKSB7XHJcbiAgICByZWRpcmVjdChgL2NvbW1lcmNlL2FkbWluL251ZXZvLyR7dHlwZX0/ZXJyb3I9dmFsaWRhdGlvbmApXHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmxvZygnREVCVUc6IENyZWFuZG8gcHJvZHVjdG8nLCB7IFxyXG4gICAgbm9tYnJlLCBcclxuICAgIHR5cGUsXHJcbiAgICBpbWFnZVNpemU6IGltYWdlRmlsZT8uc2l6ZSwgXHJcbiAgICBpbWFnZU5hbWU6IGltYWdlRmlsZT8ubmFtZSxcclxuICAgIHJlc291cmNlc0NvdW50OiByZXNvdXJjZUZpbGVzLmxlbmd0aCBcclxuICB9KVxyXG5cclxuICBsZXQgaW1hZ2VuX3VybCA9ICcnXHJcblxyXG4gIC8vIDEuIFN1YmlyIEltYWdlbiBkZSBQb3J0YWRhXHJcbiAgaWYgKGltYWdlRmlsZSAmJiBpbWFnZUZpbGUuc2l6ZSA+IDAgJiYgaW1hZ2VGaWxlLm5hbWUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBjb25zdCBmaWxlRXh0ID0gaW1hZ2VGaWxlLm5hbWUuc3BsaXQoJy4nKS5wb3AoKVxyXG4gICAgY29uc3QgZmlsZU5hbWUgPSBgJHtNYXRoLnJhbmRvbSgpfS4ke2ZpbGVFeHR9YFxyXG4gICAgY29uc3QgeyBlcnJvcjogdXBsb2FkRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLnN0b3JhZ2VcclxuICAgICAgLmZyb20oJ3Byb2R1Y3Rvcy1kaWdpdGFsZXMtcG9ydGFkYXMnKVxyXG4gICAgICAudXBsb2FkKGZpbGVOYW1lLCBpbWFnZUZpbGUpXHJcblxyXG4gICAgaWYgKCF1cGxvYWRFcnJvcikge1xyXG4gICAgICBjb25zdCB7IGRhdGE6IHsgcHVibGljVXJsIH0gfSA9IHN1cGFiYXNlLnN0b3JhZ2VcclxuICAgICAgICAuZnJvbSgncHJvZHVjdG9zLWRpZ2l0YWxlcy1wb3J0YWRhcycpXHJcbiAgICAgICAgLmdldFB1YmxpY1VybChmaWxlTmFtZSlcclxuICAgICAgaW1hZ2VuX3VybCA9IHB1YmxpY1VybFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRVJST1IgVVBMT0FESU5HIElNQUdFOicsIHVwbG9hZEVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gMi4gSW5zZXJ0YXIgUHJvZHVjdG8gUHJpbmNpcGFsXHJcbiAgY29uc3QgeyBkYXRhOiBwcm9kdWN0RGF0YSwgZXJyb3I6IHByb2R1Y3RFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKCdwcm9kdWN0b3MnKVxyXG4gICAgLmluc2VydCh7XHJcbiAgICAgIG5vbWJyZSxcclxuICAgICAgZGVzY3JpcGNpb24sXHJcbiAgICAgIHByZWNpbyxcclxuICAgICAgaW1hZ2VuX3VybCxcclxuICAgICAgZXNfbWVtYnJlc2lhLFxyXG4gICAgICBkdXJhY2lvbl9tZXNlcyxcclxuICAgICAgdHlwZTogdHlwZSB8fCAnZGlnaXRhbCcsXHJcbiAgICAgIGFyY2hpdm9fdXJsOiAnJyAvLyBTYXRpc2ZhY2VyIGNvbnN0cmFpbnQgTk9UIE5VTEwgbWllbnRyYXMgbWlncmFtb3NcclxuICAgIH0pXHJcbiAgICAuc2VsZWN0KClcclxuICAgIC5zaW5nbGUoKVxyXG5cclxuICBpZiAocHJvZHVjdEVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbnNlcnRhbmRvIHByb2R1Y3RvOicsIHByb2R1Y3RFcnJvcilcclxuICAgIHJlZGlyZWN0KGAvY29tbWVyY2UvYWRtaW4vbnVldm8vJHt0eXBlfT9lcnJvcj1kYXRhYmFzZWApXHJcbiAgfVxyXG5cclxuICBjb25zdCBwcm9kdWN0SWQgPSBwcm9kdWN0RGF0YS5pZFxyXG5cclxuICAvLyAzLiBTaSBlcyBDVVJTTywgcHJvY2VzYXIgbXVsdGltZWRpYSAoaW3DoWdlbmVzIHkgdmlkZW9zKVxyXG4gIGlmICh0eXBlID09PSAnY3Vyc28nKSB7XHJcbiAgICBhd2FpdCBwcm9jZXNzQ291cnNlTXVsdGltZWRpYShzdXBhYmFzZSwgcHJvZHVjdElkLCBmb3JtRGF0YSlcclxuICB9XHJcblxyXG4gIC8vIDQuIFN1YmlyIGUgSW5zZXJ0YXIgQXJjaGl2b3MgZGUgUmVjdXJzb1xyXG4gIGZvciAoY29uc3QgZmlsZSBvZiByZXNvdXJjZUZpbGVzKSB7XHJcbiAgICBpZiAoZmlsZSAmJiBmaWxlLnNpemUgPiAwICYmIGZpbGUubmFtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgY29uc3QgZmlsZUV4dCA9IGZpbGUubmFtZS5zcGxpdCgnLicpLnBvcCgpXHJcbiAgICAgIGNvbnN0IGZpbGVOYW1lID0gYCR7TWF0aC5yYW5kb20oKX0uJHtmaWxlRXh0fWBcclxuICAgICAgY29uc3Qgb3JpZ2luYWxOYW1lID0gZmlsZS5uYW1lXHJcblxyXG4gICAgICBjb25zdCB7IGVycm9yOiB1cGxvYWRFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2Uuc3RvcmFnZVxyXG4gICAgICAgIC5mcm9tKCdwcm9kdWN0b3MtZGlnaXRhbGVzLWFyY2hpdm9zJylcclxuICAgICAgICAudXBsb2FkKGZpbGVOYW1lLCBmaWxlKVxyXG5cclxuICAgICAgaWYgKCF1cGxvYWRFcnJvcikge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YTogeyBwdWJsaWNVcmwgfSB9ID0gc3VwYWJhc2Uuc3RvcmFnZVxyXG4gICAgICAgICAgLmZyb20oJ3Byb2R1Y3Rvcy1kaWdpdGFsZXMtYXJjaGl2b3MnKVxyXG4gICAgICAgICAgLmdldFB1YmxpY1VybChmaWxlTmFtZSlcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB7IGVycm9yOiByZWxFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAgIC5mcm9tKCdwcm9kdWN0b19hcmNoaXZvcycpXHJcbiAgICAgICAgICAuaW5zZXJ0KHtcclxuICAgICAgICAgICAgcHJvZHVjdG9faWQ6IHByb2R1Y3RJZCxcclxuICAgICAgICAgICAgbm9tYnJlX2FyY2hpdm86IG9yaWdpbmFsTmFtZSxcclxuICAgICAgICAgICAgYXJjaGl2b191cmw6IHB1YmxpY1VybFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICBpZiAocmVsRXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VSUk9SIElOU0VSVElORyBJTlRPIHByb2R1Y3RvX2FyY2hpdm9zOicsIHJlbEVycm9yKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFUlJPUiBVUExPQURJTkcgUkVTT1VSQ0U6JywgdXBsb2FkRXJyb3IpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldmFsaWRhdGVQYXRoKCcvY29tbWVyY2UvYWRtaW4nKVxyXG4gIHJldmFsaWRhdGVQYXRoKCcvY29tbWVyY2Uvc2hvcCcpXHJcbiAgcmVkaXJlY3QoJy9jb21tZXJjZS9hZG1pbicpXHJcbn1cclxuXHJcbi8vIEZ1bmNpw7NuIGF1eGlsaWFyIHBhcmEgcHJvY2VzYXIgbXVsdGltZWRpYSBkZSBjdXJzb3NcclxuYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc0NvdXJzZU11bHRpbWVkaWEoc3VwYWJhc2U6IGFueSwgcHJvZHVjdElkOiBzdHJpbmcsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGxldCBvcmRlbiA9IDBcclxuXHJcbiAgdHJ5IHtcclxuICAgIC8vIFByb2Nlc2FyIGltw6FnZW5lcyBkZSBnYWxlcsOtYVxyXG4gICAgY29uc3QgZ2FsZXJ5SW1hZ2VzID0gZm9ybURhdGEuZ2V0QWxsKCdpbWFnZW5fZ2FsZXJpYScpIGFzIEZpbGVbXVxyXG4gICAgZm9yIChjb25zdCBmaWxlIG9mIGdhbGVyeUltYWdlcykge1xyXG4gICAgICBpZiAoZmlsZSAmJiBmaWxlLnNpemUgJiYgZmlsZS5zaXplID4gMCAmJiBmaWxlLm5hbWUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgY29uc3QgZmlsZUV4dCA9IGZpbGUubmFtZS5zcGxpdCgnLicpLnBvcCgpXHJcbiAgICAgICAgY29uc3QgZmlsZU5hbWUgPSBgY3Vyc28tJHtwcm9kdWN0SWR9LWltZy0ke01hdGgucmFuZG9tKCl9LiR7ZmlsZUV4dH1gXHJcblxyXG4gICAgICAgIGNvbnN0IHsgZXJyb3I6IHVwbG9hZEVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5zdG9yYWdlXHJcbiAgICAgICAgICAuZnJvbSgncHJvZHVjdG9zLWRpZ2l0YWxlcy1wb3J0YWRhcycpXHJcbiAgICAgICAgICAudXBsb2FkKGZpbGVOYW1lLCBmaWxlKVxyXG5cclxuICAgICAgICBpZiAoIXVwbG9hZEVycm9yKSB7XHJcbiAgICAgICAgICBjb25zdCB7IGRhdGE6IHsgcHVibGljVXJsIH0gfSA9IHN1cGFiYXNlLnN0b3JhZ2VcclxuICAgICAgICAgICAgLmZyb20oJ3Byb2R1Y3Rvcy1kaWdpdGFsZXMtcG9ydGFkYXMnKVxyXG4gICAgICAgICAgICAuZ2V0UHVibGljVXJsKGZpbGVOYW1lKVxyXG5cclxuICAgICAgICAgIGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgICAgIC5mcm9tKCdjdXJzb19tdWx0aW1lZGlhJylcclxuICAgICAgICAgICAgLmluc2VydCh7XHJcbiAgICAgICAgICAgICAgcHJvZHVjdG9faWQ6IHByb2R1Y3RJZCxcclxuICAgICAgICAgICAgICBub21icmU6IGZpbGUubmFtZSxcclxuICAgICAgICAgICAgICB1cmw6IHB1YmxpY1VybCxcclxuICAgICAgICAgICAgICB0aXBvOiAnaW1hZ2VuJyxcclxuICAgICAgICAgICAgICBvcmRlbjogb3JkZW4rK1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFByb2Nlc2FyIFVSTHMgZGUgdmlkZW9zIChZb3VUdWJlLCBldGMpIC0gRmlsdHJhciBjYW1wb3MgdmFjw61vc1xyXG4gICAgY29uc3QgdmlkZW9VcmxzOiBzdHJpbmdbXSA9IFtdXHJcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBmb3JtRGF0YS5lbnRyaWVzKCkpIHtcclxuICAgICAgaWYgKGtleSA9PT0gJ3ZpZGVvX3VybCcgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS50cmltKCkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHZpZGVvVXJscy5wdXNoKHZhbHVlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZvciAoY29uc3QgdXJsIG9mIHZpZGVvVXJscykge1xyXG4gICAgICBpZiAodXJsICYmIHVybC50cmltKCkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAgICAgLmZyb20oJ2N1cnNvX211bHRpbWVkaWEnKVxyXG4gICAgICAgICAgICAuaW5zZXJ0KHtcclxuICAgICAgICAgICAgICBwcm9kdWN0b19pZDogcHJvZHVjdElkLFxyXG4gICAgICAgICAgICAgIG5vbWJyZTogZXh0cmFjdFZpZGVvVGl0bGUodXJsKSxcclxuICAgICAgICAgICAgICB1cmw6IHVybC50cmltKCksXHJcbiAgICAgICAgICAgICAgdGlwbzogJ3ZpZGVvJyxcclxuICAgICAgICAgICAgICBvcmRlbjogb3JkZW4rK1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW5zZXJ0aW5nIHZpZGVvIFVSTDonLCBlcnIsIHVybClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBQcm9jZXNhciBhcmNoaXZvcyBkZSB2aWRlbyBzdWJpZG9zXHJcbiAgICBjb25zdCB2aWRlb0ZpbGVzID0gZm9ybURhdGEuZ2V0QWxsKCd2aWRlb19hcmNoaXZvJykgYXMgRmlsZVtdXHJcbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgdmlkZW9GaWxlcykge1xyXG4gICAgICBpZiAoZmlsZSAmJiBmaWxlLnNpemUgJiYgZmlsZS5zaXplID4gMCAmJiBmaWxlLm5hbWUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgY29uc3QgZmlsZUV4dCA9IGZpbGUubmFtZS5zcGxpdCgnLicpLnBvcCgpXHJcbiAgICAgICAgY29uc3QgZmlsZU5hbWUgPSBgY3Vyc28tJHtwcm9kdWN0SWR9LXZpZC0ke01hdGgucmFuZG9tKCl9LiR7ZmlsZUV4dH1gXHJcblxyXG4gICAgICAgIGNvbnN0IHsgZXJyb3I6IHVwbG9hZEVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5zdG9yYWdlXHJcbiAgICAgICAgICAuZnJvbSgncHJvZHVjdG9zLWRpZ2l0YWxlcy1hcmNoaXZvcycpXHJcbiAgICAgICAgICAudXBsb2FkKGZpbGVOYW1lLCBmaWxlKVxyXG5cclxuICAgICAgICBpZiAoIXVwbG9hZEVycm9yKSB7XHJcbiAgICAgICAgICBjb25zdCB7IGRhdGE6IHsgcHVibGljVXJsIH0gfSA9IHN1cGFiYXNlLnN0b3JhZ2VcclxuICAgICAgICAgICAgLmZyb20oJ3Byb2R1Y3Rvcy1kaWdpdGFsZXMtYXJjaGl2b3MnKVxyXG4gICAgICAgICAgICAuZ2V0UHVibGljVXJsKGZpbGVOYW1lKVxyXG5cclxuICAgICAgICAgIGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgICAgIC5mcm9tKCdjdXJzb19tdWx0aW1lZGlhJylcclxuICAgICAgICAgICAgLmluc2VydCh7XHJcbiAgICAgICAgICAgICAgcHJvZHVjdG9faWQ6IHByb2R1Y3RJZCxcclxuICAgICAgICAgICAgICBub21icmU6IGZpbGUubmFtZSxcclxuICAgICAgICAgICAgICB1cmw6IHB1YmxpY1VybCxcclxuICAgICAgICAgICAgICB0aXBvOiAndmlkZW8nLFxyXG4gICAgICAgICAgICAgIG9yZGVuOiBvcmRlbisrXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBlbiBwcm9jZXNzQ291cnNlTXVsdGltZWRpYTonLCBlcnIpXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBleHRyYWN0VmlkZW9UaXRsZSh1cmw6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHlvdXR1YmVNYXRjaCA9IHVybC5tYXRjaCgvKD86eW91dHViZVxcLmNvbVxcL3dhdGNoXFw/dj18eW91dHVcXC5iZVxcLykoW14mXFxuPyNdKykvKVxyXG4gICAgaWYgKHlvdXR1YmVNYXRjaCAmJiB5b3V0dWJlTWF0Y2hbMV0pIHtcclxuICAgICAgcmV0dXJuIGBWaWRlbzogJHt5b3V0dWJlTWF0Y2hbMV19YFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGV4dHJhY3RpbmcgdmlkZW8gdGl0bGU6JywgZSlcclxuICB9XHJcbiAgcmV0dXJuICdWaWRlbydcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVByb2R1Y3QocHJvZHVjdElkOiBzdHJpbmcpIHtcclxuICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXHJcblxyXG4gIC8vIFPDk0xPIERFU0FDVElWQU1PUyBwYXJhIG5vIHJvbXBlciBoaXN0b3JpYWwgZGUgcGVkaWRvcyAoU29mdCBEZWxldGUpXHJcbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKCdwcm9kdWN0b3MnKVxyXG4gICAgLnVwZGF0ZSh7IGFjdGl2bzogZmFsc2UgfSkgLy8gRW4gbHVnYXIgZGUgLmRlbGV0ZSgpXHJcbiAgICAuZXEoJ2lkJywgcHJvZHVjdElkKVxyXG5cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlc2FjdGl2YW5kbyBwcm9kdWN0bzonLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiAnTm8gc2UgcHVkbyBlbGltaW5hciBlbCBwcm9kdWN0bycgfVxyXG4gIH1cclxuXHJcbiAgcmV2YWxpZGF0ZVBhdGgoJy9jb21tZXJjZS9hZG1pbicpXHJcbiAgcmV2YWxpZGF0ZVBhdGgoJy9jb21tZXJjZS9zaG9wJylcclxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVJlc291cmNlRmlsZShmaWxlSWQ6IHN0cmluZykge1xyXG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcclxuXHJcbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKCdwcm9kdWN0b19hcmNoaXZvcycpXHJcbiAgICAuZGVsZXRlKClcclxuICAgIC5lcSgnaWQnLCBmaWxlSWQpXHJcblxyXG4gIGlmIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZWxpbWluYW5kbyBhcmNoaXZvOicsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6ICdObyBzZSBwdWRvIGVsaW1pbmFyIGVsIGFyY2hpdm8nIH1cclxuICB9XHJcblxyXG4gIHJldmFsaWRhdGVQYXRoKCcvY29tbWVyY2UvYWRtaW4nKVxyXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ291cnNlTWVkaWEobWVkaWFJZDogc3RyaW5nKSB7XHJcbiAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG5cclxuICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oJ2N1cnNvX211bHRpbWVkaWEnKVxyXG4gICAgLmRlbGV0ZSgpXHJcbiAgICAuZXEoJ2lkJywgbWVkaWFJZClcclxuXHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBlbGltaW5hbmRvIG1lZGlhIGRlIGN1cnNvOicsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6ICdObyBzZSBwdWRvIGVsaW1pbmFyIGVsIGFyY2hpdm8nIH1cclxuICB9XHJcblxyXG4gIHJldmFsaWRhdGVQYXRoKCcvY29tbWVyY2UvYWRtaW4nKVxyXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUHJvZHVjdChmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXHJcblxyXG4gIGNvbnN0IGlkID0gZm9ybURhdGEuZ2V0KCdpZCcpIGFzIHN0cmluZ1xyXG4gIGNvbnN0IG5vbWJyZSA9IGZvcm1EYXRhLmdldCgnbm9tYnJlJykgYXMgc3RyaW5nXHJcbiAgY29uc3QgZGVzY3JpcGNpb24gPSBmb3JtRGF0YS5nZXQoJ2Rlc2NyaXBjaW9uJykgYXMgc3RyaW5nXHJcbiAgY29uc3QgcHJlY2lvID0gcGFyc2VGbG9hdChmb3JtRGF0YS5nZXQoJ3ByZWNpbycpIGFzIHN0cmluZylcclxuICBjb25zdCBlc19tZW1icmVzaWEgPSBmb3JtRGF0YS5nZXQoJ2VzX21lbWJyZXNpYScpID09PSAndHJ1ZSdcclxuICBjb25zdCBkdXJhY2lvbl9tZXNlcyA9IHBhcnNlSW50KGZvcm1EYXRhLmdldCgnZHVyYWNpb25fbWVzZXMnKSBhcyBzdHJpbmcgfHwgJzEnKVxyXG4gIGNvbnN0IGltYWdlRmlsZSA9IGZvcm1EYXRhLmdldCgnaW1hZ2VuJykgYXMgRmlsZVxyXG4gIGNvbnN0IHJlc291cmNlRmlsZXMgPSBmb3JtRGF0YS5nZXRBbGwoJ2FyY2hpdm8nKSBhcyBGaWxlW11cclxuXHJcbiAgLy8gMS4gQWN0dWFsaXphciBkYXRvcyBiw6FzaWNvc1xyXG4gIGNvbnN0IHVwZGF0ZURhdGE6IGFueSA9IHtcclxuICAgIG5vbWJyZSxcclxuICAgIGRlc2NyaXBjaW9uLFxyXG4gICAgcHJlY2lvLFxyXG4gICAgZXNfbWVtYnJlc2lhOiBmb3JtRGF0YS5nZXQoJ2VzX21lbWJyZXNpYScpID09PSAndHJ1ZScsXHJcbiAgICBkdXJhY2lvbl9tZXNlczogcGFyc2VJbnQoZm9ybURhdGEuZ2V0KCdkdXJhY2lvbl9tZXNlcycpIGFzIHN0cmluZyB8fCAnMScpLFxyXG4gIH1cclxuXHJcbiAgLy8gMi4gU3ViaXIgbnVldmEgaW1hZ2VuIHNpIGV4aXN0ZVxyXG4gIGlmIChpbWFnZUZpbGUgJiYgaW1hZ2VGaWxlLnNpemUgPiAwICYmIGltYWdlRmlsZS5uYW1lICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgY29uc3QgZmlsZUV4dCA9IGltYWdlRmlsZS5uYW1lLnNwbGl0KCcuJykucG9wKClcclxuICAgIGNvbnN0IGZpbGVOYW1lID0gYCR7TWF0aC5yYW5kb20oKX0uJHtmaWxlRXh0fWBcclxuICAgIGNvbnN0IHsgZXJyb3I6IHVwbG9hZEVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5zdG9yYWdlXHJcbiAgICAgIC5mcm9tKCdwcm9kdWN0b3MtZGlnaXRhbGVzLXBvcnRhZGFzJylcclxuICAgICAgLnVwbG9hZChmaWxlTmFtZSwgaW1hZ2VGaWxlKVxyXG5cclxuICAgIGlmICghdXBsb2FkRXJyb3IpIHtcclxuICAgICAgY29uc3QgeyBkYXRhOiB7IHB1YmxpY1VybCB9IH0gPSBzdXBhYmFzZS5zdG9yYWdlXHJcbiAgICAgICAgLmZyb20oJ3Byb2R1Y3Rvcy1kaWdpdGFsZXMtcG9ydGFkYXMnKVxyXG4gICAgICAgIC5nZXRQdWJsaWNVcmwoZmlsZU5hbWUpXHJcbiAgICAgIHVwZGF0ZURhdGEuaW1hZ2VuX3VybCA9IHB1YmxpY1VybFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBlcnJvcjogcHJvZHVjdEVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oJ3Byb2R1Y3RvcycpXHJcbiAgICAudXBkYXRlKHVwZGF0ZURhdGEpXHJcbiAgICAuZXEoJ2lkJywgaWQpXHJcblxyXG4gIGlmIChwcm9kdWN0RXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGFjdHVhbGl6YW5kbyBwcm9kdWN0bzonLCBwcm9kdWN0RXJyb3IpXHJcbiAgICByZWRpcmVjdChgL2NvbW1lcmNlL2FkbWluL2VkaXRhci8ke2lkfT9lcnJvcj1kYXRhYmFzZWApXHJcbiAgfVxyXG5cclxuICAvLyAzLiBTdWJpciBudWV2b3MgYXJjaGl2b3MgYWRpY2lvbmFsZXNcclxuICBmb3IgKGNvbnN0IGZpbGUgb2YgcmVzb3VyY2VGaWxlcykge1xyXG4gICAgaWYgKGZpbGUgJiYgZmlsZS5zaXplID4gMCAmJiBmaWxlLm5hbWUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGNvbnN0IGZpbGVFeHQgPSBmaWxlLm5hbWUuc3BsaXQoJy4nKS5wb3AoKVxyXG4gICAgICBjb25zdCBmaWxlTmFtZSA9IGAke01hdGgucmFuZG9tKCl9LiR7ZmlsZUV4dH1gXHJcbiAgICAgIGNvbnN0IG9yaWdpbmFsTmFtZSA9IGZpbGUubmFtZVxyXG5cclxuICAgICAgY29uc3QgeyBlcnJvcjogdXBsb2FkRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLnN0b3JhZ2VcclxuICAgICAgICAuZnJvbSgncHJvZHVjdG9zLWRpZ2l0YWxlcy1hcmNoaXZvcycpXHJcbiAgICAgICAgLnVwbG9hZChmaWxlTmFtZSwgZmlsZSlcclxuXHJcbiAgICAgIGlmICghdXBsb2FkRXJyb3IpIHtcclxuICAgICAgICBjb25zdCB7IGRhdGE6IHsgcHVibGljVXJsIH0gfSA9IHN1cGFiYXNlLnN0b3JhZ2VcclxuICAgICAgICAgIC5mcm9tKCdwcm9kdWN0b3MtZGlnaXRhbGVzLWFyY2hpdm9zJylcclxuICAgICAgICAgIC5nZXRQdWJsaWNVcmwoZmlsZU5hbWUpXHJcbiAgICAgICAgXHJcbiAgICAgICAgYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAgIC5mcm9tKCdwcm9kdWN0b19hcmNoaXZvcycpXHJcbiAgICAgICAgICAuaW5zZXJ0KHtcclxuICAgICAgICAgICAgcHJvZHVjdG9faWQ6IGlkLFxyXG4gICAgICAgICAgICBub21icmVfYXJjaGl2bzogb3JpZ2luYWxOYW1lLFxyXG4gICAgICAgICAgICBhcmNoaXZvX3VybDogcHVibGljVXJsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXZhbGlkYXRlUGF0aCgnL2NvbW1lcmNlL2FkbWluJylcclxuICByZXZhbGlkYXRlUGF0aCgnL2NvbW1lcmNlL3Nob3AnKVxyXG4gIHJldmFsaWRhdGVQYXRoKGAvY29tbWVyY2UvYWRtaW4vZWRpdGFyLyR7aWR9YClcclxuICByZWRpcmVjdCgnL2NvbW1lcmNlL2FkbWluJylcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjhTQWlQc0IsK0xBQUEifQ==
}),
"[project]/src/components/admin/DeleteResourceButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DeleteResourceButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$commerce$2f$admin$2f$nuevo$2f$data$3a$a111ea__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/commerce/admin/nuevo/data:a111ea [app-ssr] (ecmascript) <text/javascript>");
'use client';
;
;
;
function DeleteResourceButton({ fileId, fileName }) {
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransition"])();
    const handleDelete = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        if (confirm(`¿Estás seguro de que deseas eliminar el archivo "${fileName}"?`)) {
            startTransition(async ()=>{
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$commerce$2f$admin$2f$nuevo$2f$data$3a$a111ea__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteResourceFile"])(fileId);
                if (result?.error) {
                    alert(result.error);
                }
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: handleDelete,
        disabled: isPending,
        className: `p-2 transition-colors rounded-lg ${isPending ? 'bg-neutral-50 text-neutral-300' : 'bg-red-50 text-red-500 hover:bg-red-100'}`,
        title: "Eliminar archivo",
        children: isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "animate-spin",
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21 12a9 9 0 1 1-6.219-8.56"
            }, void 0, false, {
                fileName: "[project]/src/components/admin/DeleteResourceButton.tsx",
                lineNumber: 36,
                columnNumber: 177
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/admin/DeleteResourceButton.tsx",
            lineNumber: 36,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "18",
                    y1: "6",
                    x2: "6",
                    y2: "18"
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/DeleteResourceButton.tsx",
                    lineNumber: 38,
                    columnNumber: 154
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "6",
                    y1: "6",
                    x2: "18",
                    y2: "18"
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/DeleteResourceButton.tsx",
                    lineNumber: 38,
                    columnNumber: 197
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/admin/DeleteResourceButton.tsx",
            lineNumber: 38,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/admin/DeleteResourceButton.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_42bbec9e._.js.map