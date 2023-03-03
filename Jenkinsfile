pipeline {
  agent any
  
  stages {
    stage("script") {
      steps {
        sh 'whoami'
        sh 'which docker'
      }
    }
    
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
