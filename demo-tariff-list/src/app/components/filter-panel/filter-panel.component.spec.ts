import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterPanelComponent } from './filter-panel.component';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatSliderThumbHarness } from '@angular/material/slider/testing';

let loader: HarnessLoader;

describe('FilterPanelComponent', () => {
  let component: FilterPanelComponent;
  let fixture: ComponentFixture<FilterPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatInputModule, MatSliderModule, FormsModule],
      declarations: [FilterPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FilterPanelComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should Reset the slider value to default', async () => {
    let sliderThumb = await loader.getHarness(MatSliderThumbHarness);
    await sliderThumb.setValue(500).then((a) => console.log(a));
    expect((await sliderThumb.getValue()).toString()).toEqual('500');
    component.resetFilter();
    expect((await sliderThumb.getValue()).toString()).toEqual('0');
  });
});
