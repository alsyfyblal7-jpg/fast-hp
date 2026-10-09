import { ColorSwatch, ProjectItem, ServiceItem, Testimonial, ArticleItem } from './types';

export const ASSETS = {
  // Local project asset to keep branding stable and deployable on Vercel
  logo: '/logo.svg',
  footerLogo: '/logo.svg',
  // Background and showcase assets from the new site design
  heroBg: 'https://tarmim-decor.com/images/best-contractor-decor-paints-riyadh.webp',
  interiorPaints: 'https://tarmim-decor.com/images/interior-painting-services-riyadh.webp',
  exteriorPaints: 'https://tarmim-decor.com/images/exterior-paints-facades-riyadh.webp',
  chipboard: 'https://tarmim-decor.com/images/chipboard-installation-riyadh.webp',
  marbleAlt: 'https://tarmim-decor.com/images/marble-alternative-installation-riyadh.webp',
  woodAlt: 'https://tarmim-decor.com/images/wpc-wood-alternative-riyadh.webp',
  foam: 'https://tarmim-decor.com/images/foam-decorations-riyadh.webp',
  gypsum: 'https://tarmim-decor.com/images/gypsum-board-installation-riyadh.webp',
  wallpaper: 'https://tarmim-decor.com/images/wallpaper-installation-riyadh.webp',
  parquet: 'https://tarmim-decor.com/images/parquet-flooring-installation-riyadh.webp',
  painter: 'https://tarmim-decor.com/images/professional-painter-riyadh.webp',
  renovation: 'https://tarmim-decor.com/images/home-renovation-services-riyadh.webp',
  insulation: 'https://tarmim-decor.com/images/roof-insulation-services-riyadh.webp',
  // Projects
  projNarjis: 'https://tarmim-decor.com/images/villa-renovation-project-narjis-riyadh.webp',
  projMalqa: 'https://tarmim-decor.com/images/villa-finishing-project-malqa.webp',
  projYasmin: 'https://tarmim-decor.com/images/apartment-renewal-project-yasmin.webp',
  projFacade: 'https://tarmim-decor.com/images/villa-facade-profile-paint-north-riyadh.webp',
};

export const BRAND_NAME = 'إتش بي فاست للدهانات والديكورات';
export const BRAND_SHORT = 'HB FAST';
export const PHONE_NUMBER = '+966508029328';
export const WHATSAPP_NUMBER = '966508029328';
export const TIKTOK_URL = 'https://www.tiktok.com/@oscar_paints05?_r=1&_t=ZS-9AFUwKqBfZk';

