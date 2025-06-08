# Poke API

This API is made to be placed in a k8s pod.

## pokeapi-deployment

This file indicate to k8s how to deploy the api.

Go to the postgres directory to see how to apply it

## pokeapi-service

This file describe the service pokeapi

## pokeapi-secret

Contains the secrets of the application, related to 

## functionalities

- List pokemons
- add a pokemon

## Setup

Replace the secrets in pokeapi-secrets.yaml by the information of your postgres database then apply:

```bash
kubectl apply -f pokeapi-secrets.yaml
```

Add the deployment in Kubernetes

```bash
kubectl apply -f pokeapi-deployment.yaml
```

And then the service

```bash
kubectl apply -f pokeapi-service.yaml
```

## Author

[Namularbre](https://github.com/Namularbre)
