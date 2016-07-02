'use strict';

import gulp   from 'gulp';
import config from '../config';

function isOnlyChange(event) {
  return event.type === 'changed';
}

gulp.task('watch', ['browserSync'], function() {

  // Scripts are automatically watched by Watchify inside Browserify task
  gulp.watch(config.styles.src, function(event) {

    if(isOnlyChange(event)) {
      console.log("only a change");
    } else {
      console.log("new files?");
    }

    gulp.start('sass');

  });
  gulp.watch(config.images.src,               ['imagemin']);
  gulp.watch(config.sourceDir + 'index.html', ['copyIndex']);

});
