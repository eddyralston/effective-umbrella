var url = 'http://localhost:3000'
var fs = {}
fs.coll=function(collName){
   return {
      add(data,callback){
         fetch(url+'/api/'+collName,{method: 'POST',headers: {  'Accept': 'application/json',  'Content-Type': 'application/json'},body: data}).then(res=>res.json()).then(callback)
      },
      get(callback){
         fetch(url+'/api/'+collName).then(res=>res.json()).then(callback)
      },
      doc:function(docid){
         return {
            delete(callback){
               fetch(url+'/api/'+collName+'/'+docid,{
                  method: 'DELETE'
               }).then(res=>res.json()).then(callback)
            },
            get(callback){
               fetch(url+'/api/'+collName+'/'+docid).then(res=>res.json()).then(callback)
            }
         }
      }

   }
}
