// var services=[
//      {
//           title:"service 1",
//           description:"description1"

//      },
//      {
//           title:"service 2",
//           description:"description2"

//      },
//      {
//           title:"service 3",
//           description:"description3"

//      },
    
//      {
//           title:"service 4",
//           description:"description4"

//      },
//      {
//           title:"service 5",
//           description:"description5"

//      },
//      {
//           title:"service 6",
//           description:"description6"

//      }
// ]



// fetch('http://localhost:3000/services')
//       .then(response => response.json())
//       .then(services=>{
//           var services_row=document.getElementById("services_row");
//           services.forEach(element=>{
//                var _div=document.createElement('div');
//               var _current_contant=`<div class="icon"><i class="bi bi-briefcase"></i></div>
//               <h4 class="title" id="title"><a href="">${element.Title}</a></h4>
//               <p class="description" id="description">${element.Description}</p>
//               </div>`;
//                _div.innerHTML=_current_contant;
//                _div.className='col-lg-4 col-md-6 icon-box';
//                services_row.appendChild(_div);
//           })
//       })

fetch('https://apiforvlavaservices.onrender.com/services')
      .then(response => response.json())
      .then(services=>{
          var services_row=document.getElementById("services_row");
          services.forEach(element=>{
               var _div=document.createElement('div');
              var _current_contant=`<div class="icon"><i class="bi bi-briefcase"></i></div>
              <h4 class="title" id="title"><a href="">${element.Title}</a></h4>
              <p class="description" id="description">${element.Description}</p>
              </div>`;
               _div.innerHTML=_current_contant;
               _div.className='col-lg-4 col-md-6 icon-box';
               services_row.appendChild(_div);
          })
      })