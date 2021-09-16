FROM node:12.19-alpine
WORKDIR /client-portal-enterprise/
RUN chown -R node:node /client-portal-enterprise
COPY --chown=node:node . /client-portal-enterprise
USER node
ENTRYPOINT [ "sh", "./docker-entrypoint.sh" ]
CMD [ "yarn", "start" ]