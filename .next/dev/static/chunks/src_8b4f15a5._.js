(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/stores/useCartStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCartStore",
    ()=>useCartStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
;
;
const useCartStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        items: [],
        addItem: (newItem)=>{
            set((state)=>{
                const existingItem = state.items.find((item)=>item.id === newItem.id && item.pago_tipo === newItem.pago_tipo);
                if (existingItem) {
                    return {
                        items: state.items.map((item)=>item.id === newItem.id && item.pago_tipo === newItem.pago_tipo ? {
                                ...item,
                                cantidad: item.cantidad + 1
                            } : item)
                    };
                }
                return {
                    items: [
                        ...state.items,
                        {
                            ...newItem,
                            cantidad: 1
                        }
                    ]
                };
            });
        },
        removeItem: (id)=>{
            set((state)=>({
                    items: state.items.filter((item)=>item.id !== id)
                }));
        },
        updateQuantity: (id, cantidad)=>{
            set((state)=>({
                    items: state.items.map((item)=>item.id === id ? {
                            ...item,
                            cantidad: Math.max(1, cantidad)
                        } : item)
                }));
        },
        clearCart: ()=>set({
                items: []
            }),
        getTotal: ()=>{
            const { items } = get();
            return items.reduce((total, item)=>total + item.precio * item.cantidad, 0);
        },
        getTotalItems: ()=>{
            const { items } = get();
            return items.reduce((total, item)=>total + item.cantidad, 0);
        }
    }), {
    name: 'escala-cart-storage'
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatCurrency",
    ()=>formatCurrency
]);
function formatCurrency(amount) {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    }).format(amount);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/features/CartSidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CartSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useCartStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function CartSidebar() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { items, removeItem, updateQuantity, getTotal, getTotalItems } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartSidebar.useEffect": ()=>{
            setMounted(true);
        }
    }["CartSidebar.useEffect"], []);
    const handleCheckout = async ()=>{
        try {
            setIsLoading(true);
            const res = await fetch('/api/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    items
                })
            });
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.error || 'Error al procesar el pago');
            }
            // Redirigimos al checkout de Mercado Pago
            if (data.init_point) {
                window.location.href = data.init_point;
            }
        } catch (error) {
            alert(error.message);
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(true),
                className: "relative p-2 text-primary hover:text-forest transition-colors",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "9",
                                cy: "21",
                                r: "1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/CartSidebar.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "20",
                                cy: "21",
                                r: "1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/CartSidebar.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/CartSidebar.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/CartSidebar.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    getTotalItems() > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute top-0 right-0 bg-accent text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full transform translate-x-1 -translate-y-1 shadow-sm",
                        children: getTotalItems()
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/CartSidebar.tsx",
                        lineNumber: 55,
                        columnNumber: 33
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/CartSidebar.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            mounted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 bg-black/60 z-[100] transition-opacity backdrop-blur-sm",
                        onClick: ()=>setIsOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/CartSidebar.tsx",
                        lineNumber: 62,
                        columnNumber: 22
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `fixed top-0 right-0 h-full w-full sm:w-[500px] bg-white shadow-[-20px_0_50px_rgba(0,0,0,0.1)] z-[101] transform transition-transform duration-500 ease-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-8 border-b border-light-green/10 flex items-center justify-between bg-background",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-3xl font-serif text-primary italic",
                                        children: "Tu Selección"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/CartSidebar.tsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsOpen(false),
                                        className: "p-3 text-primary/40 hover:text-primary hover:bg-light-green/10 rounded-2xl transition-all active:scale-90",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "24",
                                            height: "24",
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
                                                    fileName: "[project]/src/components/features/CartSidebar.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "6",
                                                    y1: "6",
                                                    x2: "18",
                                                    y2: "18"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/CartSidebar.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/features/CartSidebar.tsx",
                                            lineNumber: 69,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/CartSidebar.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/CartSidebar.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto p-8 bg-background/30 backdrop-blur-3xl",
                                children: items.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full flex flex-col items-center justify-center text-primary/40 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-20 h-20 bg-light-green/10 rounded-full flex items-center justify-center",
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "9",
                                                        cy: "21",
                                                        r: "1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/features/CartSidebar.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "20",
                                                        cy: "21",
                                                        r: "1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/features/CartSidebar.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/features/CartSidebar.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/features/CartSidebar.tsx",
                                                lineNumber: 79,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/CartSidebar.tsx",
                                            lineNumber: 78,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-serif text-xl text-primary/60",
                                                    children: "Tu carrito está vacío"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/CartSidebar.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setIsOpen(false),
                                                    className: "text-accent font-bold hover:underline mt-2 text-sm",
                                                    children: "Explorar el catálogo"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/CartSidebar.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/features/CartSidebar.tsx",
                                            lineNumber: 85,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/features/CartSidebar.tsx",
                                    lineNumber: 77,
                                    columnNumber: 37
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-8",
                                    children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-6 group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-28 h-28 bg-white rounded-[1.5rem] overflow-hidden shrink-0 relative border border-light-green/10 shadow-sm transition-transform group-hover:scale-105",
                                                    children: item.imagen_url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: item.imagen_url,
                                                        alt: item.nombre,
                                                        className: "w-full h-full object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/features/CartSidebar.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 45
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full h-full flex items-center justify-center text-primary/10 bg-white",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "32",
                                                            height: "32",
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
                                                                    fileName: "[project]/src/components/features/CartSidebar.tsx",
                                                                    lineNumber: 96,
                                                                    columnNumber: 32
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                    points: "17 8 12 3 7 8"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/features/CartSidebar.tsx",
                                                                    lineNumber: 97,
                                                                    columnNumber: 32
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                    x1: "12",
                                                                    y1: "3",
                                                                    x2: "12",
                                                                    y2: "15"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/features/CartSidebar.tsx",
                                                                    lineNumber: 98,
                                                                    columnNumber: 32
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/features/CartSidebar.tsx",
                                                            lineNumber: 95,
                                                            columnNumber: 30
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/features/CartSidebar.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 134
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/CartSidebar.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col flex-1 py-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-start gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "font-serif text-lg text-primary leading-tight line-clamp-2",
                                                                            children: item.nombre
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/features/CartSidebar.tsx",
                                                                            lineNumber: 106,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        item.pago_tipo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[10px] font-bold text-accent uppercase tracking-widest leading-none mt-1 inline-block",
                                                                            children: [
                                                                                "(",
                                                                                item.pago_tipo === 'mensual' ? 'Mensual' : 'Pago Total',
                                                                                ")"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/features/CartSidebar.tsx",
                                                                            lineNumber: 107,
                                                                            columnNumber: 48
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/features/CartSidebar.tsx",
                                                                    lineNumber: 105,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>removeItem(item.id),
                                                                    className: "text-primary/20 hover:text-red-500 transition-colors p-1",
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
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                d: "M3 6h18"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/features/CartSidebar.tsx",
                                                                                lineNumber: 113,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/features/CartSidebar.tsx",
                                                                                lineNumber: 114,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/features/CartSidebar.tsx",
                                                                                lineNumber: 115,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/features/CartSidebar.tsx",
                                                                        lineNumber: 112,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/features/CartSidebar.tsx",
                                                                    lineNumber: 111,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/features/CartSidebar.tsx",
                                                            lineNumber: 104,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-auto flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-4 border border-light-green/10 rounded-2xl px-2 py-1 bg-white shadow-sm",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>updateQuantity(item.id, item.cantidad - 1),
                                                                            className: "w-8 h-8 flex items-center justify-center text-primary/40 hover:text-primary transition-colors font-bold",
                                                                            children: "-"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/features/CartSidebar.tsx",
                                                                            lineNumber: 122,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm font-bold w-4 text-center text-primary",
                                                                            children: item.cantidad
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/features/CartSidebar.tsx",
                                                                            lineNumber: 125,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>updateQuantity(item.id, item.cantidad + 1),
                                                                            className: "w-8 h-8 flex items-center justify-center text-primary/40 hover:text-primary transition-colors font-bold",
                                                                            children: "+"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/features/CartSidebar.tsx",
                                                                            lineNumber: 126,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/features/CartSidebar.tsx",
                                                                    lineNumber: 121,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-serif text-xl text-accent",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(item.precio * item.cantidad)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/features/CartSidebar.tsx",
                                                                    lineNumber: 130,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/features/CartSidebar.tsx",
                                                            lineNumber: 120,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/features/CartSidebar.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, item.id, true, {
                                            fileName: "[project]/src/components/features/CartSidebar.tsx",
                                            lineNumber: 92,
                                            columnNumber: 38
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/CartSidebar.tsx",
                                    lineNumber: 91,
                                    columnNumber: 26
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/CartSidebar.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this),
                            items.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-10 border-t border-light-green/10 bg-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-primary/60 font-serif text-lg italic",
                                                children: "Subtotal"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/CartSidebar.tsx",
                                                lineNumber: 141,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-3xl font-serif text-primary",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(getTotal())
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/CartSidebar.tsx",
                                                lineNumber: 142,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/features/CartSidebar.tsx",
                                        lineNumber: 140,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 mb-8 px-4 py-3 bg-background rounded-2xl border border-light-green/10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "16",
                                                height: "16",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                className: "text-forest",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/CartSidebar.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 189
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/CartSidebar.tsx",
                                                lineNumber: 145,
                                                columnNumber: 20
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] text-primary/60 font-bold uppercase tracking-widest",
                                                children: "Pago 100% Seguro vía Mercado Pago"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/CartSidebar.tsx",
                                                lineNumber: 146,
                                                columnNumber: 20
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/features/CartSidebar.tsx",
                                        lineNumber: 144,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleCheckout,
                                        disabled: isLoading,
                                        className: "w-full bg-primary hover:bg-forest disabled:bg-primary/50 disabled:cursor-not-allowed text-white text-xl font-bold py-6 rounded-[2rem] shadow-2xl shadow-primary/20 transition-all hover:shadow-forest/30 active:scale-[0.98] flex items-center justify-center gap-4 group",
                                        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "animate-spin h-6 w-6 text-white",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    className: "opacity-25",
                                                    cx: "12",
                                                    cy: "12",
                                                    r: "10",
                                                    stroke: "currentColor",
                                                    strokeWidth: "4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/CartSidebar.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    className: "opacity-75",
                                                    fill: "currentColor",
                                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/CartSidebar.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/features/CartSidebar.tsx",
                                            lineNumber: 149,
                                            columnNumber: 32
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "group-hover:translate-x-1 transition-transform",
                                                    children: "Finalizar Pedido"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/CartSidebar.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "20",
                                                    height: "20",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "3",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "5",
                                                            y1: "12",
                                                            x2: "19",
                                                            y2: "12"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/features/CartSidebar.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 166
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                            points: "12 5 19 12 12 19"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/features/CartSidebar.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 210
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/features/CartSidebar.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/CartSidebar.tsx",
                                        lineNumber: 148,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/CartSidebar.tsx",
                                lineNumber: 139,
                                columnNumber: 34
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/CartSidebar.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true), document.body)
        ]
    }, void 0, true);
}
_s(CartSidebar, "9sGIERRKG9+CB6mPvMP6bCeFjhw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"]
    ];
});
_c = CartSidebar;
var _c;
__turbopack_context__.k.register(_c, "CartSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/commerce/(auth)/data:a9cfac [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "signOut",
    ()=>$$RSC_SERVER_ACTION_3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"005e62fb896b1180870f088385bb56892164a9f7d8":"signOut"},"src/app/commerce/(auth)/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("005e62fb896b1180870f088385bb56892164a9f7d8", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "signOut");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcclxuXHJcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSdcclxuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tICduZXh0L25hdmlnYXRpb24nXHJcbmltcG9ydCB7IGhlYWRlcnMgfSBmcm9tICduZXh0L2hlYWRlcnMnXHJcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0AvbGliL3N1cGFiYXNlL3NlcnZlcidcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dpbihmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXHJcblxyXG4gIGNvbnN0IGVtYWlsID0gZm9ybURhdGEuZ2V0KCdlbWFpbCcpIGFzIHN0cmluZ1xyXG4gIGNvbnN0IHBhc3N3b3JkID0gZm9ybURhdGEuZ2V0KCdwYXNzd29yZCcpIGFzIHN0cmluZ1xyXG5cclxuICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLnNpZ25JbldpdGhQYXNzd29yZCh7XHJcbiAgICBlbWFpbCxcclxuICAgIHBhc3N3b3JkLFxyXG4gIH0pXHJcblxyXG4gIGlmIChlcnJvcikge1xyXG4gICAgcmVkaXJlY3QoJy9jb21tZXJjZS9sb2dpbj9tZXNzYWdlPUNyZWRlbmNpYWxlcyBpbnbDoWxpZGFzJylcclxuICB9XHJcblxyXG4gIHJldmFsaWRhdGVQYXRoKCcvJywgJ2xheW91dCcpXHJcbiAgcmVkaXJlY3QoJy9jb21tZXJjZS9kYXNoYm9hcmQnKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2lnbnVwKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcclxuXHJcbiAgY29uc3QgZW1haWwgPSBmb3JtRGF0YS5nZXQoJ2VtYWlsJykgYXMgc3RyaW5nXHJcbiAgY29uc3QgcGFzc3dvcmQgPSBmb3JtRGF0YS5nZXQoJ3Bhc3N3b3JkJykgYXMgc3RyaW5nXHJcbiAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldCgnbmFtZScpIGFzIHN0cmluZ1xyXG5cclxuICBjb25zdCB7IGVycm9yLCBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLnNpZ25VcCh7XHJcbiAgICBlbWFpbCxcclxuICAgIHBhc3N3b3JkLFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbm9tYnJlX2NvbXBsZXRvOiBuYW1lLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICByZWRpcmVjdChgL2NvbW1lcmNlL3JlZ2lzdGVyP21lc3NhZ2U9JHtlcnJvci5tZXNzYWdlfWApXHJcbiAgfVxyXG5cclxuICAvLyBEZXBlbmRpZW5kbyBkZSBzaSBzZSByZXF1aWVyZSBjb25maXJtYWNpw7NuIGRlIGVtYWlsIChTdXBhYmFzZSBjb25maWcpLCBcclxuICByZXZhbGlkYXRlUGF0aCgnLycsICdsYXlvdXQnKVxyXG4gIHJlZGlyZWN0KCcvY29tbWVyY2UvZGFzaGJvYXJkJylcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNpZ25JbldpdGhHb29nbGUoKSB7XHJcbiAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG4gIGNvbnN0IG9yaWdpbiA9IChhd2FpdCBoZWFkZXJzKCkpLmdldCgnb3JpZ2luJylcclxuXHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5zaWduSW5XaXRoT0F1dGgoe1xyXG4gICAgcHJvdmlkZXI6ICdnb29nbGUnLFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICByZWRpcmVjdFRvOiBgJHtvcmlnaW59L2F1dGgvY2FsbGJhY2tgLFxyXG4gICAgfSxcclxuICB9KVxyXG5cclxuICBpZiAoZGF0YS51cmwpIHtcclxuICAgIHJlZGlyZWN0KGRhdGEudXJsKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNpZ25PdXQoKSB7XHJcbiAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG4gIGF3YWl0IHN1cGFiYXNlLmF1dGguc2lnbk91dCgpXHJcbiAgcmV2YWxpZGF0ZVBhdGgoJy8nLCAnbGF5b3V0JylcclxuICByZWRpcmVjdCgnL2NvbW1lcmNlL2xvZ2luJylcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjhSQW9Fc0Isb0xBQUEifQ==
}),
"[project]/src/components/shared/UserDropdown.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UserDropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$commerce$2f28$auth$292f$data$3a$a9cfac__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/commerce/(auth)/data:a9cfac [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function UserDropdown(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(27);
    if ($[0] !== "3fe63132f18846d4a3ca7054682635a3d3d16957e23ebe13e78ab7ebc19f07f2") {
        for(let $i = 0; $i < 27; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3fe63132f18846d4a3ca7054682635a3d3d16957e23ebe13e78ab7ebc19f07f2";
    }
    const { user } = t0;
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "UserDropdown[useEffect()]": ()=>{
                const handleClickOutside = function handleClickOutside(event) {
                    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                        setIsOpen(false);
                    }
                };
                document.addEventListener("mousedown", handleClickOutside);
                return ()=>document.removeEventListener("mousedown", handleClickOutside);
            }
        })["UserDropdown[useEffect()]"];
        t2 = [];
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[3] !== user.email) {
        t3 = user.email?.charAt(0).toUpperCase() || "U";
        $[3] = user.email;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const userInitial = t3;
    let t4;
    if ($[5] !== user.email || $[6] !== user.user_metadata?.nombre_completo) {
        t4 = user.user_metadata?.nombre_completo || user.email?.split("@")[0];
        $[5] = user.email;
        $[6] = user.user_metadata?.nombre_completo;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const userName = t4;
    let t5;
    if ($[8] !== isOpen) {
        t5 = ({
            "UserDropdown[<button>.onClick]": ()=>setIsOpen(!isOpen)
        })["UserDropdown[<button>.onClick]"];
        $[8] = isOpen;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== user.user_metadata || $[11] !== userInitial) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-9 h-9 rounded-full bg-light-green/30 flex items-center justify-center text-primary border border-light-green/50 group-hover:bg-light-green/50 transition-colors shadow-sm overflow-hidden",
            children: user.user_metadata?.avatar_url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: user.user_metadata.avatar_url,
                alt: "Avatar",
                className: "w-full h-full object-cover"
            }, void 0, false, {
                fileName: "[project]/src/components/shared/UserDropdown.tsx",
                lineNumber: 76,
                columnNumber: 249
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-bold text-sm",
                children: userInitial
            }, void 0, false, {
                fileName: "[project]/src/components/shared/UserDropdown.tsx",
                lineNumber: 76,
                columnNumber: 347
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/shared/UserDropdown.tsx",
            lineNumber: 76,
            columnNumber: 10
        }, this);
        $[10] = user.user_metadata;
        $[11] = userInitial;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    const t7 = `w-4 h-4 text-primary/40 group-hover:text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`;
    let t8;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2.5",
            d: "M19 9l-7 7-7-7"
        }, void 0, false, {
            fileName: "[project]/src/components/shared/UserDropdown.tsx",
            lineNumber: 86,
            columnNumber: 10
        }, this);
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] !== t7) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: t7,
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/components/shared/UserDropdown.tsx",
            lineNumber: 93,
            columnNumber: 10
        }, this);
        $[14] = t7;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] !== t5 || $[17] !== t6 || $[18] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t5,
            className: "flex items-center gap-2 group focus:outline-none transition-all",
            children: [
                t6,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/UserDropdown.tsx",
            lineNumber: 101,
            columnNumber: 11
        }, this);
        $[16] = t5;
        $[17] = t6;
        $[18] = t9;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] !== isOpen || $[21] !== user.email || $[22] !== userName) {
        t11 = isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute right-0 mt-3 w-64 bg-white/90 backdrop-blur-xl rounded-[1.5rem] shadow-2xl border border-light-green/20 py-3 z-50 animate-in fade-in zoom-in duration-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-5 py-3 border-b border-light-green/10 mb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-bold text-primary/40 uppercase tracking-widest mb-1",
                            children: "Cuenta"
                        }, void 0, false, {
                            fileName: "[project]/src/components/shared/UserDropdown.tsx",
                            lineNumber: 111,
                            columnNumber: 264
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-serif text-primary truncate leading-tight",
                            children: userName
                        }, void 0, false, {
                            fileName: "[project]/src/components/shared/UserDropdown.tsx",
                            lineNumber: 111,
                            columnNumber: 354
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[10px] text-primary/40 truncate",
                            children: user.email
                        }, void 0, false, {
                            fileName: "[project]/src/components/shared/UserDropdown.tsx",
                            lineNumber: 111,
                            columnNumber: 430
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/shared/UserDropdown.tsx",
                    lineNumber: 111,
                    columnNumber: 201
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            onClick: {
                                "UserDropdown[<Link>.onClick]": ()=>setIsOpen(false)
                            }["UserDropdown[<Link>.onClick]"],
                            className: "px-5 py-2.5 text-sm text-primary/80 hover:text-primary hover:bg-light-green/10 transition-colors flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-4 h-4",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/UserDropdown.tsx",
                                        lineNumber: 113,
                                        columnNumber: 256
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/UserDropdown.tsx",
                                    lineNumber: 113,
                                    columnNumber: 177
                                }, this),
                                "Inicio"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shared/UserDropdown.tsx",
                            lineNumber: 111,
                            columnNumber: 535
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/commerce/shop",
                            onClick: {
                                "UserDropdown[<Link>.onClick]": ()=>setIsOpen(false)
                            }["UserDropdown[<Link>.onClick]"],
                            className: "px-5 py-2.5 text-sm text-primary/80 hover:text-primary hover:bg-light-green/10 transition-colors flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-4 h-4",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/UserDropdown.tsx",
                                        lineNumber: 115,
                                        columnNumber: 256
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/UserDropdown.tsx",
                                    lineNumber: 115,
                                    columnNumber: 177
                                }, this),
                                "Catálogo"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shared/UserDropdown.tsx",
                            lineNumber: 113,
                            columnNumber: 493
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/commerce/dashboard",
                            onClick: {
                                "UserDropdown[<Link>.onClick]": ()=>setIsOpen(false)
                            }["UserDropdown[<Link>.onClick]"],
                            className: "px-5 py-2.5 text-sm text-primary/80 hover:text-primary hover:bg-light-green/10 transition-colors flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-4 h-4",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.168.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/UserDropdown.tsx",
                                        lineNumber: 117,
                                        columnNumber: 256
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/UserDropdown.tsx",
                                    lineNumber: 117,
                                    columnNumber: 177
                                }, this),
                                "Mi Panel"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shared/UserDropdown.tsx",
                            lineNumber: 115,
                            columnNumber: 393
                        }, this),
                        user.email?.includes("admin") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/admin",
                            onClick: {
                                "UserDropdown[<Link>.onClick]": ()=>setIsOpen(false)
                            }["UserDropdown[<Link>.onClick]"],
                            className: "px-5 py-2.5 text-sm text-accent hover:bg-accent/5 transition-colors flex items-center gap-3 font-semibold",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-4 h-4",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shared/UserDropdown.tsx",
                                            lineNumber: 119,
                                            columnNumber: 241
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shared/UserDropdown.tsx",
                                            lineNumber: 119,
                                            columnNumber: 798
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/shared/UserDropdown.tsx",
                                    lineNumber: 119,
                                    columnNumber: 162
                                }, this),
                                "Administración"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shared/UserDropdown.tsx",
                            lineNumber: 117,
                            columnNumber: 627
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 pt-2 border-t border-light-green/10 px-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                action: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$commerce$2f28$auth$292f$data$3a$a9cfac__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["signOut"],
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "w-full text-left px-3 py-2.5 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 transition-all rounded-xl flex items-center gap-3 font-medium",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "2",
                                                d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/shared/UserDropdown.tsx",
                                                lineNumber: 119,
                                                columnNumber: 1278
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shared/UserDropdown.tsx",
                                            lineNumber: 119,
                                            columnNumber: 1199
                                        }, this),
                                        "Cerrar Sesión"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/shared/UserDropdown.tsx",
                                    lineNumber: 119,
                                    columnNumber: 1018
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/UserDropdown.tsx",
                                lineNumber: 119,
                                columnNumber: 995
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/shared/UserDropdown.tsx",
                            lineNumber: 119,
                            columnNumber: 932
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/shared/UserDropdown.tsx",
                    lineNumber: 111,
                    columnNumber: 504
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/UserDropdown.tsx",
            lineNumber: 111,
            columnNumber: 21
        }, this);
        $[20] = isOpen;
        $[21] = user.email;
        $[22] = userName;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    let t12;
    if ($[24] !== t10 || $[25] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            ref: dropdownRef,
            children: [
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/UserDropdown.tsx",
            lineNumber: 129,
            columnNumber: 11
        }, this);
        $[24] = t10;
        $[25] = t11;
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    return t12;
}
_s(UserDropdown, "uhOyve9TWk+bvhPJTPlaMsUEQAY=");
_c = UserDropdown;
var _c;
__turbopack_context__.k.register(_c, "UserDropdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/stores/useAuthModalStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuthModalStore",
    ()=>useAuthModalStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useAuthModalStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        isOpen: false,
        view: 'login',
        openModal: (view = 'login')=>set({
                isOpen: true,
                view
            }),
        closeModal: ()=>set({
                isOpen: false
            }),
        setView: (view)=>set({
                view
            })
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/NavbarActions.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NavbarActions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$CartSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/CartSidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$UserDropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/UserDropdown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthModalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthModalStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function NavbarActions(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "488bf2be1408d5953993a5bbee9ed915ee32ada2f538bf4a141376be50ab3f2c") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "488bf2be1408d5953993a5bbee9ed915ee32ada2f538bf4a141376be50ab3f2c";
    }
    const { user } = t0;
    const { openModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthModalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthModalStore"])();
    let t1;
    if ($[1] !== user) {
        t1 = user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$CartSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/shared/NavbarActions.tsx",
                lineNumber: 25,
                columnNumber: 59
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/shared/NavbarActions.tsx",
            lineNumber: 25,
            columnNumber: 18
        }, this);
        $[1] = user;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-px h-8 bg-primary/10"
        }, void 0, false, {
            fileName: "[project]/src/components/shared/NavbarActions.tsx",
            lineNumber: 33,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== openModal || $[5] !== user) {
        t3 = user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$UserDropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            user: user
        }, void 0, false, {
            fileName: "[project]/src/components/shared/NavbarActions.tsx",
            lineNumber: 40,
            columnNumber: 17
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: {
                "NavbarActions[<button>.onClick]": ()=>openModal("login")
            }["NavbarActions[<button>.onClick]"],
            className: "bg-primary hover:bg-forest text-white px-7 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg active:scale-95",
            children: "Ingresar"
        }, void 0, false, {
            fileName: "[project]/src/components/shared/NavbarActions.tsx",
            lineNumber: 40,
            columnNumber: 48
        }, this);
        $[4] = openModal;
        $[5] = user;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t1 || $[8] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4 sm:gap-6",
            children: [
                t1,
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/NavbarActions.tsx",
            lineNumber: 51,
            columnNumber: 10
        }, this);
        $[7] = t1;
        $[8] = t3;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    return t4;
}
_s(NavbarActions, "eYDfV74lsf4GesdtYjU1Vk0jD4k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthModalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthModalStore"]
    ];
});
_c = NavbarActions;
var _c;
__turbopack_context__.k.register(_c, "NavbarActions");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/DynamicLayoutWrapper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DynamicLayoutWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function DynamicLayoutWrapper(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "d43b351609ebed84595d825c90585717de8091f6c31560e8a47e1fd817a1a49c") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d43b351609ebed84595d825c90585717de8091f6c31560e8a47e1fd817a1a49c";
    }
    const { navbar, children } = t0;
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    let t1;
    if ($[1] !== pathname) {
        t1 = pathname.startsWith("/landing");
        $[1] = pathname;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const isLanding = t1;
    const isRoot = pathname === "/";
    let t2;
    if ($[3] !== pathname) {
        t2 = pathname.startsWith("/commerce/admin");
        $[3] = pathname;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const isAdmin = t2;
    const hideLayoutElements = isLanding || isRoot || isAdmin;
    const t3 = !hideLayoutElements && navbar;
    const t4 = `flex-1 relative flex flex-col ${hideLayoutElements ? "" : "pt-24 md:pt-28"}`;
    let t5;
    if ($[5] !== children || $[6] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: t4,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/layout/DynamicLayoutWrapper.tsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[5] = children;
        $[6] = t4;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== t3 || $[9] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t3,
                t5
            ]
        }, void 0, true);
        $[8] = t3;
        $[9] = t5;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    return t6;
}
_s(DynamicLayoutWrapper, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = DynamicLayoutWrapper;
var _c;
__turbopack_context__.k.register(_c, "DynamicLayoutWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/supabase/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-client] (ecmascript)");
;
function createClient() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBrowserClient"])(("TURBOPACK compile-time value", "https://kpzjdiuyikpbnljukifi.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtwempkaXV5aWtwYm5sanVraWZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM4MDEwMDYsImV4cCI6MjA4OTM3NzAwNn0.IDbHBNqL23sUauyHiocb99PnvE4jy63o5lCn7BaIeYg"));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/actions/data:c84a64 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendWelcomeAction",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"60e8879e2c388988fe6adbef7524dc7676194f385e":"sendWelcomeAction"},"src/app/actions/emails.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60e8879e2c388988fe6adbef7524dc7676194f385e", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "sendWelcomeAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZW1haWxzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJ1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBzZW5kRW1haWwgfSBmcm9tICdAL2xpYi9tYWlsJ1xuaW1wb3J0IHsgV2VsY29tZVRlbXBsYXRlIH0gZnJvbSAnQC9jb21wb25lbnRzL2VtYWlscy9XZWxjb21lVGVtcGxhdGUnXG5pbXBvcnQgeyBQdXJjaGFzZVRlbXBsYXRlIH0gZnJvbSAnQC9jb21wb25lbnRzL2VtYWlscy9QdXJjaGFzZVRlbXBsYXRlJ1xuaW1wb3J0IHsgQWRtaW5TYWxlVGVtcGxhdGUgfSBmcm9tICdAL2NvbXBvbmVudHMvZW1haWxzL0FkbWluU2FsZVRlbXBsYXRlJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VuZFdlbGNvbWVBY3Rpb24oZW1haWw6IHN0cmluZywgbm9tYnJlOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGF3YWl0IHNlbmRFbWFpbCh7XG4gICAgdG86IGVtYWlsLFxuICAgIHN1YmplY3Q6ICfCoUJpZW52ZW5pZG8vYSBhIGxhIEVzY3VlbGEgZGUgUGFpc2FqaXNtbyEg8J+MvycsXG4gICAgcmVhY3Q6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2VsY29tZVRlbXBsYXRlLCB7IG5vbWJyZSB9KVxuICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VuZFB1cmNoYXNlTm90aWZpY2F0aW9uQWN0aW9uKFxuICBjbGllbnRlRW1haWw6IHN0cmluZywgXG4gIGNsaWVudGVOb21icmU6IHN0cmluZywgXG4gIGl0ZW1zOiBhbnlbXSwgXG4gIHRvdGFsOiBudW1iZXJcbikge1xuICAvLyAxLiBFbnZpYXIgYWwgYWx1bW5vXG4gIGF3YWl0IHNlbmRFbWFpbCh7XG4gICAgdG86IGNsaWVudGVFbWFpbCxcbiAgICBzdWJqZWN0OiAnQ29uZmlybWFjacOzbiBkZSB0dSBjb21wcmEgLSBFc2NhbGEgRGlnaXRhbCDwn5uSJyxcbiAgICByZWFjdDogUmVhY3QuY3JlYXRlRWxlbWVudChQdXJjaGFzZVRlbXBsYXRlLCB7IG5vbWJyZTogY2xpZW50ZU5vbWJyZSwgaXRlbXMsIHRvdGFsIH0pXG4gIH0pXG5cbiAgLy8gMi4gRW52aWFyIGEgTWFyaWFuYSAoQWRtaW4pXG4gIC8vIE5vdGE6IEVuIHByb2R1Y2Npw7NuLCBNQVJJQU5BX0VNQUlMIGRlYmVyw61hIGVzdGFyIGVuIC5lbnZcbiAgY29uc3QgYWRtaW5FbWFpbCA9IHByb2Nlc3MuZW52Lk1BUklBTkFfRU1BSUwgfHwgJ2VzY3VlbGFpc2FqaXNtb0BnbWFpbC5jb20nIFxuICBcbiAgYXdhaXQgc2VuZEVtYWlsKHtcbiAgICB0bzogYWRtaW5FbWFpbCxcbiAgICBzdWJqZWN0OiAnwqFOdWV2YSB2ZW50YSByZWFsaXphZGEhIPCfjL/wn5KwJyxcbiAgICByZWFjdDogUmVhY3QuY3JlYXRlRWxlbWVudChBZG1pblNhbGVUZW1wbGF0ZSwgeyBcbiAgICAgIGNsaWVudGVOb21icmUsIFxuICAgICAgY2xpZW50ZUVtYWlsLCBcbiAgICAgIGl0ZW1zLCBcbiAgICAgIHRvdGFsIFxuICAgIH0pXG4gIH0pXG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IitSQVFzQiw4TEFBQSJ9
}),
"[project]/src/components/features/AuthModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthModalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthModalStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$c84a64__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:c84a64 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function AuthModal() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(76);
    if ($[0] !== "db099689465d7121b57b942e8db4234fbe84bcba738b2607c11d01bd3042e80e") {
        for(let $i = 0; $i < 76; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "db099689465d7121b57b942e8db4234fbe84bcba738b2607c11d01bd3042e80e";
    }
    const { isOpen, view, closeModal, setView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthModalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthModalStore"])();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [origin, setOrigin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const supabase = t0;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "AuthModal[useEffect()]": ()=>{
                if ("TURBOPACK compile-time truthy", 1) {
                    setOrigin(window.location.origin);
                }
            }
        })["AuthModal[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    if (!isOpen) {
        return null;
    }
    let t3;
    if ($[4] !== closeModal) {
        t3 = ({
            "AuthModal[handleOverlayClick]": (e)=>{
                if (e.target === e.currentTarget) {
                    closeModal();
                }
            }
        })["AuthModal[handleOverlayClick]"];
        $[4] = closeModal;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const handleOverlayClick = t3;
    let t4;
    if ($[6] !== origin) {
        t4 = ({
            "AuthModal[handleGoogleLogin]": async ()=>{
                setLoading(true);
                const { error: error_0 } = await supabase.auth.signInWithOAuth({
                    provider: "google",
                    options: {
                        redirectTo: `${origin}/auth/callback`
                    }
                });
                if (error_0) {
                    setError(error_0.message);
                }
                setLoading(false);
            }
        })["AuthModal[handleGoogleLogin]"];
        $[6] = origin;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const handleGoogleLogin = t4;
    let t5;
    if ($[8] !== closeModal || $[9] !== email || $[10] !== name || $[11] !== password || $[12] !== router || $[13] !== setView || $[14] !== view) {
        t5 = ({
            "AuthModal[handleEmailAuth]": async (e_0)=>{
                e_0.preventDefault();
                setLoading(true);
                setError(null);
                if (view === "login") {
                    const { error: error_1 } = await supabase.auth.signInWithPassword({
                        email,
                        password
                    });
                    if (error_1) {
                        setError("Credenciales inv\xE1lidas");
                    } else {
                        closeModal();
                        router.refresh();
                    }
                } else {
                    const { error: error_2 } = await supabase.auth.signUp({
                        email,
                        password,
                        options: {
                            data: {
                                nombre_completo: name
                            }
                        }
                    });
                    if (error_2) {
                        setError(error_2.message);
                    } else {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$c84a64__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["sendWelcomeAction"])(email, name).catch(console.error);
                        setError("\xA1Registro exitoso! Por favor verifica tu email o inicia sesi\xF3n.");
                        setTimeout({
                            "AuthModal[handleEmailAuth > setTimeout()]": ()=>setView("login")
                        }["AuthModal[handleEmailAuth > setTimeout()]"], 2000);
                    }
                }
                setLoading(false);
            }
        })["AuthModal[handleEmailAuth]"];
        $[8] = closeModal;
        $[9] = email;
        $[10] = name;
        $[11] = password;
        $[12] = router;
        $[13] = setView;
        $[14] = view;
        $[15] = t5;
    } else {
        t5 = $[15];
    }
    const handleEmailAuth = t5;
    const t6 = view === "login" ? "Bienvenido " : "Crea tu ";
    const t7 = view === "login" ? "de vuelta" : "cuenta";
    let t8;
    if ($[16] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-accent italic",
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/components/features/AuthModal.tsx",
            lineNumber: 160,
            columnNumber: 10
        }, this);
        $[16] = t7;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] !== t6 || $[19] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "font-serif text-3xl text-primary leading-tight",
            children: [
                t6,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/AuthModal.tsx",
            lineNumber: 168,
            columnNumber: 10
        }, this);
        $[18] = t6;
        $[19] = t8;
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    const t10 = view === "login" ? "Ingresa a tu jard\xEDn de conocimientos" : "\xDAnete a nuestra comunidad de paisajistas";
    let t11;
    if ($[21] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-primary/60 mt-1 text-sm italic",
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/components/features/AuthModal.tsx",
            lineNumber: 178,
            columnNumber: 11
        }, this);
        $[21] = t10;
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    let t12;
    if ($[23] !== t11 || $[24] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t9,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/AuthModal.tsx",
            lineNumber: 186,
            columnNumber: 11
        }, this);
        $[23] = t11;
        $[24] = t9;
        $[25] = t12;
    } else {
        t12 = $[25];
    }
    let t13;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "24",
            height: "24",
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
                    fileName: "[project]/src/components/features/AuthModal.tsx",
                    lineNumber: 195,
                    columnNumber: 154
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "6",
                    y1: "6",
                    x2: "18",
                    y2: "18"
                }, void 0, false, {
                    fileName: "[project]/src/components/features/AuthModal.tsx",
                    lineNumber: 195,
                    columnNumber: 192
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/AuthModal.tsx",
            lineNumber: 195,
            columnNumber: 11
        }, this);
        $[26] = t13;
    } else {
        t13 = $[26];
    }
    let t14;
    if ($[27] !== closeModal) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: closeModal,
            className: "text-primary/40 hover:text-primary transition-colors p-2",
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/components/features/AuthModal.tsx",
            lineNumber: 202,
            columnNumber: 11
        }, this);
        $[27] = closeModal;
        $[28] = t14;
    } else {
        t14 = $[28];
    }
    let t15;
    if ($[29] !== t12 || $[30] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-start mb-8",
            children: [
                t12,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/AuthModal.tsx",
            lineNumber: 210,
            columnNumber: 11
        }, this);
        $[29] = t12;
        $[30] = t14;
        $[31] = t15;
    } else {
        t15 = $[31];
    }
    let t16;
    if ($[32] !== name || $[33] !== view) {
        t16 = view === "register" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "text-xs font-bold text-primary/40 uppercase tracking-widest ml-1",
                    children: "Nombre Completo"
                }, void 0, false, {
                    fileName: "[project]/src/components/features/AuthModal.tsx",
                    lineNumber: 219,
                    columnNumber: 61
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    placeholder: "Tu nombre",
                    value: name,
                    onChange: {
                        "AuthModal[<input>.onChange]": (e_1)=>setName(e_1.target.value)
                    }["AuthModal[<input>.onChange]"],
                    className: "w-full rounded-2xl border border-light-green/20 bg-primary/5 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all font-sans",
                    required: true
                }, void 0, false, {
                    fileName: "[project]/src/components/features/AuthModal.tsx",
                    lineNumber: 219,
                    columnNumber: 168
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/AuthModal.tsx",
            lineNumber: 219,
            columnNumber: 34
        }, this);
        $[32] = name;
        $[33] = view;
        $[34] = t16;
    } else {
        t16 = $[34];
    }
    let t17;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-xs font-bold text-primary/40 uppercase tracking-widest ml-1",
            children: "Email"
        }, void 0, false, {
            fileName: "[project]/src/components/features/AuthModal.tsx",
            lineNumber: 230,
            columnNumber: 11
        }, this);
        $[35] = t17;
    } else {
        t17 = $[35];
    }
    let t18;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = ({
            "AuthModal[<input>.onChange]": (e_2)=>setEmail(e_2.target.value)
        })["AuthModal[<input>.onChange]"];
        $[36] = t18;
    } else {
        t18 = $[36];
    }
    let t19;
    if ($[37] !== email) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-1",
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "email",
                    placeholder: "tu@email.com",
                    value: email,
                    onChange: t18,
                    className: "w-full rounded-2xl border border-light-green/20 bg-primary/5 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all font-sans",
                    required: true
                }, void 0, false, {
                    fileName: "[project]/src/components/features/AuthModal.tsx",
                    lineNumber: 246,
                    columnNumber: 43
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/AuthModal.tsx",
            lineNumber: 246,
            columnNumber: 11
        }, this);
        $[37] = email;
        $[38] = t19;
    } else {
        t19 = $[38];
    }
    let t20;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-xs font-bold text-primary/40 uppercase tracking-widest ml-1",
            children: "Contraseña"
        }, void 0, false, {
            fileName: "[project]/src/components/features/AuthModal.tsx",
            lineNumber: 254,
            columnNumber: 11
        }, this);
        $[39] = t20;
    } else {
        t20 = $[39];
    }
    let t21;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = ({
            "AuthModal[<input>.onChange]": (e_3)=>setPassword(e_3.target.value)
        })["AuthModal[<input>.onChange]"];
        $[40] = t21;
    } else {
        t21 = $[40];
    }
    let t22;
    if ($[41] !== password) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-1",
            children: [
                t20,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "password",
                    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
                    value: password,
                    onChange: t21,
                    className: "w-full rounded-2xl border border-light-green/20 bg-primary/5 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all font-sans",
                    required: true
                }, void 0, false, {
                    fileName: "[project]/src/components/features/AuthModal.tsx",
                    lineNumber: 270,
                    columnNumber: 43
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/AuthModal.tsx",
            lineNumber: 270,
            columnNumber: 11
        }, this);
        $[41] = password;
        $[42] = t22;
    } else {
        t22 = $[42];
    }
    let t23;
    if ($[43] !== error) {
        t23 = error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `text-sm p-3 rounded-xl border font-medium text-center ${error.includes("exitoso") ? "bg-green-50 text-green-600 border-green-100" : "bg-red-50 text-red-600 border-red-100"}`,
            children: error
        }, void 0, false, {
            fileName: "[project]/src/components/features/AuthModal.tsx",
            lineNumber: 278,
            columnNumber: 20
        }, this);
        $[43] = error;
        $[44] = t23;
    } else {
        t23 = $[44];
    }
    const t24 = loading ? "Procesando..." : view === "login" ? "Iniciar Sesi\xF3n" : "Registrarse";
    let t25;
    if ($[45] !== loading || $[46] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            disabled: loading,
            className: "w-full bg-primary hover:bg-forest text-white rounded-2xl py-4 font-bold transition-all shadow-lg active:scale-95 disabled:opacity-50 disabled:scale-100 mt-2",
            children: t24
        }, void 0, false, {
            fileName: "[project]/src/components/features/AuthModal.tsx",
            lineNumber: 287,
            columnNumber: 11
        }, this);
        $[45] = loading;
        $[46] = t24;
        $[47] = t25;
    } else {
        t25 = $[47];
    }
    let t26;
    if ($[48] !== handleEmailAuth || $[49] !== t16 || $[50] !== t19 || $[51] !== t22 || $[52] !== t23 || $[53] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleEmailAuth,
            className: "space-y-4",
            children: [
                t16,
                t19,
                t22,
                t23,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/AuthModal.tsx",
            lineNumber: 296,
            columnNumber: 11
        }, this);
        $[48] = handleEmailAuth;
        $[49] = t16;
        $[50] = t19;
        $[51] = t22;
        $[52] = t23;
        $[53] = t25;
        $[54] = t26;
    } else {
        t26 = $[54];
    }
    let t27;
    if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4 my-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 h-px bg-light-green/10"
                }, void 0, false, {
                    fileName: "[project]/src/components/features/AuthModal.tsx",
                    lineNumber: 309,
                    columnNumber: 57
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs font-bold text-primary/30 uppercase tracking-widest font-sans",
                    children: "O continua con"
                }, void 0, false, {
                    fileName: "[project]/src/components/features/AuthModal.tsx",
                    lineNumber: 309,
                    columnNumber: 106
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 h-px bg-light-green/10"
                }, void 0, false, {
                    fileName: "[project]/src/components/features/AuthModal.tsx",
                    lineNumber: 309,
                    columnNumber: 215
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/AuthModal.tsx",
            lineNumber: 309,
            columnNumber: 11
        }, this);
        $[55] = t27;
    } else {
        t27 = $[55];
    }
    let t28;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M22.56 12.25C22.56 11.47 22.49 10.74 22.36 10.04H12V14.22H17.93C17.67 15.58 16.92 16.73 15.77 17.49V20.21H19.33C21.41 18.29 22.56 15.51 22.56 12.25Z",
                    fill: "#4285F4"
                }, void 0, false, {
                    fileName: "[project]/src/components/features/AuthModal.tsx",
                    lineNumber: 316,
                    columnNumber: 106
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 23C14.97 23 17.46 22.02 19.33 20.21L15.77 17.49C14.76 18.17 13.48 18.57 12 18.57C9.13 18.57 6.69 16.63 5.81 14.04H2.14V16.89C3.96 20.5 7.69 23 12 23Z",
                    fill: "#34A853"
                }, void 0, false, {
                    fileName: "[project]/src/components/features/AuthModal.tsx",
                    lineNumber: 316,
                    columnNumber: 282
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M5.81 14.04C5.58 13.36 5.45 12.64 5.45 11.89C5.45 11.14 5.58 10.42 5.81 9.74V6.89H2.14C1.39 8.39 0.95 10.09 0.95 11.89C0.95 13.69 1.39 15.39 2.14 16.89L5.81 14.04Z",
                    fill: "#FBBC05"
                }, void 0, false, {
                    fileName: "[project]/src/components/features/AuthModal.tsx",
                    lineNumber: 316,
                    columnNumber: 463
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 5.21C13.62 5.21 15.07 5.77 16.21 6.87L19.41 3.67C17.45 1.83 14.97 0.780029 12 0.780029C7.69 0.780029 3.96 3.28003 2.14 6.89003L5.81 9.74003C6.69 7.15003 9.13 5.21 12 5.21Z",
                    fill: "#EA4335"
                }, void 0, false, {
                    fileName: "[project]/src/components/features/AuthModal.tsx",
                    lineNumber: 316,
                    columnNumber: 654
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/AuthModal.tsx",
            lineNumber: 316,
            columnNumber: 11
        }, this);
        $[56] = t28;
    } else {
        t28 = $[56];
    }
    let t29;
    if ($[57] !== handleGoogleLogin) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleGoogleLogin,
            className: "w-full bg-white border border-light-green/20 hover:bg-primary/5 text-primary rounded-2xl py-3 font-semibold transition-all flex items-center justify-center gap-3 shadow-sm active:scale-95",
            children: [
                t28,
                "Google"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/AuthModal.tsx",
            lineNumber: 323,
            columnNumber: 11
        }, this);
        $[57] = handleGoogleLogin;
        $[58] = t29;
    } else {
        t29 = $[58];
    }
    let t30;
    if ($[59] !== setView || $[60] !== view) {
        t30 = ({
            "AuthModal[<button>.onClick]": ()=>setView(view === "login" ? "register" : "login")
        })["AuthModal[<button>.onClick]"];
        $[59] = setView;
        $[60] = view;
        $[61] = t30;
    } else {
        t30 = $[61];
    }
    const t31 = view === "login" ? "\xBFA\xFAn no tienes cuenta? " : "\xBFYa tienes cuenta? ";
    const t32 = view === "login" ? "Reg\xEDstrate aqu\xED" : "Inicia sesi\xF3n";
    let t33;
    if ($[62] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-forest font-bold not-italic hover:underline ml-1",
            children: t32
        }, void 0, false, {
            fileName: "[project]/src/components/features/AuthModal.tsx",
            lineNumber: 344,
            columnNumber: 11
        }, this);
        $[62] = t32;
        $[63] = t33;
    } else {
        t33 = $[63];
    }
    let t34;
    if ($[64] !== t30 || $[65] !== t31 || $[66] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-8 text-center text-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: t30,
                className: "text-primary/60 hover:text-forest transition-colors font-sans italic",
                children: [
                    t31,
                    t33
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/AuthModal.tsx",
                lineNumber: 352,
                columnNumber: 53
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/features/AuthModal.tsx",
            lineNumber: 352,
            columnNumber: 11
        }, this);
        $[64] = t30;
        $[65] = t31;
        $[66] = t33;
        $[67] = t34;
    } else {
        t34 = $[67];
    }
    let t35;
    if ($[68] !== t15 || $[69] !== t26 || $[70] !== t29 || $[71] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden border border-light-green/20 animate-in zoom-in-95 duration-300",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-8 sm:p-10",
                children: [
                    t15,
                    t26,
                    t27,
                    t29,
                    t34
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/AuthModal.tsx",
                lineNumber: 362,
                columnNumber: 161
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/features/AuthModal.tsx",
            lineNumber: 362,
            columnNumber: 11
        }, this);
        $[68] = t15;
        $[69] = t26;
        $[70] = t29;
        $[71] = t34;
        $[72] = t35;
    } else {
        t35 = $[72];
    }
    let t36;
    if ($[73] !== handleOverlayClick || $[74] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-[2000] flex items-center justify-center bg-primary/20 backdrop-blur-sm p-4 animate-in fade-in duration-300",
            onClick: handleOverlayClick,
            children: t35
        }, void 0, false, {
            fileName: "[project]/src/components/features/AuthModal.tsx",
            lineNumber: 373,
            columnNumber: 11
        }, this);
        $[73] = handleOverlayClick;
        $[74] = t35;
        $[75] = t36;
    } else {
        t36 = $[75];
    }
    return t36;
}
_s(AuthModal, "714qnCwYUgRFrTM5ClLK1Ij+yVU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthModalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthModalStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AuthModal;
var _c;
__turbopack_context__.k.register(_c, "AuthModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/providers/ModalProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ModalProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$AuthModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/AuthModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ModalProvider() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "bdfdf6df6a6d9ddd22572071002c351868a27b98df99066c05d5aebbef1829c2") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bdfdf6df6a6d9ddd22572071002c351868a27b98df99066c05d5aebbef1829c2";
    }
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "ModalProvider[useEffect()]": ()=>{
                setIsMounted(true);
            }
        })["ModalProvider[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    if (!isMounted) {
        return null;
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$AuthModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/providers/ModalProvider.tsx",
                lineNumber: 36,
                columnNumber: 12
            }, this)
        }, void 0, false);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_s(ModalProvider, "h7njlszr1nxUzrk46zHyBTBrvgI=");
_c = ModalProvider;
var _c;
__turbopack_context__.k.register(_c, "ModalProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_8b4f15a5._.js.map