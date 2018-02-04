## Bonus - 2 
 
- Firstly  I add multiple option to the codecept.json  folder.

- I execute the tests using run-multiple command.
 
- To run all suites for all browsers: `codeceptjs run-multiple --all` 
 
- To run basic suite for all browsers: `codeceptjs run-multiple basic` 
 
- To run basic suite for chrome only: `codeceptjs run-multiple basic:chrome` 
 
- If there is smoke suite, to run smoke suite for firefox and to run basic suite for chrome:`codeceptjs run-multiple basic:chrome smoke:firefox`
 
 

"multiple":{
  
    "basic":{
     
     "browsers":[
        
        "chrome",
        
        "firefox"
     ]
  },
  
    "smoke":{
     
      "grep":"@smoke",
     
      "outputName":"smoke",
      
      "browsers":[
      
          "firefox",
         
          {"browser":"chrome","windowSize":"1200x840"}
     ]
  }
}
 
## References
- http://codecept.io/advanced/
