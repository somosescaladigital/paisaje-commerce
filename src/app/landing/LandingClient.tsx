'use client';

import { useEffect } from 'react';

export default function LandingClient() {
    useEffect(() => {
        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        const handleScroll = () => {
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

        const handleHamburgerClick = () => {
            if (navLinks && hamburger) {
                navLinks.classList.toggle('active');
                hamburger.classList.toggle('active');
            }
        };

        if (hamburger && navLinks) {
            hamburger.addEventListener('click', handleHamburgerClick);

            // Close mobile menu when clicking a link
            const links = navLinks.querySelectorAll('a');
            links.forEach(link => {
                link.addEventListener('click', () => {
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

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('appear');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
        animatedElements.forEach(el => observer.observe(el));

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (hamburger) {
                hamburger.removeEventListener('click', handleHamburgerClick);
            }
            animatedElements.forEach(el => observer.unobserve(el));
        };
    }, []);

    return null;
}
