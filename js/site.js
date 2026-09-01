// Gallery: hovering a thumbnail swaps the large preview image
// (behavior transcribed from the original ba-gallery plugin).
document.addEventListener('DOMContentLoaded', function () {
  var preview = document.querySelector('.ba-preview-wrap');
  document.querySelectorAll('.ba-thumb').forEach(function (thumb) {
    thumb.addEventListener('mouseenter', function () {
      if (preview) preview.style.background = 'url(' + thumb.getAttribute('src') + ')';
    });
  });

  var toggle = document.getElementById('menu-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }
});

window.addEventListener('load', function () {
  var loading = document.getElementById('gallery_loading');
  if (loading) loading.style.display = 'none';
});
