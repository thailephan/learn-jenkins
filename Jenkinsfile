pipeline {
  agent {
    docker {
      image 'node:16.19.1-alpine3.17'
    }

  }
  stages {
    stage('Hi') {
      parallel {
        stage('hello') {
          steps {
            echo 'Hello world'
          }
        }

        stage('echo with docker') {
          steps {
            sh 'echo \'Hello world\''
          }
        }

      }
    }

  }
}