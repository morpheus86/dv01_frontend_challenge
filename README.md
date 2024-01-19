# dv01_frontend_challenge

- Business Decision => I have decided to use redux and more precisely redux toolkit for managing all the state for entire application because, we will always have access to latest state when we need it. We can subscribe to the main store, Component will subscribe to the main store, and store will tell components when it needs to update.
- redux toolkits allow for a simpler usage of redux and the reducers property in create slice allows us to update our state without worrying about mutating our state since redux toolkits uses IMMER under the hood to prevent for any state mutation
