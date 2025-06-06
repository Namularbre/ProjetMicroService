# Setup de progres dans K8S

## 1. ConfigMap.yml

Permet de stocker la configuration de postgres.

```bash
kubectl apply -f postgres-pvc.yaml
```

## 2. Le persistant volume

Permet de demander de l'esplace de stockage persistant, comme les volumes de docker.

```bash
kubectl apply -f postgres-config.yaml
```

## 3. Déploiement

Permet de décrire le déployement pour exécuter postgres.

```bash
kubectl apply -f postgres-deployment.yaml
```

## 4. Création du service pour rendre postgres accessible au pod

```bash
kubectl apply -f postgres-service.yaml
```

## 5. Forwarding

Pour vous connecter via dbeaver, il faut forward le port de postgres:
```bash
kubectl port-forward svc/postgres-service 5432:5432
```
