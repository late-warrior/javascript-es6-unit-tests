var context = require.context('./source', false, /-spec\.js$/);
context.keys().forEach(context);