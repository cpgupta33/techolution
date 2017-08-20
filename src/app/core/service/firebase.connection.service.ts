import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable(  )
export class FirebaseConnectionService {

    constructor() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBKJ3LkRfXp9oZeyuw3ZVxLjyVmmbdxlh0',
            authDomain: 'chandraguptaprofile.firebaseapp.com',
            databaseURL: 'https://chandraguptaprofile.firebaseio.com',
            projectId: 'chandraguptaprofile',
            storageBucket: 'chandraguptaprofile.appspot.com',
            messagingSenderId: '280183835197'
        });
     }

    downloadUrl(path): Promise<string> {
        const storageRef = firebase.storage().ref();

        return new Promise<string>((resolve, reject) => {
            storageRef.child(path).getDownloadURL().then(function(url) {
                // console.log('urlll', url);
                resolve(url);
            })
            .catch ((error) => {
                console.log(error);
            });
        });
        // let fileName = window;
    }
}
