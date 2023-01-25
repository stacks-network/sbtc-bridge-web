import ghpages from 'gh-pages';

ghpages.publish(
    'build', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/Trust-Machines/blocksim.git', // Update to point to your repository  
        user: {
            name: 'radicleart', // update to use your name
            email: 'mjoecohen@gmail.com' // Update to use your email
        },
        dotfiles: true
    },
    (e) => {
        console.log('Deploy Complete!', e)
    }
)
