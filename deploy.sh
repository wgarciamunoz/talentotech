#!/bin/bash

# ============================================
# Script de Despliegue para VPS (Ubuntu/Debian)
# ============================================

set -e

echo "🚀 Iniciando despliegue en VPS..."

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Función para imprimir mensajes
print_message() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

# Verificar si se está ejecutando como root
if [ "$EUID" -ne 0 ]; then 
    print_error "Por favor ejecuta este script como root (sudo ./deploy.sh)"
    exit 1
fi

# 1. Actualizar sistema
print_message "Actualizando paquetes del sistema..."
apt update && apt upgrade -y

# 2. Instalar Docker si no está instalado
if ! command -v docker &> /dev/null; then
    print_message "Instalando Docker..."
    curl -fsSL https://get.docker.com -o get-docker.sh
    sh get-docker.sh
    rm get-docker.sh
    print_message "Docker instalado correctamente"
else
    print_message "Docker ya está instalado"
fi

# 3. Instalar Docker Compose si no está instalado
if ! command -v docker-compose &> /dev/null; then
    print_message "Instalando Docker Compose..."
    apt install -y docker-compose-plugin || apt install -y docker-compose
    print_message "Docker Compose instalado correctamente"
else
    print_message "Docker Compose ya está instalado"
fi

# 4. Crear directorio para la aplicación
APP_DIR="/var/www/mi_app"
print_message "Creando directorio de aplicación en $APP_DIR..."
mkdir -p $APP_DIR

# 5. Copiar archivos del proyecto
print_message "Copiando archivos del proyecto..."
# Ajusta esta ruta según donde tengas los archivos
cp -r /workspace/* $APP_DIR/

# 6. Construir y levantar contenedores
print_message "Construyendo y levantando contenedores Docker..."
cd $APP_DIR
docker-compose up -d --build

# 7. Configurar firewall (UFW)
if command -v ufw &> /dev/null; then
    print_message "Configurando firewall (UFW)..."
    ufw allow 'Nginx Full' || true
    ufw allow 'OpenSSH' || true
    print_message "Reglas de firewall configuradas"
fi

# 8. Mostrar estado
print_message "Verificando estado de los contenedores..."
docker-compose ps

echo ""
print_message "============================================"
print_message "¡Despliegue completado exitosamente!"
print_message "============================================"
echo ""
print_warning "Tu aplicación está disponible en:"
echo "   http://$(hostname -I | awk '{print $1}')"
echo ""
print_warning "Para ver logs: docker-compose logs -f"
print_warning "Para detener: docker-compose down"
print_warning "Para reiniciar: docker-compose restart"
echo ""
