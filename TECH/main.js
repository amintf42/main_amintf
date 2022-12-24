
function render(data) {
  let root = document.getElementById("root");
  if (root) {
    root.innerHTML = "";
      for (const intertaiment of data) {
      let tempelate = `
       <a href="#">
        <div class="cardk" id = "${intertaiment.id}">
          <img src="./img-home-intertaiment/list/${intertaiment.src}" alt="${intertaiment.titel}">
          <h4>${intertaiment.titel}</h4>
          <p>${intertaiment.paragerph}</p>
          <p class="p-cardk">${intertaiment.price}</p>
        </div>
      </a>
      `
        ;
      root.innerHTML += tempelate;
    }
  }
}
// function render(data) {
//   let root = document.getElementById("root");
//   if (root) {
//     root.innerHTML = "";
//     for (const intertaiment of data) {
//       let tempelate = `
//         <div class="cardk" id = "${intertaiment.id}">
//         <a href="#">
//           <img src="./img-home-intertaiment/list/${intertaiment.src}" alt="${intertaiment.titel}">
//           <h4>${intertaiment.titel}</h4>
//           <p>${intertaiment.paragerph}</p>
//           <p class="p-cardk">${intertaiment.price}</p>
//           </a>
//         </div>
     
//       `
//         ;
//       root.innerHTML += tempelate;
//     }
//   }
// }



// debugger;

if (intertaiments)
  render(intertaiments);



// intertaiment-tv
function render2(data2) {
  let root2 = document.getElementById("root2");
  if (root2) {
    debugger;
    root2.innerHTML = "";
    for (const intertaiment_tv of data2) {
      let tempelate2 = `
             <a href="#">
              <div class="cardk" id = "${intertaiment_tv.id}">
                <img src="./img-home-intertaiment/list/${intertaiment_tv.src}" alt="${intertaiment_tv.titel}">
                <h4>${intertaiment_tv.titel}</h4>
                <p>${intertaiment_tv.paragerph}</p>
                <p class="p-cardk">${intertaiment_tv.price}</p>
              </div>
            </a>
            `
        ;
      root2.innerHTML += tempelate2;

    }
  }

}

if (intertaiments_tv)
  render2(intertaiments_tv);

// intertaiment-homecinema
function render3(data3) {
  let root3 = document.getElementById("root3");
  if (root3) {
    // debugger;
    root3.innerHTML = "";
    for (const intertaiment_homecinema of data3) {
      let tempelate3 = `
             <a href="#">
              <div class="cardk" id = "${intertaiment_homecinema.id}">
                <img src="./img-home-intertaiment/list/${intertaiment_homecinema.src}" alt="${intertaiment_homecinema.titel}">
                <h4>${intertaiment_homecinema.titel}</h4>
                <p>${intertaiment_homecinema.paragerph}</p>
                <p class="p-cardk">${intertaiment_homecinema.price}</p>
              </div>
            </a>
            `
        ;
      root3.innerHTML += tempelate3;

    }
  }

}

if (intertaiments_homecinema)
  render3(intertaiments_homecinema);


// intertaiment-Projectors
function render4(data4) {
  let root4 = document.getElementById("root4");
  if (root4) {
    // debugger;
    root4.innerHTML = "";
    for (const intertaiment_Projectors of data4) {
      let tempelate4 = `
             <a href="#">
              <div class="cardk" id = "${intertaiment_Projectors.id}">
                <img src="./img-home-intertaiment/list/${intertaiment_Projectors.src}" alt="${intertaiment_Projectors.titel}">
                <h4>${intertaiment_Projectors.titel}</h4>
                <p>${intertaiment_Projectors.paragerph}</p>
                <p class="p-cardk">${intertaiment_Projectors.price}</p>
              </div>
            </a>
            `
        ;
      root4.innerHTML += tempelate4;

    }
  }

}

if (intertaiments_Projectors)
  render4(intertaiments_Projectors);


