var editorElement = editor({},data=>{
   fs.coll('content').add(data,()=>getContent())
})
var docList = document.createElement('div');
function getContent(){

   fs.coll('content').get(data=>{
      docList.innerHTML=''
      data.forEach(doc=>{
         var el = html(`<article>
         <h3>${doc.data.title}</h3>
         <pre>${doc.data.content}</pre>
         </article>`)
         var deleteBTN = html(`<button>delete</button>`)
         deleteBTN.addEventListener('click',()=>{
            fs.coll('content').doc(doc.id).delete(()=>{
               getContent()
            })
         })
         el.append(deleteBTN)
         docList.append(el)
         })
      })
   
   
}
document.body.append(docList)
getContent()
document.body.append(editorElement)

/**
 * 
 *       docList.append(html(`<article>
      <h3>${doc.data.title}</h3>
      <pre>${doc.data.content}</pre>
      </article>`))
      })
 * 
 */