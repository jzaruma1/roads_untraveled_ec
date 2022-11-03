import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-thinking-detail',
  templateUrl: './thinking-detail.component.html',
  styleUrls: ['./thinking-detail.component.scss']
})
export class ThinkingDetailComponent implements OnInit {
  form!: FormGroup;
  constructor(private fb: FormBuilder,
    private location: Location) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      title: ["", Validators.required],
      description: ["", Validators.required]
    })
  }

  close() {
    this.location.back();
  }

  save() {
    console.log(this.form.value);
  }
}
