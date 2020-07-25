import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dummy-simulator',
  templateUrl: './dummy-simulator.component.html',
  styleUrls: ['./dummy-simulator.component.scss']
})
export class DummySimulatorComponent implements OnInit {

  simulatorForm: FormGroup;

  interestValue: number;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.simulatorForm = this.fb.group({
      value: ['', Validators.compose([
        Validators.required,
        Validators.min(1)
      ])]
    });
  }

  formSubmit() {
    if (this.simulatorForm.valid) {
      const v = this.simulatorForm.value.value;
      this.interestValue = v + (v * 0.042) ;
    }
  }

}
