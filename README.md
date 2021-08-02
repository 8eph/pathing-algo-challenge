This project was built with Node 16.4.1 and NPM 7.18.1.

While it should work with many other recent versions, this has not been tested.

Pros:
- integration tests passing
- the main loop is straight-forward / readable
- sensible naming convention (hopefully)
- little matrix arithmetic
  
Cons:
- while passing, test case 10 is problematic as the the end markers are validated at map load
- performance considerations for very large maps (not among the test cases)
- no unit tests due to time constraints, took ~5 days (on and off) to finish
- class vs pure object initialization and usage

Open question(s)
- naming conventions - camelcase, snake case, when and where. I've found that this varies wildly per organization so I've aimed for internal consistency.
- linting standards, same as above
- package management / transpiler standard

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
