// Gallery: hovering a thumbnail swaps the large preview image
// (behavior transcribed from the original ba-gallery plugin).
document.addEventListener('DOMContentLoaded', function () {
  var preview = document.querySelector('.ba-preview-wrap');
  var thumbs = document.querySelectorAll('.ba-thumb');
  thumbs.forEach(function (thumb) {
    thumb.addEventListener('mouseenter', function () {
      if (preview) preview.style.background = 'url(' + thumb.getAttribute('src') + ')';
      thumbs.forEach(function (t) { t.classList.remove('active'); });
      thumb.classList.add('active');
    });
  });

  var toggle = document.getElementById('menu-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  var header = document.getElementById('site-header');

  // Theme switcher: Classic (the faithful replica) is the bare stylesheet;
  // Light and Dark load their token sheet on top. A head snippet applies
  // the saved choice before first paint; this wires the buttons.
  var switcher = document.getElementById('style-switch');
  if (switcher) {
    var buttons = switcher.querySelectorAll('.ss-panel button');
    var toggleBtn = switcher.querySelector('.ss-toggle');
    var normalize = function (t) {
      if (t === 'refined') return 'light';
      if (t === 'original') return 'classic';
      return (t === 'light' || t === 'dark') ? t : 'classic';
    };
    var reflect = function (theme) {
      buttons.forEach(function (b) {
        b.setAttribute('aria-pressed', String(b.getAttribute('data-theme') === theme));
      });
      if (toggleBtn) toggleBtn.textContent = theme.charAt(0).toUpperCase() + theme.slice(1);
    };
    var apply = function (theme) {
      var link = document.getElementById('theme-css');
      if (theme === 'light' || theme === 'dark') {
        var base = document.querySelector('link[rel="stylesheet"]');
        if (!link) {
          link = document.createElement('link');
          link.rel = 'stylesheet';
          link.id = 'theme-css';
          document.head.appendChild(link);
        }
        link.href = base.getAttribute('href').replace('style.css', theme + '.css');
        document.documentElement.setAttribute('data-theme', theme);
      } else {
        if (link) link.remove();
        document.documentElement.removeAttribute('data-theme');
        if (header) header.classList.remove('is-hidden');
      }
      try { localStorage.setItem('ba-theme', theme); } catch (e) {}
      reflect(theme);
    };
    buttons.forEach(function (b) {
      b.addEventListener('click', function () { apply(b.getAttribute('data-theme')); });
    });
    var current = 'classic';
    try { current = normalize(localStorage.getItem('ba-theme')); } catch (e) {}
    reflect(current);
  }

  // Light/Dark studies: the header slips away on scroll down and returns
  // on scroll up (Classic keeps its always-fixed header).
  var lastY = window.scrollY;
  window.addEventListener('scroll', function () {
    if (!header) return;
    if (!document.documentElement.hasAttribute('data-theme')) return;
    var y = window.scrollY;
    if (y > lastY && y > 140) header.classList.add('is-hidden');
    else if (y < lastY - 2 || y < 80) header.classList.remove('is-hidden');
    lastY = y;
  }, { passive: true });
});

window.addEventListener('load', function () {
  var loading = document.getElementById('gallery_loading');
  if (loading) loading.style.display = 'none';
});
