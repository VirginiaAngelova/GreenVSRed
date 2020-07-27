import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  x = new FormControl('');
  y = new FormControl('');

  constructor() { }

  DrawGrid() {
    var width = this.x.value;
    var height = this.y.value;
    
    // function getRandomInt(min, max) {
      // return Math.floor(Math.random() * (max - min + 1) + min);

    // }

    // var colors = ["green", "red"];
    var c = "";

    for (var i = 0; i < height; i++) {
      c += "<tr>";
      for (var j = 0; j < width; j++) {
        c += '<td id="cells" >&nbsp;</td>';
        //style="background-color:' + colors[getRandomInt(0, colors.length)] + ';"
      }
      c += "</tr>";
    }
    document.getElementById("game").innerHTML = c;
  }

  ChangeColorRed() {
    var elem = document.getElementById('cells');
    elem.style.background = "red";
  }
  ChangeColorGreen() {
    var elem = document.getElementById('cells');
    elem.style.background = "green";
  }

  Delegation(event) {
    let target = event.target; // where was the click?
  
    if (target.tagName != 'td') return; // not on TD? Then we're not interested
  
    this.highlight(target); // highlight it
  };

  
   highlight(td) {
    var selectedTd;
    if (selectedTd) { // remove the existing highlight if any
      selectedTd.classList.remove('highlight');
    }
    selectedTd = td;
    selectedTd.classList.add('highlight'); // highlight the new td
  }



  ngOnInit(): void {
  
  }
  
}