👋 Welcome to `stack.js`!

**Status : Beta**

`stack.js` is a lightweight JavaScript framework for building web applications. It provides a set of helpful functions for handling common tasks such as rendering, event listeners, element manipulation, lazy loading, and more.

## 📦 Installation

you can include the `stack.js` script directly in your HTML file:

    <script src="stack.js"></script>
## 🚀 Getting Started

To start using `stack.js`, simply include the script in your HTML file, and start using its functions. Here's an example of how to render data to an element using `stack.js`:

    stk.render('my-element', 'Hello, World!');
## Documentation

The following functions are available in `stack.js`:

-   `stk.getData(url, successCallback, errorCallback, type)`: Makes an AJAX request to the specified URL using the specified method (GET or POST).
-   `stk.render(id, data)`: Renders the specified data to the element with the specified ID.
-   `stk.navigateTo(url)`: Navigates to the specified URL.
-   `stk.listener(id, event, func, usecapture)`: Adds an event listener to the element with the specified ID.
-   `stk.createElement(tagName, attributes, content)`: Creates an HTML element with the specified tag name, attributes, and content.
-   `stk.appendElement(parentElement, childElement)`: Appends the specified child element to the specified parent element.
-   `stk.removeClass(element, className)`: Removes the specified class from the specified element.
-   `stk.setStyle(element, styleName, styleValue)`: Sets the specified style on the specified element.
-   `stk.getComputedStyle(element, styleName)`: Gets the specified computed style from the specified element.
-   `stk.updateState(newState)`: Updates the state object with the specified new state.
-   `stk.getState()`: Gets the current state object.
-   `stk.showcon(element)`: Inserts the specified HTML element at the end of the document body.
-   `stk.lazyLoad()`: Lazily loads images with the `data-lazy` attribute.
-   `stk.prefetchPages()`: Prefetches links on the page.
-   `stk.setData(key, value)`: Sets data with the specified key and value.
-   `stk.getData(key)`: Gets data with the specified key.
-   `stk.updateData(key, value)`: Updates data with the specified key and value.
-   `stk.deleteData(key)`: Deletes data with the specified key.
-   `stk.connect(url, onMessage)`: Connects to a WebSocket at the specified URL.
-   `stk.disconnect()`: Disconnects from the WebSocket.

## 🤝 Contributing

Contributions are welcome! If you find a bug or would like to suggest a new feature, please create an issue or submit a pull request.

## 📄 License

`stack.js` is licensed under the [MIT License](https://opensource.org/licenses/MIT).



