# Off-grid battery systems: domain research

## Purpose

This brief is a working model for writing useful, original RENOZ content about
Australian off-grid battery systems. It is not a design specification, an
installation instruction, or a substitute for a licensed designer and
electrician applying the current standards to a particular site.

The central editorial idea is simple: an off-grid system is not a battery with
solar attached. It is a small private electricity network. Its quality is
revealed on the difficult days—high simultaneous loads, low solar production,
extreme heat, equipment faults, generator failure, or a site visit that is
hours away.

## Domain model

An off-grid power system has six interacting layers:

1. **Demand** — appliances, motors, pumps, heating and cooling, workshop loads,
   communications and the behaviour of the people using them.
2. **Generation** — normally solar PV, sometimes wind or hydro, and usually a
   dispatchable generator where reliability matters.
3. **Storage** — battery cells, modules, racks, protection, current paths and
   the battery management system (BMS).
4. **Conversion and control** — solar charge controllers, inverter/chargers,
   meters, generator controls and the operating rules that coordinate them.
5. **Installation environment** — enclosure, temperature, dust, moisture,
   salt, vermin, fire separation, access, cabling and structural/weather
   exposure.
6. **Operations** — monitoring, alarms, maintenance, spare parts, remote
   support, recovery procedures and the people authorised to intervene.

These layers create several quantities that should not be collapsed:

- **Energy (kWh)** describes how much work can be supplied over time.
- **Power (kW)** describes how much can be supplied at once.
- **Surge capability** describes whether short motor or compressor starts can
  be carried.
- **Usable battery capacity** is smaller than nominal capacity and depends on
  permitted state-of-charge range, temperature, age and control settings.
- **Autonomy** is the time the site can operate without useful renewable input,
  at an agreed load and service level.
- **Reliability** includes generator availability, controls, protection,
  monitoring, maintenance and recovery—not only battery capacity.

The constraint can move. A battery may limit current before the inverter reaches
its nameplate output. A BMS may stop discharge to protect cells. A generator may
be large enough in kVA but unsuitable for nonlinear or changing loads. Solar may
be abundant annually yet insufficient across the site's worst seasonal sequence.

## System configurations

### Solar, battery and inverter

This is the simplest conceptual system. It can suit low-demand or deliberately
managed sites, but without dispatchable generation its reliability depends on
larger renewable and storage margins, low-load operating plans, and tolerating
reduced service after poor weather.

### Solar, battery, inverter/charger and generator

This is the common reliability architecture described by the Australian
Government's off-grid guidance. The generator is not merely an emergency
accessory. It may:

- carry unusually large loads;
- recharge after prolonged low solar production;
- protect the battery from excessive discharge;
- allow maintenance on part of the renewable system; and
- reduce the amount of battery and PV required for a chosen reliability target.

Control policy matters as much as generator size. Victron's first-party
documentation shows generator starts can be triggered by battery state of
charge, voltage or current, AC load, inverter temperature or overload, and
periodic exercise. Delays, quiet hours, minimum runtime, warm-up, cool-down and
service intervals change fuel use, noise, wear and reliability.

### DC-coupled solar

PV charges the battery through DC charge controllers; the inverter supplies AC
loads. This can reduce conversion steps when charging the battery and can keep
renewable charging available independently of an AC-coupled PV inverter. The
real design depends on compatible voltage windows, charge control, BMS
integration and fault protection.

### AC-coupled solar

A solar inverter supplies the AC bus, coordinated with an inverter/charger.
This can be useful when reusing compatible equipment or distributing generation,
but requires proven control of frequency, charging and generation curtailment
while islanded. “AC coupled” alone does not prove that two products interoperate.

### Hybrid or all-in-one inverter architecture

One product may combine PV inputs, battery conversion, grid/generator input and
control. This reduces component count but can concentrate failure modes and
make expansion, replacement and local service more model-dependent.

### Modular or parallel systems

Parallel batteries or inverters can add capacity, power or phase capability.
They do not automatically add fault tolerance. Shared controls, communications,
busbars, firmware, protection or installation errors can remain common points
of failure. Manufacturer-approved combinations, current-sharing rules and
commissioning procedures govern the result.

### Grid backup is not off-grid

