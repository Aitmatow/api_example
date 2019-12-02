$(document).ready(function () {
    let container = $('.container');
    container.append(
        `<form method="post">
    <p class="text-center font-italic" style="font-size: 40px">Calculate</p>
    <p>Введите А <input name="a" id="a"></p>
    <p>Введите B <input name="b" id="b"></p>
    <a class="btn btn-success" data-id = 'add/' onclick="math(this)">+</a>
    <a class="btn btn-success" data-id = 'substract/' onclick="math(this)">-</a>
    <a class="btn btn-success" data-id = 'multiply/' onclick="math(this)">*</a>
    <a class="btn btn-success" data-id = 'divide/' onclick="math(this)">/</a>
         <p>Ответ:</p>
    <div class="answer">
    </div>
    </form>`
    )
});

function math(elem) {
    let a = document.getElementById('a');
    let b = document.getElementById('b');
    let ajax = $.ajax({
      type: "POST",
      url: "http://localhost:8000/" + $(elem).data('id'),
      data: JSON.stringify({
          'A' : a.value,
          'B' : b.value
      }),
      dataType:'json',
      contentType:'json',
      success: function (data) {
        let answer = $('.answer');
        answer.html(`<p> ${data.answer}  </p>`)
      },
      error: function (data) {
        let answer = $('.answer');
        answer.html(`<p style="color: red"> ${data.responseJSON.error}</p>`)
      },

    });
}


