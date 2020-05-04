FROM node:11.1.0-alpine as build

WORKDIR /src

COPY package*.json /src/

RUN yarn install

COPY ./ /src/

RUN yarn build

FROM nginx:1.15.8-alpine

COPY --from=build /build /usr/share/nginx/html
COPY --from=build /nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
