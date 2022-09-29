

// let clickBtn=document.getElementById('btnField')
// let input=document.getElementById('InpField')

// let content=document.getElementById('todo')


// clickBtn.addEventListener('click',()=>{
//  let ptag=document.createElement('p')
//   ptag.innerText=input.value

// content.appendChild(ptag)
//      input.value=''

// ptag.classList.add("ptagstyle")
// ptag.addEventListener('click',()=>{
//     ptag.style.textDecoration='line-through'
// })

// ptag.addEventListener('dblclick',()=>{
//     content.removeChild(ptag)
// })
// })


let clickButton=document.getElementById('btnField')
let input=document.getElementById('InpField')

let content=document.getElementById('todo')

clickButton.addEventListener('click',()=>{
   let paragraph=document.createElement('p')
   paragraph.innerText=input.value

   content.appendChild(paragraph)
   input.value=''

   paragraph.classList.add('ptagstyle')
   paragraph.addEventListener('click',()=>{
      paragraph.style.textDecoration='line-through'
    })

      paragraph.addEventListener('dblclick',()=>{
        content.revomeChild(paragraph)
      })
    })