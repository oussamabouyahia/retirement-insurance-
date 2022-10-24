function showHide(){
   var strongPassWord = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/; 
  if (!strongPassWord.test($("#pwd").val())) {
    $("#pwd").css('border', '3px solid red');
    
  }
  else{
   $("#pwd").css('border', '3px solid green');
   $("#check").hide();
  }
}


function testEmailPassword() {
  var strongPassWord= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  var validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 if (strongPassWord.test($("#pwd").val()) &&  validEmail.test($("#user").val()) ){
  console.log("testclear")
  return true;
 }
 console.log("test");

 return false;
}
$("#sub").click(function(){
  if (testEmailPassword()===true) {
 $("#h1").css("display","block")
 $("#request").css("display","block")
 $(".endsub").hide();
}
 else{
  $("#check").css("display","block")
 }

})
 
  
function Retired(name,id,payment,pension,years){
  
  var obj={};
  obj.name=name;
  obj.id=id;
  obj.payment=payment;
  obj.pension=pension;
  obj.years=years;
  obj.status = "pending request";
  obj.date =new Date();
  return obj ;
}
//data base will contain all the employees who request an insurance
  var database=[];
 $("#send").click(function(){
  //add new instance of an employee
  var newEmployee = Retired($("#name").val(),$("#id").val(),$("#payment").val(),$("#pension").val(),$("#years").val())
  database.push(newEmployee);
  // var inp = $('<input class="form-control"  type="submit" value="complete"> ')
  // console.log(inp)
  // inp.attr("id",$('#id').val());
$("table tbody").append( "<tr ><td>"+ $("#name").val() +"</td><td>"+ $("#id").val() +  "</td><td>"+ $("#payment").val() +
  "</td><td>"+ $("#pension").val() +  "</td><td>"+ $("#years").val() +"</td><td>"+ new Date() + 
  "</td><td><select name='cars' class='form-control' ><option value='accept'>accept</option><option value='reject'>reject</option></select></td><td><input type='submit' value='complete' class='btn btn-primary btn-block' ></td> </tr>");
   
 console.log(database);
 $("#request").hide();
 $(".endsub").show();

 });

 $("#about").click(function (){
  $("#admindiv").css("display","block");
  $(".endsub").hide();

 });

 $("#adminsub").click(function(){
  if ($("#adminuser").val()==="admin" && $("#adminpwd").val()==="123") {
   $("#adminTable").css("display","block")}

 else{$("#adminpara").text(" wrong admin information")}
 })


 

$("#pwd").keypress(showHide);

$(".btn").click(function(){
      var opt = $("#op").val()
      var pensionMessage = document.getElementById("result1");
      
          if ($("#op").val() ==="1"){
            
                    pensionMessage.innerHTML =  " your pension will be a single payment of a "+$("#years").val()*$("#payment").val()*12 *1.05+" $"
          }
          else if ($("#op").val() ==="2"){
                       
                      pensionMessage.innerHTML = "your pension will be "+$("#payment").val()*12 *1.1+" $ per year"
          }
          
          else{ 
            
          pensionMessage.innerHTML =  "you choose a monthly pension of "+$("#payment").val()*1.2+" $"
             }
        
    });
          
