import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CartService } from '../../services/cart.service';
import {CartModel} from "../../models/cart.model";

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartListComponent {
  readonly cartList$: Observable<CartModel> = this._activatedRoute.params.pipe(switchMap(data => this._cartService.getOne(data['id'])));

  constructor(private _activatedRoute: ActivatedRoute, private _cartService: CartService) {
  }
}
