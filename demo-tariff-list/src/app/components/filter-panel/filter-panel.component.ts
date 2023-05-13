import { Component, EventEmitter, Output } from '@angular/core';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss'],
})
export class FilterPanelComponent {
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();

  thumbLabel = true;
  showTicks = true;

  defaultFilterConfig = {
    price: {
      min: 0,
      max: 1000,
    },
    download: {
      min: 0,
      max: 1000,
    },
    upload: {
      min: 0,
      max: 1000,
    },
  };
  filterPanelFields = this.utilityService.deepClone(this.defaultFilterConfig);

  constructor(private utilityService: UtilityService) {}

  filterTariffList(): void {
    this.notifyParent.emit(this.filterPanelFields);
  }

  onFilterChange(
    event: any,
    type: 'upload' | 'download' | 'price',
    range: 'max' | 'min'
  ): void {
    this.filterPanelFields[type][range] = event;
    this.utilityService.debounce(this.filterTariffList, 1000, this)();
  }

  resetFilter(): void {
    this.filterPanelFields = this.utilityService.deepClone(
      this.defaultFilterConfig
    );
    this.filterTariffList();
  }
}
