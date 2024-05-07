# First Method: constructor(props)

- A special function that will get called whenever a new component is created.

- It is used for
  -- Initialize state
  -- Binding the event handlers

- Do not cause side-effects ex: HTTP request

- Important point to remember when defining the constructor

1.  call special function called **super(props)**. We get access to this.props only when we define super()
2.  Constructor is the only place where you can change or set the state by directly overwriting this.state fields. In all the other scenerios we have to use this.setState.

# Second Method: static getDerivedStateFromProps(props, state) (Rarely used life cycle method)

- When the state of the component depends on the props over time.

- As it is static method it does not have access to the this keyword. It cannot change state by this.state, it can only return the object that represent the new state of the component.

- Do not cause side effects.

# Third Method: render()

- Only require method in class component

- We simply read props and state and return JSX which describe the UI.

- Do not change the state of the component or interact with DOM or make Ajax calls.

- Childern lifecycle methods are also executed.

# Fourth Method: componentDidMount()

- This method is only called once in the whole lifecycle of the component.

- Invoked immediately after a component and all its childern components have been rendered to the DOM.

- This method is perfect place to cause side-effect. ex: Interact with the DOM or perform AJAX calls to load data.
