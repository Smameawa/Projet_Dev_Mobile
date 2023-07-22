document.addEventListener('deviceready',rechercherContacts,afficherContacts);

function rechercherContacts() {
    const options = new ContactFindOptions();
    //options.filter='resp'; // à enlever de vos codes
    options.multiple=true;
    options.hasPhoneNumber='true';
    let fields= ['name'];

    navigator.contacts.find(fields,afficherContacts,gererErreur,options);
}

function afficherContacts(contacts) {
    let code = '';
    for (let i = 0; i < contacts.length; i++) {
     code += `
     <li>
         <a href="#">
         <img src="${contacts[i].photos ? contacts[i].photos[0].value : "img/avatar1.jpg"}">
         <h1>${contacts[i].displayName}</h1> 
         <p>${contacts[i].phoneNumbers[0].value}</p> 
         </a>
     </li>  
     `;
    }
    
    const contactList = document.getElementById('contactList');
    contactList.innerHTML = code;
    $(contactList).listview('refresh');
 }

 function createContact() {
     var myContact = navigator.contacts.create({"displayName": "Test User"});
     myContact.save(contactSuccess, contactError);

     function contactSuccess() {
         alert("Contact enregistré !");
     }

     function contactError(message) {
         alert('Erreur : ' + message);
     }
 }

 /* function ajouterContact() {
    const nom = document.getElementById('nom');
    const numero = document.getElementById('numero');
    // Créer un nouvel objet de contact
    var contact = navigator.contacts.create();
  
    // Définir le nom du contact
    var contactName = new ContactName();
    contactName.displayName = nom;
    contact.name = contactName;
  
    // Ajouter le numéro de téléphone au contact
    var contactPhone = new ContactField('mobile', numero, true);
    contact.phoneNumbers = [contactPhone];
  
    // Enregistrer le contact
    contact.save(function() {
      console.log("Le contact a été enregistré avec succès !");
    }, function(error) {
      console.log("Erreur lors de l'enregistrement du contact : " + error.code);
    });
  } */
  
 /* function ajouterContacts() {
    const nom = document.getElementById('nom');
    const numero = document.getElementById('numero');
    const contactList = document.getElementById('contactList');

    const newnom = `
    <li>
        <a href="#">
        <img src="img/avatar1.jpg">
        <h1>${nom.value}</h1> 
        <p>${numero.value}</p> 
        </a>
    </li>  
    `;
    contactList.innerHTML += newnom;
    nom.value = '';
    nom.focus();
    $(contactList).listview('refresh');
} */

 
function gererErreur(error) {
    console.log("Erreur :");
    console.log(error);
}