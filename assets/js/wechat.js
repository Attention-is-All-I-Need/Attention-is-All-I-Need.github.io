var wechatModal = document.getElementById("WeChatMod");
var wechatBtn = document.getElementById("WeChatBtn");

if (wechatBtn && wechatModal) {
  wechatBtn.addEventListener("click", function () {
    wechatModal.style.display = "block";
  });

  window.addEventListener("click", function (event) {
    if (event.target === wechatModal) {
      wechatModal.style.display = "none";
    }
  });
}
