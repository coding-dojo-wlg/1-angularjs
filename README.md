# 1-angularjs

## Get the project

#### Clone it and install dependencies
```
git clone git@github.com:coding-dojo-wlg/1-angularjs.git
cd 1-angularjs
npm install
bower install
```

#### Run the fake 'backend' service with [json-server](https://github.com/typicode/json-server)
```
# json-server is required as a development dependency in the package.json
./node_modules/json-server/bin/index.js db.json

# another option is to install it globally
npm install -g json-server
json-server db.json
```

#### Run the project!
```
grunt connect
```




## Create a new one

Using a [yeoman](http://yeoman.io/) generator: generator-angular.

```
npm install -g yo generator angular grunt grunt-cli bower generator-karma
mkdir myproject && cd myproject
yo angular

grunt connect
```

Yeoman scaffolds the app and installs its node and bower dependencies so you will have a working website at this stage.

Create a fake backend with [json-server](https://github.com/typicode/json-server):

```
# add it to the project's dependencies
cd myproject
npm install --save-dev json-server

# or install it globally
npm install -g json-server

# create a db.json file containing your fake data
```
