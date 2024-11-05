async function createTurma(
  nome: string,
  turno: string,
  dataDeInicio: Date,
  dataDeTermino: Date,
  cargaHoraria: number,
  professor: string
): Promise<string> {
  try {
    let resposta = ''
    if (
      !nome ||
      !turno ||
      !dataDeInicio ||
      !dataDeTermino ||
      !cargaHoraria ||
      !professor
    ) {
      resposta = 'Todos os campos são obrigatórios para adicionar uma turma.'
      return resposta
    }
    resposta = `A turma ${nome} foi adicionada com o professor ${professor}, turno ${turno}, início em ${dataDeInicio} e término em ${dataDeTermino}, com carga horária de ${cargaHoraria} horas.`
    console.log(resposta)
    return resposta
  } catch (error) {
    console.error('Erro ao adicionar turma:', error)
    return 'Erro ao adicionar turma'
  }
}

async function updateTurma(
  nome: string,
  turno: string,
  dataDeInicio: Date,
  dataDeTermino: Date,
  cargaHoraria: number,
  professor: string
): Promise<string> {
  try {
    let resposta = ''
    if (
      !nome ||
      !turno ||
      !dataDeInicio ||
      !dataDeTermino ||
      !cargaHoraria ||
      !professor
    ) {
      resposta = 'Todos os campos são obrigatórios para atualizar uma turma.'
      return resposta
    }
    resposta = `A turma ${nome} foi atualizada com o professor ${professor}, turno ${turno}, início em ${dataDeInicio} e término em ${dataDeTermino}, com carga horária de ${cargaHoraria} horas.`
    console.log(resposta)
    return resposta
  } catch (error) {
    console.error('Erro ao atualizar turma:', error)
    return 'Erro ao atualizar turma'
  }
}

async function deleteTurma(nome: string, dataDeInicio: Date): Promise<string> {
  try {
    let resposta = ''
    if (!nome || !dataDeInicio) {
      resposta =
        'Nome e data de início são obrigatórios para deletar uma turma.'
      return resposta
    }
    resposta = `A turma ${nome}, com data de início em ${dataDeInicio}, foi deletada com sucesso.`
    console.log(resposta)
    return resposta
  } catch (error) {
    console.error('Erro ao deletar turma:', error)
    return 'Erro ao deletar turma'
  }
}

export const turmaService = {
  createTurma: (
    nome: string,
    turno: string,
    dataDeInicio: Date,
    dataDeTermino: Date,
    cargaHoraria: number,
    professor: string
  ) =>
    createTurma(
      nome,
      turno,
      dataDeInicio,
      dataDeTermino,
      cargaHoraria,
      professor
    ),

  updateTurma: (
    nome: string,
    turno: string,
    dataDeInicio: Date,
    dataDeTermino: Date,
    cargaHoraria: number,
    professor: string
  ) =>
    updateTurma(
      nome,
      turno,
      dataDeInicio,
      dataDeTermino,
      cargaHoraria,
      professor
    ),

  deleteTurma: (nome: string, dataDeInicio: Date) =>
    deleteTurma(nome, dataDeInicio),
}
