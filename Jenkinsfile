pipeline {
  agent any

  environment {
       def gitCommit = sh(returnStdout: true, script: 'git rev-parse HEAD').trim()
  }

  stages {
  // Build
  // Push image to registry
    stage('build') {
        steps {
            sh "docker build -t thailephanminh/jenkins-node:latest -t thailephanminh/jenkins-node:${gitCommit} ."
        }
    }

    stage('deploy image to docker hub') {
        steps {
            // This step should not normally be used in your script. Consult the inline help for details.
            withDockerRegistry(credentialsId: 'dockerhub-thailephanminh', url: 'https://index.docker.io/v1/') {
                sh "docker push thailephanminh/jenkins-node:latest thailephanminh/jenkins-node:${gitCommit}"
            }
        }
    }
  }
  post {
    always {
        sh 'echo "always"'
    }
  }
}
