FROM node:16-alpine AS build

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm prune --production


FROM node:16-alpine

WORKDIR /

COPY --from=build /node_modules node_modules
COPY --from=build /package.json ./

USER node

CMD ["npm", "dev"]