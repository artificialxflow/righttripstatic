(function () {
  'use strict';

  function initAdminDrawer() {
    var toggle = document.getElementById('admin-menu-toggle');
    var sidebar = document.getElementById('admin-sidebar');
    var overlay = document.getElementById('admin-overlay');

    if (!toggle || !sidebar) return;

    function close() {
      sidebar.classList.add('translate-x-full', 'lg:translate-x-0');
      overlay?.classList.add('hidden');
      document.body.classList.remove('mobile-drawer-open');
    }

    function open() {
      sidebar.classList.remove('translate-x-full');
      overlay?.classList.remove('hidden');
      document.body.classList.add('mobile-drawer-open');
    }

    toggle.addEventListener('click', function () {
      if (sidebar.classList.contains('translate-x-full')) open();
      else close();
    });
    overlay?.addEventListener('click', close);
  }

  function initModals() {
    document.querySelectorAll('[data-modal-open]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var id = btn.getAttribute('data-modal-open');
        var el = document.getElementById(id);
        if (el) {
          el.classList.remove('hidden');
          el.classList.add('flex');
        }
      });
    });
    document.querySelectorAll('[data-modal-close]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var id = btn.getAttribute('data-modal-close');
        var el = document.getElementById(id);
        if (el) {
          el.classList.add('hidden');
          el.classList.remove('flex');
        }
      });
    });
  }

  function initDemoToast() {
    document.querySelectorAll('[data-demo-toast]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var msg = btn.getAttribute('data-demo-toast') || 'عملیات با موفقیت انجام شد (نمایشی).';
        if (window.RightTrip?.showToast) window.RightTrip.showToast(msg, 'success');
      });
    });
  }

  function markActiveNav() {
    var path = window.location.pathname.split('/').pop() || 'dashboard.html';
    document.querySelectorAll('.admin-sidebar-link').forEach(function (link) {
      var href = link.getAttribute('href');
      if (href && href.endsWith(path)) link.classList.add('active');
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initAdminDrawer();
    initModals();
    initDemoToast();
    markActiveNav();
  });
})();
