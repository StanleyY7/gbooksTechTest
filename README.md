# Blossom Books (for tech test)

Link



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

-   how to build / run project
-   use proper code snippets if there are any commands to run

## Design Goals / Approach

-   Design goals
-   why did you implement this the way you did?

## Features

- All of the mvp requirements.
- Sorting by title, authors or published date.
- Landing/welcome page
- Responsive
- Testing

## Change logs

### 04/17/2023

- Setup the project with relevant dependencies (React, Redux (Toolkit), React-Router, RTL, Jest, React-Query).
- Created components and pages for the project.
- Created logic for displaying/fetching data.
- Responsiveness of the website completed (all pages/components).
- Creation and configuration of test environment and data.
- Tests for most components (e2e, integration, navigation) and tests for redux.
- Structure of Readme.

## Challenges

The main challenge I encountered was with sorting as I was not sure why it was not working initially, till I looked into the JSON data and realized that some authors had no value (null) as well as published date too so it was returning an error as there was nothing to compare it against. To fix this I implemented checks via ternary operators so that if there's nothing to compare it to it would give it a default value ("") so that the sort logic would still work. 

