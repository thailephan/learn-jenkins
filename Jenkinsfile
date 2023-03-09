pipeline {
  agent any

  environment {
       gitCommit = "${GIT_COMMIT[0..7]}"
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
                sh "docker push thailephanminh/jenkins-node:latest"
                sh "docker push thailephanminh/jenkins-node:${gitCommit}"
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
