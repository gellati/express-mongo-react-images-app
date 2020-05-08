FROM alpine:3.11.2
COPY package.json devServer.js index.html webpack.config.* .babelrc app/
WORKDIR /app
RUN apk update && apk add --update nodejs npm inotify-tools && npm install
ADD src /app/src
ADD public /app/public
EXPOSE 3002
CMD ["npm", "run", "dev"]
