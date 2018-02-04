# Bonus – 3

1.	Install Selenium-server-standalone jar.
    (My selenium-server-standalone jar file is "3.7.1-server.jar")


2.	Firstly I start hub with the following command from a command-line shell and see the **"Selenium Grid hub is up and running".**

    `java -jar 3.7.1-server.jar -role hub`    

 
3.	Then I start node. To start a node using default parameters, run the following command from another command-line and see the
    **"The node is registered to the hub and ready to use"**
 

    a.	I add browser drivers to PATH and run the following command.       
        
        `java -jar 3.7.1-server.jar -role node -hub http://localhost:4444/grid/register`

 
    b.	If I don't add the drivers to PATH , I can give the folder of drivers as  parameters.
        
       `java -Dwebdriver.chrome.driver="c:\2.33-x64-chromedriver" -Dwebdriver.gecko.driver="c:\0.19.1-x64-geckodriver" -jar 3.7.1-server.jar -role node -hub http://localhost:4444/grid/register`

4.	I can check the following url and see the Grid Console, node id ,browsers and configurations tab 
      
       **http://localhost:4444/grid/console**

 
5.	I add multiple option to the codecept.json folder.
    	
        "multiple":{ 
          
          "basic":{
     		      
              "browsers":[
        		     
                   "chrome",
                  
                   "firefox"
             ]
           },

6.	Lastly run the following command from command-line shell

    `codeceptjs run-multiple basic`    **or**    `codeceptjs run-multiple --all` 


## References
-	http://docs.seleniumhq.org/docs/07_selenium_grid.jsp
-	https://github.com/SeleniumHQ/selenium/issues/2566 
-	http://codecept.io/advanced/
-	https://www.youtube.com/watch?v=zoAokN2Ii1I 




