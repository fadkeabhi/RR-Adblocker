
const generateSTYLES = () => {
  return `<style>
    h3{
      color:red;
    }
    body{
      background-color: lightblue !important;
      display:flex;
      align-items:center;
      justify-content:center;
      font-family: 'Segoe UI', Arial, Helvetica, 'Lucida Sans', sans-serif;
    }
    #info{
      position:absolute;
      top: 50%;
      left:50%;
      transform:translate(-50%,-50%);
      box-shadow: 0 2px 8px 2px rgba(0, 0, 0, 0.16);;
    }
  </style>`;
};

const generateHTML = () => {
  return `<div id="info" style="display:flex;
      align-items:center;
      justify-content:center;flex-direction:column;background-color:white;border-radius:20px;padding:5px;word-wrap:break-word;width:450px;height:280px;">
      <h3>A dangerous website has been blocked</h3>
      <p style="text-align:center;">You were protected from visiting this website by RR Adblocker.</p>
      <p style="font-size:75%;">If this website has been wrongly blocked. Reach to us: <a href="mailto:rutujrunwal001@gmail.com" style="text-decoration:none;">Here</a></p>
    </div>`;
};
var url = window.location.hostname;
// var myURL = url.split(".");
// var flag = 1;
// if(myURL[0]!='www'){
//   flag=0;
// }
// TODO: Dynamic list generation using https://gitlab.com/curben/urlhaus-filter#urlhaus-malicious-url-blocklist
malwareBlocklist = [
    'secure.eicar.org',
    'maliciouswebsitetest.com',
    'www.amtso.org/check-desktop-phishing-page',
    'amtso.eicar.org/PotentiallyUnwanted.exe',
    'amtso.eicar.org/cloudcar.exe',
    'www.ikarussecurity.com/wp-content/downloads/eicar_com.zip',
]
const match = malwareBlocklist.find(element => {
        // if(element.includes(myURL[1]) && flag){  
        if(element==url){
          document.head.innerHTML = generateSTYLES();
          document.body.innerHTML = generateHTML();
        }
});