let coin = {
    state: 0,
    
    
    flip: function() {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
           
          let randomNumber =  Math.random() 
            if (randomNumber <.5 )
            {
                this.state = 0
            }
            else {
                this.state = 1
            }

    },
    toString: function() {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */

           if (this.state === 0) {
               return "Heads"
           }

           else {
               return "Tails"
           }
    },
    toHTML: function() {
        let image = document.createElement('img');
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/

           if(this.state === 0){
               image. src = 'assests/images/us_half_dollar_obverse_2015.png'
           }

           else
           {
               image. src = 'assests/images/us_50_cent_rev.png'
           }
        image.height = 50
        image.width = 50
           return image;
    }
    
};

toFlips()
toImages()
     function toFlips() {
       console.log ('starting toFlips function')
        let flips = 0
        while ( flips < 20)
        {
            coin.flip () 
            let element = document.createElement('div');
            element.innerHTML=coin.toString()
            document.body.append(element)
            flips++

        }
    }
    function toImages() {
        console.log ('starting toFlips function')
         let flips = 0
         while ( flips < 20)
         {
             coin.flip () 
             let element = coin.toHTML();
             document.body.append(element)
             flips++
 
         }
        }    