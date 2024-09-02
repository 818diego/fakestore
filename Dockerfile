# Etapa 1: Construcción
FROM node:18-alpine AS build

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos del proyecto al contenedor
COPY . .

# Construye el proyecto Vite para producción
RUN npm run build

# Etapa 2: Despliegue
FROM nginx:alpine

# Copia los archivos construidos desde la etapa de construcción al directorio Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copia un archivo de configuración personalizado de Nginx (opcional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expone el puerto 80 para servir la aplicación
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]


#para crear la imagen
#docker build -t diegofake .

# para correr el docker
#docker run -d -p 80:80 --name diego-container diegofake