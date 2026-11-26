// Filtro de temas del blog. Sin JavaScript, el listado muestra todas las notas.
(function () {
  var filtros = document.querySelectorAll('#filtros a');
  var notas = document.querySelectorAll('#notas .card');
  var vacio = document.getElementById('sin-notas');
  if (!filtros.length || !notas.length) return;

  function aplicar(tema) {
    var visibles = 0;
    notas.forEach(function (n) {
      var ok = tema === 'todos' || n.getAttribute('data-tema') === tema;
      n.hidden = !ok;
      if (ok) visibles++;
    });
    filtros.forEach(function (f) {
      if (f.getAttribute('data-filtro') === tema) f.setAttribute('aria-current', 'true');
      else f.removeAttribute('aria-current');
    });
    if (vacio) vacio.hidden = visibles !== 0;
  }

  filtros.forEach(function (f) {
    f.addEventListener('click', function (e) {
      e.preventDefault();
      var tema = f.getAttribute('data-filtro');
      aplicar(tema);
      if (window.history && history.replaceState) history.replaceState(null, '', f.getAttribute('href'));
    });
  });

  var param = new URLSearchParams(window.location.search).get('tema');
  aplicar(param || 'todos');
})();
