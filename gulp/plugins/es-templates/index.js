const gutil = require('gulp-util');
const through = require('through2');
const fs = require('fs');
const extend = require('util')._extend;
const path = require('path');

module.exports = function esTemplates(options = {}) {
  return through.obj(function(file, encoding, callback) {
    if (file.isNull()) {
      this.push(file);
      return callback();
    }

    if (file.isStream()) {
      this.emit(
        'error',
        new gutil.PluginError('es-templates', 'Streaming not supported'),
      );
      return callback();
    }

    try {
      const renderTemplate = require(file.path);
      file.contents = new Buffer(
        renderTemplate({ context: options.context || {} }),
      );
    } catch (error) {
      this.emit('error', new gutil.PluginError('es-templates', error));
    }

    this.push(file);
    callback();
  });
};
