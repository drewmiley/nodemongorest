const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: String
});
const User = mongoose.model('User', UserSchema);
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
app.use('/api', router);
app.listen(8080);
