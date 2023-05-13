import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ITariff } from 'src/app/models/tariff';
import { TariffService } from 'src/app/services/tariff/tariff.service';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-tariff',
  templateUrl: './tariff.component.html',
  styleUrls: ['./tariff.component.scss'],
})
export class TariffComponent {
  tariffs$: Observable<ITariff[]> | undefined;
  tariffData: any;
  tariffCopyData: any;
  sortSelection: any;
  defaultSortSelection: any;
  sortOptions = [
    { name: 'Id : ascending' },
    { name: 'Id : descending' },
    { name: 'Name : ascending' },
    { name: 'Name : descending' },
    { name: 'Price : ascending' },
    { name: 'Price : descending' },
    { name: 'Download : ascending' },
    { name: 'Download : descending' },
    { name: 'Upload : ascending' },
    { name: 'Upload : descending' },
  ];

  constructor(
    private tariffService: TariffService,
    private utilityService: UtilityService
  ) {}

  ngOnInit() {
    this.sortSelection = this.sortOptions[0];
    this.tariffs$ = this.tariffService.getTariffData();
    this.tariffs$.subscribe((data: ITariff[]) => {
      this.tariffData = data;
      this.tariffCopyData = data;
      console.log('tariffData-', this.tariffData);
    });
  }

  public trackByFn(index: number, item: any) {
    return item.name;
  }

  onSortingChanged(event = this.sortOptions[0]): void {
    this.sortSelection = event;
    const fieldOrder = event.name.split(':');
    this.tariffData = this.utilityService.sortData(
      this.tariffData,
      fieldOrder[0].toLowerCase().trim(),
      fieldOrder[1].toLowerCase().trim()
    );
  }

  getFilterConfiguration(event: Event): void {
    this.tariffData = this.filterChange(this.tariffCopyData, event);
    this.onSortingChanged(this.sortSelection);
  }

  filterChange(data: ITariff[], config: any): ITariff[] {
    const result = data
      .filter((d: any) => this.utilityService.filterData(d.price, config.price))
      .filter((d: any) =>
        this.utilityService.filterData(d.download, config.download)
      )
      .filter((d: any) =>
        this.utilityService.filterData(d.upload, config.upload)
      );
    return result;
  }
}
