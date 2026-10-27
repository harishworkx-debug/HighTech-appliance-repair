export const business = {
  name: 'HighTech Appliance Repair',
  category: 'Appliance Repair Service',
  phoneDisplay: '858-399-8033',
  phoneHref: 'tel:+18583998033',
  website: 'https://www.refrigeratorrepair.pro/',
  mapsLink: 'https://maps.app.goo.gl/1rruyxb3cTS9sTwk8',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1699919.4405281586!2d-117.9124821!3d33.679046400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa0ddb375b559f193%3A0x168d7551466e6648!2sHighTech%20Appliance%20Repair!5e0!3m2!1sen!2sin!4v1792840650925!5m2!1sen!2sin',
  rating: 4.5,
  reviewCount: 35,
  primaryArea: 'San Diego, California',
  domain: 'www.refrigeratorrepair.pro',
};

export type Service = {
  slug: string;
  name: string;
  short: string;
  image: string;
  imageAlt: string;
  symptoms: string[];
  causes: string[];
  process: string[];
  considerations: string[];
  faqs: { q: string; a: string }[];
  metaTitle: string;
  metaDescription: string;
  intro: string;
};

export type Location = {
  slug: string;
  name: string;
  county: string;
  blurb: string;
  localInfo: string;
  faqs: { q: string; a: string }[];
  metaTitle: string;
  metaDescription: string;
};

