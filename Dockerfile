FROM node:lts-alpine as build-stage
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn
COPY . .
RUN npm run build

FROM nginx as prod
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html