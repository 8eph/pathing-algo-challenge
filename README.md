This project was built with Node 16.4.1 and NPM 7.18.1.

While it should work with many other recent versions, this has not been tested.

Unit tests are conspicuously missing due to time constraints, took ~5 days (on and off) to finish.

# Installation
```
git clone git@github.com:8eph/pathing-algo-challenge.git
cd pathing-algo-challenge
npm i
```

# Linting (using Standard.js)
```
npm run lint
```

# Execute the app over an input file to get its output
```
npm run app tests/input/02_go_straight_through_intersections
```

# Full integration testing
```
npm run test
```

# Per-case integration testing
```
npm run test tests/integration/01_basic_example.test.js
```