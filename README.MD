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
30. In `server.js`, add
```
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: String
});
const User = mongoose.model('User', UserSchema);
```
31. In `server.js`, add
```
router.route('/users')
    .post((req, res) => {
        let user = new User();
        user.name = req.body.name;
        user.save(err => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'User created!' });
        });
    })
    .get((req, res) => {
        User.find((err, users) => {
            if (err) {
                res.send(err);
            }
            res.json(users);
        });
    });
```
32. Add a new GET request hitting the url `http://localhost:8080/api/users`
33. Add a new POST request hitting the url `http://localhost:8080/api/users` with a request body with name property selecting `x-www-form-urlencoded` option.
34. Try it out, and marvel.
35. Export your request collection to your repo.
36. COMMIT
37. In `server.js`, add
```
router.route('/users/:id')
    .get((req, res) => {
        User.findById(req.params.id, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    })
    .put((req, res) => {
        User.findById(req.params.id, (err, user) => {
            if (err) {
                res.send(err);
            }
            user.name = req.body.name;
            user.save(err => {
                if (err) {
                    res.send(err);
                }
                res.json({ message: 'User updated!' });
            });

        });
    })
    .delete((req, res) => {
        User.remove({
            _id: req.params.id
        }, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'User deleted' });
        });
    });
```
38. Add a new GET request hitting the url `http://localhost:8080/api/users/:id`
39. Add a new PUT request hitting the url `http://localhost:8080/api/users/:id` with a request body with name property selecting `x-www-form-urlencoded` option.
40. Add a new DELETE request hitting the url `http://localhost:8080/api/users/:id`
41. Try it out, and marvel.
42. Export your request collection to your repo.
43. COMMIT
44. `npm install node-fetch`
45. In `server.js`, add
```
const fetch = require('node-fetch');
```
46. In `server.js`, add
```
router.route('/randomusers')
    .get(async (req, res) => {
        const endpointResponse = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await endpointResponse.json();
        const users = data.map(user => user.name);
        res.json(users);
    });
```
47. Add a new GET request hitting the url `http://localhost:8080/api/randomusers`
48. Try it out, and marvel.
49. Export your request collection to your repo.
50. COMMIT
51. Congratulations on reaching the end of this tutorial!