// computers
function render5(data5) {
  let root5 = document.getElementById("root5");
  if (root5) {
    // debugger;
    root5.innerHTML = "";
    for (const computer of data5) {
      let tempelate5 = `
             <a href="#">
              <div class="cardk" id = "${computer.id}">
                <img src="./img-computer/list/${computer.src}" alt="${computer.titel}">
                <h4>${computer.titel}</h4>
                <p>${computer.paragerph}</p>
                <p class="p-cardk">${computer.price}</p>
              </div>
            </a>
            `
        ;
      root5.innerHTML += tempelate5;

    }
  }

}

if (computers)
  render5(computers);


// computers-laptop
function render6(data6) {
  let root6 = document.getElementById("root6");
  if (root6) {
    // debugger;
    root6.innerHTML = "";
    for (const computers_laptop of data6) {
      let tempelate6 = `
             <a href="#">
              <div class="cardk" id = "${computers_laptop.id}">
                <img src="./img-computer/list/${computers_laptop.src}" alt="${computers_laptop.titel}">
                <h4>${computers_laptop.titel}</h4>
                <p>${computers_laptop.paragerph}</p>
                <p class="p-cardk">${computers_laptop.price}</p>
              </div>
            </a>
            `
        ;
      root6.innerHTML += tempelate6;

    }
  }

}
if (computers_laptops)
  render6(computers_laptops);



// computers-monitors
function render7(data7) {
  let root7 = document.getElementById("root7");
  if (root7) {
    // debugger;
    root7.innerHTML = "";
    for (const computers_monitor of data7) {
      let tempelate7 = `
             <a href="#">
              <div class="cardk" id = "${computers_monitor.id}">
                <img src="./img-computer/list/${computers_monitor.src}" alt="${computers_monitor.titel}">
                <h4>${computers_monitor.titel}</h4>
                <p>${computers_monitor.paragerph}</p>
                <p class="p-cardk">${computers_monitor.price}</p>
              </div>
            </a>
            `
        ;
      root7.innerHTML += tempelate7;

    }
  }

}

if (computers_monitors)
  render7(computers_monitors);


// All-In-One PCs

// function render8(data8) {
//   let root8 = document.getElementById("root8");
//   if (root8) {
//     // debugger;
//     root8.innerHTML = "";
//     for (const All_In_One_PC of data8) {
//       let tempelate8 = `
//                <a href="#">
//                 <div class="cardk" id = "${All_In_One_PC.id}">
//                   <img src="./img-computer/list/${All_In_One_PC.src}" alt="${All_In_One_PC.titel}">
//                   <h4>${All_In_One_PC.titel}</h4>
//                   <p>${All_In_One_PC.paragerph}</p>
//                   <p class="p-cardk">${All_In_One_PC.price}</p>
//                 </div>
//               </a>
//               `
//         ;
//       root8.innerHTML += tempelate8;

//     }
//   }

// }

// if (All_In_One_PCs)
//   render8(All_In_One_PCs);



// All-In-One PCs
function render8(data8) {
  let root8 = document.getElementById("root8");
  if (root8) {
    // debugger;
    root8.innerHTML = "";
    for (const All_In_One_PC of data8) {
      let tempelate8 = `
             <a href="#">
              <div class="cardk" id = "${All_In_One_PC.id}">
                <img src="./img-computer/list/${All_In_One_PC.src}" alt="${All_In_One_PC.titel}">
                <h4>${All_In_One_PC.titel}</h4>
                <p>${All_In_One_PC.paragerph}</p>
                <p class="p-cardk">${All_In_One_PC.price}</p>
              </div>
            </a>
            `
        ;
      root8.innerHTML += tempelate8;

    }
  }

}

if (AllInOnePCs)
  render8(AllInOnePCs);


