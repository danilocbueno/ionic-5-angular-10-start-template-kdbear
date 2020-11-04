import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-crud",
  templateUrl: "./crud.component.html",
  styleUrls: ["./crud.component.css"]
})
export class CrudComponent implements OnInit {
  private cliente = {};

  constructor() {}

  ngOnInit() {}

  salvar() {
    console.log(this.cliente);
  }
}
