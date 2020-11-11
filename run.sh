docker-compose build node
docker-compose up -d mongo
docker-compose run node /bin/bash
docker-compose down