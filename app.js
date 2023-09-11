const express = require('express');
const session = require('express-session');
const app = express();
const sequelize = require('./config/connection'); // Import the database connection

// Configure session middleware
app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
  })
);

// Set up Handlebars view engine
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Static files
app.use(express.static('public'));

// Routes
const indexRouter = require('./routes/index');
const postsRouter = require('./routes/posts');
const commentsRouter = require('./routes/comments');
app.use('/', indexRouter);
app.use('/posts', postsRouter);
app.use('/comments', commentsRouter);

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
