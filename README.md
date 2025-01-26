# hacklytics-portal-2023

The portal for Hacklytics 2023 and onwards.

Importantly, in order to link with AWS Amplify, make sure you have an AWS IAM user and an access key and secret key. Karthik S (karkir0003@gmail.com) can set you up with an account if you don't have one already.

Steps for running
1. `npm install` -- install dependencies (e.g. react-toastify, sass). This might take a minute or so.
2. Once dependencies are installed, you want to make sure you have the Amplify CLI installed locally. Run
`sudo npm install -g @aws-amplify/cli`
and wait for the installation to complete (now you can run Amplify commands). 
3. After installing the CLI, run `sudo amplify configure` to start the wizard. Fill out the steps (location, profile, preferred language) after signing on to your IAM account (it should prompt you with a password and 2FA if you have it set up).  You also need AdministratorAccess-Amplify permissions on that user. If you do, it'll allow you to continue. Insert your access key and secret key at this point as well. See https://docs.amplify.aws/cli/start/install/#configure-the-amplify-cli for more details.
4. Once this is done, run `sudo amplify pull` in order to setup the back-end. Note that if you see the error 🛑 File at path: '/Users/vicentemiranda/hacklytics-portal-2024/hacklytics-portal-2023/amplify/team-provider-info.json' does not exist this means you have to run `amplify configure project`.
5. Lastly create a .env in your root dir and copy the following into it (otherwise it'll believe you don't have any admin set-up and load indefinitely).
```
REACT_APP_HACKLYTICS_ADMIN_SETTINGS_ID=9996afdb-c7e7-46fc-bfae-b0939b9027d0
REACT_APP_CHECKPOINT_URL=localhost:3000
```
6. `npm start` -- this should work as intended now
7. Debugging: if you see the error under GraphQL about any of the API types, delete the GraphQL folder and run `amplify codegen` to replace it.
