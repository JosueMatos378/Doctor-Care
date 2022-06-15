const formElement = document.getElementById('form');
const buttonSubmit = document.getElementById('submit');

buttonSubmit.addEventListener('click', (e) => {
  e.preventDefault();

  getAllDataFormat();
});

function getAllDataFormat() {
  const inputFullName = document.getElementById('fullname').value;
  const inputDateAppointment = document.getElementById('date-apointment').value;
  const formatedDateAppointment = new Date(
    inputDateAppointment
  ).toLocaleDateString();
  const inputTimeAppointment = document.getElementById('time-apointment').value;

  const apiWhats = `https://api.whatsapp.com/send?phone=5577981463781&text=Agendamento de ${inputFullName}, Data: ${formatedDateAppointment}, Horário: ${inputTimeAppointment}`;

  window.open(apiWhats, '_blank');
}
