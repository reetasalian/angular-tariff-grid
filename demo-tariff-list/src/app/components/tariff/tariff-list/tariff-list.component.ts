import { Component, Input } from '@angular/core';
import { ITariff } from 'src/app/models/tariff';

@Component({
  selector: 'app-tariff-list',
  templateUrl: './tariff-list.component.html',
  styleUrls: ['./tariff-list.component.sass']
})
export class TariffListComponent {
  @Input() public data: ITariff | undefined;
  @Input() public tableRef: any;
}
