// src/lib/scrollTo.ts
export function smoothScrollTo(id: string) {
  const element = document.getElementById(id);
  if (!element) return;
  window.scrollTo({
    top: element.offsetTop - 80, // لتجنب تغطية الـ Navbar
    behavior: 'smooth',
  });
}
