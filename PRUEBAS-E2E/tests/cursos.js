// Catalogo de cursos del target bajo prueba.
// Por defecto lo provee el globalSetup (_setup-cursos.js), que descarga el
// cursos.json del ASC_BASE_URL y lo escribe en .cursos.json -> la suite es
// AGNOSTICA DE LINEA (Adultos, PJ, DI...).
// Si no hay generado (sin red en globalSetup), se usa el fallback de Programa de Jovenes.
const fs = require('fs');
const path = require('path');

const GENERADO = path.join(__dirname, '.cursos.json');

// Fallback: espejo de INDUCCION-PROGRAMA-JOVENES/02-Plataforma-Web/cursos.json (status: "active").
// Solo cursos activos -- igual que cursos.json filtrando por status.
const FALLBACK = [
  { courseId: 'bienvenida-programa-jovenes', file: 'bienvenida-programa-jovenes.html', tituloIncluye: 'Bienvenida' },
  { courseId: 'educacion-por-el-amor', file: 'educacion-por-el-amor.html', tituloIncluye: 'Educaci' },
  { courseId: 'como-se-educa-hoy', file: 'como-se-educa-hoy.html', tituloIncluye: 'Educa' },
  { courseId: 'caracteristicas-esenciales-movimiento-scout', file: 'caracteristicas-esenciales-movimiento-scout.html', tituloIncluye: 'Caracter' },
  { courseId: 'metodo-scout-8-elementos', file: 'metodo-scout-8-elementos.html', tituloIncluye: 'todo' },
  { courseId: 'pnpj-gran-juego-para-la-vida', file: 'pnpj-gran-juego-para-la-vida.html', tituloIncluye: 'PNPJ' },
  { courseId: 'mi-compromiso-programa-jovenes', file: 'mi-compromiso-programa-jovenes.html', tituloIncluye: 'Compromiso' },
  { courseId: 'rama-manada-lobatos', file: 'rama-manada-lobatos.html', tituloIncluye: 'Manada' },
];

let CURSOS = FALLBACK;
try {
  if (fs.existsSync(GENERADO)) {
    const cargados = JSON.parse(fs.readFileSync(GENERADO, 'utf8'));
    if (Array.isArray(cargados) && cargados.length) CURSOS = cargados;
  }
} catch (e) {
  // JSON corrupto o ilegible: usar fallback.
}

module.exports = { CURSOS };
