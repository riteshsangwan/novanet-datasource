Novanet common datasource module
This moduel is used in leave management application
===

This module build on top of sequelize ORM.
It reads all the sequelize schema definations from a directory and initialize each schema, and exposes them as sequelize Models via a common object.

## How to install ?

Install via npm and git

```
npm install git+https://github.com/riteshsangwan/novanet-datasource.git
```

## How to use?

Include the novanet-datasource into your application using ```require```
```
var novanetDatasource = require('novanet-datasource');
```

Instantiate datasource using new operator passing in the congifuration object.

```
var datasource = new novanetDatasource(config);
```

Errors during instantiation has to be handled by the applicaiton

## Configuration

Configuration object should define datasource configuration inner object with a mandatory properties defined below

- modelsDirectory: This directory path has to be relative to current ```process.pwd()``` path which is currently running. Generally application would be run from the application root directory so in that case this path would be relative to application root.

    NOTE: Path is case sensitive and must not end with slash
    
- dbUrl: mysql connection string
- dbOptions (optional DB options as supported by sequelize)
  See [sequelize](http://sequelize.readthedocs.org/en/latest) docs for more inof

modelsDirectory and dbUrl is mandatory and dbOptions is optional

Sample config object
```
datasource: {
  modelsDirectory: <STRING> <REQUIRED> './models',
  dbUrl: <STRING> <REQUIRED> 'mysql://root:password@localhost:3306/novanet',
  dbOptions: <OBJECT> <OPTIONAL> {}
}
```

## Examples

```
var config = {
    modelsDirectory: './api/models',
    dbUrl: 'postgres://postgres@localhost:5432/challengeapi'
};
var novanetDatasource = require('novanet-datasource');
var datasource = new novanetDatasource(config);
var User = datasource.User;
// use the User model
```