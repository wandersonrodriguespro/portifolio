<?php
  //Variáveis
  $nome = $_POST['nome'];
  $email = $_POST['email'];
  $telefone = $_POST['telefone'];
  $mensagem = $_POST['mensagem'];
  $data_envio = date('d/m/Y');
  $hora_envio = date('H:i:s');

  //Compo E-mail
  $arquivo = "
    <html>
      <p><b>Nome: </b>$nome</p>
      <p><b>E-mail: </b>$email</p>
      <p><b>Telefone: </b>$telefone</p>
      <p><b>Mensagem: </b>$mensagem</p>
      <p>Este e-mail foi enviado em <b>$data_envio</b> às <b>$hora_envio</b></p>
    </html>
  ";
  
  //Emails para quem será enviado o formulário
  $destino = "wanderson.rodrigues.central@gmail.com";
  $assunto = "Contato pelo Portifólio";

  //Este sempre deverá existir para garantir a exibição correta dos caracteres
  $headers  = "MIME-Version: 1.0\n";
  $headers .= "Content-type: text/html; charset=iso-8859-1\n";
  $headers .= "From: $nome <$email>";

  //Enviar

  //Enviar
  // if (mail($destino, $assunto, $arquivo, $headers)) {
  //     // E-mail enviado com sucesso, chame a função toggleModal()
  //     echo '<script src="../js/modal.js"></script>';
  //     echo '<script>toggleModal();</script>';
  // } else {
  //     // O envio do e-mail falhou
  //     echo '<script>alert("Falha ao enviar o e-mail.");</script>';
  // }

  mail($destino, $assunto, $arquivo, $headers);
  
  echo "<meta http-equiv='refresh' content='10;URL=../contato.html'>";
?>