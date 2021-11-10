import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-generated-form',
  templateUrl: './generated-form.component.html',
  styleUrls: ['./generated-form.component.scss']
})
export class GeneratedFormComponent implements OnInit {
  mainFormGroup: FormGroup = {} as FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.mainFormGroup = this.fb.group({
      _id: ['', [Validators.required]],
      picture: ['', [Validators.required]],
      age: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    });
  }


}
