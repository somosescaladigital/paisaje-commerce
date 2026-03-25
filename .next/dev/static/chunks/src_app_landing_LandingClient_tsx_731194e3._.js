(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/landing/LandingClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LandingClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function LandingClient() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "62d92f625db0e0d24dd81ebc362c1598f20615aa84b35b79862986e8d21a927e") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "62d92f625db0e0d24dd81ebc362c1598f20615aa84b35b79862986e8d21a927e";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(_LandingClientUseEffect, t0);
    return null;
}
_s(LandingClient, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = LandingClient;
function _LandingClientUseEffect() {
    const navbar = document.getElementById("navbar");
    const handleScroll = {
        "LandingClient[useEffect() > handleScroll]": ()=>{
            if (navbar) {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            }
        }
    }["LandingClient[useEffect() > handleScroll]"];
    window.addEventListener("scroll", handleScroll);
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    const handleHamburgerClick = {
        "LandingClient[useEffect() > handleHamburgerClick]": ()=>{
            if (navLinks && hamburger) {
                navLinks.classList.toggle("active");
                hamburger.classList.toggle("active");
            }
        }
    }["LandingClient[useEffect() > handleHamburgerClick]"];
    if (hamburger && navLinks) {
        hamburger.addEventListener("click", handleHamburgerClick);
        const links = navLinks.querySelectorAll("a");
        links.forEach({
            "LandingClient[useEffect() > links.forEach()]": (link)=>{
                link.addEventListener("click", {
                    "LandingClient[useEffect() > links.forEach() > link.addEventListener()]": ()=>{
                        navLinks.classList.remove("active");
                        hamburger.classList.remove("active");
                    }
                }["LandingClient[useEffect() > links.forEach() > link.addEventListener()]"]);
            }
        }["LandingClient[useEffect() > links.forEach()]"]);
    }
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15
    };
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach({
            "LandingClient[useEffect() > <anonymous> > entries.forEach()]": (entry)=>{
                if (entry.isIntersecting) {
                    entry.target.classList.add("appear");
                    observer.unobserve(entry.target);
                }
            }
        }["LandingClient[useEffect() > <anonymous> > entries.forEach()]"]);
    }, observerOptions);
    const animatedElements = document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right");
    animatedElements.forEach({
        "LandingClient[useEffect() > animatedElements.forEach()]": (el)=>observer.observe(el)
    }["LandingClient[useEffect() > animatedElements.forEach()]"]);
    return ()=>{
        window.removeEventListener("scroll", handleScroll);
        if (hamburger) {
            hamburger.removeEventListener("click", handleHamburgerClick);
        }
        animatedElements.forEach({
            "LandingClient[useEffect() > <anonymous> > animatedElements.forEach()]": (el_0)=>observer.unobserve(el_0)
        }["LandingClient[useEffect() > <anonymous> > animatedElements.forEach()]"]);
    };
}
var _c;
__turbopack_context__.k.register(_c, "LandingClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_landing_LandingClient_tsx_731194e3._.js.map