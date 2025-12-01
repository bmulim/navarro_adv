import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { posts, areas, schedules, users } from './schema';
import * as bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';
import { join } from 'path';

// Carregar variáveis de ambiente
dotenv.config({ path: join(__dirname, '../../.env') });

async function seed() {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error('DATABASE_URL não encontrada no .env');
  }

  const sql = neon(connectionString);
  const db = drizzle(sql, { schema: { posts, areas, schedules, users } });

  console.log('🌱 Iniciando seed do banco de dados...');

  // 1. Criar usuário admin
  console.log('📝 Criando usuário admin...');
  const hashedPassword = await bcrypt.hash('admin123', 10);

  await db
    .insert(users)
    .values({
      name: 'Admin Navarro',
      email: 'admin@navarro.adv.br',
      password: hashedPassword,
    })
    .onConflictDoNothing();

  // 2. Criar posts
  console.log('📄 Criando posts...');
  await db
    .insert(posts)
    .values([
      {
        title: 'Planejamento jurídico empresarial: por que começar agora',
        slug: 'planejamento-juridico-empresarial',
        content: `<p>O planejamento jurídico empresarial é uma ferramenta fundamental para empresas que desejam crescer de forma sustentável e segura.</p>
      
<h2>O que é planejamento jurídico empresarial?</h2>
<p>O planejamento jurídico empresarial consiste em mapear todos os aspectos legais relevantes para a operação de uma empresa, desde a constituição societária até contratos, relações trabalhistas, propriedade intelectual e compliance.</p>

<h2>Por que começar agora?</h2>
<p>Muitas empresas ainda adotam uma postura reativa em relação a questões jurídicas, buscando assessoria apenas quando já enfrentam um problema. Essa abordagem pode ser extremamente prejudicial, resultando em custos elevados, perda de tempo e até mesmo danos à reputação.</p>

<h2>Principais pilares do planejamento jurídico</h2>
<p>Um planejamento jurídico eficaz deve contemplar diversos aspectos, incluindo: estrutura societária adequada ao modelo de negócio, contratos bem elaborados com fornecedores e clientes, políticas de compliance e prevenção de riscos trabalhistas.</p>`,
        excerpt:
          'Entenda como um plano jurídico preventivo reduz litígios e garante decisões estratégicas para o negócio.',
        published: true,
      },
      {
        title: 'Negociação trabalhista eficiente em cenários de crise',
        slug: 'negociacao-trabalhista-eficiente',
        content: `<p>Em momentos de crise econômica, as negociações trabalhistas tornam-se ainda mais sensíveis e estratégicas.</p>

<h2>O contexto das negociações em crise</h2>
<p>Crises econômicas exigem que empresas e colaboradores busquem alternativas criativas e equilibradas. A rigidez pode levar a demissões em massa, ações judiciais e deterioração do clima organizacional.</p>

<h2>Princípios para uma negociação eficiente</h2>
<p>Transparência é essencial: os colaboradores precisam entender a real situação da empresa. Compartilhar dados relevantes cria confiança e facilita o diálogo construtivo.</p>

<h2>Alternativas à demissão</h2>
<p>Antes de optar por dispensas, é importante explorar alternativas como redução proporcional de jornada e salário, férias coletivas, suspensão temporária de contratos com qualificação profissional, e programas de aposentadoria incentivada.</p>`,
        excerpt:
          'Boas práticas para conduzir negociações coletivas e individuais com foco em preservação financeira.',
        published: true,
      },
      {
        title: 'Como estruturar contratos digitais seguros',
        slug: 'contratos-digitais-seguros',
        content: `<p>Com a digitalização dos negócios, contratos eletrônicos tornaram-se cada vez mais comuns.</p>

<h2>Validade jurídica dos contratos digitais</h2>
<p>No Brasil, a Lei nº 14.063/2020 regulamenta o uso de assinaturas eletrônicas em diferentes níveis de segurança. Contratos assinados digitalmente têm a mesma validade jurídica que contratos em papel, desde que observadas as formalidades legais.</p>

<h2>Cláusulas essenciais em contratos digitais</h2>
<p>Todo contrato digital deve conter cláusulas claras sobre identificação das partes, objeto do contrato, preço e forma de pagamento, prazo de vigência, condições de rescisão e foro competente para resolução de conflitos.</p>

<h2>Proteção de dados e privacidade</h2>
<p>A Lei Geral de Proteção de Dados (LGPD) estabelece obrigações rigorosas para empresas que coletam, armazenam e processam dados pessoais. Contratos digitais devem contemplar cláusulas específicas sobre essas questões.</p>`,
        excerpt:
          'Saiba quais cláusulas não podem faltar em contratos digitais para proteger dados e garantir validade jurídica.',
        published: true,
      },
    ])
    .onConflictDoNothing();

  // 3. Criar áreas de atuação
  console.log('⚖️  Criando áreas de atuação...');
  await db
    .insert(areas)
    .values([
      {
        title: 'Direito Empresarial',
        description:
          'Consultoria completa para empresas em todas as fases de crescimento, com foco em governança, contratos e resolução estratégica de conflitos.',
        icon: '🏢',
        order: '1',
      },
      {
        title: 'Direito Civil',
        description:
          'Atuação em demandas cíveis complexas, priorizando acordos eficientes e proteção patrimonial para pessoas físicas e jurídicas.',
        icon: '⚖️',
        order: '2',
      },
      {
        title: 'Direito do Trabalho',
        description:
          'Estratégias preventivas e contenciosas alinhadas às demandas do mercado atual, reduzindo riscos e fortalecendo relações de trabalho.',
        icon: '👔',
        order: '3',
      },
    ])
    .onConflictDoNothing();

  // 4. Criar horários de atendimento
  console.log('🕒 Criando horários de atendimento...');
  await db
    .insert(schedules)
    .values([
      {
        dayOfWeek: 'Segunda-feira',
        openTime: '09:00',
        closeTime: '18:00',
      },
      {
        dayOfWeek: 'Terça-feira',
        openTime: '09:00',
        closeTime: '18:00',
      },
      {
        dayOfWeek: 'Quarta-feira',
        openTime: '09:00',
        closeTime: '18:00',
      },
      {
        dayOfWeek: 'Quinta-feira',
        openTime: '09:00',
        closeTime: '18:00',
      },
      {
        dayOfWeek: 'Sexta-feira',
        openTime: '09:00',
        closeTime: '17:00',
      },
    ])
    .onConflictDoNothing();

  console.log('✅ Seed concluído com sucesso!');
  console.log('\n📊 Dados criados:');
  console.log(
    '  - 1 usuário admin (email: admin@navarro.adv.br, senha: admin123)',
  );
  console.log('  - 3 posts publicados');
  console.log('  - 3 áreas de atuação');
  console.log('  - 5 horários de atendimento');

  process.exit(0);
}

seed().catch((error) => {
  console.error('❌ Erro ao executar seed:', error);
  process.exit(1);
});
