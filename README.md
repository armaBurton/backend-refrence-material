# Express

**Backend Servers and Data Modeling: REST APIs**

*November 2021 Cohort*

## Getting Started

To generate a template for the "Build from Scratch" deliverables, you can run the following command in your terminal:

`npm init @alchemycodelab/app@latest`

Then select the `express sql` application type.

### Configuring git

If you get a warning message whenever you try to pull from a remote git repo (e.g. from Github), try running the following command in your terminal:

`git config --global pull.ff only`

## Class Structure

Each week, lecture & deliverable topics will be divided into two "blocks": Block A & Block B. Each block has two deliverables that will need to be turned in, in addition to a Spotlight topic assignment and weekly retrospective.

Here is a breakdown of the different types of deliverables/assignments:
* 🚧 &nbsp;"Half-Baked" app
  * This is an app that has some code written for it, but is incomplete.
  * It may require adding a feature, fixing a bug, writing a test, or refactoring.
  * You will be practicing reading code and working in an existing codebase for this deliverable.
  * These deliverables are generally smaller in scope and more focused.
* 🏗 &nbsp;"Build from Scratch" app
  * This is an app where little or no starting code will be provided.
  * You will be responsible for creating this app from scratch, meaning that you'll have to run `npm init @alchemycodelab/app@latest` to get started (unless starting code has been provided).
* 🔦 &nbsp;Spotlight Deliverable
  * This is a task or assignment your spotlight presenters may require you to submit.
  * These vary from week to week and are focused on technical and professional development.
* 📓 &nbsp;Weekly Retrospective
  * This serves as a way to journal about what you've learned during the week.
<!-- * 🧰 &nbsp;Weekly Build
  * This is an individual assignment — you must work on this one **solo**. No sharing answers!
  * It's meant as a way to check your understanding and surface any areas that may need additional practice.
  * It will be small in scope and require writing code.
  * You will have a limited amount of time to work on this (1 hour).
  * There may be an additional assessment afterwords with multiple choice questions to check your comprehension. -->

Here's a table to help visualize the structure:

|              | Monday  (Block A)                                                                           | Tuesday (Block A)                                                                     | Wednesday (Block B)                                                                                                                              | Thursday (Block B)                                                                                         | Friday (Hack Day)                                                                                                                              |
| ------------ | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 9am - 1pm PT | Lecture: <br>🏗 &nbsp;"Build from Scratch" <br /><br />Assign:<br />🚧 &nbsp;"Half-Baked"     | Due: <br />Block A 🚧  &nbsp;"Half-Baked" <br /><br />Lecture: <br />🔦 Spotlight Topic | Due: <br />Block A 🏗 "Build from Scratch" <br /><br />Lecture:<br /> 🏗&nbsp; "Build from Scratch"<br /> <br />Assign:<br /> 🚧&nbsp; "Half-Baked" | Due:<br /> Block B 🚧 "Half-Baked" <br /><br />Lecture: <br />🔦&nbsp;  Spotlight Topic<br />Career Services | Due:<br /> Block B 🏗 "Build from Scratch" <br /><br /> Optional Lecture: <br />Hack Day presentation<!-- <br /> <br />🧰 &nbsp;Weekly Build --> |
| 1pm - 2pm PT | Lunch                                                                                       |
| 2pm - 6pm PT | Check-in: <br />🚧&nbsp; "Half-Baked" <br /><br />Assign: <br />🏗 &nbsp;"Build from Scratch" | Office Hours (No Lecture)                                                             | Check-in: <br />🚧 &nbsp;"Half-Baked" <br /> <br />Assign: <br />🏗 &nbsp;"Build from Scratch"                                                     | Office Hours (No Lecture)                                                                                  | Due:<br /> 📓 Weekly Retrospective                                                                                                              |


## General Approach for Building APIs

1. Run `npm init @alchemycodelab/app@latest` from your terminal
2. Copy `.env.example` and paste as `.env`
3. Run `npm run test:watch` from your terminal
4. Open up `__tests__/app.test.js` and write a test for the first endpoint you want to create
   1. Starting with a `GET` or `POST` endpoint is recommended
5. Create a controller file in the `lib/controllers` directory for handling that endpoint
6. Get the test to pass (even if the data is hardcoded in the controller)
7. Once passing, add a model file in `lib/models` and implement it
8. Replace the hardcoded values in your controller with the data coming from the model
9. Make any adjustments to the test/model/controller in order to get the test passing
10. Once passing, ACP your changes and repeat for the next endpoint

## Deploying to Heroku

1. Log into Heroku
2. New > create new app
3. Connect to Github - select relevant repo
4. Under automatic deploys, select 'Wait for CI to pass' and then 'enable auto deploys'
5. Overview > configure add-ons > search for Heroku Postgres in the Add-ons field > submit order form
6. Settings > reveal config vars > enter a key of PGSSLMODE, value of require
7. Deploy > Manual deploy > deploy branch
8. More > run console > npm run setup-db
9. If error persists, click More > Restart all dynos
