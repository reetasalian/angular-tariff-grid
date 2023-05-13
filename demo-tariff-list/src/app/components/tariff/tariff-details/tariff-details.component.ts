import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ITariff } from 'src/app/models/tariff';
import { TariffService } from 'src/app/services/tariff/tariff.service';

@Component({
  selector: 'app-tariff-details',
  templateUrl: './tariff-details.component.html',
  styleUrls: ['./tariff-details.component.scss'],
})
export class TariffDetailsComponent {
  profile!: string;
  tariffs$: Observable<ITariff[]> | undefined;
  tariffDetails!: ITariff;
  constructor(
    private tariffService: TariffService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.profile = params['profile'];
      this.getTariffByName(this.profile);
    });
  }

  getTariffByName(name: string): void {
    this.tariffs$ = this.tariffService.getTariffData();
    this.tariffs$.subscribe((tariffs) => {
      this.tariffDetails = tariffs.filter((tariff: ITariff) => {
        return tariff.name === name;
      })[0];
    });
  }

  getTariffs(): void {
    this.router.navigate(['/tariff-list']);
  }
}
