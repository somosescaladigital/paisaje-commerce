module.exports = [
"[project]/src/app/landing/LandingClient.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LandingClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function LandingClient() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        const handleScroll = ()=>{
            if (navbar) {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        // Mobile menu toggle
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('nav-links');
        const handleHamburgerClick = ()=>{
            if (navLinks && hamburger) {
                navLinks.classList.toggle('active');
                hamburger.classList.toggle('active');
            }
        };
        if (hamburger && navLinks) {
            hamburger.addEventListener('click', handleHamburgerClick);
            // Close mobile menu when clicking a link
            const links = navLinks.querySelectorAll('a');
            links.forEach((link)=>{
                link.addEventListener('click', ()=>{
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('active');
                });
            });
        }
        // Intersection Observer for scroll animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    entry.target.classList.add('appear');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
        animatedElements.forEach((el)=>observer.observe(el));
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
            if (hamburger) {
                hamburger.removeEventListener('click', handleHamburgerClick);
            }
            animatedElements.forEach((el)=>observer.unobserve(el));
        };
    }, []);
    return null;
}
}),
];

//# sourceMappingURL=src_app_landing_LandingClient_tsx_46a1dd46._.js.map