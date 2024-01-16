# hacklytics-portal-2023

The portal for Hacklytics 2023 and onwards.

Steps for running
1. npm install -- install dependencies (e.g. react-toastify, sass)
2. if you 'npm start' at this point you'll see: 
"ERROR in ./src/App.tsx 11:0-40
Module not found: Error: Can't resolve './aws-exports' in '/Users/vicentemiranda/hacklytics-portal-2024/hacklytics-portal-2023/src'"
hence you have to sudo npm install -g @aws-amplify/cli to install the amplify CLI globally (now you can run amplify commands)
3. now you sudo amplify configure in order to sign onto aws (if you don't have an iam user on identity center, karthik/john can help you make one)
you should see this: 
Follow the instructions at
https://docs.amplify.aws/cli/start/install/#configure-the-amplify-cli

to complete the user creation in the AWS console
https://console.aws.amazon.com/iamv2/home#/users/create
use your IAM user sign on and secret key and access key to sign on to the amplify CLI. 
4. lastly sudo amplify pull --appId d1nefwyjdgyk10 --envName staging in order to setup the backend amplify. itll log you onto amplify after which you should paste your cli key in to the cmd line (or itll complete automatically). proceed to filling out the form for local setup (build folder, run path, build command, etc). hit y for do you plan on updating backend.
5. lastly create a .env in your root dir and copy the following into it
REACT_APP_HACKLYTICS_ADMIN_SETTINGS_ID=9996afdb-c7e7-46fc-bfae-b0939b9027d0
REACT_APP_CHECKPOINT_URL=localhost:3000
6. npm start -- this should work as intended now
