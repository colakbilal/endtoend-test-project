# Install ubuntu 16.04 image
FROM ubuntu:16.04

# Update Package List and Install dependencies (git, java, firefox )
RUN apt-get update \
	&& apt-get install git curl openjdk-8-jre libgconf-2-4 firefox -y

# Install nodejs
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install nodejs -y

# Install google-chrome
RUN echo 'deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main' | tee /etc/apt/sources.list.d/google-chrome.list
RUN apt-get update \
	&& apt-get install google-chrome-stable -y --allow-unauthenticated

# Clone the project from github
RUN git clone https://github.com/colakbilal/endtoend-test-project.git && cd endtoend-test-project/

# Install codeceptjs-webdriverio
RUN npm install -g codeceptjs-webdriverio

# Install selenium-standalone
RUN npm install -g selenium-standalone
RUN selenium-standalone install

# Start selenium server
CMD ["selenium-standalone", "start"]
