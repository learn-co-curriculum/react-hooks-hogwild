# Hogwarts: The React app for fans of prize-winning pigs

## React Week 1 Project

## Project goals:
  - render each hog name and picture in a tile, and show the hog's details upon a user's click
  - create an index displaying all hog tiles
  - allow users to sort the hogs based on name and weight, and filter the hogs that are greased
  - BONUS: allow users to hide hogs (not delete them, just hide them from view!)

## Project requirements:
  - functional and container components (at least one of each, likely you'll have several of each)
  - components using state and props
  - re-renders based on client-side events

## What we have so far:
  - a file containing all our hog data imported into App.js
  - a folder of hog images
  - a functional nav component rendered in our App.js


## Trying to figure out where to start?
  There are lots of ways to build this project, and while some ways are better than others, there is no 'right' way! Start by thinking about which components you'll be building and whether they'll be presentational or container components.

  Once you've decided on your components, use the MVP approach. What's the simplest thing we can render to the page? Perhaps a <p> tag displaying each hog's name? Which components would this involve?

  When building your filter and sort functionalities, consider what you want to store in state and where that state should be stored. How can a child component pass information up to its parent component? Think about what needs to happen upon each index rerender. What if a user filters out ungreased pigs, and then wants the remaining pigs sorted by weight?  

  Be sure to use good programming practices, such as clear variable names and single responsibility functions. React apps can quickly become tangled and hard to debug if build without best practices!
