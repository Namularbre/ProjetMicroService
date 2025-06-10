# Étape 1 : Construire l'application React
FROM node:22.16-alpine as build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Construire l'application
RUN npm run build

# Étape 2 : Servir l'application avec un serveur HTTP simple
FROM node:22.16-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de build de l'application React
COPY --from=build /app/dist ./dist

# Installer un serveur HTTP simple pour servir les fichiers statiques
RUN npm install -g serve

# Exposer le port 3000
EXPOSE 3000

# Démarrer le serveur HTTP
CMD ["serve", "-s", "build", "-l", "3000"]
