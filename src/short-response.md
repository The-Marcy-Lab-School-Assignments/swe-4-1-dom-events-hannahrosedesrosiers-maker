# Short Response Questions

Answer the following questions in 2-4 sentences each. Be specific and use vocabulary from the lessons. Your responses will be evaluated out of 6 points. You can earn 3 points for writing quality and 3 points for the accuracy and precision of the technical content.

## Question 1: Loading JavaScript

Examine the HTML code below:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Button Clicker</title>
    <link rel="stylesheet" href="style.css" />
    <script src="index.js"></script>
  </head>
  <body>
    <h1>Button Clicker</h1>
    <button id="my-button">Click Me!</button>
  </body>
</html>
```

In the `index.js` file, they have the code:

```js
document.querySelector('#my-button').style.color = 'red';
```

But an error is thrown.

1. What is the error (be specific)?
2. Why does this error occur?
3. What can be done to fix it?

**Your Answer:**

## Question 2: event.target vs event.currentTarget

Consider this HTML:

```html
<div id='button-container'>
  <button>Click Me</button>
</div>
```

And this JavaScript:

```js
const div = document.querySelector('#button-container');
div.addEventListener('click', (event) => {
  console.log(event.target);
  console.log(event.currentTarget);
});
```

When a user clicks the button, both `event.target` and `event.currentTarget` are logged. Explain what each property represents in this scenario and why they might be different.

**Your Answer:**

`event.target` is the actual element that was clicked (the button), while `event.currentTarget` is the element with the event listener attached. They're different because clicks on the button bubble up to the div. `event.target`  is what you actually clicked, while `event.currentTarget` shows where the listener is, what is waiting to be clicked.

## Question 3: Creating Elements Dynamically

Look at the JavaScript code below that is attempting to create a product card dynamically and add it to the body.

```js
const product = {
  name: 'iPhone 17',
  price: 1099.99,
  img: './images/iphone17.png'
}

/* Desired structure: 
<div>
  <img src="./images/iphone17.png">
  <h3>iPhone 17</h3>
  <p>$1099.99</p>
</div>
*/

const productCard = document.createElement('div');
const productImage = document.createElement('img');
const productName = document.createElement('h3');
const productPrice = document.createElement('p');

productImage.src = product.img;
productName.textContent = product.name;
productPrice.textContent = `$${product.price}`;

document.body.append(productCard);
```

However, when the page loads and the code is executed, the user isn't able to see the image, product name or product price. What is the issue with this code?

**Your Answer:**

The child elements aren't added to the `productCard` div. The code creates all the elements and sets their properties, but never appends the image, name, and price to the card. To fix it, add productCard.append(productImage, productName, productPrice) before appending the card to the body.


## Question 4: Event Delegation and event.target.closest()

Consider this HTML:

```html
<ul id="todo-list">
  <li id="todo-1">
    <p class='description'>Walk the dog</p>
    <p class='is-complete'>✅</p>
  </li>
  <li id="todo-2">
    <p class='description'>Take out the trash</p>
    <p class='is-complete'>❌</p>
  </li>
  <li id="todo-3">
    <p class='description'>Wash the dishes</p>
    <p class='is-complete'>❌</p>
  </li>
</ul>
```

And this JavaScript:

```js
const todoList = document.querySelector('#todo-list');
todoList.addEventListener('click', (event) => {
  const clickedLi = event.target.closest('li');

  if (!clickedLi) return;

  clickedLi.querySelector('.is-complete').textContent = "✅";
});
```

1. What is the name for this approach to event handling? What is the alternative and why is this approach better?
2. Explain what the `event.target.closest('li')` method does and why it is essential to this approach.

**Your Answer:**

1. This is called event delegation. The alternative is adding listeners to each `<li>` (list item) individually. Event delegation is better because it uses one listener instead of multiple.

2. `event.target.closest('li')` finds the nearest `<li>`(list item) ancestor from wherever you clicked. This is essential because you might click the `<p>` element inside the `<li>`, but you still need to find and update the parent list item.

## Question 5: NodeList

Do some independent learning and reading about the `querySelectorAll()` method. Then, answer these questions:

1. What is the difference between `querySelectorAll()` and `querySelector()`. Give an example of when you would use `querySelectorAll()`.
2. What is the difference between a `NodeList` and an array? Why is it important to know this difference?

**Your Answer:**

1. `querySelector()` returns one element (the first match), while `querySelectorAll()` returns all matching elements. Use `querySelectorAll()` when you need to select multiple elements, like all the buttons or all the paragraphs with a specific class.
2. Nodelists are similar to arrays, but many array methodds can't be used onit