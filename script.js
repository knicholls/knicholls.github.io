
const stories = [
    {
        title: 'My First Smartphone',
        author: 'John Doe',
        content: 'I was hesitant at first, but my new smartphone has opened up a whole new world for me. I can now easily connect with my grandchildren through video calls and share photos with them.'
    },
    {
        title: 'Learning to Code at 70',
        author: 'Jane Smith',
        content: 'I never thought I would be able to learn to code, but I decided to give it a try. It has been a challenging but rewarding experience. I am now able to create my own simple websites and applications.'
    },
    {
        title: 'The Joy of Online Shopping',
        author: 'Peter Jones',
        content: 'I used to hate shopping, but now I can do it all from the comfort of my own home. I can find everything I need online and have it delivered right to my door.'
    }
];

const storyGrid = document.querySelector('.story-grid');

function displayStories() {
    storyGrid.innerHTML = '';
    stories.forEach(story => {
        const storyCard = document.createElement('div');
        storyCard.classList.add('story-card');
        storyCard.innerHTML = `
            <h3>${story.title}</h3>
            <p><em>By ${story.author}</em></p>
            <p>${story.content}</p>
        `;
        storyGrid.appendChild(storyCard);
    });
}

displayStories();
