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
