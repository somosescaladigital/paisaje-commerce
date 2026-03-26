(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function ProductGrid(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "a0ec990d0b48f3ab456497875d1864d8afa912c9936bdff0e2a0ff9530036d3d") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a0ec990d0b48f3ab456497875d1864d8afa912c9936bdff0e2a0ff9530036d3d";
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
                    lineNumber: 33,
                    columnNumber: 54
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/features/ProductGrid.tsx",
                lineNumber: 33,
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
                        lineNumber: 45,
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
            lineNumber: 61,
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(51);
    if ($[0] !== "a0ec990d0b48f3ab456497875d1864d8afa912c9936bdff0e2a0ff9530036d3d") {
        for(let $i = 0; $i < 51; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a0ec990d0b48f3ab456497875d1864d8afa912c9936bdff0e2a0ff9530036d3d";
    }
    const { product, user } = t0;
    const addItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"])(_ProductCardUseCartStore);
    const { openModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthModalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthModalStore"])();
    const [pagoTipo, setPagoTipo] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState("mensual");
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
            lineNumber: 121,
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
                        lineNumber: 121,
                        columnNumber: 423
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                        points: "17 8 12 3 7 8"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/ProductGrid.tsx",
                        lineNumber: 121,
                        columnNumber: 477
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "12",
                        y1: "3",
                        x2: "12",
                        y2: "15"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/ProductGrid.tsx",
                        lineNumber: 121,
                        columnNumber: 512
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/ProductGrid.tsx",
                lineNumber: 121,
                columnNumber: 278
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/features/ProductGrid.tsx",
            lineNumber: 121,
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
            lineNumber: 130,
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
            className: "aspect-[4/5] bg-neutral-100 relative overflow-hidden",
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/ProductGrid.tsx",
            lineNumber: 139,
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
            lineNumber: 148,
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
            lineNumber: 156,
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
                    lineNumber: 164,
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
                    lineNumber: 166,
                    columnNumber: 261
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/ProductGrid.tsx",
            lineNumber: 164,
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
            lineNumber: 185,
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
            lineNumber: 193,
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
            lineNumber: 202,
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
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                    lineNumber: 211,
                    columnNumber: 154
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "3",
                    y1: "6",
                    x2: "21",
                    y2: "6"
                }, void 0, false, {
                    fileName: "[project]/src/components/features/ProductGrid.tsx",
                    lineNumber: 211,
                    columnNumber: 217
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16 10a4 4 0 0 1-8 0"
                }, void 0, false, {
                    fileName: "[project]/src/components/features/ProductGrid.tsx",
                    lineNumber: 211,
                    columnNumber: 254
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/ProductGrid.tsx",
            lineNumber: 211,
            columnNumber: 11
        }, this);
        $[37] = t12;
    } else {
        t12 = $[37];
    }
    let t13;
    if ($[38] !== handleAdd) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleAdd,
            className: "bg-primary hover:bg-forest text-white h-12 w-12 flex items-center justify-center rounded-2xl transition-all shadow-md active:scale-95 group/btn",
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/components/features/ProductGrid.tsx",
            lineNumber: 218,
            columnNumber: 11
        }, this);
        $[38] = handleAdd;
        $[39] = t13;
    } else {
        t13 = $[39];
    }
    let t14;
    if ($[40] !== t11 || $[41] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-auto flex items-center justify-between pt-4 border-t border-light-green/10",
            children: [
                t11,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/ProductGrid.tsx",
            lineNumber: 226,
            columnNumber: 11
        }, this);
        $[40] = t11;
        $[41] = t13;
        $[42] = t14;
    } else {
        t14 = $[42];
    }
    let t15;
    if ($[43] !== t14 || $[44] !== t5 || $[45] !== t6 || $[46] !== t7) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 flex flex-col flex-1",
            children: [
                t5,
                t6,
                t7,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/ProductGrid.tsx",
            lineNumber: 235,
            columnNumber: 11
        }, this);
        $[43] = t14;
        $[44] = t5;
        $[45] = t6;
        $[46] = t7;
        $[47] = t15;
    } else {
        t15 = $[47];
    }
    let t16;
    if ($[48] !== t15 || $[49] !== t4) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white group rounded-3xl border border-light-green/20 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full",
            children: [
                t4,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/ProductGrid.tsx",
            lineNumber: 246,
            columnNumber: 11
        }, this);
        $[48] = t15;
        $[49] = t4;
        $[50] = t16;
    } else {
        t16 = $[50];
    }
    return t16;
}
_s(ProductCard, "OZ6qBF+wwTqFEnzHo9JuptOwOqs=", false, function() {
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

//# sourceMappingURL=src_components_features_ProductGrid_tsx_97bad486._.js.map