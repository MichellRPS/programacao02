Apenas comecei a adaptar o conteúdo do site do trabalho, mas adicionei elementos JavaScript, conforme solicitado em aula.

Utilizei PHP, jQuery e XAMPP para incluir esses elementos. São conteúdos um pouco mais avançados, mas não sabia o que adicionar, então coloquei algo relacionado ao que estou vendo no treinamento neste momento. Vou explicar o que fiz:

Criei um banco de dados por meio do PHPMyAdmin do XAMPP e lá coloquei registros contendo o nome e o caminho para a imagem dos clientes da empresa de desenvolvimento web Intercode.
Em seguida, criei um arquivo PHP que faz uma consulta a esse banco de dados, extrai os dados e codifica os mesmos para o formato JSON.
Por fim, adicionei um código JavaScript utilizando jQuery à página de portfólio do template, a qual renomeei para clientes.html. Fiz com que esses dados JSON sejam lidos, mostrando uma lista de clientes, assim como fiz no trabalho 01, porém dessa vez de forma dinâmica ao invés de estática.