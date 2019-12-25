# Process SQS Queue with Lambda (using AWS SAM & CodePipeline)

Dev workflow is simply to make code changes, npm run test and commit code to the repo.

Code Pipleline triggers on commit, runs tests and deploys the project using AWS SAM.

Code Pipeline config is in buildspec.yml and AWS SAM config in template.yml