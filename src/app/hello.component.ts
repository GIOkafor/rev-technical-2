import { Component, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { FavoritesService } from "./favorites.service";

@Component({
  selector: "hello",
  templateUrl: "./hello.component.html",
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;
  items: any;
  uid = "iyk300stacks";
  favorites: any;

  constructor(
    private http: HttpClient,
    private favoritesSvc: FavoritesService
  ) {}

  ngOnInit() {
    this.items = this.getJokes();
    this.favorites = this.getFavorites(this.uid);
  }

  getJokes() {
    const url = "https://api.icndb.com/jokes/random/10";
    return this.http.get(url).pipe(map((result: any) => result.value));
  }

  getFavorites(uid) {
    return this.favoritesSvc.getFavorites(uid);
  }

  addFavorite(uid, item) {
    return this.favoritesSvc.addFavorite(uid, item);
  }

  removeFavorite(uid, item) {
    this.favoritesSvc.removeFavorite(uid, item);
  }
}