A grid-connected battery that powers selected loads during an outage is a
different operating problem. An islandable system disconnects safely and
continues operating during an outage. A truly stand-alone system has no grid to
restore depleted storage, absorb surplus energy, stabilise the AC bus or mask a
design error. Content must keep these categories explicit.

## Sizing drivers

Good sizing begins with the service the site needs, not a preferred product.

### Load shape

Annual or daily kWh is only the first input. A useful load study records:

- each material appliance and its run time;
- daytime versus overnight use;
- seasonal changes;
- simultaneous loads;
- motor, compressor and pump starting behaviour;
- continuous critical loads such as refrigeration, communications or medical
  equipment;
- discretionary loads that can move into solar hours; and
- likely additions such as air conditioning, induction cooking, EV charging,
  extra pumps or a workshop.

Two homes with equal daily energy can need very different inverters, batteries
and generators. One may spread modest loads across a day; another may start a
bore pump while cooking and running air conditioning.

### Required service level

The design question is not simply “How many days of autonomy?” It is:

- What must remain powered?
- What can be deferred?
- How often is generator operation acceptable?
- Are quiet hours binding?
- What happens if the generator fails to start?
- How long can occupants wait for a technician?
- Is reduced-load operation acceptable during recovery?

A premium remote home, a staffed pastoral site and an unattended
telecommunications installation can rationally choose different redundancy and
autonomy for the same energy use.

### Solar resource and seasonal sequence

Average annual solar yield can hide the sequence that controls battery and
generator use. Array orientation, shading, soiling, temperature, seasonal
weather and consecutive low-yield days all matter. Oversizing PV can reduce
generator hours and improve winter recovery, but only within controller,
inverter and battery charge limits.

### Battery power and energy

Battery selection must satisfy both:

- enough usable energy for the agreed autonomy and depth-of-discharge policy;
  and
- enough charge/discharge current for the inverter, loads and recovery rate.

The BMS, number of parallel modules, cabling, protection and temperature may set
the available current. Selectronic explicitly warns that the managed battery
can determine the maximum output power available from an SP PRO system.

### Generator duty

Generator sizing must consider load supply and battery charging at the same
time, phase arrangement, starting currents, power quality, minimum efficient
loading, fuel storage, noise, service intervals and automated starting.
Repeated short runs or chronic light loading can be an operational failure even
where the generator starts successfully.

### Climate and location

Western Australia spans mild coastal and severe remote conditions. The Bureau
of Meteorology records a run of 43 days at or above 42°C in Marble Bar. Ambient
temperature, direct sun and heat accumulated inside an enclosure are different
measurements. Product operating limits do not prove full output, ideal battery
life or warranty coverage at the edge of those limits.

North-west sites also face cyclone exposure. Weather ingress, structural
fixing, windborne debris, access after an event and communications loss belong
in the operational design. Dust, salt, insects and rodents can be equally
consequential in ordinary operation.

### Expandability and replacement

“Expandable” needs a dated, model-specific answer:

- Can batteries of different age or firmware be combined?
- Does the BMS support the proposed module count?
- Are compatible modules likely to remain available?
- Can inverter capacity be added without replacing switchgear or controls?
- Who owns commissioning after expansion?

## Usage archetypes

### Remote family home

Drivers include comfort, refrigeration, water pumping, cooking, communications
and overnight air conditioning. The real design tension is lifestyle freedom
versus active load management and generator noise. Useful content follows a hot
evening, a cloudy morning, or guests increasing simultaneous demand.

### Rural property with pumps and workshop

Daily energy may look moderate while bore pumps, pressure pumps, welders or
compressors dominate instantaneous power. Productive work may be scheduled in
solar hours, or the generator may deliberately carry high-duty loads.

### Pastoral or agricultural operation

Power supports water, refrigeration, communications, staff accommodation and
equipment. Downtime can become animal welfare or production loss. Long travel
distances increase the value of remote diagnostics, serviceable layouts, spare
parts and clear degraded-operation procedures.

### Remote accommodation or tourism

Occupants do not behave like trained system operators. Loads vary with
occupancy, and guests expect ordinary appliance use. Controls and communications
must make safe behaviour easy without requiring guests to understand state of
charge.

### Small business or community facility

Opening hours, refrigeration, IT and safety systems create critical-load
classes. Reliability should be expressed as service continuity, not only energy
capacity. A recovery plan must work for the person actually on site.