export const SERVICES: ServiceItem[] = [
  {
    id: 'interior-paints',
    title: 'دهانات داخلية فاخرة',
    badge: 'الأكثر طلباً',
    imageUrl: ASSETS.interiorPaints,
    description: 'أحدث تقنيات الدهانات الداخلية باستخدام أفضل الماركات الأصلية مثل أوسكار والجزيرة، مع تشطيبات ناعمة وخالية من العيوب وثبات ألوان يدوم طويلاً.',
    keywords: ['دهان جدران', 'ألوان عصرية', 'تشطيب ناعم'],
    features: ['دهانات أوسكار الأصلية والجزيرة', 'تأسيس احترافي وسحب معجون ناعم', 'مقاوم للبقع وقابل للغسيل', 'بدون أي روائح نفاذة وآمن للعائلة']
  },
  {
    id: 'exterior-paints',
    title: 'دهانات خارجية وواجهات',
    imageUrl: ASSETS.exteriorPaints,
    description: 'دهانات خارجية متخصصة لواجهات الفلل والمباني التجارية في حي النرجس والملقا ومناطق شمال الرياض، مقاومة للحرارة والأشعة فوق البنفسجية.',
    keywords: ['بروفايل', 'واجهات فلل', 'مقاوم للحرارة'],
    features: ['دهان بروفايل ألماني عالي التحمل', 'كسر رخام طبيعي فاخر', 'مقاومة الرطوبة وحرارة الشمس', 'ضمان رسمي على ثبات اللون']
  },
  {
    id: 'chipboard',
    title: 'تركيب الشيبورد',
    imageUrl: ASSETS.chipboard,
    description: 'تصاميم عصرية باستخدام ألواح الشيبورد لخلفيات التلفزيون والمجالس والمكاتب، بتشكيلة واسعة من الألوان تضفي لمسة عصرية على منزلك.',
    keywords: ['خلفيات تلفزيون', 'ديكور مجالس', 'ألواح حديثة'],
    features: ['تصاميم خلفيات شاشة مودرن', 'دمج بروفايل ليد مخفي', 'مقاوم للخدش وسهل التنظيف', 'تركيب متقن ودقيق بميزان ليزر']
  },
  {
    id: 'marble-alt',
    title: 'بديل الرخام الفاخر',
    imageUrl: ASSETS.marbleAlt,
    description: 'ألواح بديل الرخام تمنح مجالسك ومداخل منزلك فخامة الحجر الطبيعي بتكلفة اقتصادية، مقاومة للماء والخدش وسهلة التنظيف بألوان جذابة.',
    keywords: ['تكسيات جدارية', 'فخامة الرخام', 'مداخل أنيقة'],
    features: ['مظهر الحجر الطبيعي اللامع', 'مقاومة 100% للرطوبة والماء', 'دمج مع شرائح الاستيل الذهبي', 'سماكات عالية ولمعان كريستالي']
  },
  {
    id: 'wood-alt',
    title: 'بديل الخشب WPC',
    imageUrl: ASSETS.woodAlt,
    description: 'تكسيات جدارية خارجية وداخلية من بديل الخشب الكوري المعالج، مقاومة للماء والحشرات والرطوبة، تمنح منزلك مظهراً طبيعياً دافئاً.',
    keywords: ['خشب معالج', 'مقاوم للماء', 'واجهات خشبية'],
    features: ['شرائح WPC عالية الجودة', 'عزل حراري وصوتي إضافي', 'مظهر خشبي طبيعي بدون صيانة', 'مثالي للواجهات ومداخل الفلل']
  },
  {
    id: 'foam-decor',
    title: 'ديكورات الفوم والبانوهات',
    imageUrl: ASSETS.foam,
    description: 'براويز فوم بديل الجبس بتصاميم كلاسيكية ونيوكلاسيكية فاخرة، خفيفة الوزن وسهلة التركيب، تضفي رقياً وأناقة على جدران الصالات والمجالس.',
    keywords: ['براويز فوم', 'بانوهات جدارية', 'ديكور كلاسيك'],
    features: ['إطارات وبانوهات نيوكلاسيك أنيقة', 'دهان مطابق للون الجدار', 'مقاومة للرطوبة والتشقق', 'أبعاد متناسقة وموزونة هندسياً']
  },
  {
    id: 'gypsum-board',
    title: 'أسقف الجبس بورد',
    imageUrl: ASSETS.gypsum,
    description: 'تصميم وتركيب أسقف معلقة وبيوت نور مخفية بتصاميم عصرية ومودرن تخفي التمديدات وتبرز جمال المكان بإضاءة LED خفية وساحرة.',
    keywords: ['أسقف معلقة', 'إضاءة مخفية', 'جبس مودرن'],
    features: ['جبس فرنسي مقاوم للرطوبة والحرائق', 'توزيع إضاءة ليد مخفية وبيوت نور', 'تثبيت هياكل حديد مجلفن متينة', 'تشطيب أملس جاهز للدهان النهائي']
  },
  {
    id: 'wallpaper',
    title: 'ورق جدران ثلاثي الأبعاد',
    imageUrl: ASSETS.wallpaper,
    description: 'تشكيلة واسعة من ورق الجدران ثلاثي الأبعاد بتصاميم إيطالية وكورية فاخرة، سهل التركيب ومقاوم للرطوبة لغرف النوم والمجالس.',
    keywords: ['ورق 3D', 'تصاميم فاخرة', 'سهل التركيب'],
    features: ['خامات أوروبية وكورية قابلة للمسح', 'مقاومة للرطوبة وتغير الألوان', 'تنسيق متقن للدرزات والفواصل', 'تأثيرات ثلاثية الأبعاد جذابة']
  },
  {
    id: 'parquet',
    title: 'تركيب الباركيه',
    imageUrl: ASSETS.parquet,
    description: 'أرضيات باركيه فاخرة من الخشب الطبيعي والصناعي بمقاومة عالية للخدش والرطوبة، بتشكيلة واسعة تتناسب مع كافة الديكورات المودرن.',
    keywords: ['أرضيات خشبية', 'باركيه طبيعي', 'مقاوم للخدش'],
    features: ['باركيه ألماني وتركي عالي الكثافة', 'طبقة عازلة للصوت والحرارة', 'مقاومة لحركة الأثاث والماء', 'نعلات جدارية مطابقة بالكامل']
  },
  {
    id: 'paints-master',
    title: 'معلم أصباغ محترف',
    imageUrl: ASSETS.painter,
    description: 'فريق من أمهر معلمي الأصباغ بالرياض بخبرة تفوق 10 سنوات في كافة أنواع الدهانات والتعتيق والتدرجات اللونية الحديثة بدقة واحترافية.',
    keywords: ['معلم دهان', 'خبرة طويلة', 'عمل متقن'],
    features: ['خبرة تزيد عن عقد في مشاريع الرياض', 'سرعة إنجاز فائقة وتسليم بالموعد', 'نظافة تامة للمكان وحماية الأرضيات', 'استشارات لاختيار درجات الإضاءة']
  },
  {
    id: 'renovation',
    title: 'ترميم وتشطيب شامل',
    imageUrl: ASSETS.renovation,
    description: 'خدمة تسليم مفتاح متكاملة تشمل كافة أعمال الترميم والتجديد من الألف إلى الياء، نستلم منزلك أو فيلتك ونسلمها جديدة ومطورة بالكامل.',
    keywords: ['ترميم منازل', 'تشطيب كامل', 'تسليم مفتاح'],
    features: ['إعادة تأهيل الشقق والفلل القديمة', 'معالجة الشروخ والسباكة والكهرباء', 'تحديث الديكورات وفق طراز 2025', 'إشراف هندسي وضمان شامل 5 سنوات']
  },
  {
    id: 'roof-insulation',
    title: 'عزل الأسطح والتسربات',
    imageUrl: ASSETS.insulation,
    description: 'عزل مائي وحراري معتمد للأسطح والمسابح والخزانات، لحماية المبنى من حرارة صيف الرياض الشديدة ومنع تسربات مياه الأمطار والرطوبة.',
    keywords: ['عزل مائي', 'عزل فوم', 'معالجة تسربات'],
    features: ['عزل فوم بولي يوريثان معتمد', 'عزل مائي مطاطي للأسطح', 'حماية الخرسانة من التآكل والرطوبة', 'توفير يصل إلى 40% في فاتورة الكهرباء']
  }
];

