import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { NewProductService } from '../../services/newproduct.service';
import { ProductCategoriesService } from '../../services/product-categories.service';

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
  readonly categories$: Observable<ProductModel[]> = this._productCategoriesService.getAll();

  constructor(private _newProductService: NewProductService, private _productCategoriesService: ProductCategoriesService) {
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
