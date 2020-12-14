import { Component, OnInit, Input } from '@angular/core';
import { faPoo,faStar, faGlasses, faChessPawn,  faChessKnight,
  faChessRook, faChessQueen, faDragon } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.sass']
})

export class IconsComponent implements OnInit {

  @Input() input:any;

  icons = []

  ngOnInit() {
    if (typeof this.input == "object") {
          if (this.input['H-Index'] == '-' || this.input['H-Index'] == 0)
              this.icons.push(faPoo)
          if (this.input['H-Index'] >= 1)
              this.icons.push(faChessPawn)
          if (this.input['H-Index'] >= 10)
              this.icons.push(faChessKnight)
          if (this.input['H-Index'] >= 20)
              this.icons.push(faChessRook)
          if (this.input['H-Index'] >= 30)
              this.icons.push(faChessQueen)
          if (this.input['H-Index'] >= 40)
              this.icons.push(faDragon)
          if (this.input['A'] > 80)
            this.icons.push(faStar)
          if (this.input['Years Taught'].length > 4)
            this.icons.push(faGlasses)
      }
  }

}
