/**
 * Los Bocheros Restó · Lamadrid Estate Wines
 * Interactive Menu, Sommelier Wine Guide & WhatsApp Booking Application
 * Official Reservations WhatsApp: +54 9 2615 54-8460
 * Multi-season: Primavera (A la Carta) & Otoño (7 Pasos)
 * Multilingual: ES, EN, PT, DE-CH (Suizo / Deutsch)
 */

document.addEventListener('DOMContentLoaded', () => {
  const OFFICIAL_WA_PHONE = '5492615548460';

  // --- Complete Multilingual Dictionary ---
  const translations = {
    es: {
      tab_spring: 'Menú Primavera (Carta)',
      tab_autumn: 'Menú Otoño (7 Pasos)',
      filter_all: 'Todos los Maridajes',
      filter_standard: 'Clásico',
      filter_upgrade: 'Upgrade',
      print_btn: 'Imprimir',
      nav_reserve_btn: 'Reservar',
      rest_pretitle: 'RESTAURANTE DE BODEGA',
      spring_hero_tag: 'TEMPORADA PRIMAVERA 2026',
      spring_hero_title: 'MENÚ PRIMAVERA',
      spring_hero_type: 'A LA CARTA',
      autumn_hero_tag: 'TEMPORADA OTOÑO 2026',
      autumn_hero_title: 'MENÚ OTOÑO',
      autumn_hero_type: 'SIETE PASOS',
      hero_book_cta: 'Reservar Mesa · +54 9 2615 54-8460',
      leave_review: '¡Deje su reseña aquí! / Leave your review here!',
      terroir_pill: 'Finca Las Compuertas · 1.050 m.s.n.m. · Viñas Centenarias',
      allergy_notice: 'Consulte a nuestro personal sobre restricciones alimentarias y alergias.',
      veg_notice: '(Disponemos de adaptaciones vegetarianas, veganas y celíacas con previo aviso)',
      sommelier_hint: 'Toque cualquier vino de la carta para explorar su ficha técnica y notas de cata del Sommelier.',
      diet_all: 'Todos los Platos',
      diet_veg: 'Vegetariano',
      diet_fire: 'Fuegos & Carnes',
      diet_chef: 'Especialidades',
      tag_veg: '🌱 Vegetariano',
      tag_fire: '🔥 A las Brasas',
      tag_clay_oven: '🔥 Horno de Barro',
      tag_slow_fire: '🔥 Cocción Lenta',
      btn_add_dish: 'Elegir',
      btn_added_dish: 'Elegido',
      sel_bar_title: 'Mi Selección de Carta',
      sel_bar_clear: 'Limpiar',
      sel_bar_send: 'Reservar con esta selección',
      fab_reserve: 'Reservar Mesa',
      award_header: 'BEST OF WINE TOURISM · GREAT WINE CAPITALS · THE AWARD OF EXCELLENCE',
      spring_card_title: 'MENÚ PRIMAVERA · CARTA',
      card_menu_label: 'MENÚ OTOÑO · SIETE PASOS',
      view_full_card: 'Carta Completa',
      view_step_by_step: 'Paso a Paso Interactivo',
      btn_prev_step: 'Paso Anterior',
      btn_next_step: 'Siguiente Paso',
      step_swipe_hint: 'Deslice o use ← →',
      cat_entradas: 'ENTRADAS',
      cat_principales: 'PRINCIPALES',
      cat_postres: 'POSTRES',
      badge_pairing: 'Maridaje:',
      badge_upgrade: 'Upgrade:',
      badge_iconic: 'Ícono Upgrade:',
      specialty_tag: 'Especialidad',
      main_tag: 'Principal',
      cleanser_tag: 'Pre-Postre',
      cleanser_info: 'Intermedio refrescante y limpiador de paladar antes del paso final.',
      dessert_tag: 'Postre Final',
      quote_text: '"En cada copa y en cada plato celebramos la tierra, el agua pura de deshielo y la pasión de nuestra gente en Las Compuertas."',
      col_reservations: 'RESERVAS & VISITAS',
      col_location: 'UBICACIÓN',
      story_1_title: 'El Terruño de Las Compuertas',
      story_1_desc: 'Situado en la primera zona de Luján de Cuyo a 1.050 metros sobre el nivel del mar, con suelos aluviales pedregosos y la brisa constante de la Cordillera de los Andes que otorgan una frescura inigualable a nuestros vinos.',
      story_2_title: 'AOVE Lamadrid',
      story_2_desc: 'Nuestro propio Aceite de Oliva Virgen Extra, extraído en frío a partir de olivos centenarios que conviven en armonía con nuestras hileras de viñas históricas.',
      story_3_title: 'La Tradición de Los Bocheros',
      story_3_desc: 'Homenaje a las reuniones vespertinas de amigos y cosechadores jugando a las bochas bajo la sombra de los álamos mendocinos tras una jornada de vendimia.',
      cta_eyebrow: 'ATENCIÓN PERSONALIZADA · TURISMO & RESTAURANTE',
      cta_title: '¿Desea coordinar una reserva en Los Bocheros?',
      cta_desc: 'Almuerzos maridados de Miércoles a Domingos (12:30 a 16:30 hs) con reserva previa.',
      btn_book_assistant: 'Armar Reserva por WhatsApp',
      btn_whatsapp_direct: 'Chat Directo (+54 9 2615 54-8460)',
      btn_view_menu: 'Ver Menú Completo',

      // Modal Reserva
      modal_book_title: 'Reservar Experiencia Enogastronómica',
      modal_book_subtitle: 'Complete los detalles de su visita para enviar su solicitud directa por WhatsApp a nuestro equipo de Hospitalidad (+54 9 2615 54-8460).',
      form_name_label: 'Nombre y Apellido',
      form_guests_label: 'Comensales',
      form_date_label: 'Fecha de Visita (Mié a Dom)',
      form_time_label: 'Horario Preferido',
      form_exp_label: 'Propuesta Gastronómica',
      form_pairing_label: 'Preferencia de Maridaje',
      form_notes_label: 'Restricciones Alimentarias u Ocasión Especial (Opcional)',
      form_preselected_dishes: 'Platos preseleccionados de la carta:',
      form_submit_wa: 'Enviar Reserva por WhatsApp (+54 9 2615 54-8460)',

      // PRIMAVERA: Entradas
      sp_e1_name: 'ESPÁRRAGOS A LA PLANCHA, QUESO PARMESANO, ALMENDRAS TOSTADAS, GEL DE LIMÓN Y YEMA CURADA',
      sp_e1_desc: 'Espárragos verdes tiernos dorados a la plancha, escamas de parmesano estacionado, crocante de almendras tostadas, punto cítrico de gel de limón y yema curada cremosa.',
      sp_e2_name: 'PROVOLETA ASADA CON CHIMICHURRI ROJO CASERO',
      sp_e2_desc: 'Clásico queso provolone hilado argentino dorado al fuego con costra crocante e interior fundido, coronado con chimichurri rojo artesanal de pimientos y especias.',
      sp_e3_name: 'SOLOMILLO DE CERDO CURADO AL MALBEC CON MANZANA VERDE FRESCA Y HOJAS VERDES',
      sp_e3_desc: 'Finas láminas de solomillo de cerdo curado en casa con Malbec de la finca y hierbas, acompañado de manzana verde ácida fileteada y brotes tiernos de huerta.',
      sp_e4_name: 'QUESO DE CABRA, REMOLACHA ASADA, YOGUR ARTESANAL, FRAMBUESAS Y CROCANTES',
      sp_e4_desc: 'Contraste armónico de queso de cabra regional, remolachas asadas lentamente, suavidad de yogur artesanal, frescura de frambuesas y texturas crocantes.',
      sp_e5_name: 'ESPECIAL DÚO EMPANADAS LOS BOCHEROS',
      sp_e5_desc: 'Dúo de nuestras emblemáticas empanadas mendocinas de carne cortada a cuchillo, masa criolla hojaldrada y cocción tradicional en horno de barro a leña de sarmiento.',

      // PRIMAVERA: Principales
      sp_p1_name: 'COSTILLA CONFITADA, CREMOSO DE PAPA, QUESO MORBIER, PANCETA AHUMADA Y FONDO DE COCCIÓN REDUCIDO',
      sp_p1_desc: 'Costilla vacuna tiernizada a baja temperatura durante horas, servida sobre mousseline sedoso de papa con queso Morbier fundido, lardons de panceta ahumada y su propio demi-glace.',
      sp_p2_name: 'PASTA ARTESANAL DE HONGOS, ARVEJAS TIERNAS, CROCANTE ESPECIADO Y BASE DE MUHAMMARA DE PIMIENTOS Y NUECES',
      sp_p2_desc: 'Pasta fresca amasada en casa rellena de hongos silvestres, arvejas frescas de estación, crumble especiado y espejo de muhammara de pimientos asados y nueces de Tupungato.',
      sp_p3_name: 'TRUCHA A LA PLANCHA, CURRY CREMOSO DE ALCAUCILES CON AJÍ AMARILLO Y CUSCÚS CROCANTE',
      sp_p3_desc: 'Trucha andina grillada con piel crocante, acompañada de suave emulsión de curry de alcauciles mendocinos al ají amarillo y textura de cuscús tostado.',
      sp_p4_name: 'OJO DE BIFE Y VEGETALES FRESCOS DE TEMPORADA SALTEADOS',
      sp_p4_desc: 'Corte emblema argentino asado sobre brasas de quebracho y sarmientos de viña en su punto exacto, escoltado por vegetales orgánicos de estación salteados con AOVE Lamadrid.',

      // PRIMAVERA: Postres
      sp_d1_name: 'PERA POCHADA, MOUSSE DE MASCARPONE, TOFFEE FLUIDO Y CRUMBLE DE QUESO PEPATO Y ALMENDRAS',
      sp_d1_desc: 'Pera mendocina pochada en almíbar especiado, aireada mousse de mascarpone, salsa tibia de toffee y crumble salado-dulce de queso Pepato y almendras.',
      sp_d2_name: 'TARTA FLAN CARAMELIZADA CON HELADO',
      sp_d2_desc: 'Textura sedosa de flan casero horneado con caramelo dorado profundo, acompañado de una bocha de helado artesanal de crema americana.',
      sp_d3_name: 'SELECCIÓN ARTESANAL DE QUESOS Y DULCES DE ESTACIÓN',
      sp_d3_desc: 'Tradicional vigilante mendocino con quesos regionales de tambo seleccionado y dulces artesanales en almíbar de frutos de nuestra tierra.',
      sp_d4_name: 'CLÁSICO PANQUEQUE CASERO TIBIO CON DULCE DE LECHE ARTESANAL',
      sp_d4_desc: 'Finas crepes doradas a la manteca y caramelizadas al momento, generosamente rellenas de dulce de leche repostero argentino tibio.',

      // OTOÑO: Pasos
      step_1_title: 'PRIMER PASO',
      dish_1_name: 'QUESO DE CABRA · CHUTNEY · HIERBAS',
      dish_1_desc: 'Cremoso queso de cabra artesanal mendocino, chutney especiado de frutos de estación y bouquet de hierbas frescas de nuestra huerta orgánica.',
      wine_1_std_notes: '(Las Compuertas · Notas frutadas y taninos aterciopelados)',
      wine_1_upg_notes: '(Crianza en roble francés · Textura envolvente y frescura mineral)',

      step_2_title: 'SEGUNDO PASO',
      dish_2_name: 'GÍRGOLA · CALABAZA · NUECES',
      dish_2_desc: 'Gírgolas doradas al fuego de sarmiento, textura suave de calabaza asada al rescoldo y crocante de nueces criollas del Valle de Uco.',
      wine_2_std_notes: '(Agrelo · Pimienta negra, pimiento dulce y elegante estructura)',
      wine_2_upg_notes: '(Las Compuertas · 12 meses en barrica · Complejidad y final sedoso)',

      step_3_title: 'TERCER PASO',
      dish_3_name: 'MOLLEJA · COLIFLOR · MANZANA · AOVE LAMADRID',
      dish_3_desc: 'Molleja crocante glaseada, aterciopelado puré de coliflor tostada, láminas crocantes de manzana verde ácida y emulsión de Aceite de Oliva Virgen Extra Lamadrid.',
      wine_3_std_notes: '(Corte de blancas de la casa · Acidez vibrante que limpia el paladar)',
      wine_3_upg_notes: '(Blend de autor · Balance aromático y redondez en boca)',

      step_4_title: 'CUARTO PASO',
      dish_4_name: 'EMPANADA LOS BOCHEROS',
      dish_4_badge: '(Especialidad del chef)',
      dish_4_desc: 'Nuestra emblemática empanada mendocina cortada a cuchillo, masa casera con grasa de pella hojaldrada, cebolla caramelizada y horneada en horno de barro a leña.',
      wine_4_std_notes: '(Fruta roja madura, ciruela, violetas y un toque de vainilla)',
      wine_4_upg_notes: '(Selección de parcelas viejas · Gran concentración y elegancia pura)',

      step_5_title: 'QUINTO PASO',
      dish_5_name: 'OJO DE BIFE',
      dish_5_desc: 'Corte noble de carne argentina madurada, asado lentamente sobre brasas de quebracho blanco y sarmientos de la finca, servido en su punto perfecto con cristales de sal marina.',
      wine_5_std_notes: '(Cuerpo robusto, taninos dulces y redondez sublime)',
      wine_5_upg_notes: '(El vino ícono de la bodega · Edición limitada de barricas de excepción)',

      step_6_title: 'SEXTO PASO',
      dish_6_name: 'YOGURT · LIMÓN',
      dish_6_desc: 'Suave crema de yogurt natural de campo, curd de limón sutilmente cítrico y granizado herbal para renovar y refrescar los sentidos hacia el cierre dulce.',

      step_7_title: 'SÉPTIMO PASO',
      dish_7_name: 'CHOCOLATE · POMELO · TOFFEE · AOVE LAMADRID',
      dish_7_desc: 'Cremoso de chocolate amargo 70%, gajos y notas vivaces de pomelo rosado, toffee salado a la manteca y fino hilo de Aceite de Oliva Virgen Extra Lamadrid.',
      wine_7_std_notes: '(Pétillant Naturel · Burbuja natural salvaje, fruta fresca y vivacidad)',
      wine_7_upg_notes: '(Método tradicional champenoise · Elegancia fina y burbuja persistente)'
    },

    en: {
      tab_spring: 'Spring Menu (A la Carte)',
      tab_autumn: 'Autumn Menu (7 Courses)',
      filter_all: 'All Pairings',
      filter_standard: 'Classic',
      filter_upgrade: 'Upgrade',
      print_btn: 'Print Menu',
      nav_reserve_btn: 'Book Table',
      rest_pretitle: 'WINERY RESTAURANT',
      spring_hero_tag: 'SPRING SEASON 2026',
      spring_hero_title: 'SPRING MENU',
      spring_hero_type: 'A LA CARTE',
      autumn_hero_tag: 'AUTUMN SEASON 2026',
      autumn_hero_title: 'AUTUMN MENU',
      autumn_hero_type: 'SEVEN COURSES',
      hero_book_cta: 'Book a Table · +54 9 2615 54-8460',
      leave_review: 'Leave your review here!',
      terroir_pill: 'Las Compuertas Estate · 3,450 ft ASL · Centenary Vines',
      allergy_notice: 'Please inform our staff about any dietary restrictions or food allergies.',
      veg_notice: '(Vegetarian, vegan, and celiac options available upon advance request)',
      sommelier_hint: 'Tap any wine on the menu to explore its technical sheet and Sommelier tasting notes.',
      diet_all: 'All Dishes',
      diet_veg: 'Vegetarian',
      diet_fire: 'Fire & Steaks',
      diet_chef: 'Chef Specialties',
      tag_veg: '🌱 Vegetarian',
      tag_fire: '🔥 Wood-Fired',
      tag_clay_oven: '🔥 Clay Oven',
      tag_slow_fire: '🔥 Slow Braised',
      btn_add_dish: 'Select',
      btn_added_dish: 'Selected',
      sel_bar_title: 'My Menu Selection',
      sel_bar_clear: 'Clear',
      sel_bar_send: 'Book with this selection',
      fab_reserve: 'Book Table',
      award_header: 'BEST OF WINE TOURISM · GREAT WINE CAPITALS · THE AWARD OF EXCELLENCE',
      spring_card_title: 'SPRING MENU · A LA CARTE',
      card_menu_label: 'AUTUMN MENU · SEVEN COURSES',
      view_full_card: 'Full Menu Card',
      view_step_by_step: 'Interactive Course Walkthrough',
      btn_prev_step: 'Previous Course',
      btn_next_step: 'Next Course',
      step_swipe_hint: 'Swipe or use ← →',
      cat_entradas: 'STARTERS',
      cat_principales: 'MAIN COURSES',
      cat_postres: 'DESSERTS',
      badge_pairing: 'Wine Pairing:',
      badge_upgrade: 'Upgrade:',
      badge_iconic: 'Icon Upgrade:',
      specialty_tag: 'Specialty',
      main_tag: 'Main',
      cleanser_tag: 'Palate Cleanser',
      cleanser_info: 'Refreshing citrus intermezzo to awaken the senses before dessert.',
      dessert_tag: 'Grand Finale',
      quote_text: '"In every glass and every dish we honor our land, pure Andean meltwater, and the dedication of our people in Las Compuertas."',
      col_reservations: 'RESERVATIONS & VISITS',
      col_location: 'LOCATION',
      story_1_title: 'Las Compuertas Terroir',
      story_1_desc: 'Nestled in the prime zone of Luján de Cuyo at 3,450 feet elevation, stony alluvial soils and cool Andean mountain breezes bring unrivaled freshness and distinction to our wines.',
      story_2_title: 'Lamadrid Olive Oil',
      story_2_desc: 'Our cold-pressed Extra Virgin Olive Oil, harvested from century-old olive groves thriving alongside our historic vineyard rows.',
      story_3_title: 'The "Los Bocheros" Tradition',
      story_3_desc: 'A tribute to the sunset gatherings of friends and grape harvesters playing bocce ("bochas") under the shade of Mendoza poplars after a day in the vineyard.',
      cta_eyebrow: 'PERSONALIZED HOSPITALITY · WINERY & RESTAURANT',
      cta_title: 'Would you like to reserve a table at Los Bocheros?',
      cta_desc: 'Wine-paired lunches Wednesday through Sunday (12:30 PM to 4:30 PM) by prior reservation.',
      btn_book_assistant: 'Book Table via WhatsApp',
      btn_whatsapp_direct: 'Direct Chat (+54 9 2615 54-8460)',
      btn_view_menu: 'View Full Menu',

      // Modal Reserva
      modal_book_title: 'Reserve Your Wine & Dining Experience',
      modal_book_subtitle: 'Fill in your visit details to send a direct WhatsApp booking request to our Hospitality Team (+54 9 2615 54-8460).',
      form_name_label: 'Full Name',
      form_guests_label: 'Number of Guests',
      form_date_label: 'Preferred Date (Wed to Sun)',
      form_time_label: 'Preferred Time',
      form_exp_label: 'Dining Experience',
      form_pairing_label: 'Wine Pairing Preference',
      form_notes_label: 'Dietary Restrictions or Special Occasion (Optional)',
      form_preselected_dishes: 'Pre-selected dishes from the menu:',
      form_submit_wa: 'Send Reservation via WhatsApp (+54 9 2615 54-8460)',

      // PRIMAVERA: Entradas
      sp_e1_name: 'GRILLED ASPARAGUS, PARMESAN CHEESE, TOASTED ALMONDS, LEMON GEL AND CURED EGG YOLK',
      sp_e1_desc: 'Tender green asparagus seared on the plancha, aged Parmesan shavings, toasted almond crunch, vibrant lemon gel, and velvety cured egg yolk.',
      sp_e2_name: 'ROASTED PROVOLETA CHEESE WITH HOMEMADE RED CHIMICHURRI',
      sp_e2_desc: 'Traditional Argentine spun provolone cheese fire-roasted to a golden crust with a molten center, topped with house-made red bell pepper chimichurri.',
      sp_e3_name: 'MALBEC-CURED PORK TENDERLOIN WITH CRISP GREEN APPLE AND GARDEN GREENS',
      sp_e3_desc: 'Thinly sliced pork tenderloin cured in-house with estate Malbec and herbs, served with tart green apple julienne and organic garden greens.',
      sp_e4_name: 'GOAT CHEESE, ROASTED BEETROOT, ARTISANAL YOGURT, RASPBERRIES AND CRISP WAFERS',
      sp_e4_desc: 'Harmonious contrast of regional goat cheese, slow-roasted beets, smooth artisanal yogurt, fresh raspberries, and delicate savory crisps.',
      sp_e5_name: 'SPECIAL DUO OF LOS BOCHEROS ARTISANAL EMPANADAS',
      sp_e5_desc: 'Duo of our signature knife-cut beef Mendoza empanadas, flaky traditional pastry, baked in our wood-fired clay oven over vine shoots.',

      // PRIMAVERA: Principales
      sp_p1_name: 'CONFIT SHORT RIB, CREAMY POTATO MOUSSELINE, MORBIER CHEESE, SMOKED BACON AND REDUCED JUS',
      sp_p1_desc: 'Beef short rib slow-braised for hours until fork-tender, served over silky potato mousseline with melted Morbier cheese, smoked bacon lardons, and rich pan reduction.',
      sp_p2_name: 'HANDMADE MUSHROOM PASTA, TENDER PEAS, SPICED CRUNCH AND ROASTED PEPPER-WALNUT MUHAMMARA BASE',
      sp_p2_desc: 'Fresh house-made pasta filled with wild mushrooms, sweet spring peas, spiced crumble, set over a roasted red pepper and Uco Valley walnut muhammara.',
      sp_p3_name: 'PAN-SEARED TROUT, CREAMY ARTICHOKE YELLOW CHILI CURRY AND CRISPY TOASTED COUSCOUS',
      sp_p3_desc: 'Crispy-skin Andean trout seared on the plancha, paired with a velvety Mendoza artichoke and yellow ají curry emulsion and toasted couscous crunch.',
      sp_p4_name: 'PRIME ARGENTINE RIBEYE STEAK AND SAUTÉED FRESH SEASONAL VEGETABLES',
      sp_p4_desc: 'Signature Argentine ribeye grilled to perfection over white quebracho embers and vine cuttings, accompanied by seasonal organic vegetables sautéed in Lamadrid EVOO.',

      // PRIMAVERA: Postres
      sp_d1_name: 'POACHED PEAR, MASCARPONE MOUSSE, FLOWING SALTED TOFFEE AND PEPATO CHEESE & ALMOND CRUMBLE',
      sp_d1_desc: 'Mendoza pear poached in spiced syrup, airy mascarpone mousse, warm flowing toffee, and a sweet-savory Pepato sheep cheese and almond crumble.',
      sp_d2_name: 'CARAMELIZED CUSTARD FLAN TART WITH ARTISANAL ICE CREAM',
      sp_d2_desc: 'Silky oven-baked custard flan tart with deep amber caramel, served with a scoop of artisanal sweet cream ice cream.',
      sp_d3_name: 'ARTISANAL SELECTION OF REGIONAL CHEESES AND SEASONAL PRESERVES',
      sp_d3_desc: 'Classic Argentine cheese & fruit pairing featuring selected regional dairy cheeses and house-made seasonal fruit preserves.',
      sp_d4_name: 'WARM HOMEMADE ARGENTINE CRÊPE WITH ARTISANAL DULCE DE LECHE',
      sp_d4_desc: 'Delicate buttered crêpe caramelized to order and generously filled with warm artisanal Argentine dulce de leche.',

      // OTOÑO: Pasos
      step_1_title: 'FIRST COURSE',
      dish_1_name: 'GOAT CHEESE · CHUTNEY · HERBS',
      dish_1_desc: 'Creamy artisanal Mendoza goat cheese, spiced seasonal fruit chutney, and fresh aromatic herbs from our organic estate garden.',
      wine_1_std_notes: '(Las Compuertas · Ripe berry notes and velvety tannins)',
      wine_1_upg_notes: '(Aged in French oak · Enveloping texture and mineral freshness)',

      step_2_title: 'SECOND COURSE',
      dish_2_name: 'OYSTER MUSHROOM · PUMPKIN · WALNUTS',
      dish_2_desc: 'Golden oyster mushrooms seared over vine cuttings, ember-roasted autumn pumpkin purée, and toasted criollo walnuts from the Uco Valley.',
      wine_2_std_notes: '(Agrelo · Cracked black pepper, sweet bell pepper, and elegant structure)',
      wine_2_upg_notes: '(Las Compuertas · 12 months in oak barrels · Complexity and silky finish)',

      step_3_title: 'THIRD COURSE',
      dish_3_name: 'SWEETBREAD · CAULIFLOWER · APPLE · LAMADRID EVOO',
      dish_3_desc: 'Crispy glazed sweetbread, velvety roasted cauliflower mousseline, tart green apple batons, and Lamadrid Extra Virgin Olive Oil emulsion.',
      wine_3_std_notes: '(Signature estate white blend · Vibrant acidity that cleanses the palate)',
      wine_3_upg_notes: '(Single-estate blend · Aromatic balance and harmonious palate)',

      step_4_title: 'FOURTH COURSE',
      dish_4_name: 'LOS BOCHEROS EMPANADA',
      dish_4_badge: '(Chef\'s Specialty)',
      dish_4_desc: 'Our iconic knife-cut Mendoza beef empanada with flaky layered handmade pastry, caramelized onions, and slow-baked in an artisanal wood-fired clay oven.',
      wine_4_std_notes: '(Ripe red berries, dark plum, violet floral lift, and subtle French vanilla)',
      wine_4_upg_notes: '(Old vine parcel selection · Intense concentration and pure poise)',

      step_5_title: 'FIFTH COURSE',
      dish_5_name: 'ARGENTINE RIBEYE STEAK',
      dish_5_desc: 'Prime aged Argentine ribeye steak slowly grilled over native quebracho hardwood and estate vine prunings, finished with delicate sea salt crystals.',
      wine_5_std_notes: '(Robust body, sweet polished tannins, and sublime lingering finish)',
      wine_5_upg_notes: '(The winery\'s flagship icon wine · Limited edition aged in exceptional barrels)',

      step_6_title: 'SIXTH COURSE',
      dish_6_name: 'YOGURT · LEMON',
      dish_6_desc: 'Smooth artisanal farm yogurt cream, zesty lemon curd, and wild garden herbal granita to cleanse and reset the palate.',

      step_7_title: 'SEVENTH COURSE',
      dish_7_name: 'CHOCOLATE · GRAPEFRUIT · TOFFEE · LAMADRID EVOO',
      dish_7_desc: 'Dark chocolate 70% crémeux, fresh pink grapefruit suprêmes, rich salted butter toffee, and a delicate drizzle of Lamadrid Extra Virgin Olive Oil.',
      wine_7_std_notes: '(Pétillant Naturel · Wild natural bubbles, vibrant fresh fruit, and lively zest)',
      wine_7_upg_notes: '(Traditional champenoise method · Fine persistent bubbles and elegance)'
    },

    pt: {
      tab_spring: 'Menu Primavera (À la Carte)',
      tab_autumn: 'Menu Outono (7 Etapas)',
      filter_all: 'Todas as Harmonizações',
      filter_standard: 'Clássico',
      filter_upgrade: 'Upgrade',
      print_btn: 'Imprimir',
      nav_reserve_btn: 'Reservar',
      rest_pretitle: 'RESTAURANTE DE VINÍCOLA',
      spring_hero_tag: 'TEMPORADA PRIMAVERA 2026',
      spring_hero_title: 'MENU PRIMAVERA',
      spring_hero_type: 'À LA CARTE',
      autumn_hero_tag: 'TEMPORADA OUTONO 2026',
      autumn_hero_title: 'MENU OUTONO',
      autumn_hero_type: 'SETE ETAPAS',
      hero_book_cta: 'Reservar Mesa · +54 9 2615 54-8460',
      leave_review: 'Deixe sua avaliação aqui!',
      terroir_pill: 'Finca Las Compuertas · 1.050 m.s.n.m. · Vinhas Centenárias',
      allergy_notice: 'Consulte nossa equipe sobre restrições alimentares e alergias.',
      veg_notice: '(Dispomos de opções vegetarianas, veganas e celíacas com aviso prévio)',
      sommelier_hint: 'Toque em qualquer vinho do cardápio para ver a ficha técnica e notas do Sommelier.',
      diet_all: 'Todos os Pratos',
      diet_veg: 'Vegetariano',
      diet_fire: 'Brasas & Carnes',
      diet_chef: 'Especialidades',
      tag_veg: '🌱 Vegetariano',
      tag_fire: '🔥 Na Brasa',
      tag_clay_oven: '🔥 Forno de Barro',
      tag_slow_fire: '🔥 Cozimento Lento',
      btn_add_dish: 'Escolher',
      btn_added_dish: 'Escolhido',
      sel_bar_title: 'Minha Seleção do Menu',
      sel_bar_clear: 'Limpar',
      sel_bar_send: 'Reservar com esta seleção',
      fab_reserve: 'Reservar Mesa',
      award_header: 'BEST OF WINE TOURISM · GREAT WINE CAPITALS · THE AWARD OF EXCELLENCE',
      spring_card_title: 'MENU PRIMAVERA · À LA CARTE',
      card_menu_label: 'MENU OUTONO · SETE ETAPAS',
      view_full_card: 'Cardápio Completo',
      view_step_by_step: 'Passo a Passo Interativo',
      btn_prev_step: 'Etapa Anterior',
      btn_next_step: 'Próxima Etapa',
      step_swipe_hint: 'Deslize ou use ← →',
      cat_entradas: 'ENTRADAS',
      cat_principales: 'PRATOS PRINCIPAIS',
      cat_postres: 'SOBREMESAS',
      badge_pairing: 'Harmonização:',
      badge_upgrade: 'Upgrade:',
      badge_iconic: 'Ícone Upgrade:',
      specialty_tag: 'Especialidade',
      main_tag: 'Principal',
      cleanser_tag: 'Pré-Sobremesa',
      cleanser_info: 'Intermezzo refrescante de frutas cítricas para renovar o paladar.',
      dessert_tag: 'Sobremesa Final',
      quote_text: '"Em cada taça e em cada prato celebramos a terra, as águas puras do degelo e a paixão do nosso povo em Las Compuertas."',
      col_reservations: 'RESERVAS & VISITAS',
      col_location: 'LOCALIZAÇÃO',
      story_1_title: 'O Terroir de Las Compuertas',
      story_1_desc: 'Localizado na primeira zona de Luján de Cuyo a 1.050 metros de altitude, com solos aluviais pedregosos e brisas da Cordilheira dos Andes que conferem frescor inigualável aos nossos vinhos.',
      story_2_title: 'Azeite Lamadrid',
      story_2_desc: 'Nosso próprio Azeite de Oliva Extra Virgem, prensado a frio a partir de oliveiras centenárias que convivem em perfeita harmonia com nossas vinhas históricas.',
      story_3_title: 'A Tradição de Los Bocheros',
      story_3_desc: 'Homenagem aos encontros de fim de tarde de amigos e vindimadores jogando bocha sob a sombra dos álamos mendocinos.',
      cta_eyebrow: 'HOSPITALIDADE PERSONALIZADA · VINÍCOLA & RESTAURANTE',
      cta_title: 'Deseja coordenar uma reserva em Los Bocheros?',
      cta_desc: 'Almoços harmonizados de Quarta a Domingo (12h30 às 16h30) com reserva antecipada.',
      btn_book_assistant: 'Reservar Mesa via WhatsApp',
      btn_whatsapp_direct: 'Chat Direto (+54 9 2615 54-8460)',
      btn_view_menu: 'Ver Cardápio Completo',

      // Modal Reserva
      modal_book_title: 'Reservar Experiência Enogastronômica',
      modal_book_subtitle: 'Preencha os detalhes da sua visita para enviar sua solicitação diretamente por WhatsApp para nossa equipe (+54 9 2615 54-8460).',
      form_name_label: 'Nome Completo',
      form_guests_label: 'Pessoas',
      form_date_label: 'Data da Visita (Qua a Dom)',
      form_time_label: 'Horário Preferido',
      form_exp_label: 'Experiência Gastronômica',
      form_pairing_label: 'Preferência de Harmonização',
      form_notes_label: 'Restrições Alimentares ou Ocasião Especial (Opcional)',
      form_preselected_dishes: 'Pratos pré-selecionados do menu:',
      form_submit_wa: 'Enviar Reserva via WhatsApp (+54 9 2615 54-8460)',

      // PRIMAVERA: Entradas
      sp_e1_name: 'ASPARGOS GRELHADOS, QUEIJO PARMESÃO, AMÊNDOAS TOSTADAS, GEL DE LIMÃO E GEMA CURADA',
      sp_e1_desc: 'Aspargos verdes tenros grelhados na chapa, lascas de parmesão maturado, crocante de amêndoas tostadas, toque cítrico de gel de limão e gema curada cremosa.',
      sp_e2_name: 'PROVOLETA ASSADA COM CHIMICHURRI VERMELHO CASEIRO',
      sp_e2_desc: 'Clássico queijo provolone argentino dourado na brasa com crosta crocante e interior derretido, finalizado com chimichurri vermelho artesanal.',
      sp_e3_name: 'FILÉ MIGNON SUÍNO CURADO AO MALBEC COM MAÇÃ VERDE FRESCA E FOLHAS VERDES',
      sp_e3_desc: 'Finas lâminas de filé mignon suíno curado na casa com Malbec da vinícola e ervas, acompanhado de maçã verde fresca e brotos da horta.',
      sp_e4_name: 'QUEIJO DE CABRA, BETERRABA ASSADA, IOGURTE ARTESANAL, FRAMBOESAS E CROCANTES',
      sp_e4_desc: 'Contraste harmônico de queijo de cabra regional, beterrabas assadas lentamente, iogurte artesanal suave, framboesas frescas e texturas crocantes.',
      sp_e5_name: 'ESPECIAL DUO DE EMPANADAS LOS BOCHEROS',
      sp_e5_desc: 'Dupla das nossas emblemáticas empanadas mendocinas de carne cortada na ponta da faca, massa folhada artesanal e assadas em forno de barro a lenha.',

      // PRIMAVERA: Principales
      sp_p1_name: 'COSTELA CONFITADA, PURÊ CREMOSO DE BATATA, QUEIJO MORBIER, BACON DEFUMADO E REDUÇÃO DO PRÓPRIO MOLHO',
      sp_p1_desc: 'Costela bovina cozida lentamente em baixa temperatura, servida sobre mousseline sedoso de batata com queijo Morbier derretido, bacon defumado e redução.',
      sp_p2_name: 'MASSA ARTESANAL DE COGUMELOS, ERVILHAS FRESCAS, CROCANTE DE ESPECIARIAS E BASE DE MUHAMMARA DE PIMENTÕES E NOZES',
      sp_p2_desc: 'Massa fresca artesanal recheada com cogumelos, ervilhas tenras da estação, crumble de especiarias e base de muhammara de pimentões assados e nozes.',
      sp_p3_name: 'TRUTA GRELHADA, CURRY CREMOSO DE ALCACHOFRAS COM AJÍ AMARILLO E CUSCUZ CROCANTE',
      sp_p3_desc: 'Truta andina grelhada com pele crocante, acompanhada de emulsão suave de curry de alcachofras com pimenta amarela e cuscuz tostado crocante.',
      sp_p4_name: 'OJO DE BIFE ARGENTINO E VEGETAIS FRESCOS DA ESTAÇÃO SALTEADOS',
      sp_p4_desc: 'Corte nobre argentino assado na brasa de quebracho e ramos de videira no ponto perfeito, acompanhado de vegetais orgânicos da estação salteados no azeite Lamadrid.',

      // PRIMAVERA: Postres
      sp_d1_name: 'PÊRA POCHÊ, MOUSSE DE MASCARPONE, TOFFEE FLUIDO E CRUMBLE DE QUEIJO PEPATO E AMÊNDOAS',
      sp_d1_desc: 'Pêra mendocina pochê em calda de especiarias, mousse aerada de mascarpone, calda morna de toffee e crumble agridoce de queijo Pepato e amêndoas.',
      sp_d2_name: 'TORTA PUDIM CARAMELIZADA COM SORVETE ARTESANAL',
      sp_d2_desc: 'Textura sedosa de flan caseiro assado com caramelo dourado profundo, acompanhado de sorvete artesanal de creme.',
      sp_d3_name: 'SELEÇÃO ARTESANAL DE QUEIJOS E DOCES DA ESTAÇÃO',
      sp_d3_desc: 'Clássica sobremesa mendocina com queijos regionais selecionados e doces artesanais em calda de frutas da estação.',
      sp_d4_name: 'CLÁSSICA PANQUECA CASEIRA MORNA RECHEADA COM DOCE DE LEITE ARTESANAL',
      sp_d4_desc: 'Finas panquecas douradas na manteiga e caramelizadas na hora, generosamente recheadas com doce de leite argentino artesanal morno.',

      // OTOÑO: Pasos
      step_1_title: 'PRIMEIRA ETAPA',
      dish_1_name: 'QUEIJO DE CABRA · CHUTNEY · ERVAS',
      dish_1_desc: 'Cremoso queijo de cabra artesanal mendocino, chutney de frutas sazonais e bouquet de ervas frescas da nossa horta orgânica.',
      wine_1_std_notes: '(Las Compuertas · Notas frutadas e taninos aveludados)',
      wine_1_upg_notes: '(Envelhecido em carvalho francês · Textura envolvente e frescor mineral)',

      step_2_title: 'SEGUNDA ETAPA',
      dish_2_name: 'COGUMELOS GÍRGOLA · ABÓBORA · NOZES',
      dish_2_desc: 'Cogumelos dourados na brasa, purê aveludado de abóbora assada e crocante de nozes do Valle de Uco.',
      wine_2_std_notes: '(Agrelo · Pimenta preta, pimentão doce e estrutura elegante)',
      wine_2_upg_notes: '(Las Compuertas · 12 meses em barrica · Complexidade e final sedoso)',

      step_3_title: 'TERCEIRA ETAPA',
      dish_3_name: 'MOLEJAS · COUVE-FLOR · MAÇÃ · AZEITE LAMADRID',
      dish_3_desc: 'Molejas crocantes glaceadas, purê de couve-flor tostada, lâminas de maçã verde ácida e emulsão de Azeite Lamadrid.',
      wine_3_std_notes: '(Blend branco da casa · Acidez vibrante que limpa o paladar)',
      wine_3_upg_notes: '(Blend de autor · Equilíbrio aromático e volume de boca)',

      step_4_title: 'QUARTA ETAPA',
      dish_4_name: 'EMPANADA LOS BOCHEROS',
      dish_4_badge: '(Especialidade do chef)',
      dish_4_desc: 'Nossa emblemática empanada mendocina cortada na ponta da faca, massa caseira folhada e assada em forno a lenha de barro.',
      wine_4_std_notes: '(Frutas vermelhas maduras, ameixa, violetas e toque de baunilha)',
      wine_4_upg_notes: '(Seleção de vinhas velhas · Grande concentração e pura elegância)',

      step_5_title: 'QUINTA ETAPA',
      dish_5_name: 'OJO DE BIFE',
      dish_5_desc: 'Corte nobre de carne argentina maturada, assado lentamente sobre brasas de quebracho branco com cristais de sal marinho.',
      wine_5_std_notes: '(Corpo robusto, taninos doces e harmonia sublime)',
      wine_5_upg_notes: '(O vinho ícone da vinícola · Edição limitada de barricas excepcionais)',

      step_6_title: 'SEXTA ETAPA',
      dish_6_name: 'IOGURTE · LIMÃO',
      dish_6_desc: 'Suave creme de iogurte artesanal, curd de limão cítrico e granita herbal para renovar os sentidos.',

      step_7_title: 'SÉTIMA ETAPA',
      dish_7_name: 'CHOCOLATE · TORANJA · TOFFEE · AZEITE LAMADRID',
      dish_7_desc: 'Cremoso de chocolate 70%, gomos de toranja rosa, toffee salgado e fio de Azeite de Oliva Extra Virgem Lamadrid.',
      wine_7_std_notes: '(Pétillant Naturel · Borbulhas naturais selvagens, fruta viva)',
      wine_7_upg_notes: '(Método tradicional champenoise · Borbulha fina e persistente)'
    },

    'de-ch': {
      tab_spring: 'Frühlingskarte (À la Carte)',
      tab_autumn: 'Herbstmenü (7 Gänge)',
      filter_all: 'Alle Weinbegleitungen',
      filter_standard: 'Klassisch',
      filter_upgrade: 'Upgrade',
      print_btn: 'Drucken',
      nav_reserve_btn: 'Reservieren',
      rest_pretitle: 'WEINGUT-RESTAURANT',
      spring_hero_tag: 'FRÜHLINGS-SAISON 2026',
      spring_hero_title: 'FRÜHLINGSMENÜ',
      spring_hero_type: 'À LA CARTE',
      autumn_hero_tag: 'HERBST-SAISON 2026',
      autumn_hero_title: 'HERBSTMENÜ',
      autumn_hero_type: 'SIEBEN GÄNGE',
      hero_book_cta: 'Tisch reservieren · +54 9 2615 54-8460',
      leave_review: 'Hinterlassen Sie hier Ihre Bewertung!',
      terroir_pill: 'Finca Las Compuertas · 1.050 m ü. M. · Hundertjährige Reben',
      allergy_notice: 'Bitte informieren Sie unser Serviceteam über allfällige Allergien oder Diäten.',
      veg_notice: '(Vegetarische, vegane und glutenfreie Varianten auf Voranmeldung erhältlich)',
      sommelier_hint: 'Tippen Sie auf einen Wein der Karte, um das Datenblatt und die Sommelier-Verkostungsnotizen zu öffnen.',
      diet_all: 'Alle Gerichte',
      diet_veg: 'Vegetarisch',
      diet_fire: 'Feuer & Grill',
      diet_chef: 'Spezialitäten',
      tag_veg: '🌱 Vegetarisch',
      tag_fire: '🔥 Vom Holzkohlegrill',
      tag_clay_oven: '🔥 Lehmofen',
      tag_slow_fire: '🔥 Geschmort',
      btn_add_dish: 'Wählen',
      btn_added_dish: 'Gewählt',
      sel_bar_title: 'Meine Menüauswahl',
      sel_bar_clear: 'Leeren',
      sel_bar_send: 'Mit dieser Auswahl reservieren',
      fab_reserve: 'Tisch reservieren',
      award_header: 'BEST OF WINE TOURISM · GREAT WINE CAPITALS · THE AWARD OF EXCELLENCE',
      spring_card_title: 'FRÜHLINGSKARTE · À LA CARTE',
      card_menu_label: 'HERBSTMENÜ · SIEBEN GÄNGE',
      view_full_card: 'Ganze Speisekarte',
      view_step_by_step: 'Interaktiver Menü-Rundgang',
      btn_prev_step: 'Vorheriger Gang',
      btn_next_step: 'Nächster Gang',
      step_swipe_hint: 'Wischen oder ← → nutzen',
      cat_entradas: 'VORSPEISEN',
      cat_principales: 'HAUPTGÄNGE',
      cat_postres: 'DESSERTS',
      badge_pairing: 'Weinbegleitung:',
      badge_upgrade: 'Upgrade:',
      badge_iconic: 'Ikonen-Upgrade:',
      specialty_tag: 'Spezialität',
      main_tag: 'Hauptgang',
      cleanser_tag: 'Zwischengang',
      cleanser_info: 'Erfrischendes Zitrus-Intermezzo zur Belebung des Gaumens vor dem Dessert.',
      dessert_tag: 'Süsses Finale',
      quote_text: '"In jedem Glas und jedem Gericht zelebrieren wir unsere Erde, reinstes Anden-Schmelzwasser und die Hingabe unseres Teams in Las Compuertas."',
      col_reservations: 'RESERVATIONEN & BESUCHE',
      col_location: 'STANDORT',
      story_1_title: 'Das Terroir von Las Compuertas',
      story_1_desc: 'Gelegen in der Spitzenzone von Luján de Cuyo auf 1.050 m ü. M., mit steinigen Schwemmlandböden und kühlenden Anden-Fallwinden für aussergewöhnliche Frische und Eleganz.',
      story_2_title: 'Lamadrid Olivenöl',
      story_2_desc: 'Unser kaltgepresstes Olivenöl Extra Vergine, gewonnen aus uralten Olivenbäumen, die in Harmonie mit unseren historischen Reben gedeihen.',
      story_3_title: 'Die Tradition «Los Bocheros»',
      story_3_desc: 'Eine Hommage an das abendliche Boccia-Spiel («Bochas») der Freunde und Weinleser unter den schattigen Pappeln von Mendoza.',
      cta_eyebrow: 'PERSÖNLICHE GASTFREUNDSCHAFT · WEINGUT & RESTAURANT',
      cta_title: 'Möchten Sie einen Tisch bei Los Bocheros reservieren?',
      cta_desc: 'Weinbegleitete Mittagessen von Mittwoch bis Sonntag (12:30 bis 16:30 Uhr) auf Voranmeldung.',
      btn_book_assistant: 'Tisch via WhatsApp reservieren',
      btn_whatsapp_direct: 'Direkt-Chat (+54 9 2615 54-8460)',
      btn_view_menu: 'Ganze Karte ansehen',

      // Modal Reserva
      modal_book_title: 'Wein- & Gourmet-Erlebnis reservieren',
      modal_book_subtitle: 'Vervollständigen Sie Ihre Angaben, um Ihre Reservierungsanfrage direkt per WhatsApp an unser Hospitality-Team (+54 9 2615 54-8460) zu senden.',
      form_name_label: 'Vor- und Nachname',
      form_guests_label: 'Personenanzahl',
      form_date_label: 'Besuchsdatum (Mi bis So)',
      form_time_label: 'Gewünschte Uhrzeit',
      form_exp_label: 'Gastronomisches Angebot',
      form_pairing_label: 'Weinbegleitung',
      form_notes_label: 'Allergien, Diäten oder besonderer Anlass (Optional)',
      form_preselected_dishes: 'Vorausgewählte Gerichte der Karte:',
      form_submit_wa: 'Reservation via WhatsApp senden (+54 9 2615 54-8460)',

      // PRIMAVERA: Entradas
      sp_e1_name: 'GEGRILLTER SPARGEL, PARMESANKÄSE, GERÖSTETE MANDELN, ZITRONENGEL UND GEREIFTES EIGELB',
      sp_e1_desc: 'Zarter grüner Spargel von der Plancha, gereifte Parmesanspäne, geröstete Mandeln, frisches Zitronengel und cremiges gereiftes Eigelb.',
      sp_e2_name: 'GEGRILLTER PROVOLETA-KÄSE MIT HAUSGEMACHTEM ROTEM CHIMICHURRI',
      sp_e2_desc: 'Klassischer argentinischer Provolone über dem Feuer goldbraun gegrillt, aussen knusprig und innen geschmolzen, mit hausgemachtem rotem Paprika-Chimichurri.',
      sp_e3_name: 'IN MALBEC GEREIFTES SCHWEINEFILET MIT FRISCHEM GRÜNEM APFEL UND BLATTSALATEN',
      sp_e3_desc: 'Hauchdünne Tranchen vom im hauseigenen Malbec und Kräutern gereiften Schweinefilet, serviert mit knackigem grünem Apfel und Gartensalaten.',
      sp_e4_name: 'ZIEGENKÄSE, GERÖSTETE RANDE, HANDGEMACHTER JOGHURT, HIMBEEREN UND KNUSPERWAFFELN',
      sp_e4_desc: 'Harmonisches Zusammenspiel von regionalem Ziegenkäse, sanft gerösteter Rande (Rote Bete), hausgemachtem Joghurt, frischen Himbeeren und Knuspertexturen.',
      sp_e5_name: 'SPEZIELLES DUO LOS BOCHEROS EMPANADAS',
      sp_e5_desc: 'Duo unserer legendären Mendoza-Empanadas mit handgeschnittenem Rindfleisch und blättrigem Teig, gebacken im holzbefeuerten Lehmofen.',

      // PRIMAVERA: Principales
      sp_p1_name: 'GESCHMORTE RINDER-QUERFIPPE, SAMTIGES KARTOFFELMOUSSELINE, MORBIER-KÄSE, RÄUCHERSPECK UND SCHMORJUS',
      sp_p1_desc: 'Über Stunden butterzart geschmorte Rinderrippe auf seidigem Kartoffelmousseline mit geschmolzenem Morbier-Käse, Räucherspeck und kräftigem Jus.',
      sp_p2_name: 'HAUSGEMACHTE WALDPILZ-PASTA, ZARTE ERBSEN, GEWÜRZ-CRUMBLE UND MUHAMMARA VON PEPERONI UND BAUMNÜSSEN',
      sp_p2_desc: 'Frische hausgemachte Pasta gefüllt mit Waldpilzen, jungen Gartenerbsen, Gewürz-Crumble auf einer Muhammara-Basis aus gerösteten Peperoni und Baumnüssen.',
      sp_p3_name: 'GEBRATENE ANDEN-FORELLE, CREMIGES ARTISCHOCKEN-CURRY MIT GELBEM AJÍ UND KNUSPRIGEM COUSCOUS',
      sp_p3_desc: 'Auf der Haut knusprig gebratene Anden-Forelle, begleitet von einer feinen Artischocken-Curry-Emulsion mit gelbem Ají und geröstetem Couscous.',
      sp_p4_name: 'ARGENTINISCHES RIBEYE-STEAK MIT MARKTFRISCHEM FRÜHLINGSGEMÜSE',
      sp_p4_desc: 'Edles argentinisches Ribeye-Steak über Quebracho-Glut und Rebhölzern auf den Punkt gegrillt, mit sautiertem Saisongemüse und Lamadrid Olivenöl.',

      // PRIMAVERA: Postres
      sp_d1_name: 'POCHIERTE BIRNE, MASCARPONE-MOUSSE, FLÜSSIGES TOFFEE UND PEPATO-MANDEL-CRUMBLE',
      sp_d1_desc: 'In Gewürzsud pochierte Birne aus Mendoza, luftige Mascarpone-Mousse, warmes Salz-Toffee und Pepato-Schafkäse-Mandel-Crumble.',
      sp_d2_name: 'KARAMELLISIERTE FLAN-TARTE MIT HAUSGEMACHTEM GLACÉ',
      sp_d2_desc: 'Seidige hausgemachte Karamell-Flan-Tarte mit tiefgoldenem Karamell und einer Kugel handwerklichem Rahmglacé.',
      sp_d3_name: 'HANDWERKLICHE AUSWAHL AN REGIONALEM KÄSE UND SAISONALEN FRUCHTKOMPOTTEN',
      sp_d3_desc: 'Traditionelle argentinische Käsevariation mit ausgewählten regionalen Hofkäsen und eingelegten Früchten der Saison.',
      sp_d4_name: 'WARME HAUSGEMACHTE CRÊPE MIT TRADITIONELLEM DULCE DE LECHE',
      sp_d4_desc: 'Zarte, in Butter gebackene und frisch karamellisierte Crêpe, grosszügig gefüllt mit warmem argentinischem Dulce de Leche.',

      // OTOÑO: Pasos
      step_1_title: 'ERSTER GANG',
      dish_1_name: 'ZIEGENKÄSE · CHUTNEY · KRÄUTER',
      dish_1_desc: 'Cremiger handwerklicher Ziegenkäse aus Mendoza, würziges Saison-Chutney und frische Gartenkräuter.',
      wine_1_std_notes: '(Las Compuertas · Fruchtige Noten und samtige Tannine)',
      wine_1_upg_notes: '(Ausbau in französischer Eiche · Dichte Textur und mineralische Frische)',

      step_2_title: 'ZWEITER GANG',
      dish_2_name: 'AUSTERNPILZE · KÜRBIS · NÜSSE',
      dish_2_desc: 'Auf Rebholz gegrillte Austernpilze, samtiges Kürbispüree aus der Glut und geröstete Baumnüsse aus dem Uco-Tal.',
      wine_2_std_notes: '(Agrelo · Schwarzer Pfeffer, süsse Paprika und elegante Struktur)',
      wine_2_upg_notes: '(Las Compuertas · 12 Monate Barrique · Komplexität und seidiger Abgang)',

      step_3_title: 'DRITTER GANG',
      dish_3_name: 'KALBSMILKE · BLUMENKOHL · APFEL · LAMADRID OLIVENÖL',
      dish_3_desc: 'Knusprig glasierte Kalbsmilke, samtige Blumenkohlmousseline, säuerlicher grüner Apfel und Emulsion unseres Olivenöls.',
      wine_3_std_notes: '(Hauseigene Weissweincuvée · Lebendige Säure zur Gaumenerfrischung)',
      wine_3_upg_notes: '(Einzellagen-Cuvée · Aromatische Balance und Fülle)',

      step_4_title: 'VIERTER GANG',
      dish_4_name: 'LOS BOCHEROS EMPANADA',
      dish_4_badge: '(Chef-Spezialität)',
      dish_4_desc: 'Traditionelle Empanada mit von Hand geschnittenem Rindfleisch, karamellisierten Zwiebeln, im Holzbackofen gebacken.',
      wine_4_std_notes: '(Reife rote Beeren, Pflaume, Veilchen und ein Hauch Bourbon-Vanille)',
      wine_4_upg_notes: '(Alte Rebanlagen · Konzentration und reine Eleganz)',

      step_5_title: 'FÜNFTER GANG',
      dish_5_name: 'ARGENTINISCHES RIBEYE-STEAK',
      dish_5_desc: 'Edles gereiftes Rindfleisch, langsam über Quebracho-Holz und Rebschnitt gegrillt, verfeinert mit Meersalzkristallen.',
      wine_5_std_notes: '(Kräftiger Körper, samtige Tannine und erhabener Abgang)',
      wine_5_upg_notes: '(Der Ikonen-Wein des Hauses · Limitierte Selektion aus Ausnahme-Barriques)',

      step_6_title: 'SECHSTER GANG',
      dish_6_name: 'JOGHURT · ZITRONE',
      dish_6_desc: 'Samtiger Bauernjoghurt, erfrischender Zitronen-Curd und Kräutergranita als Gaumen-Erfrischer.',

      step_7_title: 'SIEBTER GANG',
      dish_7_name: 'SCHOKOLADE · GRAPEFRUIT · TOFFEE · LAMADRID OLIVENÖL',
      dish_7_desc: 'Cremige dunkle Schokolade 70%, rosa Grapefruit, gesalzenes Buttertoffee und ein feiner Faden Lamadrid Olivenöl.',
      wine_7_std_notes: '(Pétillant Naturel · Wilde natürliche Perlage, Frische und Frucht)',
      wine_7_upg_notes: '(Traditionelle Flaschengärung · Feine anhaltende Perlage)'
    }
  };

  // --- Complete Sommelier Wine Catalog ---
  const winesCatalog = {
    'Lamadrid Blanc de Blancs': {
      line: 'Línea Fresca · Corte de Blancas',
      origin: 'Luján de Cuyo, Mendoza · 1.050 m.s.n.m.',
      aging: 'Tanques de acero inoxidable sobre borras finas',
      temp: '8 °C – 10 °C',
      notes: {
        es: 'Brillante y expresivo, con aromas de flores blancas, durazno blanco y sutiles notas cítricas. En boca despliega una acidez vibrante y refrescante que realza vegetales grillados y quesos.',
        en: 'Bright and expressive, offering aromas of white blossoms, white peach, and zesty citrus. Crisp, refreshing acidity on the palate that elevates grilled vegetables and cheeses.',
        pt: 'Brilhante e expressivo, com aromas de flores brancas, pêssego branco e notas cítricas. Na boca apresenta acidez vibrante que realça vegetais grelhados e queijos.',
        'de-ch': 'Strahlend und ausdrucksstark mit Aromen von weissen Blüten, weissem Pfirsich und Zitrusnoten. Lebendige Säure am Gaumen, ideal zu gegrilltem Gemüse.'
      }
    },
    'Lamadrid Gran Reserva Chardonnay': {
      line: 'Gran Reserva · Parcelas Seleccionadas',
      origin: 'Las Compuertas, Luján de Cuyo · 1.050 m.s.n.m.',
      aging: '12 meses en barricas de roble francés de primer uso',
      temp: '10 °C – 12 °C',
      notes: {
        es: 'Chardonnay de gran complejidad y volumen. Notas de pera madura, avellanas tostadas, manteca y mineralidad calcárea. Textura cremosa y final largo y elegante.',
        en: 'Full-bodied, complex Chardonnay with notes of ripe pear, toasted hazelnut, brioche, and chalky minerality. Creamy mid-palate with a long, poised finish.',
        pt: 'Chardonnay de grande complexidade e volume. Notas de pêra madura, avelãs tostadas, manteiga e mineralidade. Textura cremosa e final longo.',
        'de-ch': 'Komplexer Chardonnay mit Noten von reifer Birne, gerösteten Haselnüssen, Brioche und feiner Mineralität. Cremige Textur und eleganter Abgang.'
      }
    },
    'Lamadrid Terroir Selection Malbec D.O.C': {
      line: 'Terroir Selection · D.O.C. Luján de Cuyo',
      origin: 'Las Compuertas, Luján de Cuyo · Viñedos Históricos',
      aging: '10 meses en roble francés y huevos de concreto',
      temp: '16 °C – 18 °C',
      notes: {
        es: 'Expresión pura de la Denominación de Origen Luján de Cuyo: ciruelas frescas, violetas silvestres y taninos redondos y jugosos que equilibran platos intensos a las brasas.',
        en: 'Pure expression of the Luján de Cuyo D.O.C.: fresh red plum, wild violets, and juicy, polished tannins that balance rich fire-roasted dishes.',
        pt: 'Expressão pura da D.O.C. Luján de Cuyo: ameixas frescas, violetas silvestres e taninos redondos e suculentos que equilibram pratos na brasa.',
        'de-ch': 'Reiner Ausdruck der D.O.C. Luján de Cuyo: frische Pflaumen, wilde Veilchen und saftige, runde Tannine, perfekt zu Grillgerichten.'
      }
    },
    'Lamadrid Reserva Cabernet Sauvignon': {
      line: 'Línea Reserva · Single Estate',
      origin: 'Agrelo & Las Compuertas, Luján de Cuyo',
      aging: '12 meses en barricas de roble francés',
      temp: '16 °C – 18 °C',
      notes: {
        es: 'Elegante y estructurado, con notas de casis, pimienta negra en grano, pimiento rojo asado y cacao sutil. Taninos firmes de grano fino y persistencia sedosa.',
        en: 'Elegant and structured, showcasing cassis, cracked black pepper, roasted red bell pepper, and subtle cocoa. Fine-grained tannins and a silky finish.',
        pt: 'Elegante e estruturado, com notas de cassis, pimenta preta, pimentão vermelho assado e cacau sutil. Taninos finos e final sedoso.',
        'de-ch': 'Elegant und strukturiert mit Noten von Cassis, schwarzem Pfeffer, gerösteter Paprika und Kakao. Feinkörnige Tannine und seidiger Nachhall.'
      }
    },
    'Lamadrid Terroir Selection Bonarda': {
      line: 'Terroir Selection · Herencia Mendocina',
      origin: 'Luján de Cuyo, Mendoza',
      aging: '8 meses en roble francés de segundo uso',
      temp: '15 °C – 17 °C',
      notes: {
        es: 'Fruta negra y roja crujiente, frambuesa, mora e higos frescos con entrada amable, taninos aterciopelados y frescura jugosa.',
        en: 'Crisp black and red berry fruit—raspberry, blackberry, and fresh fig—with a plush entry, velvety tannins, and lively freshness.',
        pt: 'Frutas negras e vermelhas frescas, framboesa, amora e figo com entrada macia, taninos aveludados e frescor suculento.',
        'de-ch': 'Knackige rote und dunkle Beeren, Himbeere, Brombeere und frische Feige mit samtigen Tanninen und saftiger Frische.'
      }
    },
    'Lamadrid Reserva Malbec': {
      line: 'Línea Reserva · Emblema de Finca',
      origin: 'Las Compuertas, Luján de Cuyo · 1.050 m.s.n.m.',
      aging: '12 meses en barricas de roble francés',
      temp: '16 °C – 18 °C',
      notes: {
        es: 'Color rojo violáceo profundo. Aromas de frutos rojos maduros, guinda, violetas y delicadas notas de vainilla y tabaco rubio. Maridaje insuperable para nuestra empanada al horno de barro.',
        en: 'Deep violet-red hue. Aromas of ripe red berries, sour cherry, violets, and delicate hints of vanilla and blond tobacco. Unbeatable pairing for our clay-oven empanadas.',
        pt: 'Cor vermelho-violácea profunda. Aromas de frutas vermelhas maduras, cereja, violetas e notas sutis de baunilha. Harmonização perfeita para nossas empanadas.',
        'de-ch': 'Tiefes Violettrot. Aromen von reifen roten Beeren, Kirsche, Veilchen und feiner Vanille. Der ideale Begleiter zu unseren Lehmofen-Empanadas.'
      }
    },
    'Lamadrid Terroir Selection Cabernet Sauvignon': {
      line: 'Terroir Selection',
      origin: 'Luján de Cuyo, Mendoza',
      aging: '10 meses en roble francés',
      temp: '16 °C – 18 °C',
      notes: {
        es: 'Expresivo perfil especiado, frutos del bosque, hoja de tomate e impronta herbal fresca que armoniza de forma extraordinaria con queso de cabra y remolachas asadas.',
        en: 'Expressive spiced profile, forest berries, tomato leaf, and fresh herbal character that harmonizes beautifully with goat cheese and roasted beets.',
        pt: 'Perfil condimentado expressivo, frutas do bosque e toque herbáceo fresco que harmoniza perfeitamente com queijo de cabra e beterraba.',
        'de-ch': 'Ausdrucksstarkes Gewürzprofil, Waldbeeren und frische Kräuternoten, wunderbar harmonisch zu Ziegenkäse und gerösteter Rande.'
      }
    },
    'Lamadrid Gran Reserva Malbec': {
      line: 'Gran Reserva · Viñas Centenarias (1929)',
      origin: 'Las Compuertas, Luján de Cuyo · 1.050 m.s.n.m.',
      aging: '16 meses en barricas nuevas de roble francés',
      temp: '17 °C – 18 °C',
      notes: {
        es: 'Nacido de viñedos antiguos de bajo rendimiento en Las Compuertas. Gran concentración de mora, ciruela negra, grafito y chocolate amargo, con taninos dulces de textura sedosa.',
        en: 'Born from low-yielding historic vines in Las Compuertas. Intense concentration of blackberry, black plum, graphite, and dark chocolate, with sweet, silky tannins.',
        pt: 'Nascido de vinhedos antigos de baixo rendimento em Las Compuertas. Grande concentração de amora, ameixa negra, grafite e chocolate amargo.',
        'de-ch': 'Aus alten, ertragsarmen Reben in Las Compuertas. Hohe Konzentration von Brombeere, dunkler Pflaume, Graphit und dunkler Schokolade mit seidigen Tanninen.'
      }
    },
    'Guillermo Cabernet Sauvignon': {
      line: 'Vino de Autor · Alta Gama',
      origin: 'Primera Zona, Luján de Cuyo',
      aging: '18 meses en barricas seleccionadas de roble francés',
      temp: '17 °C – 19 °C',
      notes: {
        es: 'Homenaje de familia: un Cabernet Sauvignon majestuoso, de gran estructura, notas de casis negro, cedro, especias exóticas y un final interminable que abraza carnes confitadas.',
        en: 'A family tribute: a majestic, full-structured Cabernet Sauvignon with blackcurrant, cedarbox, exotic spices, and an endless finish that embraces slow-braised meats.',
        pt: 'Homenagem da família: um Cabernet Sauvignon majestoso, de grande estrutura, notas de cassis negro, cedro, especiarias exóticas e final longo.',
        'de-ch': 'Eine Familien-Hommage: ein majestätischer Cabernet Sauvignon mit grosser Struktur, Cassis, Zedernholz, exotischen Gewürzen und langem Finale.'
      }
    },
    'Lamadrid Gran Reserva Cabernet Franc': {
      line: 'Gran Reserva · Parcelas de Altura',
      origin: 'Las Compuertas, Luján de Cuyo · 1.050 m.s.n.m.',
      aging: '14 meses en barricas de roble francés',
      temp: '16 °C – 18 °C',
      notes: {
        es: 'Vibrante y sofisticado: notas de eucalipto, frambuesa negra, pimienta rosa y grafito mineral. Su tensión y elegancia realzan pastas rellenas de hongos y frutos secos.',
        en: 'Vibrant and sophisticated: notes of eucalyptus, black raspberry, pink peppercorn, and mineral graphite. Its tension and poise elevate mushroom pasta and nuts.',
        pt: 'Vibrante e sofisticado: notas de eucalipto, framboesa negra, pimenta rosa e grafite mineral. Sua elegância realça massas de cogumelos e nozes.',
        'de-ch': 'Lebendig und raffiniert: Eukalyptus, schwarze Himbeere, rosa Pfeffer und mineralischer Graphit. Perfekt zu Waldpilz-Pasta und Nüssen.'
      }
    },
    'Matilde Malbec': {
      line: 'Vino Ícono de la Bodega · Edición Limitada',
      origin: 'Parcela Histórica Las Compuertas · Luján de Cuyo',
      aging: '18 a 24 meses en barricas de roble francés de tonelerías exclusivas',
      temp: '17 °C – 19 °C',
      notes: {
        es: 'La máxima expresión de Lamadrid Estate Wines. Selección de hileras centenarias en Las Compuertas. Profundidad abismal de violetas, frutos negros maduros, trufa y terciopelo puro en boca.',
        en: 'The pinnacle of Lamadrid Estate Wines. Micro-parcel selection of century-old rows in Las Compuertas. Profound layers of violets, black fruit, truffle, and pure velvet on the palate.',
        pt: 'A máxima expressão da Lamadrid Estate Wines. Seleção de fileiras centenárias em Las Compuertas. Profundidade de violetas, frutas negras e puro veludo em boca.',
        'de-ch': 'Das Flaggschiff von Lamadrid Estate Wines aus hundertjährigen Parzellen in Las Compuertas. Tiefe Noten von Veilchen, dunklen Früchten, Trüffel und reinem Samt.'
      }
    },
    'Begani Private Selection': {
      line: 'Private Selection · Corte Exclusivo',
      origin: 'Luján de Cuyo, Mendoza',
      aging: '16 meses en roble francés',
      temp: '16 °C – 18 °C',
      notes: {
        es: 'Partida privada de extrema fineza aromática, capas especiadas y textura envolvente que acompaña con distinción platos de carácter y especias suaves.',
        en: 'Private batch of remarkable aromatic finesse, layered spices, and enveloping texture that pairs with distinction alongside aromatic dishes.',
        pt: 'Lote privado de extrema fineza aromática, camadas de especiarias e textura envolvente que acompanha com distinção pratos aromáticos.',
        'de-ch': 'Private Selektion von höchster aromatischer Finesse, vielschichtigen Gewürzen und geschmeidiger Textur.'
      }
    },
    'ZunZun Pet Nat': {
      line: 'Pétillant Naturel · Método Ancestral',
      origin: 'Luján de Cuyo, Mendoza',
      aging: 'Fermentación natural terminada en botella sin filtrado',
      temp: '6 °C – 8 °C',
      notes: {
        es: 'Espumoso natural vibrante y descontracturado. Burbuja salvaje y crujiente, notas de pomelo rosado, durazno fresco y panadería artesanal. Ideal para el cierre dulce.',
        en: 'Vibrant, artisanal natural sparkling wine. Crisp wild bubbles, notes of pink grapefruit, fresh stone fruit, and sourdough brioche. Ideal for dessert.',
        pt: 'Espumante natural vibrante e artesanal. Borbulhas crocantes, notas de toranja rosa, pêssego fresco e panificação. Ideal para sobremesas.',
        'de-ch': 'Lebendiger, handwerklicher Naturschaumwein. Knackige Perlage, Noten von rosa Grapefruit, Steinobst und feiner Hefe. Perfekt zum Dessert.'
      }
    },
    'Margarita Espumoso': {
      line: 'Espumoso de Gala · Método Tradicional',
      origin: 'Mendoza, Argentina · Zonas Altas',
      aging: 'Segunda fermentación en botella sobre lías (Champenoise)',
      temp: '6 °C – 8 °C',
      notes: {
        es: 'Elegancia pura en copa: perlaje fino y persistente, aromas de frutos secos, brioche tostado, manzana dorada y cítricos confitados.',
        en: 'Pure elegance in the glass: fine, persistent perlage, aromas of toasted almonds, warm brioche, golden apple, and candied citrus.',
        pt: 'Elegância pura na taça: perlage fina e persistente, aromas de amêndoas, brioche tostado, maçã dourada e cítricos confitados.',
        'de-ch': 'Reine Eleganz im Glas: feine, anhaltende Perlage, Aromen von gerösteten Mandeln, warmem Brioche, gelbem Apfel und kandierten Zitrusfrüchten.'
      }
    },
    'Lamadrid Reserva Bonarda': {
      line: 'Línea Reserva',
      origin: 'Las Compuertas & Agrelo, Luján de Cuyo',
      aging: '12 meses en barricas de roble francés',
      temp: '16 °C – 17 °C',
      notes: {
        es: 'Bonarda de alta gama con notas de cereza negra, arándanos, especias dulces y taninos sedosos que abrazan el queso de cabra artesanal y el chutney.',
        en: 'High-altitude Bonarda with black cherry, blueberry, sweet spice, and silky tannins that embrace artisanal goat cheese and fruit chutney.',
        pt: 'Bonarda de alta gama com notas de cereja negra, mirtilo, especiarias doces e taninos sedosos.',
        'de-ch': 'Hochwertiger Bonarda mit Noten von Schwarzkirsche, Heidelbeere, süssen Gewürzen und seidigen Tanninen.'
      }
    },
    'Peñón de Agrelo Cabernet Sauvignon': {
      line: 'Terroir de Agrelo',
      origin: 'Agrelo, Luján de Cuyo · 980 m.s.n.m.',
      aging: '10 meses en roble',
      temp: '16 °C – 18 °C',
      notes: {
        es: 'Expresión clásica de Agrelo: pimienta negra, pimiento dulce asado y fruta roja madura sobre suelos franco-arcillosos que otorgan redondez en boca.',
        en: 'Classic Agrelo expression: black pepper, roasted sweet pepper, and ripe red fruit grown on clay-loam soils that lend a plush mid-palate.',
        pt: 'Expressão clássica de Agrelo: pimenta preta, pimentão doce assado e fruta vermelha madura com excelente volume de boca.',
        'de-ch': 'Klassischer Ausdruck aus Agrelo: schwarzer Pfeffer, süsse Paprika und reife rote Früchte mit rundem Gaumenfluss.'
      }
    },
    'Los Bocheros White Blend': {
      line: 'Corte de Blancas de la Casa',
      origin: 'Luján de Cuyo, Mendoza',
      aging: 'Crianza mixta sobre lías finas',
      temp: '8 °C – 10 °C',
      notes: {
        es: 'El blanco insignia de nuestro restaurante: conjuga frescura cítrica, flores de azahar y untuosidad en paladar, pensado especialmente para limpiar y realzar la molleja dorada.',
        en: 'Our restaurant’s signature white blend: combines citrus freshness, orange blossom, and mid-palate richness, crafted to cleanse and elevate crispy sweetbreads.',
        pt: 'O blend branco assinatura do nosso restaurante: combina frescor cítrico, flor de laranjeira e untuosidade, ideal para acompanhar as molejas.',
        'de-ch': 'Die weisse Hauscuvée unseres Restaurants: verbindet Zitrusfrische, Orangenblüte und feinen Schmelz, ideal zur knusprigen Kalbsmilke.'
      }
    },
    'Peñón de Agrelo Corte de Finca': {
      line: 'Blend de Autor',
      origin: 'Agrelo, Luján de Cuyo',
      aging: '12 meses en barricas de roble francés',
      temp: '16 °C – 18 °C',
      notes: {
        es: 'Corte armonioso de variedades tintas seleccionadas de nuestra finca en Agrelo, combinando fruta jugosa, especias finas y estructura envolvente.',
        en: 'Harmonious estate red blend from Agrelo combining juicy dark fruit, fine baking spices, and an enveloping structure.',
        pt: 'Corte harmonioso de castas tintas selecionadas da nossa propriedade em Agrelo, combinando fruta suculenta e estrutura envolvente.',
        'de-ch': 'Harmonische rote Guts-Cuvée aus Agrelo mit saftiger dunkler Frucht, feinen Gewürzen und geschmeidiger Struktur.'
      }
    }
  };

  const flags = {
    es: '🇦🇷',
    en: '🇬🇧',
    pt: '🇧🇷',
    'de-ch': '🇨🇭'
  };

  const langNames = {
    es: 'ES',
    en: 'EN',
    pt: 'PT',
    'de-ch': 'CH'
  };

  let currentLang = 'es';
  let currentSeason = 'spring'; // 'spring' | 'autumn'
  const selectedDishes = new Set(); // Stores dish IDs like 'sp_e1'

  // --- Course Data for Autumn Step-by-Step Mode ---
  const coursesData = [
    {
      step: 1,
      roman: 'I',
      dishKey: 'dish_1_name',
      descKey: 'dish_1_desc',
      standardWine: 'Lamadrid Reserva Bonarda',
      standardNotesKey: 'wine_1_std_notes',
      upgradeWine: 'Lamadrid Gran Reserva Chardonnay',
      upgradeNotesKey: 'wine_1_upg_notes'
    },
    {
      step: 2,
      roman: 'II',
      dishKey: 'dish_2_name',
      descKey: 'dish_2_desc',
      standardWine: 'Peñón de Agrelo Cabernet Sauvignon',
      standardNotesKey: 'wine_2_std_notes',
      upgradeWine: 'Lamadrid Reserva Cabernet Sauvignon',
      upgradeNotesKey: 'wine_2_upg_notes'
    },
    {
      step: 3,
      roman: 'III',
      dishKey: 'dish_3_name',
      descKey: 'dish_3_desc',
      standardWine: 'Los Bocheros White Blend',
      standardNotesKey: 'wine_3_std_notes',
      upgradeWine: 'Peñón de Agrelo Corte de Finca',
      upgradeNotesKey: 'wine_3_upg_notes'
    },
    {
      step: 4,
      roman: 'IV',
      dishKey: 'dish_4_name',
      badgeKey: 'dish_4_badge',
      tagKey: 'specialty_tag',
      descKey: 'dish_4_desc',
      standardWine: 'Lamadrid Reserva Malbec',
      standardNotesKey: 'wine_4_std_notes',
      upgradeWine: 'Lamadrid Gran Reserva Malbec',
      upgradeNotesKey: 'wine_4_upg_notes'
    },
    {
      step: 5,
      roman: 'V',
      dishKey: 'dish_5_name',
      tagKey: 'main_tag',
      descKey: 'dish_5_desc',
      standardWine: 'Lamadrid Gran Reserva Malbec',
      standardNotesKey: 'wine_5_std_notes',
      upgradeWine: 'Matilde Malbec',
      upgradeNotesKey: 'wine_5_upg_notes',
      isIconic: true
    },
    {
      step: 6,
      roman: 'VI',
      dishKey: 'dish_6_name',
      tagKey: 'cleanser_tag',
      descKey: 'dish_6_desc',
      isCleanser: true
    },
    {
      step: 7,
      roman: 'VII',
      dishKey: 'dish_7_name',
      tagKey: 'dessert_tag',
      descKey: 'dish_7_desc',
      standardWine: 'ZunZun Pet Nat',
      standardNotesKey: 'wine_7_std_notes',
      upgradeWine: 'Margarita Espumoso',
      upgradeNotesKey: 'wine_7_upg_notes'
    }
  ];

  let currentStepIndex = 0;

  // --- Elements ---
  const seasonTabs = document.querySelectorAll('.season-tab-btn');
  const heroImg = document.getElementById('hero-img');
  const heroSeasonTag = document.getElementById('hero-season-tag');
  const heroMenuTitle = document.getElementById('hero-menu-title');
  const heroTypeBadge = document.getElementById('hero-type-badge');
  const menuSpringSection = document.getElementById('menu-spring-section');
  const menuAutumnSection = document.getElementById('menu-autumn-section');

  const langMenuBtn = document.getElementById('lang-menu-btn');
  const langDropdown = document.getElementById('lang-dropdown');
  const langOpts = document.querySelectorAll('.lang-opt');
  const activeFlag = document.getElementById('active-flag');
  const activeLangText = document.getElementById('active-lang-text');

  const filterChips = document.querySelectorAll('.filter-chip');
  const dietPills = document.querySelectorAll('.diet-pill');
  const printMenuBtn = document.getElementById('print-menu-btn');

  const viewCardModeBtn = document.getElementById('view-card-mode');
  const viewStepModeBtn = document.getElementById('view-step-mode');
  const autumnParchmentSheet = document.getElementById('autumn-parchment-sheet');
  const stepNavigator = document.getElementById('step-navigator');
  const stepProgressFill = document.getElementById('step-progress-fill');
  const activeStepIndicator = document.getElementById('active-step-indicator');
  const stepDotsContainer = document.getElementById('step-dots-container');
  const stepSlideDisplay = document.getElementById('step-slide-display');
  const prevStepBtn = document.getElementById('prev-step-btn');
  const nextStepBtn = document.getElementById('next-step-btn');
  const scrollToMenuBtn = document.getElementById('scroll-to-menu-btn');

  // Selection & Modals Elements
  const selectionBar = document.getElementById('selection-bar');
  const selectionCountEl = document.getElementById('selection-count');
  const selectionTotalEl = document.getElementById('selection-total');
  const clearSelectionBtn = document.getElementById('clear-selection-btn');
  const bookWithSelectionBtn = document.getElementById('book-with-selection-btn');

  const bookingModal = document.getElementById('booking-modal');
  const closeBookingModalBtn = document.getElementById('close-booking-modal');
  const bookingForm = document.getElementById('booking-form');
  const bookExperienceSelect = document.getElementById('book-experience');
  const bookDateInput = document.getElementById('book-date');
  const modalPreselectionBox = document.getElementById('modal-preselection-box');
  const modalPreselectionList = document.getElementById('modal-preselection-list');

  const wineModal = document.getElementById('wine-modal');
  const closeWineModalBtn = document.getElementById('close-wine-modal');
  const wineModalBody = document.getElementById('wine-modal-body');

  // Initialize Default Date in Reservation Form
  if (bookDateInput) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    bookDateInput.min = `${yyyy}-${mm}-${dd}`;
    bookDateInput.value = `${yyyy}-${mm}-${dd}`;
  }

  // --- Season Switching ---
  function setSeason(season) {
    currentSeason = season;
    document.body.setAttribute('data-active-season', season);

    seasonTabs.forEach(tab => {
      const isMatch = tab.getAttribute('data-season') === season;
      tab.classList.toggle('active', isMatch);
      tab.setAttribute('aria-selected', isMatch ? 'true' : 'false');
    });

    const t = translations[currentLang];

    if (season === 'spring') {
      heroImg.src = 'assets/los-bocheros-spring.jpg';
      heroImg.alt = 'Terrazas primaverales de Los Bocheros Restó y viñedos';
      heroSeasonTag.textContent = t.spring_hero_tag;
      heroMenuTitle.textContent = t.spring_hero_title;
      heroTypeBadge.textContent = t.spring_hero_type;

      menuSpringSection.style.display = 'block';
      menuAutumnSection.style.display = 'none';
      if (bookExperienceSelect) bookExperienceSelect.value = 'Menú Primavera (A la Carta)';
    } else {
      heroImg.src = 'assets/los-bocheros-hero.jpg';
      heroImg.alt = 'Terrazas otoñales de Los Bocheros Restó y viñedos dorados';
      heroSeasonTag.textContent = t.autumn_hero_tag;
      heroMenuTitle.textContent = t.autumn_hero_title;
      heroTypeBadge.textContent = t.autumn_hero_type;

      menuSpringSection.style.display = 'none';
      menuAutumnSection.style.display = 'block';
      if (bookExperienceSelect) bookExperienceSelect.value = 'Menú Otoño (Degustación 7 Pasos)';
      renderStepSlide(currentStepIndex);
    }

    updateSelectionBarUI();
  }

  seasonTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      setSeason(tab.getAttribute('data-season'));
    });
  });

  // --- Language Switching ---
  function updateLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    document.documentElement.lang = lang;
    try {
      localStorage.setItem('lamadrid_lang', lang);
    } catch (_) {}

    const t = translations[lang];

    // Update Flag & Code in button
    activeFlag.textContent = flags[lang];
    activeLangText.textContent = langNames[lang];

    // Update active class in dropdown options
    langOpts.forEach(opt => {
      opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
    });

    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) {
        el.textContent = t[key];
      }
    });

    // Update add/selected dish button labels
    document.querySelectorAll('.add-selection-btn').forEach(btn => {
      const dishId = btn.getAttribute('data-dish-id');
      const isSelected = selectedDishes.has(dishId);
      const labelEl = btn.querySelector('.add-label');
      const iconEl = btn.querySelector('.add-icon');
      if (labelEl) labelEl.textContent = isSelected ? t.btn_added_dish : t.btn_add_dish;
      if (iconEl) iconEl.textContent = isSelected ? '✓' : '+';
    });

    // Update dynamic season texts on hero
    if (currentSeason === 'spring') {
      heroSeasonTag.textContent = t.spring_hero_tag;
      heroMenuTitle.textContent = t.spring_hero_title;
      heroTypeBadge.textContent = t.spring_hero_type;
    } else {
      heroSeasonTag.textContent = t.autumn_hero_tag;
      heroMenuTitle.textContent = t.autumn_hero_title;
      heroTypeBadge.textContent = t.autumn_hero_type;
    }

    renderStepSlide(currentStepIndex);
    updateSelectionBarUI();
  }

  // Toggle Dropdown
  langMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = langDropdown.classList.contains('show');
    langDropdown.classList.toggle('show', !isOpen);
    langMenuBtn.classList.toggle('open', !isOpen);
    langMenuBtn.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
  });

  document.addEventListener('click', () => {
    langDropdown.classList.remove('show');
    langMenuBtn.classList.remove('open');
    langMenuBtn.setAttribute('aria-expanded', 'false');
  });

  langOpts.forEach(opt => {
    opt.addEventListener('click', () => {
      const chosenLang = opt.getAttribute('data-lang');
      updateLanguage(chosenLang);
      langDropdown.classList.remove('show');
      langMenuBtn.classList.remove('open');
      langMenuBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // --- Pairing Filters ---
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const filterType = chip.getAttribute('data-filter');
      if (filterType === 'all') {
        document.body.removeAttribute('data-active-filter');
      } else {
        document.body.setAttribute('data-active-filter', filterType);
      }
    });
  });

  // --- Dietary / Culinary Style Filter in Spring Menu ---
  dietPills.forEach(pill => {
    pill.addEventListener('click', () => {
      dietPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const dietType = pill.getAttribute('data-diet');
      const springItems = menuSpringSection.querySelectorAll('.course-item');

      springItems.forEach(item => {
        const tags = (item.getAttribute('data-tags') || '').split(',');
        const matches = dietType === 'all' || tags.includes(dietType);
        item.classList.toggle('hidden-by-diet', !matches);
        const nextDivider = item.nextElementSibling;
        if (nextDivider && nextDivider.classList.contains('course-divider')) {
          nextDivider.classList.toggle('hidden-by-diet', !matches);
        }
      });
    });
  });

  // --- Dish Pre-Selection ("Mi Selección" A la Carta) ---
  function formatARS(amount) {
    return '$' + amount.toLocaleString('es-AR');
  }

  function updateSelectionBarUI() {
    if (!selectionBar) return;
    const t = translations[currentLang];

    if (selectedDishes.size === 0 || currentSeason !== 'spring') {
      selectionBar.style.display = 'none';
    } else {
      selectionBar.style.display = 'block';
    }

    let total = 0;
    const namesList = [];

    selectedDishes.forEach(dishId => {
      const article = document.querySelector(`.course-item[data-dish-id="${dishId}"]`);
      if (article) {
        const price = parseInt(article.getAttribute('data-price') || '0', 10);
        total += price;
        const nameKey = `${dishId}_name`;
        const title = t[nameKey] || article.querySelector('.dish-title')?.textContent || dishId;
        namesList.push(`${title} (${formatARS(price)})`);
      }
    });

    if (selectionCountEl) selectionCountEl.textContent = String(selectedDishes.size);
    if (selectionTotalEl) selectionTotalEl.textContent = formatARS(total);

    if (modalPreselectionBox && modalPreselectionList) {
      if (namesList.length > 0) {
        modalPreselectionBox.style.display = 'block';
        modalPreselectionList.innerHTML = namesList.map(n => `<li>• ${n}</li>`).join('');
      } else {
        modalPreselectionBox.style.display = 'none';
        modalPreselectionList.innerHTML = '';
      }
    }
  }

  document.querySelectorAll('.add-selection-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const dishId = btn.getAttribute('data-dish-id');
      const article = btn.closest('.course-item');
      const t = translations[currentLang];

      if (selectedDishes.has(dishId)) {
        selectedDishes.delete(dishId);
        btn.classList.remove('selected');
        if (article) article.classList.remove('dish-selected');
      } else {
        selectedDishes.add(dishId);
        btn.classList.add('selected');
        if (article) article.classList.add('dish-selected');
      }

      const labelEl = btn.querySelector('.add-label');
      const iconEl = btn.querySelector('.add-icon');
      const isSelected = selectedDishes.has(dishId);
      if (labelEl) labelEl.textContent = isSelected ? t.btn_added_dish : t.btn_add_dish;
      if (iconEl) iconEl.textContent = isSelected ? '✓' : '+';

      updateSelectionBarUI();
    });
  });

  if (clearSelectionBtn) {
    clearSelectionBtn.addEventListener('click', () => {
      selectedDishes.clear();
      const t = translations[currentLang];
      document.querySelectorAll('.add-selection-btn').forEach(btn => {
        btn.classList.remove('selected');
        const labelEl = btn.querySelector('.add-label');
        const iconEl = btn.querySelector('.add-icon');
        if (labelEl) labelEl.textContent = t.btn_added_dish ? t.btn_add_dish : 'Elegir';
        if (iconEl) iconEl.textContent = '+';
      });
      document.querySelectorAll('.course-item.dish-selected').forEach(el => {
        el.classList.remove('dish-selected');
      });
      updateSelectionBarUI();
    });
  }

  // --- Sommelier Wine Sheet Modal ---
  function openWineModal(wineName) {
    const info = winesCatalog[wineName];
    if (!info || !wineModal || !wineModalBody) return;

    const noteText = info.notes[currentLang] || info.notes.es;
    const labels = {
      es: { origin: 'Viñedo & Origen', aging: 'Crianza / Elaboración', temp: 'Servicio Ideal', bookWine: 'Consultar por este vino en mi reserva' },
      en: { origin: 'Vineyard & Origin', aging: 'Aging / Winemaking', temp: 'Serving Temp', bookWine: 'Inquire about this wine in my booking' },
      pt: { origin: 'Vinhedo & Origem', aging: 'Maturação / Elaboração', temp: 'Temperatura Ideal', bookWine: 'Consultar sobre este vinho na reserva' },
      'de-ch': { origin: 'Weinberg & Herkunft', aging: 'Ausbau / Vinifikation', temp: 'Serviertemperatur', bookWine: 'Diesen Wein bei meiner Reservation anfragen' }
    }[currentLang];

    wineModalBody.innerHTML = `
      <div style="text-align: center;">
        <span class="wine-sheet-badge">🍷 ${info.line}</span>
        <h3 class="wine-sheet-title" id="wine-modal-title">${wineName}</h3>
        <div class="wine-sheet-origin">${info.origin}</div>
      </div>
      <div class="wine-sheet-notes">
        “${noteText}”
      </div>
      <div class="wine-specs-grid">
        <div class="wine-spec-box">
          <span class="spec-label">${labels.aging}</span>
          <span class="spec-value">${info.aging}</span>
        </div>
        <div class="wine-spec-box">
          <span class="spec-label">${labels.temp}</span>
          <span class="spec-value">${info.temp}</span>
        </div>
      </div>
      <button type="button" class="btn btn-whatsapp btn-full" id="wine-modal-book-btn">
        <span>${labels.bookWine}</span>
      </button>
    `;

    wineModal.classList.add('open');
    wineModal.setAttribute('aria-hidden', 'false');

    const bookBtn = document.getElementById('wine-modal-book-btn');
    if (bookBtn) {
      bookBtn.addEventListener('click', () => {
        closeWineModal();
        const notesInput = document.getElementById('book-notes');
        if (notesInput) {
          notesInput.value = notesInput.value
            ? `${notesInput.value} · Interés en ${wineName}`
            : `Interés especial en degustar ${wineName}`;
        }
        openBookingModal();
      });
    }
  }

  function closeWineModal() {
    if (!wineModal) return;
    wineModal.classList.remove('open');
    wineModal.setAttribute('aria-hidden', 'true');
  }

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.wine-trigger');
    if (trigger) {
      const wineName = trigger.getAttribute('data-wine');
      if (wineName) openWineModal(wineName);
    }
  });

  if (closeWineModalBtn) {
    closeWineModalBtn.addEventListener('click', closeWineModal);
  }

  if (wineModal) {
    wineModal.addEventListener('click', (e) => {
      if (e.target === wineModal) closeWineModal();
    });
  }

  // --- Booking Assistant Modal (+54 9 2615 54-8460) ---
  function openBookingModal() {
    if (!bookingModal) return;
    updateSelectionBarUI();
    bookingModal.classList.add('open');
    bookingModal.setAttribute('aria-hidden', 'false');
  }

  function closeBookingModal() {
    if (!bookingModal) return;
    bookingModal.classList.remove('open');
    bookingModal.setAttribute('aria-hidden', 'true');
  }

  ['nav-reserve-btn', 'hero-reserve-btn', 'open-booking-modal-btn', 'floating-reserve-btn', 'book-with-selection-btn'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener('click', openBookingModal);
    }
  });

  if (closeBookingModalBtn) {
    closeBookingModalBtn.addEventListener('click', closeBookingModal);
  }

  if (bookingModal) {
    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) closeBookingModal();
    });
  }

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('book-name')?.value.trim() || 'Visitante';
      const guests = document.getElementById('book-guests')?.value || '2';
      const date = document.getElementById('book-date')?.value || '';
      const time = document.getElementById('book-time')?.value || '13:00 hs';
      const experience = document.getElementById('book-experience')?.value || '';
      const pairing = document.getElementById('book-pairing')?.value || '';
      const notes = document.getElementById('book-notes')?.value.trim() || '';

      const lines = [
        '🍷 *Solicitud de Reserva · Los Bocheros Restó (Lamadrid Estate Wines)*',
        '',
        `• *Nombre:* ${name}`,
        `• *Comensales:* ${guests} persona(s)`,
        `• *Fecha:* ${date}`,
        `• *Horario:* ${time}`,
        `• *Propuesta:* ${experience}`,
        `• *Maridaje:* ${pairing}`
      ];

      if (notes) {
        lines.push(`• *Notas / Restricciones:* ${notes}`);
      }

      if (selectedDishes.size > 0) {
        const t = translations.es;
        lines.push('');
        lines.push('*Platos preseleccionados de la carta:*');
        selectedDishes.forEach(dishId => {
          const dishTitle = t[`${dishId}_name`] || dishId;
          lines.push(`  - ${dishTitle}`);
        });
      }

      lines.push('');
      lines.push('Muchas gracias, aguardo confirmación de disponibilidad.');

      const waUrl = `https://wa.me/${OFFICIAL_WA_PHONE}?text=${encodeURIComponent(lines.join('\n'))}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      closeBookingModal();
    });
  }

  // --- View Mode Toggling (Autumn 7 Pasos Card vs. Step-by-Step) ---
  if (viewCardModeBtn && viewStepModeBtn) {
    viewCardModeBtn.addEventListener('click', () => {
      viewCardModeBtn.classList.add('active');
      viewStepModeBtn.classList.remove('active');
      autumnParchmentSheet.style.display = 'block';
      stepNavigator.style.display = 'none';
    });

    viewStepModeBtn.addEventListener('click', () => {
      viewStepModeBtn.classList.add('active');
      viewCardModeBtn.classList.remove('active');
      autumnParchmentSheet.style.display = 'none';
      stepNavigator.style.display = 'block';
      renderStepSlide(currentStepIndex);
    });
  }

  // --- Step-by-Step Interactive Navigator (Autumn) ---
  function initStepDots() {
    if (!stepDotsContainer) return;
    stepDotsContainer.innerHTML = '';
    coursesData.forEach((_, idx) => {
      const dot = document.createElement('div');
      dot.className = `step-dot ${idx === currentStepIndex ? 'active' : ''}`;
      dot.setAttribute('title', `Paso ${idx + 1}`);
      dot.addEventListener('click', () => {
        currentStepIndex = idx;
        renderStepSlide(currentStepIndex);
      });
      stepDotsContainer.appendChild(dot);
    });
  }

  function renderStepSlide(idx) {
    if (!stepSlideDisplay) return;
    const t = translations[currentLang];
    const item = coursesData[idx];

    if (stepProgressFill) {
      const pct = ((idx + 1) / coursesData.length) * 100;
      stepProgressFill.style.width = `${pct.toFixed(2)}%`;
    }

    // Indicator
    if (activeStepIndicator) {
      if (currentLang === 'es') activeStepIndicator.textContent = `Paso ${idx + 1} de ${coursesData.length}`;
      else if (currentLang === 'en') activeStepIndicator.textContent = `Course ${idx + 1} of ${coursesData.length}`;
      else if (currentLang === 'pt') activeStepIndicator.textContent = `Etapa ${idx + 1} de ${coursesData.length}`;
      else activeStepIndicator.textContent = `Gang ${idx + 1} von ${coursesData.length}`;
    }

    // Dots
    document.querySelectorAll('.step-dot').forEach((dot, dotIdx) => {
      dot.classList.toggle('active', dotIdx === idx);
    });

    if (prevStepBtn) prevStepBtn.disabled = idx === 0;
    if (nextStepBtn) nextStepBtn.disabled = idx === coursesData.length - 1;

    let pairingsHTML = '';
    if (item.isCleanser) {
      pairingsHTML = `
        <div class="dish-pairings-note">
          <span class="cleanser-text">${t.cleanser_info}</span>
        </div>
      `;
    } else {
      pairingsHTML = `
        <div class="dish-pairings">
          <div class="pairing-row standard-pairing">
            <span class="pairing-badge standard-badge">${t.badge_pairing}</span>
            <button type="button" class="wine-name wine-trigger" data-wine="${item.standardWine}">${item.standardWine} <span class="wine-info-icon">🍷</span></button>
            <span class="wine-notes">${t[item.standardNotesKey] || ''}</span>
          </div>
          <div class="pairing-row upgrade-pairing ${item.isIconic ? 'iconic-wine' : ''}">
            <span class="pairing-badge upgrade-badge ${item.isIconic ? 'icon-flag' : ''}">
              ${item.isIconic ? t.badge_iconic : t.badge_upgrade}
            </span>
            <button type="button" class="wine-name wine-trigger" data-wine="${item.upgradeWine}">${item.upgradeWine} <span class="wine-info-icon">🍷</span></button>
            <span class="wine-notes">${t[item.upgradeNotesKey] || ''}</span>
          </div>
        </div>
      `;
    }

    const tagHTML = item.tagKey 
      ? `<span class="specialty-ribbon">${t[item.tagKey]}</span>` 
      : '';

    const badgeHTML = item.badgeKey 
      ? `<span class="chef-badge">${t[item.badgeKey]}</span>` 
      : '';

    stepSlideDisplay.innerHTML = `
      <div class="course-item active-slide" style="padding: 1rem 0;">
        <div class="course-step-tag">
          <span class="step-roman">${item.roman}</span>
          <span class="step-name">${t[`step_${item.step}_title`]}</span>
          ${tagHTML}
        </div>
        <div class="course-body">
          <div class="title-with-badge">
            <h3 class="dish-title">${t[item.dishKey]}</h3>
            ${badgeHTML}
          </div>
          <p class="dish-description" style="font-size: 1.15rem; margin: 0.8rem 0 1.2rem;">
            ${t[item.descKey]}
          </p>
          ${pairingsHTML}
        </div>
      </div>
    `;
  }

  if (prevStepBtn) {
    prevStepBtn.addEventListener('click', () => {
      if (currentStepIndex > 0) {
        currentStepIndex--;
        renderStepSlide(currentStepIndex);
      }
    });
  }

  if (nextStepBtn) {
    nextStepBtn.addEventListener('click', () => {
      if (currentStepIndex < coursesData.length - 1) {
        currentStepIndex++;
        renderStepSlide(currentStepIndex);
      }
    });
  }

  // Keyboard Navigation (Escape for modals, Arrows for Step-by-Step)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeBookingModal();
      closeWineModal();
      return;
    }
    if (currentSeason === 'autumn' && stepNavigator && stepNavigator.style.display !== 'none') {
      if (e.key === 'ArrowRight' && currentStepIndex < coursesData.length - 1) {
        currentStepIndex++;
        renderStepSlide(currentStepIndex);
      } else if (e.key === 'ArrowLeft' && currentStepIndex > 0) {
        currentStepIndex--;
        renderStepSlide(currentStepIndex);
      }
    }
  });

  // Touch Swipe Support on Step-by-Step Container
  if (stepSlideDisplay) {
    let touchStartX = 0;
    stepSlideDisplay.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    stepSlideDisplay.addEventListener('touchend', (e) => {
      const deltaX = e.changedTouches[0].screenX - touchStartX;
      if (Math.abs(deltaX) > 45) {
        if (deltaX < 0 && currentStepIndex < coursesData.length - 1) {
          currentStepIndex++;
          renderStepSlide(currentStepIndex);
        } else if (deltaX > 0 && currentStepIndex > 0) {
          currentStepIndex--;
          renderStepSlide(currentStepIndex);
        }
      }
    }, { passive: true });
  }

  // --- Print Menu Functionality ---
  printMenuBtn.addEventListener('click', () => {
    // If in autumn and in step mode, switch to full card before printing
    if (currentSeason === 'autumn' && autumnParchmentSheet && autumnParchmentSheet.style.display === 'none') {
      autumnParchmentSheet.style.display = 'block';
      stepNavigator.style.display = 'none';
      viewCardModeBtn.classList.add('active');
      viewStepModeBtn.classList.remove('active');
    }
    window.print();
  });

  // --- Smooth Scroll to Menu ---
  if (scrollToMenuBtn) {
    scrollToMenuBtn.addEventListener('click', () => {
      document.getElementById('menu-section').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // --- Initialize from URL params or LocalStorage ---
  initStepDots();
  const params = new URLSearchParams(window.location.search);
  const urlSeason = params.get('season');
  const urlLang = params.get('lang');
  let savedLang = null;
  try {
    savedLang = localStorage.getItem('lamadrid_lang');
  } catch (_) {}

  setSeason(urlSeason === 'autumn' ? 'autumn' : 'spring');
  if (urlLang && translations[urlLang]) {
    updateLanguage(urlLang);
  } else if (savedLang && translations[savedLang]) {
    updateLanguage(savedLang);
  }
});
