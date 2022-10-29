
// indexedDB: Reforzamiento

let request = window.indexedDB.open('mi-database', 1);

// Se actualiza cuando se crea o se sube de versión en la db
request.onupgradeneeded = event =>{

    console.log('Actualización de la DB');

    let db = event.target.result;

    db.createObjectStore('heroes', {
        keyPath: 'id'
    });
};


