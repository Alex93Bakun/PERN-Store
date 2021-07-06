import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Холодильники" },
      { id: 2, name: "Смартфоны" },
      { id: 3, name: "Ноутбуки" },
      { id: 4, name: "Телевизоры" },
    ];
    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Apple" },
      { id: 3, name: "Lenovo" },
      { id: 4, name: "Asus" },
    ];
    this._devices = [
      {
        id: 1,
        name: "Iphone 12 PRO Max",
        price: 25000,
        rating: 5,
        img: "http://localhost:5000/ef7b561f-9c92-4cf4-aeba-aa37b5d1a0bb.jpg",
      },
      {
        id: 2,
        name: "a51",
        price: 25000,
        rating: 5,
        img: "http://localhost:5000/cbb86e59-3b5f-4982-a5d5-0febfef23f6e.jpg",
      },
      {
        id: 3,
        name: "Iphone 12 PRO Max",
        price: 25000,
        rating: 5,
        img: "http://localhost:5000/ef7b561f-9c92-4cf4-aeba-aa37b5d1a0bb.jpg",
      },
      {
        id: 4,
        name: "Iphone 12 PRO Max",
        price: 25000,
        rating: 5,
        img: "http://localhost:5000/ef7b561f-9c92-4cf4-aeba-aa37b5d1a0bb.jpg",
      },
      {
        id: 5,
        name: "Iphone 12 PRO Max",
        price: 25000,
        rating: 5,
        img: "http://localhost:5000/ef7b561f-9c92-4cf4-aeba-aa37b5d1a0bb.jpg",
      },
      {
        id: 6,
        name: "Iphone 12 PRO Max",
        price: 25000,
        rating: 5,
        img: "http://localhost:5000/ef7b561f-9c92-4cf4-aeba-aa37b5d1a0bb.jpg",
      },
    ];
    this._selectedType = {};
    this._selectedBrand = {};
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }

  get selectedType() {
    return this._selectedType;
  }

  get selectedBrand() {
    return this._selectedBrand;
  }
}
