function configureListeners() {
    // select img elements  
    let images = document.querySelectorAll('img');


    for(var i = 0; i < images.length; i++) {        
        // iterate over images and add mouseover event listeners
        images[i].addEventListener('mouseover', function(event) {
            addOpacity(event);
        })
        images[i].addEventListener('mouseleave', function(event) {
            removeOpacity(event);
        })
    } 
    
}

function addOpacity(event) {
    // add appropriate CSS class
    event.target.classList.add('dim')
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
     //remove appropriate CSS class
    //console.log('Remove opacity')
    event.target.classList.remove('dim')
    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':
            // set variables for price and color name 
            colorName = 'Lime green';
            price = '$14.99';
            //and invoke a function to update the price     
            break;           
        case 'pn2':
            // set variables for price and color name 
            colorName = 'Brown';
            price = '$11.14';

            //and invoke a function to update the price    
            break;            
        case 'pn3':
            // set variables for price and color name 
            colorName = 'Royal blue';
            price = '$22.99';

            //and invoke a function to update the price  
            break;   
        case 'pn4':
            // set variables for price and color name 
            colorName = 'Red';
            price = '$13.42';
            //and invoke a function to update the price  
            break;   
        case 'pn5':
            // set variables for price and color name 
            colorName = 'White';
            price = '$21.98';
            //and invoke a function to update the price       
            break;   
        case 'pn6':
            // set variables for price and color name 
            colorName = 'Black';
            price = '$4.99';
            //and invoke a function to update the price        
            break;   
        case 'pn7':
            // set variables for price and color name 
            colorName = 'Cyan';
            price = '$8.22';
            //and invoke a function to update the price 
            break;   
        case 'pn8':
            // set variables for price and color name 
            colorName = 'Purple';
            price = '$11.99';
            //and invoke a function to update the price   
            break;   
        case 'pn9':
            // set variables for price and color name 
            colorName = 'Yellow';
            price = '$14.99';
            //and invoke a function to update the price 
            break;   
          default:              
    }
    //once the variables are set, to save typing, you only have to
    //invoke the function once.
    updatePrice(colorName, price);
}
function updatePrice(colorName, price){
    {   
        // select element with corresponding id    
        let colorPrice = document.getElementById('color-price');

        // select element with corresponding id
        let color = document.getElementById('color-name');

        //display color name
        colorPrice.textContent = price;
        color.textContent = colorName;
    }

}
