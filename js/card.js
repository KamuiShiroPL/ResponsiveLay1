// KLASA KANBAN CARD
function Card(id, name) { /* Modified */
	var self = this;

  this.id = id;  /* Modified */
  this.name = name || 'No name given';  /* Modified */
	this.element = createCard();

	function createCard() {
		var card = $('<li class="card"></li>');
		var cardDeleteBtn = $('<button class="btn-delete">x</button>');
		var cardDescription = $('<p class="card-description"></p>');

		cardDeleteBtn.click(function(){
			self.removeCard();
		});

		card.append(cardDeleteBtn);
		cardDescription.text(self.name);  /* Modified */
		card.append(cardDescription)
		return card;
	}
}

/* Modified */
Card.prototype = {
  removeCard: function() {
      var self = this;
      $.ajax({
        url: baseUrl + '/card/' + self.id,
        method: 'DELETE',
        success: function(){
          self.element.remove();
        }
      });
  }
