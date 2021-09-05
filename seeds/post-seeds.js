const { Post } = require('../models');

const postdata = [
  {
    title: 'Do you know who I am?',
    post_content: 'https://ahrumnoh.github.io/introahrum/ttps://www.google.com',
    user_id: 1
  },
  {
    title: 'This is my github Website',
    post_content: 'https://github.com/ahrumnoh',
    user_id: 2
  },
  {
    title: 'I love Software Engineering.',
    post_content: 'https://github.com/ahrumnoh/Tech_blog',
    user_id: 1
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;