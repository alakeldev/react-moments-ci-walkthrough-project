<h1>Moments WalkThrough Project</h1>

Create react app:

npx create-react-app . --use-npm

Run the App:

npm start

react bootstrap link below :
https://react-bootstrap.github.io/

be wondering, why do we need a different Bootstrap library to work with React?
The short answer is, React-Bootstrap was built specifically to integrate Bootstrap styles
into React functionality, removing dependency on bootstrap.js and jQuery.
Methods and events using  jQuery are done imperatively
by directly manipulating the DOM.
In contrast, React uses updates to the state to update the virtual DOM.
In this way, React-Bootstrap provides a more reliable solution for React applications,
by incorporating Bootstrap functionality into React's virtual DOM.
Fortunately, the React-Bootstrap documentation is very similar to the Bootstrap documentation
you are familiar with.
At the point of recording this video, the
Bootstrap 5 classes are  available with React-Bootstrap,

to download react-bootstrap:

npm install react-bootstrap bootstrap@4.6.0
or
npm install react-bootstrap bootstrap


you need to add these inside index.html file to use bootstrap:

<!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
    integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous" />

  <link rel="manifest" href="%PUBLIC_URL%/manifest.json" crossorigin="use-credentials" /> -->


## Working with React CSS

1- The main App.module.css file is for CSS styles you want to apply to your site as a whole
2- Each component should have its own module.css file for the styles relating to that component
3- You need to import any module.css file you want to use at the top of the file
4- Class names from your module.css file are applied to individual components using the {styles.ClassName} Syntax