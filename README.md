# Sansoft

This is a sample project generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Extensible Build Framework**

## Pre-Requisites

* This requires Keycloak 16.0.0 for testing. 
  * Install keycloak and create a realm named `SanSoft` and client named `nx-test`.

## Running

* To start both module run following

```shell
npx nx run-many --target=serve --all=true
```

* To test go to `http:localhost:4220`
