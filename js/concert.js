 var index=1;

     // move to the next record
         function onward(path){

             index++;
             get_concert(path+`/${index}`,"Next");


                 
         }
 
        // move back to the previous record
         function backward(path){

                  index--;
             
                  get_concert(path+`/${index}`,"Previous");
 


                           
         }
 
         // parsing the Date and the Time
         function parse_DateTime(info)
         {   
                     var parseDate=new Date(info);
                     var date = parseDate.getFullYear()+'-'+(parseDate.getMonth()+1)+'-'+parseDate.getDate();
                     var time = parseDate.getHours() + ":" + parseDate.getMinutes() + ":" + parseDate.getSeconds();
                     var dateTime = 'Date: '+date+' & Time: '+time; 
                    return dateTime;
         }
 
         //
         function get_concert(fullpath,func)
         {
 
          // Using Promises for fetching the data
 
             var info =fetch(fullpath, {method:'GET'}).then(res =>res.json())
             info.then(data => {
                  // To check if there is a record at a specific index or not
                 if(data != "Not found"){
                    document.getElementById("artist_img").src = data['url'];
                    document.getElementById("artist").innerHTML=data['artist'];
                    document.getElementById("venue").innerHTML= data['venue'];
                    document.getElementById("datetime").innerHTML=parse_DateTime(new Date(data['date_and_time']));
                    console.log(data['url']);
                    valid  = true;
                 }
                 else
                 {
                    if(func == "Previous")
                    {
                     index++;
                     alert("This is the first record");
                    }
                     else if (func == "Next")
                     {
                     index--;
                     alert("This is the last record");
                    }
                 }      
             }
             )
         }
 