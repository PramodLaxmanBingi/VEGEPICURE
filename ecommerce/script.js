document.getElementById('read-more-btn').addEventListener('click', function() {
    const contentWrapper = document.querySelector('.content-wrapper');
    const shortContent = document.querySelector('.short-content');

    if (contentWrapper.classList.contains('show')) {
        contentWrapper.classList.remove('show');
        contentWrapper.classList.add('hide');
        shortContent.style.display = 'block'; // Show short content
        this.textContent = 'Read More';
    } else {
        contentWrapper.classList.add('show');
        contentWrapper.classList.remove('hide');
        shortContent.style.display = 'none'; // Hide short content
        this.textContent = 'Read Less';
    }
});
document.getElementById('read').addEventListener('click', function() {
    const contentWrapper = document.querySelector('.content-wrapper');
    const shortContent = document.querySelector('.short-content');

    if (contentWrapper.classList.contains('show')) {
        contentWrapper.classList.remove('show');
        contentWrapper.classList.add('hide');
        shortContent.style.display = 'block'; // Show short content
        this.textContent = 'Read More';
    } else {
        contentWrapper.classList.add('show');
        contentWrapper.classList.remove('hide');
        shortContent.style.display = 'none'; // Hide short content
        this.textContent = 'Read Less';
    }
});

