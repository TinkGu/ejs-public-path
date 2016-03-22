# ejs-public-path

## Usage

express, app.js
```
var libs = require('ejs-public-path')
app.use(libs('/public/'))
```

ejs, index.html
```
<%- libs([
    'jquery.min.js',
    'ramda.min.js'
]) %>
```

output
```
<script src="/public/jquery.min.js"><script>
<script src="/public/ramda.min.js"></script>
```

## Note
- please pre-install express, ejs...
- we have No Test...
