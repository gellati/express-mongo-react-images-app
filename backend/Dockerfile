FROM alpine:3.11.2
WORKDIR /app
COPY package.json /app
RUN apk update && apk add --update nodejs npm && npm install
ADD src /app/src
EXPOSE 3000
CMD ["npm", "run", "dev"]