### Unattended infrastructure

Telecommunications, monitoring, gates or water assets may use little energy but
need high availability. Parasitic loads, communications loss, remote reset,
alarm delivery and the cost of a site visit can dominate the design.

### Fringe-of-grid property considering disconnection

Avoided network work or unreliable supply may motivate stand-alone power.
Before disconnection, compare the grid's role as effectively unlimited backup
with the cost of owning generation, storage, fuel, maintenance and recovery.

## Failure and recovery model

Failures should be written as observable operating stories:

### Energy shortfall

The battery reaches its reserve after a low-solar sequence. Recovery may involve
automatic generator charging, temporary load shedding and verifying why the
forecast or use differed from design. Repeated events indicate a sizing,
settings, maintenance or behaviour problem.

### Power or surge shortfall

The inverter overloads or the BMS reaches a current limit when loads coincide.
Adding battery kWh may not solve it; the constraint could be inverter power,
battery current, phase allocation, motor starting or cabling.

### Generator fails to start or accept load

Possible causes include starter battery, fuel, controller, communications,
maintenance or AC quality. A recovery design provides a manual path, alarm,
load-reduction plan and escalation route. Remote start without an effective
stop rule can also leave a generator running indefinitely.

### Battery or BMS protection event

Low/high cell voltage, temperature, communication loss or current limits may
cause charge or discharge restriction. Bypassing protection is not a recovery
strategy. The safe response follows the battery and inverter manufacturers'
diagnostic procedures.

### Thermal derating

An inverter or battery reduces power in a hot enclosure. The system may work in
cool commissioning weather and fail during peak demand. Recovery involves
reducing load and addressing location, shade, airflow, clearances or equipment
selection within manufacturer and installation requirements.

### Communications or monitoring loss

The power system may continue locally while the owner loses visibility, or a
managed battery/inverter combination may restrict operation. Content should
state what continues autonomously, what alarms locally, what depends on the
internet and what a non-technical occupant can safely check.

### Installation hazard

WA prosecuted an off-grid installation where inverter/chargers near exposed
lead-acid batteries could ignite hydrogen produced during charging. The lesson
is chemistry- and system-specific installation design. It is not evidence that
LFP produces hydrogen or that all batteries share the same hazard mechanism.

### Recovery hierarchy

Useful designs describe recovery in this order:

1. keep people and property safe;
2. preserve critical loads if the system permits;
3. expose a clear local alarm/state;
4. allow bounded operator actions;
5. collect diagnostic evidence;
6. enable remote support where available; and
7. provide a service and replacement path.

## Editorial content opportunities

Original content should teach decisions using RENOZ's real engineering and
field knowledge, without disclosing customer information.

High-value article patterns include:

- “What happens on the third cloudy day?” using an explicit load profile,
  reserve and generator policy.
- Load diaries for a remote home, bore-pump property, workshop or tourism site.
- Why equal daily kWh can produce different battery and inverter designs.
- A timeline of an evening peak showing power, surge and energy separately.
- Generator policy: when it starts, what it carries, when it stops and how fuel
  and service hours change.
- Perth versus Pilbara equipment location: ambient heat, enclosure heat,
  weather and access.
- How to read a compatibility list and why matching “48 V” is insufficient.
- What remains operational when internet monitoring fails.
- Commissioning evidence a customer should receive.
- Degraded-operation plans for generator, solar, battery or communications
  faults.
- A pre-design appliance worksheet that captures duty cycle and simultaneous
  use rather than requesting only a power bill.
- A factual comparison of backup, islandable and stand-alone architectures.

The best evidence is first-party and concrete: anonymised load traces,
commissioning observations, dated manufacturer manuals, settings rationales,
generator-hour changes and site-specific weather assumptions. Label modelled
scenarios as models and field observations as observations.

## Claim boundaries

- Do not call a product compatible unless the exact battery, inverter, firmware,
  module count and market configuration are supported by current manufacturer
  documentation.
- Do not generalise one product's temperature, current, cycle, warranty or IP
  rating to LFP chemistry as a whole.
- Do not convert “operates at 50°C” into “delivers full power,” “will achieve
  normal life,” or “is suitable in an unshaded enclosure.”
- Do not present nominal kWh as usable delivered AC energy.
- Do not promise autonomy without stating load, usable state-of-charge window,
  solar assumption and generator policy.
