# avaliacao-jp

git init:
  Cria um novo repositório do Git
git status:
  Exibe o status da pasta de trabalho e também te deixa ver como estão as alterações programadas

git add nome_do_arquivo:
  Adiciona conteúdo que terá que ser confirmado depois pelo...
git commit:
  Confirma as mudanças preparadas, que depois serão enviadas pelo...
git push:
  Envia as mudanças confirmadas para o repositório
git rm --cached:
  Remove os arquivos da área de mudança, ele ainda estará salvo localmente
git restore --staged nome_do_arquivo OU git reset:
  restaura conteúdo no indice indicado
git branch:
  Lista, cria ou deleta branches, dependendo se ele tem --list, --delete, --copy e etc...
  Nesse caso a -D, por exemplo, deleta uma branch
git checkout:
  Troca de branch. A opção -b cria uma nova branch caso o checkout seja bem sucedido.
git commit -m <Mensagem>
  Permite escrever a mensagem associada ao commit
git fetch
  Baixa conteúdo de outros repositórios
git pull
  Baixa e atualiza a branch local com a que está atualmente na nuvem

----------- Agora vamos às instruções para configurar uma chave SSH localmente -----------------

onfigura seu nome e email na máquina
  git config --global user.name "seu nome"
  git config --global user.email "seuEmail@email.com"
Aí vc vai ve se existe uma chave já instalada
  ls -al~/.ssh
Adiciona uma nova chave:
  ssh-keygen -t ed25519 -C "seuEmail@exemplo.com"
Inicia o agente ssh
  eval "$(ssh-agent -s)"
Adiciona a chave ssh ao agente
  ssh-add ~/.ssh/id_ed25519
Aí vc copia a chave ssh no clipboard
  clip <~/.ssh/id_ed25519.pub
E por fim adiciona a chave no github. Lembra que ela está no seu CRT C, então não copie outra coisa até colar ela lá
