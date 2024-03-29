function updateA() {
  var weight = Number($("input[name=w1]").val()) + Number($("input[name=w2]").val()) + Number($("input[name=w3]").val());
  if (weight != 100) {
    $("#typeAWarn").text("Weight does not equal 100%");
    $("#typeAWarn").removeClass("hide-warn");
  } else {
    $("#typeAWarn").addClass("hide-warn");
  }
  var g1 = Number(($("input[name=w1]").val() / 100) * $("input[name=g1]").val());
  var g2 = Number(($("input[name=w2]").val() / 100) * $("input[name=g2]").val());
  var g3 = Number(($("input[name=w3]").val() / 100) * $("input[name=g3]").val());
  var t = Number($("input[name=target]").val());
  var w1 = Number($("input[name=w1]").val() / 100);
  var w2 = Number($("input[name=w2]").val() / 100);
  var wf = Number($("input[name=w3]").val() / 100);
  var curr = (g1 + g2) / (w1 + w2);

  $("#typeAOut").text(Number((g1 + g2 + g3).toFixed(2)));

  if ($('input[name=target]').val() != '') {
    var req = Number((t - ((1 - wf) * curr)) / wf).toFixed(2);
    $("#typeAEst").text(req);
    $("input[name=g3]").prop('disabled', true);
    $("input[name=g3]").val('');
    $("input[name=g3]").addClass("alert-secondary");

    if (req > 100) {
      $("#warn-req").removeClass("d-none");
    } else {
      $("#warn-req").addClass("d-none");
    }
  } else {
    $("input[name=g3]").prop('disabled', false);
    $("input[name=g3]").removeClass("alert-secondary");
    $('input[name=target]').val('');
    $("#typeAEst").text("---");
  }
}

function setQuarter() {
  $("#heading1").text("Homework");
  $("#heading2").text("Projects");
  $("#heading3").text("Test");
  $("input[name='w1']").val(10);
  $("input[name='w2']").val(35);
  $("input[name='w3']").val(55);
  $("#estimator").addClass("d-none");
}

function setSemester() {
  $("#heading1").text("Quarter 1");
  $("#heading2").text("Quarter 2");
  $("#heading3").text("Final Exam");
  $("input[name='w1']").val(40);
  $("input[name='w2']").val(40);
  $("input[name='w3']").val(20);
  $("#estimator").removeClass("d-none");
  $('input[name=target]').val('');
  $("#warn-req").addClass("d-none");
}

setInterval(updateA, 1000);
