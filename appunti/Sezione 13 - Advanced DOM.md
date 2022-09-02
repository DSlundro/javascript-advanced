# Advanced DOM
### Selecting elements
```js
document.getElemntById('id-name')                       =>  Returns an element whose id matches a passed string
document.getElemensByTagName('div')                     =>  Returns an HTMLCollection of elements that match the passed tag name
document.getElementsByClassName('class')                =>  Returns an HTMLCollection of elements that match the passed class name      
document.getElementsByName('name')                      =>  Returns the elements that match the value of the name attribute with the passed string
document.querySelector('#id/.class/tagname')            =>  Returns the first element that matches the passed selector
document.querySelectorAll('#id/.class/tagname')         =>  Returns all the elements that match the passed selector
```

### Creating elements
```js
const message = document.createElement('div')           =>  Accepts an HTML tag name and returns a new Node with the Element type
message.classList.add('cookies-message')                =>  Selects all class and adds new one
message.textContent = 'message'                         =>  Adds the text content
message.innerHTML = '<p>new message</p>'                =>  Adds the content with alla formatting
header.prepend(message)                                 =>  Adds the content on first child (unique)
header.append(message)                                  =>  Adds the content on the last child (unique)
header.append(message.cloneNode(true))                  =>  Adds the content on the last child (copy)
header.before(message)                                  =>  Adds the content before the tag header
header.after(message)                                   =>  Adds the content after the tag header
```

### Deleting elements
```js
message.parentElement.removeChild(message)              =>  Deletes the child element by selecting the parent 
message.remove()                                        =>  Deletes element selected
```

### Styles
```js
message.style.backgroundColor = 'red'                   =>  Adds background color style by selected value
message.style.width = '120%'                            =>  Adds width style by selected value
```

### Attributes
```js
const logo = document.querySelector('.nav__logo')
logo.alt                                                =>  Selects attribute alt of logo => 'Bankist logo'
logo.src                                                =>  Selects attribute src of logo => 'https://127.0.0.1:5050/assets/img/logo/png'
logo.getAttribute('name')                               =>  Adds attribute name
logo.dataset.versionNumber                              =>  Select data attribute by name es. data-version-number="3.0"
```

### Classes
```js
logo.classList.add('class-name', 'class-two')           =>  Adds a new selected class
logo.classList.remove('class-name')                     =>  Removes a selected class
logo.classList.toggle('class-name')                     =>  Toggles the selected class, if exists it removes the class, if doesn't exist it adds the class
logo.classList.contains('class-name')                   =>  Checks if there is the selected class
logo.className = 'class-name'                           =>  Overwrites all classes and adds just only selected
```

