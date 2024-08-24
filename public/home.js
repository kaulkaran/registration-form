document.querySelectorAll('.sidebar ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const videoSource = document.getElementById('videoSource');
        const videoPlayer = document.getElementById('videoPlayer');
        videoSource.src = this.getAttribute('data-video');
        videoPlayer.load();
        videoPlayer.play();
    });
});
