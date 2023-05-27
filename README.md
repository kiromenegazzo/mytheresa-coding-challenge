**Dear candidate,**

**MYTHERESA Frontend UI Challenge**

Thank you again for your application for the position as Frontend Engineer (m/f/d). Today, we want to get a deeper understanding of your knowledge and problem-solving skills.

**The task:**

**THESE ARE THE MAIN TECH REQUIREMENTS FOR THE STACK**

- Use React with ES6 and no usage of TypeScript
- Use Sass for the styling
  - You can split the bundled CSS in different files but...
  - Don't use Styled Components or CSS Modules
- Use Webpack or Rollup for the bundle
- Do not use any boilerplate/starter kit like CRA or similar
- You can use any open API you want – we recommend TheMovieDatabase API

**THESE ARE THE REQUIREMENTS FOR THE TEST**

- The page should contain a homepage with 3 carousels of items
- Each carousel will be a different category
- When clicking on an item, it should go to a detailed page of that item
  - The detail page should include a description, an image, and a button
  - The button should trigger an 'add to wishlist' action
- Depending on the category of the item, the detail page should have:
  - A different font
  - A different button
  - Any other differentiation you think it can be added
- There should be a wishlist section where all the items added can be seen

**For the evaluation:**

- How clean is your code and its reusability
- The complexity of the layout you build
- How clean and ordered is the final CSS - and also how you bundle it
- If Sass is being used properly and supporting cross-browser features
- How the components are being structured
- If DRY principles have been followed
- How much you tested and how

**Notes:**

- Adding SSR support will be very well considered

**Layout to reproduce (first one is the index and the second one is the detailed page):**

![page layout](https://camo.githubusercontent.com/e4c4321de465223e1315045c333a8bb0fc05499f42f1ba010da8469fd2bbec58/68747470733a2f2f692e696d6775722e636f6d2f6f745057764b622e706e67)


## Development
- create `.env` file from `.env.sample` and add your own `MOVIE_API_KEY`
- run `yarn dev`

## Test
- run `yarn test`

## Production
- run `yarn build && yarn server`
