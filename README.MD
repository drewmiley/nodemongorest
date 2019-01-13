# nodemongorest

Node server, mongo database, REST service.

## How to replicate

1. `git init`
2. `touch .gitignore`
3. Add `node_modules/` and `package-lock.json` to the `.gitignore` file.
4. `npm init`
5. Answer the questions however you wish.
6. COMMIT
7. `npm install body-parser express`
8. `touch server.js`
9. In `server.js` add
```
console.log('Server running');
```
10. In `package.json`, in scripts object, set
```
"start": "node server.js"
```
11. Run `npm start`
12. Marvel at the console output
13. COMMIT
14. Replace code in `server.js` with
```
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const router = express.Router();
router.use((req, res, next) => {
    console.log('Request made - logging from middleware');
    next();
});
router.get('/', (req, res) => {
    res.json({ message: 'Server running' });
});
app.use('/api', router);
app.listen(8080);
```
15. `npm start`
16. Download postman.
17. Create new collection with name of your choosing.
18. Add a new GET request hitting the url `http://localhost:8080/api`
19. Click send.
20. Marvel at your server response.
21. Export your request collection to your repo.
22. COMMIT
23. Install mongo
24. `mongod`
25. `npm install mongoose`
26. In `server.js`, at the top, add
```
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
```
27. `npm start`
28. Marvel at your mongo connection.
29. COMMIT