export const services: Service[] = [
  {
    slug: 'refrigerator-repair',
    name: 'Refrigerator Repair',
    short:
      'Diagnosis and repair for cooling failures, leaks, frost buildup, and unusual noises across common refrigerator brands.',
    image:
      'https://images.pexels.com/photos/8032016/pexels-photo-8032016.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Stainless steel refrigerator in a modern kitchen',
    symptoms: [
      'Not cooling or running too warm',
      'Freezer building up frost or ice',
      'Water pooling on the floor or under crisper drawers',
      'Loud humming, clicking, or rattling sounds',
      'Ice maker not producing ice',
      'Interior light or display not working',
    ],
    causes: [
      'Worn or failing condenser or evaporator fan motors',
      'Clogged or frozen defrost drain lines',
      'Faulty temperature control thermostat or thermistor',
      'Dirty condenser coils reducing cooling efficiency',
      'Leaking door gaskets letting warm, humid air inside',
      'Malfunctioning compressor or start relay',
    ],
    process: [
      'Call to describe the symptom and confirm service availability in your area.',
      'A technician inspects the unit, checks temperature performance, and tests components.',
      'You receive an explanation of the likely cause and the repair options available.',
      'Common parts can be addressed during the visit when available.',
    ],
    considerations: [
      'Keep the doors closed as much as possible to hold temperature before service.',
      'Note any error codes displayed on the control panel.',
      'Have the brand and model number ready when you call.',
    ],
    faqs: [
      {
        q: 'Should I unplug my refrigerator if it stops cooling?',
        a: 'If the unit is warm and you cannot keep food cold safely, unplugging it can prevent further strain while you arrange service. Call to discuss what you are experiencing.',
      },
      {
        q: 'Can a noisy refrigerator still be repaired?',
        a: 'Yes. Humming, clicking, or rattling often points to a fan motor, compressor, or loose component that a technician can inspect and address.',
      },
      {
        q: 'Do you work on French-door and side-by-side models?',
        a: 'Call to confirm whether your specific brand and configuration is serviceable. Having the model number ready helps.',
      },
    ],
    metaTitle: 'Refrigerator Repair in San Diego | HighTech Appliance Repair',
    metaDescription:
      'Refrigerator not cooling, leaking, or making noise? Call HighTech Appliance Repair at 858-399-8033 for refrigerator repair service in San Diego.',
    intro:
      'A refrigerator that stops cooling can quickly become an urgent problem. HighTech Appliance Repair helps San Diego-area households address common refrigerator issues — from warm compartments and frost buildup to leaks and unusual noises. Call to describe the symptom and check service availability for your home.',
  },
  {
    slug: 'freezer-repair',
    name: 'Freezer Repair',
    short:
      'Service for stand-alone and built-in freezers that are thawing, over-freezing, or failing to maintain temperature.',
    image:
      'https://images.pexels.com/photos/4221389/pexels-photo-4221389.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Modern kitchen with stainless steel appliances',
    symptoms: [
      'Freezer thawing or food softening',
      'Heavy frost or ice accumulation',
      'Frost building up on the back wall',
      'Compressor running constantly',
      'Door seal gaps or sweating around the frame',
    ],
    causes: [
      'Defrost system failure (heater, timer, or limit switch)',
      'Damaged or warped door gasket',
      'Blocked airflow from a failed evaporator fan',
      'Faulty thermostat or temperature sensor',
      'Refrigerant charge concerns requiring a technician',
    ],
    process: [
      'Call to describe the temperature problem and freezer type.',
      'A technician checks the defrost system, airflow, and seal integrity.',
      'You receive an overview of the likely cause and available options.',
    ],
    considerations: [
      'Avoid forcing a heavily iced freezer open, which can damage the gasket.',
      'If food is thawing, move it to a working freezer or insulated cooler.',
    ],
    faqs: [
      {
        q: 'Why is frost building up inside my freezer?',
        a: 'Frost buildup is often linked to a defrost system issue or a door seal that is letting humid air in. A technician can inspect both.',
      },
      {
        q: 'Is a constantly running freezer dangerous?',
        a: 'It usually signals the unit is struggling to hold temperature. Call to arrange an inspection before the compressor is overworked.',
      },
    ],
    metaTitle: 'Freezer Repair in San Diego | HighTech Appliance Repair',
    metaDescription:
      'Freezer thawing or icing over? Call HighTech Appliance Repair at 858-399-8033 for freezer repair service in the San Diego area.',
    intro:
      'A freezer that thaws or ices over can ruin stored food fast. HighTech Appliance Repair helps customers in the San Diego area address freezer temperature problems, frost buildup, and seal issues. Call to discuss what is happening and confirm service availability.',
  },
  {
    slug: 'washer-repair',
    name: 'Washer Repair',
    short:
      'Repair help for washers that will not drain, spin, fill, or that leak and make unusual noise during a cycle.',
    image:
      'https://images.pexels.com/photos/4700389/pexels-photo-4700389.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Close-up of a washing machine',
    symptoms: [
      'Washer will not drain or spin',
      'Water will not fill or fills slowly',
      'Leaking water from underneath or the door',
      'Loud banging, grinding, or shaking during spin',
      'Cycle stops partway through',
      'Door or lid will not lock or unlock',
    ],
    causes: [
      'Clogged or failed drain pump',
      'Worn door seal or tub gasket leak',
      'Faulty water inlet valve',
      'Worn drive belt, shock absorber, or tub bearing',
      'Lock assembly or control board issue',
    ],
    process: [
      'Call to describe the symptom and the washer brand.',
      'A technician inspects the pump, valves, and drive components.',
      'You receive a clear explanation and the available repair options.',
    ],
    considerations: [
      'If the washer will not drain, avoid forcing the door open with water inside.',
      'Have the brand and model number ready when you call.',
    ],
    faqs: [
      {
        q: 'Why will not my washer drain?',
        a: 'A clogged or failed drain pump is a common cause. Coins and debris often block the pump, which a technician can clear or replace.',
      },
      {
        q: 'My washer shakes violently on spin — is it fixable?',
        a: 'Yes. Violent shaking is often from a worn shock absorber, unbalanced load, or tub bearing issue that a technician can inspect.',
      },
    ],
    metaTitle: 'Washer Repair in San Diego | HighTech Appliance Repair',
    metaDescription:
      'Washer not draining, spinning, or leaking? Call HighTech Appliance Repair at 858-399-8033 for washing machine repair in San Diego.',
    intro:
      'A washer that leaks, will not drain, or shakes violently can disrupt your whole week. HighTech Appliance Repair helps San Diego-area residents address common washing machine problems. Call to describe the symptom and check whether service is available for your model.',
  },
  {
    slug: 'dryer-repair',
    name: 'Dryer Repair',
    short:
      'Service for dryers that will not heat, tumble, start, or that take too long to dry a normal load.',
    image:
      'https://images.pexels.com/photos/8774376/pexels-photo-8774376.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Laundry machines in a facility',
    symptoms: [
      'Dryer runs but produces no heat',
      'Drum will not turn or tumbles intermittently',
      'Dryer will not start at all',
      'Clothes take much longer than usual to dry',
      'Squeaking, thumping, or grinding noise',
      'Burning smell while running',
    ],
    causes: [
      'Failed heating element or thermal fuse',
      'Worn drum belt, rollers, or idler pulley',
      'Faulty door switch or start switch',
      'Clogged vent restricting airflow',
      'Worn blower wheel or motor',
    ],
    process: [
      'Call to describe whether the dryer heats, tumbles, and starts.',
      'A technician tests the heating circuit, drive components, and venting.',
      'You receive an explanation of the cause and the repair options.',
    ],
    considerations: [
      'A burning smell or overheating dryer should be stopped and inspected before further use.',
      'A clogged vent can cause long dry times even when the dryer itself is fine.',
    ],
    faqs: [
      {
        q: 'Why is my dryer running but not heating?',
        a: 'A failed heating element or blown thermal fuse is a frequent cause. A technician can test the heating circuit safely.',
      },
      {
        q: 'Could long dry times be a vent problem instead of the dryer?',
        a: 'Yes. A restricted vent reduces airflow and lengthens dry times. A technician can help identify whether the issue is the dryer or the venting.',
      },
    ],
    metaTitle: 'Dryer Repair in San Diego | HighTech Appliance Repair',
    metaDescription:
      'Dryer not heating, tumbling, or starting? Call HighTech Appliance Repair at 858-399-8033 for dryer repair service in San Diego.',
    intro:
      'A dryer that will not heat or tumble can bring laundry to a halt. HighTech Appliance Repair helps San Diego-area households troubleshoot common dryer problems, from no-heat failures to noisy drums. Call to describe what is happening and confirm service availability.',
  },
  {
    slug: 'dishwasher-repair',
    name: 'Dishwasher Repair',
    short:
      'Repair help for dishwashers that will not drain, clean properly, fill, or complete a cycle.',
    image:
      'https://images.pexels.com/photos/3829549/pexels-photo-3829549.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Open stainless steel dishwasher in a kitchen',
    symptoms: [
      'Dishes come out dirty or with residue',
      'Water will not drain from the tub',
      'Dishwasher will not fill with water',
      'Cycle stops or will not start',
      'Leaking water onto the floor',
      'Loud grinding or humming during operation',
    ],
    causes: [
      'Clogged spray arms or filter',
      'Failed drain pump or check valve',
      'Faulty water inlet valve',
      'Worn door seal or latch switch',
      'Blocked or kinked drain line',
    ],
    process: [
      'Call to describe the symptom and dishwasher brand.',
      'A technician inspects the spray arms, pump, and drain path.',
      'You receive a clear explanation and available repair options.',
    ],
    considerations: [
      'If water remains in the tub, avoid running another cycle until it is inspected.',
      'Rinse away large food scraps to help the technician diagnose correctly.',
    ],
    faqs: [
      {
        q: 'Why are my dishes still dirty after a full cycle?',
        a: 'Clogged spray arms, a dirty filter, or a failing wash pump are common causes. A technician can inspect and clean or replace the affected parts.',
      },
      {
        q: 'Water is sitting in the bottom of my dishwasher — is that normal?',
        a: 'A small amount of water in the sump is normal, but a full tub of standing water usually means a drain problem. Call to arrange service.',
      },
    ],
    metaTitle: 'Dishwasher Repair in San Diego | HighTech Appliance Repair',
    metaDescription:
      'Dishwasher not draining, cleaning, or filling? Call HighTech Appliance Repair at 858-399-8033 for dishwasher repair in San Diego.',
    intro:
      'A dishwasher that leaves dishes dirty or will not drain is a daily inconvenience. HighTech Appliance Repair helps San Diego-area customers address common dishwasher problems. Call to describe the symptom and check service availability for your home.',
  },
  {
    slug: 'oven-repair',
    name: 'Oven Repair',
    short:
      'Service for electric and gas ovens that will not heat, hold temperature, or bake evenly.',
    image:
      'https://images.pexels.com/photos/7534297/pexels-photo-7534297.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Modern kitchen with stainless steel appliances',
    symptoms: [
      'Oven will not heat or takes too long to preheat',
      'Bakes unevenly or burns the bottom of food',
      'Temperature is far off from the set point',
      'Error code on the display',
      'Gas smell or igniter will not light',
      'Door will not close or seal properly',
    ],
    causes: [
      'Failed bake or broil element (electric ovens)',
      'Weak or broken igniter (gas ovens)',
      'Faulty temperature sensor or thermostat',
      'Malfunctioning electronic control board',
      'Worn door hinge or gasket',
    ],
    process: [
      'Call to describe whether the oven is gas or electric and the symptom.',
      'A technician tests the heating element or igniter and temperature sensor.',
      'You receive a clear explanation and the available repair options.',
    ],
    considerations: [
      'If you smell gas, leave the area and call your gas utility before arranging appliance service.',
      'Note any error codes shown on the display.',
    ],
    faqs: [
      {
        q: 'Why does my oven heat unevenly?',
        a: 'A failing bake element or an inaccurate temperature sensor often causes uneven baking. A technician can test both.',
      },
      {
        q: 'My gas oven igniter glows but the burner will not light — why?',
        a: 'A weak igniter can glow without drawing enough current to open the gas valve. It usually needs replacement.',
      },
    ],
    metaTitle: 'Oven Repair in San Diego | HighTech Appliance Repair',
    metaDescription:
      'Oven not heating or baking unevenly? Call HighTech Appliance Repair at 858-399-8033 for oven repair service in San Diego.',
    intro:
      'An oven that will not heat or bake evenly makes meal planning difficult. HighTech Appliance Repair helps San Diego-area households troubleshoot common oven problems in both gas and electric models. Call to describe the symptom and confirm service availability.',
  },
  {
    slug: 'stove-and-range-repair',
    name: 'Stove and Range Repair',
    short:
      'Repair help for cooktops and ranges with burners that will not ignite, heat, or respond to controls.',
    image:
      'https://images.pexels.com/photos/6636288/pexels-photo-6636288.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Modern kitchen with built-in appliances',
    symptoms: [
      'Gas burner will not ignite or lights unevenly',
      'Electric burner will not heat',
      'Burner heats only on the highest setting',
      'Control knob is unresponsive or loose',
      'Clicking sound continues after the burner lights',
      'Glass cooktop has a cracked surface',
    ],
    causes: [
      'Clogged or wet gas burner cap and igniter',
      'Failed surface element or infinite switch (electric)',
      'Worn spark module or igniter switch',
      'Damaged control knob or valve',
      'Cracked glass cooktop requiring replacement',
    ],
    process: [
      'Call to describe which burner is affected and whether it is gas or electric.',
      'A technician inspects the igniter, element, and controls.',
      'You receive an explanation of the cause and the repair options.',
    ],
    considerations: [
      'A cracked glass cooktop should be unplugged and not used until repaired.',
      'For gas smells, leave the area and call your gas utility first.',
    ],
    faqs: [
      {
        q: 'Why will not my gas burner ignite even when I hear clicking?',
        a: 'A wet, dirty, or misaligned burner cap, or a weak spark module, can prevent ignition. A technician can clean or replace the affected parts.',
      },
      {
        q: 'One electric burner will not heat — do I need a new stove?',
        a: 'Not usually. A single failed element or infinite switch can often be replaced without replacing the whole range.',
      },
    ],
    metaTitle: 'Stove and Range Repair in San Diego | HighTech Appliance Repair',
    metaDescription:
      'Burner will not ignite or heat? Call HighTech Appliance Repair at 858-399-8033 for stove and range repair in San Diego.',
    intro:
      'A burner that will not ignite or heat slows down every meal. HighTech Appliance Repair helps San Diego-area customers troubleshoot common stove and range problems on both gas and electric cooktops. Call to describe the symptom and confirm service availability.',
  },
  {
    slug: 'microwave-repair',
    name: 'Microwave Repair',
    short:
      'Service for microwaves that will not heat, start, or that make unusual noise or spark inside.',
    image:
      'https://images.pexels.com/photos/8142867/pexels-photo-8142867.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Kitchen with built-in appliances',
    symptoms: [
      'Microwave runs but does not heat',
      'Turntable will not rotate',
      'Will not start or responds to no commands',
      'Sparking or arcing inside the cavity',
      'Loud buzzing or humming while running',
      'Door will not latch properly',
    ],
    causes: [
      'Failed magnetron or diode',
      'Worn turntable motor',
      'Faulty door switch assembly',
      'Blown internal fuse',
      'Damaged waveguide cover causing arcing',
    ],
    process: [
      'Call to describe whether the microwave heats, starts, and turns.',
      'A technician tests the magnetron, door switches, and turntable motor.',
      'You receive an explanation and the available repair options.',
    ],
    considerations: [
      'Stop using a microwave that sparks or arcs and unplug it.',
      'Built-in microwaves may require trim kit removal to service.',
    ],
    faqs: [
      {
        q: 'Is a microwave that runs but does not heat worth repairing?',
        a: 'It depends on the cause and the model. A failed magnetron or diode is a common culprit — call to discuss whether repair makes sense for your unit.',
      },
      {
        q: 'Why is my microwave sparking?',
        a: 'Sparking is often caused by a damaged waveguide cover or food debris. Stop using it and arrange an inspection.',
      },
    ],
    metaTitle: 'Microwave Repair in San Diego | HighTech Appliance Repair',
    metaDescription:
      'Microwave not heating, starting, or sparking? Call HighTech Appliance Repair at 858-399-8033 for microwave repair in San Diego.',
    intro:
      'A microwave that runs but will not heat is a common frustration. HighTech Appliance Repair helps San Diego-area customers troubleshoot microwave problems, from no-heat failures to turntable and door switch issues. Call to describe the symptom and confirm service availability.',
  },
  {
    slug: 'ice-maker-repair',
    name: 'Ice Maker Repair',
    short:
      'Service for refrigerator ice makers that will not produce ice, eject cubes, or fill with water.',
    image:
      'https://images.pexels.com/photos/7027760/pexels-photo-7027760.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Kitchen with stainless steel refrigerator and stove',
    symptoms: [
      'Ice maker produces no ice',
      'Cubes are small, hollow, or clumped together',
      'Ice will not eject from the mold',
      'Water fills the mold but does not freeze',
      'Ice maker leaks water into the freezer',
      'Arm or sensor is stuck',
    ],
    causes: [
      'Clogged or frozen water fill tube',
      'Faulty water inlet valve',
      'Broken ice maker module or ejector gear',
      'Low water pressure to the refrigerator',
      'Failed mold heater preventing release',
    ],
    process: [
      'Call to describe whether the mold fills with water and whether cubes eject.',
      'A technician checks the fill tube, inlet valve, and ice maker module.',
      'You receive a clear explanation and the available repair options.',
    ],
    considerations: [
      'Check that the water supply valve behind the refrigerator is fully open.',
      'A frozen fill tube can sometimes be thawed, but recurring freezing needs service.',
    ],
    faqs: [
      {
        q: 'Why is my ice maker making hollow or small cubes?',
        a: 'Low water pressure or a partially clogged inlet valve often causes small or hollow cubes. A technician can check both.',
      },
      {
        q: 'The mold fills with water but no ice forms — what is wrong?',
        a: 'That can point to a freezer temperature issue or a failed mold heater. Call to arrange an inspection.',
      },
    ],
    metaTitle: 'Ice Maker Repair in San Diego | HighTech Appliance Repair',
    metaDescription:
      'Ice maker not producing or ejecting ice? Call HighTech Appliance Repair at 858-399-8033 for ice maker repair in San Diego.',
    intro:
      'An ice maker that stops producing ice is a minor annoyance that adds up. HighTech Appliance Repair helps San Diego-area households address common ice maker problems, from frozen fill tubes to failed modules. Call to describe the symptom and confirm service availability.',
  },
  {
    slug: 'general-appliance-troubleshooting',
    name: 'General Appliance Troubleshooting',
    short:
      'Help identifying the problem when an appliance is behaving unexpectedly and you are not sure which part is at fault.',
    image:
      'https://images.pexels.com/photos/38264265/pexels-photo-38264265.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Technician repairing electronic equipment at a workbench',
    symptoms: [
      'Appliance runs but will not complete its cycle',
      'Intermittent behavior that is hard to reproduce',
      'Error code on the display that you cannot clear',
      'Unusual smell, sound, or vibration',
      'Unit is completely unresponsive',
      'You are unsure whether to repair or replace',
    ],
    causes: [
      'Control board or user interface fault',
      'Loose wiring connection or failed sensor',
      'Power supply or breaker issue',
      'A combination of worn components',
      'A single failed part masking a second issue',
    ],
    process: [
      'Call to describe what the appliance is doing and when it started.',
      'A technician inspects the unit and tests the likely components.',
      'You receive a clear explanation and the available repair options.',
    ],
    considerations: [
      'Note any error codes and when the problem occurs (e.g. mid-cycle).',
      'Have the brand and model number ready when you call.',
    ],
    faqs: [
      {
        q: 'I do not know what is wrong — can I still call?',
        a: 'Absolutely. Describing what the appliance does (or does not do) is enough to start. A technician can diagnose the rest on site.',
      },
      {
        q: 'Should I repair or replace my appliance?',
        a: 'That depends on the failure, the age of the unit, and the cost of repair. Call to discuss the situation and your options.',
      },
    ],
    metaTitle: 'General Appliance Troubleshooting in San Diego | HighTech Appliance Repair',
    metaDescription:
      'Appliance acting up and not sure why? Call HighTech Appliance Repair at 858-399-8033 for general appliance troubleshooting in San Diego.',
    intro:
      'Sometimes an appliance problem is hard to pin down. HighTech Appliance Repair helps San Diego-area customers troubleshoot unusual appliance behavior and figure out the next step. Call to describe what is happening and check service availability.',
  },
];

