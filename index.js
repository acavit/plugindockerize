const fastify = require('fastify')({ logger: true })
const  dockerService = require('./DockerService.js')

//var dock = new Docker({socketPath: '/var/run/docker.sock'});

fastify.route({
  method: 'GET',
  url: '/',
  schema: {
    // request needs to have a querystring with a `name` parameter
    querystring: {
      name: { type: 'string' }
    },
    // the response needs to be an object with an `hello` property of type 'string'
    response: {
      200: {
        type: 'object',
        properties: {
          hello: { type: 'string' }
        }
      }
    }
  },
  // this function is executed for every request before the handler is executed

  handler: async (request, reply) => {
  	this.dockerServiceInst = new dockerService();
  	//this.dockerServiceInst.pullDockerImage('rubinlab/mysql', 'latest');
  	this.dockerServiceInst.runContainer('rubinlab/mysql','latest', null , null);

  	/*dock.run('ubuntu', ['bash', '-c', 'uname -a'], process.stdout, function (err, data, container) {
  		console.log(err);
  		console.log(data);
  		console.log(container);
	});*/

    return { hello: this.dockerServiceInst.listContainers() }
  }
})

fastify.route({
  method: 'GET',
  url: '/a',
  schema: {
    // request needs to have a querystring with a `name` parameter
    querystring: {
      cont: { type: 'string' }
    },
    // the response needs to be an object with an `hello` property of type 'string'
    response: {
      200: {
        type: 'object',
        properties: {
          containerList: { type: 'string' }
        }
      }
    }
  },
  // this function is executed for every request before the handler is executed
  beforeHandler: async (request, reply) => {
    // E.g. check authentication
  },
  handler: async (request, reply) => {
    return { containerList: 'container 1' }
  }
})

const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()