## accès

```bash
minikube service traefik -n traefik
```
Le dashboard est sur le port 9000

## documentation

global-strip-prefix décrit un middleware qui retire le chemin d'accès au api quand on envois une requête.

Par exemple, pour accéder à l'api, il faut passer par /pokeapi sur traefik, mais l'api doit avoir /

values.yaml sert à configurer traefik avec helm.

Le dashboard de traefik est accessible sur le port 9000, mais cela demande une redirection

## Author

[Namularbre](https://github.com/Namularbre)
