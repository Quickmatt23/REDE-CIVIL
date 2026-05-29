/* ============================================================
   agent.js - PACOTE COMPLETO (chamados, agentes, config, arquivos)
============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("toggleSidebar");
  const menuLinks = document.querySelectorAll(".menu-lateral a");
  const secoes = document.querySelectorAll(".secao");
  const selectTema = document.getElementById("selectTema");
  const btnSalvar = document.getElementById("btnSalvarConfig");

  /* TEMA */
  function aplicarTema(tema) {
    document.body.classList.remove("light");
    if (tema === "light") document.body.classList.add("light");
    if (tema === "auto") {
      const prefers = window.matchMedia("(prefers-color-scheme: light)");
      if (prefers.matches) document.body.classList.add("light");
    }
  }
  const temaSalvo = localStorage.getItem("temaPainel") || "auto";
  aplicarTema(temaSalvo);
  if (selectTema) selectTema.value = temaSalvo;
  if (btnSalvar) {
    btnSalvar.addEventListener("click", () => {
      const novoTema = selectTema.value;
      localStorage.setItem("temaPainel", novoTema);
      aplicarTema(novoTema);
      alert("Configurações salvas!");
    });
  }

  /* SIDEBAR */
  if (toggleBtn && sidebar) toggleBtn.addEventListener("click", () => sidebar.classList.toggle("collapsed"));

  /* TROCAR ABAS */
  menuLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      menuLinks.forEach(l => l.classList.remove("ativo"));
      link.classList.add("ativo");
      const alvo = link.getAttribute("data-section");
      secoes.forEach(s => s.style.display = "none");
      const target = document.getElementById("secao-" + alvo);
      if (target) target.style.display = "block";
      document.getElementById("tituloPagina").innerText = link.innerText.trim();
    });
  });

  /* garantir modais de agentes no DOM (injetar se não existir) */
  ensureAgentModals();

  carregarAgentes();
});

/* ================= CHAMADOS (igual antes, com mapas corretos) ================= */
let listaArquivos = [];

