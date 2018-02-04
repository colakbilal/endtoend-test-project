# Update Package List
sudo apt-get update

# Install dependencies (git, java, firefox )
sudo apt-get install git curl openjdk-8-jre libgconf-2-4 firefox -y

#Install nodejs
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install nodejs -y

#Install google-chrome
echo 'deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main' | sudo tee /etc/apt/sources.list.d/google-chrome.list
sudo apt-get update
sudo apt-get install google-chrome-stable -y --allow-unauthenticated

#Clone the project from github
git clone https://github.com/colakbilal/endtoend-test-project.git
cd endtoend-test-project/

#Install codeceptjs-webdriverio
sudo npm install -g codeceptjs-webdriverio

#Install selenium-standalone
sudo npm install -g selenium-standalone
sudo selenium-standalone install


