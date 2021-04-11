import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map, filter } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
  items: any;
  uid = 'iyk300stacks';
  favorites: any;

  constructor(
    private http: HttpClient,
    private firestore: AngularFirestore
  ){}

  ngOnInit(){
    this.items = this.getList();
    this.favorites = this.getFavorites(this.uid)
  }

  //get a list
  //denote favorites from list
  //add to favorite and update ui

  getList(){
    const url ='https://api.icndb.com/jokes/random/10';
    return this.http.get(url).pipe(map((result: any) => result.value));
  }

  getFavorites(uid){
    return this.firestore.collection('TEST_favorites/' + uid + '/jokes').valueChanges();/*
      .pipe(
        map((doc: any) => {
          doc.map(fav => {
            const key = fav.payload.doc.id;
            const data = fav.payload.doc.data();
            console.log({key, ...data});
            return {key, ...data};
          })
        })
      );*/
  }

  isFavorite(item, list){
    return false;
    /*
    return list.pipe(
      tap(lst => console.log('comparing list: ', lst)),
      filter((joke: any) => joke.id === item.id),
      tap(jk => console.log('filtered list: ', jk))
    )*/
  }

  addFavorite(uid, item){
    return this.firestore.collection('TEST_favorites/' + uid + '/jokes').add(item);
  }

  removeFavorite(uid, item){
    console.log('removing favorite for joke with id: ', item);
    return;
  }
}