function abrirChamado(id) {
  const titulo = document.getElementById("modalTitulo");
  const mapa = document.getElementById("frameMapa");

  const nome = document.getElementById("cNome");
  const email = document.getElementById("cEmail");
  const tel = document.getElementById("cTelefone");
  const rua = document.getElementById("cRua");
  const numero = document.getElementById("cNumero");
  const bairro = document.getElementById("cBairro");
  const cep = document.getElementById("cCep");
  const complemento = document.getElementById("cComplemento");
  const desc = document.getElementById("cDescricao");
  const arquivos = document.getElementById("cArquivos");
  const grau = document.getElementById("cGrau");

  if (id === 1) {
    titulo.innerText = "Chamado 1 — Árvore Caída";
    nome.innerText = "Maria Ferreira da Silva";
    email.innerText = "maria.ferreira@gmail.com";
    tel.innerText = "(37) 99832-1102";
    rua.innerText = "Rua Padre Libério";
    numero.innerText = "120";
    bairro.innerText = "Centro";
    cep.innerText = "35661-025";
    complemento.innerText = "Próximo à praça";
    desc.innerText = "Árvore caída bloqueando totalmente a rua.";
    listaArquivos = ["anexos/arvore1.jpg","anexos/video_ocorrencia.mp4"];
    arquivos.innerText = "2 arquivos anexados";
    grau.dataset.grau = "CRITICO"; grau.innerText = "CRÍTICO";
    mapa.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15017.034412550901!2d-44.6140046!3d-19.8580722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6e31b0230e8b1%3A0x1e57cea90b82fced!2sR.%20Padre%20Lib%C3%A9rio%20-%20Centro%2C%20Par%C3%A1%20de%20Minas%20-%20MG%2C%2035661-025!5e0!3m2!1spt-BR!2sbr!4v1732652423000";
  }
  if (id === 2) {
    titulo.innerText = "Chamado 2 — Rachadura em Residência";
    nome.innerText = "João Luiz Andrade"; email.innerText = "joao.andrade@gmail.com"; tel.innerText = "(37) 99922-9981";
    rua.innerText = "Rua Benedito Valadares"; numero.innerText = "45"; bairro.innerText = "Recanto da Lagoa"; cep.innerText = "35661-040"; complemento.innerText = "Casa azul";
    desc.innerText = "Rachadura extensa em parede de sustentação.";
    listaArquivos = ["anexos/parede1.jpg"]; arquivos.innerText = "1 arquivo anexado";
    grau.dataset.grau = "ALTO"; grau.innerText = "ALTO";
    mapa.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15017.44325054!2d-44.6133547!3d-19.8647448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6e30f3bd90e6b%3A0xa0dfd967c55ef3fc!2sR.%20Benedito%20Valadares%20-%20Recanto%20da%20Lagoa%2C%20Par%C3%A1%20de%20Minas%20-%20MG!5e0!3m2!1spt-BR!2sbr!4v1732652445000";
  }
  if (id === 3) {
    titulo.innerText = "Chamado 3 — Enxurrada";
    nome.innerText = "Ana Paula Santos"; email.innerText = "ana.ps@gmail.com"; tel.innerText = "(37) 99911-0021";
    rua.innerText = "Av. Presidente Vargas"; numero.innerText = "500"; bairro.innerText = "Centro"; cep.innerText = "35661-200"; complemento.innerText = "Em frente ao banco";
    desc.innerText = "Água descendo forte invadindo calçadas.";
    listaArquivos = ["anexos/enxurrada.jpg"]; arquivos.innerText = "1 arquivo anexado";
    grau.dataset.grau = "MEDIO"; grau.innerText = "MÉDIO";
    mapa.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15017.2590027043!2d-44.6125433!3d-19.8615974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6e31b03408b9b%3A0x3ac9fe63c19e78e3!2sAv.%20Pres.%20Vargas%20-%20Centro%2C%20Par%C3%A1%20de%20Minas%20-%20MG!5e0!3m2!1spt-BR!2sbr!4v1732652471200";
  }
  if (id === 4) {
    titulo.innerText = "Chamado 4 — Fiação Rompida";
    nome.innerText = "Pedro Henrique Melo"; email.innerText = "pedro.melo@gmail.com"; tel.innerText = "(37) 99788-3344";
    rua.innerText = "Rua São Geraldo"; numero.innerText = "82"; bairro.innerText = "Dom Bosco"; cep.innerText = "35661-150"; complemento.innerText = "Próximo à escola";
    desc.innerText = "Fiação rompida oferecendo risco elétrico.";
    listaArquivos = ["anexos/fio1.jpg","anexos/risco2.jpg","anexos/video_fiacao.mp4"]; arquivos.innerText = "3 arquivos anexados";
    grau.dataset.grau = "CRITICO"; grau.innerText = "CRÍTICO";
    mapa.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15017.705798382805!2d-44.6084398!3d-19.8700651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6e31b47b52b1b%3A0x441e8e0b29ca325!2sR.%20S%C3%A3o%20Geraldo%20-%20Dom%20Bosco%2C%20Par%C3%A1%20de%20Minas%20-%20MG!5e0!3m2!1spt-BR!2sbr!4v1732652490000";
  }

  document.getElementById("modalChamado").style.display = "block";
}

function fecharChamado() { document.getElementById("modalChamado").style.display = "none"; }

/* arquivos */
function abrirArquivos() {
  const lista = document.getElementById("listaArquivos");
  lista.innerHTML = "";
  listaArquivos.forEach(arq => {
    const nomeArquivo = arq.split("/").pop();
    lista.innerHTML += `<li>${nomeArquivo}<button class="btn-arquivo-abrir" onclick="abrirArquivo('${arq}')">Abrir</button></li>`;
  });
  document.getElementById("modalArquivos").style.display = "block";
}
function fecharArquivos() { document.getElementById("modalArquivos").style.display = "none"; }
function abrirArquivo(caminho) { window.open(caminho, "_blank"); }

