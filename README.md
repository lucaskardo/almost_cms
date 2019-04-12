**Getting Started with almost CMS**

the deployments script is coming soon! It will make the deployment A LOT SHORTER!



        1. prerequisites
        2. Clone github repo` `
        3. Install amplify
        4. Install the amplify CLI
        5. Configure amplify
        6. Init amplify
        7. Add authentication
        8. Add Storage
        9. Add API 
        10. Push Amplify Changes
        11. Create a public bucket and host your static site
        12. Copy to Bucket Function
            1. Create i am policy
            2. Deploy the lambda function
            3. Deploy the api
            4. Add the API route in your app
        13. Deploy Amplify

1. ** Prerequisites **
    1. Make sure you have node.js and npm installed.You can checkout this [tutorial](https://medium.com/@lucaskay/install-node-and-npm-using-nvm-in-mac-or-linux-ubuntu-f0c85153e173 "Tutorial")  to instal npm and node in mac, linux (debian/ubuntu).
    2. Make sure you have an AWS account. If you don't have an AWS account, you can easily create one here. Don't worry, everything you do with this project will fall within the AWS free tier limit! if you deploy to production, you'll have a tiny bill of perhaps a dollar a month! 
2. Clone the git repository
3. Go into the app directory of the project ` cd almost_cms/almost_cms `
4. Install all dependencies by running `$ npm install`
5. Make sure that amplify installed correctly by running `$ amplify `
    3. If amplify didnt install, run  `$ npm install aws-amplify aws-amplify-react` 
    4. If amplify didnt install, run ` $ npm install -g @aws-amplify/cli`
6. Configure amplify by running `$ amplify configure `
    5. The following short video [tutorial](https://www.youtube.com/watch?v=fWbM5DLh25U) will help you with the configuration 
7. Initialize a new amplify project inside your react app `$ amplify init `
8. Add authentication `$ amplify add auth`

(images/image_1)


