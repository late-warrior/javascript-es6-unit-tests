# karma + webpack + jasmine

** Forked and bootstrapped from https://github.com/thelgevold/javascript-es6-unit-tests **

This repo represents a minimal configuration which demonstrates the usage of karma, webpack and jasmine.

## Initial interest

I forked it at a version where running the tests resulted in the issue detailed at https://github.com/webpack/karma-webpack/issues/70.
To fix it, I had to bump up the version of karma and karma-webpack.  See this commit for details.

## Future work

I will use this repo to check whether all webpack config (like the ProviderPlugin, externals etc) are correctly
configured for running tests as well.  Eventually, might want to check gulp-karma integration as well.
