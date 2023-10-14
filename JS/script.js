// Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
      ];
  
      const people = [
        'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
        'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
        'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
        'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
        'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
      ];
      
      // Array.prototype.filter()
      // 1. Filter the list of inventors for those who were born in the 1500's
      //take inventors and filter over it by passing in a function that will loop over every item in inventors array
      // const fifteen = inventors.filter(function(inventor){
      //   if (inventor.year >= 1500 && inventor.year <= 1599) {
      //     return true
      //   }
      // })
      
      //shorthand arrow function & ternary op
      const fifteen = inventors.filter (inventor => (inventor.year >= 1500 && inventor.year <= 1599 ? true : false))
      
      console.log(fifteen)

      // Array.prototype.map() 
      // map takes in array and returns a new array of same length
      // return inventor's first name and last name
      // 2. Give us an array of the inventors first and last names
      const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`)
      
      console.log(fullNames)
  
      // Array.prototype.sort() 
      // Sort works comparatively between 2 items and defines the element's relative order
      // 3. Sort the inventors by birthdate, oldest to youngest
      const ordered = inventors.sort(function(a, b){
        if (a.year > b.year){
          return 1
        } else {
          return -1
        }
      })
      console.log(ordered)
      //short hand
      // const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1)
      
      // Array.prototype.reduce() // take ages and add them all together
      // 4. How many years did all the inventors live all together?
      const totalYears = inventors.reduce((total, inventors) => {
        return total + (inventors.passed - inventors.year)
      }, 0)

      console.log(totalYears)
  
      // 5. Sort the inventors by years lived
      const oldest = inventors.sort((a,b) => {
        const lastPers = a.passed - a.year
        const nextPers = b.passed - b.year
        return lastPers > nextPers ? -1 : 1
      })
      console.log(oldest)
      // // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
      // //https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
      // const category = document.querySelector('.mw-category') //selects container holding elements
      // const links = Array.from(category.querySelectorAll('a')) //gives you all links as a node list. Need to change into array. convert it to list of names and filter to include de
      // const de = links
      //           .map(link => link.textContent) //will give us text of all links now you need to filter for de
      //           .filter(streetName => streetName.includes('de'))
  
  
      // 7. sort Exercise
      // Sort the people alphabetically by last name
      let alpha = people.sort((lastOne, nextOne) => {
        const [aLast, aFirst] = lastOne.split(', ')
        const [bLast, bFirst] = lastOne.split(', ')
        return aLast > bLast ? 1 : -1
      })
      console.log(alpha)

      // 8. Reduce Exercise
      // Sum up the instances of each of these
      const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
      const transportation = data.reduce((obj, item) => {
        if(!obj[item]) {
        obj[item] = 0
        }
        obj[item]++
        // console.log(item) // returns all array items as individ obj
        return obj
      })
      console.log(transportation)
      //I coded along to https://www.youtube.com/watch?v=HB1ZC7czKRs
