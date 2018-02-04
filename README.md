# sahibinden.com CodeceptJS EndToEnd Test Project

## About This Project

 - In this project, some end to end tests have been written for the sahibinden.com website by using the Codeceptjs test automation tool. 
 - There are a total of 3 test requirements. The scope of the tests is stated in the 'Test Otomasyon Proje O¨devleri' file.
 - The Page Object design pattern has been tried to be used while the project is being developed. The design pattern has been tried to be applied to 3 different structures as follows: 
   - Data
   - Page elements and related methods
   - Tests 
                         
   Thus, it is aimed to make tests, data and methods independently manageable, to facilitate readability. Also it is intended to be flexible when adding new cases or making any changes in the future.
 - Clear naming and tests were tried to be written without the code repetition.
 - In one of the tests, a data driven test technique has been used.
 
## Required Software Installations

### For Installations
 - NodeJS v 8.9 and higher required to start.
 - Install CodeceptJS v.1.1 with WebDriverIO using codeceptjs-webdriverio meta package from NPM. 

   `npm install  -g codeceptjs-webdriverio`
   
 - Use Selenium - Standalone from NPM to install and run  
   
   `npm install selenium-standalone`
   
 - Clone the projects from the Github
 
### To Run The Tests
 - Open command line 
 - Go to project directory 
 - Type   `selenium-standalone start`  
 - Open new command line 
 - Type  `codeceptjs run --steps --verbose`

## Test-1:
Verify some home page elements.
           
Test Folder: home_test.js  
 
**Run Test-1 with below command:**

`codeceptjs run home_test.js  --verbose`

Either chrome or firefox can be specified in the “browser” field in the 'codecept.json' configuration file, thus test passes successfully.
 

## Test-2:
Test detailed search for one of motorcycle brand.

Test Folder: detail_search_test.js  --verbose
 
**Run Test-2 with below command:**

`codeceptjs detail_search_test.js  --verbose`
 
Chrome should be specified in the “browser” field in the 'codecept.json' configuration file, thus test passes successfully.
 
**NOTE:** If the “browser” in the 'codecept.json' configuration file is specified as firefox, test will fail due to the error caused by Geckodriver in parts where we use Key command.

The error is explained in the following link. 
https://github.com/webdriverio/webdriverio/issues/1344 


## Test-3:
Test search results by using data driven technique.

Test Folder: data_driven_search_test.js  
 
**Run Test-3 with below command:**

`codeceptjs search_data_driven_test.js`  
 
Either chrome or firefox can be specified in the “browser” field in the 'codecept.json' configuration file, thus test passes successfully.



## NOTE:   
To run the tests headless for chrome, put the following desiredCapabilities in the codecept.json file
 
 "desiredCapabilities": { 
     
    "chromeOptions": { 

       "args": [ "--headless", "--disable-gpu", "--window-size=800,600" ] 

   }

 }



## References
-	http://codecept.io/
-	https://github.com/Codeception/CodeceptJS
-	https://www.npmjs.com/package/codeceptjs
-	http://webdriver.io/guide/testrunner/pageobjects.html
-	https://stackoverflow.com/questions/tagged/codeceptjs?page=3&sort=newest&pagesize=15
-	https://www.youtube.com/watch?v=CqeCUyoIEo8
-	https://developer.mozilla.org/en-US/docs/Web/JavaScript
-	https://www.swtestacademy.com/smart-xpath/  

