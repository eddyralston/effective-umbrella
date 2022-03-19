var editor = (callback) =>{
   var element = html(`
   <section class="document-editor">
   <h3 contentEditable='true'>//title//</h3>
   <div></div>
   </section>
   `)
   var title = element.querySelector('h3')
   var content = element.querySelector('div')
   var tinyMDE = new TinyMDE.Editor({element: content});
   tinyMDE.e.addEventListener('input',()=>{
      callback({
         title:title.innerText,
         content:content.innerText
      })
   })
   return element
}