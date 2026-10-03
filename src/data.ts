import { ColorSwatch, ProjectItem, ServiceItem, Testimonial } from './types';

// Asset URLs directly from the user's provided HTML code
export const ASSETS = {
  headerLogo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwlr_WR9V77pCuKR491fqfl2UWCFNfy9bUsvJMqSs0LlqH-Q8sUbDLbWkTeq6iwqIdoTZOIj_PjKlUYhFnLhKJCDarvQzKx-ZRONEYJOqbsco2JOolX9bgvlvGObFz9ndukygoC45AuyU4AZZy37SWzhK91qeJpx68gMfvPW9mhXiMvrOLHUf3d7VTseag6uDeb-90CYdziOgw7zVAoCWRSu1fK7XCDWb-af_lmPRr4v_PCO-Y4tJLzjx4aUnzvG1hfU4',
  footerLogo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMw_f4j9ZsOh_4g_PnJwzhBPGj0CHR0e1SWKQ13sOunlXBWFhySDNY7h6gAVG_zSnfUmfEjbJOHJsP-uv7bIin5jhftTPDdJKFYW2f3vudHOepr95e1KxPM8MxAkTrOEcs4dXtJ0jkRP3mtd6KCw0CHp5QbY0lt4yl0veq1iL-2iu7Gf_zdZcGvoxYc9A4FRqzaIdOrEQS2CfCWvhqemaDaIPBKw7C0OOJcxidm9LXmDsba0ve6pjdVkUrlO4lZnKFdiQ',
  project1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBx5AfnnJVqUbBIFyxQO6koR7mqIlHa_mtQjunCa5Ml6evm9sKvPFcTt35XRjZyJ49Y50HI9ZLRwnu94SKra2HepknHGjRDgTSBlxhfQlgw8jUXrmksvBuGZR978JdBEF7doQ-lUJJlzlexLCjPHAKSVFNiujrufM5ZzFFnSE8-x-we6hwIkABsbwgRRZD3JK3gie8HAOU8sqNAhwn_lAsCEtbYILB4MaaaeaemkSJLtPa-piw4BWe13A',
  project2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCn_ysG7c4KTc5dvKjtc4fB6378vD92o4TnvtT7pqZdx52G-aQ9wl1iGCgz6Z8MINb1vGG-RdWjsJXlGxoXvzLdZkPgo2MCoZJXQhjbdnnr087Qic-KdlqAHnCemFcBRJPNHbtcfvK6ILDQ-1w51E2j6jJjOj55n97fJXxcsf6w_rIlwNnZWkKtuZUmGK1SCakakXIcx-6EAQb9kXXelWyYzBtT8oUsux3G8yIMiF6MgFW6omvMZHKCSg',
};

export const PHONE_NUMBER = '+966508029328';
export const WHATSAPP_NUMBER = '966508029328';

