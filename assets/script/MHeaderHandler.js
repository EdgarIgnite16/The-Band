const header = document.querySelector('.js-headerForMobile');
const mobileMenu = document.querySelector('.js-mobile-bars');

const headerHeight = header.clientHeight;

// đóng mở mobile menu
mobileMenu.onclick = function() {
    const is_Closed = header.clientHeight === headerHeight;

    // đóng mở mobile menu
    is_Closed ? header.style.height = 'auto' : header.style.height = null;
}

// tự đỘng đóng khi chọn phần từ trong menu
const menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for(var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];

    menuItem.onclick = function(event) {
        var isParentMenu = this.nextElementSibling && 
        this.nextElementSibling.classList.contains('subnav');

        // không đóng mobile menu nếu thẻ cha menu có thêm thẻ con
        isParentMenu ? event.preventDefault() : header.style.height = null ;
    }
}