# Overview:

First React Native Project. This project attempts to copy and design and functionality of Instagram as a way of learning React Native.

# Notes for My Understanding: learning React Native

-Assets Folder
:contains images, audio files, videos => anything we want to bundle with our app 

-App.js
:importing some components from RN -> View component is like a div and Text component is used to display text on the screen
:NO HTML elements just RN components 
:components allow us to represent each thing on the screen in a platform-dependent way, so View component gets turned into something else for Android and something else for IOS (maps components into their native widgets)
:SafeAreaView: means what we display will not get hidden by the notch (new iphone 11): use this component to make sure this doesnt happen => just adds padding
:Text component: display text. has a few props: numberOfLines; onPress(takes in a function as callback)

-When we run our app in browser: yarn start
:runs Metro bundler --> responsible for compiling all of our JS files into a single file

--RUNNING THIS ON AN IOS SIMULATOR 
:xcode app -> open developer tools -> simulator 
:gives us an iphone we can change the ios and the type of iphone
:go to metrobundler in our browser and go to 'run on IOS simulator' option

--RUNNING THIS ON AN ANDRIOD SIMULATIR
:download android studio (developer.andriod.studio)
:standard installation
:click on next 
:SDK manager 
:go to docs.expo.io -> managed workflow -> android studio emulator section
:add the android SDK location to your PATH ...
:go to terminal and copy this command to edit bash command
:open bash -> code ~/.bash_profile
:shows a path
:back to Android studio -> configure SDK manager which shows the android SDK location path => use this path, and use this 
:also add platform-tools to path => copy export statement, replace path with same path above
....rest of video 

--Testing this app on a physical device:
:download Expo Client from App Store 
:scan the barcode on laptop 
:shake device to bring up menu

