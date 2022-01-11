function append(event) {
    var cardBody = $("#cardBody");
    var numberCard = $("#btnAddChapter").attr('data-number-card-chapter');
    var classNameCard = 'card_' + numberCard;
    cardBody.append(`
    <div class="card mb-3 ${classNameCard}">
        <div class="card-header">
        <h3 class="card-title w-75">
            <div class="w-75">
            <input type="text" class="form-control w-100" placeholder="Tên chương">
            </div>
        </h3>
        <div class="card-tools">
            <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
            </button>
            <button type="button" class="btn btn-tool btnRemoveCard" data-card-number="${classNameCard}" data-card-widget="remove"><i class="fas fa-times"></i>
            </button>
        </div>
        </div>
        <div class="card-body">
            The body of the card
        </div>
    </div>`
    );
    numberCard = parseInt(numberCard) + 1;
    $("#btnAddChapter").attr('data-number-card-chapter', numberCard);
}

$(document).ready(() => {
    $("#cardBody").on('click', '.btnRemoveCard', function() {
        var nameCard = $(this).attr('data-card-number');
        var cardRemove = '.' + nameCard;
        $(`${cardRemove}`).remove();
    });
});