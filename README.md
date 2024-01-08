# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

## Current Goals

Next step is to make sure the program can run and grab questions from the db. Once working correctly, I will refine Question.js as it is filled with placeholders.