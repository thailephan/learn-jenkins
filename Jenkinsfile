pipeline {
  agent {
    docker {
      image 'node:16.19.1-alpine3.17'
    }
  }
  stages {
    stage("script") {
      steps {
        sh 'whoami'
        sh 'which docker'
      }
    }
  }
}
