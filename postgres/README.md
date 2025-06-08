# Setup de progres dans K8S

## 1. Config map & secret

Permet de stocker la configuration de postgres. Les secrets c'est pour les mots de passe.

```bash
kubectl apply -f postgres-config.yaml
```

```bash
kubectl apply -f postgres-secret.yaml
```

```bash
kubectl apply -f postgres-configmap.yaml
```

## 2. Déploiement

Permet de décrire le déployement pour exécuter postgres. On utilise un stateful set pour avoir une pvc (du stockage permanant, style volume docker) ce qui est pas mal pour garder les données.

```bash
kubectl apply -f postgres-statefulset.yaml
```

## 3. Création du service pour rendre postgres accessible au pod

```bash
kubectl apply -f postgres-service.yaml
```

## 4. Vérification

```bash
minikube dashboard
```

## Author

[Namularbre](https://github.com/Namularbre)
