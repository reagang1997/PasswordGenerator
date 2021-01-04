document.getElementById('gen-pass').addEventListener('click', () => {
    document.getElementById('criteria').style.visibility = 'visible';
});

var basic = ["A", "B" , "c", "D", "E", "F" , "G" , "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
            "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

document.getElementById('confirm').addEventListener('click', () => {
    var PWlength = document.getElementById("password-length").value;
    if(PWlength <= 128 && PWlength >= 8){
        var good = 1;
    }
    var specialChars = document.getElementById("chars").value;
    var userChoice = [];
    newPassword = "";
    var rand;
    var lower;
    var counter = 0;

    if(good){
        for(i = 0; i < basic.length; i++){
            userChoice.push(basic[i]);
            if(i < specialChars.length ){
                if(specialChars[i] !== " "){
                    userChoice.push(specialChars[i])
                }
            }
        }
    
        //while we still have characters to insert
        while(parseInt(PWlength)){
            // 0 or 1 to determine if it will be lowercase or not
            lower = Math.floor(Math.random() * 2);
    
            //choose random item from the users selection
            rand = Math.floor(Math.random() * (userChoice.length - 1));
            
            //every 5th char we will ensert a -
            if(counter == 5){
                newPassword += "-";
                counter = 0;
            }
            else{
                // appened to new password
                if(lower){
                    newPassword += userChoice[rand].toLowerCase();
                }
                else{
                    newPassword += userChoice[rand];
                }
                counter++
            }
            PWlength--;
        }
        
        //display the new password
        password = document.getElementById("password");
        password.textContent = newPassword;
    
        document.getElementById('criteria').style.visibility = 'hidden';
    }
    else{
        alert("Criteria is incorrect, please try again...")
    }

    
    
})




