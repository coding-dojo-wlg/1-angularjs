# 1-angularjs

## Get the project

#### Clone it and install dependencies
```
git clone git@github.com:coding-dojo-wlg/1-angularjs.git
cd 1-angularjs
npm install
bower install
```

#### Run it

```
grunt connect
```

and run our json 'backend' service
```
json-server db.json
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


