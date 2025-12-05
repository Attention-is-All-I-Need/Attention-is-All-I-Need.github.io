var xhsModal = document.getElementById("XHSMod");
var xhsBtn = document.getElementById("XHSBtn");

if (xhsBtn && xhsModal) {
  xhsBtn.addEventListener("click", function () {
    xhsModal.style.display = "block";
  });

  window.addEventListener("click", function (event) {
    if (event.target === xhsModal) {
      xhsModal.style.display = "none";
    }
  });
}

