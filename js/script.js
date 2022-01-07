let previewcontainer = document.querySelector('.products-preview');
let previewBox = previewcontainer.querySelectorAll('.preview');
document.querySelectorAll('.products-container .product').forEach(product => {
    product.onclick = () => {
        previewcontainer.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name == target) {
                preview.classList.add('active');
            }
        });
    };
});
previewBox.forEach(close => {
    close.querySelector('.fa-times').onclick = () => {
        close.classList.remove('active');
        previewcontainer.style.display = 'none';
    };
});
