var editorElement = editor(data=>{
   fs.coll('content').add(data,console.log)
})
function getContent(){
   var docList = document.createElement('div');
   fs.coll('content').get(data=>{
      data.forEach(doc=>{
      docList.append(html(`<article>
      <h3>${doc.data.title}</h3>
      <pre>${markdown_parser(doc.data.content)}</pre>
      </article>`))
      })
   })
   document.body.append(docList)
}

getContent()
document.body.append(editorElement)