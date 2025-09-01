export default function Cards() {

    const cards = [
        {
            id: 1,
            image: "/ai.png",
            titulo: "Fundamentos da Inteligência Artificial para Vendas",
            subtitulo: "Entenda o básico da IA aplicada ao marketing e vendas!",
            descricao: "Aprenda como a IA pode ser utilizada para otimizar estratégias de vendas e marketing digital, desde a segmentação de clientes até a previsão de demanda.",
            botao: "Acessar"
        },
        {
            id: 2,
            image: "/robotic-hand.png",
            titulo: "Automatização de Vendas com Inteligência Artificial",
            subtitulo: "Automatize processos e aumente suas vendas!",
            descricao: "Explore como automatizar tarefas repetitivas no processo de vendas utilizando IA, como envio de e-mails, pontuação de leads e follow-ups automáticos.",
            botao: "Assinar"
        },
        {
            id: 3,
            image: "/chatbot.png",
            titulo: "Chatbots Inteligentes para Vendas",
            subtitulo: "Use IA para melhorar a comunicação e conversão",
            descricao: "Aprenda a criar e implementar chatbots inteligentes que ajudam a converter visitantes em clientes, respondendo perguntas e conduzindo os usuários no funil de vendas.",
            botao: "Assinar"
        },
        {
            id: 4,
            image: "/sales.png",
            titulo: "Previsão de Vendas com IA",
            subtitulo: "Melhore suas projeções de vendas com IA",
            descricao: "Curso focado em como usar IA para prever vendas futuras, identificar padrões de comportamento e otimizar sua estratégia de negócios.",
            botao: "Assinar"
        },
        {
            id: 5,
            image: "/generative-image.png",
            titulo: "Personalização de Ofertas com IA",
            subtitulo: "Ofereça produtos personalizados com IA",
            descricao: "Descubra como utilizar IA para personalizar ofertas e recomendações para seus clientes, aumentando a taxa de conversão e fidelidade.",
            botao: "Assinar"
        },
        {
            id: 6,
            image: "/leads.png",
            titulo: "Geração de Leads com Inteligência Artificial",
            subtitulo: "Aumente sua base de clientes com IA",
            descricao: "Aprenda a usar IA para encontrar e qualificar leads, melhorando a eficiência do seu time de vendas e acelerando o processo de conversão.",
            botao: "Assinar"
        },
        {
            id: 7,
            image: "/campaign-optimization.png",
            titulo: "Otimização de Vendas com Inteligência Artificial",
            subtitulo: "Melhore seus resultados com IA",
            descricao: "Aprenda a otimizar o processo de vendas usando IA, aplicando algoritmos que ajudam a identificar os melhores clientes, ajustar preços dinâmicos e muito mais.",
            botao: "Assinar"
        },
        {
            id: 8,
            image: "/marketing.png",
            titulo: "Análise de Marketing com Inteligência Artificial",
            subtitulo: "Use IA para tomar decisões mais assertivas",
            descricao: "Curso voltado para a análise de dados de marketing utilizando IA para descobrir insights valiosos, otimizar campanhas e aumentar a eficácia das suas estratégias.",
            botao: "Assinar"
        },
        {
            id: 9,
            image: "/customer-engagement.png",
            titulo: "Inteligência Artificial para Entendimento do Cliente",
            subtitulo: "Compreenda melhor seu cliente com IA",
            descricao: "Curso sobre como usar IA para extrair insights do comportamento dos clientes, criando perfis mais precisos e antecipando suas necessidades.",
            botao: "Assinar"
        }
    ]


    return (
        <>

             <div className="container mx-auto flex flex-col md:flex-row flex-wrap justify-evenly items-center gap-5 m-5">
                {cards.map((card) => (
                    <div key={card.id}
                        className='min-h-100 min-w-100 max-w-120 border-2 bg-card-secondary/30 text-card-primary rounded-xl flex flex-col justify-evenly items-center md:grid md:grid-cols-3 md:justify-items-center'>

                        <img className="size-20 border-neutral-500/50" src={card.image} alt="" />

                        <div className="md:flex md:flex-col md:col-start-2 md:col-span-2">
                            <div className="">
                                <h2 className="text-3xl text-center p-3 md:p-0 font-bold" >{card.titulo}</h2>
                                <h4 className="text-xl text-center">{card.subtitulo}</h4>
                            </div>

                            <span className="">
                                <p className="text-justify py-1 px-6">{card.descricao}</p>
                            </span>

                            <div className="flex mb-2 justify-center">
                                <button className="py-3 px-6 bg-card-button/70 border rounded-lg hover:scale-105 transition">{card.botao}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

           
        </>
    )
}