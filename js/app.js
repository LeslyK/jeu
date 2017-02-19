$(document).ready(function(){
     var min = 0;
     var max =9;
     var compt = 0;   
     var saisie_U;     
     var msg = 'Le nombre doit être, entre ' + min + ' et ' + max + '.';
     
     alert('Que la Partis Commence');   
     
     function aleatoire(min, max) { 
     return(Math.floor((max-min)*Math.random())+min); 
     }


     aleatoire();


     function P_Partie(min, max)
     {         
          var nbr = aleatoire(0, 9);
          console.log(nbr);        
          
          
          do{
               saisie_U = prompt(msg);
               
               if (saisie_U == null)
                    return 0;
               compt++;
               if (saisie_U > nbr)
                    msg = "inferieur";
               
               else
                    msg = 'superieur';
          }
          while(saisie_U != nbr);

          return compt
     };

     $('#niveau1').click(P_Partie(min, max));

      $('#niveau2').click(function P_PartieB(min, max)
     {
           var compt = 0;
           var B_score = 0;
           var score;
           var conti;
           do
           {
                score = P_Partie(0, 9);
                console.log(score);
                if (score)
                {
                     compt++;
                     if(score <B_score || B_score == 0)
                          B_score = score;
                     conti = confirm("you are win" + score + "coups Veux tu rejouer");
                }
                else
                     conti = false;
           }
           while(conti);
           alert("tu as" + compt + "partie. ton meilleur score est de " + B_score +"coups")
           return B_score;
      })
     $("niveau3").click(function(){
          var quest = prompt("as tu dépassé la seconde partie?")
          console.log(quet);
     })
})
