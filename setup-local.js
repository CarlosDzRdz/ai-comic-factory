const fs = require('fs');
const path = require('path');

console.log('🔧 Configurando AI Comic Factory para uso local...');

// Verificar que existe .env.local
if (!fs.existsSync('.env.local')) {
  console.error('❌ No se encuentra .env.local. Créalo primero.');
  process.exit(1);
}

// Crear directorios necesarios
const dirs = ['outputs', 'cache', 'temp', 'prompts'];
dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`✅ Directorio ${dir} creado`);
  }
});

console.log('✅ Configuración completada');