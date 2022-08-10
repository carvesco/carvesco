//var ghpages = require('gh-pages');
import ghpages from 'gh-pages'

ghpages.publish(
  'build', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/carvesco/carvesco-page.git', // Update to point to your repository
    user: {
      name: 'carvesco', // update to use your name
      email: 'cavelascor@unal.edu.co' // Update to use your email
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
);