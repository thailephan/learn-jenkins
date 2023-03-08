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
      parallel {
        stage('build 1') {
          steps {
            sh 'echo Build 1'
          }
        }

        stage('build 2') {
          steps {
            sh 'echo "Build 2"'
          }
        }
      }
    }
  }
}
