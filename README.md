# Process SQS Queue with Lambda (using AWS SAM & CodePipeline)

Development workflow is simply to make your code changes, npm run test and commit code to the repo.

Code Pipleline triggers on commit, run tests and deplys the project using AWS SAM.

Code Pipeline config in buildspec.yml

AWS SAM config in template.yml