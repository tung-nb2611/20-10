onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector('.happy-woman-day-2').classList.add('show');
    }, 10000); // 10 giây
});
// Script này chỉ chạy sau 10 giây khi trang được tải
window.addEventListener('load', () => {
  setTimeout(() => {
      document.querySelector('.marquee-text').style.animationPlayState = 'running';
  }, 10000); // 10 giây
});