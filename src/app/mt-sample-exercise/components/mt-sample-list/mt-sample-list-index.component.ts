import { Component, EventEmitter, Input, OnChanges, Output, SimpleChange, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { FilterSettingsModel, GridComponent, PageSettingsModel, SelectionSettingsModel, RowSelectEventArgs, RowDeselectEventArgs } from '@syncfusion/ej2-angular-grids';
import { setSpinner } from '@syncfusion/ej2-angular-popups';
import { ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { Observable, Subscription } from 'rxjs';
import { Farm } from '../../interfaces/farm.interface';

@Component({
  selector: 'mt-sample-list',
  templateUrl: './mt-sample-list-index.component.html'
})
export class MtSampleListIndexComponent implements OnInit, OnDestroy {
  @ViewChild('grid') grid!: GridComponent;
  @Input() farms: Farm[] = [];
  @Input() close!: Observable<void>;
  @Output() onSelect: EventEmitter<number> = new EventEmitter();
  @Output() onClick: EventEmitter<void> = new EventEmitter();

  eventsSubscription!: Subscription;
  pageSettings: PageSettingsModel = { pageSize: 8 };
  filterSettings: FilterSettingsModel = { type: 'Menu' };
  selectionSettings: SelectionSettingsModel = {};
  ddldata: string[] = ['All', 'Farm No', 'Active Date'];
  constructor() { }

  clearSelection() {
    this.grid.clearSelection();
  }

  ngOnInit() {
    this.eventsSubscription = this.close.subscribe(() => this.clearSelection());
  }

  ngOnDestroy() {
    // console.log('Destroyed');
    this.eventsSubscription.unsubscribe();
  }

  gridCreated(): void {
    setTimeout(() => this.grid.showSpinner(), 0)
    setSpinner({ type: 'Material' });
  }

  onChange(event: ChangeEventArgs): void {
    const { value } = event;
    switch (value) {
      case 'All':
        this.grid.clearFiltering();
        break;
      case 'Farm No':
        this.grid.clearFiltering();
        this.grid.filterByColumn('farm_no', 'startsWith', '100');
        break;
      case 'Active Date':
        this.grid.clearFiltering();
        this.grid.filterByColumn('active_date', 'contains', 2020);
        break;
      default:
        break;
    }
  }

  rowSelected(data: Farm) {
    const { id } = data;
    this.onSelect.emit(id);
  }
  
  forceError() {
    this.onClick.emit();
  }
}
