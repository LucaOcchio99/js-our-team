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
    }


]