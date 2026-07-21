export interface Service {
  slug: string;
  title: string;
  image?: string;
  excerpt: string;
  description: string;
  keywords: string[];
}

export const featuredServices: Service[] = [
  {
    slug: "reconciliation-de-couple",
    title: "Réconciliation de couple",
    image: "/images/service-reconciliation.jpg",
    excerpt:
      "Renouer le dialogue après une crise et retrouver un climat de confiance dans le couple.",
    description:
      "Une rupture ou une crise de couple laisse souvent un sentiment de vide et d'incompréhension. Cet accompagnement spirituel est conçu pour les personnes qui souhaitent renouer le dialogue avec leur partenaire et retrouver un climat de confiance. À travers une analyse personnalisée de votre situation sentimentale, un travail spirituel adapté est proposé pour favoriser le rapprochement, apaiser les tensions et poser les bases d'une relation plus stable.",
    keywords: ["réconciliation de couple", "crise conjugale", "renouer avec son partenaire"],
  },
  {
    slug: "chance-en-amour",
    title: "Chance en amour",
    image: "/images/service-chance-amour.jpg",
    excerpt: "Ouvrir votre vie sentimentale à des rencontres plus positives et sereines.",
    description:
      "Certaines personnes traversent une période où les rencontres amoureuses semblent toujours se solder par des déceptions. Ce service propose un accompagnement spirituel destiné à favoriser un climat plus positif autour de votre vie sentimentale, afin de vous ouvrir à de nouvelles opportunités et d'aborder vos relations futures avec plus de confiance et de sérénité.",
    keywords: ["chance en amour", "attirer la chance sentimentale", "rituel spirituel amour"],
  },
  {
    slug: "protection-du-couple",
    title: "Protection du couple",
    image: "/images/service-protection-couple.jpg",
    excerpt: "Préserver votre relation des tensions et influences extérieures négatives.",
    description:
      "Un couple peut parfois être fragilisé par des tensions extérieures, des jalousies ou des influences négatives venant de l'entourage. Cet accompagnement vise à instaurer un climat de protection autour de votre relation, afin de préserver la stabilité, la confiance mutuelle et la sérénité au sein du couple.",
    keywords: ["protection du couple", "protection spirituelle relation", "stabilité conjugale"],
  },
  {
    slug: "retour-affectif",
    title: "Retour affectif",
    image: "/images/service-retour-affectif.jpg",
    excerpt: "Un accompagnement pour les personnes qui souhaitent renouer avec l'être aimé.",
    description:
      "Le retour affectif s'adresse aux personnes qui souhaitent tenter de renouer avec un ancien partenaire après une séparation. Chaque situation étant unique, un échange approfondi permet de mieux comprendre l'histoire vécue avant de proposer un accompagnement spirituel adapté à vos attentes, dans le respect de la confidentialité.",
    keywords: ["retour affectif", "renouer avec son ex", "retour de l'être aimé"],
  },
  {
    slug: "attirer-une-nouvelle-relation",
    title: "Attirer une nouvelle relation",
    image: "/images/service-attirer-nouvelle-relation.jpg",
    excerpt: "Se réouvrir à l'amour et préparer le terrain à une rencontre sincère.",
    description:
      "Après une période de solitude ou de déceptions amoureuses, certaines personnes ressentent le besoin d'un accompagnement pour se réouvrir à l'amour. Ce service propose un travail spirituel destiné à préparer le terrain à une nouvelle rencontre, en favorisant la confiance en soi et une attitude ouverte face aux opportunités sentimentales.",
    keywords: ["attirer une nouvelle relation", "trouver l'amour", "nouvelle histoire d'amour"],
  },
  {
    slug: "desenvoutement-amoureux",
    title: "Désenvoûtement amoureux",
    image: "/images/service-desenvoutement.jpg",
    excerpt: "Identifier et lever les énergies négatives qui pèsent sur votre relation.",
    description:
      "Certaines difficultés sentimentales semblent résister à toute logique : disputes récurrentes, éloignement soudain, malchance répétée. Ce service propose un accompagnement spirituel destiné à identifier les énergies négatives qui pourraient peser sur votre relation, dans une démarche de purification et de libération, avec sérieux et écoute.",
    keywords: ["désenvoûtement amoureux", "blocage sentimental spirituel", "énergies négatives couple"],
  },
  {
    slug: "attirer-lamour",
    title: "Attirer l'amour",
    image: "/images/service-attirer-amour.jpg",
    excerpt: "Ouvrir votre cœur et créer un climat intérieur propice à une relation épanouissante.",
    description:
      "Attirer l'amour dans sa vie demande parfois plus qu'une simple rencontre : un climat intérieur propice à la confiance et à l'ouverture. Cet accompagnement spirituel personnalisé vous aide à préparer cette étape, en travaillant sur l'énergie qui vous entoure et votre disposition à accueillir une nouvelle relation.",
    keywords: ["attirer l'amour", "rituel amour", "énergie amoureuse positive"],
  },
  {
    slug: "harmonie-du-couple",
    title: "Harmonie du couple",
    image: "/images/service-harmonie-couple.jpg",
    excerpt: "Favoriser le dialogue, la compréhension mutuelle et la stabilité de la relation.",
    description:
      "Une relation harmonieuse repose sur l'écoute, la communication et le respect mutuel. Lorsque ces éléments s'effritent, un accompagnement spirituel peut aider à restaurer un climat plus serein entre les deux partenaires, en apaisant les tensions et en favorisant un dialogue plus constructif au quotidien.",
    keywords: ["harmonie du couple", "stabilité relation amoureuse", "dialogue dans le couple"],
  },
  {
    slug: "consolidation-de-la-relation",
    title: "Consolidation de la relation",
    image: "/images/service-consolidation.jpg",
    excerpt: "Renforcer les fondations du couple et bâtir une relation durable.",
    description:
      "Certains couples souhaitent aller plus loin dans leur engagement et renforcer les fondations de leur relation. Ce service propose un accompagnement destiné à consolider les liens affectifs, à approfondir la complicité et à préparer sereinement les étapes futures de la relation, comme la vie commune ou le mariage.",
    keywords: ["consolidation du couple", "renforcer sa relation", "couple durable"],
  },
  {
    slug: "protection-spirituelle",
    title: "Protection spirituelle",
    image: "/images/service-protection-spirituelle.jpg",
    excerpt: "Se prémunir des énergies négatives et retrouver la sérénité au quotidien.",
    description:
      "La protection spirituelle s'adresse à toute personne souhaitant se prémunir contre des influences négatives, qu'elles touchent sa vie sentimentale, familiale ou personnelle. Cet accompagnement vise à instaurer un climat de sécurité intérieure et de sérénité, dans le respect de vos convictions.",
    keywords: ["protection spirituelle", "se protéger des énergies négatives", "purification spirituelle"],
  },
  {
    slug: "rupture-de-mauvais-liens",
    title: "Rupture de mauvais liens",
    image: "/images/service-rupture-liens.jpg",
    excerpt: "Se détacher d'une relation toxique pour retrouver sa liberté d'esprit.",
    description:
      "Certains liens affectifs, bien qu'intenses, peuvent devenir source de souffrance ou empêcher d'avancer. Ce service accompagne les personnes souhaitant se détacher d'une relation toxique ou d'un attachement qui ne leur correspond plus, pour retrouver la liberté d'esprit nécessaire à une nouvelle étape de vie.",
    keywords: ["rupture de mauvais liens", "relation toxique", "se libérer d'une relation"],
  },
  {
    slug: "guidance-amoureuse",
    title: "Guidance amoureuse",
    image: "/images/service-guidance-amoureuse.jpg",
    excerpt: "Un échange personnalisé pour clarifier vos ressentis et vos décisions.",
    description:
      "Face à un choix difficile ou une situation sentimentale incertaine, il est parfois utile d'obtenir un regard extérieur bienveillant. La guidance amoureuse propose un échange personnalisé pour vous aider à clarifier vos ressentis et à prendre des décisions en accord avec vos attentes profondes.",
    keywords: ["guidance amoureuse", "conseils sentimentaux", "aide à la décision amoureuse"],
  },
  {
    slug: "preparation-au-mariage",
    title: "Préparation au mariage",
    image: "/images/service-mariage-1.jpg",
    excerpt: "Accompagner les futurs époux vers une union solide et sereine.",
    description:
      "Le mariage marque une étape importante dans la vie d'un couple. Cet accompagnement s'adresse aux futurs époux souhaitant aborder cette union avec sérénité, en travaillant sur la solidité du lien, la communication et la préparation spirituelle de cette nouvelle étape de vie commune.",
    keywords: ["préparation au mariage", "mariage rapide", "union durable"],
  },
];

