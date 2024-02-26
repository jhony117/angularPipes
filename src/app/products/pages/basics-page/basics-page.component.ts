import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {


public nameLower:string = 'john';
public nameUpper:string = 'JOHN';
public fullName :string = 'JoHn';

public customDate: Date = new Date();


}
