'use strict';

var async = require('async');

exports.up = function (db, callback) {
  async.series([
    // Test table
    db.runSql.bind(db,
      'CREATE TABLE TestTable ( ' +
        'id bigint NOT NULL AUTO_INCREMENT, ' +
        'name text NOT NULL, ' +
        'email character varying(140) NOT NULL, ' +
        'description text, ' +
        'createdAt timestamp NOT NULL, ' +
        'updatedAt timestamp NOT NULL, CONSTRAINT pk_testtable PRIMARY KEY (id)' +
      ');')
  ], callback);
};

exports.down = function (db, callback) {
  async.series([
    db.dropTable.bind(db, 'TestTable')
  ], callback);
};
