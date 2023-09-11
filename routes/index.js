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

// Serve static files (e.g., styles)
app.use(express.static('public'));

// Define routes
const indexRouter = require('./routes/index');
const postsRouter = require('./routes/posts');
const commentsRouter = require('./routes/comments');
app.use('/', indexRouter);
app.use('/posts', postsRouter);
app.use('/comments', commentsRouter);

// Start server
const port = process.env.PORT || 3000;
sequelize
  .sync() // Sync the database schema with the defined models
  .then(() => {
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Database synchronization failed:', err);
  });