export const COLOR_PALETTE: ColorSwatch[] = [
  {
    id: 'off-white',
    name: 'أوف وايت',
    nameEn: 'Off-White',
    hex: '#FAF9F6',
    textColor: 'text-slate-800',
    description: 'اللون الملكي الكلاسيكي، يمنح الغرف اتساعاً مريحاً ويعكس الإضاءة بنعومة فائقة.',
    recommendedFor: 'المجالس، الصالات المفتوحة، والممرات الضيقة'
  },
  {
    id: 'warm-beige',
    name: 'بيج دافئ',
    nameEn: 'Warm Beige',
    hex: '#E6D7C3',
    textColor: 'text-slate-800',
    description: 'درجة ترابية هادئة تضفي دفئاً عائلياً وفخامة تليق بالأثاث الكلاسيكي والمودرن.',
    recommendedFor: 'غرف المعيشة، الماستر روم، وغرف الطعام'
  },
  {
    id: 'greige',
    name: 'جريج مودرن',
    nameEn: 'Greige',
    hex: '#C4BEB3',
    textColor: 'text-slate-900',
    description: 'المزيج الساحر بين الرمادي العصري والبيج، الخيار رقم 1 لمهندسي الديكور لعام 2025.',
    recommendedFor: 'الفلل العصرية، المكاتب، ومداخل الشقق'
  },
  {
    id: 'royal-ink',
    name: 'أسود فاست الملكي',
    nameEn: 'HB Fast Noir',
    hex: '#1A1A1A',
    textColor: 'text-white',
    description: 'اللون المميز لهوية إتش بي فاست، يضفي عمقاً فندقياً وفخامة استثنائيةً مع لمسات دافئة أنيقة.',
    recommendedFor: 'جدار الشاشة، المكاتب، ومجالس الضيوف'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'ترميم فيلا بحي النرجس',
    category: 'all',
    categoryLabel: 'ترميم كامل',
    location: 'الرياض - حي النرجس',
    badge: 'تسليم بالضمان 5 سنوات',
    description: 'ترميم شامل لفيلا سكنية شمل دهانات أوسكار الداخلية، بديل الخشب WPC للواجهات والمدخل، وتركيب أسقف جبس بورد مع إنارة مخفية.',
    imageUrl: ASSETS.projNarjis,
    duration: '6 أيام عمل',
    specs: ['دهانات أوسكار المقاومة للبقع', 'بديل خشب كوري معالج', 'إنارة ليد مخفية 3000K']
  },
  {
    id: 'proj-2',
    title: 'تشطيب فيلا بحي الملقا',
    category: 'decor',
    categoryLabel: 'ديكورات وجبس بورد',
    location: 'الرياض - حي الملقا',
    badge: 'طراز فندقي فاخر',
    description: 'تنفيذ تكسيات بديل الرخام خلفيات التلفزيون والصالون الرئيسي مع إطارات فوم نيوكلاسيك وأرضيات باركيه فاخرة.',
    imageUrl: ASSETS.projMalqa,
    duration: '4 أيام عمل',
    specs: ['بديل رخام عروق ذهبية', 'بانوهات فوم ألمانية', 'باركيه ألماني عالي الكثافة']
  },
  {
    id: 'proj-3',
    title: 'تجديد شقة بحي الياسمين',
    category: 'interior',
    categoryLabel: 'دهانات وديكور',
    location: 'الرياض - حي الياسمين',
    badge: 'إنجاز في 48 ساعة',
    description: 'سحب معجون ناعم ودهان كامل أوف وايت وجريج مودرن مع تغليف كامل للأثاث وتسليم نظيف تماماً بدون أي روائح.',
    imageUrl: ASSETS.projYasmin,
    duration: '48 ساعة فقط',
    specs: ['دهانات أوسكار بدون رائحة', 'تغليف أثاث احترافي', 'حماية تامة للأرضيات']
  },
  {
    id: 'proj-4',
    title: 'واجهة فيلا بشمال الرياض',
    category: 'exterior',
    categoryLabel: 'دهانات خارجية',
    location: 'شمال الرياض - حي الصحافة',
    badge: 'مقاوم للعوامل الجوية',
    description: 'تنفيذ دهان بروفايل خارجي عالي المتانة ومقاوم لأشعة الشمس والحرارة مع تطعيمات حجرية وتكسيات WPC عصرية.',
    imageUrl: ASSETS.projFacade,
    duration: '5 أيام عمل',
    specs: ['بروفايل مقاوم للأشعة فوق البنفسجية', 'عزل مائي للواجهة', 'ضمان رسمي 5 سنوات']
  }
];

