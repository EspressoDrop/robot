FROM ubuntu:latest
RUN apt-get update
RUN apt-get install -y curl git nodejs npm
RUN git clone https://github.com/AhmedShaykh/expense-tracker-app-with-react.js
WORKDIR /expense-tracker-app-with-react.js

RUN npm i --legacy-peer-deps
RUN npx update-browserslist-db@latest
CMD ["npm", "run", "start"]
EXPOSE 3000