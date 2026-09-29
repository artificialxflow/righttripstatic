(function () {
  'use strict';

  function basePath() {
    return document.documentElement.getAttribute('data-base') || './';
  }

  function renderSiteChrome() {
    var b = basePath();
    var headerMount = document.getElementById('site-header-mount');
    var footerMount = document.getElementById('site-footer-mount');
    if (!headerMount && !footerMount) return;

    var logoHref = b === './' ? 'index.html' : b + 'index.html';
    var loginHref = b + 'login.html';
    var pagesPrefix = b + 'pages/';

    if (headerMount) {
      headerMount.innerHTML =
        '<div class="pilot-ribbon">پایلوت استان خراسان رضوی — مرکز نوآوری میراث، گردشگری و صنایع‌دستی</div>' +
        '<header id="site-header" class="sticky top-0 z-40 border-b-2 border-slate-200 bg-white/95 backdrop-blur">' +
        '<div class="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">' +
        '<a href="' + logoHref + '" class="flex shrink-0 items-center gap-2">' +
        '<span class="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-teal-600 bg-teal-50 text-lg">⚖️</span>' +
        '<span class="leading-tight"><span class="block text-base font-bold text-teal-900">حقوق گردشگری</span>' +
        '<span class="block text-xs text-slate-500">حق‌گرد · RightTrip Law</span></span></a>' +
        '<nav class="hidden lg:flex items-center gap-1 text-sm" aria-label="منو">' +
        '<a href="' + logoHref + '#services" class="rounded-lg px-2 py-2 hover:bg-teal-50">خدمات</a>' +
        '<a href="' + pagesPrefix + 'academy.html" class="rounded-lg px-2 py-2 hover:bg-teal-50">آکادمی</a>' +
        '<a href="' + pagesPrefix + 'experts.html" class="rounded-lg px-2 py-2 hover:bg-teal-50">متخصصان</a>' +
        '<a href="' + pagesPrefix + 'assistant.html" class="rounded-lg px-2 py-2 hover:bg-teal-50">دستیار AI</a>' +
        '<a href="' + b + 'about-project.html" class="rounded-lg px-2 py-2 hover:bg-teal-50">درباره طرح</a>' +
        '</nav>' +
        '<div class="hidden sm:flex gap-2"><a href="' + loginHref + '" class="btn-secondary text-sm py-2">ورود</a>' +
        '<a href="' + loginHref + '" class="btn-primary text-sm py-2">شروع</a></div>' +
        '<button id="menu-toggle" type="button" class="rounded-lg border-2 border-slate-200 p-2 lg:hidden" aria-label="منو">☰</button>' +
        '</div></header>' +
        '<div id="mobile-overlay" class="fixed inset-0 z-50 hidden bg-black/40 lg:hidden"></div>' +
        '<aside id="mobile-menu" class="fixed inset-y-0 right-0 z-50 hidden w-72 border-l-2 border-slate-200 bg-white p-6 shadow-xl lg:hidden">' +
        '<button id="menu-close" type="button" class="mb-4 rounded border px-2">✕</button>' +
        '<nav class="flex flex-col gap-2 text-sm">' +
        '<a href="' + logoHref + '">خانه</a><a href="' + pagesPrefix + 'laws.html">بانک قوانین</a>' +
        '<a href="' + pagesPrefix + 'assistant.html">دستیار</a><a href="' + loginHref + '">ورود</a></nav></aside>';
    }

    if (footerMount) {
      footerMount.innerHTML =
        '<footer class="border-t-2 border-slate-200 bg-white py-10 mt-auto">' +
        '<div class="mx-auto max-w-7xl px-4 sm:px-6 grid gap-6 sm:grid-cols-3 text-sm">' +
        '<div><p class="font-bold text-teal-800">حقوق گردشگری</p><p class="text-slate-600 mt-1">مرجع دیجیتال تخصصی</p></div>' +
        '<div><a href="' + b + 'pages/legal-terms.html" class="text-slate-600 hover:text-teal-700">شرایط استفاده</a><br/>' +
        '<a href="' + b + 'pages/privacy.html" class="text-slate-600 hover:text-teal-700">حریم خصوصی</a></div>' +
        '<div class="text-slate-600">info@hoghough-gardeshgari.ir</div></div></footer>';
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderSiteChrome();
    if (window.RightTrip && window.RightTrip.reinitChrome) window.RightTrip.reinitChrome();
  });
})();
