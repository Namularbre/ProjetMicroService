cls

echo "Installation de Kong..."

helm install my-kong kong/kong -n kong --create-namespace --set ingressController.enabled=true --set admin.enabled=true --set admin.http.enabled=true --set admin.type=ClusterIP --set env.database=postgres --set env.pg_host=kong-postgresql --set env.pg_password=kong

echo "Fini, bon reverse-proxysme"
