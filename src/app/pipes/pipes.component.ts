import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  titulo: string = "Esto es un titulo"
  ganancias: number = 0.54
  dinero: number = 2500

  fechaNac: Date = new Date ('04-11-21')

  textoLargo: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat iste ipsa laborum placeat similique pariatur explicabo tenetur delectus non odio ex consectetur voluptatibus reprehenderit dolorem ipsam, labore quod eius quam: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sed magni possimus labore sit ullam ad molestiae voluptas quia. Sit unde vitae perspiciatis amet ad ipsam quasi rerum repudiandae sequi'


  constructor() { }

  ngOnInit(): void {
  }

}
