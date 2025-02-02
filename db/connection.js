
 import mysql from 'mysql2'
 
 const connection = mysql.createConnection("mysql://unfi4twxp3cfsnxm:adgfIFcb1OnmdbjqwvG6@b8ayi5gydrcvcvde6uem-mysql.services.clever-cloud.com:3306/b8ayi5gydrcvcvde6uem");
   
  connection.connect((err)=>{
    if (err) {
      console.log('error connecting: ' );
     
    }else{
    console.log (" connection database");
    }
  });
  export default connection