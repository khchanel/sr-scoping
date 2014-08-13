sr-scoping
==========

Scoping mobile/tablet app for SR Construction



## Build

  First install development tools:
    
    1. nodejs & npm
    2. ruby & compass (from ruby gem)
    3. grunt-cli (from npm)
    4. bower (from npm)
    5. cordova (from npm)
    6. yo (optional from npm)
    
  Then install project dependencies:
  
    1. npm install              # install development tools.
    2. bower install            # install bower dependencies.
    3. grunt phonegap:check     # check for phonegap and follow instructions.
      1. cordova platform add android.
      2. cordova platform add ios.


  Build project:
    
    1. grunt build
    2. grunt phonegap:build  (or use cordova build)


## Running

  For development:
  
    use grunt serve
  
  
  For production:
  
    after running grunt build, deploy files from /client/dist folder to web server
