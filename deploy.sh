# cross-env BABEL_ENV=test karma start test/unit/karma.conf.js --single-run
# node test/e2e/runner.js
# npm run unit && npm run e2e

node build/build.js
aws s3 rm s3://merryblack.net/index.html
aws s3 rm s3://merryblack.net/static
aws s3 sync dist s3://merryblack.net
