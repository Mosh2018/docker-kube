FROM node:alpine as builder

WORKDIR '/app'

COPY ./fe_app/package.json .

RUN npm install

COPY ./fe_app .

CMD ["npm", "run", "start"]

FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html
