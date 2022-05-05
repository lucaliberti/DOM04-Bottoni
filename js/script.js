const btns_nodeLst  = document.querySelectorAll(".tab-btn");      // Nodelist
const btns_arr=Array.from( btns_nodeLst  )  
// il_mio_bottone_.classList.remove("activeButtonClass");
// il_mio_bottone_.classList.add("activeButtonClass");

function evidenziaBottone(e) { 
  console.log(e.target.id)
}


/* ----------------------------------------
function evidenziaBottone (e) { 
  console.log("Evidenzio bottone " + e.target.id)
  
  for (let i=0; i<btns_arr.length ; i++) {
      btns_arr[i].classList.remove("activeButtonClass");  
  }
  e.target.classList.add("activeButtonClass");
} 
 * ----------------------------------------
 */

btns_arr[0].addEventListener("click", evidenziaBottone )
btns_arr[1].addEventListener("click", evidenziaBottone )
btns_arr[2].addEventListener("click", evidenziaBottone )

/*
btns_arr.forEach(  
        (btn) => { btn.addEventListener("click", evidenziaBottone )  } 
)
*/