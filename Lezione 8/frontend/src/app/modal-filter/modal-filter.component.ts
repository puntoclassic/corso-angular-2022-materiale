import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-modal-filter",
  templateUrl: "./modal-filter.component.html",
  styleUrls: ["./modal-filter.component.scss"],
})
export class ModalFilterComponent implements OnInit {
  @Input()
  filterName: string = "";

  @Input()
  items: any[] = [];

  @Input()
  itemsSelected: any[] = [];

  @Input()
  labelKey: string = "";

  @Input()
  valueKey: string = "";

  @Output()
  emitterFilterApply: EventEmitter<any[]> = new EventEmitter();

  @Output()
  emitterFilterRemove: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }
}
