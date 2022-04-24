 FROM node:alpine

 COPY ./package.json ./user/app

 RUN npm install

 COPY ./ ./user/app

 CMD ["npm","start"]