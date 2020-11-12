import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-calculator-output',
  templateUrl: './calculator-output.component.html',
  styleUrls: ['./calculator-output.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalculatorOutputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
