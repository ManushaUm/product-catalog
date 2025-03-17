pipeline {
    agent any
    
   
    
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/ManushaUm/product-catalog.git'
            }
        }
        
        stage('Install Backend Dependencies') {
            steps {
                echo 'Install Backend Dependencies'
                //dir('back-end') {
                    //sh 'npm install'
                //}
            }
        }
        
        stage('Backend Tests') {
            steps {
                echo 'Backend testing'
            }
        }
        
        stage('Install Frontend Dependencies') {
            steps {
                echo 'Install Frontend Dependencies'
                //dir('front-end') {
                    //sh 'npm install'
                //}
            }
        }
        
        stage('Frontend Tests') {
            steps {
                echo 'Frontend testing'
            }
        }
        
        stage('Build Frontend') {
            steps {
                echo 'Build Frontend'
               // dir('front-end') {
                    //sh 'npm run build'
                //}
            }
        }
        
        stage('Deploy') {
            steps {
                // This is a placeholder for your deployment steps
                // Depending on your infrastructure, you might use different tools
                echo 'Deploying application...'
                // Example: Copy files to a server
                // sh 'scp -r backend/* user@your-server:/path/to/backend/'
                // sh 'scp -r frontend/build/* user@your-server:/path/to/frontend/'
            }
        }
    }

}