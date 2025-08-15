function toggleShare() {
    const popup = document.getElementById('sharePopup');
    const authorSection = document.querySelector('.author-section');
    
    popup.classList.toggle('active');
    
    // For mobile, also toggle the author section visibility
    if (window.innerWidth <= 768) {
        authorSection.classList.toggle('share-active');
    }
}

// Close popup when clicking outside
document.addEventListener('click', function(event) {
    const popup = document.getElementById('sharePopup');
    const shareBtn = document.querySelector('.share-btn');
    
    if (!popup.contains(event.target) && !shareBtn.contains(event.target)) {
        popup.classList.remove('active');
        document.querySelector('.author-section').classList.remove('share-active');
    }
});

// Handle window resize
window.addEventListener('resize', function() {
    const popup = document.getElementById('sharePopup');
    const authorSection = document.querySelector('.author-section');
    
    if (window.innerWidth > 768) {
        authorSection.classList.remove('share-active');
    }
});
