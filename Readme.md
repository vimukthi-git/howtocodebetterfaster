 - Add the config.json with an auth parameter for local, dev prod envs
 - Load the config in app.js
 - Provide the config to controllers in a koa middleware (Note this is just an example, There is a better way to do configs in Koa)
 - Use the config in auth controller to remove authentication for local env
 - As you can see koa middleware is a great example of chain of control pattern



Answer is in the branch ‘5_chain_of_control’
