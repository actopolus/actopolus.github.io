function getQueryParams(url) {
      const paramArr = url.slice(url.indexOf('?') + 1).split('&');
      const params = {};
      paramArr.map(param => {
        const [key, val] = param.split('=');
        params[key] = decodeURIComponent(val);
      })
      return params;
    }

window.onload = function() {
       const projects = {
        "jr"          : "Jetpack Racing",
        "kd"          : "Knock em down 3D",
        "ct"          : "Cheating Test",
        "jumpinghoop" : "Jumping Hoop",
        "ts"          : "Tricky Stack",
        "pr"          : "Pin Race",
        "egd"         : "Epic Giants Duel 3D",
        "hbr"         : "Hot Babysitter Run",
        "hoof"        : "Hoof Restoration 3D",
        "train"       : "Train Race",
        "shop"        : "Shopping Madness: Merge Master",
        "hack"        : "Hack and Rescue",
        "room"        : "Home Room Runner",
        "vice"        : "Vice City Crime: Theft Auto",
        "spc"         : "Dude Wars: Pixel FPS Shooter",
        "love"        : "Love Tester: True Love Test",
      };
      
      const params = getQueryParams(window.location.search);
      const title = projects[params["pr"] ?? "kd"];
      const titles = document.getElementsByClassName("project-name");
      
      for (let i = 0; i < titles.length; i++) {
        titles[i].innerText = title;
      }
    };
