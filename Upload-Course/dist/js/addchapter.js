function append(event) {
    var cardBody = $("#cardBody");
    var numberCard = $("#btnAddChapter").attr('data-number-card-chapter');
    var classNameCard = 'card_' + numberCard;
    var classNameCourse = 'list_course_' + numberCard;
    cardBody.append(`
    <div class="card mb-3 ${classNameCard}">
        <div class="card-header">
        <h3 class="card-title w-75">
            <div class="w-75">
            <input type="text" class="form-control w-100" placeholder="Tên chương">
            </div>
        </h3>
        <div class="card-tools">
            <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                class="fas fa-minus"></i>
            </button>
            <button type="button" class="btn btn-tool btnRemoveCard" data-card-number="${classNameCard}" data-card-widget="remove"><i
                class="fas fa-times"></i>
            </button>
        </div>
        </div>
        <div class="card-body ${classNameCourse}">
            <div class="card mb-2">
                <div class="card-header">
                    <div class="row">
                        <div class="card-title col-8 d-flex align-items-center">
                        <div class="w-75 d-flex">
                            <input type="text" class="form-control w-100" placeholder="Tên Bài Học">
                        </div>
                        </div>
                        <div class="form-check col-2 d-flex align-items-center">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                            <label class="form-check-label" for="defaultCheck1">
                                Xem thử
                            </label>
                        </div>
                        <div class="card-tools col-2 pr-0 d-flex justify-content-end align-items-start">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                class="fas fa-minus"></i>
                            </button>
                            <button type="button" class="btn btn-tool" data-card-widget="remove"><i
                                class="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                The body of the card
                </div>
            </div>
        </div>
        <div class="mb-3 ml-3">
            <button type="button" class="btn addChapter btnAddCourse" data-number=1 data-card-number="${classNameCourse}"
            data-number-card-chapter=1><i class="fa fa-plus-circle mr-2"></i>Thêm bài học</button>
        </div>
    </div>`
    );
    numberCard = parseInt(numberCard) + 1;
    $("#btnAddChapter").attr('data-number-card-chapter', numberCard);
}

function appendCourse(nameCard, numberCard) {
    var currentCourse = nameCard;
    var numberCurrentCourse = numberCard;
    var classNameCourse = 'course_' + numberCurrentCourse;
    var cardBody = $(`.${currentCourse}`);
    console.log(classNameCourse);

    cardBody.append(`
    <div class="card mb-3 ${classNameCourse}">
        <div class="card-header">
            <div class="row">
                <div class="card-title col-8 d-flex align-items-center">
                    <div class="w-75 d-flex">
                        <input type="text" class="form-control w-100" placeholder="Tên Bài Học">
                    </div>
                </div>
                <div class="form-check col-2 d-flex align-items-center">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                    <label class="form-check-label" for="defaultCheck1">
                        Xem thử
                    </label>
                </div>
                <div class="card-tools col-2 pr-0 d-flex justify-content-end align-items-start">
                    <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                        class="fas fa-minus"></i>
                    </button>
                    <button type="button" class="btn btn-tool btnRemoveCard" data-card-number="${classNameCourse}" data-card-widget="remove"><i
                        class="fas fa-times"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="card-body">
            The body of the card
        </div>
    </div>`
    );
}

$(document).ready(() => {
    $("#cardBody").on('click', '.btnRemoveCard', function() {
        var nameCard = $(this).attr('data-card-number');
        var cardRemove = '.' + nameCard;
        setTimeout(function() {
            $(`${cardRemove}`).remove();
        }, 1000);
    });

    $("#cardBody").on('click', '.btnAddCourse', function() {
        var nameCard = $(this).attr('data-card-number');
        var numberCard = $(this).attr('data-number');
        appendCourse(nameCard, numberCard);
        numberCard = parseInt(numberCard) + 1;
        $(this).attr('data-number', numberCard);
    });
});