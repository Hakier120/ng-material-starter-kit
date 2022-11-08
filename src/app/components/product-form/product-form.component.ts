import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NewProductService } from '../../services/newproduct.service';

@Component({
  selector: 'app-product-form',
  styleUrls: ['./product-form.component.scss'],
  templateUrl: './product-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormComponent {
  readonly productForm: FormGroup = new FormGroup(
    {
      title: new FormControl(), price: new FormControl(), description: new FormControl(),
      image: new FormControl(), category: new FormControl()
    });

  constructor(private _newProductService: NewProductService) {
  }

  onProductFormSubmitted(productForm: FormGroup): void {
    this._newProductService.create({
      title: productForm.get('title')?.value,
      category: productForm.get('category')?.value,
      price: productForm.get('price')?.value,
      description: productForm.get('description')?.value,
      image: productForm.get('image')?.value,
    }).subscribe();
  }
}
