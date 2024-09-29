function resizeImages(clickedImageId) {
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');

    if (clickedImageId === 'image1') {
        image1.style.width = '100px'; // Reduce size
        image2.style.width = '300px'; // Increase size
    } else {
        image1.style.width = '300px'; // Increase size
        image2.style.width = '100px'; // Reduce size
    }
}
