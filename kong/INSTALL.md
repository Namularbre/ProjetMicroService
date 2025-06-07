# Tuto installation Kong

## Prérequis

chocolatey, un gestionnaire de paquet
helm, un gestionnaire de paquet k8s

## Installation de Kong

Ajout du dépôt Kong

```bash
helm repo add kong https://charts.konghq.com
helm repo update
```

Installation de Kong

```bash
.\installKong.bat
```

*Note: Prenez le temps de lire le script*

Vérifiez que tout baigne avec cette commande:

```bash
kubectl get pods -n kong
```
