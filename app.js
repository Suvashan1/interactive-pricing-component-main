const pageviews = ["10K PAGEVIEWS", "50K PAGEVIEWS", 
                    "100K PAGEVIEWS", "500K PAGEVIEWS", "1M PAGEVIEWS"];


// default prices 
let price = [8.00, 12.00, 16.00, 24.00, 36.00];
let i = 0;

//views and prices
const views = document.getElementById("view");
const prices = document.getElementById("demo");

// slider element
const slider = document.getElementById("sliderRange");

button = document.getElementById("buttonID")

// eventlistener to track if the user toggles the discount switch and applies and reverts
// the changes of the prices based on a "counter variable" i. The discount will be toggled if
// the switch is toggled an odd number of times, showing it has been toggled last instead of untoggled
button.addEventListener("click", function(){
        i++;
        if(i%2 !== 0 && i > 0){
            prices.innerHTML = (parseFloat(prices.innerHTML) * 0.75).toFixed(2);
            document.getElementById('discountText').style.backgroundColor = "hsl(13, 92%, 86%)";
        }
        else if(i > 1 && i%2 === 0){
           prices.innerHTML = (parseFloat(prices.innerHTML) / 0.75).toFixed(2);
           document.getElementById('discountText').style.backgroundColor = "hsl(14, 92%, 95%)";
        }
});

views.innerHTML = pageviews[2];
prices.innerHTML = price[2].toFixed(2);


//switch statement to process slider inputs
slider.oninput = function(e){

    switch(parseFloat(this.value)){
        case 10.0:
            i = 0;
            document.getElementById("checking").checked = false;
            document.getElementById('discountText').style.backgroundColor = "hsl(14, 92%, 95%)";
            views.innerHTML = pageviews[0];
            prices.innerHTML = (price[0]).toFixed(2);
            break;

        case 32.5:
            i = 0;
            document.getElementById("checking").checked = false;
            document.getElementById('discountText').style.backgroundColor = "hsl(14, 92%, 95%)";
            views.innerHTML = pageviews[1];
            prices.innerHTML = (price[1]).toFixed(2);
            break;

        case 55.0:
            i = 0;
            document.getElementById("checking").checked = false;
            document.getElementById('discountText').style.backgroundColor = "hsl(14, 92%, 95%)";
            views.innerHTML = pageviews[2];
            prices.innerHTML = (price[2]).toFixed(2);
            break;

        case 77.5:
            i = 0;
            document.getElementById("checking").checked = false;
            document.getElementById('discountText').style.backgroundColor = "hsl(14, 92%, 95%)";
            views.innerHTML = pageviews[3];
            prices.innerHTML = (price[3]).toFixed(2);
            break;

        case 100.0:
            i = 0;
            document.getElementById("checking").checked = false;
            document.getElementById('discountText').style.backgroundColor = "hsl(14, 92%, 95%)";
            views.innerHTML = pageviews[4];
            prices.innerHTML = (price[4]).toFixed(2);
            break;
        default:
    }
}



