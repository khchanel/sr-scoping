sr-scoping
==========

Scoping mobile/tablet app for SR Construction


## Client

  The client is a single page HTML5 web application optimized for mobile devices
  powered by AngularJS 1.2 and uses onsenui 1.0 for mobile optimized CSS

  The application is designed to work with modern browsers such as
  Chrome 35+, Firefox 30+, IE 11+
  mobile browser: Android 4.4, iOS 7

  It is known that the application will not work with older browser like
  IE 9 and below
  As they are not supported by the underlying framework

  The application is optimized for Chrome and webkit browser.


## Server

  The application is designed to work with SR RESTful web service API
  A reference implementation is on [khchanel/sr-api](//github.com/khchanel/sr-api)


## Build

  First install development tools:

    1. nodejs & npm
    2. ruby & compass (from ruby gem)
    3. grunt-cli (from npm)
    4. bower (from npm)
    5. cordova (optional from npm)
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
