import { useState, useEffect } from 'react';
import PageTitle from "../layout/PageTitle";
import SectionTitle from '@/components/layout/SectionTitle';
import TextBox from '@/components/sobre/TextBox';
import { GestaoPeriodo, Gestao } from "@/types/Gestao";
import GestaoService from "@/utils/services/gestao";
import gestoesAbebd from '@/data/gestaoABEBD';

/**
 * Componente BoxGestao - Exibe informações de gestão de uma associação
 * 
 * @param id - ID do período de gestão
 * @param periodo - Período da gestão (ex: "2022-2025")
 * @param associacao - Associação (padrão: 'ABECIN', opções: 'ABECIN' | 'ABEBD')
 * 
 * Exemplos de uso:
 * <BoxGestao id={1} periodo="2022-2025" /> // Usa ABECIN por padrão
 * <BoxGestao id={1} periodo="2022-2025" associacao="ABEBD" /> // Especifica ABEBD
 */
export default function BoxGestao({ id, periodo, associacao = 'ABECIN' }: GestaoPeriodo) {
    const [gestao, setGestao] = useState<Gestao>({} as Gestao);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            if (associacao === 'ABEBD') {
                // Busca local
                // Preferencialmente por id, mas pode ser por periodo se necessário
                const gestaoLocal = gestoesAbebd[id - 1] || gestoesAbebd.find(g => g.periodo === periodo);
                if (gestaoLocal) {
                    setGestao(gestaoLocal);
                    setError(null);
                } else {
                    setError('Gestão não encontrada nos dados locais.');
                }
                setLoading(false);
            } else {
                // Busca via API (comportamento padrão)
                try {
                    const response = await GestaoService.getGestaoByPeriodoId(id);
                    if ('message' in response && response.message === "Nenhum post encontrado para esta categoria.") {
                        setError("Ainda não existem gestores cadastrados nesse período");
                    } else {
                        setGestao(response as Gestao);
                    }
                }
                catch (err) {
                    if (err instanceof Error) {
                        console.error(err.message);
                        setError(err.message);
                    } else {
                        console.error('Erro desconhecido', err);
                    }
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchData();
    }, [id, periodo, associacao]);

    if (loading)
        return (
            <p>Carregando dados do período: {periodo}...</p>
        );

    const hasDiretoria = Object.values(gestao.diretoria || {}).some(value => value);
    const hasConselhoFiscal = gestao.conselho_fiscal && gestao.conselho_fiscal.length > 0;
    const hasCoordenacaoRegional = Object.values(gestao.coordenacao_regional || {}).some(value => value);
    const hasComissaoEad = gestao.comissao_ead && gestao.comissao_ead.length > 0;

    return (
        <div>
            <PageTitle title={`Gestão ${associacao} ${periodo}`} className="!text-2xl !font-medium mb-12" spanClassName="h-[0.4rem]" />
            {error && (
                <div className="text-center py-4 mt-8">
                    <p className="text-lg text-gray-600">{error}</p>
                </div>
            )}
            <div className="mt-8 flex flex-col gap-32">
                {hasDiretoria && (
                    <section className="flex flex-col gap-14">
                        <SectionTitle title="Diretoria" />
                        <div className="mx-auto flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-lg md:max-w-4xl">
                            <TextBox
                                tipo="cargo"
                                titulo='Presidente:'
                                icone="fa-user"
                                conteudo={gestao.diretoria?.presidente || 'Este campo ainda não foi cadastrado'}
                            />
                            <TextBox
                                tipo="cargo"
                                titulo='Vice-Presidente:'
                                icone="fa-user"
                                conteudo={gestao.diretoria?.vice_presidente || 'Este campo ainda não foi cadastrado'}
                            />
                            <TextBox
                                tipo="cargo"
                                titulo='1ª Secretário(a):'
                                icone="fa-user"
                                conteudo={gestao.diretoria?.primeiro_secretario || 'Este campo ainda não foi cadastrado'}
                            />
                            <TextBox
                                tipo="cargo"
                                titulo='2º Secretário(a):'
                                icone="fa-user"
                                conteudo={gestao.diretoria?.segundo_secretario || 'Este campo ainda não foi cadastrado'}
                            />
                            <TextBox
                                tipo="cargo"
                                titulo='1ª Tesoureiro(a):'
                                icone="fa-user"
                                conteudo={gestao.diretoria?.primeiro_tesoureiro || 'Este campo ainda não foi cadastrado'}
                            />
                            <TextBox
                                tipo="cargo"
                                titulo='2ª Tesoureiro(a):'
                                icone="fa-user"
                                conteudo={gestao.diretoria?.segundo_tesoureiro || 'Este campo ainda não foi cadastrado'}
                            />
                        </div>
                    </section>
                )}
                {hasConselhoFiscal && (
                    <section className="flex flex-col gap-14">
                        <SectionTitle title="Conselho Fiscal" />
                        <div className="mx-auto flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-lg md:max-w-4xl">
                            {gestao.conselho_fiscal?.map((gestor, index) => (
                                <TextBox
                                    key={index}
                                    tipo="cargo"
                                    icone="fa-user"
                                    conteudo={gestor}
                                />
                            ))}
                        </div>
                    </section>
                )}
                {hasCoordenacaoRegional && (
                    <section className="flex flex-col gap-14">
                        <SectionTitle title="Coordenação Regionais" />
                        <div className="mx-auto flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-lg md:max-w-4xl">
                            <TextBox
                                tipo="cargo"
                                titulo="Centro-Oeste:"
                                icone="fa-landmark"
                                conteudo={gestao.coordenacao_regional?.centro_oeste || 'Este campo ainda não foi cadastrado'}
                            />
                            <TextBox
                                tipo="cargo"
                                titulo="Nordeste:"
                                icone="fa-landmark"
                                conteudo={gestao.coordenacao_regional?.nordeste || 'Este campo ainda não foi cadastrado'}
                            />
                            <TextBox
                                tipo="cargo"
                                titulo="Norte:"
                                icone="fa-landmark"
                                conteudo={gestao.coordenacao_regional?.norte || 'Este campo ainda não foi cadastrado'}
                            />
                            <TextBox
                                tipo="cargo"
                                titulo="São Paulo:"
                                icone="fa-landmark"
                                conteudo={gestao.coordenacao_regional?.sao_paulo || 'Este campo ainda não foi cadastrado'}
                            />
                            <TextBox
                                tipo="cargo"
                                titulo="Sudeste:"
                                icone="fa-landmark"
                                conteudo={gestao.coordenacao_regional?.sudeste || 'Este campo ainda não foi cadastrado'}
                            />
                            <TextBox
                                tipo="cargo"
                                titulo="Sul:"
                                icone="fa-landmark"
                                conteudo={gestao.coordenacao_regional?.sul || 'Este campo ainda não foi cadastrado'}
                            />
                        </div>
                    </section>
                )}
                {hasComissaoEad && (
                    <section className="flex flex-col gap-14">
                        <SectionTitle title="Comissão de Educação à Distância" />
                        <div className="mx-auto flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-lg md:max-w-4xl">
                            {gestao.comissao_ead?.map((membro, index) => (
                                <TextBox
                                    key={index}
                                    tipo="cargo"
                                    icone="fa-user-graduate"
                                    conteudo={membro}
                                />
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    )
}