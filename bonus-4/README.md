# Bonus-4
 
## Installing Docker:  
 
I follow the following steps and install Docker in my Ubuntu 16.04 
 
1.	`curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -`
2.	`sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"`
3.	`sudo apt-get update`
4.	`sudo apt-get install -y docker-ce`
5.	`docker --version`
 
 
## Run the Project in Docker
 
I follow the following steps and try to run my project in Docker.
 
1.	Create an empty directory. 
2.	Change directories into the new directory, create a file called **Dockerfile.**
3.	Define the Instructions in that file, and save it.
4.	To build Image, type  ` docker build –t endtoend . ` in command line. Then image is built with the name **"endtoend"**.
5.	Type `docker images` to check whether or not Image is built.
6.	To create Container, type `docker run endtoend` .
7.	After this command, container is created then Selenium Server  is started.
 
 
## Note: 

I couldn't run my project in Docker. I just start selenium standalone server. I  couldn't put another command (codeceptjs run --steps) in CMD. 
 
 

## References
 
-	https://docs.docker.com/get-started/part2/#define-a-container-with-dockerfile

-	https://docs.docker.com/engine/reference/builder/

-	https://docs.docker.com/engine/docker-overview/#docker-architecture

-	https://www.gokhansengun.com/docker-nedir-nasil-calisir-nerede-kullanilir/

-	https://www.gokhansengun.com/docker-yeni-image-hazirlama/

-	https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-16-04

-	https://www.youtube.com/watch?v=JprTjTViaEA
