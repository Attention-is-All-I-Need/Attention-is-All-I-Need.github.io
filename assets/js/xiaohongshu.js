function bindXhsModal(triggerId, modalId) {
  var trigger = document.getElementById(triggerId);
  var modal = document.getElementById(modalId);

  if (!trigger || !modal) {
    return;
  }

  trigger.addEventListener("click", function () {
    modal.style.display = "block";
  });

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}

bindXhsModal("XHSBtn", "XHSMod");
bindXhsModal("XHSBtnInline", "XHSModInline");

