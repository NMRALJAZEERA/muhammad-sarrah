var saveBtn = document.getElementById("save-btn");
saveBtn.addEventListener("click", function () {
  // Get the contact information from the website
  var contact = {
    name: "Muhammad Yusuf Al-Sarrah",
    phone: "0560860367",
    // email: "yousefelnhrawy1@gmail.com"
  };
  // create a vcard file
  var vcard = "BEGIN:VCARD\nVERSION:4.0\nFN:" + contact.name + "\nTEL;TYPE=work,voice:" + contact.phone +  "\nEND:VCARD";
  var blob = new Blob([vcard], { type: "text/vcard" });
  var url = URL.createObjectURL(blob);
  
  const newLink = document.createElement('a');
  newLink.download = contact.name + ".vcf";
  newLink.textContent = contact.name;
  newLink.href = url;
  
  newLink.click();
});
function test(){
  alert('alala');
}