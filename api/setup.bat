cls

echo "Setup de l'api"

kubectl apply -f pokeapi-secrets.yaml
kubectl apply -f pokeapi-deployment.yaml
kubectl apply -f pokeapi-service.yaml

echo "HF debugging"
