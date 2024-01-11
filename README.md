# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Starting Server

node server.js

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Notes

useEffect is leftover as when I have the db set up I will need it to call an API. Need the buttons to be unclickable after clicked but this will happen later as I don't think it is super important.  Lastly the CSS, the game looks pretty barren.

Update: model and routes are all set up. When I worked with express routing for databases before I liked to set them up fully and then start testing them. They're straightforward to set up but I'm not sure how efficient it is to do this.

Creating the schema for my database I wonder if it would be better to have a seperate table for genres.

Decided to make url the PRIMARY KEY for songs since it is the only piece of information that I know shouldn't ever be repeated twice. It's difficult to do that for data like song_title because some songs have longer titles or in different languages or maybe it's just spelled wrong. Caveat is there is multiple youtube videos of the same song but this is the best I can do. I also made it a PRIMARY KEY because I realize I don't have a need for a numerical id since my current plan is to grab an array of songs from genre and difficulty and Math.rand choose from that array.

An optimization I would make in the future is that since I am always going to have the three base difficulties I should make a Route that organizes everything in an array. I remember there is a way I can just get seperate rows of a condition but I may just go with having the host be able to customize their difficulty instead.

Current feelings on my now working site:

As a first react project where I wasn't given an idea beforehand, I am satisfied that it works but my code feels bloated. Some ideas in planning didn't end up being used and you can see that in some of the unused or uneccesary variables. Listing all the examples.

1. useEffect in app.js is just not used. I will probably delete it but I just always thought I would need to GET the music at the beginning, however genres stops that in its tracks. Easy to remove, it'll happen at some point.

2. context. Due to how I structured everything, context feels pretty unnecessary. Only Board uses context but superficially. I can probably replace it with a for loop using the number of questions or something. As of right now it is mapping song but not using it.

3. Board.js's mapping. explained during #2

4. Change my GET command? I didn't feel like playing around with psql to try and implent this especially since it isn't such a big deal but I know I can pretty easily just get all songs of a genre seperated by genre. Just wasn't sure what that would look like and how I could handle it. I was also pretty deep into tying the frontend and backend before I thought about it. If there was a big optimization it is that since it means I only need to call the API once instead of 4 times.

These are the main things I'd want to fix, but aren't pressing. Just looks ugly and is maybe a split second slower.

Started and pretty much finished adding in CSS with tailwind.

On "things I would add to this project" is I would like to have a way to make youtube videos visible. I have a way, which is to make youtube "invisible" instead of hidden but it makes the dom look ugly. Maybe if I put it on the bottom of the dom. The other thing is marking what questions you have clicked on. I honestly don't really know how to easily approach this. Best thought right now is have a state keep track of clicked on buttons in an array, then when clicked on change the class? I should try that, biggest thing that would make this project feel complete.

Last note: I worked on this on a steam deck and never really figured out hoow to get postgreSQL databases locally on this thing so my testing was all done on an elephant postgreSQL server that I connected to because that works somehow.

Seeding that database from my steam decks terminal also worked but after an update it broke so I seeded from the browser.

## Bugs

1. Tailwind breaks and lines the questions up all in one row. Don't know enough about tailwind to know why that happens.

2. Youtube videos can be taken down and that leads to errors on questions. Not sure how I would even test this to remove it other than do a try and catch with the catch just booting you back to the question board.