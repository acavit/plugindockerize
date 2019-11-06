

 //var dock = new Docker({socketPath: '/var/run/docker.sock'});
 module.exports = class OsService {
  
  constructor(paramDockerInst) {
    this.dockerInst = paramDockerInst;
  }

  getAvailableMemory() {
    return "memory";
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
