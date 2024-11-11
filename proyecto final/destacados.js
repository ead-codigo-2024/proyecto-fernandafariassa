function toggleMoreText(button) {
    const moreText = button.closest('.gallery-item').nextElementSibling;
    if (moreText.style.display === 'none' || !moreText.style.display) {
        moreText.style.display = 'block';
        button.textContent = 'Leer menos';
    } else {
        moreText.style.display = 'none';
        button.textContent = 'Leer más';
    }
}
