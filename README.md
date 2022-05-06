=====Getting Started=====

-Install Ionic 
Install Ionic Framework on your computer by following the instructions on the official web (https://ionicframework.com/docs/installation/cli). If you already have installed a valid v4 ionic version, you can skip this step. 

-Copy the theme code on your computer 
After downloading the zip file from Envato, copy the content of src folder into your computer. You will see the following files and folders: 

-Install the app dependencies and test in browser 
Access via your ionic CLI to the installation folder and execute the following command in order to install the necessary plugins and start running the app in your browser: 

ionic serve
 
Say yes to "Install @ionic/app-scripts?" question 

=====Fonts=====
This app starter has three different google fonts: inconsolata, opensans and montserrat  
 
You can change the current theme font by commenting or uncommenting the proper lines on the following files: "src/global.scss"

=====Firebase=====
To add the connection to your app, go to the dashboard of your Firebase Firestore project app and hit “Add Firebase to your web app” which will bring up your configuration object.

Add this to src/app/environments/environment.ts and src/app/environments/environment.prod.ts

The content should be shown as follow:

  firebase: {
    apiKey: "AIzaSyCXXXXXXXXXX3lbPQXXXXXXXXXTDg",
    authDomain: "myapp-XXXXXa.firebaseapp.com",
    databaseURL: "https://myapp-XXXXa.firebaseio.com",
    projectId: "myapp-XXXXXa",
    storageBucket: "",
    messagingSenderId: "4XXXXXXXXX583",
    appId: "1:43XXXXXXXX3:web:666XXXXXXXX4ba"
  }

You can test the firebase connection in the following pages:
/pages/activity
/pages/categories

Simple Admin dashboard examples are:
/dashboard/post
/dashboard/categories
/dashboard/user

You can see these pages in the side menu with a firebase icon.

=====FAQ=====
do you accept modifications requests? 
Yes, we can implement different modifications by requests, please contact to info@ionic4themes.com.



