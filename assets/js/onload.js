window.onload = function () {
  const origin = window.location.origin;

  if (!sessionStorage.getItem("redirected")) {
    window.location.href = `${origin}/index.html#/weather?lat=51.5073219&lon=-0.1276474`;

    sessionStorage.setItem("redirected", "true");
  }
};