export const SERVICES: ServiceItem[] = [
  {
    id: 'interior-paints',
    title: 'دهانات داخلية وخارجية',
    badge: 'الأكثر طلباً',
    description: 'تنفيذ أحدث ألوان المودرن السادة، البويات الديكورية (مارمو، روشن، خيال)، والبروفايل ومقاومات العوامل الجوية الخارجية.',
    iconType: 'paint',
    colorClass: 'text-[#0052B4]',
    bgClass: 'bg-blue-100/80',
    features: [
      'دهانات مائية وبلاستيكية صديقة للبيئة بدون رائحة',
      'تعتيق وديكورات ملمس الرخام والخيال والروشن',
      'بروفايل خارجي عازل للحرارة والرطوبة وأشعة الشمس',
      'معالجة وتأسيس الجدران وسحب معجون على أعلى مستوى'
    ]
  },
  {
    id: 'gypsum-decor',
    title: 'جبس بورد وأسقف معلقة',
    description: 'تصميم وتركيب الأسقف المستعارة، بيوت النور، الإضاءات المخفية، وتشكيلات الحوائط للشاشات والصالونات الفاخرة.',
    iconType: 'gypsum',
    colorClass: 'text-[#FF8A00]',
    bgClass: 'bg-orange-100/80',
    features: [
      'أسقف فرنسية مستعارة مع بيوت نور مخفية',
      'تصميم مكتبات شاشات وبديل رخام مدمج بالجبس',
      'مقاومة فائقة للرطوبة والحرائق',
      'تسليم بميزان ليزر لضمان الاستواء التام'
    ]
  },
  {
    id: 'marble-wood-alt',
    title: 'بديل الرخام وبديل الخشب',
    description: 'تركيب شرائح الخشب المعالج (WPC)، ألواح بديل الرخام ثلاثية الأبعاد، وتكسيات الجدران وورق الحائط الكوري الفاخر.',
    iconType: 'panels',
    colorClass: 'text-sky-700',
    bgClass: 'bg-sky-100',
    features: [
      'ألواح PVC عازلة ومقاومة للماء والخدش',
      'شرائح WPC خشبية بملمس طبيعي وألوان متعددة',
      'تطعيم بأشرطة ستيل ذهبية وفضية وإضاءة ليد مخفية',
      'تثبيت احترافي بمواد لاصقة قوية بدون تشويه الجدار'
    ]
  },
  {
    id: 'waterproofing',
    title: 'عزل الأسطح ومعالجة الرطوبة',
    description: 'حلول جذرية لتقشير الدهان، معالجة الشروخ والتشققات، والعزل المائي والحراري للأسطح والواجهات بضمان معتمد.',
    iconType: 'shield',
    colorClass: 'text-indigo-700',
    bgClass: 'bg-indigo-100',
    features: [
      'كشف ومعالجة أسباب الرطوبة قبل الدهان النهائي',
      'عزل مائي وحراري للأسطح والمسابح والحمامات',
      'معالجة التشققات الإنشائية بمعجون ألماني مطاطي',
      'ضمان خطي معتمد على عدم عودة الرطوبة'
    ]
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
    id: 'royal-blue',
    name: 'رويال بلو',
    nameEn: 'HB Royal',
    hex: '#003D8C',
    textColor: 'text-white',
    description: 'لون الجدار المميز (Feature Wall)، يضفي لمسة فندقية باذخة مع الإنارة الذهبية الخافتة.',
    recommendedFor: 'جدار خلفية السرير، جدار الشاشة، وغرف الاجتماعات'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'دهانات داخلية فاخرة مع جبس بورد وإنارة خفية',
    category: 'interior',
    categoryLabel: 'دهانات داخلية',
    location: 'فيلا مودرن • الرياض',
    badge: 'تم التسليم بالضمان',
    description: 'استخدام دهانات مقاومة للبقع بدرجات الجريج المودرن مع دمج بديل الخشب للجدار الرئيسي.',
    imageUrl: ASSETS.project1,
    duration: '4 أيام عمل',
    specs: ['خامات جوتن فينوماستيك', 'جبس بورد مقاوم للرطوبة', 'إنارة ليد وورم مخفية']
  },
  {
    id: 'proj-2',
    title: 'تنسيق متكامل لبديل الرخام وألواح الـ WPC',
    category: 'decor',
    categoryLabel: 'بديل رخام وخشب',
    location: 'مجلس رئيسي • شقة راقية',
    badge: 'تسليم فندقي',
    description: 'إضفاء طابع فندقي فاخر عبر دمج البروفايل الليد المخفي مع العروق الذهبية.',
    imageUrl: ASSETS.project2,
    duration: 'يومان عمل',
    specs: ['ألواح بديل رخام عالي اللمعان', 'شرائح WPC خشبية', 'ستيل ذهبي مقاوم للصدأ']
  },
  {
    id: 'proj-3',
    title: 'تجديد دهانات شقة سكنية متكاملة وسحب معجون',
    category: 'interior',
    categoryLabel: 'دهانات داخلية',
    location: 'حي النرجس • الرياض',
    badge: 'تسليم في 48 ساعة',
    description: 'تجديد شامل مع تغليف كامل للأثاث والأرضيات ودهان باليتة أوف وايت المهدئة.',
    imageUrl: ASSETS.project1,
    duration: '48 ساعة فقط',
    specs: ['دهانات بدون رائحة', 'حماية تامة للأرضيات', 'ضمان 5 سنوات']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'م. فهد القحطاني',
    city: 'الرياض - حي حطين',
    role: 'مالك فيلا سكنية',
    rating: 5,
    comment: 'ما شاء الله سرعة إنجاز لا تصدق في إتش بي فاست! تم دهان الفيلا بالكامل وتثبيت بديل الرخام في 4 أيام وبنظافة تامة للمكان بدون أي نقطة بوية على البلاط.',
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
    comment: 'أفضل ما عجبني هو الالتزام بالمواعيد واستخدام خامات جوتن الأصلية بدون أي روائح مزعجة لأن عندي أطفال، ومعاهم شهادة ضمان موثقة.',
    projectType: 'تجديد دهانات غرف النوم'
  }
];

export const FAQS = [
  {
    q: 'هل المعاينة الفنية مجانية بالفعل ولا تترتب عليها أي التزامات؟',
    a: 'نعم تماماً! يقوم مهندسنا بزيارة موقعك بالرياض أو المناطق المجاورة، ورفع المقاسات بدقة، وعرض كتالوجات الألوان الحقيقية وتقديم عرض سعر تفصيلي مجاناً 100% وبدون أي التزام.'
  },
  {
    q: 'كم يستغرق دهان شقة عادية 3 إلى 4 غرف وصالة؟',
    a: 'بفضل طواقم العمل المتخصصة ونظام العمل السريع (FAST)، ننجز الشقة خلال 48 إلى 72 ساعة كحد أقصى مع التغليف الاحترافي والتنظيف بعد الانتهاء.'
  },
  {
    q: 'هل توفرون ضماناً خطياً على الأعمال؟',
    a: 'نعم، نقدم شهادة ضمان رسمي معتمد لمدة تصل إلى 5 سنوات تشمل ثبات الألوان، عدم تشقق المعجون، وجودة التركيب.'
  },
  {
    q: 'هل الخامات المستخدمة بدون روائح وآمنة للأطفال؟',
    a: 'نعتمد فقط المنتجات الأصلية عالية الجودة (جوتن، الجزيرة) التي تتوافق مع أعلى المعايير الصحية والبيئية بدون أي روائح نفاذة تضر بالحوامل أو الأطفال أو مرضى الحساسية.'
  }
];
