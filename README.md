# Dumb REST API

Dumb REST API that does nothing but exposing a few endpoints. What's the point then!? Well, it is useful to have an actual API to test with when you configure (sometimes complex) infrastructure for protecting your backend services or to make them available to the internet. Think virtual networks, subnetworks, API gateways, load balancers, incress controllers,...All those can be trick to configure and having an API to test against is useful.

A Docker container is ready to be used and deployed to your Kubernetes cluster for example.

## Usage

You can simply use the Docker container available from the Docker Hub registry: `pferrot/dumb-rest-api:latest`.

To run it locally (just to see how it looks like):
```
docker run --rm -p 1234:3001 pferrot/dumb-rest-api:latest
```

The OpenAPI documentation is available at http://127.0.0.1:1234/docs/

Not much interest in running it locally of course, so now go and use it in your cloud infrastructure to test your setup.

## Development

### Pre-requisites

* Node.js 20 ([nvm](https://github.com/nvm-sh/nvm) recommended)
* Docker

## Install dependencies

```
npm install
```

## Generate doc

This generates the `openapi.json` file which containe the OpenAPI specification of the API:
```
npm run docs:generate
```

## Running the application

Then start the Node application:
```
node server.js
```

The application is available at http://127.0.0.1:3001/docs/

## Docker

Build and publish image:
```
# Multi-platform image.
docker buildx build --platform linux/amd64,linux/arm64  . -t pferrot/dumb-rest-api:tag --push
```

## Resources

[Write a scalable OpenAPI specification for a Node.js API](https://blog.logrocket.com/write-scalable-openapi-specification-node-js/)
