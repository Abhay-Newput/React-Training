# First Method: static getDerivedStateFromProps(props,state) (Rarely used method)

- Method is called everytime a component is re-renderd.

- This method is used when the state depends on the props od the component. Sets the state.

- Don't cause any side-effect. ex: HTTP request.

# Second Method: shouldComponentUpdate(nextProps, nextState) (Rarely used method)

- It recieves the updated props and state.

- Dictates if the component should re-render or not.

- Performace Optimization: By default all class component re-render the component whenever they recieve props or their state changes. It is used to prevent that default behaviour by returning False, comapring the previous and updated props and state.

- Avoid causing side-effect.

# Third Method: render()

- Only required method.

- Read props and state and returns JSX.

- Do not change state or interact with DOM or make AJAX calls.

# Fourth Method: getSnapShotBeforeUpdate(prevProps, prevState) (Rarely used method)

- Called right before the changes from the virtual DOM are to be reflected in the DOM.

- Used this method to capture some data from the DOM.

- Method will return null, or return a value.
- Return value will be passed as the third paramenter to the next method.

# Fifth Method: componentDidUpdate(prevProps, prevState, snapShot)

- Called after the render is finished in the re-render cycle.

- Called Once.

- Cause side-effect.
