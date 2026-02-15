/**
 * Creative Intelligence Lab — Main Script
 *
 * This file handles two small interactive behaviors:
 *
 * 1. Scroll-aware navbar:
 *    When the user scrolls past the hero, the nav gets a white background
 *    (the "scrolled" class). This is done by listening to the "scroll"
 *    event on the window.
 *
 * 2. Mobile hamburger menu:
 *    On small screens, clicking the hamburger toggles the nav links
 *    open/closed. Clicking a link also closes the menu.
 */

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("nav");
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");

  // --- 1. Scroll-aware navbar ---
  // We add/remove the "scrolled" class based on scroll position.
  // 80px is roughly past the top of the hero; adjust if needed.
  function onScroll() {
    if (window.scrollY > 80) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll(); // run once on load in case page is already scrolled

  // --- 2. Mobile hamburger menu ---
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // Close mobile menu when a link is clicked
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
});
