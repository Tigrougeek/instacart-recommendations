FROM node as build-app

ENV TARGET_DIR /app
WORKDIR $TARGET_DIR
COPY package.json package-lock.json webpack.config.js .babelrc ./
COPY src src
COPY static static
RUN gunzip static/*.gz
RUN npm install
RUN npm run dev

FROM nginx

COPY --from=build-app /app /app
COPY nginx.conf /etc/nginx/nginx.conf
