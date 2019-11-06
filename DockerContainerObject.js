

 //var dock = new Docker({socketPath: '/var/run/docker.sock'});
 module.exports = class DockerContainerObject {
  
  constructor(paramName, paramId, paramStatus) {
    this.name = paramName;
    this.id = paramId;
    this.status = paramStatus;
  }

  getContainerName() {
    return ;
  }

  killProcess() {
    return "memory";
  }

  allocMemoty() {
    return "mem allocated";
  }

  enqueueProc(){

  }

  dequeueProc(){

  }

  killProcess() {
    return "memory";
  }

}
