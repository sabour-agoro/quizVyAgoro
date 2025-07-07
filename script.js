 document.getElementById('quizForm').addEventListener('submit', function(e) {
      e.preventDefault();
      
      const identifiant = document.getElementById('identifiant').value.trim();
      if (!identifiant) {
        alert("Veuillez entrer votre identifiant.");
        return;
      }

      // Réponses correctes
      const bonnesReponses = {
        q1: "Lomé",
        q2: "oui",
        q3: "Sabour"
      };

      let score = 0;
      let total = Object.keys(bonnesReponses).length;

      for (let key in bonnesReponses) {
        const selected = document.querySelector(`input[name="${key}"]:checked`);
        if (selected && selected.value === bonnesReponses[key]) {
          score++;
        }
      }

      document.getElementById('resultat').innerHTML = `
        Identifiant : <strong>${identifiant}</strong><br>
        Résultat : <strong>${score} / ${total}</strong> bonnes réponses ____________ Merci d'avoir participer au quiz .
      `;
    });