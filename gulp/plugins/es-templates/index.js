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
      const renderPageTemplate = require(file.path);

      file.basename = 'index.html';

      const pagePath = file.relative.replace(/\/?index\.html$/, '');
      let context = {};

      if (typeof options.getContext === 'function') {
        context = options.getContext(pagePath);
      }

      file.contents = new Buffer(renderPageTemplate(context));
    } catch (error) {
      this.emit('error', new gutil.PluginError('es-templates', error));
    }

    this.push(file);
    callback();
  });
};
