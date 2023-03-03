pipeline {
  agent {
    docker {
      image 'node:16.19.1-alpine3.17'
    }
  }
  stages {
    stage('verify tooling') {
      steps {
        sh '''
          docker compose version
          docker version
        '''
      }
    }
    
    stage('build') {
      steps {
        sh 'echo "build"'
      }
    }
  }
}
