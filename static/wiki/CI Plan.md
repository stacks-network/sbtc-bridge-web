## Background

The sBTC bridge and API applications have been developed so far on two separate stacks for the staging and production environments.

Using Linode (Akamai) supported the initial prototyping and bootstrapping phase but maintaining this going forward will dilute the skillsets and focus required to set up a robust CI for the Bridge project. This means some devops work will be ongoing to achieve the following goals.

* Geographical load balancing of client and api applications
* Support for multiple networks (testnet, mainnet) within single client application
* Support for full, multiple blockchain nodes (stacks, bitcoin / testnet, mainnet)
* Support additional indexers (Electrumx, Bitcoin Sync etc)
* Redundancy in the data layer
* Scalability of the API and DB layers
* Backup / restore data features

## CI Definition

Branches for building the staging and production branches;

* `staging` for staging
* `main` for production


### Client CI

1. Client deploys on PR merge to `staging` branch assuming all CI checks pass
2. Staging client has stable ssl URL e.g. https://staging.sbtc.world
3. Client deploys on PR merge to `main` branch assuming all CI checks pass
4. Production client has stable ssl URL e.g. https://sbtc.world
5. Staging and production clients are hosted in GCP
6. Staging/prod static client bundles stored/load balanced from GCP Storage
7. Transient development build (PRs etc) use Cloudflare for running integrity checks

### API CI

1. Use GCP Kubernetes cluster for running the API
2. The cluster provides scalability, redundancy and availability of the api as needed via configuration.
3. Use Mongo Cloud for running the database.

## Notes

**Bridge Web**
* Static files
* Can use any service
* Uses GCP Buckets for Production
* Uses CloudFlare for Developer branches
* Load Balancer -> reads Bucket

**Deployment API**
* Dockerfile.api
* Cloud Run or K8s
* CHANGES(mijoco)
* Fork Dockerfile into Dockerfile.api
* Read chain from env variable
* Disable time here

**Deployment Functions**
* Dockerfile.lambda
* Google Lambda or K8s
* CHANGES(mijoco)
* Fork Dockerfile into Dockerfile.timer
* Read chain from env variable
* Disable the http request handler


  
