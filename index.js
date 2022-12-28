function resets(){
    document.getElementsByTagName("resetData").reset();
}

function answer(){
    let nameInput = document.getElementById("userName"); 
    let nameEmail=document.getElementById("email");
    let phoneNumber=document.getElementById("ph");
    let contactName=document.getElementById("contactname");
    let contactEmail=document.getElementById("contactemail");
    let contactPh=document.getElementById("contactph");
    let Date=document.getElementById("date");
    let Percent=document.getElementById("percent");
    let Critical=document.getElementById("critical");
    let Notes=document.getElementById("notes");

   
    
    function displayRadioValue() {
        var ele = document.getElementsByName("Business");
          let selectedValue="";
        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked)
            selectedValue= ele[i].value;
                    
        }
       
        return selectedValue;
    }
    function displaySelectValue() {
        var ele = document.getElementsByName("catogory");
          let selectedValue=[];
        for(i = 0; i < ele.length; i++) {
            if(ele[i].selected){
            selectedValue.push(ele[i].value);
            }
        }
        
        return selectedValue;
    }
    function paymentSelectValue(){
        var ele=document.getElementsByName("payment");
        let selectedValue=[];
        for(i=0;i<ele.length;i++)
    {
        if(ele[i].checked){
            selectedValue.push(ele[i].value);
        }
    }
    return selectedValue;
    }

    // if(nameInput.value===""){
    //     alert("please fill the field");
    // return 
    // }
    // if(nameEmail.value===""){
    //     alert("please fill the field");
    // return 
    // }
    // if(contactName.value===""){
    //     alert("please fill the field");
    // return 
    // }
    // if(contactEmail.value===""){
    //     alert("please fill the field");
    // return 
    // }
    // if(contactPh.value===""){
    //     alert("please fill the field");
    // return 
    // }
    // if(Date.value===""){
    //     alert("please fill the field");
    // return 
    // }
    // if(Percent.value===""){
    //     alert("please fill the field");
    // return 
    // }
    // // if(Critical.value===""){
    // //     alert("please fill the field");
    // // return 
    // // }
    // // if(Notes.value===""){
    // //     alert("please fill the field");
    // // return 
    // // }
    // if(phoneNumber.value===""){
    //     alert("please fill the field");
    // return 
    // }
   
    const data = {

        userName: nameInput.value,
        email:nameEmail.value,
        ph:phoneNumber.value,
        contactname:contactName.value,
        contactemail:contactEmail.value,
        contactph:contactPh.value,
        date:Date.value,
        percent:Percent.value,
        critical:Critical.value,
        type:displayRadioValue(),
        catogory:displaySelectValue(),
        payments:paymentSelectValue(),
        notes:Notes.value,
        

    }
console.table(data);

let validNumbers=/^\d{10}$/
if (ph.value.match(validNumbers)){
    console.log("sucess")
}else{
    alert("please enter valid phone number")
    return;
}
let validName=/^[a-zA-Z]+ [a-zA-Z]+$/
if (userName.value.match(validName)){
    console.log("sucess")
}else{
    alert("please enter valid name")
    return;
}
let validEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
if(email.value.match(validEmail)){
    console.log("sucess")
}else{
    alert("please enter valid email")
    return;
}
let validContactName=/^[a-zA-Z]+ [a-zA-Z]+$/
if (contactname.value.match(validContactName)){
    console.log("sucess")
}else{
    alert("please enter valid contact name")
    return;
}
let validContactEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
if(contactemail.value.match(validContactEmail)){
    console.log("sucess")
}else{
    alert("please enter valid contact email")
    return;
}
let validContactNumbers=/^\d{10}$/
if (contactph.value.match(validContactNumbers)){
    console.log("sucess")
}else{
    alert("please enter valid contact phone number")
    return;
}


let localStorageData=JSON.parse(localStorage.getItem("details"));
if(localStorageData===null) 
localStorageData = []

localStorageData.push(data);
localStorage.setItem("details",JSON.stringify(localStorageData))

loadTableData()

// resets();



}


function loadTableData(){
    let localStorageData=localStorage.getItem("details");
    if(localStorageData===null) return 
    var personalInfo=JSON.parse(localStorageData);
    var tbody=document.getElementById("tableData");
    tbody.innerHTML="";
    
    for(let i=0;i<personalInfo.length;i++)
    {
        var personal=personalInfo[i];
        if(personal===null)return
        
        var tr=`<td>${personal.userName}</td>`+
        "<td>"+personal.email+"</td>"+
        "<td>"+personal.ph+"</td>"+
        "<td>"+personal.contactname+"</td>"+
        "<td>"+personal.contactemail+"</td>"+
        "<td>"+personal.contactph+"</td>"+
        "<td>"+personal.date+"</td>"+
        "<td>"+personal.percent+"</td>"+
        "<td>"+personal.critical+"</td>"+
        "<td>"+personal.type+"</td>"+
        "<td>"+personal.catogory+"</td>"+
        "<td>"+personal.payments+"</td>"+
        "<td>"+personal.notes+"</td>"+
        "<td><button class='btn btn-dark' onClick='editTable("+i+")'>Edit</button></td>"+
        "<td><button class='btn btn-dark' onClick='deleteTable("+i+")'>Delete</button></td>";
        tbody.innerHTML+=tr;
        

    }
   
   }


   

   function editTable(i){
    
    let localStorageData=localStorage.getItem("details");
    if(localStorageData===null) return

    var personalInfo=JSON.parse(localStorageData)
   console.log(personalInfo)
    
    var editData=personalInfo[i]
    if(editData===null)return
    document.getElementById("userName").value = editData.userName;
// console.log(editData.name,document.getElementById("name"));
    document.getElementById("email").value=editData.email
    document.getElementById("ph").value =editData.ph
    document.getElementById("contactname").value=editData.contactname
    document.getElementById("contactemail").value =editData.contactemail
    document.getElementById("contactph").value =editData.contactph
    document.getElementById("date").value=editData.date
    document.getElementById("percent").value=editData.percent
    document.getElementById("critical").value=editData.critical
    document.getElementsByName("Business").value=editData.type
    document.getElementById("catogory").value =editData.catogory
    document.getElementsByClassName("payments").value =editData.payments
    document.getElementById("notes").value=editData.notes
//    editflow=true
//    editindex=i
    
    
}


function deleteTable(i){
    let localStorageData=localStorage.getItem("details")
    if(localStorageData===null)return
    var personalInfo=JSON.parse(localStorageData)
    personalInfo.splice(i,1)

    console.log(personalInfo);
    localStorage.setItem("details",JSON.stringify(personalInfo))
    loadTableData()
}
// var editflow=false;
var editindex=null;
loadTableData();
    
  
    
// loadTableData()