/* fechar modais clicando fora */
window.addEventListener("click", function(e){
  const modCham = document.getElementById("modalChamado");
  const modArq = document.getElementById("modalArquivos");
  const modAdd = document.getElementById("modalAddAgente");
  const modEdit = document.getElementById("modalEditAgente");
  if (e.target === modCham) fecharChamado();
  if (e.target === modArq) fecharArquivos();
  if (e.target === modAdd) fecharAdicionarAgente();
  if (e.target === modEdit) fecharEditarAgente();
});

/* ================= AGENTES (dados iniciais) ================= */
let agentes = [
  { nome: "Lucas Almeida", cargo: "Supervisor", foto: "icones_agente/avatar1.png", status: "online" },
  { nome: "Fernanda Reis", cargo: "Técnica de Campo", foto: "icones_agente/avatar2.png", status: "ocupado" },
  { nome: "Roberto Martins", cargo: "Operador", foto: "icones_agente/avatar3.png", status: "offline" }
];

function carregarAgentes() {
  const grid = document.getElementById("gridAgentes");
  if (!grid) return;
  grid.innerHTML = "";
  agentes.forEach((agente, i) => {
    grid.innerHTML += `
      <div class="card-agente">
        <img src="${agente.foto}" class="agente-foto" alt="${agente.nome}">
        <div class="agente-info">
          <h3 title="${agente.nome}">${agente.nome}</h3>
          <p><strong>Cargo:</strong> ${agente.cargo}</p>
          <p><strong>Status:</strong> <span class="status-bolinha ${agente.status}"></span> ${capitalize(agente.status)}</p>
          <div style="margin-top:10px;">
            <button class="btn-agente-detalhes" onclick="editarAgente(${i})">Editar</button>
            <button class="btn-agente-remover" onclick="removerAgente(${i})">Excluir</button>
          </div>
        </div>
      </div>`;
  });
}

/* remover */
function removerAgente(index) {
  if (!confirm("Remover agente?")) return;
  agentes.splice(index,1);
  carregarAgentes();
}

/* editar */
function editarAgente(index) {
  const agente = agentes[index];
  const modal = document.getElementById("modalEditAgente");
  document.getElementById("editIndex").value = index;
  document.getElementById("editNome").value = agente.nome;
  document.getElementById("editCargo").value = agente.cargo;
  document.getElementById("editStatus").value = agente.status;
  document.getElementById("editFotoPreview").src = agente.foto;
  modal.style.display = "block";
}

/* salvar edição */
function salvarEdicaoAgente() {
  const idx = parseInt(document.getElementById("editIndex").value,10);
  const nome = document.getElementById("editNome").value.trim();
  const cargo = document.getElementById("editCargo").value.trim();
  const status = document.getElementById("editStatus").value;
  const fotoInput = document.getElementById("editFoto");
  let foto = agentes[idx].foto;
  if (fotoInput && fotoInput.files && fotoInput.files[0]) foto = URL.createObjectURL(fotoInput.files[0]);

  agentes[idx] = { nome: nome || agentes[idx].nome, cargo: cargo || agentes[idx].cargo, foto, status };
  carregarAgentes();
  fecharEditarAgente();
}

/* fechar editar */
function fecharEditarAgente() {
  const modal = document.getElementById("modalEditAgente");
  if (modal) modal.style.display = "none";
  const form = document.getElementById("formEditAgente");
  if (form) form.reset();
  const prev = document.getElementById("editFotoPreview"); if (prev) prev.src = "";
}

/* adicionar agente */
function abrirAdicionarAgente() { document.getElementById("modalAddAgente").style.display = "block"; }
function fecharAdicionarAgente() {
  const m = document.getElementById("modalAddAgente"); if (m) m.style.display = "none";
  const f = document.getElementById("formAddAgente"); if (f) f.reset();
  const prev = document.getElementById("fotoPreview");
if (prev) prev.src = "icones_agente/icons8-agente-64.png";
}
function previewFotoAdd(e) { const p = document.getElementById("fotoPreview"); if (e.target.files[0]) p.src = URL.createObjectURL(e.target.files[0]); }
function previewFotoEdit(e) { const p = document.getElementById("editFotoPreview"); if (e.target.files[0]) p.src = URL.createObjectURL(e.target.files[0]); }

