/*Ricreiamo le card del nostro team 
aggiungendo al layout di base fornito 
il nostro JavaScript in
 cui:
- Creiamo il nostro array di oggetti che
 rappresentano ciascun membro del team. 
 Ogni membro dovrà avere le informazioni 
 necessarie per stampare la relativa card:
  Nome, Ruolo e Foto.
- Prendendo come riferimento il layout di
 esempio presente nell’html, stampiamo
  tutte le card del nostro team.
- Utilizziamo poi gli input presenti nella
 pagina per permettere all’utente di
  aggiungere nuovi membri del team.
/* Creo array di oggetti con elementi nome,
ruolo e foto */
/*creo la struttura dati per le card */

const carta = [
  {
      foto : "./img/wayne-barnett-founder-ceo.jpg",
      nome : 'Wayne Barnett',
      ruolo : 'Founder & CEO',
  },
  {
      foto : "./img/angela-caroll-chief-editor.jpg",
      nome : 'Angela Caroll',
      ruolo : 'Chief Editor'
  },
  {
      foto : "./img/walter-gordon-office-manager.jpg",
      nome : 'Walter Gordon',
      ruolo : 'Office Manager'
  },
  {
      foto : "./img/angela-lopez-social-media-manager.jpg",
      nome : 'Angela Lopez',
      ruolo : 'Social Media Manager'
  },
  {
      foto : "./img/scott-estrada-developer.jpg",
      nome : 'Scott Estrada',
      ruolo : 'Developer',
  },
  {
      foto : "./img/barbara-ramos-graphic-designer.jpg",
      nome : 'Barbara Ramos',
      ruolo : 'Graphic Designer'
  },
];

//console.log(carta) <-- mi stampa l'array (che contiene tutti gli oggetti)

/* - Prendendo come riferimento il layout di
esempio presente nell’html, stampiamo
tutte le card del nostro team. */

const contenitore_padre = document.querySelector('.team-container');

generazione_carte(carta ,contenitore_padre);

/*itero l'array della carta e genero il markup con i contenuti degli oggetti */
//  for(let i = 0; i < carta.length; i++ ) {
//     const carta_item = carta[i];
//     console.log(carta_item); //restituisce gli elementi contenuti nell' array [i] quindi di fatto restituisce l'intero oggetto

//     /* creo e e aggiungo il markup delle card*/
//contenitore_padre.innerHTML += `
//<div class="team-card">
//            <div class="card-image">
//              <img
//                src=${carta_item.foto}
//                alt=${carta_item.nome}
//              />
//           </div>
//            <div class="card-text">
//              <h3>${carta_item.nome}</h3>
//              <p>${carta_item.ruolo}</p>
//            </div> 
//          </div>
//        </div>
//      </div>
//`
//    } 

/**
* Generazione carte
*/
function generazione_carte(carta,contenitore_padre) {
  contenitore_padre.innerHTML = ''; 
   
  for(let i = 0; i < carta.length; i++ ) {
      const carta_item = carta[i];
     // console.log(carta_item); restituisce gli elementi contenuti nell' array [i] quindi di fatto restituisce l'intero oggetto
   
      /* creo e e aggiungo il markup delle card*/
 contenitore_padre.innerHTML += `
 <div class="team-card">
             <div class="card-image">
               <img
                 src=${carta_item.foto}
                 alt=${carta_item.nome}
               />
             </div>
             <div class="card-text">
               <h3>${carta_item.nome}</h3>
               <p>${carta_item.ruolo}</p>
             </div>
           </div>
         </div>
       </div>
 `
     }
}

/*- Utilizziamo poi gli input presenti nella
pagina per permettere all’utente di
aggiungere nuovi membri del team. */

/* Dovrei creare, sostanzialmente una funzione uguale a quella gia
fatta, pero i valori devono essere letti dal input, quindi presumo
serva un value */

//referenze
const btn_add = document.getElementById('addMemberButton');
const btn_nam = document.getElementById('name');
const btn_role = document.getElementById('role');
const btn_image = document.getElementById('image');

//associo l'evento click
/*btn_add.addEventListener('click', function(){
  //leeggo, tramite il value, i valori d'input
  const nome = btn_nam.value;
  const ruolo = btn_role.value;
  const immagine = btn_image.value;

 contenitore_padre.innerHTML += `
 <div class="team-card">
             <div class="card-image">
               <img
                 src=${immagine}
                 alt=${nome}
               />
             </div>
             <div class="card-text">
               <h3>${nome}</h3>
               <p>${ruolo}</p>
             </div>
           </div>
         </div>
       </div>
 `
     }

);*/

btn_add.addEventListener('click', () => {
  //genero nuovo oggetto member
  const newMember = genNewTeamMember(btn_image, btn_role, btn_nam);

  //push nel team
  carta.push(newMember);

  //re-render del nuovo team
  generazione_carte(carta,contenitore_padre);
 
});






function genNewTeamMember(image, role, nam) {

const newTeamMember = {
  foto : image.value,
  nome : nam.value,
  ruolo : role.value,
};

//reset valori input
image.value = '';
nam.value = '';
role.value = '';

return newTeamMember;
}
