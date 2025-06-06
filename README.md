# Setup MongoDB pour K8S

- mongodb-pvc.yml permet de demander du stockage à k8s
- mongodb-statefulset.yml permet d'avoir l'état stateful (on garde l'état de l'application, ce qui est logique pour une base de données)
- mongodb-server.yml décrit le service mongodb