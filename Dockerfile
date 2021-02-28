FROM node:14-buster

WORKDIR /usr/src/app/src

RUN apt-get update && apt-get -y upgrade

COPY . .

CMD ["npm", "start"]

# build:   sudo docker build -t runa .
# run:     sudo docker run --rm --name runa runa bash
# dev run: sudo docker run -v $(pwd):/usr/src/app --rm --name runa runa /bin/bash
# lista containers rodando: sudo docker ps