// mobile & tablets
function render9(data9) {
  let root9 = document.getElementById("root9");
  if (root9) {
    // debugger;
    root9.innerHTML = "";
    for (const Phones_Tablet of data9) {
      let tempelate9 = `
             <a href="#">
              <div class="cardk" id = "${Phones_Tablet.id}">
                <img src="./img-mobile-tablets/list/${Phones_Tablet.src}" alt="${Phones_Tablet.titel}">
                <h4>${Phones_Tablet.titel}</h4>
                <p>${Phones_Tablet.paragerph}</p>
                <p class="p-cardk">${Phones_Tablet.price}</p>
              </div>
            </a>
            `
        ;
      root9.innerHTML += tempelate9;

    }
  }

}

if (Phones_Tablets)
  render9(Phones_Tablets);

// Smartphones
function render10(data10) {
  let root10 = document.getElementById("root10");
  if (root10) {
    // debugger;
    root10.innerHTML = "";
    for (const Smartphone of data10) {
      let tempelate10 = `
             <a href="#">
              <div class="cardk" id = "${Smartphone.id}">
                <img src="./img-mobile-tablets/list/${Smartphone.src}" alt="${Smartphone.titel}">
                <h4>${Smartphone.titel}</h4>
                <p>${Smartphone.paragerph}</p>
                <p class="p-cardk">${Smartphone.price}</p>
              </div>
            </a>
            `
        ;
      root10.innerHTML += tempelate10;

    }
  }

}

if (Smartphones)
  render10(Smartphones);

// Tablets
function render11(data11) {
  let root11 = document.getElementById("root11");
  if (root11) {
    // debugger;
    root11.innerHTML = "";
    for (const Tablet of data11) {
      let tempelate11 = `
             <a href="#">
              <div class="cardk" id = "${Tablet.id}">
                <img src="./img-mobile-tablets/list/${Tablet.src}" alt="${Tablet.titel}">
                <h4>${Tablet.titel}</h4>
                <p>${Tablet.paragerph}</p>
                <p class="p-cardk">${Tablet.price}</p>
              </div>
            </a>
            `
        ;
      root11.innerHTML += tempelate11;

    }
  }

}

if (Tablets)
  render11(Tablets);

// E-Readers
function render12(data12) {
  let root12 = document.getElementById("root12");
  if (root12) {
    // debugger;
    root12.innerHTML = "";
    for (const E_Reader of data12) {
      let tempelate12 = `
             <a href="#">
              <div class="cardk" id = "${E_Reader.id}">
                <img src="./img-mobile-tablets/list/${E_Reader.src}" alt="${E_Reader.titel}">
                <h4>${E_Reader.titel}</h4>
                <p>${E_Reader.paragerph}</p>
                <p class="p-cardk">${E_Reader.price}</p>
              </div>
            </a>
            `
        ;
      root12.innerHTML += tempelate12;

    }
  }

}

if (E_Readers)
  render12(E_Readers);

// cameras
function render13(data13) {
  let root13 = document.getElementById("root13");
  if (root13) {
    // debugger;
    root13.innerHTML = "";
    for (const Camera of data13) {
      let tempelate13 = `
             <a href="#">
              <div class="cardk" id = "${Camera.id}">
                <img src="./img-cameras/list/${Camera.src}" alt="${Camera.titel}">
                <h4>${Camera.titel}</h4>
                <p>${Camera.paragerph}</p>
                <p class="p-cardk">${Camera.price}</p>
              </div>
            </a>
            `
        ;
      root13.innerHTML += tempelate13;

    }
  }

}

if (Cameras)
  render13(Cameras);


// Compact Cameras
function render14(data14) {
  let root14 = document.getElementById("root14");
  if (root14) {
    // debugger;
    root14.innerHTML = "";
    for (const Compact_Camera of data14) {
      let tempelate14 = `
             <a href="#">
              <div class="cardk" id = "${Compact_Camera.id}">
                <img src="./img-cameras/list/${Compact_Camera.src}" alt="${Compact_Camera.titel}">
                <h4>${Compact_Camera.titel}</h4>
                <p>${Compact_Camera.paragerph}</p>
                <p class="p-cardk">${Compact_Camera.price}</p>
              </div>
            </a>
            `
        ;
      root14.innerHTML += tempelate14;

    }
  }

}

