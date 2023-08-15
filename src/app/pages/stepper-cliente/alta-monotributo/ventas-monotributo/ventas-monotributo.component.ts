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
  selector: 'app-ventas-monotributo',
  templateUrl: './ventas-monotributo.component.html',
  styleUrls: ['./ventas-monotributo.component.css'],
})
export class VentasMonotributoComponent implements OnInit, OnDestroy {
  private subscriptions: Array<Subscription> = [];
  public ventasForm!: FormGroup;

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
    this.ventasForm = this.formBuilder.group({
      localEnCalle: [null, [Validators.required]],
    });
  }

  onSubmit() {}
}
