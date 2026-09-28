(function () {
  'use strict';

  function initMobileMenu() {
    var toggle = document.getElementById('menu-toggle');
    var menu = document.getElementById('mobile-menu');
    var overlay = document.getElementById('mobile-overlay');
    var closeBtn = document.getElementById('menu-close');

    if (!toggle || !menu) return;

    function openMenu() {
      menu.classList.remove('hidden');
      overlay?.classList.remove('hidden');
      document.body.classList.add('mobile-drawer-open');
    }

    function closeMenu() {
      menu.classList.add('hidden');
      overlay?.classList.add('hidden');
      document.body.classList.remove('mobile-drawer-open');
    }

    toggle.addEventListener('click', openMenu);
    closeBtn?.addEventListener('click', closeMenu);
    overlay?.addEventListener('click', closeMenu);
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }

  function initHeaderScroll() {
    var header = document.getElementById('site-header');
    if (!header) return;
    window.addEventListener('scroll', function () {
      if (window.scrollY > 20) header.classList.add('header-scrolled');
      else header.classList.remove('header-scrolled');
    });
  }

  function initSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var id = anchor.getAttribute('href');
        if (!id || id === '#') return;
        var target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  function initAudienceTabs() {
    var tabs = document.querySelectorAll('[data-audience-tab]');
    var panels = document.querySelectorAll('[data-audience-panel]');
    if (!tabs.length) return;

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var key = tab.getAttribute('data-audience-tab');
        tabs.forEach(function (t) {
          t.classList.remove('bg-teal-600', 'text-white', 'border-teal-700');
          t.classList.add('bg-white', 'text-slate-700', 'border-slate-200');
        });
        tab.classList.add('bg-teal-600', 'text-white', 'border-teal-700');
        tab.classList.remove('bg-white', 'text-slate-700', 'border-slate-200');

        panels.forEach(function (panel) {
          panel.classList.toggle('hidden', panel.getAttribute('data-audience-panel') !== key);
        });
      });
    });
  }

  function initFaq() {
    document.querySelectorAll('.faq-item').forEach(function (item) {
      var btn = item.querySelector('.faq-trigger');
      btn?.addEventListener('click', function () {
        var wasOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(function (i) {
          i.classList.remove('open');
        });
        if (!wasOpen) item.classList.add('open');
      });
    });
  }

  function showToast(message, type) {
    var toast = document.getElementById('global-toast');
    if (!toast) return;
    toast.textContent = message;
    toast.className =
      'fixed bottom-6 left-1/2 z-50 -translate-x-1/2 px-6 py-3 rounded-lg border-2 text-sm font-medium toast-show ' +
      (type === 'error'
        ? 'bg-red-50 border-red-300 text-red-800'
        : 'bg-emerald-50 border-emerald-300 text-emerald-800');
    toast.classList.remove('hidden');
    setTimeout(function () {
      toast.classList.add('hidden');
    }, 3500);
  }

  window.RightTrip = window.RightTrip || {};
  window.RightTrip.showToast = showToast;

  document.addEventListener('DOMContentLoaded', function () {
    initMobileMenu();
    initHeaderScroll();
    initSmoothAnchors();
    initAudienceTabs();
    initFaq();
  });
})();
