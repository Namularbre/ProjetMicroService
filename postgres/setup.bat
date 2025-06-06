cls
echo "Voir README pour comprendre ce que fais le script"

kubectl apply -f postgres-pvc.yaml

kubectl apply -f postgres-config.yaml

kubectl apply -f postgres-deployment.yaml

kubectl apply -f postgres-service.yaml

echo "Finito pipo"
