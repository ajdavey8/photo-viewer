# Photo Viewer

## Challenge

To create a Photo Viewer that allowed the user to cycle through images with a legend. Also allowing the user to search the collection using photographers names or tags.

## Approach

Firstly I broke the challenge into four main features:
- Main image
- Clicking through the collection
- Legend giving details about the image
- Search function

I started by aiming to get to an image rendered on the page from the list of image files in the text file I was given. This first required creating a JSON file from the text file. After creating the JSON and and rendering a single image. I was keen to research and work on a feature I expected to be more challenging and be more problematic. So worked on getting the whole collection of images to click through.

After researching multiple packages and tutorials to build my own image carousel. I decided to use ```react-responsive-carousel``` as the documentation showed it had the customization I required and there seemed little benefit to creating my own. Using this I was quickly able to build an image carousel.

Then I decided it would be best to work on adding the legend. As some of the techniques required to make the legend, seemed like they may be useful in constructing the search such as extracting the photographer's name from the file name. Once I had got a legend that was functional I moved onto to working on the search.

For the search I did a lot of research into npm packages that may be of use and tutorials for building my own search. I found a very good tutorial to go through making a search with dropdown suggestions. I decided to follow this as I thought it may be easier to customize suggestions and on click functionality.

On implementing the search I started by getting the input and suggestions. Then added the on click function to render the image in the main view. This presented an unexpected issue that rendering the search result and mapping the rest of the collection after wasn't as straight forward as expected. The solution for this I finally used, I am not happy with but it does work.

I then did the styling of the app and refactored the code.

## To run the app on localhost:3000

```sh
$ git clone git@github.com:wearecrew/ajdavey8-tech-test.git
$ cd photo-viewer
$ npm install
$ npm start
```

## Screenshots
#### Main View

![Main View](public/MainView.png)

#### With Search Open

![With Search Open](public/WithSearchOpen.png)
