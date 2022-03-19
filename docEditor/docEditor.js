var editor = (data,callback) =>{
   var element = html(`
   <section class="document-editor">
   <h3 contentEditable='true'>${data.title}</h3>
   <div></div>
   <button>submit</button>
   </section>
   `)
   var title = element.querySelector('h3')
   var content = element.querySelector('div')
   var button = element.querySelector('button')
   var tinyMDE = new TinyMDE.Editor({element: content});
   tinyMDE.e.innerText=data.content
   button.addEventListener('click',()=>{
      callback(JSON.stringify({
         title:title.innerText,
         content:content.innerText
      }))
   })

   return element
}