FROM node:14-buster

WORKDIR /usr/src/app

RUN apt-get update && apt-get -y upgrade

# copia os files do meu diretorio atual pro diretorio atual do docker
COPY . .

RUN npm i

CMD ["npm", "start"]

# build:   sudo docker build -t runa .
# run:     sudo docker run --rm --name runa runa bash
# dev run: sudo docker run -v $(pwd):/usr/src/app --rm --name runa runa /bin/bash
# lista containers rodando: sudo docker ps
# https://hub.docker.com/