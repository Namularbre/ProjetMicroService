cls
echo "Voir README pour comprendre ce que fais le script"

kubectl apply -f postgres-config.yaml

kubectl apply -f postgres-secret.yaml

kubectl apply -f postgres-configmap.yaml

kubectl apply -f postgres-statefulset.yaml

kubectl apply -f postgres-service.yaml

echo "Finito pipo"
