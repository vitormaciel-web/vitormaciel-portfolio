function loadPhoto(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const img         = document.getElementById('photoImg');
    const placeholder = document.getElementById('photoPlaceholder');
    img.src           = e.target.result;
    img.style.display = 'block';
    placeholder.style.display = 'none';
  };
  reader.readAsDataURL(file);
}

function sendWhatsApp() {
  const name  = document.getElementById('contactName').value.trim();
  const phone = document.getElementById('contactPhone').value.trim();
  const type  = document.getElementById('contactType').value;
  const msg   = document.getElementById('contactMsg').value.trim();

  if (!name) {
    alert('Por favor, informe seu nome para continuar.');
    return;
  }

  let text = `Oi Vitor! Me chamo *${name}*`;
  if (phone) text += `, meu WhatsApp é ${phone}`;
  if (type)  text += `.\n\n*Tipo de projeto:* ${type}`;
  if (msg)   text += `\n\n*Sobre o projeto:*\n${msg}`;

  const url = `https://wa.me/5551995529835?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}