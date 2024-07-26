import axios from "axios";
export default class MarcasApi {
  async buscarTodasAsMarcas() {
    const { data } = await axios.get("/nomes/");
    return data.results;
  }
  async adicionarNome(nome) {
    const { data } = await axios.post("/nomes/", nome);
    return data.results;
  }
  async atualizarNome(nome) {
    const { data } = await axios.put(`/nomes/${nome.id}/`, nome);
    return data.results;
  }
  async excluirNome(id) {
    const { data } = await axios.delete(`/nomes/${id}/`);
    return data.results;
  }
}