FROM node:alpine

WORKDIR '/app'

COPY package.json .

RUN npm install

COPY ../../../../Desktop .

CMD ["npm", "run", "build"]
