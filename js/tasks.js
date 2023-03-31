const random = (min, max) => {
    const rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
  };
  
  const btn = document.querySelector("#btn");
  btn.addEventListener("mouseenter", () => {
    btn.style.left = `${random(0, 90)}%`;
    btn.style.top = `${random(0, 90)}%`;
  });
  
  btn.addEventListener("click", () => {
    alert("Congrats! You did it!!!!");
  });
  
  const btn1 = document.querySelector("#btn1");
  btn1.addEventListener("mouseenter", () => {
    btn1.style.left = `${random(0, 90)}%`;
    btn1.style.top = `${random(0, 90)}%`;
  });
  
  btn1.addEventListener("click", () => {
    alert("Congrats! You did it!!!!");
  });
  
  