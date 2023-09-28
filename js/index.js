document.querySelector(".btn").addEventListener("click", ()=>{
  location.reload();
})

const gagnant = document.querySelector("#gagnant");
const tour = document.querySelector("#tour");

let joueur = true
let vainqueur = ""


if (joueur==true){
  tour.textContent = "Au tour du joueur 1 (en rouge)";
} else if (joueur==false){
  tour.textContent = "Au tour du joueur 2 (en jaune)";
}


let numérocase1 = 6;
let numérocase2 = 6;
let numérocase3 = 6;
let numérocase4 = 6;
let numérocase5 = 6;
let numérocase6 = 6;
let numérocase7 = 6;


let grille = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ];



let fini = false;



document.querySelectorAll(".colone1").forEach(element=>{
  element.addEventListener("click", ()=>{
    if (fini==false){
      if (element.id == "colone1-1"){
        if (numérocase1>0){
          const jeton1 = document.createElement("div");
          
      
            
            jeton1.classList.add("jeton");
          
          
      
            let px1 = (numérocase1-1)*70 + "px"
      
            const style1 = document.createElement("style");
      
            style1.textContent = `
              .Top1${numérocase1} {
                top: ${px1};
                transition: .5s;
              }
            `;
            document.head.appendChild(style1);
      
            document.querySelector("#colone-1").appendChild(jeton1);
          
            setTimeout(() => {
              jeton1.classList.add("Top1"+(numérocase1+1));
            }, 1);
      
            numérocase1--;
  
            let position1 = 4 - numérocase1 + 1;
            
            if (joueur==true){
              jeton1.classList.add("rouge");
              jeton1.id = "rouge";
              joueur = false;

              
              grille.splice(position1, 1);
              grille.splice(position1, 0, "r");
  
        
            } else if (joueur==false){
              jeton1.classList.add("jaune");
              jeton1.id = "jaune";
              joueur = true;

  
              grille.splice(position1, 1);
              grille.splice(position1, 0, "j");
              
            }
        }
        
      } 
      
      else if (element.id == "colone1-2"){
        if (numérocase2>0){
          const jeton2 = document.createElement("div");
          
      
            
            jeton2.classList.add("jeton");
          
          
      
            let px2 = (numérocase2-1)*70 + "px"
      
            const style2 = document.createElement("style");
      
            style2.textContent = `
              .Top2${numérocase2} {
                top: ${px2};
                transition: .5s;
              }
            `;
            document.head.appendChild(style2);
      
            document.querySelector("#colone-2").appendChild(jeton2);
          
            setTimeout(() => {
              jeton2.classList.add("Top2"+(numérocase2+1));
            }, 1);
      
            numérocase2--;
            let position2 = 4 + 6 - numérocase2 + 1;
            
            if (joueur==true){
              jeton2.classList.add("rouge");
              jeton2.id = "rouge"
              joueur = false;

              
              grille.splice(position2, 1);
              grille.splice(position2, 0, "r");
  
        
            } else if (joueur==false){
              jeton2.classList.add("jaune");
              jeton2.id = "jaune"
              joueur = true;

  
              grille.splice(position2, 1);
              grille.splice(position2, 0, "j");
  
            }
        }
      } 
      
      else if (element.id == "colone1-3"){
        if (numérocase3>0){
          const jeton3 = document.createElement("div");
          
      
            
            jeton3.classList.add("jeton");
          
          
      
            let px3 = (numérocase3-1)*70 + "px"
      
            const style3 = document.createElement("style");
      
            style3.textContent = `
              .Top3${numérocase3} {
                top: ${px3};
                transition: .5s;
              }
            `;
            document.head.appendChild(style3);
      
            document.querySelector("#colone-3").appendChild(jeton3);
          
            setTimeout(() => {
              jeton3.classList.add("Top3"+(numérocase3+1));
            }, 1);
      
            numérocase3--;
  
            let position3 = 4 + 6*2 - numérocase3 + 1;
            
            if (joueur==true){
              jeton3.classList.add("rouge");
              jeton3.id = "rouge"
              joueur = false;

  
              grille.splice(position3, 1);
              grille.splice(position3, 0, "r");
  
        
            } else if (joueur==false){
              jeton3.classList.add("jaune");
              jeton3.id = "jaune"
              joueur = true;

  
              grille.splice(position3, 1);
              grille.splice(position3, 0, "j");
  
            }
        }
      } 
      
      else if (element.id == "colone1-4"){
        if (numérocase4>0){
          const jeton4 = document.createElement("div");
          
      
            
            jeton4.classList.add("jeton");
          
          
      
            let px4 = (numérocase4-1)*70 + "px"
      
            const style4 = document.createElement("style");
      
            style4.textContent = `
              .Top4${numérocase4} {
                top: ${px4};
                transition: .5s;
              }
            `;
            document.head.appendChild(style4);
      
            document.querySelector("#colone-4").appendChild(jeton4);
          
            setTimeout(() => {
              jeton4.classList.add("Top4"+(numérocase4+1));
            }, 1);
      
            numérocase4--;
  
            let position4 = 4 + 6*3 - numérocase4 + 1;
            
            if (joueur==true){
              jeton4.classList.add("rouge");
              jeton4.id = "rouge"
              joueur = false;

  
              grille.splice(position4, 1);
              grille.splice(position4, 0, "r");
  
        
            } else if (joueur==false){
              jeton4.classList.add("jaune");
              jeton4.id = "jaune"
              joueur = true;

  
              grille.splice(position4, 1);
              grille.splice(position4, 0, "j");
  
            }
        }
      } 
      
      else if (element.id == "colone1-5"){
        if (numérocase5>0){
          const jeton5 = document.createElement("div");
          
      
            
            jeton5.classList.add("jeton");
          
          
      
            let px5 = (numérocase5-1)*70 + "px"
      
            const style5 = document.createElement("style");
      
            style5.textContent = `
              .Top5${numérocase5} {
                top: ${px5};
                transition: .5s;
              }
            `;
            document.head.appendChild(style5);
      
            document.querySelector("#colone-5").appendChild(jeton5);
          
            setTimeout(() => {
              jeton5.classList.add("Top5"+(numérocase5+1));
            }, 1);
      
            numérocase5--;
  
            let position5 = 4 + 6*4 - numérocase5 + 1;
            
            if (joueur==true){
              jeton5.classList.add("rouge");
              jeton5.id = "rouge"
              joueur = false;

  
              grille.splice(position5, 1);
              grille.splice(position5, 0, "r");
  
        
            } else if (joueur==false){
              jeton5.classList.add("jaune");
              jeton5.id = "jaune"
              joueur = true;

  
              grille.splice(position5, 1);
              grille.splice(position5, 0, "j");
  
            }
        }
      } 
      
      else if (element.id == "colone1-6"){
        if (numérocase6>0){
          const jeton6 = document.createElement("div");
          
      
            
            jeton6.classList.add("jeton");
          
          
      
            let px6 = (numérocase6-1)*70 + "px"
      
            const style6 = document.createElement("style");
      
            style6.textContent = `
              .Top6${numérocase6} {
                top: ${px6};
                transition: .5s;
              }
            `;
            document.head.appendChild(style6);
      
            document.querySelector("#colone-6").appendChild(jeton6);
          
            setTimeout(() => {
              jeton6.classList.add("Top6"+(numérocase6+1));
            }, 1);
      
            numérocase6--;
  
            let position6 = 4 + 6*5 - numérocase6 + 1;
            
            if (joueur==true){
              jeton6.classList.add("rouge");
              jeton6.id = "rouge"
              joueur = false;

  
              grille.splice(position6, 1);
              grille.splice(position6, 0, "r");
        
            } else if (joueur==false){
              jeton6.classList.add("jaune");
              jeton6.id = "jaune"
              joueur = true;

  
              grille.splice(position6, 1);
              grille.splice(position6, 0, "j");
            }
        }
      } 
      
      else if (element.id == "colone1-7"){
        if (numérocase7>0){
          const jeton7 = document.createElement("div");
          
      
            
            jeton7.classList.add("jeton");
          
          
      
            let px7 = (numérocase7-1)*70 + "px"
      
            const style7 = document.createElement("style");
      
            style7.textContent = `
              .Top7${numérocase7} {
                top: ${px7};
                transition: .5s;
              }
            `;
            document.head.appendChild(style7);
      
            document.querySelector("#colone-7").appendChild(jeton7);
          
            setTimeout(() => {
              jeton7.classList.add("Top7"+(numérocase7+1));
            }, 1);
      
            numérocase7--;
  
            let position7 = 4 + 6*6 - numérocase7 + 1;
            
            if (joueur==true){
              jeton7.classList.add("rouge");
              jeton7.id = "rouge"
              joueur = false;

  
              grille.splice(position7, 1);
              grille.splice(position7, 0, "r");
        
            } else if (joueur==false){
              jeton7.classList.add("jaune");
              jeton7.id = "jaune"
              joueur = true;

  
              grille.splice(position7, 1);
              grille.splice(position7, 0, "j");
            }
        }
      } 

      if (joueur==true){
        tour.textContent = "Au tour du joueur 1 (en rouge)";
      } else if (joueur==false){
        tour.textContent = "Au tour du joueur 2 (en jaune)";
      }

  
      
  
    
      for (let i = 0; i<grille.length; i++){

        // Vérifie la couleur rouge
  
          // Vérifie toutes les colonnes en ligne rouge
          if (grille[i]=="r" && grille[i+6]=="r" && grille[i+12]=="r" && grille[i+18]=="r" ){
            fini = true;
            vainqueur = "r"

          }
    
          // Vérifie toutes les colonnes en diagonales rouge
          if (grille[i]=="r" && grille[i+6+1]=="r" && grille[i+12+2]=="r" && grille[i+18+3]=="r" ){
            fini = true;
            vainqueur = "r"
          }
          if (grille[i]=="r" && grille[i+6-1]=="r" && grille[i+12-2]=="r" && grille[i+18-3]=="r" ){
            fini = true;
            vainqueur = "r"
          }
          // Vérifie en colonne la colonne 1 rouge
          if (i+3 < 6){
            if (grille[i]=="r" && grille[i+1]=="r" && grille[i+2]=="r" && grille[i+3]=="r"){
    
              fini = true;
              vainqueur = "r"
      
            } 
            
          }
    
          // Vérifie en colonne la colonne 2 rouge
          if (i > 5 && i+3 < 12){
            if (grille[i]=="r" && grille[i+1]=="r" && grille[i+2]=="r" && grille[i+3]=="r"){
              fini = true;
              vainqueur = "r"
            }
          }
          // Vérifie en colonne la colonne 3 rouge
          if (i > 11 && i+3 < 18){
            if (grille[i]=="r" && grille[i+1]=="r" && grille[i+2]=="r" && grille[i+3]=="r"){
              fini = true;
              vainqueur = "r"
            }
          }
          // Vérifie en colonne la colonne 4 rouge
          if (i > 17 && i+3 < 24){
            if (grille[i]=="r" && grille[i+1]=="r" && grille[i+2]=="r" && grille[i+3]=="r"){
              fini = true;
              vainqueur = "r"
            }
          }
          // Vérifie en colonne la colonne 5 rouge
          if (i > 23 && i+3 < 30){
            if (grille[i]=="r" && grille[i+1]=="r" && grille[i+2]=="r" && grille[i+3]=="r"){
              fini = true;
              vainqueur = "r"
            }
          }
          // Vérifie en colonne la colonne 6 rouge
          if (i > 29 && i+3 < 36){
            if (grille[i]=="r" && grille[i+1]=="r" && grille[i+2]=="r" && grille[i+3]=="r"){
              fini = true;
              vainqueur = "r"
            }
          }
          // Vérifie en colonne la colonne 7 rouge
          if (i > 35){
            if (grille[i]=="r" && grille[i+1]=="r" && grille[i+2]=="r" && grille[i+3]=="r"){
              fini = true;
              vainqueur = "r"
            }
          }






        // Vérifie la couleur jaune
  
          // Vérifie toutes les colonnes en ligne jaune
          if (grille[i]=="j" && grille[i+6]=="j" && grille[i+12]=="j" && grille[i+18]=="j" ){
            fini = true;
            vainqueur = "j"
          }
    
          // Vérifie toutes les colonnes en diagonales jaune
          if (grille[i]=="j" && grille[i+6+1]=="j" && grille[i+12+2]=="j" && grille[i+18+3]=="j" ){
            fini = true;
            vainqueur = "j"
          }
          if (grille[i]=="j" && grille[i+6-1]=="j" && grille[i+12-2]=="j" && grille[i+18-3]=="j" ){
            fini = true;
            vainqueur = "j"
          }
          // Vérifie en colonne la colonne 1 jaune
          if (i+3 < 6){
            if (grille[i]=="j" && grille[i+1]=="j" && grille[i+2]=="j" && grille[i+3]=="j"){
    
              fini = true;
              vainqueur = "j"
      
            } 
            
          }
    
          // Vérifie en colonne la colonne 2 jaune
          if (i > 5 && i+3 < 12){
            if (grille[i]=="j" && grille[i+1]=="j" && grille[i+2]=="j" && grille[i+3]=="j"){
              fini = true;
              vainqueur = "j"
            }
          }
          // Vérifie en colonne la colonne 3 jaune
          if (i > 11 && i+3 < 18){
            if (grille[i]=="j" && grille[i+1]=="j" && grille[i+2]=="j" && grille[i+3]=="j"){
              fini = true;
              vainqueur = "j"
            }
          }
          // Vérifie en colonne la colonne 4 jaune
          if (i > 17 && i+3 < 24){
            if (grille[i]=="j" && grille[i+1]=="j" && grille[i+2]=="j" && grille[i+3]=="j"){
              fini = true;
              vainqueur = "j"
            }
          }
          // Vérifie en colonne la colonne 5 jaune
          if (i > 23 && i+3 < 30){
            if (grille[i]=="j" && grille[i+1]=="j" && grille[i+2]=="j" && grille[i+3]=="j"){
              fini = true;
              vainqueur = "j"
            }
          }
          // Vérifie en colonne la colonne 6 jaune
          if (i > 29 && i+3 < 36){
            if (grille[i]=="j" && grille[i+1]=="j" && grille[i+2]=="j" && grille[i+3]=="j"){
              fini = true;
              vainqueur = "j"
            }
          }
          // Vérifie en colonne la colonne 7 jaune
          if (i > 35){
            if (grille[i]=="j" && grille[i+1]=="j" && grille[i+2]=="j" && grille[i+3]=="j"){
              fini = true;
              vainqueur = "j"
            }
          }
        
  
  
      }


      if (fini==true){
        if (vainqueur=="r"){
          tour.textContent="";
          gagnant.textContent = "Le joueur 1 (en rouge) a gagné !";
        } else if (vainqueur=="j"){
          tour.textContent="";
          gagnant.textContent = "Le joueur 2 (en jaune) a gagné !";
        } 
        
      }
  
  
  
    }
    }

    )
  

})


























