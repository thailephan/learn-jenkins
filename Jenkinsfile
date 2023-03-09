pipeline {
  agent any

  stages {
  // Build
  // Push image to registry
    stage('build') {
        steps {
            sh 'docker build -t thailephan/jenkins-node:latest .'
        }
    }

    stage('deploy image to docker hub') {
        steps {
            // This step should not normally be used in your script. Consult the inline help for details.
            withDockerRegistry(credentialsId: 'dockerhub-thailephanminh') {
                sh 'docker push thailephan/jenkins-node:latest'
            }
        }
    }
  }
  post {
    always {
        sh 'echo always'
    }
  }
}
