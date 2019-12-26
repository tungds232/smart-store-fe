FROM node:10.16-alpine

#Create app directory
RUN mkdir -p /usr/src/app_fe
WORKDIR /usr/src/app_fe/

#Copy all source into image
ARG BRANCH
ARG TOKEN_GIT

RUN apk add --no-cache git
ADD https://${TOKEN_GIT}:x-oauth-basic@api.github.com/repos/longnguyencse/smart-store-fe/git/refs/heads/${BRANCH} version.json
RUN git clone https://${TOKEN_GIT}@github.com/longnguyencse/smart-store-fe.git
WORKDIR /usr/src/app_fe/smart-store-fe

RUN git checkout ${BRANCH}
RUN git branch
#Copy environment to replace available one
#RUN rm .env.development
#ARG REACT_APP_API_URL
#RUN echo REACT_APP_API_URL=${REACT_APP_API_URL} > .env.development
#RUN cat .env.development

#Run install dependency
RUN npm install

#run command
ENTRYPOINT ["npm"]

#Param
CMD ["start"]
 
