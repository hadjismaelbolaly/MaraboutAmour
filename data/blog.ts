export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "surmonter-une-rupture-amoureuse",
    title: "Comment surmonter une rupture amoureuse avec sérénité",
    date: "2026-06-02",
    excerpt:
      "Une rupture bouleverse souvent l'équilibre émotionnel. Voici quelques repères pour traverser cette période avec plus de sérénité.",
    content: [
      "Une rupture amoureuse peut faire naître un sentiment de vide, de doute et parfois de colère. Il est normal de traverser plusieurs étapes avant de retrouver un équilibre intérieur.",
      "Prendre le temps d'accueillir ses émotions, sans les refouler, est souvent une première étape importante. Un accompagnement extérieur bienveillant peut aider à mettre des mots sur ce que l'on ressent.",
      "Chaque histoire étant unique, il n'existe pas de méthode universelle pour tourner la page. C'est pourquoi un accompagnement personnalisé permet d'avancer à son propre rythme, en fonction de sa situation et de ses attentes.",
    ],
  },
  {
    slug: "signes-dune-relation-a-consolider",
    title: "5 signes qu'une relation mérite d'être consolidée",
    date: "2026-05-18",
    excerpt:
      "Certains signaux montrent qu'un couple, malgré les difficultés, garde des bases solides sur lesquelles s'appuyer.",
    content: [
      "Toutes les relations traversent des périodes de doute. Certains signes, cependant, indiquent qu'il existe encore une base solide sur laquelle construire.",
      "La capacité à se parler, même dans le désaccord, la présence d'un respect mutuel, ou encore l'envie commune de trouver des solutions sont souvent de bons indicateurs.",
      "Un accompagnement spirituel et humain peut aider à mettre en lumière ces bases et à les renforcer, pour donner toutes les chances à la relation d'évoluer sereinement.",
    ],
  },
  {
    slug: "confidentialite-consultation-spirituelle",
    title: "Pourquoi la confidentialité est essentielle dans une consultation spirituelle",
    date: "2026-04-30",
    excerpt:
      "La confiance repose avant tout sur la discrétion. Voici pourquoi la confidentialité est au cœur de chaque accompagnement.",
    content: [
      "Parler de sa vie sentimentale à une tierce personne demande une grande confiance. C'est pourquoi la confidentialité est une exigence centrale de tout accompagnement sérieux.",
      "Chaque échange, qu'il ait lieu en présentiel ou à distance par WhatsApp, téléphone ou visioconférence, reste strictement privé.",
      "Cette discrétion permet d'aborder sa situation en toute liberté, sans crainte du jugement extérieur, et favorise un accompagnement plus sincère et plus utile.",
    ],
  },
  {
    slug: "preparer-son-mariage-sereinement",
    title: "Préparer son mariage sereinement : par où commencer ?",
    date: "2026-04-10",
    excerpt:
      "Le mariage est une étape importante. Un accompagnement adapté peut aider les futurs époux à l'aborder avec plus de sérénité.",
    content: [
      "Le mariage marque une étape majeure dans la vie d'un couple, souvent accompagnée d'attentes, de joie, mais aussi de questionnements.",
      "Prendre le temps d'échanger sur ses attentes respectives, sur la communication au sein du futur foyer, permet d'aborder cette union avec plus de confiance.",
      "Un accompagnement spirituel personnalisé peut venir soutenir cette préparation, dans le respect des convictions de chacun des futurs époux.",
    ],
  },
];
