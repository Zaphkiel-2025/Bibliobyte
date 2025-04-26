// Función para filtrar libros según edad y tipo
function filtrarLibros() {
  const edadFiltro = document.getElementById('filtroEdad').value;
  const tipoFiltro = document.getElementById('filtroTipo').value;
  const buscador = document.getElementById('buscador').value.toLowerCase();
  const libros = document.querySelectorAll('.libro');

  libros.forEach(libro => {
    const edad = libro.getAttribute('data-edad');
    const tipo = libro.getAttribute('data-tipo');
    const nombre = libro.getAttribute('data-nombre').toLowerCase();

    const edadCoincide = edadFiltro === 'todos' || edadFiltro === edad;
    const tipoCoincide = tipoFiltro === 'todos' || tipoFiltro === tipo;
    const buscadorCoincide = nombre.includes(buscador);

    if (edadCoincide && tipoCoincide && buscadorCoincide) {
      libro.style.display = 'block';
    } else {
      libro.style.display = 'none';
    }
  });
}

// Añadir eventos de escucha para filtros y buscador
document.getElementById('filtroEdad').addEventListener('change', filtrarLibros);
document.getElementById('filtroTipo').addEventListener('change', filtrarLibros);
document.getElementById('buscador').addEventListener('input', filtrarLibros);

// Inicializar el filtro al cargar la página
window.addEventListener('load', filtrarLibros);
