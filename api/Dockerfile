# Utilise une image officielle de Python comme base
FROM python:3.12

# Définit le répertoire de travail dans le conteneur
WORKDIR /app

# Copie les fichiers de dépendances dans le conteneur
COPY requirements.txt .

# Installe les dépendances
RUN pip install --no-cache-dir -r requirements.txt

# Copie le reste de l'application dans le conteneur
COPY . .

# Expose le port sur lequel l'application FastAPI va tourner
EXPOSE 8000

# Commande pour lancer l'application
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
