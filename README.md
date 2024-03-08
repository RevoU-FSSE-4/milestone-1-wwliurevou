Welcome to my website.
Please find it here : https://widyaliu.site/
![Header](content/milestone1_home.png)

<h1 align="center"> Hellooooourrrr, thank you for visiting! <img src="https://media.tenor.com/JhG1ASxYJNMAAAAi/twerling-insomnia.gif" width="50px" height="50px"/> </h1>

Here are the instructions on how to deploy my website from github to the custom domain.

## Table of contents

-  Netlify Deployment
-  Purchasing Custom Domain
-  Connecting Netlify with the Custom Domain

Assignment : to create a readme file that includes relevant information about the deployment process, connecting to a custom domain, and any additional details or configurations.

## Netlify Site Deployment

1.Go to your team’s Sites page, open the Add new site menu, and select Import an existing project.
2.Select the Git provider where your project is hosted.
3.Select your project’s existing repository.
4.Adjust site and build settings if necessary.

##Purchasing Custom Domain
1.Go to Niagahoster
2.Enter the domain that you preferred. In this case I chose widyaliu.site
3.Proceed with the payment
4.You will receive a confirmation email from your domain registry

##Connecting Netlify with the Custom Domain
1.On your Netlify, go to "Setup your site" Section, click "Setup a Custom Domain"
2.Please enter the domain that you purchased from Niagahoster. e,g widyaliu.site then click "Verify"
3.Go back to Netlify Dashboard, Open your Project, Custom Domain. You will see your custom domain is pending for External DNS.
4.Now go to domains, scroll down and look for Name Severs.
5.Copy all 4 Name server to point your domain’s name servers to Netlify, paste all these 4 to :
You should be able to find this in Domains-> Manage ->Domain Overview -> Click change on Name servers
6.Congratulations! This is all completed! Please wait for up to 1x24 hours for your custom domain to be connected and hosted

## Changing your repository

1.Go to Netlify, click on site configuration on the left side, scroll down to Build&Deploy then go to Continuous Deployment.
You can either link to a different repository or unlink your current repository.

![alt text](https://github.com/RevoU-FSSE-4/module-2-wwliurevou/blob/main/asset/manage%20repository.png)

2.In this example I will move forward with link to a different repository.
![alt text](https://github.com/RevoU-FSSE-4/module-2-wwliurevou/blob/main/asset/linktodifferent.png)

3.You will then be directed to this site. Pick deploy with GitHub since all our assignments are submitted through it.
Make sure that your repository is NOT private. Please change it to Public in GitHub since the settings is private by default. /
![alt text](https://github.com/RevoU-FSSE-4/module-2-wwliurevou/blob/main/asset/deploywithgithub.png)

4.Next kindly select your branch and then click on the repository that you want it published.
![alt text](https://github.com/RevoU-FSSE-4/module-2-wwliurevou/blob/main/asset/chooserep.png)

5.Files will be uploaded from repository to your netlify, please continue by clicking deploy module.
![alt text](https://github.com/RevoU-FSSE-4/module-2-wwliurevou/blob/main/asset/deploy.png)

6.You will then be directed to this page, you can check the deploy log if you see any error
![alt text](https://github.com/revou-fsse-3/milestone-1-wwliurevou/blob/main/asset/deploy3.PNG)

7.As you can see the status on display log are all completed.
![alt text](https://github.com/RevoU-FSSE-4/module-2-wwliurevou/blob/main/asset/deploycompleted.png)

8.Lastly, please click publish deploy, voila your site is ready and published succesfully!<3
![alt text](https://github.com/RevoU-FSSE-4/module-2-wwliurevou/blob/main/asset/publishdeploy.png)