function salvarNovoAgente() {
  const nome = document.getElementById("addNome").value.trim();
  const cargo = document.getElementById("addCargo").value.trim();
  const status = document.getElementById("addStatus").value;
  const fotoInput = document.getElementById("addFoto");
  if (!nome) { alert("Informe o nome."); return; }
  let foto = "icones_agente/icons8-agente-64.png";
  if (fotoInput && fotoInput.files && fotoInput.files[0]) foto = URL.createObjectURL(fotoInput.files[0]);

  agentes.push({ nome, cargo: cargo || "Agente", foto, status });
  carregarAgentes();
  fecharAdicionarAgente();
}

/* helper */
function capitalize(s) { if(!s) return ""; return s.charAt(0).toUpperCase()+s.slice(1); }

/* ===================== UTIL: criar modais de agente caso não existam ===================== */
function ensureAgentModals(){
  if (!document.getElementById("modalAddAgente")) {
    const addHTML = `
    <div id="modalAddAgente" class="modal">
      <div class="modal-content">
        <span class="fechar" onclick="fecharAdicionarAgente()">&times;</span>
        <h3>Adicionar Agente</h3>
        <form id="formAddAgente" onsubmit="event.preventDefault(); salvarNovoAgente();">
          <div class="form-row">
            <div class="form-col">
              <label>Nome</label>
              <input id="addNome" class="input" type="text" required>
            </div>
            <div class="form-col">
              <label>Cargo</label>
              <input id="addCargo" class="input" type="text" placeholder="Ex: Técnico">
            </div>
          </div>
          <div style="margin-top:10px;" class="form-row">
            <div style="flex:1;">
              <label>Status</label>
              <select id="addStatus" class="input">
                <option value="online">online</option>
                <option value="ocupado">ocupado</option>
                <option value="offline">offline</option>
              </select>
            </div>
            <div style="width:120px;">
              <label>Foto</label>
              <input id="addFoto" class="input" type="file" accept="image/*" onchange="previewFotoAdd(event)">
            </div>
            <div style="width:110px; display:flex; align-items:center;">
              <img id="fotoPreview" class="preview-foto" src="icones_agente/icons8-agente-64.png">
            </div>
          </div>

          <div style="margin-top:14px;">
            <button class="btn-salvar" type="submit">Salvar</button>
            <button class="btn-agente-remover" type="button" onclick="fecharAdicionarAgente()">Cancelar</button>
          </div>
        </form>
      </div>
    </div>`;
    document.body.insertAdjacentHTML('beforeend', addHTML);
  }

  if (!document.getElementById("modalEditAgente")) {
    const editHTML = `
    <div id="modalEditAgente" class="modal">
      <div class="modal-content">
        <span class="fechar" onclick="fecharEditarAgente()">&times;</span>
        <h3>Editar Agente</h3>
        <form id="formEditAgente" onsubmit="event.preventDefault(); salvarEdicaoAgente();">
          <input type="hidden" id="editIndex">
          <div class="form-row">
            <div class="form-col">
              <label>Nome</label>
              <input id="editNome" class="input" type="text" required>
            </div>
            <div class="form-col">
              <label>Cargo</label>
              <input id="editCargo" class="input" type="text" placeholder="Ex: Supervisor">
            </div>
          </div>
          <div style="margin-top:10px;" class="form-row">
            <div style="flex:1;">
              <label>Status</label>
              <select id="editStatus" class="input">
                <option value="online">online</option>
                <option value="ocupado">ocupado</option>
                <option value="offline">offline</option>
              </select>
            </div>
            <div style="width:120px;">
              <label>Alterar Foto</label>
              <input id="editFoto" class="input" type="file" accept="image/*" onchange="previewFotoEdit(event)">
            </div>
            <div style="width:110px; display:flex; align-items:center;">
              <img id="editFotoPreview" class="preview-foto" src="">
            </div>
          </div>

          <div style="margin-top:14px;">
            <button class="btn-salvar" type="submit">Salvar alterações</button>
            <button class="btn-agente-remover" type="button" onclick="fecharEditarAgente()">Cancelar</button>
          </div>
        </form>
      </div>
    </div>`;
    document.body.insertAdjacentHTML('beforeend', editHTML);
  }
}
