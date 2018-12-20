function button1() {

  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.font = "48px Arial";
  ctx.strokeText("Hello, World!",10,50);
}