- Do not promise “no generator” from annual solar averages.
- Do not imply grid-connected rebate, export, VPP or emergency-management rules
  apply to a genuinely stand-alone site.
- Do not infer detailed standards compliance from public summaries. The current
  purchased standards, product instructions, WA requirements and licensed
  practitioner's site design are authoritative.
- Do not describe a passing installation test as proof of long-term reliability.
- Keep lead-acid gas/ventilation hazards distinct from lithium-ion thermal and
  electrical hazards.
- Treat prices, rebates, supported-product lists and regulations as dated facts
  requiring re-verification at publication and periodic review.

## Primary sources

### Australian and Western Australian authorities

- [Australian Government: Design considerations](https://www.energy.gov.au/solar/solar-system-design/design-considerations)
- [Australian Government: Batteries](https://www.energy.gov.au/solar/get-know-solar-technology/batteries)
- [WA Building and Energy: Renewable energy systems fact sheet](https://www.wa.gov.au/government/publications/renewable-energy-systems-fact-sheet)
- [WA information for electrical licence holders and WAER](https://www.wa.gov.au/government/multi-step-guides/information-electrical-licence-holders)
- [WA BESS guide for electrical contractors (PDF)](https://www.wa.gov.au/system/files/2025-07/battery_energy_storage_systems_factsheet.pdf)
- [WA update: AS/NZS 5139 Amendment 1 and cable selection](https://www.wa.gov.au/government/announcements/updated-electrical-installation-standards-battery-systems-and-cable-selection)
- [WA prosecution: explosion risk at an off-grid installation](https://www.wa.gov.au/government/announcements/explosion-risk-south-west-electrical-work)
- [WA SWIS requirements from 1 May 2026](https://www.wa.gov.au/organisation/energy-policy-wa/new-requirements-small-scale-solar-and-battery-systems)

The last source is grid-connected SWIS policy. It must not be used as a source
for true stand-alone export or control requirements.

### Standards and climate

- [Standards Australia: AS/NZS 5139 battery installation safety](https://www.standards.org.au/news/positive-new-standard-for-battery-storage-sector)
- [Standards Australia: AS/NZS 5033 PV array design and safety](https://www.standards.org.au/blog/spotlight-on-installation-and-safety-requirements-for-photovoltaic-pv-arrays)
- [Standards Australia: AS/NZS 3000:2018 Wiring Rules](https://www.standards.org.au/news/2018-wiring-rules-are-now-available-for-licensed-electrical-practitioners)
- [AS/NZS 4509.2 stand-alone system design catalogue record](https://www.thenbs.com/publicationindex/documents/details?DocId=331018&Pub=SA%2FSNZ)
- [Bureau of Meteorology: Australian climate extremes](https://www.bom.gov.au/climate/extreme/records/about.shtml)
- [Bureau of Meteorology: tropical cyclone knowledge centre](https://www.bom.gov.au/resources/learn-and-explore/tropical-cyclone-knowledge-centre)
- [Bureau of Meteorology: cyclone geography explainer](https://www.bom.gov.au/video/understanding-tropical-cyclones)

Public standards pages identify scope but do not reproduce the normative
requirements. Detailed compliance claims require the current controlled text.

### Manufacturer engineering sources

- [Victron GX generator auto start/stop manual](https://www.victronenergy.com/media/pg/Generator_start_stop/en/gx---generator-auto-start-stop.html)
- [Victron ESS design and installation manual](https://www.victronenergy.com/media/pg/Energy_Storage_System/en/index-en.html)
- [Selectronic inverter manuals](https://www.selectronic.com.au/manuals/)
- [Selectronic managed battery integrations](https://www.selectronic.com.au/kits/managedbattery.html)
- [BYD Battery-Box downloads, including Australian documents](https://bydbatterybox.com/downloads)
- [BYD Battery-Box Premium LVL operating manual (model-specific PDF)](https://site.bydbatterybox.com/uploads/downloads/bydbatteryboxpremiumoperatingmanuallvlv10-5e7b20d0f39f3.pdf)
- [Deye product manual library](https://www.deyeinverter.com/download/product-manual/)

Manufacturer sources are authoritative only for the named product, manual
revision, supported combination and operating conditions. They do not replace
Australian installation requirements.
