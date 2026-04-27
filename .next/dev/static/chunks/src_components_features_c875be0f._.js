(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/features/ProductDetailModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductDetailModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useCartStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthModalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthModalStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function ProductDetailModal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(63);
    if ($[0] !== "65ebb556403f3b159d75d80ec441e1c685e08acbe9413314cab96b33e6a131a1") {
        for(let $i = 0; $i < 63; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "65ebb556403f3b159d75d80ec441e1c685e08acbe9413314cab96b33e6a131a1";
    }
    const { product, archivos, user, isOpen, onClose } = t0;
    const addItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"])(_ProductDetailModalUseCartStore);
    const { openModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthModalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthModalStore"])();
    const [pagoTipo, setPagoTipo] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState("mensual");
    const isMembresia = product.es_membresia;
    const precioMostrar = isMembresia && pagoTipo === "mensual" && product.duracion_meses ? product.precio / product.duracion_meses : product.precio;
    let t1;
    if ($[1] !== addItem || $[2] !== isMembresia || $[3] !== onClose || $[4] !== openModal || $[5] !== pagoTipo || $[6] !== precioMostrar || $[7] !== product.id || $[8] !== product.imagen_url || $[9] !== product.nombre || $[10] !== user) {
        t1 = ({
            "ProductDetailModal[handleAdd]": ()=>{
                if (!user) {
                    openModal("login");
                    return;
                }
                addItem({
                    id: product.id,
                    nombre: product.nombre,
                    precio: precioMostrar,
                    imagen_url: product.imagen_url,
                    pago_tipo: isMembresia ? pagoTipo : undefined
                });
                onClose();
            }
        })["ProductDetailModal[handleAdd]"];
        $[1] = addItem;
        $[2] = isMembresia;
        $[3] = onClose;
        $[4] = openModal;
        $[5] = pagoTipo;
        $[6] = precioMostrar;
        $[7] = product.id;
        $[8] = product.imagen_url;
        $[9] = product.nombre;
        $[10] = user;
        $[11] = t1;
    } else {
        t1 = $[11];
    }
    const handleAdd = t1;
    if (!isOpen) {
        return null;
    }
    let t2;
    if ($[12] !== onClose) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black/50 transition-opacity",
            onClick: onClose
        }, void 0, false, {
            fileName: "[project]/src/components/features/ProductDetailModal.tsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[12] = onClose;
        $[13] = t2;
    } else {
        t2 = $[13];
    }
    let t3;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "18",
                    y1: "6",
                    x2: "6",
                    y2: "18"
                }, void 0, false, {
                    fileName: "[project]/src/components/features/ProductDetailModal.tsx",
                    lineNumber: 97,
                    columnNumber: 153
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "6",
                    y1: "6",
                    x2: "18",
                    y2: "18"
                }, void 0, false, {
                    fileName: "[project]/src/components/features/ProductDetailModal.tsx",
                    lineNumber: 97,
                    columnNumber: 191
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/ProductDetailModal.tsx",
            lineNumber: 97,
            columnNumber: 10
        }, this);
        $[14] = t3;
    } else {
        t3 = $[14];
    }
    let t4;
    if ($[15] !== onClose) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClose,
            className: "absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors",
            "aria-label": "Cerrar",
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/components/features/ProductDetailModal.tsx",
            lineNumber: 104,
            columnNumber: 10
        }, this);
        $[15] = onClose;
        $[16] = t4;
    } else {
        t4 = $[16];
    }
    let t5;
    if ($[17] !== product.imagen_url || $[18] !== product.nombre) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:col-span-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "aspect-4/5 bg-neutral-100 rounded-2xl overflow-hidden sticky top-6",
                children: product.imagen_url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: product.imagen_url,
                    alt: product.nombre,
                    className: "w-full h-full object-cover"
                }, void 0, false, {
                    fileName: "[project]/src/components/features/ProductDetailModal.tsx",
                    lineNumber: 112,
                    columnNumber: 147
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full flex items-center justify-center text-neutral-400",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "60",
                        height: "60",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/ProductDetailModal.tsx",
                                lineNumber: 112,
                                columnNumber: 468
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                points: "17 8 12 3 7 8"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/ProductDetailModal.tsx",
                                lineNumber: 112,
                                columnNumber: 522
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "12",
                                y1: "3",
                                x2: "12",
                                y2: "15"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/ProductDetailModal.tsx",
                                lineNumber: 112,
                                columnNumber: 557
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/ProductDetailModal.tsx",
                        lineNumber: 112,
                        columnNumber: 323
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/features/ProductDetailModal.tsx",
                    lineNumber: 112,
                    columnNumber: 242
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/features/ProductDetailModal.tsx",
                lineNumber: 112,
                columnNumber: 41
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/features/ProductDetailModal.tsx",
            lineNumber: 112,
            columnNumber: 10
        }, this);
        $[17] = product.imagen_url;
        $[18] = product.nombre;
        $[19] = t5;
    } else {
        t5 = $[19];
    }
    let t6;
    if ($[20] !== product.duracion_meses || $[21] !== product.es_membresia) {
        t6 = product.es_membresia && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-block bg-accent text-white text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-md mb-4 w-fit",
            children: [
                "Membresía ",
                product.duracion_meses,
                "m"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/ProductDetailModal.tsx",
            lineNumber: 121,
            columnNumber: 34
        }, this);
        $[20] = product.duracion_meses;
        $[21] = product.es_membresia;
        $[22] = t6;
    } else {
        t6 = $[22];
    }
    let t7;
    if ($[23] !== product.nombre) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "font-serif text-3xl sm:text-4xl text-primary mb-4 leading-tight",
            children: product.nombre
        }, void 0, false, {
            fileName: "[project]/src/components/features/ProductDetailModal.tsx",
            lineNumber: 130,
            columnNumber: 10
        }, this);
        $[23] = product.nombre;
        $[24] = t7;
    } else {
        t7 = $[24];
    }
    let t8;
    if ($[25] !== product.descripcion) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-primary/70 text-base leading-relaxed mb-6 italic",
            children: product.descripcion
        }, void 0, false, {
            fileName: "[project]/src/components/features/ProductDetailModal.tsx",
            lineNumber: 138,
            columnNumber: 10
        }, this);
        $[25] = product.descripcion;
        $[26] = t8;
    } else {
        t8 = $[26];
    }
    let t9;
    if ($[27] !== archivos) {
        t9 = archivos && archivos.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "font-serif text-lg text-primary mb-3",
                    children: "Archivos Incluidos"
                }, void 0, false, {
                    fileName: "[project]/src/components/features/ProductDetailModal.tsx",
                    lineNumber: 146,
                    columnNumber: 67
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2 bg-neutral-50 rounded-xl p-4 border border-neutral-200",
                    children: archivos.map(_ProductDetailModalArchivosMap)
                }, void 0, false, {
                    fileName: "[project]/src/components/features/ProductDetailModal.tsx",
                    lineNumber: 146,
                    columnNumber: 143
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/ProductDetailModal.tsx",
            lineNumber: 146,
            columnNumber: 45
        }, this);
        $[27] = archivos;
        $[28] = t9;
    } else {
        t9 = $[28];
    }
    let t10;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-t border-light-green/10 my-6"
        }, void 0, false, {
            fileName: "[project]/src/components/features/ProductDetailModal.tsx",
            lineNumber: 154,
            columnNumber: 11
        }, this);
        $[29] = t10;
    } else {
        t10 = $[29];
    }
    let t11;
    if ($[30] !== pagoTipo || $[31] !== product.es_membresia) {
        t11 = product.es_membresia && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex bg-neutral-50 p-1 rounded-xl gap-1 border border-neutral-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "ProductDetailModal[<button>.onClick]": ()=>setPagoTipo("mensual")
                        }["ProductDetailModal[<button>.onClick]"],
                        className: `flex-1 py-2 text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all ${pagoTipo === "mensual" ? "bg-white text-primary shadow-sm" : "text-primary/30 hover:text-primary/60"}`,
                        children: "1 Mes"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/ProductDetailModal.tsx",
                        lineNumber: 161,
                        columnNumber: 140
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "ProductDetailModal[<button>.onClick]": ()=>setPagoTipo("total")
                        }["ProductDetailModal[<button>.onClick]"],
                        className: `flex-1 py-2 text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all ${pagoTipo === "total" ? "bg-white text-primary shadow-sm" : "text-primary/30 hover:text-primary/60"}`,
                        children: "Total"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/ProductDetailModal.tsx",
                        lineNumber: 163,
                        columnNumber: 270
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/ProductDetailModal.tsx",
                lineNumber: 161,
                columnNumber: 57
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/features/ProductDetailModal.tsx",
            lineNumber: 161,
            columnNumber: 35
        }, this);
        $[30] = pagoTipo;
        $[31] = product.es_membresia;
        $[32] = t11;
    } else {
        t11 = $[32];
    }
    let t12;
    if ($[33] !== precioMostrar) {
        t12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(precioMostrar);
        $[33] = precioMostrar;
        $[34] = t12;
    } else {
        t12 = $[34];
    }
    let t13;
    if ($[35] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-4xl font-serif text-accent",
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/components/features/ProductDetailModal.tsx",
            lineNumber: 182,
            columnNumber: 11
        }, this);
        $[35] = t12;
        $[36] = t13;
    } else {
        t13 = $[36];
    }
    let t14;
    if ($[37] !== pagoTipo || $[38] !== product.es_membresia) {
        t14 = product.es_membresia && pagoTipo === "mensual" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm font-bold text-primary/30 uppercase tracking-widest",
            children: "por mes"
        }, void 0, false, {
            fileName: "[project]/src/components/features/ProductDetailModal.tsx",
            lineNumber: 190,
            columnNumber: 61
        }, this);
        $[37] = pagoTipo;
        $[38] = product.es_membresia;
        $[39] = t14;
    } else {
        t14 = $[39];
    }
    let t15;
    if ($[40] !== t13 || $[41] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-baseline gap-2",
                children: [
                    t13,
                    t14
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/ProductDetailModal.tsx",
                lineNumber: 199,
                columnNumber: 33
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/features/ProductDetailModal.tsx",
            lineNumber: 199,
            columnNumber: 11
        }, this);
        $[40] = t13;
        $[41] = t14;
        $[42] = t15;
    } else {
        t15 = $[42];
    }
    let t16;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                    d: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
                }, void 0, false, {
                    fileName: "[project]/src/components/features/ProductDetailModal.tsx",
                    lineNumber: 208,
                    columnNumber: 154
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "3",
                    y1: "6",
                    x2: "21",
                    y2: "6"
                }, void 0, false, {
                    fileName: "[project]/src/components/features/ProductDetailModal.tsx",
                    lineNumber: 208,
                    columnNumber: 217
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16 10a4 4 0 0 1-8 0"
                }, void 0, false, {
                    fileName: "[project]/src/components/features/ProductDetailModal.tsx",
                    lineNumber: 208,
                    columnNumber: 254
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/ProductDetailModal.tsx",
            lineNumber: 208,
            columnNumber: 11
        }, this);
        $[43] = t16;
    } else {
        t16 = $[43];
    }
    let t17;
    if ($[44] !== handleAdd) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleAdd,
            className: "w-full bg-primary hover:bg-forest text-white py-3 rounded-2xl font-bold uppercase tracking-wider transition-all shadow-md active:scale-95 flex items-center justify-center gap-2",
            children: [
                t16,
                "Agregar al Carrito"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/ProductDetailModal.tsx",
            lineNumber: 215,
            columnNumber: 11
        }, this);
        $[44] = handleAdd;
        $[45] = t17;
    } else {
        t17 = $[45];
    }
    let t18;
    if ($[46] !== t11 || $[47] !== t15 || $[48] !== t17 || $[49] !== t6 || $[50] !== t7 || $[51] !== t8 || $[52] !== t9) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:col-span-2 flex flex-col",
            children: [
                t6,
                t7,
                t8,
                t9,
                t10,
                t11,
                t15,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/ProductDetailModal.tsx",
            lineNumber: 223,
            columnNumber: 11
        }, this);
        $[46] = t11;
        $[47] = t15;
        $[48] = t17;
        $[49] = t6;
        $[50] = t7;
        $[51] = t8;
        $[52] = t9;
        $[53] = t18;
    } else {
        t18 = $[53];
    }
    let t19;
    if ($[54] !== t18 || $[55] !== t5) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-5 gap-8 p-6 sm:p-10",
            children: [
                t5,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/ProductDetailModal.tsx",
            lineNumber: 237,
            columnNumber: 11
        }, this);
        $[54] = t18;
        $[55] = t5;
        $[56] = t19;
    } else {
        t19 = $[56];
    }
    let t20;
    if ($[57] !== t19 || $[58] !== t4) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative min-h-screen flex items-center justify-center p-4 sm:p-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative bg-white rounded-3xl max-w-6xl w-full shadow-2xl max-h-[90vh] overflow-y-auto",
                onClick: _ProductDetailModalDivOnClick,
                children: [
                    t4,
                    t19
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/ProductDetailModal.tsx",
                lineNumber: 246,
                columnNumber: 94
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/features/ProductDetailModal.tsx",
            lineNumber: 246,
            columnNumber: 11
        }, this);
        $[57] = t19;
        $[58] = t4;
        $[59] = t20;
    } else {
        t20 = $[59];
    }
    let t21;
    if ($[60] !== t2 || $[61] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-[9999] overflow-y-auto",
            children: [
                t2,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/ProductDetailModal.tsx",
            lineNumber: 255,
            columnNumber: 11
        }, this);
        $[60] = t2;
        $[61] = t20;
        $[62] = t21;
    } else {
        t21 = $[62];
    }
    return t21;
}
_s(ProductDetailModal, "OZ6qBF+wwTqFEnzHo9JuptOwOqs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthModalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthModalStore"]
    ];
});
_c = ProductDetailModal;
function _ProductDetailModalArchivosMap(archivo) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3 text-primary/70",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/ProductDetailModal.tsx",
                        lineNumber: 265,
                        columnNumber: 227
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                        points: "14 2 14 8 20 8"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/ProductDetailModal.tsx",
                        lineNumber: 265,
                        columnNumber: 298
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/ProductDetailModal.tsx",
                lineNumber: 265,
                columnNumber: 84
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm",
                children: archivo.nombre_archivo
            }, void 0, false, {
                fileName: "[project]/src/components/features/ProductDetailModal.tsx",
                lineNumber: 265,
                columnNumber: 340
            }, this)
        ]
    }, archivo.id, true, {
        fileName: "[project]/src/components/features/ProductDetailModal.tsx",
        lineNumber: 265,
        columnNumber: 10
    }, this);
}
function _ProductDetailModalDivOnClick(e) {
    return e.stopPropagation();
}
function _ProductDetailModalUseCartStore(state) {
    return state.addItem;
}
var _c;
__turbopack_context__.k.register(_c, "ProductDetailModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/features/ProductGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useCartStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthModalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthModalStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$ProductDetailModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/ProductDetailModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function ProductGrid(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "f0d4a5e21e0574c5e385bc2507a257f43d195ea79cc276527adbbf7b2715f974") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f0d4a5e21e0574c5e385bc2507a257f43d195ea79cc276527adbbf7b2715f974";
    }
    const { products, user } = t0;
    if (!products || products.length === 0) {
        let t1;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full py-20 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-neutral-500",
                    children: "Aún no hay productos disponibles. Vuelve más tarde."
                }, void 0, false, {
                    fileName: "[project]/src/components/features/ProductGrid.tsx",
                    lineNumber: 40,
                    columnNumber: 54
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/features/ProductGrid.tsx",
                lineNumber: 40,
                columnNumber: 12
            }, this);
            $[1] = t1;
        } else {
            t1 = $[1];
        }
        return t1;
    }
    let t1;
    if ($[2] !== products || $[3] !== user) {
        let t2;
        if ($[5] !== user) {
            t2 = ({
                "ProductGrid[products.map()]": (product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductCard, {
                        product: product,
                        user: user
                    }, product.id, false, {
                        fileName: "[project]/src/components/features/ProductGrid.tsx",
                        lineNumber: 52,
                        columnNumber: 51
                    }, this)
            })["ProductGrid[products.map()]"];
            $[5] = user;
            $[6] = t2;
        } else {
            t2 = $[6];
        }
        t1 = products.map(t2);
        $[2] = products;
        $[3] = user;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",
            children: t1
        }, void 0, false, {
            fileName: "[project]/src/components/features/ProductGrid.tsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c = ProductGrid;
function ProductCard(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(71);
    if ($[0] !== "f0d4a5e21e0574c5e385bc2507a257f43d195ea79cc276527adbbf7b2715f974") {
        for(let $i = 0; $i < 71; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f0d4a5e21e0574c5e385bc2507a257f43d195ea79cc276527adbbf7b2715f974";
    }
    const { product, user } = t0;
    const addItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"])(_ProductCardUseCartStore);
    const { openModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthModalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthModalStore"])();
    const [pagoTipo, setPagoTipo] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState("mensual");
    const [showDetailModal, setShowDetailModal] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const isMembresia = product.es_membresia;
    const precioMostrar = isMembresia && pagoTipo === "mensual" && product.duracion_meses ? product.precio / product.duracion_meses : product.precio;
    let t1;
    if ($[1] !== addItem || $[2] !== isMembresia || $[3] !== openModal || $[4] !== pagoTipo || $[5] !== precioMostrar || $[6] !== product.id || $[7] !== product.imagen_url || $[8] !== product.nombre || $[9] !== user) {
        t1 = ({
            "ProductCard[handleAdd]": ()=>{
                if (!user) {
                    openModal("login");
                    return;
                }
                addItem({
                    id: product.id,
                    nombre: product.nombre,
                    precio: precioMostrar,
                    imagen_url: product.imagen_url,
                    pago_tipo: isMembresia ? pagoTipo : undefined
                });
            }
        })["ProductCard[handleAdd]"];
        $[1] = addItem;
        $[2] = isMembresia;
        $[3] = openModal;
        $[4] = pagoTipo;
        $[5] = precioMostrar;
        $[6] = product.id;
        $[7] = product.imagen_url;
        $[8] = product.nombre;
        $[9] = user;
        $[10] = t1;
    } else {
        t1 = $[10];
    }
    const handleAdd = t1;
    let t2;
    if ($[11] !== product.imagen_url || $[12] !== product.nombre) {
        t2 = product.imagen_url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: product.imagen_url,
            alt: product.nombre,
            className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        }, void 0, false, {
            fileName: "[project]/src/components/features/ProductGrid.tsx",
            lineNumber: 129,
            columnNumber: 31
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full flex items-center justify-center text-neutral-400 bg-neutral-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "40",
                height: "40",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/ProductGrid.tsx",
                        lineNumber: 129,
                        columnNumber: 423
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                        points: "17 8 12 3 7 8"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/ProductGrid.tsx",
                        lineNumber: 129,
                        columnNumber: 477
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "12",
                        y1: "3",
                        x2: "12",
                        y2: "15"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/ProductGrid.tsx",
                        lineNumber: 129,
                        columnNumber: 512
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/ProductGrid.tsx",
                lineNumber: 129,
                columnNumber: 278
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/features/ProductGrid.tsx",
            lineNumber: 129,
            columnNumber: 182
        }, this);
        $[11] = product.imagen_url;
        $[12] = product.nombre;
        $[13] = t2;
    } else {
        t2 = $[13];
    }
    let t3;
    if ($[14] !== isMembresia || $[15] !== product.duracion_meses) {
        t3 = isMembresia && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-4 right-4 bg-accent text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg",
            children: [
                "Membresía ",
                product.duracion_meses,
                "m"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/ProductGrid.tsx",
            lineNumber: 138,
            columnNumber: 25
        }, this);
        $[14] = isMembresia;
        $[15] = product.duracion_meses;
        $[16] = t3;
    } else {
        t3 = $[16];
    }
    let t4;
    if ($[17] !== t2 || $[18] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "aspect-4/5 bg-neutral-100 relative overflow-hidden",
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/ProductGrid.tsx",
            lineNumber: 147,
            columnNumber: 10
        }, this);
        $[17] = t2;
        $[18] = t3;
        $[19] = t4;
    } else {
        t4 = $[19];
    }
    let t5;
    if ($[20] !== product.nombre) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-serif text-xl text-primary mb-2 line-clamp-2 leading-tight group-hover:text-forest transition-colors",
            children: product.nombre
        }, void 0, false, {
            fileName: "[project]/src/components/features/ProductGrid.tsx",
            lineNumber: 156,
            columnNumber: 10
        }, this);
        $[20] = product.nombre;
        $[21] = t5;
    } else {
        t5 = $[21];
    }
    let t6;
    if ($[22] !== product.descripcion) {
        t6 = product.descripcion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-sans text-sm text-primary/60 line-clamp-2 mb-4 flex-1 italic",
            children: product.descripcion
        }, void 0, false, {
            fileName: "[project]/src/components/features/ProductGrid.tsx",
            lineNumber: 164,
            columnNumber: 33
        }, this);
        $[22] = product.descripcion;
        $[23] = t6;
    } else {
        t6 = $[23];
    }
    let t7;
    if ($[24] !== isMembresia || $[25] !== pagoTipo) {
        t7 = isMembresia && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex bg-neutral-50 p-1 rounded-xl gap-1 mb-6 border border-neutral-100",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "ProductCard[<button>.onClick]": ()=>setPagoTipo("mensual")
                    }["ProductCard[<button>.onClick]"],
                    className: `flex-1 py-2 text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all ${pagoTipo === "mensual" ? "bg-white text-primary shadow-sm" : "text-primary/30 hover:text-primary/60"}`,
                    children: "1 Mes"
                }, void 0, false, {
                    fileName: "[project]/src/components/features/ProductGrid.tsx",
                    lineNumber: 172,
                    columnNumber: 113
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "ProductCard[<button>.onClick]": ()=>setPagoTipo("total")
                    }["ProductCard[<button>.onClick]"],
                    className: `flex-1 py-2 text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all ${pagoTipo === "total" ? "bg-white text-primary shadow-sm" : "text-primary/30 hover:text-primary/60"}`,
                    children: "Total"
                }, void 0, false, {
                    fileName: "[project]/src/components/features/ProductGrid.tsx",
                    lineNumber: 174,
                    columnNumber: 261
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/ProductGrid.tsx",
            lineNumber: 172,
            columnNumber: 25
        }, this);
        $[24] = isMembresia;
        $[25] = pagoTipo;
        $[26] = t7;
    } else {
        t7 = $[26];
    }
    let t8;
    if ($[27] !== precioMostrar) {
        t8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(precioMostrar);
        $[27] = precioMostrar;
        $[28] = t8;
    } else {
        t8 = $[28];
    }
    let t9;
    if ($[29] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-2xl font-serif text-accent",
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/components/features/ProductGrid.tsx",
            lineNumber: 193,
            columnNumber: 10
        }, this);
        $[29] = t8;
        $[30] = t9;
    } else {
        t9 = $[30];
    }
    let t10;
    if ($[31] !== isMembresia || $[32] !== pagoTipo) {
        t10 = isMembresia && pagoTipo === "mensual" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[10px] font-bold text-primary/30 uppercase tracking-widest",
            children: "por mes"
        }, void 0, false, {
            fileName: "[project]/src/components/features/ProductGrid.tsx",
            lineNumber: 201,
            columnNumber: 52
        }, this);
        $[31] = isMembresia;
        $[32] = pagoTipo;
        $[33] = t10;
    } else {
        t10 = $[33];
    }
    let t11;
    if ($[34] !== t10 || $[35] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col",
            children: [
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/ProductGrid.tsx",
            lineNumber: 210,
            columnNumber: 11
        }, this);
        $[34] = t10;
        $[35] = t9;
        $[36] = t11;
    } else {
        t11 = $[36];
    }
    let t12;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: {
                "ProductCard[<button>.onClick]": ()=>setShowDetailModal(true)
            }["ProductCard[<button>.onClick]"],
            className: "bg-neutral-100 hover:bg-neutral-200 text-primary h-12 px-3 flex items-center justify-center rounded-2xl transition-all shadow-md active:scale-95 text-xs font-bold uppercase tracking-wider",
            children: "Más"
        }, void 0, false, {
            fileName: "[project]/src/components/features/ProductGrid.tsx",
            lineNumber: 219,
            columnNumber: 11
        }, this);
        $[37] = t12;
    } else {
        t12 = $[37];
    }
    let t13;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                    d: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
                }, void 0, false, {
                    fileName: "[project]/src/components/features/ProductGrid.tsx",
                    lineNumber: 228,
                    columnNumber: 154
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "3",
                    y1: "6",
                    x2: "21",
                    y2: "6"
                }, void 0, false, {
                    fileName: "[project]/src/components/features/ProductGrid.tsx",
                    lineNumber: 228,
                    columnNumber: 217
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16 10a4 4 0 0 1-8 0"
                }, void 0, false, {
                    fileName: "[project]/src/components/features/ProductGrid.tsx",
                    lineNumber: 228,
                    columnNumber: 254
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/ProductGrid.tsx",
            lineNumber: 228,
            columnNumber: 11
        }, this);
        $[38] = t13;
    } else {
        t13 = $[38];
    }
    let t14;
    if ($[39] !== handleAdd) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-2",
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleAdd,
                    className: "bg-primary hover:bg-forest text-white h-12 w-12 flex items-center justify-center rounded-2xl transition-all shadow-md active:scale-95 group/btn",
                    children: t13
                }, void 0, false, {
                    fileName: "[project]/src/components/features/ProductGrid.tsx",
                    lineNumber: 235,
                    columnNumber: 44
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/ProductGrid.tsx",
            lineNumber: 235,
            columnNumber: 11
        }, this);
        $[39] = handleAdd;
        $[40] = t14;
    } else {
        t14 = $[40];
    }
    let t15;
    if ($[41] !== t11 || $[42] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-auto flex items-center justify-between pt-4 border-t border-light-green/10 gap-3",
            children: [
                t11,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/ProductGrid.tsx",
            lineNumber: 243,
            columnNumber: 11
        }, this);
        $[41] = t11;
        $[42] = t14;
        $[43] = t15;
    } else {
        t15 = $[43];
    }
    let t16;
    if ($[44] !== t15 || $[45] !== t5 || $[46] !== t6 || $[47] !== t7) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 flex flex-col flex-1",
            children: [
                t5,
                t6,
                t7,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/ProductGrid.tsx",
            lineNumber: 252,
            columnNumber: 11
        }, this);
        $[44] = t15;
        $[45] = t5;
        $[46] = t6;
        $[47] = t7;
        $[48] = t16;
    } else {
        t16 = $[48];
    }
    let t17;
    if ($[49] !== t16 || $[50] !== t4) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white group rounded-3xl border border-light-green/20 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full",
            children: [
                t4,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/ProductGrid.tsx",
            lineNumber: 263,
            columnNumber: 11
        }, this);
        $[49] = t16;
        $[50] = t4;
        $[51] = t17;
    } else {
        t17 = $[51];
    }
    let t18;
    if ($[52] !== product.descripcion || $[53] !== product.duracion_meses || $[54] !== product.es_membresia || $[55] !== product.id || $[56] !== product.imagen_url || $[57] !== product.nombre || $[58] !== product.precio) {
        t18 = {
            id: product.id,
            nombre: product.nombre,
            descripcion: product.descripcion,
            precio: product.precio,
            imagen_url: product.imagen_url,
            es_membresia: product.es_membresia,
            duracion_meses: product.duracion_meses
        };
        $[52] = product.descripcion;
        $[53] = product.duracion_meses;
        $[54] = product.es_membresia;
        $[55] = product.id;
        $[56] = product.imagen_url;
        $[57] = product.nombre;
        $[58] = product.precio;
        $[59] = t18;
    } else {
        t18 = $[59];
    }
    let t19;
    if ($[60] !== product.archivos) {
        t19 = product.archivos || [];
        $[60] = product.archivos;
        $[61] = t19;
    } else {
        t19 = $[61];
    }
    let t20;
    if ($[62] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = ({
            "ProductCard[<ProductDetailModal>.onClose]": ()=>setShowDetailModal(false)
        })["ProductCard[<ProductDetailModal>.onClose]"];
        $[62] = t20;
    } else {
        t20 = $[62];
    }
    let t21;
    if ($[63] !== showDetailModal || $[64] !== t18 || $[65] !== t19 || $[66] !== user) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$ProductDetailModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            product: t18,
            archivos: t19,
            user: user,
            isOpen: showDetailModal,
            onClose: t20
        }, void 0, false, {
            fileName: "[project]/src/components/features/ProductGrid.tsx",
            lineNumber: 311,
            columnNumber: 11
        }, this);
        $[63] = showDetailModal;
        $[64] = t18;
        $[65] = t19;
        $[66] = user;
        $[67] = t21;
    } else {
        t21 = $[67];
    }
    let t22;
    if ($[68] !== t17 || $[69] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t17,
                t21
            ]
        }, void 0, true);
        $[68] = t17;
        $[69] = t21;
        $[70] = t22;
    } else {
        t22 = $[70];
    }
    return t22;
}
_s(ProductCard, "SkaGz7ljdZ2lgPtPPj0eLZmPgT8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthModalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthModalStore"]
    ];
});
_c1 = ProductCard;
function _ProductCardUseCartStore(state) {
    return state.addItem;
}
var _c, _c1;
__turbopack_context__.k.register(_c, "ProductGrid");
__turbopack_context__.k.register(_c1, "ProductCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_features_c875be0f._.js.map