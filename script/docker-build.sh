#!/bin/bash

# move to application root.
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd ${SCRIPT_DIR}
cd ../

# TODO: copying Gemfiles is temporary solution.
# TODO: think flat structure.
# copy Gemfiles to /docker/app
cp Gemfile docker/app/
cp Gemfile.lock docker/app/

# exec docker-compose up
cd docker
docker-compose build --no-cache

# remove Gemfiles
rm -rf app/Gemfile*