export const ARTICLES: ArticleItem[] = [
  {
    id: 'art-1',
    title: 'أحدث صيحات الدهانات في الرياض 2025',
    excerpt: 'تعرف على الدرجات اللونية الأكثر طلباً هذا العام، وكيف تختار بين الأوف وايت والجريج لتوسيع المساحات وإبراز الإضاءة.',
    readTime: '3 دقائق قراءة',
    tag: 'نصائح الدهانات'
  },
  {
    id: 'art-2',
    title: 'مميزات بديل الرخام وبديل الخشب',
    excerpt: 'مقارنة شاملة بين الحجر الطبيعي والبدائل الحديثة من حيث التكلفة، سهولة التركيب، الصيانة، ومقاومة الرطوبة في منازل الرياض.',
    readTime: '4 دقائق قراءة',
    tag: 'ديكورات عصرية'
  },
  {
    id: 'art-3',
    title: 'أهمية العزل المائي والحراري للمنازل بالرياض',
    excerpt: 'كيف يحمي عزل الفوم والأسطح مبناك من تسربات مياه الأمطار ويخفض فاتورة التكييف والكهرباء بنسبة تصل إلى 40%.',
    readTime: '3 دقائق قراءة',
    tag: 'عزل وحماية'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'م. فهد القحطاني',
    city: 'الرياض - حي حطين',
    role: 'مالك فيلا سكنية',
    rating: 5,
    comment: 'ما شاء الله سرعة إنجاز وجودة لا تصدق في إتش بي فاست! تم دهان الفيلا بالكامل وتثبيت بديل الرخام والشيبورد في 4 أيام وبنظافة تامة للمكان بدون أي نقطة بوية على البلاط.',
    projectType: 'تشطيب فيلا كاملة'
  },
  {
    id: 't-2',
    name: 'أبو عبد العزيز التميمي',
    city: 'الرياض - حي الياسمين',
    role: 'صاحب شقة دوبلكس',
    rating: 5,
    comment: 'مهندس الديكور حضر للمعاينة المجانية بنفس اليوم وساعدنا في اختيار درجة الجريج المناسبة لإضاءة الصالة، والنتيجة كانت تحفة فندقية بشهادة كل الضيوف.',
    projectType: 'دهانات وديكورات صالة'
  },
  {
    id: 't-3',
    name: 'سارة الشمري',
    city: 'الرياض - حي الملقا',
    role: 'تجديد منزل',
    rating: 5,
    comment: 'أفضل ما عجبني هو الالتزام بالمواعيد واستخدام خامات أوسكار الأصلية بدون أي روائح مزعجة لأن عندي أطفال، ومعاهم شهادة ضمان موثقة.',
    projectType: 'تجديد دهانات غرف النوم'
  }
];

