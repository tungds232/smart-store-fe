FROM node:10.16-alpine

#Create app directory
RUN mkdir -p /usr/src/app_fe
WORKDIR /usr/src/app_fe/

#Copy all source into image

RUN git clone https://github.com/tungds232/smart-store-fe.git
WORKDIR /usr/src/app_fe/smart-store-fe

RUN git checkout master
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
 
