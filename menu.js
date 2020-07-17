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
      removeDishFromCourse(courseName, id){
        this._courses[courseName].splice(id,1);
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
        return `<p class="meal-p">Appetizer:  ${appetizer.name}<p/>
        <p class="meal-p">Entree: ${main.name}<p/>
        <p class="meal-p">Dessert: ${dessert.name} <p/>
        <p class="meal-p">The total price is $${totalPrice}.<p/>`;
      },   

      displayAppMenu(){
        const appetizers = this._courses['appetizers'];
        const mains = this._courses['mains'];
        const desserts = this._courses['desserts']
        let text = '<h3 class=\'menu-heading\'>Appetizers</h2>';
        for(i = 0; i < appetizers.length; i++){
            text += `<p num="${i}" onclick="deleteDish('appetizers', ${i})" course="appetizers">${appetizers[i].name} </p>`;
        }
        text += '<h3 class=\'menu-heading\'> Entrees </h3>';
        for(i = 0; i < mains.length; i++){
            text += `<p num="${i}" course="mains">${mains[i].name} </p>`;
        }
        text += '<h3 class=\'menu-heading\'> Desserts </h3>';
        for(i = 0; i < desserts.length; i++){
            text += `<p num="${i}" course="desserts">${desserts[i].name} </p>`;
        }

        document.getElementById('menu-body').innerHTML = text;
      }

  }
      /*
      menu.addDishToCourse('appetizers', 'Caesar Salad', 10);
      menu.addDishToCourse('appetizers', 'Seitan Wings', 12);
      menu.addDishToCourse('appetizers', 'Bavarian Pretzel', 14);
      menu.addDishToCourse('mains', 'Chick\'N & Waffles', 24);
      menu.addDishToCourse('mains', 'BBQ Bowl', 22);
      menu.addDishToCourse('mains', 'Da Philly', 21);
      menu.addDishToCourse('desserts', 'NY Style Cheesecake', 8);
      menu.addDishToCourse('desserts', 'Apple Pie', 6);
      menu.addDishToCourse('desserts', 'Double Chocolate Cake', 6);
      */
  
      printMenu = () =>{
          myMenu = menu.displayAppMenu()
          return myMenu;
      }

      addDish = () =>{
          const course = document.forms['AddDish']['course-select'].value;
          const name = document.forms['AddDish']['name'].value;
          const price = parseInt(document.forms['AddDish']['price'].value);
            menu.addDishToCourse(`${course}`, `${name}`, price); 
            printMenu();
            document.getElementById('AddDish').reset();
            console.log(`Added ${name} for $${price} to ${course}`);   
      }

      deleteDish = (course, i) =>{
        menu.removeDishFromCourse(course, i);
        printMenu();
      }

      generatorClicked = () =>{
        meal = menu.generateRandomMeal(); 
        document.getElementById('Meal').innerHTML = meal;
        document.getElementById('heading').style.display = 'inline-flex';
        document.querySelector('.menu-container').style.display = 'none';
      }