export const locations: Location[] = [
  {
    slug: 'san-diego-ca',
    name: 'San Diego',
    county: 'San Diego County',
    blurb:
      'HighTech Appliance Repair serves households in San Diego, helping with refrigerators, washers, dryers, dishwashers, ovens, and other common household appliances. Call to confirm service availability for your neighborhood.',
    localInfo:
      'San Diego is the largest city in the region, with neighborhoods stretching from the coast to inland canyons. Older housing stock near the core and newer builds inland mean a wide range of appliance ages and brands show up for service. Coastal humidity can also affect door seals and condenser coils over time.',
    faqs: [
      {
        q: 'Do you serve all neighborhoods in San Diego?',
        a: 'Call with your ZIP code to confirm whether service is available in your part of the city before scheduling.',
      },
      {
        q: 'Can you help with an appliance in a rental or condo?',
        a: 'Yes, call to discuss the situation. Having the brand and model number ready helps the technician prepare.',
      },
    ],
    metaTitle: 'Appliance Repair San Diego, CA | HighTech Appliance Repair',
    metaDescription:
      'Need appliance repair in San Diego, CA? Call HighTech Appliance Repair at 858-399-8033 for refrigerators, washers, dryers, ovens, and more.',
  },
  {
    slug: 'chula-vista-ca',
    name: 'Chula Vista',
    county: 'San Diego County',
    blurb:
      'HighTech Appliance Repair helps Chula Vista households address common appliance problems, from refrigerators that will not cool to washers that will not drain. Call to confirm service availability in your part of the city.',
    localInfo:
      'Chula Vista sits south of downtown San Diego and includes both established neighborhoods and growing communities in the eastern mesas. Households here often need service for refrigerators, washers, and ovens in everyday use.',
    faqs: [
      {
        q: 'Do you service eastern Chula Vista near Otay Ranch?',
        a: 'Call with your address or ZIP code to confirm service availability before scheduling.',
      },
      {
        q: 'Can you help with a refrigerator in Chula Vista the same week I call?',
        a: 'Service availability depends on the schedule. Call as early as possible to discuss the timing.',
      },
    ],
    metaTitle: 'Appliance Repair Chula Vista, CA | HighTech Appliance Repair',
    metaDescription:
      'Appliance not working in Chula Vista, CA? Call HighTech Appliance Repair at 858-399-8033 for refrigerator, washer, dryer, and oven repair.',
  },
  {
    slug: 'la-mesa-ca',
    name: 'La Mesa',
    county: 'San Diego County',
    blurb:
      'HighTech Appliance Repair helps La Mesa residents troubleshoot and repair common household appliances. Call to describe the problem and check service availability in your area.',
    localInfo:
      'La Mesa is an inland city east of San Diego known for its mix of mid-century homes and newer developments. With warm summer temperatures, refrigerators and freezers here can be stressed during hotter months.',
    faqs: [
      {
        q: 'Do you service La Mesa and the surrounding neighborhoods?',
        a: 'Call with your address to confirm whether service is available in your part of La Mesa.',
      },
      {
        q: 'My refrigerator is struggling during a heat wave — can you help?',
        a: 'Yes, call to describe the symptom. Hot weather can worsen cooling issues, so early diagnosis helps.',
      },
    ],
    metaTitle: 'Appliance Repair La Mesa, CA | HighTech Appliance Repair',
    metaDescription:
      'Need appliance repair in La Mesa, CA? Call HighTech Appliance Repair at 858-399-8033 for refrigerators, washers, dryers, and ovens.',
  },
  {
    slug: 'el-cajon-ca',
    name: 'El Cajon',
    county: 'San Diego County',
    blurb:
      'HighTech Appliance Repair helps El Cajon households with common appliance issues across refrigerators, washers, dryers, ovens, and more. Call to confirm service availability in your neighborhood.',
    localInfo:
      'El Cajon sits in a valley east of San Diego and experiences some of the warmer inland temperatures in the county. That heat can place extra load on refrigerators and freezers, making cooling issues more common in summer.',
    faqs: [
      {
        q: 'Do you serve El Cajon and the nearby communities?',
        a: 'Call with your address or ZIP code to confirm service availability before scheduling.',
      },
      {
        q: 'My freezer is thawing in the El Cajon heat — what should I do?',
        a: 'Call to arrange an inspection. Keeping the freezer closed as much as possible helps hold temperature before service.',
      },
    ],
    metaTitle: 'Appliance Repair El Cajon, CA | HighTech Appliance Repair',
    metaDescription:
      'Appliance not working in El Cajon, CA? Call HighTech Appliance Repair at 858-399-8033 for refrigerator, freezer, washer, and oven repair.',
  },
  {
    slug: 'santee-ca',
    name: 'Santee',
    county: 'San Diego County',
    blurb:
      'HighTech Appliance Repair helps Santee households address appliance problems across common household units. Call to describe the symptom and check service availability.',
    localInfo:
      'Santee is an inland community in the San Diego River valley with a mix of residential neighborhoods. Households here frequently need help with washers, dryers, and refrigerators in daily use.',
    faqs: [
      {
        q: 'Do you service Santee and the surrounding area?',
        a: 'Call with your address to confirm whether service is available in your part of Santee.',
      },
      {
        q: 'Can you help with a noisy washer in Santee?',
        a: 'Yes. Call to describe the noise and when it happens so the technician can come prepared.',
      },
    ],
    metaTitle: 'Appliance Repair Santee, CA | HighTech Appliance Repair',
    metaDescription:
      'Need appliance repair in Santee, CA? Call HighTech Appliance Repair at 858-399-8033 for washers, dryers, refrigerators, and ovens.',
  },
  {
    slug: 'poway-ca',
    name: 'Poway',
    county: 'San Diego County',
    blurb:
      'HighTech Appliance Repair helps Poway households troubleshoot and repair common household appliances. Call to describe the problem and confirm service availability.',
    localInfo:
      'Poway is an inland city north of San Diego known for its residential character and rural pockets. Households here often need service for kitchen appliances and laundry units.',
    faqs: [
      {
        q: 'Do you service Poway and nearby communities?',
        a: 'Call with your address or ZIP code to confirm service availability before scheduling.',
      },
      {
        q: 'Can you help with a double oven in Poway?',
        a: 'Yes. Call to describe the symptom and have the brand and model number ready.',
      },
    ],
    metaTitle: 'Appliance Repair Poway, CA | HighTech Appliance Repair',
    metaDescription:
      'Appliance not working in Poway, CA? Call HighTech Appliance Repair at 858-399-8033 for refrigerator, oven, washer, and dryer repair.',
  },
  {
    slug: 'national-city-ca',
    name: 'National City',
    county: 'San Diego County',
    blurb:
      'HighTech Appliance Repair helps National City households address common appliance issues. Call to describe the symptom and check service availability in your area.',
    localInfo:
      'National City lies just south of downtown San Diego and includes a mix of older and newer housing. Common service needs here include refrigerators, washers, and stoves.',
    faqs: [
      {
        q: 'Do you service National City?',
        a: 'Call with your address to confirm whether service is available in your part of National City.',
      },
      {
        q: 'Can you help with a gas stove that will not ignite?',
        a: 'Yes. Call to describe which burner is affected. If you smell gas, leave the area and call your gas utility first.',
      },
    ],
    metaTitle: 'Appliance Repair National City, CA | HighTech Appliance Repair',
    metaDescription:
      'Need appliance repair in National City, CA? Call HighTech Appliance Repair at 858-399-8033 for refrigerators, washers, stoves, and ovens.',
  },
  {
    slug: 'la-jolla-ca',
    name: 'La Jolla',
    county: 'San Diego County',
    blurb:
      'HighTech Appliance Repair helps La Jolla households with common appliance problems, from refrigerators to dishwashers and ovens. Call to confirm service availability in your neighborhood.',
    localInfo:
      'La Jolla is a coastal community where salt air and humidity can affect appliance finishes, seals, and coils over time. Refrigerators and dishwashers are frequent service requests here.',
    faqs: [
      {
        q: 'Do you service La Jolla and the coastal area?',
        a: 'Call with your address to confirm service availability before scheduling.',
      },
      {
        q: 'Can coastal humidity affect my refrigerator?',
        a: 'Yes. Humid air can stress condenser coils and door seals. Call if you notice cooling issues or frost buildup.',
      },
    ],
    metaTitle: 'Appliance Repair La Jolla, CA | HighTech Appliance Repair',
    metaDescription:
      'Appliance not working in La Jolla, CA? Call HighTech Appliance Repair at 858-399-8033 for refrigerator, dishwasher, and oven repair.',
  },
  {
    slug: 'escondido-ca',
    name: 'Escondido',
    county: 'San Diego County',
    blurb:
      'HighTech Appliance Repair helps Escondido households troubleshoot and repair common household appliances. Call to describe the problem and check service availability.',
    localInfo:
      'Escondido is an inland city in northern San Diego County with hot summer temperatures that can stress refrigerators and freezers. Washers and dryers are also common service requests here.',
    faqs: [
      {
        q: 'Do you service Escondido and the surrounding area?',
        a: 'Call with your address or ZIP code to confirm service availability before scheduling.',
      },
      {
        q: 'My refrigerator is warm during an Escondido heat wave — what should I do?',
        a: 'Call to arrange an inspection. Keep the doors closed as much as possible to hold temperature before service.',
      },
    ],
    metaTitle: 'Appliance Repair Escondido, CA | HighTech Appliance Repair',
    metaDescription:
      'Need appliance repair in Escondido, CA? Call HighTech Appliance Repair at 858-399-8033 for refrigerators, freezers, washers, and dryers.',
  },
  {
    slug: 'encinitas-ca',
    name: 'Encinitas',
    county: 'San Diego County',
    blurb:
      'HighTech Appliance Repair helps Encinitas households address appliance problems across refrigerators, washers, dishwashers, and more. Call to confirm service availability in your area.',
    localInfo:
      'Encinitas is a coastal North County community where humidity and salt air can affect appliance seals and finishes over time. Refrigerators, dishwashers, and washers are common service items here.',
    faqs: [
      {
        q: 'Do you service Encinitas and the coastal communities?',
        a: 'Call with your address to confirm whether service is available in your part of Encinitas.',
      },
      {
        q: 'My dishwasher is not cleaning well — can you help?',
        a: 'Yes. Call to describe the symptom. Clogged spray arms or a failing pump are common causes.',
      },
    ],
    metaTitle: 'Appliance Repair Encinitas, CA | HighTech Appliance Repair',
    metaDescription:
      'Appliance not working in Encinitas, CA? Call HighTech Appliance Repair at 858-399-8033 for refrigerator, dishwasher, and washer repair.',
  },
];

export const heroImage =
  'https://images.pexels.com/photos/38264265/pexels-photo-38264265.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
export const aboutImage =
  'https://images.pexels.com/photos/6870326/pexels-photo-6870326.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
export const sanDiegoImage =
  'https://images.pexels.com/photos/35120557/pexels-photo-35120557.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export function getServicesRelated(slug: string): Service[] {
  return services.filter((s) => s.slug !== slug).slice(0, 4);
}

export function serviceLocationPath(serviceSlug: string, locationSlug: string) {
  return `/${serviceSlug}-${locationSlug}`;
}

export function allServiceLocationPaths() {
  const paths: { serviceSlug: string; locationSlug: string; path: string }[] =
    [];
  for (const s of services) {
    for (const l of locations) {
      paths.push({
        serviceSlug: s.slug,
        locationSlug: l.slug,
        path: serviceLocationPath(s.slug, l.slug),
      });
    }
  }
  return paths;
}
