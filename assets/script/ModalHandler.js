const buyBtns = document.querySelectorAll('.js-buy-ticket');
const closeBtn = document.querySelector('.js-modal-close');
const modal = document.querySelector('.js-modal');
const modal_container = document.querySelector('.js-modal-container');

// dùng vòng lặp lặp qua tất cả nút có class js-buy-ticket
for(const item of buyBtns) {
    // lắng nghe sự kiện click vào button và thực thi
    item.addEventListener('click', () => {
        modal.classList.add('open'); // thêm class open vào modal

    });
};

// thực thi khi ấn vào button gỡ modal
closeBtn.addEventListener('click', () => {
    modal.classList.remove('open'); // gỡ bỏ class open của modal
});

// sử lí việc user bấm ra ngoài modal => đóng modal form
modal.addEventListener('click', () => {
    modal.classList.remove('open'); // gỡ bỏ class open của modal
})

modal_container.addEventListener('click', (event) => {
    event.stopPropagation();
})