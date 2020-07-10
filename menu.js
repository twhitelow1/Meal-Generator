const menu = {
    _courses : {
      appetizers: [], 
      mains: [], 
      desserts: [],
      },
  
      get appetizers(){
        return this._courses.appetizers;
      },
      set appetizers(appetizers){
        this._courses.appetizers = appetizers;
      },
      get mains(){
        return this._courses.mains;
      },
      set mains(mains){
        this._courses.mains = mains;
      },
      get desserts(){
        return this._courses.desserts;
      },
      set desserts(desserts){
        this._courses.desserts = desserts;
      },
  
      get courses(){
        return {
          appetizers: this.appetizers,
          mains: this.mains,
          desserts: this.desserts,
        };
      },

      addDishToCourse(courseName, dishName, dishPrice){
        const dish = {
          name: dishName,
          price: dishPrice,
        };
  
        this._courses[courseName].push(dish);
      },
  
      getRandomDishFromCourse(courseName){
        const dishes = this._courses[courseName];
        const randomNum = Math.random() * dishes.length;
        const roundRandomNum = Math.floor(randomNum);
        return dishes[roundRandomNum];
      },
  
      generateRandomMeal(){
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal will start with ${appetizer.name} and you main course will be ${main.name}. After the main course you will end your meal with a delicious ${menu.name} The price is $${totalPrice}.`;
      },   

      displayAppMenu(){
        const appetizers = this._courses['appetizers'];
        const mains = this._courses['mains'];
        const desserts = this._courses['desserts']
        let text = '<h3 class=\'menu-heading\'>Appetizers</h2>';
        for(i = 0; i < appetizers.length; i++){
            text += appetizers[i].name + '<br />';
        }
        text += '<h3 class=\'menu-heading\'> Entrees </h3>';
        for(i = 0; i < mains.length; i++){
            text += mains[i].name + '<br />';
        }
        text += '<h3 class=\'menu-heading\'> Desserts </h3>';
        for(i = 0; i < desserts.length; i++){
            text += desserts[i].name + '<br />';
        }

        document.getElementById('menu-body').innerHTML = text;
      }

  }
  
      menu.addDishToCourse('appetizers', 'Caesar Salad', 10);
      menu.addDishToCourse('appetizers', 'Seitan Wings', 12);
      menu.addDishToCourse('appetizers', 'Bavarian Pretzel', 14);
      menu.addDishToCourse('mains', 'Chick\'N & Waffles', 24);
      menu.addDishToCourse('mains', 'BBQ Bowl', 22);
      menu.addDishToCourse('mains', 'Da Philly', 21);
      menu.addDishToCourse('desserts', 'NY Style Cheesecake', 8);
      menu.addDishToCourse('desserts', 'Apple Pie', 6);
      menu.addDishToCourse('desserts', 'Double Chocolate Cake', 6);
  
      printMenu = () =>{
          myMenu = menu.displayAppMenu()
          return myMenu;
      }

      addDish = () =>{
          const course = document.forms['AddDish']['course-select'].value;
          const name = document.forms['AddDish']['name'].value;
          const price = document.forms['AddDish']['price'].value;
          if(course.toLowerCase() === ''){
            return alert('pick a course!');
          }else{
            menu.addDishToCourse('appetizer', 'test', 'price'); 
            return alert(`Added ${name} for $${price} to ${course}`);
          }       
      }

      generatorClicked = () =>{
        meal = menu.generateRandomMeal(); 
        document.getElementById('Meal').innerHTML = meal;
        document.getElementById('heading').style.display = 'inherit';
        document.getElementById('instructions').style.display = 'none';
      }
