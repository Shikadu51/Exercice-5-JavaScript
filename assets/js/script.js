 //Déclarer mes variables.
let emailpropose;
let arobase;
let emailnonvalide;
let message = document.getElementById('message');

function verificationemail(){
    // récupérer de l'email proposé avec la fonction .value.

    emailpropose = document.getElementById('email').value;

    // Notre condition pour savoir si l'email est valide.

    if(emailpropose.includes('@') && emailpropose.includes('.')){ 
         
            message.innerHTML = '<span class="text-success">Votre adresse email est valide</span>';
    }else{
           message.innerHTML = '<span class="text-danger">Votre adresse email est invalide</span>';
       }    
            
}
    // Ajout d'un écouteur d'événement pour vérifier si l'email est valide ou non();
    
    document.getElementById('email').addEventListener('keydown', verificationemail, false);