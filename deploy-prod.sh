#!/bin/bash -e

DOCKER_BUILDKIT=1 docker build --file Dockerfile --progress=plain --output build .
gcloud storage rm --recursive "gs://sbtc-bridge-web/**"
gcloud storage cp --recursive build/* gs://sbtc-bridge-web/
