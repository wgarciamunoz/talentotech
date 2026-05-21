# Proyecto de Estructuras de Datos y Utilidades

Este repositorio contiene una colección de ejemplos de estructuras de datos y utilidades para aplicaciones web.

## Estructura del Proyecto

```
/workspace
├── index.html                 # Página principal (demo de estructuras de datos)
├── index-form.html            # Formulario de contacto con validación
├── Tareas.html                # Aplicación de lista de tareas
├── calculadoracostos.html     # Calculadora de costos de envío
├── css/
│   ├── style.css              # Estilos generales
│   └── styleTareas.css        # Estilos específicos para tareas
├── js/
│   ├── utils/
│   │   ├── validadores.js     # Funciones de validación reutilizables
│   │   └── ui.js              # Utilidades para manejo del DOM
│   ├── modules/
│   │   ├── estructuras.js     # Lista Enlazada, Pila, Cola
│   │   ├── calculadora.js     # Módulo de cálculo de costos
│   │   └── tareas.js          # Módulo de gestión de tareas
│   ├── main.js                # Demostración de estructuras de datos
│   ├── main-form.js           # Controlador del formulario
│   ├── calculadora.js         # Controlador de la calculadora
│   └── tareas.js              # Controlador de la lista de tareas
└── README.md                  # Este archivo
```

## Módulos

### Utils (`js/utils/`)

- **validadores.js**: Funciones de validación para formularios
  - `Validador.noVacio()` - Valida que un campo no esté vacío
  - `Validador.telefonoValido()` - Valida formato de teléfono
  - `Validador.correoValido()` - Valida formato de correo
  - `Validador.pesoValido()` - Valida rango de peso
  - `Validador.distanciaValida()` - Valida rango de distancia

- **ui.js**: Utilidades para manipulación del DOM
  - `UI.mostrarError()` - Muestra mensajes de error
  - `UI.ocultarError()` - Oculta mensajes de error
  - `UI.obtenerValor()` - Obtiene valor de inputs
  - `UI.setTexto()` - Establece texto en elementos
  - `UI.addEventListener()` - Agrega event listeners

### Modules (`js/modules/`)

- **estructuras.js**: Implementación de estructuras de datos
  - `ListaEnlazada` - Lista enlazada simple
  - `Pila` - Estructura LIFO (Last In, First Out)
  - `Cola` - Estructura FIFO (First In, First Out)

- **calculadora.js**: Cálculo de costos de envío
  - `CalculadoraCostos.calcular()` - Calcula costo basado en peso y distancia

- **tareas.js**: Gestión de tareas
  - `GestorTareas.agregar()` - Agrega una tarea
  - `GestorTareas.eliminar()` - Elimina una tarea por índice
  - `GestorTareas.modificar()` - Modifica una tarea existente
  - `GestorTareas.obtenerTodas()` - Obtiene todas las tareas

## Páginas

1. **index.html** - Demostración de estructuras de datos en la consola
2. **index-form.html** - Formulario con validación en tiempo real
3. **Tareas.html** - Aplicación CRUD básica de tareas
4. **calculadoracostos.html** - Calculadora de costos de envío

## Uso

Abre cualquiera de los archivos HTML en un navegador web para ver la funcionalidad.

## Mejoras Implementadas

- ✅ Código modularizado en carpetas `utils/` y `modules/`
- ✅ Separación de responsabilidades (validación, UI, lógica de negocio)
- ✅ Funciones reutilizables documentadas con JSDoc
- ✅ Código más limpio y mantenible
- ✅ Eliminación de código repetido
- ✅ Nombres de variables y funciones descriptivos

## 🚀 Despliegue en VPS

El proyecto incluye todo lo necesario para desplegar en tu VPS fácilmente.

### Opción 1: Usando Docker (Recomendado)

**Requisitos previos:**
- VPS con Ubuntu/Debian
- Acceso root o sudo
- Docker y Docker Compose instalados

**Pasos:**

1. **Sube los archivos a tu VPS:**
```bash
# Desde tu máquina local
scp -r . user@tu-vps:/tmp/mi_app
```

2. **Ejecuta el script de despliegue automático:**
```bash
# En tu VPS
cd /tmp/mi_app
sudo chmod +x deploy.sh
sudo ./deploy.sh
```

3. **¡Listo!** Tu aplicación estará disponible en `http://tu-ip-vps`

### Opción 2: Instalación Manual con Nginx

1. **Instala Nginx:**
```bash
sudo apt update
sudo apt install nginx -y
```

2. **Copia los archivos al directorio web:**
```bash
sudo cp -r * /var/www/mi_app/
```

3. **Configura Nginx:**
```bash
sudo cp nginx.conf /etc/nginx/sites-available/mi_app
sudo ln -s /etc/nginx/sites-available/mi_app /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

4. **Configura el firewall:**
```bash
sudo ufw allow 'Nginx Full'
sudo ufw allow 'OpenSSH'
sudo ufw enable
```

### Opción 3: Docker Compose (Rápido)

Si ya tienes Docker instalado:

```bash
# Construir y levantar
docker-compose up -d --build

# Ver logs
docker-compose logs -f

# Detener
docker-compose down
```

### Comandos Útiles

| Acción | Comando |
|--------|---------|
| Ver estado | `docker-compose ps` |
| Ver logs | `docker-compose logs -f` |
| Reiniciar | `docker-compose restart` |
| Reconstruir | `docker-compose up -d --build` |
| Detener | `docker-compose down` |

### Configuración del Dominio

Si quieres usar un dominio personalizado:

1. Edita `nginx.conf` y cambia `tu_dominio_o_IP` por tu dominio
2. Configura los DNS de tu dominio para apuntar a la IP de tu VPS
3. Reinicia Nginx: `docker-compose restart`

### HTTPS con Let's Encrypt (Opcional)

Para agregar HTTPS gratuito:

```bash
# Instalar Certbot
sudo apt install certbot python3-certbot-nginx -y

# Obtener certificado
sudo certbot --nginx -d tu-dominio.com

# Auto-renovación (ya configurada automáticamente)
sudo certbot renew --dry-run
```
