import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ITariff } from 'src/app/models/tariff';

@Component({
  selector: 'app-tariff-list-item',
  templateUrl: './tariff-list-item.component.html',
  styleUrls: ['./tariff-list-item.component.scss'],
})
export class TariffListItemComponent {
  @Input() public tariffItem: ITariff | undefined;

  constructor(private router: Router) {}

  getTariffDetails(data: ITariff): void {
    this.router.navigate(['/tariff-details'], {
      queryParams: { profile: data.name },
    });
  }
}
