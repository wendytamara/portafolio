let begin = () => {
    // Escritura de letras tipo maquina
    let writing = str => {
      const name = document.getElementById('name');
      let arrFromStr = str.split('');
      let i = 0;
      let printStr = setInterval(function() {
        if (arrFromStr[i] === ' ') {
          name.innerHTML += arrFromStr[i];
          name.innerHTML += arrFromStr[i + 1];
          i += 2;
        } else {
          name.innerHTML += arrFromStr[i];
          i++;
        }
        if (i === arrFromStr.length) {
          clearInterval(printStr);
          name.style.color = 'rgb(197, 129, 154)';
        }
      }, 200);
    };

    

    let smoothAutoScroll = () => {
      let scroll = new SmoothScroll('a[href*="#"]', {
        ignore: '[data-scroll-ignore]',  
        header: null, 
        speed: 500,
        offset: 0, 
        easing: 'easeInOutCubic', 
        customEasing: function(time) {
          return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;
        },
      
        before: function(anchor, toggle) {},
        after: function(anchor, toggle) {}
      });
    };
  
    writing('Wendy Tamara Quispe Quispe Quispe');
    changeArrow();
    smoothAutoScroll();
    hoverImg();
 
  };
  
  window.addEventListener('load', begin);
  
  
  