if (Compact_Cameras)
  render14(Compact_Cameras);

// DSLR Cameras
function render15(data15) {
  let root15 = document.getElementById("root15");
  if (root15) {
    // debugger;
    root15.innerHTML = "";
    for (const DSLR_Camera of data15) {
      let tempelate15 = `
             <a href="#">
              <div class="cardk" id = "${DSLR_Camera.id}">
                <img src="./img-cameras/list/${DSLR_Camera.src}" alt="${DSLR_Camera.titel}">
                <h4>${DSLR_Camera.titel}</h4>
                <p>${DSLR_Camera.paragerph}</p>
                <p class="p-cardk">${DSLR_Camera.price}</p>
              </div>
            </a>
            `
        ;
      root15.innerHTML += tempelate15;

    }
  }

}

if (DSLR_Cameras)
  render15(DSLR_Cameras);

// Action_Cameras

function render16(data16) {
  let root16 = document.getElementById("root16");
  if (root16) {
    // debugger;
    root16.innerHTML = "";
    for (const Action_Camera of data16) {
      let tempelate16 = `
             <a href="#">
              <div class="cardk" id = "${Action_Camera.id}">
                <img src="./img-cameras/list/${Action_Camera.src}" alt="${Action_Camera.titel}">
                <h4>${Action_Camera.titel}</h4>
                <p>${Action_Camera.paragerph}</p>
                <p class="p-cardk">${Action_Camera.price}</p>
              </div>
            </a>
            `
        ;
      root16.innerHTML += tempelate16;

    }
  }

}

if (Action_Cameras)
  render16(Action_Cameras);


// Lenses

function render17(data17) {
  let root17 = document.getElementById("root17");
  if (root17) {
    // debugger;
    root17.innerHTML = "";
    for (const Lense of data17) {
      let tempelate17 = `
             <a href="#">
              <div class="cardk" id = "${Lense.id}">
                <img src="./img-cameras/list/${Lense.src}" alt="${Lense.titel}">
                <h4>${Lense.titel}</h4>
                <p>${Lense.paragerph}</p>
                <p class="p-cardk">${Lense.price}</p>
              </div>
            </a>
            `
        ;
      root17.innerHTML += tempelate17;

    }
  }

}

if (Lenses)
  render17(Lenses);


// Audio & Music


function render18(data18) {
  let root18 = document.getElementById("root18");
  if (root18) {
    // debugger;
    root18.innerHTML = "";
    for (const Audio_Music of data18) {
      let tempelate18 = `
             <a href="#">
              <div class="cardk" id = "${Audio_Music.id}">
                <img src="./img-audio-music/list/${Audio_Music.src}" alt="${Audio_Music.titel}">
                <h4>${Audio_Music.titel}</h4>
                <p>${Audio_Music.paragerph}</p>
                <p class="p-cardk">${Audio_Music.price}</p>
              </div>
            </a>
            `
        ;
      root18.innerHTML += tempelate18;

    }
  }

}

if (Audio_Musics)
  render18(Audio_Musics);



// headphones

function render19(data19) {
  let root19 = document.getElementById("root19");
  if (root19) {
    // debugger;
    root19.innerHTML = "";
    for (const headphone of data19) {
      let tempelate19 = `
             <a href="#">
              <div class="cardk" id = "${headphone.id}">
                <img src="./img-audio-music/list/${headphone.src}" alt="${headphone.titel}">
                <h4>${headphone.titel}</h4>
                <p>${headphone.paragerph}</p>
                <p class="p-cardk">${headphone.price}</p>
              </div>
            </a>
            `
        ;
      root19.innerHTML += tempelate19;

    }
  }

}

if (Headphones)
  render19(Headphones);








