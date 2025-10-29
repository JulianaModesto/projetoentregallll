export const templates = {
  home: `
    <section>
      <h2>Nosso Propósito</h2>
      <p>Nosso objetivo é oferecer abrigo, cuidado, carinho e dignidade para aqueles que não podem pedir por ajuda.</p>
      <img src="imagens/foto1.jpg" alt="Equipe da ONG trabalhando com animais">
    </section>
    <section>
      <h2>Quem Somos</h2>
      <p>Desde 2020, na cidade de Araraquara, a ONG Patinhas já resgatou mais de 50 mil animais em situação de abandono. E essa jornada está só começando!</p>
    </section>
    <section>
      <h2>Fale Conosco</h2>
      <p><strong>Email:</strong> contato@ongpatinhas.org</p>
      <p><strong>Telefone:</strong> (16) 9090-9998</p>
      <button class="button">Envie uma mensagem</button>
    </section>
  `,

  projetos: `
    <section>
      <h2>Projetos que Transformam Vidas</h2>
      <p>Conheça nossas ações e saiba como participar!</p>
      <img src="imagens/foto2.jpeg" alt="Gatinhos resgatados pela ONG">
    </section>
    <section>
      <h3>Junte-se a Nós</h3>
      <p>Doe seu tempo e carinho para mudar a vida dos nossos anjinhos.</p>
      <button class="button">Quero Ajudar</button>
    </section>
    <section>
      <h3>Faça sua Doação</h3>
      <p>Com apenas alguns cliques, você pode ajudar nossos projetos.</p>
    </section>
  `,

  cadastro: `
    <section>
      <h2>Quero ser Voluntário!</h2>
      <p>Preencha seus dados abaixo para participar dos nossos projetos.</p>

      <form id="cadastroForm" class="card">
        <label>Nome completo:</label>
        <input id="nome" type="text" required>

        <label>E-mail para contato:</label>
        <input id="email" type="email" required>

        <label>Telefone com DDD:</label>
        <input id="telefone" type="tel" required>

        <label>CPF:</label>
        <input id="cpf" type="text" required>

        <label>Data de nascimento:</label>
        <input id="nascimento" type="date" required>

        <label>Endereço completo:</label>
        <input id="endereco" type="text" required>

        <label>CEP:</label>
        <input id="cep" type="text" required>

        <button type="submit" class="button">Enviar Cadastro</button>
        <p id="msgForm"></p>
      </form>
    </section>
  `
};