// Services complémentaires, présentés sans photo dans une liste dédiée
export const additionalServices: Service[] = [
  {
    slug: "retour-immediat-de-letre-aime",
    title: "Retour immédiat de l'être aimé",
    excerpt: "Accompagnement pour accélérer le rapprochement avec une personne aimée.",
    description: "Accompagnement pour accélérer le rapprochement avec une personne aimée.",
    keywords: ["retour immédiat", "retour de l'être aimé"],
  },
  {
    slug: "trouver-son-ame-soeur",
    title: "Trouver son âme sœur",
    excerpt: "Identifier et attirer la relation qui vous correspond vraiment.",
    description: "Accompagnement pour identifier et attirer la relation qui vous correspond.",
    keywords: ["âme sœur", "trouver l'amour véritable"],
  },
  {
    slug: "fidelite-du-partenaire",
    title: "Fidélité du partenaire",
    excerpt: "Restaurer la confiance et la fidélité au sein du couple.",
    description: "Accompagnement pour restaurer la confiance et la fidélité au sein du couple.",
    keywords: ["fidélité", "confiance dans le couple"],
  },
  {
    slug: "deblocage-sentimental",
    title: "Déblocage sentimental",
    excerpt: "Pour les personnes ayant l'impression que leur vie amoureuse stagne.",
    description: "Accompagnement pour les personnes ayant l'impression que leur vie amoureuse stagne.",
    keywords: ["déblocage sentimental", "vie amoureuse bloquée"],
  },
  {
    slug: "interpretation-des-reves",
    title: "Interprétation des rêves",
    excerpt: "Analyse spirituelle de vos rêves liés à votre vie sentimentale.",
    description: "Analyse spirituelle de vos rêves liés à votre vie sentimentale.",
    keywords: ["interprétation des rêves", "rêves amoureux"],
  },
  {
    slug: "guidance-spirituelle",
    title: "Guidance spirituelle",
    excerpt: "Un accompagnement plus large pour éclairer vos choix de vie.",
    description: "Un accompagnement pour éclairer vos choix de vie à la lumière de la tradition spirituelle.",
    keywords: ["guidance spirituelle", "conseils de vie"],
  },
  {
    slug: "harmonisation-energetique",
    title: "Harmonisation énergétique",
    excerpt: "Rééquilibrage des énergies personnelles et relationnelles.",
    description: "Rééquilibrage des énergies personnelles et relationnelles.",
    keywords: ["harmonisation énergétique", "équilibre énergie"],
  },
  {
    slug: "retour-du-conjoint",
    title: "Retour du conjoint",
    excerpt: "Accompagnement pour un conjoint qui s'est éloigné.",
    description: "Accompagnement pour un conjoint qui s'est éloigné.",
    keywords: ["retour du conjoint", "conjoint éloigné"],
  },
  {
    slug: "communication-dans-le-couple",
    title: "Communication dans le couple",
    excerpt: "Conseils pour rétablir le dialogue entre partenaires.",
    description: "Conseils pour rétablir le dialogue et améliorer la compréhension entre partenaires.",
    keywords: ["communication couple", "dialogue conjugal"],
  },
  {
    slug: "relations-a-distance",
    title: "Relations à distance",
    excerpt: "Accompagnement adapté aux couples séparés géographiquement.",
    description: "Accompagnement adapté aux couples séparés par la distance.",
    keywords: ["relation à distance", "couple longue distance"],
  },
  {
    slug: "relations-compliquees",
    title: "Relations compliquées",
    excerpt: "Analyse et conseils pour des situations amoureuses complexes.",
    description: "Analyse et conseils concernant les relations complexes ou incertaines.",
    keywords: ["relation compliquée", "situation amoureuse complexe"],
  },
  {
    slug: "accompagnement-apres-une-rupture",
    title: "Accompagnement après une rupture",
    excerpt: "Soutien et conseils pour retrouver confiance en soi.",
    description: "Soutien et conseils pour retrouver confiance en soi après une séparation.",
    keywords: ["après une rupture", "confiance en soi"],
  },
  {
    slug: "purification-spirituelle",
    title: "Purification spirituelle",
    excerpt: "Un travail de nettoyage énergétique personnel.",
    description: "Un accompagnement de purification spirituelle pour retrouver clarté et sérénité.",
    keywords: ["purification spirituelle", "nettoyage énergétique"],
  },
  {
    slug: "eloignement-dun-rival-amoureux",
    title: "Éloignement d'un rival amoureux",
    excerpt: "Accompagnement pour apaiser une situation de rivalité affective.",
    description: "Accompagnement pour apaiser une situation de rivalité affective au sein du couple.",
    keywords: ["rival amoureux", "rivalité affective"],
  },
  {
    slug: "renforcement-de-lattachement",
    title: "Renforcement de l'attachement",
    excerpt: "Approfondir la complicité et l'attachement mutuel.",
    description: "Accompagnement pour approfondir la complicité et l'attachement au sein du couple.",
    keywords: ["attachement", "complicité amoureuse"],
  },
  {
    slug: "bemediction-du-foyer",
    title: "Bénédiction du foyer",
    excerpt: "Instaurer un climat de paix et de sérénité dans le foyer.",
    description: "Accompagnement spirituel pour instaurer un climat de paix dans le foyer conjugal.",
    keywords: ["bénédiction du foyer", "paix familiale"],
  },
  {
    slug: "stabilite-emotionnelle",
    title: "Stabilité émotionnelle",
    excerpt: "Retrouver un équilibre intérieur face aux épreuves sentimentales.",
    description: "Accompagnement pour retrouver un équilibre intérieur face aux épreuves sentimentales.",
    keywords: ["stabilité émotionnelle", "équilibre intérieur"],
  },
  {
    slug: "preparation-aux-fiancailles",
    title: "Préparation aux fiançailles",
    excerpt: "Aborder sereinement l'étape des fiançailles.",
    description: "Accompagnement pour aborder sereinement l'étape des fiançailles.",
    keywords: ["fiançailles", "préparation fiançailles"],
  },
  {
    slug: "reveil-de-la-flamme-amoureuse",
    title: "Réveil de la flamme amoureuse",
    excerpt: "Raviver la passion et la complicité dans une relation installée.",
    description: "Accompagnement pour raviver la passion et la complicité dans une relation installée.",
    keywords: ["flamme amoureuse", "raviver la passion"],
  },
  {
    slug: "apaisement-des-disputes-frequentes",
    title: "Apaisement des disputes fréquentes",
    excerpt: "Retrouver un climat serein malgré des tensions répétées.",
    description: "Accompagnement pour retrouver un climat serein malgré des tensions et disputes répétées.",
    keywords: ["disputes de couple", "apaisement conjugal"],
  },
  {
    slug: "renouveau-apres-un-divorce",
    title: "Renouveau après un divorce",
    excerpt: "Se reconstruire et envisager sereinement l'avenir.",
    description: "Accompagnement pour se reconstruire et envisager sereinement l'avenir après un divorce.",
    keywords: ["après un divorce", "renouveau amoureux"],
  },
  {
    slug: "equilibre-vie-professionnelle-et-couple",
    title: "Équilibre vie professionnelle et couple",
    excerpt: "Concilier exigences professionnelles et vie affective.",
    description: "Accompagnement pour concilier exigences professionnelles et épanouissement de la vie de couple.",
    keywords: ["équilibre vie pro couple", "conciliation travail amour"],
  },
  {
    slug: "accompagnement-parents-celibataires",
    title: "Accompagnement pour parents célibataires",
    excerpt: "Un soutien pour envisager une nouvelle relation en tant que parent seul.",
    description: "Un accompagnement pour les parents célibataires souhaitant envisager une nouvelle relation.",
    keywords: ["parent célibataire", "nouvelle relation en tant que parent"],
  },
  {
    slug: "consultation-couples-union-libre",
    title: "Consultation pour couples en union libre",
    excerpt: "Un accompagnement adapté à toutes les formes d'union.",
    description: "Un accompagnement adapté aux couples en union libre souhaitant renforcer leur relation.",
    keywords: ["union libre", "consultation couple"],
  },
  {
    slug: "renforcement-du-respect-mutuel",
    title: "Renforcement du respect mutuel",
    excerpt: "Restaurer un climat de respect et de considération dans le couple.",
    description: "Accompagnement pour restaurer un climat de respect et de considération mutuelle dans le couple.",
    keywords: ["respect mutuel", "respect dans le couple"],
  },
  {
    slug: "seconde-chance-amoureuse",
    title: "Guidance pour une seconde chance amoureuse",
    excerpt: "Envisager une nouvelle relation après une période difficile.",
    description: "Accompagnement pour envisager sereinement une seconde chance amoureuse après une période difficile.",
    keywords: ["seconde chance amoureuse", "nouvelle relation"],
  },
  {
    slug: "consultation-en-ligne",
    title: "Consultation en ligne",
    excerpt: "Consultations par WhatsApp, téléphone ou visioconférence, où que vous soyez.",
    description: "Consultations réalisées par WhatsApp, téléphone ou visioconférence, où que vous soyez dans le monde.",
    keywords: ["consultation en ligne", "consultation whatsapp"],
  },
  {
    slug: "consultation-en-presentiel",
    title: "Consultation en présentiel",
    excerpt: "Consultations sur rendez-vous à Ouagadougou.",
    description: "Consultations sur rendez-vous, en présentiel à Ouagadougou.",
    keywords: ["consultation en présentiel", "rendez-vous Ouagadougou"],
  },
];

export const allServices: Service[] = [...featuredServices, ...additionalServices];

export function getServiceBySlug(slug: string): Service | undefined {
  return allServices.find((s) => s.slug === slug);
}
