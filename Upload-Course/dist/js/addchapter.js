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
            <input type="text" id="chuong${numberCard}" class="form-control w-100" placeholder="Tên chương" required>
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

    cardBody.append(`
    <div class="card mb-3 ${classNameCourse}">
        <div class="card-header">
            <div class="row">
                <div class="card-title col-8 d-flex align-items-center">
                    <div class="w-75 d-flex">
                        <input type="text" id="bai" class="form-control w-100" placeholder="Tên Bài Học" required>
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
            <!-- Tabs navs -->
            <div class="col-xs-12 ">
            <nav>
                <div class="nav nav-tabs nav-fill" id="nav-tab-${numberCurrentCourse}" role="tablist">
                <a class="nav-item nav-link active" id="nav-home-tab-${numberCurrentCourse}" data-toggle="tab" href="#nav-home-${numberCurrentCourse}" role="tab" aria-controls="nav-home" aria-selected="true">Nội Dung Mô Tả</a>
                <a class="nav-item nav-link" id="nav-profile-tab-${numberCurrentCourse}" data-toggle="tab" href="#nav-profile-${numberCurrentCourse}" role="tab" aria-controls="nav-profile" aria-selected="false">Upload Video</a>
                <a class="nav-item nav-link" id="nav-contact-tab-${numberCurrentCourse}" data-toggle="tab" href="#nav-contact-${numberCurrentCourse}" role="tab" aria-controls="nav-contact" aria-selected="false">Upload Tài Liệu</a>
                </div>
            </nav>
            <div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent-${numberCurrentCourse}">
                <div class="tab-pane fade show active" id="nav-home-${numberCurrentCourse}" role="tabpanel" aria-labelledby="nav-home-tab">
                <div class="row">
                    <div class="col-sm-12">
                    <textarea class="form-control" name="txtDescription"
                        style="height: 300px;" placeholder="Nội dung mô tả" required></textarea>
                    </div>
                </div>
                </div>
                <div class="tab-pane fade" id="nav-profile-${numberCurrentCourse}" role="tabpanel" aria-labelledby="nav-profile-tab">
                <div class="file-upload file-upload-movie-${numberCurrentCourse}">
                    <div class="file-select">
                    <div class="file-select-button" id="fileName">Chọn File</div>
                    <div class="file-select-name" id="noFileMovie-${numberCurrentCourse}"></div> 
                    <input type="file" class="chooseFileMovie" name="chooseFileMovie" data-number=${numberCurrentCourse} id="chooseFileMovie-${numberCurrentCourse}" accept="video/mp4,video/x-m4v,video/*">
                    </div>
                </div>
                </div>
                <div class="tab-pane fade" id="nav-contact-${numberCurrentCourse}" role="tabpanel" aria-labelledby="nav-contact-tab">
                <div class="file-upload file-upload-content-${numberCurrentCourse}">
                    <div class="file-select">
                    <div class="file-select-button" id="fileName">Chọn File</div>
                    <div class="file-select-name" id="noFileContent-${numberCurrentCourse}"></div> 
                    <input type="file" class="chooseFileContent" name="chooseFileContent" data-number=${numberCurrentCourse} id="chooseFileContent-${numberCurrentCourse}">
                    </div>
                </div>
                </div>
            </div>
            </div>
            <!-- Tabs content -->
        </div>
    </div>`
    );
}

function submitSuccess(event) {
    $('#submitSuccess').empty();
    $('#btnSentRequest').prop('hidden', true);
    $('#btnBack').prop('hidden', true);
    $('#submitSuccess').html(
        `
            <div class="pt-1 d-flex align-items-center" style="height:50px; color:white; background-color:#00BA58; border-radius:10px;">
                <div class="modal-body p-0 w-100">
                    <div class="w-100 pl-4 d-flex justify-content-center">
                        <h4 class="alert-heading"><i class="fa fa-check"></i> Gửi Thành Công. Vui lòng đợi hệ thống phê duyệt</h4>
                    </div>
                </div>
            </div>
            <div class="w-100 pl-4 d-flex justify-content-center mt-2">
                <a class="btn btn-primary m-1" href="./starter.html" role="button">Quay Lại Trang Chủ</a>
                <a class="btn btn-primary m-1" href="./LearnCourse/index.html" role="button">Xem Thử Khóa Học</a>
            </div>
        `
    );
}

$(document).ready(() => {
    $("#cardBody").on('click', '.btnRemoveCard', function () {
        var nameCard = $(this).attr('data-card-number');
        var cardRemove = '.' + nameCard;
        setTimeout(function () {
            $(`${cardRemove}`).remove();
        }, 1000);
    });

    $("#cardBody").on('click', '.btnAddCourse', function () {
        var nameCard = $(this).attr('data-card-number');
        var numberCard = $(this).attr('data-number');
        appendCourse(nameCard, numberCard);
        numberCard = parseInt(numberCard) + 1;
        $(this).attr('data-number', numberCard);
    });

    $('.tab-content').on('click change', '.chooseFileContent', function () {
        var currentInput = $(this).attr('data-number');
        var currentClassName = 'chooseFileContent-' + currentInput;
        var classFileName = '#chooseFileContent-' + currentInput;
        var classFileUpload = '.file-upload-content-' + currentInput;
        var filename = $(`${classFileName}`).val();
        if (/^\s*$/.test(filename)) {
            $(`${classFileUpload}`).removeClass('active');
            $(`#noFileContent-${currentInput}`).text("");
        }
        else {
            $(`${classFileUpload}`).addClass('active');
            $(`#noFileContent-${currentInput}`).text(filename.replace("C:\\fakepath\\", ""));
        }
    });

    $('.tab-content').on('click change', '.chooseFileMovie', function () {
        var currentInput = $(this).attr('data-number');
        var currentClassName = 'chooseFileMovie-' + currentInput;
        var classFileName = '#chooseFileMovie-' + currentInput;
        var classFileUpload = '.file-upload-movie-' + currentInput;
        var filename = $(`${classFileName}`).val();
        if (/^\s*$/.test(filename)) {
            $(`${classFileUpload}`).removeClass('active');
            $(`#noFileMovie-${currentInput}`).text("");
        }
        else {
            $(`${classFileUpload}`).addClass('active');
            $(`#noFileMovie-${currentInput}`).text(filename.replace("C:\\fakepath\\", ""));
        }
    });
});

