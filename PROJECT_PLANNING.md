# Final Project

## Daily

* Team stand-ups
  * Blocked
  * Explain what you did yesterday
  * Explain what you will do today
* Instruction stand-ups
  * Present PRs and code reviews from previous day
  * Show ticket in flight for the day
  * Demo current `dev` branch
  * Update plan/goals
* CODE

## Working in groups with git

* Make a GitHub org
* Keep the PRs small with many commits
  * feat/CARD-NUMBER-NAME_OF_FEATURE (feat/card-1-create-people-route)
  * fix/CARD_NUMBER-NAME_OF_FIX (fix/card-2-buttons-should-be-red)
  * **WONT NEED FOR THIS SCOPE** hotfix/CARD_NUMBER-NAME_OF_HOTFIX (hotfix/broke-prod-oops)
  * The maker of the PR is the one who merges!
  * Add a useful title and description (changelog, screenshots, etc) to the PR
* Setup GitHub
  * Add CI! (GitHub workflow)
  * Default branch dev
  * Add rules to force reviews and CI
  * Only allow squash merges

### CI/CD

* Two envs (two heroku apps) (my-app-staging and my-app)
  * staging - deployed from dev
  * production - deployed from main
* Setup auto deploy

## Preparing for presentations

### Keep a diary of what you did each day

* What did you do
* Why was it easy/hard/interesting?

## Presentations

* Use a shared Zoom background for your group
* 20 minute presentation in front of the cohort
  * introduce yourself as a developer (3 minutes)
  * spend some time talking about the product (7 minutes)
  * spend some time talking about the tech (10 minutes)
* 2 - 3 minute lightning presentation in front of the rest of Alchemy
  * a quick demo (tech talk optional) of your completed app; the highlights

## Flow of the week

### Day 0 (Thursday)

* Organize & formulate your idea
* Create & submit a team agreement (can be a link to your Miro board)
  * When will you meet for standup?
  * When will you take breaks?
  * How will you deal with conflict?
  * What other ground rules do you need to set in order to be successful?
* Plan
  * What technologies will you use
  * User stories
  * Models
  * Routes (you may not need all CRUD routes for every model)
  * Define an MVP
  * Start breaking up work into small pieces
  * What could you demo on each chunk?
* Start playing with some of the tech that you may use
* Proof of concept - make sure your plan makes sense

### Day 1 (Friday)

* Formalize your idea
* Solidify plan
* Start diagraming data models
* Start implementing your plan
* **DEMO**: Your proof of concept

### Day 2 (Monday)

* Continue implementing plan
* Move slow
* By end of day. You should have **some** features finished

### Day 3 (MVP - Tuesday)

* Continue implementing plan
* Move slow
* If you're not close to MVP maybe reconsider what MVP is
* By end of day. You should have **some** features finished
* **DEMO**: Your (potentially incomplete) MVP

### Day 4 (MVP FOR REAL - Wednesday)

* MVP is a must by Wednesday
* Push to main and production envs
* Continue implementing plan
* Move slow
* By end of day. You should have **most/all** of your MVP features finished
* **DEMO**: Your MVP deployed on production

### Day 5 (Stretch DO COOL THINGS - Thursday)

* Stretch goals
* Make sure things look good
* Polish your application (fix bugs, check UX, etc.)
* Plan presentations

### Day 6 (Presentation day - Friday)

* Continue to practice presentation
* You should only be tweaking your code (no major changes)
* Eat lunch
* Meditate
