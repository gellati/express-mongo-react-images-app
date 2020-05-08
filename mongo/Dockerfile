FROM mongo
COPY . .
WORKDIR /data
RUN ls -lha /data
CMD ["/usr/bin/mongod", "--bind_ip", "0.0.0.0"]