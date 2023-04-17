# Blossom Books (for tech test)

Link: https://643ddb6f92ade427edda4769--classy-marzipan-c9e4ad.netlify.app/

![BB](https://user-images.githubusercontent.com/119549394/232633436-bba6ec67-abfd-4c36-af96-d1a62c0000d2.png)

<img width="250" src="https://github.com/StanleyY7/gbooksTechTest/actions/workflows/main.yml/badge.svg"/>

## Overview

To create a web application that fetches data from the Google Books API (query being "flowers") and displays it on a table. Further information about the books (image, description) should be displayed somehow (I did it via a new route upon clicking the relevant book in the table). Design and creativity was left to us to determine.

### Requirements

#### MVP

-   Fetch and display a list of books related to flowers from the following REST API: https://www.googleapis.com/books/v1/volumes?q=flowers
-   Present the fetched data in a table, including book title, authors, and published date.
-   Enable users to view more details of a selected book, such as title, subtitle, authors, image, and description.
-   Showcase creativity and add a personal touch to the application.
-   Include a README file explaining the app's features and the creative elements introduced.

### Tech Stack

- React: To create a responsive and modular frontend with reusable components.
- Typescript: For type-safe coding and identifying potential errors before running the frontend.
- React Testing Library: For creating comprehensive and reliable tests for components and functions/services.
- Redux: To manage state "globally" and to be able to test it to via both unit and integration tests. Also Redux can easily be scaled up by adding new slices for new future features and their states (i.e. a form with it's own state/slice). 
- React Query: For fetching data easily and managing that data easily between components.   

## Build Steps

1. Run the Frontend React application, by executing the following commands from the root folder of this project:

       cd book-finder
       npm install
       npm run dev

## Design Goals / Approach

-   In terms of the actual design for the frontend. I wanted to keep it simple (minimalist) yet still modern with a very basic color scheme/rules (60-30-10 rule, rule of thirds). I feel that I can always add things and change things around when I create something that is “minimalist” in style. 

-   My approach was to set everything up (React, TypeScript, Redux, RTL, Jest), create the components one by one, and ensure that the logic for everything was working before doing responsiveness or “cleaning” up the code further. I ensured that my organization was paramount by having everything sorted and organized before jumping into the code. This led to a quicker project completion as well as less refactoring needing to be done.

- As well, I have completed a similar project to this (Link: https://github.com/StanleyY7/googlebooks), however that project used modals to change what was being displayed and so I wanted to use React-Router this time to see first-hand which approach is more efficient to create.  

## Features

- All of the mvp requirements.
- Sorting by title, authors or published date.
- Landing/welcome page
- Responsive
- Testing

### Creativity

- Box shadow.
- Light-color scheme.
- BookCard component and Table Component looks like a book. 
- Landing/Welcome Page.
- I created the icon/logo.

## Change logs

### 17/04/2023

- Setup the project with relevant dependencies (React, Redux (Toolkit), React-Router, RTL, Jest, React-Query).
- Created components and pages for the project.
- Created logic for displaying/fetching data.
- Responsiveness of the website completed (all pages/components).
- Creation and configuration of test environment and data.
- Tests for most components (e2e, integration, navigation) and tests for redux.
- Structure of Readme.

### 18/04/2023

- Setup Github Workflow for tests.
- Added badge for workflow to Readme, completed Readme.
- More tests

## Challenges

The main challenge I encountered was with sorting as I was not sure why it was not working initially, till I looked into the JSON data and realized that some authors had no value (null) as well as published date too so it was returning an error as there was nothing to compare it against. To fix this I implemented checks via ternary operators so that if there's nothing to compare it to it would give it a default value ("") so that the sort logic would still work. 

