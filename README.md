# Hogwarts: The React app for fans of prize-winning pigs

## React Week 1 Project

## Deliverables

- _When the app first loads_, display a tile for each hog in the
  `porker_data.js` file. In the tile, display the **name** and **image** for
  each hog. Use the images in the `assets` folder.
- _When the user clicks on the hog tile_, display the other details about the
  hog (its **specialty**, **weight**, **greased**, and **highest medal
  achieved**)
- Allow the user to _filter_ the hogs that are **greased**
- Allow the user to _sort_ the hogs based on **name** or **weight**

- BONUS: Allow users to _hide_ hogs (not delete them, just hide them from view!)
- BONUS: Add a form to allow users to _add_ new hogs to the page
- BONUS: Implement [Semantic Cards](https://semantic-ui.com/views/card.html) for
  each hog

## Project Guidelines

- Follow
  [React best practices](https://reactjs.org/docs/thinking-in-react.html) to
  create components and decide on where state needs to live based on
- Pass props down from parent components to children
- Use inverse data flow and callback functions to pass data up from child
  components to parents
- Re-render components by setting state

## What we have so far

- A file containing all our hog data (`./src/porkers_data.js`) imported into `App.js`
- A folder of hog images (`./src/assets`)
- A `<Nav>` component rendered in our `App.js`

## Trying to figure out where to start?

There are lots of ways to build this project, and while some ways are better
than others, there is no 'right' way! Start by wireframing what you want the app
to look like and breaking it up into components.

Once you've decided on your components, use the MVP (minimum viable product)
approach. What's the simplest thing we can render to the page? Perhaps a
paragraph tag displaying each hog's name? Which components would this involve?

When building your filter and sort functionalities, consider what you want to
store in state and where that state should be stored. How can a child component
pass information up to its parent component? Think about what needs to happen
upon each index rerender. What if a user filters out un-greased pigs, and then
wants the remaining pigs sorted by weight?

Be sure to use good programming practices, such as clear variable names and
single responsibility functions. React apps can quickly become tangled and hard
to debug if built without best practices!

## Trying to get the Hog image to render?

Working with images dynamically in React can be tricky. In order to use the load
the images in with Webpack
([which is used under the hood by `create-react-app`](https://create-react-app.dev/docs/adding-images-fonts-and-files)),
we must first import all the files:

```js
import augustus_gloop from "../assets/augustus_gloop.jpg";
import babe from "../assets/babe.jpg";
import bailey from "../assets/bailey.jpg";
import cherub from "../assets/cherub.jpg";
import galaxy_note from "../assets/galaxy_note.jpg";
import leggo_my_eggo from "../assets/leggo_my_eggo.jpg";
import peppa from "../assets/peppa.jpg";
import piggy_smalls from "../assets/piggy_smalls.jpg";
import piglet from "../assets/piglet.jpg";
import porkchop from "../assets/porkchop.jpg";
import trouble from "../assets/trouble.jpg";
import truffle_shuffle from "../assets/truffle_shuffle.jpg";
```

Then we can use the image variables to display the images:

```js
import truffle_shuffle from "../assets/truffle_shuffle.jpg";

function PigCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={piggy_smalls} alt={props.name} />
    </div>
  );
}
```

See if you can come up with a solution to make it dynamic! But if you need a
hint, check one solution below:

...

...

...

...

To make it easier to associate an image with a pig's name, you can create an
object where the **keys** are the names of the pigs, and the **values** are the
image variables, and use that variable to access the correct image:

```js
const images = {
  Babe: babe,
  Porkchop: porkchop,
  Cherub: cherub,
  "Piggy smalls": piggy_smalls,
};

function PigCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={images[props.name]} alt={props.name} />
    </div>
  );
}
```

## Styling

We've imported the Semantic CSS library to keep your piggies looking pretty. To
keep your hogs in columns, make sure their parent container has the class
`"ui grid container"`. The children in the columns should have class
`"ui eight wide column"`. (Semantic uses a grid with a default of 16 units wide,
so 8-wide will make two columns and 4-wide will make 4 columns.)

Semantic will take care of assigning the columns for you. You can also try
implementing [Semantic Cards](https://semantic-ui.com/views/card.html) for each
hog.
