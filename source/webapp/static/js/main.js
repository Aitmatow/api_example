$(document).ready(function () {
    container = $('.container')
    container.append(
        `
    <form method="post">
    <p class="text-center font-italic" style="font-size: 40px">Calculate</p>
    <p>Введите А <input name="a" id="a"></p>
    <p>Введите B <input name="b" id="b"></p>
    <a class="btn btn-success" onclick="add()">+</a>
    <a class="btn btn-success" onclick="substract()">-</a>
    <a class="btn btn-success" onclick="multiply()">*</a>
    <a class="btn btn-success" onclick="divide()">/</a>
         <p>Ответ:</p>
    <div class="answer">

    </div>
    </form>`
    )
});

function add() {
    a = document.getElementById('a');
    b = document.getElementById('b');
    let ajax = $.ajax({
      type: "POST",
      url: "http://localhost:8000/add/",
      data: JSON.stringify({
          'A' : a.value,
          'B' : b.value
      }),
      dataType:'json',
      contentType:'json',
      success: function (data) {
        answer = $('.answer')
          answer.html(`<p> ${data.answer}  </p>`)
      },
      error: function (data) {
        answer = $('.answer')
          answer.html(`<p style="color: red"> ${data.responseJSON.error}  </p>`)
      },

    });
}

function substract() {
    a = document.getElementById('a');
    b = document.getElementById('b');
    let ajax = $.ajax({
      type: "POST",
      url: "http://localhost:8000/substract/",
      data: JSON.stringify({
          'A' : a.value,
          'B' : b.value
      }),
      dataType:'json',
      contentType:'json',
      success: function (data) {
        answer = $('.answer')
          answer.html(`<p> ${data.answer}  </p>`)
      },
      error: function (data) {
        answer = $('.answer')
          answer.html(`<p style="color: red"> ${data.responseJSON.error}  </p>`)
      },

    });
}

function multiply() {
    a = document.getElementById('a');
    b = document.getElementById('b');
    let ajax = $.ajax({
      type: "POST",
      url: "http://localhost:8000/multiply/",
      data: JSON.stringify({
          'A' : a.value,
          'B' : b.value
      }),
      dataType:'json',
      contentType:'json',
      success: function (data) {
        answer = $('.answer')
          answer.html(`<p> ${data.answer}  </p>`)
      },
      error: function (data) {
        answer = $('.answer')
          answer.html(`<p style="color: red"> ${data.responseJSON.error}  </p>`)
      },

    });
}

function divide() {
    a = document.getElementById('a');
    b = document.getElementById('b');
    let ajax = $.ajax({
      type: "POST",
      url: "http://localhost:8000/divide/",
      data: JSON.stringify({
          'A' : a.value,
          'B' : b.value
      }),
      dataType:'json',
      contentType:'json',
      success: function (data) {
        answer = $('.answer')
          answer.html(`<p> ${data.answer}  </p>`)
      },
      error: function (data) {
        answer = $('.answer')
          answer.html(`<p style="color: red"> ${data.responseJSON.error}  </p>`)
      },

    });
}

