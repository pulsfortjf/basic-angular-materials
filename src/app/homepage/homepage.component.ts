import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  title = 'My App';
  cardTitle = 'Home';
  cardSubtitle = ''

  pageContent: string = 'Hello! Welcome to my page about Python data types! Click any of the buttons in the toolbar to learn more about each topic!';
  // Example function to handle toolbar button click
  onButtonClick(buttonName: string): void {
    console.log('Button clicked');
    if(buttonName == 'Home') {
      this.cardSubtitle = '';
    }
    else {
      this.cardSubtitle = buttonName;
    }
    if(this.cardSubtitle == '') {
      this.pageContent = 'Hello! Welcome to my page about Python data types! Click any of the buttons in the toolbar to learn more about each topic!'
    }
    else if(this.cardSubtitle == 'Lists') {
      this.pageContent = 'Lists are used to store multiple items in a single variable\n\n' +
        'Lists are one of 4 built-in data types in Python used to store collections of data, the other 3 are Tuple, Set, and Dictionary, all with different qualities and usage.\n\n' +
        'Lists are created using square brackets:\n\n' +
        '\tthislist = ["apple", "banana", "cherry"]\n\n' +
        'List items are ordered, changeable, and allow duplicate values.\n\nList items are indexed, the first item has index [0], the second item has index [1] etc.'
    }
    else if(this.cardSubtitle == 'Dictionaries') {
      this.pageContent = 'Dictionaries are used to store data values in key:value pairs.\n\nA dictionary is a collection which is ordered*, changeable and do not allow duplicates.\n\n' +
        '* As of Python version 3.7, dictionaries are ordered. In Python 3.6 and earlier, dictionaries are unordered.\n\n' +
        'Dictionaries are written with curly brackets, and have keys and values:\n\n' +
        '\tthisdict = {\n\n\t\t"brand": "Ford",\n\n\t\t"model": "Mustang",\n\n\t\t"year": 1964\n\n\t}\n\n' +
        'Dictionary items are ordered, changeable, and does not allow duplicates.\n\nDictionary items are presented in key:value pairs, and can be referred to by using the key name.\n\n' +
        '\tthisdict["brand"]\n\n\t**returns "Ford"**'
    }
    else if(this.cardSubtitle == 'Sets') {
      this.pageContent = 'A set is a collection which is unordered, unchangeable*, and unindexed.\n\n* Note: Set items are unchangeable, but you can remove items and add new items.\n\n' +
        'Sets are written with curly brackets.\n\n\tthisset = {"apple", "banana", "cherry"}\n\n* Note: Sets are unordered, so you cannot be sure in which order the items will appear.'
    }
    else if(this.cardSubtitle == 'Tuples') {
      this.pageContent = 'A tuple is a collection which is ordered and unchangeable.\n\nTuples are written with round brackets.\n\n' +
        '\tthistuple = ("apple", "banana", "cherry")\n\nTuple items are ordered, unchangeable, and allow duplicate values.\n\nTuple items are indexed, the first item has index [0], the second item has index [1] etc.'
    }
  }

  onCardButtonClick(buttonName: string): void {
    console.log('Card Button clicked');
    this.cardSubtitle = buttonName;
  }

  inputString: string = '';
  clearButtonClick(): void {
    this.inputString = '';
    console.log('inputString: ', this.inputString)
  }

}
