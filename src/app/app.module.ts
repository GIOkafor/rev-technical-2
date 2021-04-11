import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

const firebaseConfig = {
  apiKey: "",
  authDomain: "posingapp.firebaseapp.com",
  databaseURL: "https://posingapp.firebaseio.com",
  projectId: "posingapp",
  storageBucket: "posingapp.appspot.com",
  messagingSenderId: "857962289964",
  appId: "1:857962289964:web:09c881cb1292de48"
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
