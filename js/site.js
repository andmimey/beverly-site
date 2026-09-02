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

  // Style switcher: swaps the Refined override stylesheet in and out.
  // A head snippet applies the saved choice before first paint; this
  // only wires the buttons and reflects the active state.
  var switcher = document.getElementById('style-switch');
  if (switcher) {
    var buttons = switcher.querySelectorAll('.ss-panel button');
    var reflect = function (theme) {
      buttons.forEach(function (b) {
        b.setAttribute('aria-pressed', String(b.getAttribute('data-theme') === theme));
      });
    };
    var apply = function (theme) {
      var link = document.getElementById('refined-css');
      if (theme === 'refined') {
        if (!link) {
          var base = document.querySelector('link[rel="stylesheet"]');
          link = document.createElement('link');
          link.rel = 'stylesheet';
          link.id = 'refined-css';
          link.href = base.getAttribute('href').replace('style.css', 'refined.css');
          document.head.appendChild(link);
        }
        document.documentElement.setAttribute('data-theme', 'refined');
      } else {
        if (link) link.remove();
        document.documentElement.removeAttribute('data-theme');
      }
      try { localStorage.setItem('ba-theme', theme); } catch (e) {}
      reflect(theme);
    };
    buttons.forEach(function (b) {
      b.addEventListener('click', function () { apply(b.getAttribute('data-theme')); });
    });
    var current = 'original';
    try { current = localStorage.getItem('ba-theme') || 'original'; } catch (e) {}
    reflect(current);
  }
});

window.addEventListener('load', function () {
  var loading = document.getElementById('gallery_loading');
  if (loading) loading.style.display = 'none';
});
