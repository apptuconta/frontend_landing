import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contador-datos-personales',
  templateUrl: './contador-datos-personales.component.html',
  styleUrls: ['./contador-datos-personales.component.css'],
})
export class ContadorDatosPersonalesComponent implements OnInit, OnDestroy {
  private subscriptions: Array<Subscription> = [];
  public datosPersonalesForm!: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.createForm();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  private createForm(): void {
    this.datosPersonalesForm = this.formBuilder.group({
      localEnCalle: [null, [Validators.required]],
    });
  }

  onSubmit() {}
}
