function starString(num){
    var str = ""
    for(var i = 0; i < num; i++){
        str += "*"
    }
    console.log(str)
}

let test1 = (starString(5))
    console.log(test1)


function drawStars(array){
    var str = "";

    for(var i = 0; i < array.length; i++){
        var temp = array[i];    
        for(var j = 0; j < temp; j++){
            str += "*";
            
        }
        console.log(str);
        str = "";
    }
}

let arr = [3,1, 4, 5]
let test2 = (drawStars(arr))
    console.log(test2);

function drawThings(array){
    var str = "";
    for(var i = 0; i < array.length; i++){
        var temp = array[i];
        if(typeof temp === 'string'){    
            for(var j = 0; j < temp.length; j++){
                str += array[i][0].toLowerCase()
            }
        }else{
            for(var k = 0; k < temp; k++){
                str += "*";
            }
        }
        console.log(str);
        str = "";
    }
}
let x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
let test3 = drawThings(x)
    console.log(test3)
