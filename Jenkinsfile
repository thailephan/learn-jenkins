/* Requires the Docker Pipeline plugin */
pipeline {
    agent { docker { image 'node:16.19.1-alpine3.17' } }
    stages {
        stage('build') {
            steps {
                sh 'node --version'
            }
        }
    }
}