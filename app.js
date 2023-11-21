
const btn= $('.btn')
const adviceId = $('#advice_ID')
const message = $('#message')



btn.click(function (){
 $.ajax({
  url: 'https://api.adviceslip.com/advice',
  dataType: "json",
  method:"GET",
 }).done(function (data) {
  adviceId.text(data.slip.id)
  message.text(data.slip.advice)
 })

 
})




