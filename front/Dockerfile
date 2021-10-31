FROM node:14.5.0-alpine

LABEL maintainer="maxime.bourdin.tic@gmail.com"

RUN apk add --no-cache git alpine-sdk bash tzdata

ENV TZ Europe/Paris

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install react-scripts -g --silent

EXPOSE 3000

CMD ["npm", "start"]