export const FAQS = [
  {
    q: 'ما هي الأحياء والمناطق التي تخدمونها في الرياض؟',
    a: 'نخدم جميع أحياء العاصمة الرياض وضواحيها، مع تركيز خاص وسرعة وصول في أحياء شمال وشرق وغرب الرياض (حي النرجس، الملقا، الياسمين، الصحافة، حطين، العارض، وغيرها).'
  },
  {
    q: 'هل المعاينة والاستشارة الفنية مجانية بالفعل؟',
    a: 'نعم تماماً! زيارة مهندس التشطيبات لموقعك، ورفع المقاسات بدقة، وعرض كتالوجات الألوان وخامات بديل الرخام والخشب وتقديم عرض سعر تفصيلي كلها مجانية 100% بدون أي التزام مالي.'
  },
  {
    q: 'ما هي مدة الضمان المقدمة على أعمال الدهانات والديكور؟',
    a: 'نقدم شهادة ضمان رسمي معتمد تصل إلى 5 سنوات، تشمل ثبات الألوان وعدم تقشر الدهان وجودة تثبيت بديل الرخام والخشب والجبس بورد.'
  },
  {
    q: 'ما هي أفضل أنواع الدهانات المعتمدة لديكم؟',
    a: 'نستخدم كبرى العلامات المعتمدة مثل دهانات أوسكار الأصلية والجزيرة، دهانات صديقة للبيئة بدون روائح، قابلة للغسيل والمسح ومقاومة للبقع والرطوبة.'
  },
  {
    q: 'كم يستغرق تشطيب أو ترميم شقة أو فيلا بالرياض؟',
    a: 'بفضل نظام العمل السريع FAST وطواقم العمل المدربة، تستغرق الشقة السكنية ما بين 48 ساعة إلى 3 أيام عمل، والفلل بين 4 إلى 7 أيام عمل، مع تسليم نظيف وتغليف كامل للأثاث.'
  }
];
