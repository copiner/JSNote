
function add(getX, getY, cb){
    var x, y;
    getX(function(xVal){
        x = xVal;

        if(y != undefined){
            cb(x + y)
        }
    });
    getY(function(yVal){
        y = yVal;

        if(x != undefined){
            cb(x + y);
        }
    })
}

add (fetchX, fetchY, function(sum){
    console.log(sum);
})


function add2(xPromise, yPromise){
    return Promise.all([xPromise, yPromise])
        .then(function(values){
            return values[0] + values[1]
        })
}

add2(fetchX(), fetchY()).then(function(sum){
    console.log(sum)
})
