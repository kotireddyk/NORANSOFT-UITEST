     // Example unit test function

    function divide()
    {
        return a / b;
    }
     
     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
         return str.split("").reverse().join("");
     }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
        return Math.min.apply(Math, values);
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) 
     {
        var len, result[], store{},i;
        len=values.length;

        for(i=0;i<len;i++)
        {
            store[values[i]]=0;
        }

        for(i in store)
        {
            result.push(i);
        }
        return result;
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() 
     {
           for (var i = 0; i < 100; i++) 
    {
      if (i % 3==0 && i % 5==0) 
        {
          console.log("FizzBuzz");
        } 
      else if( i % 3 == 0 ) 
          {
            console.log("Fizz");
          }
      else if( i % 5 == 0 ) 
          {
            console.log("Buzz");
          }
      else
      {
        console.log(i);
      }
        
    }
     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
         // FILL THIS IN
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
             function pushOntoArray(array, toPush) 
     {

          if ((typeof array != 'string') && (typeof array.length != 'undefined') && (typeof toPush.length != 'undefined'))
             {
               for (var i = 0; i < toPush.length; i = i + 1) 
               {
                  array.push(toPush[i]);
               }
             }
              else 
              {
               array.push(toPush);
              }
          return array;
        }
    

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
        var sourceStr="ram lella";
    var result = new Array();
     if (typeof sourceStr === 'string') 
     {
       result = sourceStr.split (' ');
     }
     else
     {
       result;
     } 
    return result;

     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
         // FILL THIS IN
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
       return /^\s*$/.test (sourceStr);
     }

     // write an example of a javascript closure
      function myFunction(argu1) {
        argu1("second variable");
    }

    function myFunction1() {
        var first = "first variable";

        alert(first);

        myFunction(function(argu2) {
            first = argu2;
        });

        alert(first);
    }
    

     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)

   var jsonobj = {persondetails:[{
         firstname:'john',
         lastname:'cena',
         city: 'west newbury',
         state:'US',
         zip:'01985',
         phonenumbers:[
         {home:'732-200-1457'},
         {work:'732-200-4586'},
         {mobile:'732-200-4875'}
         ]
        },
         {firstname:'john',
         lastname:'cena',
         city: 'west newbury',
         state:'US',
         zip:'01985',
         phonenumbers:[
         {home:'732-200-1457'},
         {work:'732-200-4586'},
         {mobile:'732-200-4875'}
         ]
        }
        ]};
    


     // Create a javascript object (DataTable) with the following:
     // A private columns property (string array)
     // A private rows property (string array)
     // A public method addRows that adds an item to the rows array
     // A public method addColumns that adds an item to the columns array
     // A public method getData that returns the a json object representation of the DataTable
     // Note: the row object should be a hash of the column name and row item value
     // Example:
     // .addColumns('column1', 'column2', 'column3');
     // .addRow('value1A', 'value1B', 'value1C');
     // .addRow('value2A', 'value2B', 'value2C');
     var DataTable = function() {
     //private variables
     var columns = [];
     var rows = [];

     return {

          function addRow() {
               for(var i = 0; i < arguments.length; i++) {
                    if(typeof arguments[i] !== 'string') {
                         console.log("not string!");
                    }
                    console.log(rows.push(arguments[i]));
               }
          }
           
          function addColumns() {
               for(var i = 0; i < arguments.length; i++) {
                    if(typeof arguments[i] !== 'string') {
                         console.log("not string!");
                    }
                    console.log(columns.push(arguments[i]);
               }
          }

          function getData(row, column) {
               var result ={};
               result[columns[column]] = rows[row];
               return result;
               console.log(columns,rows);
          }
     };
}
       
      


     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.
     $('#div1').append('<select id="select" name="select"></select>',                         
                            '<button type="button" id="subtn">choose</button>');
         $('#div1 select').append('<option value="1" name="CAR" selected="selected">CAR</option>',
                            '<option value="2" name="DUSTER">DUSTER</option>',
                            '<option value="3" name="AUDI">AUDI</option>');

         $("#subtn").click(function()
            {
              //name = $('#select').attr('name');
              name = $('#select').find(':selected').attr('name');
              value = $('#select').find(':selected').val();
              console.log('name:' + name + ' value:' + value);
         });


     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.
     $(document).ready(function()
     {
        $("a");
        $("#foobar > a");
        $("a:first");
        $("a:last");
        $("a:even");
        $("a:odd");
        $("a[target='_blank']");
    });

     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".
     $(document).ready(function()
     {
        var arr = new Array();
        arr[0]="zero";
        arr[1]="one";
        arr[2]="two";
        arr[3]="three";
        arr[4]="four";
        for(var i=0;i<arr.length;i++)
        {
            $("#list1").append('<li>' +arr[i]+'</li>');
        }
    });



     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
     $(document).ready(function()
     {
      $("#foobar").append('<a href="#" id="checkall">Check all</a><br/>',
        '<a href="#" id="uncheckall">uncheck all</a><br/>',
        '<input type="checkbox" name="f1"/>First 1<br/>',
                    '<input type="checkbox" name="f2"/>second 2<br/>',
                    '<input type="checkbox" name="f3"/>three 3<br/>',
                    '<input type="checkbox" name="f4"/>four 4<br/>');
      $("#checkall").click(function(){
        var result = $('#foobar input:not(:checked)');
            for (var i = 0; i < result.length; i = i + 1) {
               result[i].click();
           }
      });

      $("#uncheckall").click(function(){
        var result = $('#foobar input:checked');
            for (var i = 0; i < result.length; i = i + 1) {
               result[i].click();
           }
      });


     });
