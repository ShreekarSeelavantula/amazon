
let string ="";
for(let i=0 ; i<=products.length-1;i++)
{
    string += `

    <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${products[i].image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${products[i].name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${products[i].rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${  products[i].rating.count }
            </div>
          </div>

          <div class="product-price">
            $${ parseFloat(  (products[i].priceCents / 100).toFixed(2)  ) }
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary add_button_class"

          data-add_button_id = "${products[i].id}"  
          >
            Add to Cart
          </button>
        </div>

    `;//javascript interpolation end


}


document.querySelector('.products-grid').innerHTML=string;
let add_button = document.querySelectorAll('.add_button_class');// here add_button is a node which acts as like an araay where it stores the information of the buttons having the same class name "add_button_class"

for(let i =0 ; i<=(add_button.length-1) ; i++)// here add_button is a node which acts as like an araay where it stores the information of the buttons having the same class name "add_button_class"
{
  add_button[i].addEventListener("click", show_items);
}

function show_items(event)
{
  let button = event.target;
  let matched_item_index = undefined;


  for(let i = 0 ; i<=(cart.length-1); i++)
  {
    if(String(cart[i].id) === button.dataset.add_button_id)//here we are checking if the name of the product that we clicked(we can get this name using the declration of the data attribute in the button that we clicked ) is already there in the cart array (this cart array exeists in the cart.js file) or not . if yes we are assigning this name to the variable "matched_item"
    {
      
         matched_item_index = i;
          break;
        
    }//end of if statement which checks whether it exists the common product name 

  }//end of for loop of button node list

    if(matched_item_index !== undefined)//why i did not wrote matched_item_index === true is there can be index =0 which will make the condition false for this if statement
    {

      cart[matched_item_index].quantity+=1;
    }
    
    else{

    cart.push(
      {
        id : button.dataset.add_button_id,
        quantity : 1
        
      }
             ); //end of push


    
  }//end of else

  



console.log(cart);

}//end of show_items event listener




