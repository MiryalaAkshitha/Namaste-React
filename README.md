#parcel
-dev build
-local server
-refreshing - HMR (HOT MODULE REPLACEMENT)
-file watching algorithm - written in C++
-catching - Faster bulid
- Minification
- image optimization
- code splitting
-Bundling
- compress
- differential Buiding - to support older browsers


#redux
1. install @reduxjs/toolkit and react-redux
2. build our own store
3. connect our store to app
4. create a cartSlice
5. dispatch(action)
6. Selector

#types of testing(developer)
1. unit testing
2. Integration testing
3. end to end testing

# testing setUP
1. install jest
2. install @testing-library/react
3. install this to use jest using babel  npm install --save-dev babel-jest @babel/core @babel/preset-env
4. configure babel.config.js file 
5. Configure Parcel Config to disable default babel transpilation
6. Jest Configuration - npx jest --init
7. install jsdom -- npm install --save-dev jest-environment-jsdom
8. install npm install @babel/preset-react for jsx
9. add config in babel.config  like    [['@babel/preset-react', {runtime :"automatic"}]]
10. Install @testing-library/jest-dom