// فرم را submit کنید
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  // داده ها را از فرم دریافت کنید
  const name = document.querySelector("input[name='name']").value;
  const phone = document.querySelector("input[name='phone']").value;
  const date = document.querySelector("input[name='date']").value;
  const time = document.querySelector("input[name='time']").value;

  // داده ها را به صفحه دیگری ارسال کنید
  fetch("/appointment", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      phone,
      date,
      time,
    }),
  });

  // فرم را خالی کنید
  form.reset();
});
