import { TestBed } from '@angular/core/testing';

import { UtilityService } from './utility.service';

describe('UtilityService', () => {
  let service: UtilityService;
  const mockData = [
    { name: 'a', id: 1, price: 179.99 },
    { name: 'b', id: 2, price: 59.86 },
    { name: 'c', id: 3, price: 68.42 },
    { name: 'd', id: 4, price: 100.99 }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getTypeValue should return lowercase value in case of string', () => {
    expect(service.getTypeValue('Testing')).toBe('testing');
  });

  it('#getTypeValue should return unmodified value in case it is not a string', () => {
    expect(service.getTypeValue(1234)).toBe(1234);
  });

  const ascSortedData = [
    { name: 'b', id: 2, price: 59.86 },
    { name: 'c', id: 3, price: 68.42 },
    { name: 'd', id: 4, price: 100.99 },
    { name: 'a', id: 1, price: 179.99 }
  ];

  it('#sortData should return data sorted in ascending order as per price', () => {
    expect(service.sortData(mockData, 'price' )).toEqual(ascSortedData);
  });

  const descSortedData = [
    { name: 'a', id: 1, price: 179.99 },
    { name: 'd', id: 4, price: 100.99 },
    { name: 'c', id: 3, price: 68.42 },
    { name: 'b', id: 2, price: 59.86 }
  ];

  it('#sortData should return data sorted in descending order as per price', () => {
    expect(service.sortData(mockData, 'price', 'descending' )).toEqual(descSortedData);
  });

  const filterConfig = { max: 110, min: 60}
  it('#filterData data should be in given range', () => {
    expect(service.filterData(80, filterConfig )).toBeTruthy();
  });

  it('#filterData data should not be in given range', () => {
    expect(service.filterData(40, filterConfig )).toBeFalsy();
  });

  const originalObject = {
    "name": "Basic",
    "id" : 1,
    "benefits": [
      "Unlimited data",
      "24/7 customer support"
    ],
    "price": 20.99,
    "download" : 10,
    "upload" : 2
  };
  
  it('#deepClone should create a unique copy', () => {
    const clonedObject = service.deepClone(originalObject);
    clonedObject.benefits.push('Discounted Price');
    expect(clonedObject).not.toEqual(originalObject);
  });
});
