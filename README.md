# karma + webpack + jasmine

** Forked and bootstrapped from https://github.com/thelgevold/javascript-es6-unit-tests **

This repo represents a minimal configuration which demonstrates the usage of karma, webpack and jasmine.

## Initial interest

I forked it at a version where running the tests resulted in the issue detailed at https://github.com/webpack/karma-webpack/issues/70.
To fix it, I had to bump up the version of karma and karma-webpack.  See this [commit](https://github.com/late-warrior/javascript-es6-unit-tests/commit/74d78519019422d67dcf163cea0eba9e1ff7aa73) for details.

## Work done on top

* Tried using ProviderPlugin, externals etc and checked that test cases were being picked up correctly
* Attempted to make use of webpack-dev-server.  There seems to be some issue with my configuration currently.

## Future work

* Fix webpack-dev-server issue
