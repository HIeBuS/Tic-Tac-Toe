//deklaracja poczatkowego znaku  
var activePlayer=true; 

//funkcja wstawiajaca znak do tile1
function write_OX1()
{  
    if(activePlayer==true)
    {
        document.getElementById('tile1').innerHTML = 'O';  
        activePlayer = !(activePlayer);  
    }
    else
    {
        document.getElementById('tile1').innerHTML = 'X'; 
        activePlayer= !(activePlayer); 
    }
}

//funkcja wstawiajaca znak do tile2
function write_OX2()
{  
    if(activePlayer==true)
    {
        document.getElementById('tile2').innerHTML = 'O';  
        activePlayer = !(activePlayer);  
    }
    else
    {
        document.getElementById('tile2').innerHTML = 'X'; 
        activePlayer= !(activePlayer); 
    }          
}

//funkcja wstawiajaca znak do tile3
function write_OX3()
{  
    if(activePlayer==true)
    {
        document.getElementById('tile3').innerHTML = 'O';  
        activePlayer = !(activePlayer);  
    }
    else
    {
        document.getElementById('tile3').innerHTML = 'X'; 
        activePlayer= !(activePlayer); 
    }           
}

//funkcja wstawiajaca znak do tile4
function write_OX4()
{  
    if(activePlayer==true)
    {
        document.getElementById('tile4').innerHTML = 'O';  
        activePlayer = !(activePlayer);  
    }
    else
    {
        document.getElementById('tile4').innerHTML = 'X'; 
        activePlayer= !(activePlayer); 
    }            
}

//funkcja wstawiajaca znak do tile5
function write_OX5()
{  
    if(activePlayer==true)
    {
        document.getElementById('tile5').innerHTML = 'O';  
        activePlayer = !(activePlayer);  
    }
    else
    {
        document.getElementById('tile5').innerHTML = 'X'; 
        activePlayer= !(activePlayer); 
    }            
}

//funkcja wstawiajaca znak do tile6
function write_OX6()
{  
    if(activePlayer==true)
    {
        document.getElementById('tile6').innerHTML = 'O';  
        activePlayer = !(activePlayer);  
    }
    else
    {
        document.getElementById('tile6').innerHTML = 'X'; 
        activePlayer= !(activePlayer); 
    }             
}

//funkcja wstawiajaca znak do tile7
function write_OX7()
{  
    if(activePlayer==true)
    {
        document.getElementById('tile7').innerHTML = 'O';  
        activePlayer = !(activePlayer);  
    }
    else
    {
        document.getElementById('tile7').innerHTML = 'X'; 
        activePlayer= !(activePlayer); 
    }              
}

//funkcja wstawiajaca znak do tile8
function write_OX8()
{  
    if(activePlayer==true)
    {
        document.getElementById('tile8').innerHTML = 'O';  
        activePlayer = !(activePlayer);  
    }
    else
    {
        document.getElementById('tile8').innerHTML = 'X'; 
        activePlayer= !(activePlayer); 
    }              
}

//funkcja wstawiajaca znak do tile9
function write_OX9()
{  
    if(activePlayer==true)
    {
        document.getElementById('tile9').innerHTML = 'O';  
        activePlayer = !(activePlayer);  
    }
    else
    {
        document.getElementById('tile9').innerHTML = 'X'; 
        activePlayer= !(activePlayer); 
    }              
}

//funkcja usuwajaca znaki na planszy
function newGame()
{
        document.getElementById('tile1').innerHTML = ''; 
        document.getElementById('tile2').innerHTML = ''; 
        document.getElementById('tile3').innerHTML = ''; 
        document.getElementById('tile4').innerHTML = ''; 
        document.getElementById('tile5').innerHTML = ''; 
        document.getElementById('tile6').innerHTML = ''; 
        document.getElementById('tile7').innerHTML = ''; 
        document.getElementById('tile8').innerHTML = ''; 
        document.getElementById('tile9').innerHTML = ''; 
}

//not working at the moment
//funkcja sprawdzajaca czy gracz zwyciezyl
/*function ifWin()
{
    //deklaracja zmiennych przechowujacych pola
    var char1 = document.getElementById('tile1').innerHTML;
    var char2 = document.getElementById('tile2').innerHTML;
    var char3 = document.getElementById('tile3').innerHTML;
    var char4 = document.getElementById('tile4').innerHTML;
    var char5 = document.getElementById('tile5').innerHTML;
    var char6 = document.getElementById('tile6').innerHTML;
    var char7 = document.getElementById('tile7').innerHTML;
    var char8 = document.getElementById('tile8').innerHTML;
    var char9 = document.getElementById('tile9').innerHTML;

    if(char1=='O' && char2=='O' && char3=='O' || char1=='X' && char2=='X' && char3=='X')
    {
        document.getElementById('tile1').style.backgroundColor = "#a68d47";
        document.getElementById('tile2').style.backgroundColor = "#a68d47";
        document.getElementById('tile3').style.backgroundColor = "#a68d47";
    }
}*/
 

