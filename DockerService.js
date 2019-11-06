
const Docker = require('dockerode');
 //var dock = new Docker({socketPath: '/var/run/docker.sock'});
 module.exports = class DockerService {
  constructor() {
    this.dockerInst = new Docker({socketPath: '/var/run/docker.sock'});
  }

   getInstance(paramId , paramName) {
    return "get instance";
  }

   getDockerImage() {
    return "listed";
  }

   pullDockerImage() {
    return "listed";
  }

    pullDockerImage(paramPath , paramTag) {

          this.dockerInst.pull(paramPath+':'+paramTag, function (err, stream) {
      //console.log(err);
                console.log(stream);

          });
    return "listed";
  }

   listContainers() {
    return "listed";
  }

  createContainer() {
    return "created";
  }

  registerContainerToDb() {
    return "created";
  }
/*
  runContainer(paramPath , paramTag , paramCmd , paramName) {
    
                                                          //null = ['bash', '-c', 'uname -a'],
              this.dockerInst.run(paramPath+':'+paramTag, ['-it'], process.stdout).then(function(data) {
                var output = data[0];
                var container = data[1];
                console.log('output status code :'+output.StatusCode);
                console.log('output :'+JSON.stringify(output));
                console.log('container :'+JSON.stringify(container));
                //return container.remove();
              }).then(function(data) {
                console.log('after pulling done '+data);
              }).catch(function(err) {
                console.log(err);
              });


    return "created";
  }
*/
  runContainer(paramPath , paramTag , paramCmd , paramName) {
    
                                                          //null = ['bash', '-c', 'uname -a'],
              this.dockerInst.run(paramPath+':'+paramTag, ['-it'], [process.stdout, process.stderr], {Tty:false}, function (err, data, container) {
  //...
              }).on('container', function (container) {
                console.log('on container '+ JSON.stringify(container));
              }).on('data', function (data) {
                console.log('on data '+ JSON.stringify(data));
              });


    return "created";
  }




}
