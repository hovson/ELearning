function openModalDeniedCourse(event) {
    $('#output').html(
      ` <div class="modal fade" id="deniedCourse" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-confirm" role="document">
                <div class="modal-content" id="groupContentArea">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Từ Chối Bài Học</h5>
                        <button type="button" class="close closeButton" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="message-text" class="col-form-label labelMessageText">Lý do từ chối:</label>
                                <textarea class="form-control" id="message-text" rows="7" cols="40" placeholder="..."></textarea>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer d-flex justify-content-center" id="groupBTNApprove">
                        <button type="button" class="btn btn-secondary btnDeniedCourse" data-dismiss="modal">Hủy</button>
                        <button type="button" class="btn btn-primary btnConfirmApprove">Xác Nhận</button>
                    </div>
                </div>
            </div>
         </div>`
    );
    $('#deniedCourse').modal("show");
}

function openModalApproveSuccess(event) {
$(".divApproveCourse").hide();
$('#output').html(
    `<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-confirm" role="document">
                                <div class="modal-content">
                                    <div class="modal-body p-0">
                                        <div class="alert alert-success alert-dismissible fade show m-0" role="alert">
                                            <h4 class="alert-heading"><i class="fa fa-check"></i> Thành Công</h4>
                                            <strong>Khóa Học Đã Được Duyệt Thành Công</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`
);
$('#myModal').modal("show");
}

function openModalApproveCourseSuccess(event) {
    $(".divApproveCourse").hide();
    $('#output').html(
        `<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-confirm" role="document">
                                    <div class="modal-content">
                                        <div class="modal-body p-0">
                                            <div class="alert alert-success alert-dismissible fade show m-0" role="alert">
                                                <h4 class="alert-heading"><i class="fa fa-check"></i> Thành Công</h4>
                                                <strong>Bài Học Đã Được Duyệt Thành Công</strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>`
    );
    $('#myModal').modal("show");
    }

function openModalDeniedSuccess(event) {
    $(".divApproveCourse").hide();
    $('#output').html(
        `<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-confirm" role="document">
                                    <div class="modal-content">
                                        <div class="modal-body p-0">
                                            <div class="alert alert-success alert-dismissible fade show m-0" role="alert">
                                                <h4 class="alert-heading"><i class="fa fa-check"></i> Thành Công</h4>
                                                <strong>Từ Chối Bài Học Thành Công</strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>`
    );
    $('#myModal').modal("show");
}

$(document).ready(() => {
    $("#output").on('keypress', '#message-text', function () {
        var textValue = $("#message-text").val();
        if (textValue.length === 0)
        {
            $(".btnConfirmApprove").prop('disabled', true);
        }
        else
        {
            $(".btnConfirmApprove").prop('disabled', false);
        }
    });

    $("#output").on('click', '.btnConfirmApprove', function () {
        var textValue = $("#message-text").val();
        if (textValue.length === 0)
        {
            console.log(textValue.length);
            $(".btnConfirmApprove").prop('disabled', true);
            return false;
        }
        else
        {
            $(".btnConfirmApprove").prop('disabled', false);
            $('#deniedCourse').modal("hide");
            setTimeout(
            function () {
                openModalDeniedSuccess();
            }, 1000);
        }
    });
});