import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class FavoritesService {
  constructor(private firestore: AngularFirestore) {}

  getFavorites(uid) {
    return this.firestore
      .collection("TEST_favorites/" + uid + "/jokes")
      .valueChanges({ idField: "docId" });
  }

  addFavorite(uid, item) {
    return this.firestore
      .collection("TEST_favorites/" + uid + "/jokes")
      .add(item);
  }

  removeFavorite(uid, item) {
    this.firestore
      .collection("TEST_favorites/" + uid + "/jokes")
      .doc(item.docId)
      .delete()
      .then(_ => alert("Document successfully deleted"))
      .catch(err => console.log("Failed to delete with error ", err));
  }
}
