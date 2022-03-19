const loadScript = function(url,callback){var script=document.createElement("script"),firstScript=document.getElementsByTagName("script")[0];script.async=!0,script.src=url,"function"==typeof callback&&(script.onload=function(){callback(),script.onload=script.onreadystatechange=void 0},script.onreadystatechange=function(){"loaded"!==script.readyState&&"complete"!==script.readyState||script.onload()}),firstScript.parentNode.insertBefore(script,firstScript)};
const loadCSS = function(url){var link=document.createElement("link");link.rel="stylesheet",link.href=url,document.head.append(link)};


const html = string => {
   var wrap = document.createElement('div')
   wrap.innerHTML=string
   return wrap.firstElementChild
}