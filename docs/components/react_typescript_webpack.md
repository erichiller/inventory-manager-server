# React , TypeScript , Webpack

<https://www.typescriptlang.org/docs/handbook/react-&-webpack.html>


## React Debugging

DEBUGGING WITH REACT DEVTOOLS ! ; https://github.com/facebook/react/blob/master/packages/react-devtools/README.md  ; Make sure that the dropdown in the top left corner of the Chrome console says debuggerWorker.js.

React - how to set state safely within render
    → use the function form , if return null, the state won't change and the components won't re-render
          this.setState((prevState, props) => {
              return {counter: prevState.counter + props.step};
          })
              arrow function in setState to determine whether state should update (the previous state value is passed in (do not use this.state, this may be out of date)) 
              return null for no state update
          → As setState() allows a function in the argument, the function can be implemented somewhere outside of the React Class and then imported and used inside the Component as the argument to setState. In case extra arguments are needed, higher order functions can come to the rescue.
          → a second parameter can be passed into setState, this is a callback function which is called when the state update is complete
        ↓
https://itnext.io/react-setstate-usage-and-gotchas-ac10b4e03d60
....
    → setState() in 
           componentWillReceiveProps()
https://stackoverflow.com/a/48226704/377252
           & shouldComponentUpdate()
https://reactjs.org/docs/react-component.html#shouldcomponentupdate
    → know the lifecycle
http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
          docs
https://reactjs.org/docs/react-component.html
    → use render () props.
         this is a prop that is called as render within the class component
         allows for dynamic render functions
https://www.nearform.com/blog/managing-react-state-with-render-props/




## Etc
note: 
    cosmiconfig seems pretty nice
https://github.com/davidtheclark/cosmiconfig/blob/master/README.md
    `graphql-config` might be useful someday
    it provides a common configuration file for all the GraphQL tools ( that support it )
https://graphql-config.com/docs/introduction

    <Suspense> looks like what antd's <Spin> is
https://reactjs.org/docs/concurrent-mode-suspense.html
