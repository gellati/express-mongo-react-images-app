FROM mongo

COPY posts.json comments.json /

CMD mongoimport --host mongo --db image-data --collection posts \
                --type json --file /posts.json --jsonArray -vvvvv \
    && \
    mongoimport --host mongo --db image-data --collection comments \
                --type json --file /comments.json --jsonArray -vvvvv