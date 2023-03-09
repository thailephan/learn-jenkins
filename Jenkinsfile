pipeline {
  agent any

  stages {
  // Build
  // Push image to registry
    stage('build') {
    }

    stage('deploy image to docker hub') {
        // This step should not normally be used in your script. Consult the inline help for details.
        withDockerRegistry(credentialsId: 'dockerhub-thailephanminh') {
            sh 'docker build -t thailephan/jenkins-node:latest .'
            sh 'docker push thailephan/jenkins-node:latest'
        }
    }
  }
  post {
    always {
        sh 'echo always'
    }
  }
}
