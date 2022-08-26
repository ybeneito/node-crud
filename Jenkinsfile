pipeline{
    agent any
    tools {nodejs '16.14.0'}

    stages{

        stage('Cloning git && npm install') {
            steps {
                git url: 'https://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@github.com/ybeneito/node-crud.git'
                sh 'npm install'
            }
            post{
                success{
                    echo "====++++mocha executed successfully++++===="
                }
                failure{
                    echo "====++++mocha execution failed++++===="
                }
            }
        }

        stage("mocha install"){
            steps{
                sh "npm install mocha"
            }
            post{
                success{
                    echo "====++++mocha install executed successfully++++===="
                }
                failure{
                    echo "====++++mocha install execution failed++++===="
                }
            }
        }
        stage("mocha run"){
            steps{
                sh "npm test"
            }
            post{
                success{
                    echo "====++++mocha run executed successfully++++===="
                }
                failure{
                    echo "====++++mocha run execution failed++++===="
                }
            }
        }
        stage("git") {
            steps {
                sh "git checkout tested"
                sh "git merge master"
                sh "git push origin tested"
            }
            post{
                success{
                    echo "====++++git successful++++===="
                }
                failure{
                    echo "====++++git failed++++===="
                }
            }
        }

    }
    post{
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}