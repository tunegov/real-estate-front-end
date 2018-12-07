# Front-End

### Repository
First of all, clone the repository:
by https
```sh
git clone https://puneet_123@bitbucket.org/reyeselsamad1/front-end.git -b master
```
or ssh
```sh
git clone git@bitbucket.org:reyeselsamad1/front-end.git -b master
```
Go to the repository folder
```sh
cd front-end
```
Setup local user 
**Don't use your personal git user**
```sh
git config user.name "Puneet Oberoi"
git config user.email "puneet@reyeselsamad.com"
```

### Launch
Install dependencies
```sh
npm i
```
and start front-end
```sh
npm start
```

### Working with git
Create a new branch from master and checkout
```sh
git branch <branch-name>
git checkout <branch-name>
```
**Build you project!** (it's temporary, until we set up continuous delivery)
```sh
npm run build
```
After you've done the code changes commit them
```sh
git add -A
git commit -m "your message"
```
Rebase on master
```sh
git rebase -i origin/master
```
and squash/fixup commits into the one

Push it to master
```sh
git push origin <branch-name>
```
After you finish to work on your feature you can merge changes to master
Create a pull-request to master and after you check that everything is correct, you can merge it

### Deployment
Connect to AWS Server by SSH
```sh
ssh bitnami@18.205.110.84
```
Go to front-end folder
```sh
cd app/front-end
```
and pull changes
```sh
git fetch -p -a
git pull
```
If you added new dependencies, install them
```sh
npm i
```
then go up and restart FRONT-END process
```ssh
cd ..
pm2 start environment.json
```
