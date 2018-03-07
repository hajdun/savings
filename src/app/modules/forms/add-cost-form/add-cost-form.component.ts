import { Component, OnInit, OnDestroy } from '@angular/core';
import { CostItemService } from '../../../cost-item.service';
import { CostItem } from '../../../costItemInterface';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormArray, FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'add-cost-form',
  templateUrl: './add-cost-form.component.html',
  styleUrls: ['./add-cost-form.component.scss']
})

export class AddCostFormComponent implements OnInit {

  public formattedDate: string = new Date().toLocaleDateString();

  public costItem: CostItem;
  public costItemFrm: FormGroup;
  public costItems: Array<CostItem>;

  public totalSpent: number;
  public unitPrice = 100;
  public itemAmount = 1;

  public tagsControl: FormArray;

  public isEdit = false;

  // TODO: fetch with service
  public categories: Object[] = [
    { 'categoryName': 'Other', 'categoryColor': 'white' },
    { 'categoryName': 'Food > Dairy product', 'categoryColor': '#4169E1' },
    { 'categoryName': 'Food > Baking & cooking', 'categoryColor': 'orange' },
    { 'categoryName': 'Food > Fruits & veggies', 'categoryColor': '#00FA9A' },
    { 'categoryName': 'Food > Bakery', 'categoryColor': 'yellow' },
    { 'categoryName': 'Food > Meat', 'categoryColor': 'red' },
    { 'categoryName': 'Food > Luxury & alcohol', 'categoryColor': 'pink' }
  ];

  constructor(
    private _costItemService: CostItemService,
    private router: Router,
    private aR: ActivatedRoute,
    private fb: FormBuilder) {

    this.buildForm();
  }

  ngOnInit() {

    // controls for edit
    const itemNameControl = this.costItemFrm.get('itemName') as FormControl;
    const itemCategoryControl = this.costItemFrm.get('itemCategory') as FormControl;
    const unitPriceControl = this.costItemFrm.get('unitPrice') as FormControl;
    const itemAmountControl = this.costItemFrm.get('itemAmount') as FormControl;
    const itemBoughtDateControl = this.costItemFrm.get('itemBoughtDate') as FormControl;
    const itemBoughtRegularnessControl = this.costItemFrm.get('itemBoughtRegularness') as FormControl;

    this.totalSpent = this.unitPrice * this.itemAmount;

    this._costItemService.getCostItems()
      .subscribe(res => this.costItems = res).unsubscribe();

    // edit if we have an url parameter id
    this.aR.params.subscribe((params) => {
      if (params['id']) {
        this._costItemService.getCostItem(params['id'])
          .subscribe(res => {
            this.costItem = res;
            const local = this;

            // workaround /hack to map selected category to category array item and make edit possible (preload previous value)
            const categoryBasedOnName = this.categories.filter(function (item) {
              return item['categoryName'] === local.costItem['itemCategory'].categoryName;
            })[0];

            if (this.costItem['itemBoughtDate'] != null) {
              this.formattedDate = this.costItem['itemBoughtDate'].replace('/-/g', '. ');
            } else {
              this.formattedDate = this.formattedDate.replace('/-/g', '. ');
            }

            itemNameControl.setValue(this.costItem['itemName']);
            itemCategoryControl.setValue(categoryBasedOnName);
            unitPriceControl.setValue(this.costItem['unitPrice']);
            itemAmountControl.setValue(this.costItem['itemAmount']);
            itemBoughtDateControl.setValue(this.formattedDate);
            itemBoughtRegularnessControl.setValue(this.costItem['itemBoughtRegularness']);
          });
      } else {
        // add
        this.buildForm();
      }
    }).unsubscribe();

  }


  public addcostItem(costItemId, costItem: CostItem) {
    // edit
    if (costItemId !== undefined) {
      this._costItemService.updateCostItem(costItem, costItemId._id)
        .subscribe(updatecostItem => {
          this.router.navigateByUrl('/history');
        }).unsubscribe();
    } else { // add
      this._costItemService.insertCostItem(costItem)
        .subscribe(newcostItem => {
          this.costItems.push(newcostItem);
          this.router.navigateByUrl('/history');
        }).unsubscribe();
    }
  }

  public onResetForm() {
    this.costItemFrm.reset();
  }

  private buildForm() {
    this.costItemFrm = this.fb.group({
      'itemBoughtDate': this.fb.control(this.formattedDate),
      'itemBoughtRegularness': this.fb.control(false),
      'itemName': this.fb.control(null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(70)])),
      'itemCategory': this.fb.control(this.categories[0]), // Other
      'unitPrice': this.fb.control(null, Validators.required),
      'itemAmount': this.fb.control(null, Validators.required),
      'tags': this.fb.array([
        this.fb.control(null)
      ])
    });
    this.tagsControl = this.costItemFrm.get('tags') as FormArray;
  }

  public onAddTag() {
    this.tagsControl.push(this.fb.control(null));
  }

  public onRemoveTag(index: number) {
    this.tagsControl.removeAt(index);
  }



}
